function mostrarRecuadro(){
    const toggle = document.getElementById("help");
    if (toggle.style.opacity==0){
        toggle.style.opacity=1;
    }
    else{
        toggle.style.opacity=0;
    }
}

function shufflecards(){
    const baraja = "5ods5xzzupvj";
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/shuffle`;
    let pepito = new XMLHttpRequest();
    pepito.open(`GET`, url);
    pepito.send();
};

function cards(){
    shufflecards();
    let baraja = "5ods5xzzupvj";
    const card_hu = document.getElementById("card_human");
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/draw/?count=1`;
    let pepito = new XMLHttpRequest();
    pepito.open(`GET`, url);
    pepito.onreadystatechange = (function(){
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            card_hu.innerHTML = `<img class="img_human" style="width: 12vw;" " src="${response["cards"][0]["image"]}">`;
            console.log("funciono")
        }
    });
    pepito.send();
};

cards();

const button = document.getElementById("cards_inicial")
button.addEventListener('click', (e) => {
    cards();
})
