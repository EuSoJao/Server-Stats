const edition = document.getElementById("selector").value
const adress = document.getElementById("adressInput").value

function check(async){
    try{
        const reponse = await fetch(`https://api.mcstatus.io/v2/status/${edition}/${adress}`);
        const data = await responde.json();

        document.getElementById('serverInfo').innerHTML = `
                    <p>Status: ${data.online ? 'Online' : 'Offline'}</p>
                    <p>Jogadores Online: ${data.players.online}</p>
                    <p>Versão: ${data.version.name}</p>
                `;
    }catch(error) {
        console.error("moio o role")
    }
    
} 