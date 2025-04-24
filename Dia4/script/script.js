function fetchPoke() {
    let id = ""
    id = document.getElementById("pokeId").value;
    let pepito = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    if (id == "") {
        id=1;
    }
    pepito.open('GET', url);
    pepito.onreadystatechange = (function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            console.log(response["name"]);
            displayPoke(response);
            //"{"name":"Pedro","lastname":Gomez}"
            spritepoke(response);
        }
    });
    pepito.send();

}
function displayPoke(data) {
    let pokemon = document.getElementById("showUp");
    let nombre = (data["name"].charAt(0).toUpperCase()) + (data["name"].slice(1));
    pokemon.innerHTML = `${data["id"]} - ${nombre}`;
}
function spritepoke(data) {
    let sprite = document.getElementById("sprite");
    sprite.innerHTML = `<img style="width=2vw" id="sprite_gif" src=${data["sprites"]["other"]["showdown"]["front_default"]}>`;
    console.log(sprite)
}

function minus_id(vl) {
    if (vl == "") {
        vl="1"
        console.log(vl)
    }
    else if (vl < 0) {
        vl = "1"
        console.log(vl)
    }
    else {
        vl -= "1"
        console.log(vl)
    };
    console.log("Testing");
    return vl;
}

function plus_id(vl) {
    if (vl == "") {
        vl="1"
    }
    else {
        vl += "1"
        console.log(vl)
    };
    console.log("Testing");
    return vl;
}

const input = document.getElementById("pokeId");
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        fetchPoke();
    }
});