

const IMPORTANTE = ["numele", "prenumele", "strada", "numarul", "loc", "jud"];

function completat(camp){
    const element = document.getElementById(camp);
    return element.value.trim() !== "";
}




function necompletat(camp) {
    const element = document.getElementById(camp);
        if (!completat(camp)){
            const marcator = document.createElement("paragraph");
            marcator.innerHTML = "X";
            element.parentNode.insertBefore(marcator, element.nextSibling);
        }
        else{
            const marcator = document.createElement("paragraph");
            marcator.innerHTML = "a";
            element.parentNode.insertBefore(marcator, element.nextSibling);          
        }
    
}

IMPORTANTE.forEach(camp => {
    const element = document.getElementById(camp);
    if (element){
        element.addEventListener("blur", () => necompletat(camp));
    }
});