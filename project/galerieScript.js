/// <reference path="galerie.js" />

function main() {   
    let output = "";
        
      for(let i = 0; i < herbs.length; i++) {
        output += `
          <div class="smallContainer">
            <img src="${herbs[i].img}" alt="img">
            <p>Name: ${herbs[i].name}</p>
            <p>Lateinischer Name: ${herbs[i].latein}</p>
          </div>`;
      }
  
      document.getElementById('outputHerbs').innerHTML = output;
  }
  main()