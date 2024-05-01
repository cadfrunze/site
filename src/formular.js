

const IMPORTANTE = ["numele", "prenumele", "strada", "numarul", "localitate", "jud"]; // cele marcate din html cu *



let elem = document; // -> vezi iterarea pt eventuri

let elemente_importante = {
    // Daca toate elementele importante sunt adevarate va afisa un element html de tip button
    "numele": false,
    "prenumele": false,
    "strada": false,
    "numarul": false,
    "localitate": false,
    "jud": false,
}


function verificaCamp(camp)
/* Provine din functia handler, cu scopul de a verifica conform cerintelor
fiecare camp (din toate elementele de tip input)
*/
{
    const element = document.getElementById(camp);
    //console.log(element.value.trim());
    if (camp == "numele"){
        for (var i = 0; i < element.value.trim().length; i++){
            if (!isNaN(element.value.trim()[i]) || !element.value.trim()[i].match(/[a-zA-Z]/)){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina numere sau simboluri`);
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
    else if (camp == "prenumele"){
        for (var i = 0; i < element.value.trim().length; i++){
            if (!isNaN(element.value.trim()[i]) || !element.value.trim()[i].match(/[a-zA-Z]/)){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina numere sau simboluri`);
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
    else if (camp == "strada"){
        for (i = 0; i < element.value.trim().length; i++){
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
    console.clear();
    for (let elem1 in elemente_importante){
        console.log(elem1 + ": " + elemente_importante[elem1]);
    }
    if (Object.values(elemente_importante).every(elem1 => elem1 == true)){
        const elementButton = document.createElement("button");
        elementButton.textContent = "Genereaza Instiintare";
        document.body.appendChild(elementButton);
    }
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
    elem.addEventListener("blur", handlerFunction, {once:false}); // eventul asteapta pana userul trece la urmatorul camp
    
});




