// diverse URL'er
let beskrivelser = "http://wildboy.uib.no/~tpe056/folk/";
let utdanning_wildboy = "http://wildboy.uib.no/~tpe056/folk/85432.json";
let befolkning_wildboy = "http://wildboy.uib.no/~tpe056/folk/104857.json";
let sysselsatte_wildboy = "http://wildboy.uib.no/~tpe056/folk/100145.json";



// funksjon for å hente JSON fra lab//
// getNames returnerer listen av alle kommunenavnene (som de fremtrer i datasettet).
// function getNames(url, elmntid) {
//   var url = url;
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//       var json = (JSON.parse(xhttp.responseText));
//       kommuner = [];
//       kommunenumre = [];
//       kommuneID = [];
//
//       for (kommune in json.elementer) {
//         // document.createElement(document.getElementById(elmntid).innerHTML = ("<td>"));
//         document.getElementById(elmntid).innerHTML += "<td>" + kommune + "</td>";
//         kommuner.push(kommune);
//       };
//
//       // document.getElementById(elmntid).innerHTML =
//       // xhttp.responseText;
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// };




// Konstruktøren
let befolkning = new Population(befolkning_wildboy);

// Konstruktøren skal defineres med (minst) et parameter: datasettets URL. Dersom dere finner det hensiktsmessig,
// kan dere også definere den med ytterligere parametre. Objektet som returneres skal i det minste ha følgende metoder:
function Population(url) {
  this.url = url;

  this.getNames = function() {
    var url = this.url;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var json = JSON.parse(xhttp.responseText);
        kommunenavn = [];
        for (kommune in json.elementer) {
          kommunenavn.push(kommune);
        };
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  };


  this.getIDs = function(url) {
    // hente IDs
    var url = this.url;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var json = (JSON.parse(xhttp.responseText));
        id = [];
        for (kommunenummer in json.elementer) {
          id.push += kommunenummer;
        };
        return id;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

  };

  this.getInfo = function() {
    console.log("Ferdig");
    // let page = Object.keys(data.query.pages) [0];
    // console.log(page);
  }

  this.oversiktData = function() {
    var liste = [];
    var ele = document.getElementsByClassName("detaljer")[0];
    var listenavn = befolkning.getNames;
    var listeID = befolkning.getIDs;
    var totalBefolkning;
    for (var indeks = 0; indeks < listenavn.length; indeks++) {
      var kolonne1 = "<tr><td>" + listenavn[indeks] + "</td>";
      var kolonne2 = "<td>" + listeID[indeks] + "</td>";
      var kolonne3 = "<td>" + totalBefolkning[indeks] + "</td></tr>";
      ele.innerHTML += kolonne1 + kolonne2 + kolonne3;
    }
  }

};




//detakjer søk funksjonalitet
function insertDetaljerOversikt(kommune, kommunenummer, populationIndex){
  var element = document.getElementsByClassName("detaljerTable")[0];
  var totBef = getPopulationList();
  var totSys = getSysselsettingInfo();
  document.getElementsByClassName("detaljerTableRowKommuneData")[0].innerHTML = kommune;
  document.getElementsByClassName("detaljerTableRowKommuneIDData")[0].innerHTML = kommunenummer;
  document.getElementsByClassName("detaljerTableRowBefolkningData")[0].innerHTML = totBef[populationIndex];
  document.getElementsByClassName("detaljerTableRowSysselsettingData")[0].innerHTML = totSys[kommune];
}


//søk detaljer
function search() {
  var x = document.getElementById("mySearch").placeholder;
  document.getElementById("searchResponse").innerHTML = x;
}

//Sammenligning søk funksjon
function search() {
  var x = document.getElementById("mySearch").placeholder;
  document.getElementById("demo").innerHTML = x;
}

function search2() {
    var x = document.getElementById("mySearch2").placeholder;
    document.getElementById("demo").innerHTML = x;
}


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
