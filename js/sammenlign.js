
var getProsentpoengEndring = function(nyVerdi, gammelVerdi) {
  return (nyVerdi - gammelVerdi) / gammelVerdi * 100;
}

var hentSysselsettingUtvikling = function(kommunenummer) {
  var sysselsetting = syssel.getInfo(kommunenummer);
  var aarstall = Object.keys(sysselsetting.population.Kvinner);
  console.log(sysselsetting.population.Kvinner);

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


var opprettTabell = function(utvikling, sammenlignendeUtvikling, knr) {

  var kommunenavn = befolkning.getNames();
  var kommunenummer = befolkning.getIDs();

  var tabell = document.createElement('table');
  tabell.classList.add("flex");
  tabell.style.width = '100%';
  tabell.setAttribute('border', '1');

  var tabellHeader = document.createElement('thead');

  tabell.insertRow();
  tabell.insertRow();
  tabell.insertRow();


  var headercell1 = tabell.rows[0].insertCell();
  var headercell2 = tabell.rows[0].insertCell();

  for (var x = 0; x < kommunenummer.length; x++){
    if (knr == kommunenummer[x]) {
      headercell1.innerHTML = kommunenavn[x];
      headercell2.innerHTML = "K.nr: " + kommunenummer[x];
    }
  }

  for (var i = 0; i < utvikling.length; i++) {

    var aar = utvikling[i].aar;
    var aarCell = tabell.rows[1].insertCell();
    aarCell.innerHTML = aar;

    var mennCell = tabell.rows[1].insertCell();
    mennCell.innerHTML = "Menn: \n" + utvikling[i].menn;
    aarCell.appendChild(mennCell);

    var kvinnerCell = tabell.rows[1].insertCell();
    kvinnerCell.innerHTML = "Kvinner: \n" + utvikling[i].kvinner;
    aarCell.appendChild(kvinnerCell);

    var kvinnerHoyestOekning = utvikling[i].oekningPstKvinner > sammenlignendeUtvikling[i].oekningPstKvinner;
    var mennHoyestOekning = utvikling[i].oekningPstMenn > sammenlignendeUtvikling[i].oekningPstMenn;

    // if (aarCell.length > 7){
    //   aarCell.insertRow();
    // }

    if (kvinnerHoyestOekning) {
      kvinnerCell.classList.add('best-category')
    }

    if (mennHoyestOekning) {
      mennCell.classList.add('best-category');
    }
  }
  tabell.classList.add("sammenligning")

  return tabell;
}

var visSysselsettingSammenligning = function(kommunenummer1, kommunenummer2) {
  var utviklingKommune1 = hentSysselsettingUtvikling(kommunenummer1);
  var utviklingKommune2 = hentSysselsettingUtvikling(kommunenummer2);

  var kommune1Tabell = opprettTabell(utviklingKommune1, utviklingKommune2, kommunenummer1);
  var kommune2Tabell = opprettTabell(utviklingKommune2, utviklingKommune1, kommunenummer2);

  var sammenligning = document.getElementById("Sammenligning");
  sammenligning.appendChild(kommune1Tabell);
  sammenligning.appendChild(kommune2Tabell);
}


syssel.onload = function() {
  visSysselsettingSammenligning(s1.value, s2.value);
}
