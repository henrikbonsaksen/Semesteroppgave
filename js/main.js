// diverse URL'er
let beskrivelser = "http://wildboy.uib.no/~tpe056/folk/";
let utdanning_wildboy = "http://wildboy.uib.no/~tpe056/folk/85432.json";
let befolkning_wildboy = "http://wildboy.uib.no/~tpe056/folk/104857.json";
let sysselsatte_wildboy = "http://wildboy.uib.no/~tpe056/folk/100145.json";

var populateDetaljerView = function() {
  var detaljerTable = document.getElementsByClassName("detaljer")[0];
  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();

  for (var i = 0; i < kommunenavn.length; i++) {
    var row = detaljerTable.insertRow(0);
    var nameCell = row.insertCell(0);
    var idCell = row.insertCell(1);
    var infoCell = row.insertCell(2);

    nameCell.innerHTML = kommunenavn[i];
    idCell.innerHTML = kommunenummer[i];
    infoCell.innerHTML = "Info goes here";
  }
}

function performGetRequest(url, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      callback(request.response);
    }
  }
  request.open("GET", url, true);
  request.send();
}

function Befolkning(url) {
  this.url = url;
  this.kommuner = [];
  this.onload = null;

  this.kommunenavn = [];
  this.kommunenummer = [];
  this.kommuneinfo = {};

  this.getNames = function() {
    return this.kommunenavn;
  }

  this.getIDs = function() {
    return this.kommunenummer;
  }

  this.getInfo = function(kommunenummer) {
    return this.kommuneinfo[kommunenummer];
  }

  this.load = function() {
    var self = this;
    performGetRequest(this.url, function(response) {
      var data = JSON.parse(response);
      for (var navn in data.elementer) {
        var kommuneData = data.elementer[navn];

        self.kommunenavn.push(navn);
        self.kommunenummer.push(kommuneData.kommunenummer);
        self.kommuneinfo[kommuneData.kommunenummer] = { population: kommuneData };
      };

      if (self.onload) {
        self.onload();
      }
    });
  }
}

var befolkning = new Befolkning(befolkning_wildboy);
befolkning.onload = function() {
  populateDetaljerView();
}

befolkning.load();
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
