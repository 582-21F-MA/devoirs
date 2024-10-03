# Devoir 1 : Valeurs, types et opérateurs

Concevez les programmes ci-dessous. Sauvegardez chacun d'eux dans des
fichiers distincts. N'oubliez pas de vous concentrez sur une tâche à la
fois, et d'écrire vos tests (idéalement *avant* d'écrire la fonction).

## Triangle

Concevez un programme qui écrit le triangle ci-dessous dans la console.
Dans une chaîne, vous pouvez utiliser les caractères `\n` pour créer un
saut de ligne. La méthode native `repeat` permet de répéter une chaîne
un nombre donné de fois.

```
#
##
###
####
#####
######
#######
```

Modifiez ensuite le code de sorte à ce que le programme puisse produire
un triangle d'une hauteur déterminé par l'utilisateur·rice. Utiliser la
fonction native `prompt` pour accepter la hauteur. La fonction native
`Number` permet de convertir une chaîne de caractères représentant une
valeur numérique en un nombre.

## Échiquier

Concevez un programme qui écrit dans la console une chaîne de caractères
représentant un échiquier de 8 par 8. À chaque position de la grille, il
doit y avoir soit un espace, soit un caractère `#`.

```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
```

Indice : portez attention aux chiffres sur lesquels il doit y avoir un
espace et sur lesquels il doit y avoir un quadrillion.

```
0 1 2 3 4
1 2 3 4 5
2 3 4 5 6
3 4 5 6 7
```

Modifiez ensuite le code de sorte à pouvoir changer séparément la
largeur et la hauteur de l'échiquier. Vous pouvez appeler `prompt` à
deux reprises, ou bien interpréter la chaîne donnée par
l'utilisateur·rice.
