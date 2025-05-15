function main() {
    let output = "";
    let theComment = "";
    
    for (let i = 0; i < recepise.length; i++) {
        if (recepise[i].comment == "Salbe") {
            output += '<div class="ordnung">Salbe</div><div>';
            theComment = "Salbe";
        } else if (recepise[i].comment == "Seife") {
            output += '</div><div class="ordnung">Seife</div><div>';
            theComment = "Seife";
        }

        let ingridiens = "";
        for(let j = 0; j < recepise[i].ingridiens.length; j++) {
            if(recepise[i].ingridiens.length -1 >= j) {
                ingridiens += recepise[i].ingridiens[j] + ",";
            }
            else {
                ingridiens += recepise[i].ingridiens[j];
            }
            
        }

        output += `
        <div class="smallContainer container${theComment}">
            <p class="name">${recepise[i].nameOfIt}</p>
            <p class="name">${ingridiens}</p>
            <p class="name">${recepise[i].forWhat}</p>
            <p class="name">${recepise[i].zubereitung}</p>
        </div>`; /*class="smallContainer container${theComment}" onclick='openHerbModal(${JSON.stringify(recepise[i]).replace(g, "\\'")})' */
    }
    document.getElementById('outputRecepies').innerHTML = output;
}

main();