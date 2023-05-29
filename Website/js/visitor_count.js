

fetch('https://vis-count-azure.azurewebsites.net/api/azure0visi0count?code=BKlx6E0L1nm7AIFMm80D_ywWsnAeiNx0oU0CyXC3ambaAzFuX3nFng==').then(reponse=>reponse.json()).then((data)=>{
    document.getElementById('Visitorcount').innerText=data.count
})