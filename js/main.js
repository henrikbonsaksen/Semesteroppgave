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
  detaljer.classList.add('flex');
  detaljer.classList.add('table-responsive-vertical');
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
        cells.innerHTML += "<h4>Befolkning " + x + " : </h4>" + info[kommunenummer[i]].population.Menn[x]
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

var getProsentpoengEndring = function(nyVerdi, gammelVerdi) {
  return (nyVerdi - gammelVerdi) / gammelVerdi * 100;
}

var hentSysselsettingUtvikling = function(kommunenummer) {
  var sysselsetting = syssel.getInfo(kommunenummer);
  var aarstall = Object.keys(sysselsetting.population.Kvinner);

  var foersteAar = aarstall[0];
  var utvikling = [
    {
      aar: foersteAar,
      menn: sysselsetting.population.Menn[foersteAar],
      kvinner: sysselsetting.population.Kvinner[foersteAar],
      oekningPstMenn: 0,
      oekningPstKvinner: 0
    }
  ];

  for (var i = 1; i < aarstall.length; i++) {

    var aar = aarstall[i];
    var fjoraar = aarstall[i - 1];

    var sysselsettingMenn = sysselsetting.population.Menn[aar];
    var sysselsettingKvinner = sysselsetting.population.Kvinner[aar];

    var sysselsettingMennFjoraar = sysselsetting.population.Menn[fjoraar];
    var sysselsettingKvinnerFjoraar = sysselsetting.population.Kvinner[fjoraar];

    oekningPstMenn = getProsentpoengEndring(sysselsettingMenn, sysselsettingMennFjoraar);
    oekningPstKvinner = getProsentpoengEndring(sysselsettingKvinner, sysselsettingKvinnerFjoraar);

    utvikling.push({
      aar: aar,
      menn: sysselsettingMenn,
      kvinner: sysselsettingKvinner,
      oekningPstMenn: oekningPstMenn,
      oekningPstKvinner: oekningPstKvinner,
    });
  }
  return utvikling;
}


var opprettTabell = function(utvikling, sammenlignendeUtvikling) {

  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();

  var tabell = document.createElement('table');
  tabell.classList.add("flex");
  tabell.style.width = '100%';
  tabell.setAttribute('border', '1');

  var tabellHeader = document.createElement('thead');


  tabell.insertRow(tabellHeader);
  tabell.insertRow();
  tabell.insertRow();
  tabell.insertRow();
  var header = tabell.rows[0].insertCell();

  for (var i = 0; i < utvikling.length; i++) {

    header.innerHTML = kommunenavn[i];

    var aar = utvikling[i].aar;
    var aarCell = tabell.rows[1].insertCell();
    aarCell.innerHTML = aar;

    var mennCell = tabell.rows[2].insertCell();
    mennCell.innerHTML = utvikling[i].menn;

    var kvinnerCell = tabell.rows[3].insertCell();
    kvinnerCell.innerHTML = utvikling[i].kvinner;

    var kvinnerHoyestOekning = utvikling[i].oekningPstKvinner > sammenlignendeUtvikling[i].oekningPstKvinner;
    var mennHoyestOekning = utvikling[i].oekningPstMenn > sammenlignendeUtvikling[i].oekningPstMenn;

    if (kvinnerHoyestOekning) {
      kvinnerCell.classList.add('best-category')
    }

    if (mennHoyestOekning) {
      mennCell.classList.add('best-category');
    }
  }
  tabell.classList.add("table-responsive-vertical");


  return tabell;
}

var visSysselsettingSammenligning = function(kommunenummer1, kommunenummer2) {
  var utviklingKommune1 = hentSysselsettingUtvikling(kommunenummer1);
  var utviklingKommune2 = hentSysselsettingUtvikling(kommunenummer2);

  var kommune1Tabell = opprettTabell(utviklingKommune1, utviklingKommune2);
  var kommune2Tabell = opprettTabell(utviklingKommune2, utviklingKommune1);

  var sammenligning = document.getElementById("Sammenligning");
  sammenligning.appendChild(kommune1Tabell);
  sammenligning.appendChild(kommune2Tabell);
}


syssel.onload = function() {
  visSysselsettingSammenligning(s1.value, s2.value);
}







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
