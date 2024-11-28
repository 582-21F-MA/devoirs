# Devoir 7 : Formulaires

Concevez un formulaire qui permet de répondre à un sondage. Une fois
validées côté client, les données suivantes doivent être envoyées au
serveur dans une requête POST.

-   Nom. Ce champs est obligatoire. Affichez une message d'erreur
    personnalisé si ce champs est vide au moment de soumettre le
    formulaire.

-   Date de naissance. Ce champs est obligatoire. Si l'age est
    inférieure à 18 lorsque la valeur du champs est appliquée, affichez
    un message d'erreur qui indique que la personne doit être majeur·e
    pour répondre au sondage.

-   Animal favoris. Ce champs est obligatoire. Les choix possibles sont
    « chat », « chien », ou « autre ». Si l'utilisateur·rice sélectionne
    « autre », affichez un contrôle qui lui permet de préciser quel est
    son animal favoris. Ce dernier champs est obligatoire seulement si 
    « autre » est sélectionné.

La soumission du formulaire est désactivée tant et aussi longtemps que
les champs ne sont pas tous valide. 

## Indices

-   Les objets de type `HTMLFormElement` ont une propriété `element` qui
    contient tous les contrôles du formulaire. 

-   Les tableaux ont une méthode `every` qui permet de tester si tous
    leurs éléments répondent à une condition donnée comme fonction de
    rappel.

    ```ts
    const areEven = [2, 4, 6].every((n) => n % 2 === 0);
    console.log(areEvent); // => true
    ```
