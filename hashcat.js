
window.onload = refresh();

function refresh(){

    commandDisplay = document.getElementById("commandDisplay");
    hashType = document.getElementById("hashType");
    attackMode = document.getElementById("attackMode");
    hashInput = document.getElementById("hashInput");
    isCPU = document.getElementById("isCPU");
    if (hashInput.value.length == 0){
        newCommand = `hashcat -m ${hashType.value} -a ${attackMode.value} <hash>`;
    } else {
        newCommand = `hashcat -m ${hashType.value} -a ${attackMode.value} ${hashInput.value}`;
    }

    if(isCPU.checked){
        newCommand += " --force";
    }
    commandDisplay.innerText = decodeURIComponent(newCommand);

}