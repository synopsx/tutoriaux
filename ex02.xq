xquery version "3.1";
declare namespace tei = "http://www.tei-c.org/ns/1.0";
declare namespace sparql = "http://www.w3.org/2005/sparql-results#";
declare namespace rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
declare namespace rdfs = "http://www.w3.org/2000/01/rdf-schema#";
declare namespace wdt = "http://www.wikidata.org/prop/direct/";

(: 
    https://www.wikidata.org/w/rest.php/wikibase/v1/entities/items/
:)

(:
    https://query.wikidata.org/sparql?query=
:)

(:
        SELECT ?place ?placeLabel ?coord
        WHERE {
           BIND(wd:" || $qid || " AS ?place)
           OPTIONAL { ?place wdt:P625 ?coord. }
           SERVICE wikibase:label { bd:serviceParam wikibase:language " || '"fr,en"' || ". }
        }
 :)


(:

        SELECT ?person ?personLabel ?dateOfBirth ?placeOfBirthLabel ?coordBirth
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
         }

:)

(:~
 : this function returns informations about a person from Wikidata
 : @param $entity 
 : @return a TEI element with name, birth and death
 :)
declare function getPerson($persName) {
  let $id := fn:substring-after($persName/@ref, "wdt:")
  let $response := ''
  return
   <person ref="{$id}">
     <persName>{}</persName>
     <birth>
       <date>{}</date>
       <place>
         <placeName>{}</placeName>
         <location>
           <geo>{}</geo>
         </location>
       </place>
     </birth>
     <death>
       <date>{}</date>
       <place>
         <placeName>{}</placeName>
         <location>
           <geo>{}</geo>
         </location>
       </place>
     </death>
   </person>
 };
 

(:~
 : same as getPlace, but using Wikibase SPARQL endpoint
 : @param $entity
 : @return a TEI element with name and coordinates
 :)
declare function getPlace($entity as element(tei:placeName)) {
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

let $doc := doc("/Users/emmanuelchateau/synopsx/tutoriaux/data/Favier/Centuries1555_Mace_Bonhomme.xml")
for $entity in $doc//(tei:placeName|tei:persName)
return 
  if ( $entity/name() = 'placeName' ) 
  then getPlace($entity) 
  else getPerson($entity)


