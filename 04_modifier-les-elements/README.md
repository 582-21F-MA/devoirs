# Devoir 4 : Modifier les éléments HTML

Les fichiers `index.html` et `style.css` ci-joints contiennent les
éléments et les règles de mise en page nécessaires pour concevoir une
horloge digitale et analogue. Dans un fichier `main.ts`, ajoutez la
logique nécessaire pour que cette horloge affiche l'heure en temps réel.
De plus, si l'heure courante est entre 18 et 6 heures, ajoutez la classe
`dark` au `body`.

Les méthodes `getSeconds`, `getMinutes` et `getHours` des objets de type
`Date` retournent respectivement les secondes, les minutes et l'heure
courante.

La fonction native `setInterval` appelle une fonction donnée à
l'intervalle en millisecondes donnée. Le code ci-dessous, par exemple,
affichera dans la console la date complète courante à chaque seconde.

```ts
function updateClock(): void {
    const now = new Date();
    console.log(now);
}

setInterval(updateClock, 1000);
```
