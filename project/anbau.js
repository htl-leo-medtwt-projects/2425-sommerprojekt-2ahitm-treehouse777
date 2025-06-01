function openAnbauModal() {
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

function kreauterbeet() {
    document.getElementById('Kräuterbeet').style.display = 'block';
}
function hochbeet() {
    document.getElementById('Hochbeet').style.display = 'block';
}
function kreauterspirale() {
    document.getElementById('Kräuterspirale').style.display = 'block';
}
function kreauterteopfe() {
    document.getElementById('Kräutertöpfe').style.display = 'block';
}
function balkonkasten() {
    document.getElementById('Balkonkasten').style.display = 'block';
}
function paletten() {
    document.getElementById('Paletten').style.display = 'block';
}
function fensterbank() {
    document.getElementById('Fensterbank').style.display = 'block';
}
function hydroponik() {
    document.getElementById('Hydroponik').style.display = 'block';
}
function keimschale() {
    document.getElementById('Keimschale').style.display = 'block';
}
function close() {
    document.getElementById('Kräuterbeet').style.display = 'none';
}