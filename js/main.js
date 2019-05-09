// diverse URL'er
let beskrivelser = "http://wildboy.uib.no/~tpe056/folk/";
let utdanning_wildboy = "http://wildboy.uib.no/~tpe056/folk/85432.json";
let befolkning_wildboy = "http://wildboy.uib.no/~tpe056/folk/104857.json";
let sysselsatte_wildboy = "http://wildboy.uib.no/~tpe056/folk/100145.json";

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


var populateOversiktView = function() {
  //tables:
  var oversiktTable = document.getElementsByClassName("oversikt")[0];
  var data = document.getElementById("oversiktdata");

  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();
  var info = befolkning.kommuneinfo;

  for (var i = 0; i < kommunenavn.length; i++) {
    var row = oversiktTable.insertRow(0);
    var nameCell = row.insertCell(0);
    var idCell = row.insertCell(1);
    var infoCell = row.insertCell(2);
    var data = (info[kommunenummer[i]].population.Menn[2018]+info[kommunenummer[i]].population.Kvinner[2018])

    nameCell.innerHTML = kommunenavn[i];
    idCell.innerHTML = kommunenummer[i];
    infoCell.innerHTML = data;
  };
}

// HTTP call request
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

// konstruktoeren
function Befolkning(url) {
  this.url = url;
  this.kommuner = [];
  this.onload = null;

  this.kommunenavn = [];
  this.kommunenummer = [];
  this.kommuneinfo = {} ;

  this.getNames = function() {
    return this.kommunenavn;
  }

  this.getIDs = function() {
    return this.kommunenummer;
  }

  this.getInfo = function(kommunenummer) {
    return this.kommuneinfo[kommunenummer];
  }

  this.getSyssel = function(kommunenummer) {
    return this.kommuneinfo[kommunenummer];
  }

  this.getUtdanning = function(kommunenummer) {
    return this.kommuneinfo[kommunenummer];
  }
  // parsing:
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

// initialisering
var befolkning = new Befolkning(befolkning_wildboy);
var utdanning = new Befolkning(utdanning_wildboy);
var syssel = new Befolkning(sysselsatte_wildboy);

befolkning.onload = function() {
  populateOversiktView();
}

//sender en forespørsel om å laste ned datasettet
befolkning.load();
utdanning.load();
syssel.load();



//første forsøk på Sammenligning søk funksjon
// var sammenlign = function(input, input2) {
//   this.input = input;
//   this.input2 = input2;
//   var kommunenavn = befolkning.getNames();
//   var kommunenummer = befolkning.getIDs();
//   var info = befolkning.kommuneinfo;
//   var sysselsatte = syssel.kommuneinfo;
//   var utd = utdanning.kommuneinfo;
//
//   var headertable = document.getElementsByClassName("headertable")[0];
//   var headertable2 = document.getElementsByClassName("headertable2")[0];
//
//   // table 1
//   var body = document.getElementsByTagName('div')[8];
//   var tbl = document.createElement('table');
//   tbl.classList.add("flex");
//   tbl.style.width = '100%';
//   tbl.setAttribute('border', '1');
//
//   var tbdy = document.createElement('tbody');
//   tbl.className = "sammenligningTable";
//
//   for (var x = 1; x < 3; x++) {
//     tbl.classList.add(x + "");
//   }
//
//   for (var i = 0; i < kommunenavn.length; i++) {
//     var knavn = kommunenavn[i];
//     if (kommunenavn[i] === this.input || kommunenummer[i] === this.input) {
//
//       // console.log(kommunenavn[i])
//       var navn = document.createElement('tr');
//       navn.appendChild(document.createTextNode(knavn))
//       var skille = document.createElement('tr');
//       skille.appendChild(document.createTextNode("Sysselatte: "))
//       var menn = document.createElement('tr');
//       menn.appendChild(document.createTextNode("% Menn: "))
//       var kvinner = document.createElement('tr');
//       kvinner.appendChild(document.createTextNode("% Kvinner: "))
//
//       for (var j = 2007; j < 2018; j++) {
//         var valueMenn = sysselsatte[kommunenummer[i]].population.Menn[j];
//         var valueKvinner = sysselsatte[kommunenummer[i]].population.Kvinner[j];
//         var years = document.createElement('td')
//         var yeardata = years.appendChild(document.createTextNode("År " + j));
//
//         var menndata = document.createElement('td');
//         menndata.appendChild(document.createTextNode(valueMenn))
//         var kvinnedata = document.createElement('td');
//         kvinnedata.appendChild(document.createTextNode(valueKvinner))
//
//         i == 2 && j == 2 ? td.setAttribute('rowSpan', '2') : null;
//         navn.appendChild(years)
//         menn.appendChild(menndata)
//         kvinner.appendChild(kvinnedata)
//         }
//         tbdy.appendChild(navn);
//         tbdy.appendChild(skille);
//         tbdy.appendChild(menn);
//         tbdy.appendChild(kvinner);
//       }
//
//       tbl.appendChild(tbdy);
//       body.appendChild(tbl);
//   };
//
// }
