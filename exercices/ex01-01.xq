xquery version "3.1";
    
    declare namespace tei = "http://www.tei-c.org/ns/1.0";
  

    for $vedettte in collection("../data/Garcia-Rodriguez")//tei:body/tei:entry
    order by $vedettte/tei:form/tei:form/tei:orth
    return $vedettte
