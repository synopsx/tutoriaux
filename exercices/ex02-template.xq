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

(:~
 : same as getPlace, but using Wikibase SPARQL endpoint
 : @param $entity
 : @return a TEI element with name and coordinates
 :)


''