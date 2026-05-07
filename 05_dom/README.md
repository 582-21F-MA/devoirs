# DOM

Pour ce devoir, votre tâche est de concevoir les deux fonctions
suivantes :

- Une fonction `findChild` qui prend en argument un nœud élément et une
  chaîne, et qui retourne le premier nœud enfant dont le contenu texte
  correspond à la chaîne. La propriété `textContent` d'un nœud élément
  permet d'accéder à son contenu texte. La fonction retourne `null` si
  aucun nœud enfant n'a le bon contenu texte. En JSDoc, on utilise `|`
  pour indiquer un type _ou_ un autre. La fonction `findChild` retourne
  donc une valeur de type `HTMLElement | null`.

- Une fonction `areSiblings` qui prend en argument un nœud élément et
  deux chaînes, et qui détermine s'il y a deux nœuds enfants dont le
  contenu texte correspond respectivement à l'une des deux chaînes ET si
  ces nœuds ont le même nœud parent.

Utilisez les cas de test ci-dessous pour tester votre code :

```js
test("return child with matching text content", () => {
    const parent = document.createElement("div");
    expect(findChild(parent, "foo")).toBe(null);

    parent.innerHTML = "<p>hello <span>foo</span></p>";
    const child = document.createElement("span");
    child.textContent = "foo";
    expect(findChild(parent, "foo")).toEqual(child);
});

test("return true if matching children are siblings", () => {
    const parent = document.createElement("div");
    parent.innerHTML = `
        <table>
            <tr>
                <td>Go</td>
                <td>Java</td>
            </tr>
            <tr>
                <td>C++</td>
                <td>Zig</td>
            </tr>
        </table>
    `;
    expect(areSiblings(parent, "Go", "Java")).toBe(true);
    expect(areSiblings(parent, "Go", "Zig")).toBe(false);
    expect(areSiblings(parent, "C", "OCaml")).toBe(false);
});
```
