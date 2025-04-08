/*Slideshow*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

/* Aktive Buttons */
document.querySelectorAll(".nav-buttons").forEach(button => {
  button.addEventListener("click", function() {
    this.classList.toggle("active");
  });
});


/*Fetch Request Galerie*/



/*fetch('galerie.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Fehler beim Laden der Kräuterdaten: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Geladene Kräuter:', data.herbs);
    let output = "";

    for (let i = 0; i < data.herbs.length; i++) {
      output += `
      <div class="herbs">
        <img scr="${data.herbs[i].img}">
        <p>Name: ${data.herbs[i].name}</p>
        <p>Lateinischer Name: ${data.herbs[i].latein}</p>
      </div>
      `;
    }

    document.getElementById('outputHerbs').innerHTML = output;

    // Hier kannst du z. B. die Kräuter anzeigen
    data.herbs.forEach(kraut => {
      console.log(`${kraut.name} (${kraut.latein})`);
    });
  })
  .catch(error => {
    console.error('Fehler beim Abrufen der Daten:', error);
  });*/