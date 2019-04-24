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

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTableHead(table, data);
generateTable(table, mountains);





// Konstruktøren
let obj = new Population(befolkning_wildboy);

// Konstruktøren skal defineres med (minst) et parameter: datasettets URL. Dersom dere finner det hensiktsmessig,
// kan dere også definere den med ytterligere parametre. Objektet som returneres skal i det minste ha følgende metoder:
function Population(url) {
  this.url = url;
  getNames();

  // getNames returnerer listen av alle kommunenavnene (som de fremtrer i datasettet).
  function getNames() {
    var navn = loadJSON(url, "navn");
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







// 
