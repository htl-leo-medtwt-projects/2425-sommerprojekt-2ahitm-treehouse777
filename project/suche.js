/// <reference path="herbs.js" />

function filterHerbs() {
  const name = document.getElementById('nameSearch').value.toLowerCase();
  const familie = document.getElementById('familie').value.toLowerCase();
  const inhaltsstoffe = document.getElementById('inhaltsstoffe').value.toLowerCase();
  const aussaatzeit = document.getElementById('aussaatzeit').value.toLowerCase();
  const bluetezeit = document.getElementById('bluetezeit').value.toLowerCase();
  const ernte = document.getElementById('erntezeit').value.toLowerCase();
  const verwendung = document.getElementById('verwendung').value.toLowerCase();

  const result = herbs.filter(kraut => {
    return (
      (!name || kraut.name.toLowerCase().includes(name) ||
                kraut.latein.toLowerCase().includes(name) ||
                kraut.weitereNamen?.some(n => n.toLowerCase().includes(name))) &&
      (!familie || kraut.familie?.toLowerCase().includes(familie)) &&
      (!inhaltsstoffe || kraut.inhaltsstoffe?.some(i => i.toLowerCase().includes(inhaltsstoffe))) &&
      (!aussaatzeit || kraut.aussaatzeit?.toLowerCase().includes(aussaatzeit)) &&
      (!bluetezeit || kraut.blütezeit?.toLowerCase().includes(bluetezeit)) &&
      (!ernte || kraut.ernte?.toLowerCase().includes(ernte)) &&
      (!verwendung || kraut.verwendung?.some(v => v.toLowerCase().includes(verwendung)))
    );
  });

  const ergebnisse = document.getElementById('ergebnisse');
  if (result.length > 0) {
    ergebnisse.innerHTML = "<h3>Gefundene Kräuter:</h3><div class='kraeuter-grid'>" +
    result.map(k => `
      <div class="kraeuter-card" data-index="${index}">
        <img src="${k.img}" alt="${k.name}" class="kraeuter-bild">
        <h4>${k.name}</h4>
        <p><em>${k.latein}</em></p>
      </div>
    `).join('') + "</div>";

    document.querySelectorAll('.kraeuter-card').forEach((card, index) => {
    card.addEventListener('click', () => openHerbModal(result[index]));
    });
  } else {
    ergebnisse.innerHTML = "<p>Keine Kräuter gefunden.</p>";
  }
}


function openHerbModal(herb) {
  const modal = document.getElementById("herbModal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
      <img src="${herb.img}" alt="${herb.name}">
      <div id="info">
          <ul>
          <li><strong>Familie:</strong> ${herb.familie}</li>
          <li><strong>Inhaltsstoffe:</strong> ${herb.inhaltsstoffe?.join(", ") || "–"}</li>
          <li><strong>Weitere Namen:</strong> ${herb.weitereNamen?.join(", ") || "–"}</li>
          <li><strong>Aussaatzeit:</strong> ${herb.aussaatzeit || "–"}</li>
          <li><strong>Blütezeit:</strong> ${herb.blütezeit || "–"}</li>
          <li><strong>Ernte:</strong> ${herb.ernte || "–"}</li>
          <li><strong>Standort:</strong> ${herb.standort || "–"}</li>
          <li><strong>Verwendung:</strong> ${herb.verwendung?.join(", ") || "–"}</li>
          </ul>
      </div>
      <h2>${herb.name}</h2>
      <h4><em>${herb.latein}</em></h4>
      <p>${herb.beschreibung}</p>
      
      
  `;
  modal.style.display = "flex";
}