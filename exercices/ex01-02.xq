xquery version "3.1";

declare namespace tei = "";
(:~
 : 
 :)
let $docs := doc("../data/Garcia-Rodriguez.xml")
    return $data//tei:entry/tei:form//tei:orth