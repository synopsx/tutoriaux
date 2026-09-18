---
since: 2026-09-14
tags: xquery, basex
---

# BaseX

[BaseX](http://basex.org) est un système de base de données XML natif développée depuis 2006 par l’[Université de Constance](http://www.uni-konstanz.de). C’est un logiciel libre et open source qui dispose d’une importante communauté d’utilisateurs tant dans le domaine académique que commercial. Avec le logiciel [eXist](http://www.exist-db.org), BaseX est l’une des deux principales solutions libres et open source du marché. Il existe également des bases de données XML natives commerciales, le leader dans ce domaine étant [MarkLogic](http://www.marklogic.com).

Les bases de données XML natives permettent de stocker et d’indexer des documents XML afin de les manipuler, les mettre à jour ou réaliser diverses transformations. Ces systèmes sont généralement conçus pour travailler avec des fichiers XML sans transformation préalable, ceux-ci s’insèrent donc bien dans un cadre de travail où l’on produit des sources dans un format XML. Ils implémentent généralement le langage de manipulation de données et de requête XQuery développé par le W3C qui est un langage de programmation fonctionnel Turing complet.

BaseX et eXist présentent des fonctionnalités similaires aux logiciels concurrents. Outre des performances plus importantes, par rapport à eXist, BaseX présente l’avantage d’avoir implémenté plus complètement le standard du W3C [XQuery](http://www.w3.org/TR/xquery-30/) et en particulier son extension [XQuery Full Text](http://www.w3.org/TR/xpath-full-text-10/) qui permet la construction de moteur de recherche plein-texte. Le logiciel BaseX offre également une très bonne implémentation de [RESTXQ](http://exquery.github.io/exquery/exquery-restxq-specification/restxq-1.0-specification.html), une extension XQuery qui permet la création d’applications REST (REpresentational State Transfer). Le logiciel est activement maintenu et fait l’objet de mises à jour régulières.

## Installation

BaseX est léger et facile d’installation. Le seul pré-requis est Java 17 (ou supérieur).

[Pages de documentation de BaseX](https://docs.basex.org)

### Installation de Java

Si vous ne disposez pas déjà de Java sur votre ordinateur, la distribution recommandée est OpenJDK distribuée par [Adoptium](https://adoptium.net). Téléchargez le logiciel et suivre les instructions.

### Installation de BaseX

Voir la page dédiée de la [documentation de BaseX](https://docs.basex.org/main/Startup)

#### Systèmes Unix (Linux et Mac)

Il existe des paquets Linux et sur Mac une formule Brew, toutefois nous recommandons le téléchargement du Zip pour pouvoir disposer facilement des fonctionnalités RESTXQ.

Pour installer BaseX avec tous les dossiers pour travailler avec RESTXQ, téléchargez le ZIP Package (`BaseX???.zip`) depuis la [page de téléchargement](https://basex.org/download/).

Décompressez le dossier téléchargé dans votre répertoire d’Applications. Attention, BaseX utilise des fichiers cachés de configuration `.basex` qui sont installés à l’emplacement de la première exécution.

#### Windows

Pour installer BaseX avec tous les dossiers pour travailler avec RESTXQ, sur Windows, téléchargez l’installateur Windows depuis la [page de téléchargement](https://basex.org/download/).

## Démarrage

Voir [Getting Start](https://docs.basex.org/main/Getting_Started) dans la documentation BaseX.

BaseX peut être démarré de plusieurs manières

- En utilisant l’interface graphique (GUI)
- En utilisant l’interface de ligne de commande
- Sous la forme d’un serveur de base de données ou d’un serveur HTTP.

Le logiciel est distribué avec un ensemble de scripts de démarrages contenus dans le répertoire `bin/`. Afin de faciliter l’exécution des commandes, nous vous suggérons de placer ce répertoire dans votre environnement.

### Démarrer le client de ligne de commande

Dans un terminal, exécuter `./bin/basexclient`

### Démarrer le client d’interfaces graphique (GUI)

Exécuter `./bin/basexclient`

### Démarrer le client HTTP

Exécuter `./bin/basexhttp` puis rendez-vous à l’URL indiquée.

En vous rendant à l’adresse `.../dba/` créez un compte d’administration.

Lors de la première utilisation, rendez-vous dans le client BaseX en ligne de commande pour créer un nouvel utilisateur

```bash
basex
```

Puis `ALTER password admin`

