/*const edition = document.getElementById("selector")
const adress = document.getElementById("adressInput").value

function onChange(){
    var editionValue = edition.value
}

edition.onchange = onChange;
onChange();*/

document.getElementById("search").addEventListener("click", async () => {
  const edition = document.getElementById("selector");
  const adress = document.getElementById("adressInput").value;

  function onChange() {
    var editionValue = edition.value;
  }

  try {
    const reponse = await fetch(
      `https://api.mcstatus.io/v2/status/${editionValue}/${adress}`
    );
    const data = await response.json();

    document.getElementById("serverInfo").innerHTML = `
                    <p>Status: ${data.online ? "Online" : "Offline"}</p>
                    <p>Jogadores Online: ${data.players.online}</p>
                    <p>Versão: ${data.version.name}</p>
                `;
  } catch (error) {
    console.error("moio o role");
  }
});
