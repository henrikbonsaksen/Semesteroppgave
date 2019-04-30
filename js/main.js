// diverse URL'er
let beskrivelser = "http://wildboy.uib.no/~tpe056/folk/";
let utdanning_wildboy = "http://wildboy.uib.no/~tpe056/folk/85432.json";
let befolkning_wildboy = "http://wildboy.uib.no/~tpe056/folk/104857.json";
let sysselsatte_wildboy = "http://wildboy.uib.no/~tpe056/folk/100145.json";


// Konstruktøren
var befolkning = new Population(befolkning_wildboy);

// Konstruktøren skal defineres med (minst) et parameter: datasettets URL. Dersom dere finner det hensiktsmessig,
// kan dere også definere den med ytterligere parametre. Objektet som returneres skal i det minste ha følgende metoder:
function Population(url) {
  this.url = url;

  this.getNames = function() {
    var xhttp = new XMLHttpRequest();
    var navn = [];
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var json = JSON.parse(xhttp.responseText);
        kommunenavn = [];
        var len = json.length;
        for (kommune in json.elementer) {
          navn.push(kommune);
          // var kolonne1 = "<tr> " + kommune + "</td>";
        };

      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    console.log(navn);
    document.getElementById('navn').innerHTML += "<td>"+ navn + "</td>";

    return navn;
  };

  this.getIDs = function() {
    // hente IDs
    var kommuneids = [];
    var url = this.url;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var json = JSON.parse(xhttp.responseText);
        for (id in json.elementer[0]) {
          kommuneids.push(id + " ");
        };
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    console.log(kommuneids);
    return kommuneids;
  };

  this.getInfo = function() {
    console.log("Ferdig");
    // let page = Object.keys(data.query.pages) [0];
    // console.log(page);
  }

};

function oversiktData() {
  var liste = [];
  var ele = document.getElementsByClassName("detaljer");
  var listenavn = befolkning.getNames();
  var listeID = befolkning.getIDs();
  // var totalBefolkning;
  for (var indeks = 0; indeks < listenavn.length; indeks++) {
    var kolonne1 = "<tr><td>" + listenavn[indeks] + "</td>";
    var kolonne2 = "<td>" + listeID[indeks] + "</td>";
    // var kolonne3 = "<td>" + totalBefolkning[indeks] + "</td></tr>";
    ele.innerHTML += kolonne1;
  }
}



//detakjer søk funksjonalitet
// function insertDetaljerOversikt(kommune, kommunenummer, populationIndex){
//   var element = document.getElementsByClassName("detaljerTable")[0];
//   var totBef = getPopulationList();
//   var totSys = getSysselsettingInfo();
//   document.getElementsByClassName("detaljerTableRowKommuneData")[0].innerHTML = kommune;
//   document.getElementsByClassName("detaljerTableRowKommuneIDData")[0].innerHTML = kommunenummer;
//   document.getElementsByClassName("detaljerTableRowBefolkningData")[0].innerHTML = totBef[populationIndex];
//   document.getElementsByClassName("detaljerTableRowSysselsettingData")[0].innerHTML = totSys[kommune];
// }


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
