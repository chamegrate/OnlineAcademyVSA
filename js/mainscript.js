/*Bedreijfgegeven*/
var bedrijfNaam = "Online Academie Mathieu";
var straatNaam = "Grote Markt";
var straatNummer = "1";
var postCode = "3000";
var gemeente = "Leuven";
var btwPlichtig = true;
var webSiteAdres = "www.itenzo.be";
var mailAdres = "vsa.mathieu@gmail.com";

var linebreak = "<br>";
var bedrijfAdres = bedrijfNaam + linebreak + straatNaam + "," + " " + straatNummer + linebreak +
    postCode + " " + gemeente;
var bedrijfsgegevensHTML = document.getElementById("bedrijfsgegevens");


bedrijfsgegevensHTML.innerHTML = bedrijfAdres;


var contact = webSiteAdres + linebreak + mailAdres;

document.getElementById("contact").innerHTML = contact;

/*Datatypes*/

var bedrijfLandCode = "be";
var btwCijfers = "0999999999";
var btwNummer = "BTW-nummer: " + bedrijfLandCode.toUpperCase() + btwCijfers;
var bedrijfBtwNummerHTML = document.getElementById("bedrijfBtwNummer");

bedrijfBtwNummerHTML.innerHTML = btwNummer;



/*De huidige datum*/


var vraagDatum = new Date();
var days = new Array ("Zondag" ,"Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag");



switch (new Date().getDay()){
    case 0:
        day = days[0];
        break;
    case 1:
        day = days[1];
        break;
    case 2:
        day = days[2];
        break;
     case 3:
            day = days [3];
        break;
    case 4:
            day = days [4];
        break;
    case 5:
            day = days [5];
        break;
     case 6:
            day = days [6];
    default:
             day = "onbepaald";
}

var manden = new Array ("januari","februari", "maart", "april","mei", "juni", "july",
                        "augustus", "september", "oktober", "november", "december"  )
switch (new Date().getMonth()) {
    case 0:
        maand = manden[0];
        break;
    case 1:
        maand = manden[1];
        break;
    case 2:
        maand = manden[2];
        break;
    case 3:
        maand = manden[3];
        break;
    case 4:
        maand = manden[4];
        break;
    case 5:
        maand = manden[5];
        break;
    case 6:
        maand = manden[6];
        break;
    case 7:
        maand = manden[7];
        break;
    case 8:
        maand = manden[8];
        break;
    case 9:
        maand = manden[9];
        break;
    case 10:
        maand = manden[10];
        break;
    case 11:
        maand = manden[11];
        break;
    default:
        maand = "onbepaald";
}

var vandaag = vraagDatum.getDate() + " " + maand + " " + (vraagDatum.getFullYear());
var vandaagHTML = document.getElementById("vraagDatum")
vandaagHTML.innerHTML = day + "," + " " + vandaag;
 






