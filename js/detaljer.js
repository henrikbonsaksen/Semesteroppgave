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
      var c5r3 = row3.insertCell(4);
      var c6r3 = row3.insertCell(4);

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

      //Utdanning Universitet / høyskole kort i antall
      c2r3.innerHTML = "<h4>Antall: </h4>" + ((utd[kommunenummer[i]].population["03a"].Menn[2017])/100 * info[kommunenummer[i]].population.Menn[2017]).toFixed(2)
      + " antall av menn og " + ((utd[kommunenummer[i]].population["03a"].Kvinner[2017])/100 * info[kommunenummer[i]].population.Kvinner[2017]).toFixed(2) +
      " antall av kvinner.";

      //Utdanning Universitet / høyskole lang
      c3r3.innerHTML = "<h4>Utdanning UNI / høyskole lang : </h4>" + utd[kommunenummer[i]].population["04a"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["04a"].Kvinner[2017] +
      "% av kvinner.";

      //Utdanning Universitet / høyskole lang i antall
      c4r3.innerHTML = "<h4>Antall: </h4>" + ((utd[kommunenummer[i]].population["04a"].Menn[2017])/100 * info[kommunenummer[i]].population.Menn[2017]).toFixed(2)
      + " antall av menn og " + ((utd[kommunenummer[i]].population["04a"].Kvinner[2017])/100 * info[kommunenummer[i]].population.Kvinner[2017]).toFixed(2) +
      " antall av kvinner.";

      //Utdanning fagskole
      c5r3.innerHTML = "<h4>Utdanning fagskole: </h4>" + utd[kommunenummer[i]].population["11"].Menn[2017]
      + "% av menn og " + utd[kommunenummer[i]].population["11"].Kvinner[2017] +
      "% av kvinner.";

      //Ingenting fullført / uoppgitt
      c6r3.innerHTML = "<h4>Ingenting fullført / uoppgitt: </h4>" + utd[kommunenummer[i]].population["09a"].Menn[2017]
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
