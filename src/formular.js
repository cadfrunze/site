

const IMPORTANTE = ["numele", "prenumele", "strada", "numarul", "localitate", "jud"]; // cele marcate din html cu *


var contor = 0; // In functie de valoare, va afisa un buton de incarcare date din inputuri, pt afisare valoarea trebuie sa fie == 5 de la functia vericare camp
var adevarat = null;
let elem = document; // -> vezi iterarea pt eventuri
var var_bool = true;

function test() {
}

function verificaCamp(camp)
/* Provine din functia handler, cu scopul de a verifica conform cerintelor
fiecare camp (din toate elementele de tip input)
*/
{
    const element = document.getElementById(camp);
    //console.log(element.value.trim());
    if (camp == "numele"){
        if (element.value.trim().length < 3){
            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina minim trei litere`);
            var_bool = false;
            element.value = "";
            elem.focus();
            //return var_bool;
        }
        for (var i = 0; i < element.value.trim().length; i++){
            if (!isNaN(element.value.trim()[i]) || !element.value.trim()[i].match(/[a-zA-Z]/)){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina numere sau simboluri`);
                var_bool = false;
                element.value = "";
                elem.focus();
                break;
                //return var_bool;
            }
        }
        
    }
    else if (camp == "prenumele"){
        if (element.value.trim().length < 3){
            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina minim trei litere`);
            var_bool = false;
            element.value = "";
            elem.getElementById(camp).focus();
            //return var_bool;
        }
        for (var i = 0; i < element.value.trim().length; i++){
            if (!isNaN(element.value.trim()[i]) || !element.value.trim()[i].match(/[a-zA-Z]/)){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina numere sau simboluri`);
                var_bool = false;
                element.value = "";
                elem.focus();
                break;
                //return var_bool;
            }
        }
    }
    else if (camp == "strada"){
        if (element.value.trim().length < 3){
            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina minim trei litere`);
            var_bool = false;
            element.value = "";
            elem.focus();
            //return var_bool;
            }
        for (i = 0; i < element.value.trim().length; i++){
            if (!isNaN(element.value.trim()[i])){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina cifre`);
                var_bool = false;
                element.value = "";
                elem.focus();
                break;
                //return var_bool;
            }
        
        }
    }
    else if (camp == "localitate"){
        for (var i = 0; i < element.value.trim().length; i++){
            if (!isNaN(element.value.trim()[i])){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} nu este permis sa contina cifre`);
                var_bool = false;
                element.value = "";
                elem.focus();
                break;
                //return var_bool;
            }
    
        }
        if (element.value.trim().length < 3){
            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina minim trei litere`);
            var_bool = false;
            element.value = "";
            elem.focus();
            //return var_bool;
        }
        
    }
    else if (camp == "numarul"){
        if (element.value.trim().length < 1){
            alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina cel putin o cifra`);
            var_bool = false;
            element.value = "";
            elem.focus();
        }
        for (var i = 0; i <= element.value.trim().length; i++){
            if (!isNaN(element.value.trim()[i])){
                break;
            }
            else if (i == (element.value.trim().length - 1)){
                alert(`Campul ${camp.charAt(0).toUpperCase() + camp.slice(1)} trebuie sa contina cel putin o cifra`);
                element.value = "";
                elem.focus();
            }            
        }

    }
    else if (camp == "jud"){
        if (element.value.trim() == ""){
            alert(`Te rog selecteaza un judet`);
            
        }
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




