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


var populateDetaljerView = function() {
  //tables:
  var oversiktTable = document.getElementsByClassName("oversikt")[0];
  var sammenligningTable1 = document.getElementsByClassName('sammenligningTable1'[0]);
  var sammenligningTable2 = document.getElementsByClassName('sammenligningTable2'[0]);

  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();
  var info = befolkning.kommuneinfo;
  console.log(info)

  for (var i = 0; i < kommunenavn.length; i++) {
    var row = oversiktTable.insertRow(0);
    var nameCell = row.insertCell(0);
    var idCell = row.insertCell(1);
    var infoCell = row.insertCell(2);

    nameCell.innerHTML = kommunenavn[i];
    idCell.innerHTML = kommunenummer[i];
    infoCell.innerHTML = info[kommunenummer[i]].population.Menn[2018]
    + info[kommunenummer[i]].population.Kvinner[2018];
  };
}

//søkefunksjon detaljer
var detaljer = function() {
  var input = document.getElementById("detaljer").value;
  var inputid = document.getElementById("detaljer");
  var detaljer = document.getElementsByClassName('detaljerTable')[0];
  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();
  var info = befolkning.kommuneinfo;
  var sysselsatte = syssel.kommuneinfo;
  var utd = utdanning.kommuneinfo;

  //for løkke som lager celler og rader i tabellen
  for (var i = 0; i < kommunenavn.length; i++) {
    if (kommunenavn[i] === input || kommunenummer[i] === input) {
      var row1 = detaljer.insertRow(0);
      var nameCell = row1.insertCell(0);
      var idCell = row1.insertCell(1);

      var row2 = detaljer.insertRow(1);
      var c1r2 = row2.insertCell(0);
      var c2r2 = row2.insertCell(1);

      var row3 = detaljer.insertRow(1);
      var c1r3 = row3.insertCell(0);
      var c2r3 = row3.insertCell(1);

      var row4 = detaljer.insertRow(1);
      var c1r4 = row4.insertCell(0);
      var c2r4 = row4.insertCell(1);

      var row5 = detaljer.insertRow(1);
      var c1r5 = row5.insertCell(0);
      var c2r5 = row5.insertCell(1);

      var row6 = detaljer.insertRow(5);
      var c1r6 = row6.insertCell(0);
      var c2r6 = row6.insertCell(1);

      var row7 = detaljer.insertRow(6);
      var c1r7 = row7.insertCell(0);
      var c2r7 = row7.insertCell(1);

      //kommunenavn & kommunenummer
      nameCell.innerHTML ="<h4>Kommune: </h4>" + kommunenavn[i];
      idCell.innerHTML = "<h4>K.nr: </h4>" + kommunenummer[i];

      //Befolking
      c1r2.innerHTML = "<h4>Befolkning i 2018: </h4>" + (info[kommunenummer[i]].population.Menn[2018]
      + info[kommunenummer[i]].population.Kvinner[2018]);

      //Sysselsatte
      c2r2.innerHTML = "<h4>Sysselsatte i 2018: </h4>" + sysselsatte[kommunenummer[i]].population.Menn[2018]
      + "% av menn i arbeid og " + sysselsatte[kommunenummer[i]].population.Kvinner[2018]
      + "% av kvinner i arbeid.";

      //Utdaninng grunnskole
      c1r3.innerHTML = "<h4>Utdanning grunnskole: </h4>" + utd[kommunenummer[i]].population["01"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["01"].Kvinner[2017] +
      "% av kvinner er utdannet.";

      //Utdanning VGS
      c2r3.innerHTML = "<h4>Utdanning VGS: </h4> " + utd[kommunenummer[i]].population["02a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["02a"].Kvinner[2017] +
      "% av kvinner er utdannet.";

      //Utdanning Universitet / høyskole kort
      c1r4.innerHTML = "<h4>Utdanning UNI / høyskole kort: </h4>" + utd[kommunenummer[i]].population["03a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["03a"].Kvinner[2017] +
      "% av kvinner.";

      //Utdanning Universitet / høyskole lang
      c2r4.innerHTML = "<h4>Utdanning UNI / høyskole lang : </h4>" + utd[kommunenummer[i]].population["04a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["04a"].Kvinner[2017] +
      "% av kvinner.";

      //Utdanning fagskole
      c1r5.innerHTML = "<h4>Utdanning fagskole: </h4>" + utd[kommunenummer[i]].population["11"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["11"].Kvinner[2017] +
      "% av kvinner.";

      //Ingenting fullført / uoppgitt
      c2r5.innerHTML = "<h4>Ingenting fullført / uoppgitt: </h4>" + utd[kommunenummer[i]].population["09a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["09a"].Kvinner[2017] +
      "% av kvinner.";

      // historisk utvikling av data fra 2005 - 2017
      // Befolking - fungerer ikke helt, itterer ikke pga at menn og kvinner legges sammen.
      for (var x = 2007; x < 2018; x++) {
      c1r6.innerHTML += "<h4>Befolkning: " + x + "</h4>" + info[kommunenummer[i]].population.Menn[x]
      + " menn og " + info[kommunenummer[i]].population.Kvinner[x] + " kvinner";

      c1r7.innerHTML += "<h4>Utdanning UNI / høyskole i " + x + ": </h4>" + utd[kommunenummer[i]].population["04a"].Menn[x]
      + "% av menn og " + utd[kommunenummer[i]].population["04a"].Kvinner[x] +
      "% av kvinner.";

      c2r6.innerHTML += "<h4>Sysselsatte i " + x + ": </h4>" + sysselsatte[kommunenummer[i]].population.Menn[x]
      + "% av menn og " + sysselsatte[kommunenummer[i]].population.Kvinner[x]
      + "% av kvinner.";
      }
    }
  };

}

//HTTP call request
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

//Konstruktøren
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
  populateDetaljerView();
}

//sender en forespørsel om å laste ned datasettet
befolkning.load();
utdanning.load();
syssel.load();

//fjerne alle tabels fra forrige søk ved nytt søk
var removeTablerows = function() {
  var table = document.all.tableid;
  for(var i = table.rows.length - 1; i > 0; i--)
  {
  table.deleteRow(i);
}
}


//Sammenligning søk funksjon
var sammenlign = function(input, table) {
  var detaljer = document.getElementsByClassName(table)[0];
  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();
  var info = befolkning.kommuneinfo;
  var sysselsatte = syssel.kommuneinfo;
  // console.log(sysselsatte);
  var utd = utdanning.kommuneinfo;

  for (var i = 0; i < kommunenavn.length; i++) {
    if (kommunenavn[i] === input || kommunenummer[i] === input) {
      var row1 = detaljer.insertRow(0);
      var nameCell = row1.insertCell(0);
      var idCell = row1.insertCell(1);


      var row2 = detaljer.insertRow(1);
      var row3 = detaljer.insertRow(1);

      var c1r1 = row1.insertCell(2);
      var c1r2 = row2.insertCell(0);
      var c2r2 = row2.insertCell(1);

      //Kommunenavn & kommunenummer
      nameCell.innerHTML ="<h4>Kommunenavn: </h4>" + kommunenavn[i];
      idCell.innerHTML = "<h4>Kommunenummer: </h4>" + kommunenummer[i];

      c1r1.innerHTML = "<h4>Befolkning: </h4>" + (info[kommunenummer[i]].population.Menn[2018]
      + info[kommunenummer[i]].population.Kvinner[2018]);

      //Alle data for syssesetting fra 2005 - 2018
      for (var x = 2005; x < 2019; x++) {
        c1r2.innerHTML += "<h5>Sysselsatte år " + x + ": </h5>" + sysselsatte[kommunenummer[i]].population.Menn[x]
        + "% av menn i arbeid og " + sysselsatte[kommunenummer[i]].population.Kvinner[x]
        + "% av kvinner i arbeid.";
      }
    }
  };
}
