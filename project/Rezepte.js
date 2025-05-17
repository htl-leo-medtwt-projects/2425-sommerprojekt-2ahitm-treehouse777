function main() {
    let output = "";
    let theComment = "";
    
    for (let i = 0; i < recepise.length; i++) {
        if (recepise[i].comment == "Salbe") {
            output += '<div class="ordnungRezepte salbe">Salben</div><div class="containerRezepte">';
            theComment = "Salben";
        } else if (recepise[i].comment == "Seife") {
            output += '</div><div class="ordnungRezepte">Seifen</div><div class="containerRezepte containerSeife">';
            theComment = "Seifen";
        }

        let ingridiens = "";
        for(let j = 0; j < recepise[i].ingridiens.length; j++) {
            if(recepise[i].ingridiens.length -1 >= j) {
                ingridiens += recepise[i].ingridiens[j] + ", ";
            }
            else {
                ingridiens += recepise[i].ingridiens[j];
            }
            
        }

        output += `
        <div class="smallContainerRezepte">
            <h1 class="name">${recepise[i].nameOfIt}</h1>
            <p class="ingridiens">${ingridiens}</p>
            <p class="forWhat">${recepise[i].forWhat}</p>
            <p class="zubereitung">${recepise[i].zubereitung}</p>
        </div>`; /*class="smallContainer container${theComment}" onclick='openHerbModal(${JSON.stringify(recepise[i]).replace(g, "\\'")})' */
    }
    document.getElementById('outputRecepies').innerHTML = output;
}

main();