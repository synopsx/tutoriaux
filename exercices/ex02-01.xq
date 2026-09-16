xquery version "3.1";
declare namespace tei = "http://www.tei-c.org/ns/1.0";
declare namespace sparql = "http://www.w3.org/2005/sparql-results#";
declare namespace rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
declare namespace rdfs = "http://www.w3.org/2000/01/rdf-schema#";
declare namespace wdt = "http://www.wikidata.org/prop/direct/";

(:~
 : this function returns informations about a person from Wikidata
 : @param $entity 
 : @return a TEI element with name, birth and death
 :)
declare function getPerson($entity as element(tei:persName)) {
    let $qid := substring-after($entity/@ref, ":")
    let $request :=
        <http:request method="get">
            <http:header name="Accept" value="application/sparql-results+xml"/>
            <http:header name="User-Agent" value="SynopsxTutorial/1.0 (https://github.com/synopsx/tutoriaux)"/>
        </http:request>
    let $sparql :=
        "SELECT ?person ?personLabel ?dateOfBirth ?placeOfBirthLabel ?coordBirth
                ?dateOfDeath ?placeOfDeathLabel ?coordDeath
         WHERE {
           BIND(wd:" || $qid || " AS ?person)
           OPTIONAL { ?person wdt:P569 ?dateOfBirth. }
           OPTIONAL {
             ?person wdt:P19 ?placeOfBirth.
             OPTIONAL { ?placeOfBirth wdt:P625 ?coordBirth. }
           }
           OPTIONAL { ?person wdt:P570 ?dateOfDeath. }
           OPTIONAL {
             ?person wdt:P20 ?placeOfDeath.
             OPTIONAL { ?placeOfDeath wdt:P625 ?coordDeath. }
           }
           SERVICE wikibase:label { bd:serviceParam wikibase:language " || '"fr,en"' || ". }
         }"
    let $href := "https://query.wikidata.org/sparql?query=" || fn:encode-for-uri($sparql) || "&amp;format=xml"
    let $response := http:send-request(
            $request,
            $href)
    let $result := $response[2]//sparql:result[1]
    return
        <person ref="{$qid}">
            <persName>{$result/sparql:binding[@name = "personLabel"]/sparql:literal/text()}</persName>
            <birth>
                <date>{$result/sparql:binding[@name = "dateOfBirth"]/sparql:literal/text()}</date>
                <place>{$result/sparql:binding[@name = "placeOfBirthLabel"]/sparql:literal/text()}</place>
                <geo>{$result/sparql:binding[@name = "coordBirth"]/sparql:literal/text()}</geo>
            </birth>
            <death>
                <date>{$result/sparql:binding[@name = "dateOfDeath"]/sparql:literal/text()}</date>
                <place>{$result/sparql:binding[@name = "placeOfDeathLabel"]/sparql:literal/text()}</place>
                <geo>{$result/sparql:binding[@name = "coordDeath"]/sparql:literal/text()}</geo>
            </death>
        </person>
};

(:~
 : this function returns informations about a place from Wikidata using the Wikibase legacy API
 : @param $entity 
 : @return a TEI element with name, birth and death
 :)
declare function getPlace($entity) {
    let $qid := substring-after($entity/@ref, ":")
    let $response := doc("https://www.wikidata.org/wiki/Special:EntityData/" || $qid || ".rdf")
    return
        <place ref="{$qid}">
            <placeName>{($response//rdf:Description[@rdf:about = "http://www.wikidata.org/entity/" || $qid]/rdfs:label[@xml:lang = "fr"], $response//rdf:Description[@rdf:about = "http://www.wikidata.org/entity/" || $qid]/rdfs:label[@xml:lang = "en"])[1]/text()}</placeName>
            <location>
                <geo>{$response//rdf:Description[@rdf:about = "http://www.wikidata.org/entity/" || $qid]/wdt:P625[1]/text()}</geo>
            </location>
        </place>
};

(:~
 : same as getPlace, but using the new Wikibase REST API
 : (https://doc.wikimedia.org/Wikibase/master/js/rest-api/) instead of the full RDF dump
 : @param $entity
 : @return a TEI element with name and coordinates
 :)
declare function getPlaceRest($entity as element(tei:placeName)) {
    let $qid := substring-after($entity/@ref, ":")
    let $request :=
        <http:request method="get">
            <http:header name="Accept" value="application/json"/>
            <http:header name="User-Agent" value="SynopsxTutorial/1.0 (https://github.com/synopsx/tutoriaux)"/>
        </http:request>
    let $base := "https://www.wikidata.org/w/rest.php/wikibase/v1/entities/items/" || $qid
    let $labels := http:send-request($request, $base || "/labels")[2]
    let $coord := http:send-request($request, $base || "/statements?property=P625")[2]
    return
        <place ref="{$qid}">
            <placeName>{($labels/*/fr, $labels/*/en)[1]/text()}</placeName>
            <location>
                <geo>Point({$coord/*/P625/_/value/content/longitude/text() || " " || $coord/*/P625/_/value/content/latitude/text()})</geo>
            </location>
        </place>
};

(:~
 : same as getPlace, but using Wikibase SPARQL endpoint
 : @param $entity
 : @return a TEI element with name and coordinates
 :)
declare function getPlaceSparql($entity as element(tei:placeName)) {
    let $qid := substring-after($entity/@ref, ":")
    let $request :=
        <http:request method="get">
            <http:header name="Accept" value="application/sparql-results+xml"/>
            <http:header name="User-Agent" value="SynopsxTutorial/1.0 (https://github.com/synopsx/tutoriaux)"/>
        </http:request>
    let $sparql :=
        "SELECT ?place ?placeLabel ?coord
         WHERE {
           BIND(wd:" || $qid || " AS ?place)
           OPTIONAL { ?place wdt:P625 ?coord. }
           SERVICE wikibase:label { bd:serviceParam wikibase:language " || '"fr,en"' || ". }
         }"
    let $href := "https://query.wikidata.org/sparql?query=" || fn:encode-for-uri($sparql) || "&amp;format=xml"
    let $response := http:send-request(
            $request,
            $href)
    let $result := $response[2]//sparql:result[1]
    return
        <place ref="{$qid}">
            <placeName>{$result/sparql:binding[@name = "placeLabel"]/sparql:literal/text()}</placeName>
            <location>
                <geo>{$result/sparql:binding[@name = "coord"]/sparql:literal/text()}</geo>
            </location>
        </place>
};


(:
    | Méthode           | Moyenne           | Plage         |
    ---------------------------------------------------------
    | getPlaceSparql	| ≈ 355 ms	        | 144–516 ms    |
    | getPlaceRest	    | ≈ 457 ms          | 396–532 ms    |
    | getPlace (RDF)    | ≈ 3425 ms	        | 1881–5916 ms  |
:)

let $doc := fn:doc("../data/Favier/Centuries1555_Mace_Bonhomme.xml")
for $entity in $doc//(tei:persName | tei:placeName)
where $entity/@ref
return 
    if ($entity/name() = 'placeName') 
    then getPlaceSparql($entity) 
    else getPerson($entity)