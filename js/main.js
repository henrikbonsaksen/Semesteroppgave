// diverse URL'er
let beskrivelser = "http://wildboy.uib.no/~tpe056/folk/";
let utdanning_wildboy = "http://wildboy.uib.no/~tpe056/folk/85432.json";
let befolkning_wildboy = "http://wildboy.uib.no/~tpe056/folk/104857.json";
let sysselsatte_wildboy = "http://wildboy.uib.no/~tpe056/folk/100145.json";



// funksjon for å hente JSON fra lab//
function loadJSON(url, elmntid) {
  var url = url;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var json = (JSON.parse(xhttp.responseText));
      byer = []
      for (by in json.elementer) {
        // document.createElement(document.getElementById(elmntid).innerHTML = ("<td>"));

        document.getElementById(elmntid).innerHTML = byer;
        byer.push(by);
      };
      // document.getElementById(elmntid).innerHTML =
      // xhttp.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};


// Lager dynamisk tabellen

// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }
// function generateTable(table, data) {
//   for (let element of data) {
//     let row = table.insertRow();
//     for (key in element) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(element[key]);
//       cell.appendChild(text);
//     }
//   }
// }
// let table = document.querySelector("table");
// let data = Object.keys(mountains[0]);
// generateTableHead(table, data);
// generateTable(table, mountains);





// Konstruktøren
let befolkning = new Population(befolkning_wildboy);

// Konstruktøren skal defineres med (minst) et parameter: datasettets URL. Dersom dere finner det hensiktsmessig,
// kan dere også definere den med ytterligere parametre. Objektet som returneres skal i det minste ha følgende metoder:
function Population(url) {
  this.url = url;
  getNames()
  // getNames returnerer listen av alle kommunenavnene (som de fremtrer i datasettet).
  function getNames() {
    loadJSON(url, "navn");
  }

  // getIDs returnerer listen av alle kommunenummerene.
  function getIDs() {
    let kommuneID = loadJSON(url)[0];
    // console.log(kommuneID);
  }

  function getInfo() {
    console.log("Ferdig");
    // let page = Object.keys(data.query.pages) [0];
    // console.log(page);
  }
};

// vise-og-skjule-knapp
function showBox(id) {
  var boxes = document.getElementsByClassName("infoBox");
  var box = document.getElementById(id);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.replace("show", "hidden");
  }

  if (box.classList.contains("show")) {
    box.classList.replace("show", "hidden");
  }

  else if (box.classList.contains !== "show") {
    box.classList.replace("hidden", "show");
  }
};



// henrik
function oversiktData() {
  var liste = [];
  var ele = document.getElementsByClassName("detaljer")[0];
  var listenavn = befolkning.getNames();
  var listeID = befolkning.getIDs();
  var totalBefolkning;
  for (var indeks = 0; indeks < listenavn.length; indeks++) {
    var kolonne1 = "<tr><td>" + listenavn[indeks] + "</td>";
    var kolonne2 = "<td>" + listeID[indeks] + "</td>";
    var kolonne3 = "<td>" + totalBefolkning[indeks] + "</td></tr>";
    element.innerHTML += kolonne1 + kolonne2 + kolonne3;
  }
}


// oversiktData();
//




// håvard














mahmoud
function insertDetaljerOversikt(kommune, kommunenummer, populationIndex){
  var element = document.getElementsByClassName("detaljerTable")[0];
  var totBef = getPopulationList();
  var totSys = getSysselsettingInfo();
  document.getElementsByClassName("detaljerTableRowKommuneData")[0].innerHTML = kommune;
  document.getElementsByClassName("detaljerTableRowKommuneIDData")[0].innerHTML = kommunenummer;
  document.getElementsByClassName("detaljerTableRowBefolkningData")[0].innerHTML = totBef[populationIndex];
  document.getElementsByClassName("detaljerTableRowSysselsettingData")[0].innerHTML = totSys[kommune];
}






//søk
function search() {
  var x = document.getElementById("mySearch").placeholder;
  document.getElementById("demo").innerHTML = x;
}






//
