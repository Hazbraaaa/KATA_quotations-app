# 🧠 Quotations App

> Faire une application de listing de citations d'auteurs.

---

## 📌 À propos

> Ce projet a été réalisé en solo dans le cadre d'une formation à Ada Tech School afin de développer une petite application web permettant de centraliser vos citations ou répliques favorites.

---

## ✅ Fonctionnalités

- ✅ Modifier dynamiquement le contenu et les attributs des éléments HTML via le DOM
- ✅ Ajouter, supprimer et remplacer des éléments dans le DOM
- ✅ Appeler des fonctions
- ✅ Développer une page HTML avec les principales balises (html, head, body, h1, p, a, img, div)
- ✅ Personnaliser les balises avec les attributs (id, class, href, src, etc)
- ✅ Modifier les styles CSS dans le DOM via JavaScript

Ajoute une variable globale qui va pouvoir garder en mémoire les citations dans un tableau. Utilise une structure JSON pour les garder comme suit :

```
const citation = { author: "Simone de Beauvoir", text: "On ne naît pas femme, on le devient."}
```

Utilise ensuite le local storage pour stocker le contenu de cette variable. À l'affichage de la page, pensez à en charger aussi le contenu.
