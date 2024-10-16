# Devoir 2 : Tableau de scores

Pour ce devoir, on vous demande de concevoir différentes fonctions qui
permettent de gérer la tableau de scores journalier pour une salle
d'arcade. N'oubliez pas de tester chaque fonction, et d'utiliser les
alias de type pour documenter les valeurs du programme.

## 1. Créer le tableau

Pour commencer, créez une fonction nommée `newScoreBoard` qui retourne
un objet représentant un tableau de scores. Un tableau de score contient
des joueur·ses ainsi que la date à laquelle le tableau a été produit.
L'expression `new Date()` a comme valeur un objet qui représente la date
courante.

```ts
const now = new Date();
console.log(now); // => 2024-10-09T21:08:52.318Z
```

## 2. Ajouter un ou une joueuse

Concevez ensuite une fonction nommée `addPlayer` qui, étant donné un
tableau de scores existant, un nom et un score, permet d'ajouter un ou
une joueuse au tableau de scores. La fonction doit retourner la nouvelle
version du tableau de scores.

## 3. Supprimer un ou une joueuse

Concevez une fonction nommée `removePlayer` qui, étant donné un tableau
de scores et un nom, supprime du tableau de scores le ou la joueuse qui
correspond au nom donné. La fonction doit retourner la nouvelle version
du tableau de scores. 


## 4. Modifier le score

Concevez une fonction nommée `updateScore` qui, étant donné un tableau
de scores, un nom et un score, met à jour le score du ou de la joueuse
qui correspond au nom donné. La fonction doit retourner la nouvelle
version du tableau de scores.

## 5. Bonus du lundi

La salle d'arcade offre 100 points boni les lundis. Concevez une
fonction nommée `applyMondayBonus` qui, étant donné un tableau de
scores, incrémente le scores de tous les joueur·ses seulement si la date
de création du tableau correspond à un lundi. La méthode `getDay` des
objets de type `Date` retourne un nombre qui correspond au jour de la
semaine. `0` équivaut à dimanche, `1` à lundi, et ainsi de suite.


```ts
const now = new Date();
const day = now.getDay();
console.log(day); // => 3 (mercredi)
```

## 6. Statistiques

Enfin, créez une fonction nommée `getStats` qui, étant donné un tableau
de résultats, retourne un objet qui contient le score minimum, le score
maximum, et le score moyen.
