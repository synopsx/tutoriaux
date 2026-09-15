xquery version "3.1";
declare namespace tei = "http://www.tei-c.org/ns/1.0";
(:~
 : 
 :)
let $doc := fn:doc("../data/Favier/Centuries1555_Mace_Bonhomme")
return $doc
