

let places = [
    "in a magical forest",
    "under the ocean",
    "on the moon",
    "inside a candy castle",
    "in a floating city"
];

let characters = [
    "a talking cat",
    "an alien",
    "a flying elephant",
    "a mysterious old man",
    "a tiny dragon"
];

let actions = [
    "was coding with his girlfriend",
    "was cooking a book in the pot",
    "was pulling out the characters of TV",
    "was unfollowing a bug's account on instagram",
    "was talking with his pant's elastic band"
];

let objects = [
    "incense burner",
    "sundial",
    "wind chime",
    "spinning wheel",
    "lint remover"
];

let show = document.querySelector('#dream');

let btn = document.querySelector('#generation');

btn.addEventListener("click", function() {
    
    let placeIndex = Math.floor(Math.random() * places.length);
    let characterIndex = Math.floor(Math.random() * characters.length);
    let actionIndex = Math.floor(Math.random() * actions.length);
    let objectIndex = Math.floor(Math.random() * objects.length);

    let dream = "Last night, " +
    characters[characterIndex] + " " +
    actions[actionIndex] + " " +
    places[placeIndex] + " with a " +
    objects[objectIndex] + "!";

    show.textContent = dream ; 
})

