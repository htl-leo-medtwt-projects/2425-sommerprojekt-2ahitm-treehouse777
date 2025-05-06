function main() {
    let output = "";
    let comment = "";
    
    for (let i = 0; i < herbs.length; i++) {
        if (herbs[i]._comment == "A") {
            output += '<div class="ordnung ordnungA">A</div><div class="bigContainer" id="bigContainerA">';
            comment = "A";
        } else if (herbs[i]._comment == "B") {
            output += '</div><div class="ordnung ordnungB">B</div><div class="bigContainer" id="bigContainerB">';
            comment = "B";
        } else if (herbs[i]._comment == "D") {
            output += '</div><div class="ordnung  ordnungD">D</div><div class="bigContainer" id="bigContainerD">';
            comment = "D";
        } else if (herbs[i]._comment == "E") {
            output += '</div><div class="ordnung ordnungE">E</div><div class="bigContainer" id="bigContainerE">';
            comment = "E";
        } else if (herbs[i]._comment == "F") {
            output += '</div><div class="ordnung ordnungF">F</div><div class="bigContainer" id="bigContainerF">';
            comment = "F";
        } else if (herbs[i]._comment == "G") {
            output += '</div><div class="ordnung ordnungG">G</div><div class="bigContainer" id="bigContainerG">';
            comment = "G";
        } else if (herbs[i]._comment == "H") {
            output += '</div><div class="ordnung ordnungH">H</div><div class="bigContainer" id="bigContainerH">';
            comment = "H";
        } else if (herbs[i]._comment == "J") {
            output += '</div><div class="ordnung ordnungJ">J</div><div class="bigContainer" id="bigContainerJ">';
            comment = "J";
        } else if (herbs[i]._comment == "K") {
            output += '</div><div class="ordnung ordnungK">K</div><div class="bigContainer" id="bigContainerK">';
            comment = "K";
        } else if (herbs[i]._comment == "L") {
            output += '</div><div class="ordnung ordnungL">L</div><div class="bigContainer" id="bigContainerL">';
            comment = "L";
        } else if (herbs[i]._comment == "M") {
            output += '</div><div class="ordnung ordnungM">M</div><div class="bigContainer" id="bigContainerM">';
            comment = "M";
        } else if (herbs[i]._comment == "N") {
            output += '</div><div class="ordnung ordnungN">N</div><div class="bigContainer" id="bigContainerN">';
            comment = "N";
        } else if (herbs[i]._comment == "O") {
            output += '</div><div class="ordnung ordnungO">O</div><div class="bigContainer" id="bigContainerO">';
            comment = "O";
        } else if (herbs[i]._comment == "P") {
            output += '</div><div class="ordnung ordnungP">P</div><div class="bigContainer" id="bigContainerP">';
            comment = "P";
        } else if (herbs[i]._comment == "Q") {
            output += '</div><div class="ordnung ordnungQ">Q</div><div class="bigContainer" id="bigContainerQ">';
            comment = "Q";
        } else if (herbs[i]._comment == "R") {
            output +='</div><div class="ordnung ordnungR">R</div><div class="bigContainer" id="bigContainerR">';
            comment = "R";
        } else if (herbs[i]._comment == "S") {
            output += '</div><div class="ordnung ordnungS">S</div><div class="bigContainer" id="bigContainerS">';
            comment = "S";
        } else if (herbs[i]._comment == "T") {
            output += '</div><div class="ordnung ordnungT">T</div><div class="bigContainer" id="bigContainerT">';
            comment = "T";
        } else if (herbs[i]._comment == "W") {
            output += '</div><div class="ordnung ordnungW">W</div><div class="bigContainer" id="bigContainerW">';
            comment = "W";
        } else if (herbs[i]._comment == "Y") {
            output += '</div><div class="ordnung ordnungY">Y</div><div class="bigContainer" id="bigContainerY">';
            comment = "Y";
        } else if (herbs[i]._comment == "Z") {
            output += '</div><div class="ordnung ordnungZ">Z</div><div class="bigContainer" id="bigContainerZ">';
            comment = "Z";
        }
      output += `
  <div class="smallContainer container${comment}" onclick='openHerbModal(${JSON.stringify(herbs[i]).replace(/'/g, "\\'")})'>
    <img src="${herbs[i].img}" alt="${herbs[i].name}">
    <p class="name">${herbs[i].name}</p>
    <p class="latein"><em>${herbs[i].latein}</em></p>
  </div>`;
    }
    document.getElementById('outputHerbs').innerHTML = output;
  }

  main();


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
  
// Modal schließen
document.querySelector(".close").onclick = () => {
document.getElementById("herbModal").style.display = "none";
};
window.onclick = (e) => {
    const modal = document.getElementById("herbModal");
    if (e.target === modal) modal.style.display = "none";
};

/*Alphabet*/
angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope, $stateParams, $location, $ionicScrollDelegate, $log ) {
    $scope.users  = herbs;

    $scope.alphabet = iterateAlphabet();

  //Click letter event
  $scope.gotoList = function(id){
    $location.hash(id);
    $ionicScrollDelegate.anchorScroll();
  }

  //Create alphabet object
  function iterateAlphabet()
  {
     var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var numbers = new Array();
     for(var i=0; i<str.length; i++)
     {
        var nextChar = str.charAt(i);
        numbers.push(nextChar);
     }
     return numbers;
  }$scope.groups = [];
  for (var i=0; i<10; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
});