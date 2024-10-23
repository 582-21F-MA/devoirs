# Devoir 3 : Traverser le DOM

Concevez un programme qui affiche dans la console du navigateur le
nombre total de nœuds de chaque type que contient le document HTML.

Par exemple, le code HTML suivant contient 3 nœuds élément, 4 nœuds
texte (les espaces et les sauts de ligne comptent), et 1 nœud
commentaire.

```html
<html><p>Je suis un <em>exemple</em>.</p> <!-- commentaire --></html>
```

Indice : Un arbre enraciné est une structure de données *récursive*. La
récursivité est généralement une bonne technique pour traverser se genre
de structure.
