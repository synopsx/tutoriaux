# Tutoriaux XML, XQuery et SynopsX

Ensemble de ressources de formation sur XML, Xquery et SynopsX.

## Formations

[Formation du 15 septembre 2026](./formation-2026-09-15)

- [Introduction à XML](https://synopsx.github.io/tutoriaux/xml-introduction.html)
- [Introduction à XPath](https://synopsx.github.io/tutoriaux/xpath-introduction.html)
- [Introduction à XQuery](https://synopsx.github.io/tutoriaux/xquery-introduction.html)

Rédaction en cours

- [Bonnes pratiques XQuery](./xquery-bonnes-pratiques)
- [Spécification RESTXQ](./xquery-restxq)
- [Webscrapping avec XQuery](./xquery-webscrapping)
- [Comparaison XQuery/XSLT](./xquery-vs-xslt)

## Divers

Ce dépôt utilise un sous-module.

Cloner le dépôt avec ses sous-modules

```bash
git clone --recurse-submodules https://example.com/depot.git
```

Si vous avez déjà cloné le dépôt sans les sous-modules :

```bash
git submodule update --init --recursive
```

Pour récupérer les mises à jour du dépôt et de ses sous-modules :

```bash
git pull --recurse-submodules
git submodule update --init --recursive
```

## Génération des diapositives

Les diapositives sont rendues avec https://github.com/ouvroir/documentation-bimodale

Configurer les dossiers avec

`config.mk`

Générer les diapositives

```bash
cd documentation-bimodale
make all
```

Nettoyer les diapositive

```bash
cd documentation-bimodale
make clean
```

Servir localement les diapositives

```bash
cd documentation-bimodale
make serve
```

Le répertoire `tutoriaux/build/` est dans le `.gitignore` mais il s’agit d’un worktree de la branche `github-pages`.

Pour publier les diapositives après un nouveau build :

```bash
cd tutoriaux/build/
git add -A && git commit -m "Mise à jour du build" && git push
```
