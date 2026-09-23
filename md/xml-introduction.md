---
title: Introduction à eXtensible Markup Language (XML)
author: emchateau
since: 2026-09-13
description: Fichier remanié à partir du cours d’Emmanuel Château-Dutier (2013-2026)
tags: xml, tutoriel
todo: Enrichir la bibliographie. Faire les diapositives
---

# eXtensible Markup Language

## Le métalangage XML

Notion de document structuré

Appliqué au texte, XML permet d’identifier sa structure et d’informer sur la sémantique des informations qu’il contient, ou d’en isoler les données. Cette notion de structuration absolument primordiale car elle permet de rendre l’information exploitable par la machine (moteurs de recherche) et par l’utilisateur ; elle permet également à l’information d’être réutilisée, échangée, pérennisée. Cette bonne structure est la seule condition pour ensuite l’application d’une transformation automatique.

Langage de balisage déclaratifs

Rendre la structure du texte explicite, c’est à dire clarifier à la fois les relations hiérarchiques et séquentielles.

La présence du balisage détermine par la suite la possibilité de traiter les éléments pour une transformation.

## eXtensible Markup Language (XML)

Le métalangage informatique XML (eXtensible Markup Language) permet le développement de vocabulaires descriptifs de balisages interopérables spécifiques à certains domaines.

- Un modèle de contenu arborescent
- Grammaire lisible par la machine
- Pas de réelle sémantique
- Une large utilisation dans le domaine culturel

Standard : 

Bray, Tim, Paoli, Jean, Sperberg-McQueen, C. Michael, Maler, Eve, et Yergeau, François, Extensible Markup Language (XML) 1.0, Recommandation du W3C, 2008. [https://www.w3.org/TR/REC-xml/](https://www.w3.org/TR/REC-xml/)

- Extension de fichier : `.xml`
- Internet media type : `application/xml`, `text/xml`
- Uniform Type Identifier (UTI) : `public.xml`

### Un modèle de contenu arborescent

Son **modèle de contenu arborescent** est conforme au modèle OHCO.

### Une grammaire lisible par la machine

S’il offre une grammaire lisible par la machine, il ne présente pas une réelle sémantique et ne peut donc à lui seul spécifier formellement une sémantique.

### Pas de réelle sémantique

XML ne fournit pas en soi la sémantique. XML propose simplement **une solution rigoureuse, compréhensible par les machines, pour définir un langage de balisage descriptif**.

### Une large utilisation dans le domaine culturel

Le langage de balisage XML a connu une importante vogue au cours des années 2000. Ce format est rapidement identifié comme une solution technique pour l’échange de données structurées en raison de sa simplicité, de sa versalité, de riches fonctionnalités de typage et de l’existence d’un outillage important pour la manipulation de données ou leur validation.

C’est tout particulièrement le cas dans le secteur culturel où il est très employé pour l’enregistrement et l’échange de métadonnées, ainsi que dans l’industrie de l’édition.

- Coombs, James H, Renear, Allen H, et DeRose, Steven J. "Markup Systems and the Future of Scholarly Text Processing." Communications of the ACM 30, no. 11 (1987): 933-947. [http://xml.coverpages.org/coombs.html](http://xml.coverpages.org/coombs.html)
- Coombs, James H, Renear, Allen H, et DeRose, Steven J. "Markup Systems and the Future of Scholarly Text Processing." Communications of the ACM 30, no. 11 (1987): 933-947. [http://xml.coverpages.org/coombs.html](http://xml.coverpages.org/coombs.html)

## Historique de XML

- 1986 : Définition du SGML (Standard Generalized Markup Language)
  (norme [ISO 8879:1986](https://www.iso.org/fr/standard/16387.html)).
- 1989 : Définition du HTML, dérivé du SGML
- 1998 : [XML 1.0](https://www.w3.org/TR/xml/), publication par le W3C des spécifications d’un métalangage de balisage du texte
- 2004 : [XML 1.1](http://www.w3.org/TR/xml11) (amélioration)
- [pour mémoire, la spécification de HTML 5 en 2011 renonce à XML]

Un métalangage informatique pour le balisage du texte

### Un héritier de SGML

XML est un héritier du langage de balisage Standard Generalized Markup Language (SGML) dont il est une simplification. SGML était lui-même déjà l’héritier d’un langage descriptif conçu en 1969 par des ingénieurs de la société IBM : DCF (Document Composition Facility).

SGML : puissant et générique mais aussi trop souple et complexe en même temps → surtout utilisé dans le cadre d’applications lourdes. Utilisation la plus notable : langage HTML, dérivé du SGML =&gt; langage de publication pour le web. Né en 1989 et depuis 2011, HTML 5.


### Publication du standard

En février 1998 : publication en février 1998 par le W3C Consortium des spécifications du métalangage XML 1.0 =&gt; maîtres mots : simplicité, clarté, universalité.

Le standard est alors développé en lien direct avec la Text Encoding Initiative. C’est la raison pour laquelle Michael Sperberg-McQueen (1954-2024) est co-auteur de la spécification.

Depuis 1998, la norme XML a peu évolué. La dernière édition en date est la 5^e^ édition, mise à jour en 2008. On utilise toujours régulièrement la version 1.0 ce témoignage de sa stabilité. La [version 1.1](http://www.w3.org/TR/xml11) publiée en février 2004 et mise à jour en 2006, fut simplement publiée pour intégrer les évolution d’Unicode.


### Un succès immédiat

Les langages et outils permettant de produire, contrôler, échanger, transformer et exploiter des fichiers XML se sont multipliés, souvent associés à des normes du W3C : modèles de documents et de (méta)données, langages de modélisation, de présentation, de programmation, protocoles, …

Le métalangage XML est désormais utilisé partout en informatique qu’il s’agisse de structurer des informations dont la durée de vie est importante ou d’échanger des informations entre applications, qu’on ait à s’occuper essentiellement de données, de documents ou d’une combinaison des deux.

Dans son Référentiel général d’interopérabilité publié en 2009, en France la Direction générale de la modernisation de l’État recommande l’utilisation des technologies XML (Extensible Markup Language) à des fins d’interopérabilité et de pérennisation de l’information.

Ce format est largement adopté également au Canada et aux États-Unis pour les Systèmes d’information gouvernementaux ou la gestion des textes législatifs et réglementaires.

cf. Ministre du Budget, des Comptes publics, Référentiel Général d’Interopérabilité (RGI), 2009. [http://references.modernisation.gouv.fr/rgi-interoperabilite](http://references.modernisation.gouv.fr/rgi-interoperabilite)

Le format est largement utilisé pour la publication de documents bureautique (DOCX, XSL, ODT, etc.). Il est également une brique fondamentale de l’architecture du web (RDF, SKOS, SVG, etc.). C‘est également le format de base des livres numériques (EPUB).

La plupart des contenus des bibliothèques numériques aujourd’hui mis à disposition sur le web sont encodés en utilisant un balisage XML.

>La large adoption de vocabulaires XML spécialisés comme la TEI rendent disponible une importante information sémantique, mais seulement sous la forme d’une documentation en prose et de pratiques partagées.

Les principales chaînes éditoriales industrielles sont basées sur l’utilisation de XML : Springer, De Gruyter, Routlegde, Érudit, Open Edition, ou encore dans l’édition juridique.

XML est utilisé comme standard pour la documentation technique (docbook), pour les systèmes informatiques de facturation, la structuration des métadonnées (Dublin Core, LIDO, etc.), les métadonnées des collections d’images (EXIF, IPTC, etc.), les applications de moissonnage de données et de veille (OAI-PMH, RSS, ATOM, etc.), ou encore comme format d’enregistrement dans les chaînes de numérisation des fonds patrimoniaux ou documentaires (PageXML, ALTO, DocLang, etc.)

Si XML est aujourd’hui concurrencé par le format JSON dans les applications orientée web, il reste sans équivalent pour la prise en charge du texte. Son modèle de contenu permet notamment de prendre en charge de manière efficace ce qu’on appelle le « contenu mixte ». Ce n’est que récemment que JSON dispose d’une technologie de schéma consistante, et ce format reste beaucoup moins expressif que XML et ne dispose pas des outils équivalents à ceux existants pour XML. 

C’est sans doute encore aujourd’hui le format informatique le plus utilisé.

## Principes de conception de XML

* applicable à tout type de texte
* extensible
* définition par un schéma
* hypertextualité
* simple, universel
* modèle hiérarchique

* **XML s’applique à tout type de texte** : C’est un langage de balisage destiné à permettre l’isolement d’une portion de texte et l’identification explicite de son rôle ou de sa nature particulière. Il autorise l’imbrication des balises et une granularité aussi fine que nécessaire. 
* **Extensibilité** : Le nom des balise n’est pas définit par avance.
* **Définition de modèles de documents par des schémas** : Un schéma définit des modèles de document sous la forme d’une grammaire qui détermine la liste des balises utilisables dans un document, leurs noms, les contraintes de leur emploi : position, cardinalité, type de contenu. Ces schémas peuvent être définis sous la forme d’une DTD (*Document Type Definition*) ou d’un schéma XML (écrit en RelaxNG ou W3C XML Schema).
* **XML est conçu à l’ère de l’hypermédia** : Des liens peuvent être établis entre des sections du même document XML ou entre un document XML et d’autres ressources électroniques qui peuvent ne pas être du texte.
* C’est **une norme simple, universelle**, sans ambiguïté qui permet à un humain de lire l’information produite. Les fichiers XML sont de simples fichiers texte qui peuvent être lus par un grand nombre de logiciels. Ils supportent  un grand nombre de systèmes d’écriture Unicode. Le codage par défaut de XML est UTF-8.

XML propose une norme concentrée sur la structuration de l’information indépendamment de son utilisation ultérieure. Le format est un simple fichier texte, indépendant des plates-formes informatiques. L’utilisation de XML est considérée comme une bonne pratique en vue de l’archivage pérenne.

* grâce à leur structure réutilisation : l’accès, l’indexation et la recherche de l’information sont améliorées → on peut avec certains outils informatiques indexer un (ou un ensemble de) documents XML en exploitant leur marquage structurel, ce qui permet des recherches fines multicritères et améliore considérablement la qualité des réponses par rapport à une recherche plein texte dans un document non structuré.
* on peut aussi explorer un document XML en tant qu’arbre, en utilisant notamment le langage XPath. =&gt; XML : format de stockage pour autant de formats de diffusion qu’on souhaite. Après transformation par programmes dans un ou plusieurs formats dédiés, le contenu structuré d’un document XML peut être consulté sous forme imprimée (transformation directement en PDF ou vers LateX), sous forme électronique (HTML) =&gt; XML : format pivot pour les nouvelles chaînes éditoriales.

## XML en 4 points

1. **XML ne sert pas à afficher les données mais à les décrire**. Seul, il ne fait rien. Appliqué à la représentation des textes, il permet de décrire notamment leur structure
2. **Le nom des balises n’est pas prédéfini** : on peut librement créer son propre vocabulaire
3. **On peut utiliser une "grammaire" de balises (un schéma)**, pour définir des contraintes ou s’assurer de la consistance de l’encodage
4. **XML est auto-descriptif et lisible par l’homme**. Un fichier XML n’est rien que du texte, on peut facilement prendre connaissance d’un corpus dans n’importe quel éditeur textuel

## La syntaxe XML

### Notation des éléments XML

![](../hnu6052/docs/images/xml01.svg)

### Notation des attribut XML

![](../hnu6052/docs/images/xml02.svg)

### Exemple de document XML

```xml
<something>
  <title>This is a title</title>
  <p>This paragraph mentions <placeName type="city">Bristol</placeName>.</p>
</something>
```

- un simple **fichier texte**
- un élément qui contient tous les autres (l’**élément racine**)
- les balises sont appariées, il y peut y avoir des attributs
- la coloration syntaxique est fournie par l’éditeur

Un document XML prend toujours la forme suivante :

- Un document XML consiste en une séquence de caractères lisibles par l’homme. C’est **un simple fichier texte** qui ne contient pas de code additionnel ou de données binaires.
- Il existe un élément qui contient tous les autres, l’**élément racine**.
- Les **balises** sont **appariées**, elles peuvent porter des **attributs**.
- Toutefois, ce document comporte des séquences de caractères régulières (ici mises en valeur par la coloration syntaxique).

### Prologue d’un document XML

Document XML avec son **prologue**

```xml
<?xml version="1.0"?>
<doc>
  <p n="1">This is a paragraph.</p>
  <p>This paragraph mentions <placeName>Bristol</placeName>.</p>
</doc>
```

La première ligne de ce documents s’appelle une **déclaration XML**, elle appartient au **prologue du document**. C’est une instruction qui permet d’indiquer qu’il s’agit d’un document XML et la version du langage.

### Spécification de l’encodage

```xml
<?xml version="1.0" encoding="UTF-8"?>
<doc>
  <p n="1">This is a paragraph.</p>
  <p>This paragraph mentions <placeName>Bristol</placeName>.</p>
</doc>
```

On peut également préciser l’encodage des caractères (UTF-8 par défaut en XML, mais c’est une bonne pratique que de le mentionner explicitement).

Ici, on déclare l’utilisation de l’encodage de caractère UTF-8 (pour Universal Character Set) qui permet de représenter la plupart des caractères du «&nbsp;répertoire universel de caractères codés&nbsp;» initialement développé par l’[ISO (ISO/CEI 10646)](http://www.iso.org/iso/fr/catalogue_detail.htm?csnumber=51273), aujourd’hui entièrement compatible avec le standard Unicode.

Le répertoire Unicode peut contenir plus d’un million de caractères.

* cf. [https://fr.wikipedia.org/wiki/UTF-8](https://fr.wikipedia.org/wiki/UTF-8)
* cf. [Jukka Korpela. "Guide to the Unicode standard"](http://www.cs.tut.fi/~jkorpela/unicode/guide.html)

### Exemples de balisage XML

![](../hnu6052/docs/images/xml00.svg)

<!-- @todo ajouter un élément vide -->

## Constructions syntaxiques

- Les séquences `<`, `>` et `</` délimitent les balises : `<div></div>`
- Les paires nom-valeur des attributs ont la forme `nom='valeur'` équivalente à `nom="valeur"`
- Syntaxe des éléments vides : `<div></div>` = `<div/>`

Les caractères `<` et `>` sont utilisés pour marquer le début et la fin des balises à l’intérieur d’un flux textuel. L’intérieur de la balise détermine le **nom de l’élément**.

Les balises, ou *markup*, ou encore étiquettes (*tag*), sont **appariées** : à chaque balise ouvrante correspond une balise fermante qui s’en distingue en débutant par la séquence `</`.

Les balises et leur contenu forment un **élement XML**.

Ici, le document présente également des attributs. Ce sont des paires nom-valeurs qui se rattachent aux éléments. Les attributs sont placés à l’intérieur de la balise et sont séparées du nom de l’élément par un espace.

Notez la syntaxe particulière des éléments vides : `<br/>`

## Structure d’un document XML

Le corps du document XML est un **arbre d’éléments** :

- Les éléments : permettent de décomposer le texte en unités d’information

```xml
 <titre>Le corps du document XML : un arbre d’éléments</titre>
```

- **Tout élément a un nom** (parfois appelé *identificateur générique*), ici c’est titre. Ces noms d’éléments obéissent aux contraintes syntaxiques des noms XML
- **Un élément peut contenir du texte et/ou d’autres éléments (contenu mixte), ou être vide**.

```xml
<p>Exemple de contenu mixte avec
  une <name>entité-nommée</name> et un élément vide<pb/>
</p>
```

- Il existe un et un seul élément englobant tous les autres, encodé en premier, juste après le prologue : c’est **l’élément racine**.

Le corps du document XML consiste en un arbre d’éléments. Les éléments permettent de décomposer le texte en unités d’information. 

La portion de texte ainsi isolée est marquée par une balise de début (balise ouvrante) et par une balise de fin (balise fermante). Tout élément a un nom (parfois appelé **identificateur générique**), ici c’est titre. Ces noms d’éléments obéissent aux contraintes syntaxiques des noms XML

Un élément peut contenir du texte et/ou d’autres éléments (**contenu mixte**), ou être vide.

Il existe un et un seul élément englobant tous les autres, encodé en premier, juste après le prologue : c’est l’**élément racine**.

## Les attributs

* syntaxe&nbsp;: `nomAttribut="valeur"` ou `nomAttribut='valeur'`
* la valeur est encadrée par des guillemets simples ou doubles
* le nom de l’attribut obéit aux **contraintes syntaxiques des noms XML**
* L’ordre des attributs n’est pas prescrit pour un élément donné
* Un attribut doit nécessairement avoir une valeur, même si cette valeur est nulle `attribut=""`
* Pour un même élément, il ne peut y avoir deux attributs de même nom `rend="bold center"`

Les attributs ne contiennent que du texte, ils ne peuvent donc pas servir pour stocker de l’information structurée.

En principe, les attributs ne sont pas destinés à ajouter du contenu à l’élément. Leur valeur n’est pas destinée à être affichée telle qu’elle dans un format de sortie. Mais ils pourront être exploités par des applications informatiques pour faire, par exemple, des index en servant à identifier les éléments (attributs de type `ID`), à établir des renvois (attributs de type `IDREF`).

Les attributs précisent la signification des éléments, en leur ajoutent des caractéristiques.

```xml
<date when="2011-03-09">9 mars 2011</date>
```

Les attributs sont toujours saisis **à l’intérieur** de la balise ouvrante de l’élément.

Pour un même élément, il ne peut y avoir deux attributs de même nom. Afin de répéter une valeur, on la sépare par un espace.

```xml
<hi rend="bold center">à lire</date>
```

## JSON vs XML

XML comme JSON permettent de décrire des informations structurées. Toutefois, le format JSON est moins expressif que XML. Son typage est limité et les commentaires ne sont pas autorisés. En réalité JSON est de plus bas niveau que XML.

XML est réputé verbeux en raison de la répétition des noms des éléments. Toutefois, selon les cas d’usage, un fichier JSON n’est pas toujours plus facile à utiliser.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<anvil reference="acme-5103">
    <weight unit="pound">9.5</weight>
    <composition>best wrought iron</composition>
    <price currency="USD">.15</price>
</anvil>
```

```json
[
  "anvil": {
    "reference": "acme-5103",
    "weight": {
      "unit": "pound",
      "value": 9.5
    },
    "composition": "best wrought iron",
    "price": {
      "currency": "USD",
      "value": .15
    }
  }
]
```

Dans cet exemple, XML et JSON décrivent le même objet. L’un des documents est plus orienté sérialisation, l’autre est orienté document.

C’est principalement dans le contexte de l’encodage du texte que le format XML se démarque particulièrement à la fois par son expressivité et par les outils disponibles pour manipuler des documents.

### Exemple de contenu mixte en JSON

Un contenu mixte est un mélange de texte et de balises. Ce genre de structure est fréquent dans l’encodage de contenus éditoriaux. Or, représenté ce cas de figure génère des documents particulièrement peu lisibles.

```xml
<p>I can support <a href="http://en.wikipedia.org/wiki/PCDATA">
  <b>mixed</b> content</a> !</p>
```

```json
[{
    "name": "p",
    "children": [
        "I can support ",
        {
            "name": "a",
            "attributes": {"href": "http://en.wikipedia.org/wiki/PCDATA"},
            "children": [
                {
                    "name": "b",
                    "children": ["mixed"]
                },
                " content"
            ]
        },
        "!"
    ]
}]
```

## Contraintes syntaxiques des noms XML

Règles pour l’écriture de ces noms (identificateurs génériques)&nbsp;:

* la chaîne de caractères formant le nom **peut contenir**
  - les caractères alphanumériques (lettres de `a` à `z`, et de `A` à `Z`, chiffres de `0` à `9`, caractères non latins),
  - le trait sous la ligne `_`,
  - le trait d’union `-`
  - et le point `.` (à l’exclusion de tout autre signe de ponctuation ou espace)&nbsp;;
* un nom **ne peut pas commencer** par un nombre, ni par un point, ni par un trait d’union&nbsp;;
* le nom ne peut pas commencer par `xml` (quelle que soit la casse utilisée).
* Attention, XML est **sensible à la casse**&nbsp;!

## Appels d’entités

XML définit plusieurs types d’entités qui sont des réserves de contenus utilisables n’importe où dans le document.

**Entités internes** : entités caractères prédéfinies pour saisir certains caractères que l’on doit obligatoirement coder ( `<`, `>`, `&`, `"`, `'` : caractères codés au moyen des entités `lt`, `gt`, `amp`, `quot`, `apos`)

**Entités externes** : XML propose des mécanismes pour donner un nom à des expressions ou phrases souvent répétées ou pour taper des caractères difficiles à composer au clavier.

* texte : fragments XML formant chacun un fichier
* non parsées (fichiers non XML tels qu’images, enregistrements sonores…)

**Un appel d’entité dans le corps du document XML se fait en utilisant l’esperluette (`&`), suivi du nom donné à l’entité, suivi du signe `;`.**

| appel                | entité |
| :------------------- | :----- |
| `&` `amp` `;` &nbsp; | &amp;  |
| `&` `gt` `;` &nbsp;  | &gt;   |
| `&` `lt` `;` &nbsp;  | &lt;   |

Il est possible de déclarer des entités externes dans une DTD ou un schéma. Les entités textes servent à donner un nom à des expressions ou phrases souvent répétées.

- texte : fragments XML formant chacun un fichier

- non parsées (fichiers non XML tels qu’images, enregistrements sonores...)

## Les commentaires

Les commentaires :

- Commencent par `<!--` et se terminent par `-->`
- Le double trait d’union «&nbsp;--&nbsp;» ne doit pas apparaître au sein d’un commentaire

Servent à… commenter ! Les commentaires sont utiles pour documenter ce qu’on fait ou consigner des notes. Ils ne sont pas destinés aux programmes informatiques qui les ignorent par défaut.

```xml
<!-- exemple de commentaire -->
<p>du texte <!-- un autre commentaire --> suite du texte</p>
```

## Instructions de traitement

Les instructions de traitement servent à fournir dans le document des instructions pour un programme (feuille de transformation, utilisation d’une feuille de style CSS, etc.) :

- Commencent par `<?` et se terminent par `?>`.
- Définissent une cible (fournissent le nom de l’application à qui elles sont destinées, par ex.), et des arguments

```xml
<!-- exemple d’instruction de traitement -->
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
<p>...</p>
```

## Character Data (CDATA)

**Sections CDATA** : sections de caractères non parsées.

CDATA signifie `Character Data` et que les données comprises entre ces balises ne doivent pas être interprétées comme du XML.

```xml
<html>
...
  <![CDATA[
    //code Javascript
    ...
  ]]>
</html>
```

- commencent par `<![CDATA[`
- se terminent par `]]>`

## Espaces de nom

### Notion d’espace de nom

De plus en plus souvent, afin de faciliter les échanges en évitant toute ambiguïté, les noms des éléments et attributs sont rattachés à un **espace de noms** (*namespace*).

* Formellement, un espace de noms est défini par son **URI d’espace de nom** (*namespace-uri*).

* Si on utilise un ou plusieurs espaces de noms, l’espace de noms (ou les espaces de noms) utilisé(s) doivent être déclarés dans le fichier XML. On le fait le plus souvent en ajoutant une (ou plusieurs) **déclarations d’espaces de nom** à l’élément racine du fichier. Cette déclaration prend la forme d’un attribut `xmlns` qui a pour valeur l’URI de l’espace de noms.

* L’espace de noms peut être déclaré comme l’**espace de noms par défaut**, dans ce cas l’URI n’est pas associée à un code de nom donné, et les noms des attributs et éléments ne sont pas préfixés.

* Un code peut représenter l’espace de noms, il est alors utilisé à la place de l’URI pour préfixer attributs et éléments ; ce code est appelé **préfixe** (*namespace-prefix*).

### Exemple d’espace de nom

```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader><!-- autres éléments --></teiHeader>
  <text><!-- autres éléments --></text>
</TEI>
```

- formellement défini par son namespace-uri
- déclaré avec **xmlns** pour *XML namespace*
- déclaration par défaut

Ici l’espace de noms par défaut est défini par l’URI http://www.tei-c.org/ns/1.0, c’est l’espace de noms TEI. Tous les éléments du fichier XML qui sont descendants de l’élément racine et qui ne sont pas préfixés sont dans cet espace de noms.

### Utilisation d’un préfixe

```xml
<tei:TEI xmlns:tei="http://www.tei-c.org/ns/1.0">
  <tei:teiHeader><!-- autres éléments --></tei:teiHeader>
  <tei:text><!-- autres éléments --></tei:text>
</tei:TEI>
```

- un raccourci pour les espaces de noms
- déclarer un préfixe avec `xmlns:prefix` : ex. `xmlns:tei`
- le préfixe précède le nom de l’élément avec `:` ex. `tei:text`
- permet de mélanger plusieurs vocabulaires
- notion d’héritage

### Exemple d’utilisation d’un espace de nom par défaut et d’un préfixe

```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0"
     xmlns:math="http://www.w3.org/1998/Math/MathML">
  <teiHeader><!-- autres éléments --></teiHeader>
  <text>
    <!-- autres éléments -->
    <math:matrix><!-- ... --></math:matrix>
  </text>
</TEI>
```

Outre la déclaration par défaut, on peut également déclarer un préfixe avec `xmlns:prefix`

## Attributs par défaut

Le standard XML définit plusieurs **attributs par défaut** :

- `xml:id`
- `xml:lang`
- ...

L’espace de nom pour le préfixe `xml` n’a pas besoin d’être déclaré.

La valeur de l’attribut `xml:id` doit être unique dans le contexte du document. On peut pointer vers sa valeur avec `#`. La valeur de `xml:id` débute toujours par une lettre.

```xml
<div>
  <p xml:id="n0001">...</p>
  <list>
  	<item>...</item>
	  <item target="#n0001">...</item>
	</list>
</div>
```

## Notion de document bien formé

**On dit qu’un document XML est *bien formé* quand celui-ci répond à un certain nombre de contraintes :**

* concordance entre l’encodage du document et sa déclaration XML
* balises ouvrantes et fermantes appariées, imbrication des balises sans chevauchement, existance d’un élément racine
* respect de la forme des commentaires
* respect de la forme des appels d’entités
* respect de la forme des instructions de traitement et des déclarations d’espace de nom
* respect des spécifications relatives aux noms XML (noms d’éléments et d’attributs, etc.)
* existence des fichiers déclarés (déclaration de DTD, déclaration d’entités externes) et concordance entre l’encodage des fichiers entités externes et leur déclaration XML
* unicité des attributs dans un même élément, aucun attribut sans valeur

Le contrôle se fait par **analyse syntaxique** ou *parsing* (avec des outils appelés *parsers*).

## Sources et bibliographie

* A gentle introduction to XML&nbsp;: [http://www.tei-c.org/release/doc/tei-p5-doc/en/html/SG.html](http://www.tei-c.org/release/doc/tei-p5-doc/en/html/SG.html)
* Modern XML useful resources https://gist.github.com/emchateau/912e3de4710bd9f385d407a7a576078c
* XML en concentré&nbsp;: manuel de référence / Elliotte Rusty Harold &amp; W. Scott Means&nbsp;; traduction de Philippe Ensarguet, Frédéric Laurent. - 3^e^ éd. - Paris&nbsp;: O’Reilly, 2005. ISBN 2-84177-353-1 EAN 9782841773534&nbsp;;
* Coombs, James H, Renear, Allen H, et DeRose, Steven J. ["Markup Systems and the Future of Scholarly Text Processing."](https://dl.acm.org/doi/abs/10.1145/32206.32209) Communications of the ACM 30, no. 11 (1987): 933-947.
* DeRose, Steven J., et al. “What Is Text, Really?” Journal of Computing in Higher Education, vol. 1, no. 2, Dec. 1990, pp. 3–26. Crossref, [doi:10.1007/BF02941632](https://doi.org/10.1007/BF02941632)
* XML.com https://www.xml.com

<!-- L’espace XML francophone&nbsp;: actualités, discussions, articles et billets, sur le site Web [http://xmlfr.org](http://xmlfr.org/) [obsolète] -->

<!-- http:/.html.coverpages.org/coombs.html -->

