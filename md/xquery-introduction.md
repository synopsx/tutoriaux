---
title: Introduction à XQuery
since: 2017-07-07
author: emchateau
tags: xquery, tutoriel
---

# Introduction à XQuery

<dia-only state="centered">
# 01 | Introduction à XQuery</br>
ENS Lyon – septembre 2026
</dia-only>

<dia-both>
[XQuery](https://www.w3.org/TR/xquery-31/) est un langage de requêtes et un langage de programmation fonctionnelle destiné à interroger et transformer des collections de données structurées et non structurées, principalement sous la forme de XML.

</dia-both>

> XML is a versatile markup language, capable of labeling the information content of diverse data sources including structured and semi-structured documents, relational databases, and object repositories. A query language that uses the structure of XML intelligently can express queries across all these kinds of data, whether physically stored in XML or viewed as XML via middleware. This specification describes a query language called XQuery, which is designed to be broadly applicable across many types of XML data sources.[^1][^2][^3]

Depuis la version 3, XQuery prend également en charge le format léger d’échange de données JSON en ajoutant les *maps* et les *arrays* au modèle de données et en fournissant de nouvelles expressions et fonctions. La [version 4](https://qt4cg.org/specifications/xquery-40/) du langage (en cours de développement) introduit une extension de XPath pour les objets JSON. [XQuery](https://www.w3.org/TR/xquery-31/) est donc applicable à un grand nombre de sources de données qu’elles soient encodées en XML ou représentée en JSON, en CSV ou au format texte. 

Le langage opère notamment sur le modèle de données XML ([XML Data Model (XDM)](https://www.w3.org/TR/xpath-datamodel-31/)). Là où XSLT est destiné à transformer des données XML, XQuery est principalement destiné à faire des recherche dans des données XML. Il s’utilise habituellement avec une base de données XML capable d’indexer les nœuds d’un document XML. Mais c’est aussi un langage de programmation *turing complet* qui peut être utilisé dans de nombreuses applications. XQuery est principalement efficace lorsqu’il s’agit de manipuler ou de concilier des données de différents genre.

<!-- @todo revoir la formulation -->

<dia-both>
## Historique

> The mission of the *XML Query* working group is to **provide flexible query facilities** to extract data from real and virtual documents on the World Wide Web, therefore finally providing the needed interaction between the Web world and the database world. Ultimately, collections of XML files will be accessed like databases. ([Mission statement of the XML Query working group](https://www.w3.org/XML/Query/))

</dia-both>

<dia-both>
### Spécifications

- [XQuery 1.0](http://www.w3.org/TR/xquery-10/) recommandation du W3C le 23 janvier 2007
- [XQuery 3.0](https://www.w3.org/TR/xquery-30/) recommandation du W3C le 8 avril 2014
- [XQuery 3.1](https://www.w3.org/TR/xquery-31/) recommandation du W3C le 21 mars 2017
- [XQuery 4.0](https://qt4cg.org/specifications/xquery-40/) proposition de recommandation du qt4, 2026. 

Voir aussi les spécifications XPath et XDM concernées

</dia-both>

<!-- @todo revoir + mentionner les spécifications XPath et XDM concernée -->

XQuery est un langage hôte de [XPath](https://www.w3.org/TR/xpath-31/). Ainsi, XPath est généralement un sous-ensemble de XQuery. Autrement dit, **toute expression XPath sera une expression XQuery valide**. Le langage XQuery apporte toutefois un certain nombre de fonctionnalités pour requêter et manipuler des données XML. La version 3.1 du langage étend XQuery pour travailler sur des données JSON en ajoutant des types *maps* et *arrays* au langage.

<dia-both>
### Extensions

- [XQuery Full Text](https://www.w3.org/TR/xpath-full-text-30/)
- [XQuery Update](https://www.w3.org/TR/xquery-update-30/)
- [RESTXQ](http://exquery.github.io/exquery/exquery-restxq-specification/restxq-1.0-specification.html)

</dia-both>

Plusieurs extensions de XQuery peuvent s’avérer utiles : XQuery Update est destinée à faciliter la mise à jour de documents XML, XQuery Full-text sert à faire des recherches dans des chaînes de caractères. RestXQ propose une extension destinée à faciliter la réalisation d’applications REST.

<dia-both>
## Caractéristiques du langage

- Langage fonctionnel
- Turing complet
- Analogue à SQL
- Fondé sur XPath
- Standardisé par le W3C

</dia-both>

<dia-both>
**L’évaluation de toute expression XQuery renvoie une séquence.** Dans le [XML Data Model (XDM)](https://www.w3.org/TR/xpath-datamodel-31/), toutes les expressions XPath ramènent une séquence. Une séquence se compose de zéro, un ou plusieurs items. Les items peuvent être des littéraux, des valeurs atomiques ou des fonctions.

</dia-both>

## Rappels XPath

### Syntaxe des littéraux

Entier (*integer*)

```xquery
1
```

Chaîne de caractères (*string*)

```xquery
'ceci est une chaîne de caractères'
```

```xquery
"ceci est une chaîne de caractères"
```

Séquence (*sequence*)

```xquery
1, 2, 3
```

```xquery
(1, 2, 3)
```

### Appels de fonction

```xquery
string(16)
```

Concaténations et conversions

```xquery
string(16+1)
```

```xquery
concat((16+1),  1)
```

```xquery
fn:concat('e', 1)
```

```xquery
'e' || 1
```

### Expression arithmétique

```xquery
1 + 1 + 1
```

### Test logique

```xquery
true() != false()
```

```xquery
(1+1) = 2
```

### Expression conditionnelle

```xquery
if (1 = 1) then 'oui' else 'non'
```

<dia-both>
## Forme des commentaires XQuery

XQuery est un langage souriant ! Les commentaires sont délimités par les digrammes `(:` et `:)`.

```xquery
(: ceci est un commentaire :)
```

```xquery
(:
 : Ceci est un commentaire multiligne
 :)
```

</dia-both>

<dia-both state="intertitre" bg="#1a1a2e">
## Expressions FLOWR

</dia-both>

<dia-both>
## Les expressions FLOWR

- `for` itère sur une séquence de nœuds ou d’éléments (boucle)
- `let` déclare une variable et lui assigne une valeur ou un résultat
- `where` filtre les éléments selon un ou plusieurs critères
- `order by` trie les résultats selon un ordre spécifique (croissant ou décroissant)
- `return` définit la structure et le contenu du résultat final à afficher
</dia-both>

XQuery ajoute à XPath un certain nombre d’instructions spécifiques destinées à structurer des requêtes. On parle d’expression FLOWR pour décrire les cinq clauses principales : `for`, `let`, `where`, `order by` et `return`.

- `for` itère sur une séquence de nœuds ou d’éléments (boucle)
- `let` déclare une variable et lui assigne une valeur ou un résultat
- `where` filtre les éléments selon un ou plusieurs critères
- `order by` trie les résultats selon un ordre spécifique (croissant ou décroissant)
- `return` définit la structure et le contenu du résultat final à afficher

Les clauses `for` et `let` peuvent être utilisées plusieurs fois ou être combinées ensemble. Toute expression FLOWR doit nécessairement se terminer par une clause `return`. Les clauses `where` et `order by` sont facultatives.

<dia-both>
### Affecter et retourner une variable

```xquery
let $var := 'Salut !'
return $var
```
e

```xquery
let $var := 'Salut !'
return $var || ' c’est le fun'
```

</dia-both>

<dia-both>
### Mettre $var dans un élément XML

```xquery
let $var := 'texte'
return 
		<p>{$var}</item>
```

</dia-both>

<dia-both>
### Utilisation d’une boucle `for`

```xquery
for $i in (1, 2, 3)
return $i
```

```xquery
for $i in (1, 2, 3)
return $i * $i
```
</dia-both>

<dia-both>
```xquery
for $i in (1, 2, 3)
return if ($i mod 2 = 0) then $i * $i
```
Avec une clause `let`

```xquery
let $seq := (3, 2, 1)
for $i in $seq
return $i + 1
```
</dia-both>

<dia-both>
### Utilisation de `order by`

```xquery
let $seq := (3, 2, 1)
for $i in $seq
order by $i
return $i 
```

```xquery
let $seq := (3, 2, 1)
for $i in $seq
order by $i ascending (: descending :)
return $i 
```

</dia-both>


<dia-both>
Travail avec un document XML

```xquery
let $document := fn:doc("tei.xml")
for $persName in $document//tei:persName
where $persName/@id
order by $persName/@id
return $persName/text()
```

La clause `where` filtre les résultats

</dia-both>

## Création des nœuds XML

Le XML Data Model définit 7 types de nœuds. En XQuery, il est possible de créer des nœuds en utilisant des **constructeurs directs** (littéraux) ou bien en les computant.

<dia-both>
## Création des nœuds XML

Constructeurs directs

```xquery
<p/> (: constructeur direct d’un élément XML p :)
<p xml:id="id01"/> (: constructeur direct d’un élément XML p vide avec un attribut @id qui avec la valeur id01 :)
```

Éléments computés

```xquery
element p { '' } (: computation d’un élément XML p vide :)
element p {
	attribute xml:id { 'id01' }
	''
} (: computation d’un élément XML p vide avec un attribut @id qui avec la valeur id01 :)
```
</dia-both>

<dia-both>
### Générer une séquence d’éléments XML

```xquery
let $seq := (3, 2, 1)
for $i in $seq
return <item>{$i}</item>
```
</dia-both>

<dia-both>
Pour obtenir un document XML valide

```xquery
<liste>{
	let $seq := (3, 2, 1)
	for $i in $seq
	return <item>{$i}</item>
}</liste>
```

```xquery
let $content := 
  let $seq := (1, 2, 3)
  for $i in $seq
  return <item>{$i}</item>
return <liste>{$content}</liste>
```
</dia-both>

<dia-both state="intertitre" bg="#1a1a2e">
## Les fonctions

<dia-both>

<dia-both>
### Définition d’une fonction

```xquery
declare function nomDeFonction($param) {
	'corps de la fonction'
};
```

Appels de fonction

```xquery
nomDeFonction($param)
```

</dia-both>

<dia-both>
### Typage de la fonction

```xquery
declare function local:toto($param as xs:integer, $param2 as xs:string) as element()* {
  <div>{
    (<p>je suis une fonction</p>,
    <p>{$param}</p>,
    <p>{$param2}</p>,
    $param3)
   }</div>
};
local:toto(1, 'string', <element>element</element>)
```

</dia-both>

```xquery
declare function local:toto($param as xs:integer, $param2 as xs:string) as element() {
  <div>
	<p>je suis une fonction ressource </p>
    <p>{$param}</p>
    <p>{$param2}</p>
  </div>
};
local:toto(1, 'string')
```

<dia-both state="intertitre" bg="#1a1a2e">
## Travail avec la base de données

</dia-both>

<dia-both>
La création d’une base de données

```xquery
db:get('gdp')
```

```xquery
db:get('gdp')//*:title
```

```xquery
let $get := db:get('gdp')
return $gdp//*:title
```
</dia-both>

<dia-both>
```xquery
let $gdp := db:get('gdp')
for $titre in $gdp/*:title
return <h1>{$titre}</h1>
```

</dia-both>

<dia-both>
```xquery
declare function local:titreGdp() {
  let $gdp := db:get('gdp')
  for $title in $gdp//*:title
  return <h1>{$title//text()}</h1>
};
local:titreGdp()
```

</dia-both>

<dia-both>
```xquery
declare function local:titreGdp( $edition ) {
  let $gdp := db:get('gdp')
  for $title in $gdp//*:title
  return <h1>{$title//text()}</h1>
};
local:titreGdp('gdpBrice1684')
```

</dia-both>

<dia-both state="intertitre" bg="#1a1a2e">
## Modules

<dia-both>

</dia-both>

<dia-both>
Créer un module, enregistrer le dans `webapp/`

```xquery
xquery version "3.0" ;
module namespace local = "local" ;
declare 
  %restxq:path('mapage')
function local:toto($param as xs:integer, $param2 as xs:string, $param3 as element()) as element()* {
  <div>
    (<p>je suis une fonction</p>,
    <p>{$param}</p>,
    <p>{$param2}</p>,
    {$param3})
  </div>
};
```

</dia-both>

Aller à localhost:8984

@todo montrer exemple sans param

<dia-both>
ajouter les variables

```xquery
xquery version "3.0" ;
module namespace local = "local" ;
declare 
  %restxq:path('mapage')
function local:toto($param as xs:integer, $param2 as xs:string, $param3 as element()) as element()* {
  <div>
    (<p>je suis une fonction</p>,
    <p>{$param}</p>,
    <p>{$param2}</p>,
    {$param3})
  </div>
};
```

</dia-both>

<dia-both>
```xquery
xquery version "3.0" ;
module namespace local = "local" ;
declare 
  %restxq:path('/mapage/{$param}/{$param1}')
function local:toto($param as xs:string, $param2 as xs:string) {
  <div>
    (<p>je suis une fonction</p>,
    <p>{$param}</p>,
    <p>{$param2}</p>,
    {$param3})
  </div>
};
```

</dia-both>

<dia-both>
```xquery
xquery version "3.0" ;
module namespace local = "local"; 

declare 
  %restxq:path('unchemin/{$edition}')
  %output:method("html")
  %output:html-version("5.0")
function local:titreGdp($edition as xs:string) {
  let $gdp := db:open('gdp')
  for $titre in $gdp//*:TEI[*:teiHeader/*:fileDesc/*:sourceDesc[@xml:id=$edition]]//*:head
  return <h1>{fn:normalize-space($titre)}</h1>
};
```

</dia-both>

<dia-both state="intertitre" bg="#1a1a2e">
## Ressources utiles

</dia-both>

<dia-both>
## Tutoriaux

- http://www.tutorialspoint.com/xquery/xquery_quick_guide.htm
- https://www.ibm.com/docs/en/db2-for-zos/11?topic=zos-xml
- https://docs.basex.org/main/XQuery

</dia-both>

## Notes

[^1]: http://www.w3.org/TR/xquery-10/
[^2]: http://www.w3.org/TR/xquery-30/
[^3]: http://www.w3.org/TR/xquery-31/
