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
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/draw/?count=2`;
    let pepito = new XMLHttpRequest();
    pepito.open(`PUT`, url);
    pepito.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
        }
    };
};

function cards_inicials(){
    shufflecards();
    let baraja = "5ods5xzzupvj";
    let card_ma = document.getElementById("card_machine");
    let card_hu = document.getElementById("card_human");
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/draw/?count=2`;
    let pepito = new XMLHttpRequest();
    pepito.open(`GET`, url);
    pepito.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            card_ma.innerHTML = `<img src="${response["cards"][0]["images"]["svg"]}">`;
            card_hu.innerHTML = `<img src="${response["cards"][1]["images"]["svg"]}">`;
            console.log("funciono")
        }
    };
    pepito.send();
};
