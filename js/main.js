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

  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();
  var info = befolkning.kommuneinfo;

  // console.log(info)

  // var headername = row.insertCell(0);
  // var headername2 = row.insertCell(1);
  // var headername3 = row.insertCell(2);
  // headername.innerHTML = "<h4>Navn </h4>";
  // headername2.innerHTML =  "<h4> Kommunenummer </h4>";
  // headername3.innerHTML = "<h4> Befolkning 2018 </h4>";


  for (var i = 0; i < kommunenavn.length; i++) {
    var row = oversiktTable.insertRow(0);
    var nameCell = row.insertCell(0);
    var idCell = row.insertCell(1);
    var infoCell = row.insertCell(2);
    var bef = (info[kommunenummer[i]].population.Menn[2018]+info[kommunenummer[i]].population.Kvinner[2018])

    nameCell.innerHTML = "Navn: " + kommunenavn[i];
    idCell.innerHTML = "Kommunenummer: " + kommunenummer[i];
    infoCell.innerHTML = "Befolkning 2018: " + bef;
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
  // console.log(sysselsatte);

  //for løkke som lager celler og rader i tabellen
  for (var i = 0; i < kommunenavn.length; i++) {
    if (kommunenavn[i] === input || kommunenummer[i] === input) {
      var row1 = detaljer.insertRow(0);
      var nameCell = row1.insertCell(0);
      var idCell = row1.insertCell(1);

      var row2 = detaljer.insertRow(1);
      var c1r2 = row2.insertCell(0);
      var c2r2 = row2.insertCell(1);
      var c3r2 = row2.insertCell(2);
      var c4r2 = row2.insertCell(3);

      var row3 = detaljer.insertRow(2);
      var c1r3 = row3.insertCell(0);
      var c2r3 = row3.insertCell(1);
      var c3r3 = row3.insertCell(2);
      var c4r3 = row3.insertCell(3);

      var row4 = detaljer.insertRow(3);
      var c1r4 = row4.insertCell(0);
      c1r4.innerHTML = "Historisk data: "


      var row6 = detaljer.insertRow(4);
      var row7 = detaljer.insertRow(5);
      var row8 = detaljer.insertRow(6);

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
      c3r2.innerHTML = "<h4>Utdanning grunnskole: </h4>" + utd[kommunenummer[i]].population["01"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["01"].Kvinner[2017] +
      "% av kvinner er utdannet.";

      //Utdanning VGS
      c4r2.innerHTML = "<h4>Utdanning VGS: </h4> " + utd[kommunenummer[i]].population["02a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["02a"].Kvinner[2017] +
      "% av kvinner er utdannet.";

      //Utdanning Universitet / høyskole kort
      c1r3.innerHTML = "<h4>Utdanning UNI / høyskole kort: </h4>" + utd[kommunenummer[i]].population["03a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["03a"].Kvinner[2017] +
      "% av kvinner.";

      //Utdanning Universitet / høyskole lang
      c2r3.innerHTML = "<h4>Utdanning UNI / høyskole lang : </h4>" + utd[kommunenummer[i]].population["04a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["04a"].Kvinner[2017] +
      "% av kvinner.";

      //Utdanning fagskole
      c3r3.innerHTML = "<h4>Utdanning fagskole: </h4>" + utd[kommunenummer[i]].population["11"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["11"].Kvinner[2017] +
      "% av kvinner.";

      //Ingenting fullført / uoppgitt
      c4r3.innerHTML = "<h4>Ingenting fullført / uoppgitt: </h4>" + utd[kommunenummer[i]].population["09a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["09a"].Kvinner[2017] +
      "% av kvinner.";

      // historisk utvikling av data fra 2005 - 2017
      // Befolking - fungerer ikke helt, itterer ikke pga at menn og kvinner legges sammen.

      for (var x = 2007; x < 2018; x++) {
        var b = -1; b < 11; b++;
        var cells = row6.insertCell(b);
        var cells2 = row7.insertCell(b);
        var cells3 = row8.insertCell(b);
        cells.innerHTML += "<h4>Befolkning: " + x + "</h4>" + info[kommunenummer[i]].population.Menn[x]
        + " menn og " + info[kommunenummer[i]].population.Kvinner[x] + " kvinner";

        cells2.innerHTML += "<h4>Utdanning UNI / høyskole i " + x + ": </h4>" + utd[kommunenummer[i]].population["04a"].Menn[x]
        + "% av menn og " + utd[kommunenummer[i]].population["04a"].Kvinner[x] +
        "% av kvinner.";

        cells3.innerHTML += "<h4>Sysselsatte i " + x + ": </h4>" + sysselsatte[kommunenummer[i]].population.Menn[x]
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

//Sammenligning søk funksjon
var sammenlign = function(input, input2) {
  this.input = input;
  this.input2 = input2;
  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();
  var info = befolkning.kommuneinfo;
  var sysselsatte = syssel.kommuneinfo;
  var utd = utdanning.kommuneinfo;

  var headertable = document.getElementsByClassName("headertable")[0];
  var headertable2 = document.getElementsByClassName("headertable2")[0];

  // table 1
  var body = document.getElementsByTagName('div')[8];
  var tbl = document.createElement('table');
  tbl.classList.add("flex");
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');

  var tbdy = document.createElement('tbody');
  tbl.className = "sammenligningTable1";

  for (var i = 0; i < kommunenavn.length; i++) {
    var knavn = kommunenavn[i];
    if (kommunenavn[i] === this.input || kommunenummer[i] === this.input) {

      // console.log(kommunenavn[i])
      var navn = document.createElement('tr');
      navn.appendChild(document.createTextNode(knavn))
      var skille = document.createElement('tr');
      skille.appendChild(document.createTextNode("Sysselatte: "))
      var menn = document.createElement('tr');
      menn.appendChild(document.createTextNode("% Menn: "))
      var kvinner = document.createElement('tr');
      kvinner.appendChild(document.createTextNode("% Kvinner: "))

      for (var j = 2007; j < 2018; j++) {
        var valueMenn = sysselsatte[kommunenummer[i]].population.Menn[j];
        var valueKvinner = sysselsatte[kommunenummer[i]].population.Kvinner[j];
        var years = document.createElement('td')
        var yeardata = years.appendChild(document.createTextNode("År " + j));

        var menndata = document.createElement('td');
        menndata.appendChild(document.createTextNode(valueMenn))
        var kvinnedata = document.createElement('td');
        kvinnedata.appendChild(document.createTextNode(valueKvinner))

        i == 2 && j == 2 ? td.setAttribute('rowSpan', '2') : null;
        navn.appendChild(years)
        menn.appendChild(menndata)
        kvinner.appendChild(kvinnedata)
        }
        tbdy.appendChild(navn);
        tbdy.appendChild(skille);
        tbdy.appendChild(menn);
        tbdy.appendChild(kvinner);
      }

      tbl.appendChild(tbdy);
      body.appendChild(tbl);
  };

  // var table1 = document.getElementsByClassName("sammenligningTable");
  // var table2 = document.getElementsByClassName("sammenligningTable");
  // console.log(table1, table2);
  // for (var e = 0; e < table1[0].rows[2].cells.length; e++) {
  //   var menncell = table1[0].rows[2].cells[e].lastChild;
  //   var kvinncell = table1[0].rows[3].cells[e].lastChild;
  //   // console.log("menn:", menncell)
  //   // console.log("kvinner:", kvinncell)
  //   if (menncell < kvinncell){
  //     menn.classList.add("bois");
  //   }
  // }

}

//Sammenligning søk funksjon
var sammenlign2 = function(input) {
  this.input = input;
  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();
  var info = befolkning.kommuneinfo;
  var sysselsatte = syssel.kommuneinfo;
  var utd = utdanning.kommuneinfo;

  var headertable = document.getElementsByClassName("headertable")[0];
  var headertable2 = document.getElementsByClassName("headertable2")[0];

  // table 1
  var body = document.getElementsByTagName('div')[8];
  var tbl = document.createElement('table');
  tbl.classList.add("flex");
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');

  var tbdy = document.createElement('tbody');
  tbl.className = "sammenligningTable2";

  for (var i = 0; i < kommunenavn.length; i++) {
    var knavn = kommunenavn[i];
    if (kommunenavn[i] === this.input || kommunenummer[i] === this.input) {

      // console.log(kommunenavn[i])
      var navn = document.createElement('tr');
      navn.appendChild(document.createTextNode(knavn))
      var skille = document.createElement('tr');
      skille.appendChild(document.createTextNode("Sysselatte: "))
      var menn = document.createElement('tr');
      menn.appendChild(document.createTextNode("% Menn: "))
      var kvinner = document.createElement('tr');
      kvinner.appendChild(document.createTextNode("% Kvinner: "))

      for (var j = 2007; j < 2018; j++) {
        var valueMenn = sysselsatte[kommunenummer[i]].population.Menn[j];
        var valueKvinner = sysselsatte[kommunenummer[i]].population.Kvinner[j];
        var years = document.createElement('td')
        var yeardata = years.appendChild(document.createTextNode("År " + j));

        var menndata = document.createElement('td');
        menndata.appendChild(document.createTextNode(valueMenn))
        var kvinnedata = document.createElement('td');
        kvinnedata.appendChild(document.createTextNode(valueKvinner))

        i == 2 && j == 2 ? td.setAttribute('rowSpan', '2') : null;
        navn.appendChild(years)
        menn.appendChild(menndata)
        kvinner.appendChild(kvinnedata)
        }
        tbdy.appendChild(navn);
        tbdy.appendChild(skille);
        tbdy.appendChild(menn);
        tbdy.appendChild(kvinner);
      }

      tbl.appendChild(tbdy);
      body.appendChild(tbl);
  };
}

var table1 = document.getElementsByClassName("sammenligningTable1");
var table2 = document.getElementsByClassName("sammenligningTable2");
console.log(table1.rows);

// for (var e = 0; e < table1[0].rows[2].cells.length; e++) {
//   var menncell = table1[0].rows[2].cells[e].lastChild;
//   var kvinncell = table1[0].rows[3].cells[e].lastChild;
//   // console.log("menn:", menncell)
//   // console.log("kvinner:", kvinncell)
//   if (menncell < kvinncell){
//     menn.classList.add("bois");
//   }
// }

//   for (var i = 0; i < kommunenavn.length; i++) {
//     if (kommunenavn[i] === input2 || kommunenummer[i] === input2) {
//       // oppretting av rows og cells
//       var row = table2.insertRow(0);
//       var header2 = headertable2.insertRow(0);
//       var nameCell = header2.insertCell(0);
//       var idCell = header2.insertCell(1);
//       var row2 = table2.insertRow(1);
//       var row3 = table2.insertRow(2);
//       // var yearHeader = document.createElement('th');
//       //Kommunenavn & kommunenummer tilegnet korrekte celler
//       nameCell.innerHTML ="<h4>Kommunenavn: </h4>" + kommunenavn[i];
//       idCell.innerHTML = "<h4>Kommunenummer: </h4>" + kommunenummer[i];
//
//       //Alle data for syssesetting fra 2007 - 2018
//       for (var x = 2007; x < 2018; x++) {
//         var valueMenn = sysselsatte[kommunenummer[i]].population.Menn[x];
//         var valueKvinner = sysselsatte[kommunenummer[i]].population.Kvinner[x];
//         var total2 = valueMenn + valueKvinner;
//         var b = -1; b < 11; b++;
//         var cells1 = yearHeader.insertCell(b);
//         var cells1R2 = row3.insertCell(b);
//
//         cells1.innerHTML += "<th> " + x + ": </th>";
//         cells1.appendChild(document.createTextNode(valueMenn));
//         cells1R2.appendChild(document.createTextNode(valueKvinner));
//
//       }
//     }
//   };
//
//   for (var i = 0; i < kommunenavn.length; i++) {
//     if (kommunenavn[i] === input || kommunenummer[i] === input) {
//       // oppretting av rows og cells
//       var row1 = table1.insertRow(0);
//       var header = headertable.insertRow(0);
//       var nameCell = header.insertCell(0);
//       var idCell = header.insertCell(1);
//
//       var row22 = table1.insertRow(1);
//       var row33 = table1.insertRow(2);
//
//       //Kommunenavn & kommunenummer tilegnet korrekte celler
//       nameCell.innerHTML ="<h4>Kommunenavn: </h4>" + kommunenavn[i];
//       idCell.innerHTML = "<h4>Kommunenummer: </h4>" + kommunenummer[i];
//
//       //Alle data for syssesetting fra 2007 - 2018
//       for (var x = 2007; x < 2018; x++) {
//         var valueMenn = sysselsatte[kommunenummer[i]].population.Menn[x];
//         var valueKvinner = sysselsatte[kommunenummer[i]].population.Kvinner[x];
//         var total2 = valueMenn + valueKvinner;
//         var b = -1; b < 11; b++;
//         var cells = row22.insertCell(b);
//         var cellsR2 = row33.insertCell(b);
//
//         cells.innerHTML += "<h5> " + x + ": </h5>";
//         cells.appendChild(document.createTextNode(valueMenn));
//         cellsR2.appendChild(document.createTextNode(valueKvinner));
//
//       }
//     }
//   };
// }

// var table1 = document.getElementsByClassName("sammenligningTable1")[0];
// var table2 = document.getElementsByClassName("sammenligningTable2")[0];
//
// var farger = function() {
//   for (row in table1.rows) {
//     console.log(row);
//     for (cell in row) {
//       for (data in cell.value) {
//         console.log(data);
//       }
//
//       if (sammenlign.total2 > sammenlign.total1) {
//         console.log(sammenlign.total1 + " " + sammenlign.total2);
//         cells.classList.replace("high" ,"low");
//       }
//       if (sammenlign.total1 > sammenlign.total2) {
//         console.log(sammenlign.total1 + " " + sammenlign.total2);
//         cells.classList.replace("high" ,"low");
//     }
//   }
//   }
// }
//










//
