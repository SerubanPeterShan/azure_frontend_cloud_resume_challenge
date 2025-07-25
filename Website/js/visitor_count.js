

fetch('https://viscountapi.azure-api.net/vis-count-azure/azure0visi0count').then(reponse=>reponse.json()).then((data)=>{
    document.getElementById('visitor-count').innerText=data.Visitorcount
})
