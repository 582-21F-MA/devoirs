# Devoir 5 : Fonctions de rappel

En JavaScript, plusieurs des méthodes natives fréquemment utilisées pour
manipuler les tableaux sont des fonctions d'ordre supérieur : `forEach`,
`map`, `filter`, `reduce`, etc. Pour ce devoir, votre tâche est de
concevoir vous-même ces fonctions. Une fois que vous comprenez leur
implémentation, il vous sera plus facile de les utiliser. Bien sûr, il
vous est interdit d'utiliser ces méthodes natives dans votre
implémentation.

Les fonctions de rappel que vous utiliserez ci-dessous sont
*génériques*, c'est-à-dire qu'on ne connaît pas d'avance le type de
leurs paramètres. Dans ce cas (et exceptionnellement), vous pouvez
utiliser le type `any` qui vaut pour n'importe quel type.

Par exemple, voici les alias de type pour `forEach` :

```ts
type array = any[];
type callback = (e: any) => void;

function forEach(a: array, c: callback): void {
    /* TODO */
}
```

La fonction `forEach` prend donc comme arguments un tableau d'éléments
de type indéterminé, et une fonction de rappel ayant un paramètre de
type indéterminé.

> [!NOTE]
> Outre pour la fonction `forEach` qui ne retourne rien, utilisez les
> tests automatisés pour valider l'implémentation des fonctions
> ci-dessous.

## ForEach

Concevez une fonction d'ordre supérieur nommée `forEach` qui, étant
donnée un tableau d'éléments de type indéterminé et une fonction de
rappel ayant un paramètre de type indéterminé, applique la fonction de
rappel sur chaque élément du tableau.

```ts
forEach([1, 2, 3], (n) => console.log(n)); // => 1 2 3
```

## Map

Concevez une fonction d'ordre supérieur nommée `map` qui, étant donnée
un tableau d'éléments de type indéterminé et une fonction de rappel
ayant un paramètre de type indéterminé, applique la fonction de rappel
sur chaque élément du tableau, et retourne le tableau qui en résulte. La
fonction de rappel doit retourner une valeur de type indéterminé. Cette
valeur sera utilisée pour remplir le nouveau tableau.

```ts
const numbers = map([1, 2, 3], (n) => n + 1); 
console.log(numbers); // => [2, 3, 4]
```

## Filter

Concevez une fonction d'ordre supérieur nommée `filter` qui, étant
donnée un tableau d'éléments de type indéterminé et une fonction de
rappel ayant un paramètre de type indéterminé, applique la fonction de
rappel sur chaque élément du tableau, et retourne un tableau qui
contient seulement les éléments pour lesquels la valeur de retour de la
fonction de rappel est `true`.

```ts
const numbers = filter([1, 2, 3], (n) => n > 1);
console.log(numbers); // => [2, 3]
```

## Reduce

Concevez une fonction d'ordre supérieur nommée `reduce` qui, étant
donnée un tableau d'éléments de type indéterminé et une fonction de
rappel ayant deux paramètres de type indéterminé, applique la fonction
de rappel sur les deux premiers éléments du tableaux jusqu'à ce qu'il ne
reste plus qu'un seul élément. La fonction doit retourner l'élément
restant.

```ts
const difference = reduce([3, 2, 1], (a, b) => a - b); 
console.log(difference); // => 6 (3 - 2 = 1, 1 - 1 = 0)

const concat = reduce(["a", "b", "c"], (a, b) => a + b); 
console.log(concat); // => "abc" ("a" + "b" = "ab", "ab" + "c" = "abc")
```
