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

window.onload = function () {
    shufflecards();
    cards();
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
            console.log("funciono");
            if (response["value"]==="ACE"){
                let valor_inicial = 1;
                return valor_inicial;
            }
            else if (response["value"]==="JACK"){
                let valor_inicial = 11;
                return valor_inicial;
            }
            else if (response["value"]==="QUEEN"){
                let valor_inicial = 12;
                return valor_inicial;
            }
            else if (response["value"]==="KING"){
                let valor_inicial = 13;
                return valor_inicial;
            }
            else{
                let valor_inicial = response["value"];
                return valor_inicial;
            };
        }
    });
    pepito.send();
};

function new_card(){
    let pepit = new XMLHttpRequest();
    let baraja = "5ods5xzzupvj";
    let nwi = document.getElementById("card_new");
    let url = `https://deckofcardsapi.com/api/deck/${baraja}/draw/?count=1`;
    pepit.open(`GET`, url);
    pepit.onreadystatechange = (function(){
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            nwi.innerHTML = `<img class="img_new" style="width: 12vw;" " src="${response["cards"][0]["image"]}">`;
            if (response["value"]==="ACE"){
                let valor_final = 1;
                return valor_final;
            }
            else if (response["value"]==="JACK"){
                let valor_final = 11;
                return valor_final;
            }
            else if (response["value"]==="QUEEN"){
                let valor_final = 12;
                return valor_final;
            }
            else if (response["value"]==="KING"){
                let valor_final = 13;
                return valor_final;
            }
            else{
                let valor_final = response["value"];
                return valor_final;
            };
        }
    });
    pepit.send();
}

const button = document.getElementById("nueva_card_higher")
button.addEventListener('click', (e) => {
    new_card();
    let vf = parseInt(new_card());
    let vi = parseInt(cards());
    if (vi < vf) {
        console.log("gano")
    }
    else{
        console.log("mocho")
    }
})
const button2 = document.getElementById("nueva_card_lower")
button2.addEventListener('click', (a) => {
    new_card();
    let vf = new_card();
    let vi = cards();
    if (vf < vi) {
        console.log("gano")
    }
    else{
        console.log("mocho")
    }
})
