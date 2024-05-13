

export function activareDate(){
    let numeData = document.getElementById("numele");
    let prenumeData = document.getElementById("prenumele");
    let stradaData = document.getElementById("strada");
    let numarData = document.getElementById("numarul");
    let blocData = document.getElementById("blocul");
    let apartamentData = document.getElementById("apartament");
    let localitateData = document.getElementById("localitate");
    let judetData = document.getElementById("jud");
    numeData.disabled = true;
    prenumeData.disabled = true;
    stradaData.disabled = true;
    numarData.disabled = true;
    blocData.disabled = true;
    apartamentData.disabled = true;
    localitateData.disabled = true;
    judetData.disabled = true;

    const dataJson = {
        "nume": numeData.value,
        "prenume": prenumeData.value,
        "strada": stradaData.value,
        "numar": numarData.value,
        "bloc": blocData.value,
        "apartament": apartamentData.value,
        "localitate": localitateData.value,
        "judet": judetData.value,
    }
    if (!blocData.value.trim().match(/[a-zA-Z]/) && !blocData.value.match(/[0-9]/)){
        dataJson["bloc"] = "";
    }
    if (!apartamentData.value.trim().match(/[a-zA-Z]/) && !apartamentData.value.match(/[0-9]/)){
        dataJson["apartament"] = "";
    }
    console.log(dataJson);
    
}