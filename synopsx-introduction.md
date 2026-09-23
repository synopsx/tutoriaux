---
title: Introduction SynopsX
author: emchateau
since: 2026-09-15
tags: xquery, ressources
---

# SynopsX

SynopsX est un cadre léger de pulication XML développé de manière collaborative dans le contexte de l’atelier des humanités numériques de Lyon de 2012 à 2015. Le logiciel est actuellement employé dans le cadre de plusieurs projets d’édition critique.

<dia-only>
# Un cadre léger de publication et d’exposition de données XML

- Faciliter la publication et l’exposition de corpus de données XML
- Flexible et personnalisable
- Une application XQuery fondée sur l’utilisation de BaseX

## Exemples fonctionnels
- Lettres de Juliette Drouet (2025)
- http://editions.ihpc.huma-num.fr
- http://rey.huma-num.fr
- http://montesquieu.huma-num.fr
- http://www.guidesdeparis.fr (2023)
</dia-only>

### Un cadre léger de publication XQuery pour publier et exposer des données XML

Initié par l’Atelier des humanités numériques de l’ENS Lyon en 2013-2014, SynopsX est un cadre de publication léger pour publier et exposer des corpus XML sur le web.

Il s’agit d’une application XQuery utilisant la base de données XML native et le processeur XQuery BaseX. Les sources du projet sont publiées sous GNU sur GitHub (https://github.com/ahn­ens­lyon/synopsx et https://github.com/synopsx).

SynopsX a été conçu comme une solution flexible, facilement personnalisable pour la publication HTML5 de fichiers XML (TEI, EAD…). 

- Il permet un contrôle total sur le schéma d’URL afin de construire de véritables applications REST, et peut être utilisé pour exposer des corpus XML dans le cadre du Linked Open Data.
- Le logiciel propose un système de gabarits (templating) pour divers rendus des ressources, selon des correspondances prédéfinies ou personnalisées entre les données XML et les formats de sortie.

Comme différents partenaires ont participé au développement, trois principes ont guidé la conception du logiciel : la collaboration, la mutualisation et la généricité. À tout le moins, on peut dire que SynopsX est un exemple fécond de collaboration non institutionnelle autour du développement d’un logiciel open source dans le domaine de la TEI.

Exemples fonctionnels en ligne :

- http://editions.ihpc.huma-num.fr
- http://rey.huma-num.fr
- http://montesquieu.huma-num.fr
- http://ampere.dev.huma-num.fr (2016 plus en ligne)
- http://www.guidesdeparis.fr (2023)
- Lettres de Juliette Drouet (2025)

Exemple OAI-PMH
- http://editions.ihpc.huma-num.fr/hyperdonat/oai?verb=ListSets

<dia-only>
# Pourquoi SynopsX

## Collaboration
- recherche par projet
- qualité du code et bonnes pratiques

## Mutualisation
- ne pas réinventer la roue
- partager les développements et les ressources

## Généricisation
- maintenabilité
- réusabilité

</dia-only>

Comme différents partenaires ont participé au développement, trois principes ont guidé la conception du logiciel : la **collaboration**, la **mutualisation** et la **généricité**. La mise en commun autour des développements a permis de contourner plusieurs limitations propres à la recherche par projet, d’améliorer la qualité du code et de favoriser l’adoption de bonnes pratiques. Les mutualisations ont permis de mettre en commun des solutions et de favoriser la soutenabilité du logiciel. Enfin, les développements ont gagné en généricité ce qui facilite leur réutilisation et permet une meilleure pérennité des éditions. On peut dire que **SynopsX** est un exemple fécond et durable de collaboration en milieu universitaire fondé sur le modèle du logiciel libre et open source.

## Un solution libre et open Source

<dia-only>
# Une solution libre et open source

- cadre de publication léger
- fondée sur l’utilisation des technologies XML (XQuery, BaseX)
- publié sous licence libre GNU GPL

- concision du code
- schème d’URI personnalisable
- appel de XSLT ou utilisation de sérialisation XQuery
- système de templating
- moteur de recherche

</dia-only>

**Synopsx est un cadre de publication léger**, entièrement fondé sur des technologies XML à partir de la base de données XML native BaseX. Le projet est développé comme logiciel libre par une équipe de plusieurs contributeurs issus du monde académique. Il est basé sur les fonctionnalités RESTXQ implémentées par BaseX. 

**Le code du logiciel se caractérise par son extrême concision et son caractère modulaire.** Il est donc très aisé de se l’approprier et de l’adapter à ses propres besoins. 

**Le code du logiciel se caractérise par son extrême concision et son caractère modulaire.** Il est donc très aisé de se l’approprier et de l’adapter à ses propres besoins. Ce logiciel, est utilisé en production pour différentes applications web de l’École normale supérieure de Lyon, le projet des Guides de Paris notamment, l’Université de Montréal ou la Chaire d’excellence en édition numérique de l’Université de Rouen.

Les sources du projet sont publiées sous GNU sur GitHub (<https://github.com/synopsx/>).

Dans son état actuel, le logiciel permet :

- une publication personnalisée de sources XML
- d’articuler la publication de sources dans des formats différents (XML-TEI, EAD, etc.)
- la liberté de définir un schème d’URL
- un système de templating
- de disposer d’un moteur de recherche sommaire

## Une pile technologique XML uniforme

<dia-both>
### Applications traditionnelles

![Architecture traditionnelle](../images/xmlStackTradiBis.svg)

</dia-both>

Plusieurs approches ont été proposées pour publier des corpus TEI en ligne, mais aucune solution standard ne s’est imposée. Après avoir balisé une édition, la publication d’une édition numérique reste problématique pour nombre de projets en humanités numériques. Lorsque l’on envisage la publication de corpus XML en ligne, il est souvent nécessaire d’avoir recours à des technologies hétérogènes telles que SQL, PHP, JavaScript et évidemment HTML et CSS.

<dia-both>
### Une pile de technologies uniforme

![Une pile technologique entièrement XML](../images/xmlStackXQueryBis.svg)

</dia-both>

SynopsX utilise **une pile technologique uniforme basée sur XML**. Ce cadre de travail s’appuie notamment sur l’utilisation d’une base de données XML native libre et open source, [BaseX](https://basex.org). L’utilisation d’une base de données XML permet notamment de préserver les structures de données XML, de pouvoir travailler avec des spécifications de schémas, ainsi que de l’utilisation des technologies XML comme interface de manipulation de données (XPath, XQuery, etc.).

Par rapport à un traitement des fichiers à plat, l’utilisation d’une base de données XML est souvent beaucoup plus efficiente pour des manipulations de données complexes grâce à l’indexation des structures de données XML.

### Intérêt des bases de données XML

<dia-only>
# Utilisation de BaseX

- préservation des structures XML
- Stockage XML en utilisant des spécifications schémas
- Indexing des structures de données
- Accès aux documents par l’intermédiaire des API

</dia-only>

L’aptitude des systèmes de bases de données XML natifs à manipuler des documents XML permet d’envisager leur utilisation pour remplacer les systèmes de base de données relationnelles dans le cadre de la production d’applications web dynamique. Dans un environnement LAMP (Linux, Apache, MySql, PHP), ils peuvent par exemple judicieusement remplacer MySql. Cependant ces systèmes étant généralement développés en Java, ils impliquent de disposer d’un environnement adapté pour les déployer.

La plupart des systèmes de bases de données XML natifs proposent des fonctionnalités de type serveur qui permettent la construction d’applications web entièrement rédigées en XQuery. De ce point de vue, ils constituent souvent des solutions simples et adaptées pour la publications de sources XML lorsque l’on maîtrise les langages de la famille XML (XQuery, XPath, XSLT). Une solution de ce type permettant ainsi de se passer complètement de tout autre langage de programmation. C’est ce qui explique en grande partie la faveur actuelle de ces systèmes pour la publication de données XML-TEI.

As you may know, various solutions have been developped to use XML data

- flat storage of XML files
- use of relationnal databases
- native storage of XML data in native XML systems

Flat storage is the far most simple solution. The full XML document stands for the main entity, inner structures playing no role.

This solution can be implemented with any file sytem. If the storage is unexpensive and efficient, some others tasks as search requires access to the inner structures of the document and then becomes prohibitives.

XML data can also be stored into relationnal databases. Thus it can benefit from indexing fonctionnalities, trading and query optimisation offered by these systems.

Thus as XML are semi-structured data, the conversion to a relational model is not either efficient nor always possible because of the significant differences inherent to their respective models.
These conversions generaly implies costfull joints for requests.

Native XML storage have the advantage to preserve XML document structures (elements, attributes, entities).
They can store XML documents using the Schema specification.
They allow document access throught XML technologies as XPath, XQuery, etc.

cf. http://www.rpbourret.com/xml/ProdsNative.htm

As they were specialy conceived to deal with XML data, native XML database have the advantage not to require any conversion operations.
Storage techniques and treatment of request in use with XML database are often more efficient than those based on flat file storage or relational databases.

Many indexes facilitates access to structure and data.
And fonctionnalities usually follows XML standard conformance and standard implementation ; especially XSL, XProc, Xforms, XLink, etc.

<dia-both>
# The [BaseX](http://basex.org/) components and APIs

![BaseXserver](./images/basexAPIs.svg)

</dia-both>

You can connect BaseX coponents to work in many different ways.
- Use the BaseX Gui
- Use the BaseX client
- Use the BaseX serveur
- Work with Oxygen by webdav
- Access your data with HTTP
- Access your data with REST

So you can create a database
- locally : via BaseX GUI ; via le client BaseX
- remotely : via cURL ; via BaseX DBA

Request data
- locally : via BaseX GUI ; via le client BaseX
- remotely : via cURL ; via BaseX REST

Build web services, or web applications
- with RESTXQ : link an url to an XQuery function

### What is RESTXQ ?

### like Java’s JAX-RS API
### proposed specification by [Adam Retter](http://www.adamretter.org.uk)
### based on HTTP protocol ([RFC7230](http://tools.ietf.org/html/rfc7230), [RFC7232](http://tools.ietf.org/html/rfc7232), [RFC7233](http://tools.ietf.org/html/rfc7233), [RFC7234](http://tools.ietf.org/html/rfc7234), [RFC7235](http://tools.ietf.org/html/rfc7235) )

---

# RESTXQ resource function

```
  xquery version '3.1' ;
  module namespace demo = 'demo' ;

  declare default function namespace 'demo' ;
  (:~
   : resource function demo
   :)
  declare
    %restxq:path('/demo')
    %rest:produces('text/html')
    %output:method('html')
    %output:html-version('5.0')
  function titres() {
    <p>Hello World !</p>
    };
```


???
- Show a path-annotated function that execute the same query
- Go to the path
- We conclude we’ve build a full publication based on this mecanism, SynopsX

---
name: part2
template: inverse
class: middle center

# .red[2.] SynopsX inside

---

# Development principles

## .red[Keep it simple] !
- a lightweight framework
- easily accessible

## .red[Fully customizable]
- user defined resources and representations
- content model liberty (since XML)
- full choice of URI scheme
- user-modifiable inheritance mechanism

## .red[MVC]
- separation of content and rendering
- [nearly] full templating mechanism (mappings)

???
As far it’s XML, you can work and mix any kind of data (TEI, EAD, MARC XML, etc.)

Vs Omeka or any other CMS, you can freely choose your own URI scheme = LOD perspectives + for building API

Strict separation between data request and representations, so you can associate different representation with a same resource.

Coming with a [nearly] Full templating mechanism (mappings)


---

# Synops.red[X] transformation chain

![transformationChain](./images/synopsxInsideTer.svg)

---

# Synops.red[X] code hierarchy

#### `_restxq/` contains the resource functions
#### `files/` contains SynopsX static files
#### `mappings/` contains SynopsX mappings (from data to various output formats)
#### `models/` contains SynopsX models (functions to access data in various formats)
#### `templates/` contains SynopsX templates (for HTML templating, etc.)
#### `workspace/` contains YOUR OWN projects !

---

# Synops.red[X] project hierarchy

### .red[is the same] !

```
_restxq/
files/
mappings/
models/
templates/
workspace/
--project1
-- -- _restxq/
-- -- mappings/
-- -- models/
-- -- templates/
--project2
--etc.
```

???
Is the same !
Explain heritage

---

# Synops.red[X] transformation chain

![transformationChain](./images/synopsxInsideTer.svg)

---

# Synops.red[X] heritage

![heritage](./images/heritage.svg)

---

## Synops.red[X] resource functions (`restxq/`)

in `restxq/`

A fully user-definable URI scheme using [RESTXQ](http://docs.basex.org/wiki/RESTXQ)

- HTTP scheme with IRI params
- query-params or POST annotations

`$queryParams` and `$outputParams`

- a function-lookup to deal with heritage
- a call to mappings for serialization (XSLT or XQuery)

???

The `restxq/`directory contains as many resources as needed for the web application.

Resource as entended by the W3C : anything ! Here any resource accessible from the application. It means an URI associated with an XQuery function.

A fully user-definable URI scheme using [RESTXQ](http://docs.basex.org/wiki/RESTXQ)

- HTTP scheme with IRI params
- query-params or POST annotations

With RESTXQ you can serve the content you want at the URI you choose.

---

## Synops.red[X] resource functions (`restxq/`)

Exemple of a JSON resource

```xquery
declare 
  %rest:path('/texts/{$textId}')
  %rest:produces('application/json')
  %output:media-type('application/json')
  %output:method('json')
function textItemsJson($textId as xs:string) {
  let $queryParams := map {
    'textId' : $textId,
    'project' : 'gdp',
    'dbName' : 'gdp',
    'model' : 'tei',
    'function' : 'getTextById'
    }
  let $function := synopsx.models.synopsx:getModelFunction($queryParams)
  let $result := fn:function-lookup($function, 1)($queryParams)
  let $outputParams := map {
    'xquery' : 'tei2html'
    }
  return gdp.mappings.jsoner:jsoner($queryParams, $result, $outputParams)
};
```

---

## Synops.red[X] models functions (`models/`)

All models fonctions returns a `$result as map()`

```xquery
$result as map(
	$meta as map(*),
	$content as map(*)*
)
```


### Synopsx.red[X] function construction

```xquery
getTEIItems($queryParams)
	db:open('...')//tei:TEI[predicate]
```



---

## The templating system

A full templating system has been implemented

- templating syntax
- based on the 7 nodes types



---

## JSONer

Generic fonction to produce JSON file

---

name: part3
template: inverse
class: middle center

# .red[3.] Roadmap

---

## Done

- Upgrade to BaseX > 11
- simplify the install process
- allow configuration for workspace

## Planned

- JSONer
- User module
- Search module
- XForm integration
- OpenAPI documentation
- DTS integration

???

- travail bundle
- librairie fournie de traitement par défaut ?
- OAI-PMH ? l’avait fait à la fin de cahier. Pas sûr de l’avoir fait pour les SynopsX
- DTS (cf. Philippe Pons)
- Statification Ending project



---

# Questions .red[?]

https://github.com/synopsx

https://shs.hal.science/halshs-01223086v1

![follow us on Github](./images/githubSynopsx.svg)

