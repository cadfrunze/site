
const IMPORTANTE = ["numele", "prenumele", "strada", "numarul", "localitate", "jud"]; // cele marcate din html cu *
// ---------------------------------------------------------------------------//


let elem = document; // -> vezi iterarea pt eventuri

// Pentru style
let numeP = document.getElementById("numeP");
let prenumeP = document.getElementById("prenumeP");
let stradaP = document.getElementById("stradaP");
let numarulP = document.getElementById("numarulP");
let localitateP = document.getElementById("localitateP");
let judP = document.getElementById("judP");
// -----------------------------------------------------------------------------------------------------------------------------------------------//
let elemente_importante = {
    // Daca toate elementele importante sunt adevarate va afisa un element html de tip button
    "numele": false,
    "prenumele": false,
    "strada": false,
    "numarul": false,
    "localitate": false,
    "jud": false,
}
// -----------------------------------------------------------------------------------------------------------------------------------------------//

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
// -----------------------------------------------------------------------------------------------------------------------------------------------//
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
            for (var i = 0; i < element.value.length; i++){
                if (!isNaN(element.value.trim()[i]) || !element.value[i].match(/[a-zA-Z]/)){
                    if (element.value[i] == " "){
                        numeP.style.color = "red";
                        numeP.textContent = "✘";
                        elemente_importante[camp] = false;
                        break;
                    }
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
            for (var i = 0; i < element.value.length; i++){
                if (!isNaN(element.value.trim()[i]) || !element.value[i].match(/[a-zA-Z]/)){
                    if (element.value[i] == " " || element.value.trim()[i] == "-"){
                        prenumeP.style.color = "green";
                        prenumeP.textContent = "✓";
                        elemente_importante[camp] = true;
                    }
                    else{
                        prenumeP.style.color = "red";
                        prenumeP.textContent = "✘";
                        elemente_importante[camp] = false;
                        break;
                    }
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
        let contor = 0;
        stradaP.style.backgroundColor = "white";
        stradaP.style.position = "static";
        stradaP.style.display = "inline-block";
        if (element.value.length < 3){
            stradaP.style.color = "red";
            stradaP.innerHTML = `✘`;
            elemente_importante[camp] = false;  
        }
        else{
            for (i = 0; i < element.value.length; i++){
                if (!element.value[i].match(/[a-zA-Z]/) || !isNaN(element.value.trim()[i])){
                    if (element.value[i] == " "){
                        contor += 1;
                        if (contor > 1){
                            stradaP.style.color = "red";
                            stradaP.innerHTML = `✘`;
                            elemente_importante[camp] = false;  
                            break;
                        }
                        else{
                            stradaP.style.color = "green";
                            stradaP.innerHTML = `✓`;
                            elemente_importante[camp] = true;
                        }
                    }
                    else if (!isNaN(element.value.trim()[i])){
                        stradaP.style.color = "red";
                        stradaP.innerHTML = `✘`;
                        elemente_importante[camp] = false;  
                        break; 
                    }
                    else if (!element.value[i].match(/[a-zA-Z]/)){
                        contor += 1;
                        if (contor > 1){
                            stradaP.style.color = "red";
                            stradaP.innerHTML = `✘`;
                            elemente_importante[camp] = false;  
                            break;
                        }
                    }
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
        let contor = 0;
        localitateP.style.backgroundColor = "white";
        localitateP.style.position = "static";
        localitateP.style.display = "inline-block";
        if (element.value.length < 3){
            localitateP.style.color = "red";
            localitateP.innerHTML = `✘`;
            elemente_importante[camp] = false;  
        }
        else{
            for (i = 0; i < element.value.length; i++){
                if (!element.value[i].match(/[a-zA-Z]/) || !isNaN(element.value.trim()[i])){
                    if (element.value.trim()[i] == " "){
                        contor += 1;
                        if (contor > 1){
                            localitateP.style.color = "red";
                            localitateP.innerHTML = `✘`;
                            elemente_importante[camp] = false;  
                            break;
                        }
                        else{
                            localitateP.style.color = "green";
                            localitateP.innerHTML = `✓`;
                            elemente_importante[camp] = true;
                        }
                        
                    }
                    else if (!isNaN(element.value.trim()[i])){
                        localitateP.style.color = "red";
                        localitateP.innerHTML = `✘`;
                        elemente_importante[camp] = false;  
                        break; 
                    }
                    else if (!element.value[i].match(/[a-zA-Z]/)){
                        contor += 1;
                        if (contor > 1){
                            localitateP.style.color = "red";
                            localitateP.innerHTML = `✘`;
                            elemente_importante[camp] = false;  
                            break;
                        }
                    }
                }
                else{
                    localitateP.style.color = "green";
                    localitateP.innerHTML = `✓`;
                    elemente_importante[camp] = true;
                }
            }
        }
        
    }
    else if (camp == "numarul"){
        numarulP.style.backgroundColor = "white";
        numarulP.style.color = "red";
        numarulP.style.position = "static";
        numarulP.style.display = "inline-block";
        numarulP.innerHTML = `✘`
        if ((element.value.trim().length <= 1) && isNaN(element.value.trim()) || element.value.trim() == ""){
            numarulP.innerHTML = `✘`;
        }
        else if (element.value.trim().length > 4){
            numarulP.innerHTML = `✘`
        }
        else{
            for (var i = 0; i <= element.value.trim().length; i++){
                if (!isNaN(element.value.trim()[i])){
                    numarulP.style.color = "green";
                    numarulP.innerHTML = `✓`;
                    elemente_importante[camp] = true;
                    break;
                }
                else if (i == (element.value.trim().length - 1)){
                    numarulP.style.color = "red";
                    numarulP.innerHTML = `✘`;
                    elemente_importante[camp] = false;
                }            
            } 
        }


    }
    else if (camp == "jud"){
        judP.style.backgroundColor = "white";
        judP.style.color = "red";
        judP.style.position = "static";
        judP.style.display = "inline-block";
        judP.innerHTML = `✘`
        if (element.value.trim() == ""){
            elemente_importante[camp] = false;
        }
        else{
            judP.style.color = "green";
            judP.innerHTML = `✓`;
            elemente_importante[camp] = true;
        }
    }
    generareButton();
}

// -----------------------------------------------------------------------------------------------------------------------------------------------//


function handler(camp) 
/* Vezi iterarea, returneaza o functie anonima
pt acel event de la addEventListener
*/
{   
    return function () {verificaCamp(camp)};
}
// -----------------------------------------------------------------------------------------------------------------------------------------------//

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
            prenumeP.textContent = "Prenume: Introduceți doar litere (ATENTIE!: minim 3 litere!, FARA cifre!)";
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
            numarulP.style.backgroundColor = "grey";
            numarulP.style.color = "red";
            numarulP.style.bottom = "10%";
            numarulP.style.left = "1%";
            numarulP.innerHTML = `Nr. strada: CEL PUTIN O CIFRA<br />Se accepta orice fel de caractere<br />Nu mai mult de 4 caractere<br /> Exemplu: 1a; a12!`
            numarulP.style.position = "absolute";
            numarulP.style.display = "grid";
        }
        else if (camp == "localitate"){
            localitateP.style.backgroundColor = "grey";
            localitateP.style.color = "red";
            localitateP.style.bottom = "10%";
            localitateP.style.left = "1%";
            localitateP.innerHTML = `Localitate: Min. 3 litere<br />ATENTIE!:<br />1. Se accepta CEL MULT un caracter SPECIAL!<br />2. FARA cifre!`
            localitateP.style.position = "absolute";
            localitateP.style.display = "grid";
        }
        else if (camp == "jud"){
            judP.style.backgroundColor = "grey";
            judP.style.color = "red";
            judP.textContent = `Selecteaza un judet`;
            judP.style.bottom = "10%";
            judP.style.left = "1%";
            judP.style.position = "absolute";
            judP.style.display = "grid";
        }
    });
    // -----------------------------------------------------------------------------------------------------------------------------------------------//

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
                    if (!isNaN(element.value.trim()[i]) || !element.value[i].match(/[a-zA-Z]/) || element.value[i] == " "){
                        if (element.value[i] == " "){
                            element.value = "";
                            numeP.style.color = "red";
                            numeP.textContent = "✘";
                            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina simboluri`);
                            document.getElementById("blocul").focus();
                            break;
                        }
                        else{
                            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina cifre`);
                            element.value = "";
                            numeP.style.color = "red";
                            numeP.textContent = "✘";
                            document.getElementById("blocul").focus();
                            break;
                        }
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
                for (var i = 0; i < element.value.length; i++){
                    if (!isNaN(element.value.trim()[i]) || element.value.trim().length < 3){
                        if (element.value.trim()[i] == " "){
                            prenumeP.style.color = "green";
                            prenumeP.textContent = "✓";
                        }
                        else{
                            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina numere sau simboluri`);
                            element.value = "";
                            prenumeP.style.color = "red";
                            prenumeP.textContent = "✘";
                            document.getElementById("blocul").focus();
                            break;
                        }
                    }
                    else{
                        prenumeP.style.color = "green";
                        prenumeP.textContent = "✓";
                    }
                }
            }
        }
        else if (camp == "strada"){
            let contor = 0;
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
                for (i = 0; i < element.value.length; i++){
                    if (!element.value[i].match(/[a-zA-Z]/) || !isNaN(element.value.trim()[i])){
                        if (element.value.trim()[i] == " "){
                        }
                        else if (!isNaN(element.value.trim()[i])){
                            element.value = "";
                            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina cifre`);
                            stradaP.style.color = "red";
                            stradaP.innerHTML = `✘`;
                            break; 
                        }
                        else if (!element.value[i].match(/[a-zA-Z]/)){
                            contor += 1;
                            if (contor > 1){
                                element.value = "";
                                alert(`La campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis mai mult de 1 car. special!`);
                                stradaP.style.color = "red";
                                stradaP.innerHTML = `✘`;
                                break;
                            }
                        }
                    }
                    else{
                        stradaP.style.color = "green";
                        stradaP.innerHTML = `✓`;
                        elemente_importante[camp] = true;
                    }
                }
            }
        }
        else if (camp == "numarul"){
            numarulP.style.backgroundColor = "white";
            numarulP.style.position = "static";
            numarulP.style.display = "inline-block";
            numarulP.style.color = "red";
            if ((element.value.trim().length <= 1) && isNaN(element.value.trim()) || element.value.trim() == ""){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina cel putin o cifra`);
                numarulP.innerHTML = `✘`;
                element.value = "";
                document.getElementById("blocul").focus()
            }
            else if (element.value.trim().length > 4){
                numarulP.innerHTML = `✘`
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} prea multe caractere`);
                element.value = "";
                document.getElementById("blocul").focus()
            }
            else{
                for (var i = 0; i <= element.value.trim().length; i++){
                    if (!isNaN(element.value.trim()[i])){
                        numarulP.style.color = "green";
                        numarulP.innerHTML = `✓`
                        break;
                    }
                    else if (i == (element.value.trim().length - 1)){
                        alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina cel putin o cifra`);
                        numarulP.innerHTML = `✘`;
                        element.value = "";
                        document.getElementById("blocul").focus();
                    }            
                } 
            }
        }
        else if (camp == "localitate"){
            let contor = 0;
            localitateP.style.backgroundColor = "white";
            localitateP.style.position = "static";
            localitateP.style.display = "inline-block";
            if (element.value.trim().length < 3){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina minim trei litere`);
                element.value = "";
                localitateP.style.color = "red";
                localitateP.innerHTML = `✘`;
                document.getElementById("blocul").focus();
            }
            else{
                for (i = 0; i < element.value.length; i++){
                    if (!element.value[i].match(/[a-zA-Z]/) || !isNaN(element.value.trim()[i])){
                        if (element.value.trim()[i] == " "){
                        }
                        else if (!isNaN(element.value.trim()[i])){
                            element.value = "";
                            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina cifre`);
                            localitateP.style.color = "red";
                            localitateP.innerHTML = `✘`;
                            break; 
                        }
                        else if (!element.value[i].match(/[a-zA-Z]/)){
                            contor += 1;
                            if (contor > 1){
                                element.value = "";
                                alert(`La campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis mai mult de 1 car. special!`);
                                localitateP.style.color = "red";
                                localitateP.innerHTML = `✘`;
                                break;
                            }
                        }
                    }
                    else{
                        localitateP.style.color = "green";
                        localitateP.innerHTML = `✓`;
                        elemente_importante[camp] = true;
                    }
                }
            }
        }
        else if (camp == "jud"){
            judP.style.backgroundColor = "white";
            judP.style.color = "red";
            judP.style.position = "static";
            judP.style.display = "inline-block";
            judP.innerHTML = `✘`
        if (element.value.trim() == ""){
            alert(`La campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} te rog selecteaza un judet`);
        }
        else{
            judP.style.color = "green";
            judP.innerHTML = `✓`;
        }
        }
        generareButton();
    });
});
// -----------------------------------------------------------------------------------------------------------------------------------------------//




