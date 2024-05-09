
const IMPORTANTE = ["numele", "prenumele", "strada", "numarul", "localitate", "jud"]; // cele marcate din html cu *
// ---------------------------------------------------------------------------//


let elem = document; // -> vezi iterarea pt eventuri

// Pentru style
let numeP = document.getElementById("numeP");
let prenumeP = document.getElementById("prenumeP");
let stradaP = document.getElementById("stradaP");
// ---------------------------------------------------------------------------//

let elemente_importante = {
    // Daca toate elementele importante sunt adevarate va afisa un element html de tip button
    "numele": false,
    "prenumele": false,
    "strada": false,
    "numarul": false,
    "localitate": false,
    "jud": false,
}
// ---------------------------------------------------------------------------//

function generareButton(){
    // Genereare el. html de tip button daca toate elemente_importante sunt adevarate!
    if (Object.values(elemente_importante).every(elem1 => elem1 == true)){
        let elementButton = document.getElementById("genereaza");
        if (!elementButton){
            elementButton = document.createElement("button");
            elementButton.id = "genereaza";
            elementButton.textContent = "Genereaza Instiintare";
            return document.body.appendChild(elementButton);
        }
        
    }
    else {
        elementButton = document.getElementById("genereaza");
        if (elementButton){
            return elementButton.remove();
        }
    }
}
// ---------------------------------------------------------------------------//

function verificaCamp(camp)
/* Provine din functia handler, cu scopul de a verifica conform cerintelor
fiecare camp (din toate elementele de tip input)
*/
{   const element = document.getElementById(camp);
    if (camp == "numele"){
        numeP.style.backgroundColor = "white";
        if (element.value.trim().length < 3){
            numeP.style.color = "red";
            numeP.textContent = "✘";
            elemente_importante[camp] = false;
        }
        else{
            for (var i = 0; i < element.value.trim().length; i++){
                if (!isNaN(element.value.trim()[i]) || !element.value.trim()[i].match(/[a-zA-Z]/)){
                    numeP.style.color = "red";
                    numeP.textContent = "✘";
                    elemente_importante[camp] = false;
                    break;
                    }
                else{
                    numeP.style.color = "green";
                    numeP.textContent = "✓";
                    elemente_importante[camp] = true;
                    }
                }
        }
        }
    if (camp == "prenumele"){
        prenumeP.style.backgroundColor = "white";
        if (element.value.trim().length < 3){
            prenumeP.style.color = "red";
            prenumeP.textContent = "✘";
            elemente_importante[camp] = false;
        }
        else{
            for (var i = 0; i < element.value.trim().length; i++){
                if (!isNaN(element.value.trim()[i]) || !element.value.trim()[i].match(/[a-zA-Z]/)){
                    prenumeP.style.color = "red";
                    prenumeP.textContent = "✘";
                    elemente_importante[camp] = false;
                    break;
                }
                else{
                    prenumeP.style.color = "green";
                    prenumeP.textContent = "✓";
                    elemente_importante[camp] = true;
                }
            }
        }
    }
    else if (camp == "strada"){
        stradaP.style.backgroundColor = "white";
        stradaP.style.position = "static";
        stradaP.style.display = "inline-block";
        if (element.value.trim().length < 3){
            stradaP.style.color = "red";
            stradaP.innerHTML = `✘`;
            elemente_importante[camp] = false;  
        }
        else{
            let contor = 0;
            for (i = 0; i < element.value.trim().length; i++){
                if (contor > 1){
                    stradaP.style.color = "red";
                    stradaP.innerHTML = `✘`;
                    elemente_importante[camp] = false;  
                    break;
                }
                else if (!isNaN(element.value.trim()[i])){
                    stradaP.style.color = "red";
                    stradaP.innerHTML = `✘`;
                    elemente_importante[camp] = false;  
                    break;
                }
                else if (!element.value.trim()[i].match(/[a-zA-Z]/)){
                    contor += 1;
                }
                else{
                    stradaP.style.color = "green";
                    stradaP.innerHTML = `✓`;
                    elemente_importante[camp] = true;
                }
            }
        }
    }
    else if (camp == "localitate"){
        for (var i = 0; i < element.value.trim().length; i++){
            if (!isNaN(element.value.trim()[i])){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina cifre`);
                element.value = "";
                document.getElementById("blocul").focus();
                elemente_importante[camp] = false;
                break;
            }
            else{
                elemente_importante[camp] = true;
            }
    
        }
        if (element.value.trim().length < 3){
            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina minim trei litere`);
            element.value = "";
            document.getElementById("blocul").focus();
            elemente_importante[camp] = false;
        }
        else{
            elemente_importante[camp] = true;
        }
        
    }
    else if (camp == "numarul"){
        for (var i = 0; i <= element.value.trim().length; i++){
            if (!isNaN(element.value.trim()[i])){
                elemente_importante[camp] = true;
                break;
            }
            else if (i == (element.value.trim().length - 1)){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina cel putin o cifra`);
                element.value = "";
                document.getElementById("blocul").focus();
                elemente_importante[camp] = false;
            }            
        }
        if (element.value.trim().length < 1){
            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina cel putin o cifra`);
            element.value = "";
            document.getElementById("blocul").focus();
            elemente_importante[camp] = false;
        }
        else{
            elemente_importante[camp] = true;
        }

    }
    else if (camp == "jud"){
        if (element.value.trim() == ""){
            alert(`Te rog selecteaza un judet`);
            document.getElementById("blocul").focus();
            elemente_importante[camp] = false;
        }
        else{
            elemente_importante[camp] = true;
        }
    }
    generareButton();
}



function handler(camp) 
/* Vezi iterarea, returneaza o functie anonima
pt acel event de la addEventListener
*/
{   
    return function () {verificaCamp(camp)};
}

IMPORTANTE.forEach(camp => {
    elem = document.getElementById(camp);
    const handlerFunction = handler(camp);
    elem.addEventListener("input", handlerFunction, {once:false}); // eventul asteapta pana userul trece la urmatorul camp
    elem.addEventListener("focus", function() {
        if (camp == "numele") {
            numeP.style.background = "grey";
            numeP.style.color = "red";
            numeP.textContent = "Numele: Introduceți doar litere (ATENTIE!: minim 3 litere!, FARA caractere speciale!, FARA cifre!)";
            numeP.style.display = "inline-block"; // Afișează pop-up-ul
        }
        else if (camp == "prenumele"){
            prenumeP.style.background = "grey";
            prenumeP.style.color = "red";
            prenumeP.textContent = "Prenume: Introduceți doar litere (ATENTIE!: minim 3 litere!, FARA caractere speciale!, FARA cifre!)";
            prenumeP.style.display = "inline-block";
        }
        else if (camp == "strada"){
            stradaP.style.backgroundColor = "grey";
            stradaP.style.color = "red";
            stradaP.style.bottom = "10%";
            stradaP.style.left = "1%";
            stradaP.innerHTML = `Strada: Min. 3 litere<br />ATENTIE!:<br />1. Se accepta CEL MULT un caracter SPECIAL!<br />2. FARA cifre!`
            stradaP.style.position = "absolute";
            stradaP.style.display = "grid";
        }
        else if (camp == "numarul"){
            let elemStyle = document.getElementById("numarulP");
            elemStyle.style.position = "static";
            elemStyle.style.display = "inline-block";
        }
        else if (camp == "localitate"){
            let elemStyle = document.getElementById("localitateP");
            elemStyle.style.position = "static";
            elemStyle.style.display = "inline-block";
        }
    });
    elem.addEventListener("blur", function() {
        const element = document.getElementById(camp);
        if (camp == "numele") {
            numeP.style.background = "white";
            if (element.value.trim().length < 3){
                numeP.style.color = "red";
                numeP.textContent = "✘";
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina minim trei litere`);
                element.value = "";
                document.getElementById("blocul").focus();
            }
            else {
                for (var i = 0; i < element.value.trim().length; i++){
                    if (!isNaN(element.value.trim()[i]) || !element.value.trim()[i].match(/[a-zA-Z]/)){
                        alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina cifre sau simboluri`);
                        element.value = "";
                        numeP.style.color = "red";
                        numeP.textContent = "✘";
                        document.getElementById("blocul").focus();
                        break;
                    }
                    else{
                        numeP.style.color = "green";
                        numeP.textContent = "✓";
                    }
                }  
            }
        }
        else if (camp == "prenumele"){
            prenumeP.style.background = "white";
            if (element.value.trim().length < 3){
                prenumeP.style.color = "red";
                prenumeP.textContent = "✘";
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina minim trei litere`);
                element.value = "";
                document.getElementById("blocul").focus();
            }
            else{
                for (var i = 0; i < element.value.trim().length; i++){
                    if (!isNaN(element.value.trim()[i]) || !element.value.trim()[i].match(/[a-zA-Z]/) || element.value.trim().length < 3){
                        alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina numere sau simboluri`);
                        element.value = "";
                        prenumeP.style.color = "red";
                        prenumeP.textContent = "✘";
                        document.getElementById("blocul").focus();
                        break;
                    }
                    else{
                        prenumeP.style.color = "green";
                        prenumeP.textContent = "✓";
                    }
                }
            }
        }
        else if (camp == "strada"){
            stradaP.style.backgroundColor = "white";
            stradaP.style.position = "static";
            stradaP.style.display = "inline-block";
            if (element.value.trim().length < 3){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina minim trei litere`);
                element.value = "";
                stradaP.style.color = "red";
                stradaP.innerHTML = `✘`;
                document.getElementById("blocul").focus();
            }
            else{
                let contor = 0;
            for (i = 0; i < element.value.trim().length; i++){
                if (contor > 1){
                    element.value = "";
                    alert(`La campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis mai mult de 2 car. speciale!`);
                    stradaP.style.color = "red";
                    stradaP.innerHTML = `✘`;
                    break;
                }
                else if (!isNaN(element.value.trim()[i])){
                    element.value = "";
                    alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina cifre`);
                    stradaP.style.color = "red";
                    stradaP.innerHTML = `✘`;
                    break;
                }
                else if (!element.value.trim()[i].match(/[a-zA-Z]/)){
                    contor += 1;
                }
                else{
                    stradaP.style.color = "green";
                    stradaP.innerHTML = `✓`;
                }
                }
            }
        }
        else if (camp == "numarul"){
            let elemStyle = document.getElementById("numarulP");
            elemStyle.style.display = "none";
        }
        else if (camp == "localitate"){
            let elemStyle = document.getElementById("localitateP");
            elemStyle.style.display = "none";
        }
        generareButton();
    });
});




