// diverse URL'er
let beskrivelser = "http://wildboy.uib.no/~tpe056/folk/";
let utdanning_wildboy = "http://wildboy.uib.no/~tpe056/folk/85432.json";
let befolkning_wildboy = "http://wildboy.uib.no/~tpe056/folk/104857.json";
let sysselsatte_wildboy = "http://wildboy.uib.no/~tpe056/folk/100145.json";


var populateDetaljerView = function() {
  //tables:
  var oversiktTable = document.getElementsByClassName("oversikt")[0];
  var sammenligningTable1 = document.getElementsByClassName('sammenligningTable1'[0]);
  var sammenligningTable2 = document.getElementsByClassName('sammenligningTable2'[0]);

  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();
  var info = befolkning.kommuneinfo;

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
  console.log(utd);
  for (var i = 0; i < kommunenavn.length; i++) {
    if (kommunenavn[i] === input || kommunenummer[i] === input) {
      var row1 = detaljer.insertRow(0);
      var nameCell = row1.insertCell(0);
      var idCell = row1.insertCell(1);

      var row2 = detaljer.insertRow(1);
      var row3 = detaljer.insertRow(1);
      var row4 = detaljer.insertRow(1);
      var row5 = detaljer.insertRow(1);

      var c1r2 = row2.insertCell(0);
      var c2r2 = row2.insertCell(1);

      var c1r3 = row3.insertCell(0);
      var c2r3 = row3.insertCell(1);

      var c1r4 = row4.insertCell(0);
      var c2r4 = row4.insertCell(1);

      var c1r5 = row5.insertCell(0);
      var c2r5 = row5.insertCell(1);

      nameCell.innerHTML ="Kommunenavn: " + kommunenavn[i];
      idCell.innerHTML = "Kommunenummer: " + kommunenummer[i];
      c1r2.innerHTML = "Befolkning: " + (info[kommunenummer[i]].population.Menn[2018]
      + info[kommunenummer[i]].population.Kvinner[2018]);

      c2r2.innerHTML = "Sysselsatte: " + sysselsatte[kommunenummer[i]].population.Menn[2018]
      + "% av menn i arbeid og " + sysselsatte[kommunenummer[i]].population.Kvinner[2018]
      + "% av kvinner i arbeid.";

      c1r3.innerHTML = "Utdanning grunnskolenivå: " + utd[kommunenummer[i]].population["01"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["01"].Kvinner[2017] +
      "% av kvinner er utdannet.";

      c2r3.innerHTML = "<h4>Utdanning VGS:</h4> " + utd[kommunenummer[i]].population["02a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["02a"].Kvinner[2017] +
      "% av kvinner er utdannet.";

      c1r4.innerHTML = "Utdanning UNI / høyskole kort: " + utd[kommunenummer[i]].population["03a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["03a"].Kvinner[2017] +
      "% av kvinner.";



      c2r4.innerHTML = "Utdanning UNI / høyskole lang: " + utd[kommunenummer[i]].population["03a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["03a"].Kvinner[2017] +
      "% av kvinner.";

      c1r5.innerHTML = "Utdanning fagskole: " + utd[kommunenummer[i]].population["03a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["03a"].Kvinner[2017] +
      "% av kvinner.";

      c2r5.innerHTML = "Utdanning fagskole: " + utd[kommunenummer[i]].population["03a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["03a"].Kvinner[2017] +
      "% av kvinner.";
    }
  };


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
      // console.log(self.kommuneinfo);

      if (self.onload) {
        self.onload();
      }
    });
  }
}




var befolkning = new Befolkning(befolkning_wildboy);
var utdanning = new Befolkning(utdanning_wildboy);
var syssel = new Befolkning(sysselsatte_wildboy);

befolkning.onload = function() {
  populateDetaljerView();
}
utdanning.onload = function() {
  populateDetaljerView();
}

syssel.onload = function() {
  populateDetaljerView();
}

befolkning.load();
utdanning.load();
syssel.load();



//Sammenligning søk funksjon
function sammenlign() {
  var input1 = document.getElementById("s1").value;
  var input2 = document.getElementById('s2').value;
  // console.log(value1, value2);
  var data = befolkning.getNames();
  var kommunenum = befolkning.getIDs();
  var input1data;
  var input2data;

  for (var i=0; i < data.length; i++) {
    if (data[i] === input1 || kommunenum[i] === input1) {
      input1data = data[i] + " " + kommunenum[i];
    }

  };

  for (var i=0; i < data.length; i++) {
    if (data[i] === input2 || kommunenum[i] === input2) {
      input2data = data[i] + " " + kommunenum[i];
    }
    }
    document.getElementById("sammenligningTable1").innerHTML = "<br> Value 1: " + input1data + " og <br> Value 2: " + input2data;
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
