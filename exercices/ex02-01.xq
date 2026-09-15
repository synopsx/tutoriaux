xquery version "3.1";
declare namespace tei = "http://www.tei-c.org/ns/1.0";
(:~
 : this function returns informations from Wikidata entities
 :)
(: "https://www.wikidata.org/w/api.php?action=wbgetclaims&entity="||  $entity ||"&property=P31&format=xml" :)


declare function getPerson($entity) {
    let $response := doc("https://www.wikidata.org/w/api.php?action=wbgetclaims&amp;entity="||  $entity ||"&amp;property=P31&amp;format=xml")
    return 
        <person>
            <persName>{$response}</name>
            <birth>
                <date>{$response}</date>
                <place>{$response}</place>
            </birthDate>
            <deathDate>
                <date>{$response}</date>
                <place>{$response}</place>
            </deathDate>
        <person>
};

declare function getPlace($entity) {
    let $response := doc('https://www.wikidata.org/wiki/Special:EntityData/' || $entity || ".rdf")
    return 
        <place>
            <placeName>{$response}</name>
            <location>
                <geo>{$response}</geo>
            </location>
        </place>
};


for $entity in fn:doc("../data/Favier/Centuries1555_Mace_Bonhomme.xml")
return if ($entity/name() = 'placeName') then getPlace($entity) else getPerson($entity)