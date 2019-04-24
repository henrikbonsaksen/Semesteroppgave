// Dere skal skrive en konstruktør som skal fungere som grensesnitt mot hvert datasett. Du kan velge hvor
// mange slike konstruktører du vil skrive (en, to, eller tre). Datasettene har litt ulik struktur, så du kan derfor
// vurdere å skrive en for hvert datasett, men hvis du ønsker å implementere en generell løsning, kan det holde
// med én.

// diverse URL'er
let beskrivelser = "http://wildboy.uib.no/~tpe056/folk/";
let utdanning_wildboy = "http://wildboy.uib.no/~tpe056/folk/85432.json";
let befolkning_wildboy = "http://wildboy.uib.no/~tpe056/folk/104857.json";
let sysselsatte_wildboy = "http://wildboy.uib.no/~tpe056/folk/100145.json";


// HINT: dot notation eller bracket notation
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

        document.getElementById(elmntid).innerHTML = by;
        byer.push(by);
      };
      // document.getElementById(elmntid).innerHTML =
      // xhttp.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};

// let utd = new Population(utdanning_wildboy);
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




// Merk at et kommunenummer er fire heltall, og Haldens
// kommunenummer er “0101”, altså inkludert et ledende 0. Det kan derfor være lurt å representere kommunenummer
// som tekstverdier, eller finne en annen løsning for dette.

// getInfo som tar et kommunenummer som argument, og returnerer informasjonen om denne kommunen fra
// dette datasettet.

// load som klargjør og sender en forespørsel om å laste ned datasettet. Dersom objektet har egenskapen onload
// med en funksjonsverdi (se under), skal denne funksjonen kalles når datasettet er lastet inn, tolket og
// objektet er klart til å gi informasjon om datasettet via de forrige tre metodene.

// let utdanning = new Population(utdanning_wildboy);
// let befolkning = new Population(befolkning_wildboy);
// let sysselsatte = new Population(sysselsatte_wildboy);


// vise-og-skjule-knapp
function showBox(id) {
  var boxes = document.getElementsByClassName("infoBox");
  var box = document.getElementById(id);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove;
  }

  if (box.classList.contains("show")) {
    box.classList.replace("show", "hidden");
  }

  else if (box.classList.contains !== "show") {
    box.classList.replace("hidden", "show");
  }
};


// function showBox(boxType) {
//   var box = document.getElementById(boxType);
//   var boxes = document.getElementsByClassName("infoBox");
//   var navElements = document.getElementByTagName("navbar")[0].firstElementchild.children;
//   for(var i = 0; i < boxes.lenght; i++){
//     boxes[i].classList.remove("showBox");
//   }
//   if(box.classList.contains("showBox") === false) {
//     box.classList.add("showBox");
//     for(var i = 0; i < navElements.lenght; i++) {
//       navElements[i].classList.remove("show");
//       if(navElements[i].innerHTML === boxType) {
//         navElements[i].classList.add("show");
//       }
//     }
//   }
// }










// hihi
