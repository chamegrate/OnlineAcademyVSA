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

document.getElementById("bedrijfsgegevens").innerHTML = bedrijfAdres;

/*Datatypes */

var bedrijfLandCode = "be";
var bedrijfLandCodeUpperCase = bedrijfLandCode.toUpperCase();
var btwCijfers = "0999999999";
var btwNummer = bedrijfLandCodeUpperCase + btwCijfers;

document.getElementById("bedrijfBtwNummer").innerHTML = btwNummer;

/*De huidige datum */


var vraagDatum = new Date();
var day;
var days = ["Zondag" ,"Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag",
]


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
}
var maand;
switch (new Date().getMonth()) {
    case 0:
        maand = "januari";
        break;
    case 1:
        maand = "februari";
        break;
    case 2:
        maand = "maart";
        break;
    case 3:
        maand = "april";
        break;
    case 4:
        maand = "mei";
        break;
    case 5:
        maand = "juni";
        break;
    case 6:
        maand = "july";
        break;
    case 7:
        maand = "augustus";
        break;
    case 8:
        maand = "september";
        break;
    case 9:
        maand ="oktober";
        break;
    case 10:
        maand = "november";
        break;
    case 11:
        maand ="december"
        break;
}

var vandaag = vraagDatum.getDate() + " " + maand + " " + (vraagDatum.getFullYear());
document.getElementById("vraagDatum").innerHTML =  day + "," + vandaag;
 




