

const IMPORTANTE = ["numele", "prenumele", "strada", "numarul", "loc", "jud"];

function completat(camp){
    const element = document.getElementById(camp);
    return element.value.trim() !== "";
}

function necompletat(camp) {
    const element = document.getElementById(camp);
    if (element){
        if (!completat(camp)){
            const marcator = document.createElement("span");
            marcator.innerHTML = "X";
            element.parentNode.insertBefore(marcator, element.nextSibling);
        }
        else{
            if (document.body.contains(marcator)){
                console.log("sdsddssd");
            }
            
        }
    }
}

IMPORTANTE.forEach(camp => {
    const element = document.getElementById(camp);
    if (element){
        element.addEventListener("blur", () => necompletat(camp));
    }
});