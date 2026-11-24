/* ================= ZUSATZAUFGABEN: Üben und Festigen ================= */
const MEM=(q,p)=>({t:'mem',q,p});
const SO=(q,items)=>({t:'so',q,items});
const CW=(q,w)=>({t:'cw',q,w});
const SC=(q,w)=>{const L=[...w.toUpperCase()];let s=shuffle(L,'sc-'+w);if(s.join('')===L.join(''))s=s.slice(1).concat(s[0]);return{t:'fi',lab:'Buchstabensalat',q,text:s.join(' ')+' = ___',ans:[[w]]}};
const more=(id,tasks)=>{const u=U.find(x=>x.id===id);u.x=u.tasks.length;u.tasks.push(...tasks)};
const MQ="Decke je zwei Karten auf und finde die passenden Paare.";
const CQ="Löse das Kreuzworträtsel.";
const SQ="Bringe die Schritte mit den Pfeilen in die richtige Reihenfolge.";
const BQ="Die Buchstaben sind durcheinander. Wie heisst das Wort?";

/* ---------- 45 Minuten ---------- */
more('a1',[
SO("Bringe die vier Phasen des RAMP-Modells in die richtige Reihenfolge.",["Raise: Puls und Temperatur erhöhen","Activate: Muskeln aktivieren","Mobilise: Gelenke beweglich machen","Potentiate: auf schnelle, kräftige Bewegungen vorbereiten"]),
MEM(MQ,[["Raise","Puls und Temperatur erhöhen"],["Activate","Muskeln aktivieren"],["Mobilise","Gelenke dynamisch bewegen"],["Potentiate","Auf schnelle Bewegungen vorbereiten"],["Aufwärmdauer","10 bis 15 Minuten"]]),
MC("Welche Aussage über das Aufwärmen ist FALSCH?","Langes Dehnen im Stand ist direkt vor dem Sport die beste Vorbereitung.",["Puls und Muskeltemperatur steigen.","Das Aufwärmen soll aktiv und dynamisch sein.","Das Verletzungsrisiko sinkt."]),
CW(CQ,[["PULS","Wird beim Aufwärmen höher: Herzschläge pro Minute"],["DYNAMISCH","So bewegst du dich beim Aufwärmen: mit Bewegung statt Position halten"],["RAMP","Modell mit den Phasen R, A, M und P"],["GELENK","Wird in der Phase Mobilise beweglich gemacht"],["MUSKEL","Wird in der Phase Activate aktiviert"],["TRABEN","Lockeres Laufen, passt zur Phase Raise"]])
]);
more('a2',[
MEM(MQ,[["Puls","Herzschläge pro Minute"],["Lungenkreislauf","Blut nimmt Sauerstoff auf"],["Körperkreislauf","Versorgt Organe und Muskeln"],["Ruhepuls Jugendliche","Meist 60 bis 80"],["Herz","Hohlmuskel, etwa so gross wie die Faust"]]),
FI("Messen: 15 Sekunden zählen und mal 4 rechnen.","Du zählst in 15 Sekunden 18 Schläge. Das ergibt ___ Schläge pro Minute.",[["72"]]),
MC("Welche Aussage über das Herz stimmt?","Es ist ein Hohlmuskel mit zwei Vorhöfen und zwei Kammern.",["Es ist ein Knochen mit drei Kammern.","Es pumpt Luft durch den Körper.","Beim Sport schlägt es langsamer."]),
CW(CQ,[["PULS","Herzschläge pro Minute"],["HERZ","Hohlmuskel, etwa so gross wie deine Faust"],["BLUT","Transportiert Sauerstoff zu den Muskeln"],["LUNGE","Hier nimmt das Blut Sauerstoff auf"],["KAMMER","Davon hat das Herz zwei"],["HANDGELENK","Hier misst du den Puls auf der Daumenseite"]])
]);
more('a3',[
MEM(MQ,[["Bizeps","Beugt den Ellbogen"],["Trizeps","Streckt den Ellbogen"],["Sehne","Verbindet Muskel und Knochen"],["Band","Verbindet Knochen mit Knochen"],["Plank","Statische Muskelarbeit"],["Kniebeuge","Dynamische Muskelarbeit"]]),
MC("Wer bin ich? Ich verkürze mich, wenn du den Ellbogen beugst, und bin der Gegenspieler des Trizeps.","Der Bizeps",["Die Sehne","Das Band","Der Trizeps"]),
SC(BQ,"MUSKEL"),
CW(CQ,[["BIZEPS","Beugt den Ellbogen"],["TRIZEPS","Streckt den Ellbogen"],["SEHNE","Verbindet Muskel und Knochen"],["BAND","Verbindet Knochen mit Knochen"],["PLANK","Übung mit statischer Muskelarbeit"],["BEUGER","Gegenspieler des Streckers"]])
]);
more('a4',[
MEM(MQ,[["Kraft","Liegestütz"],["Ausdauer","20 Minuten Laufen"],["Schnelligkeit","Sprint"],["Beweglichkeit","Spagat"],["Koordination","Jonglieren"]]),
SC(BQ,"KOORDINATION"),
MC("Welche Fähigkeit trainierst du hauptsächlich, wenn du 20 Minuten locker joggst?","Ausdauer",["Schnelligkeit","Beweglichkeit","Maximalkraft"]),
CW(CQ,[["KRAFT","Einen Widerstand überwinden"],["AUSDAUER","Lange durchhalten, ohne stark zu ermüden"],["SPRINT","Trainiert vor allem die Schnelligkeit"],["SPAGAT","Zeigt grosse Beweglichkeit"],["JONGLIEREN","Übung für die Koordination"],["KOORDINATION","Bewegungen genau und flüssig abstimmen"]])
]);
more('a5',[
MEM(MQ,[["Kohlenhydrate","Wichtigster Treibstoff"],["Eiweiss","Baut Muskeln auf"],["Fette","Energiespeicher"],["Wasser","Bestes Getränk beim Sport"],["Gemüse und Früchte","5 Portionen pro Tag"]]),
SO("Bringe einen Trainingstag mit Training am späten Nachmittag in eine sinnvolle Reihenfolge.",["Mittagessen mit Kohlenhydraten, Gemüse und etwas Eiweiss","Kleiner Snack, zum Beispiel Banane oder Brot","Training mit Wasser oder ungesüsstem Tee","Nach dem Training Kohlenhydrate und etwas Eiweiss"]),
TF("Richtig oder falsch?",[["Wasser ist beim Sport das beste Getränk.",1],["Eine Portion Gemüse entspricht etwa einer Handvoll.",1],["Eiweiss ist der wichtigste Treibstoff für die Muskeln.",0],["Nach dem Training helfen Kohlenhydrate und etwas Eiweiss bei der Erholung.",1],["Energydrinks sind für Jugendliche geeignet.",0]]),
CW(CQ,[["WASSER","Bestes Getränk beim Sport"],["EIWEISS","Baustoff für Muskeln und Gewebe"],["PASTA","Liefert viele Kohlenhydrate"],["GEMUESE","Davon sollst du täglich 3 Portionen essen"],["FETT","Dient dem Körper als Energiespeicher"],["KOHLENHYDRATE","Wichtigster Treibstoff für die Muskeln"]])
]);
more('a6',[
MEM(MQ,[["PEACE","Die ersten 1 bis 3 Tage"],["LOVE","Danach: Belastung wieder aufbauen"],["144","Sanität"],["117","Polizei"],["118","Feuerwehr"],["1414","Rega"]]),
FI("Notrufnummern in der Schweiz.","Die Sanität erreichst du unter ___, die Rega unter ___.",[["144"],["1414"]]),
TF("Richtig oder falsch?",[["PEACE gilt für die ersten 1 bis 3 Tage nach der Verletzung.",1],["LOVE beginnt damit, die Stelle wieder schrittweise zu belasten.",1],["Die Rega erreicht man unter 117.",0],["112 ist der europäische Notruf.",1],["Wer nicht mehr auftreten kann, geht zum Arzt.",1]]),
CW(CQ,[["PEACE","Regel für die ersten Tage nach der Verletzung"],["LOVE","Regel für die Zeit danach"],["VERSTAUCHUNG","Bänder am Gelenk sind überdehnt"],["ZERRUNG","Muskel ist überdehnt"],["REGA","Luftrettung mit der Nummer 1414"],["VERBAND","Damit übst du leichten Druck aus (Compress)"]])
]);
more('a7',[
MEM(MQ,[["Fuss zum Gesäss ziehen","Oberschenkelvorderseite"],["Ausfallschritt, Ferse am Boden","Wade"],["Oberkörper nach vorne neigen","Oberschenkelrückseite"],["Arm quer vor der Brust","Schulter"],["15 bis 30 Sekunden","Dauer einer Dehnposition"]]),
SO("Bringe die Sportstunde in eine sinnvolle Reihenfolge.",["Aufwärmen mit dynamischen Bewegungen","Hauptteil, zum Beispiel Sprint, Sprung oder Wurf","Locker auslaufen oder gehen (Cool-down)","Statisch dehnen"]),
MC("Wann passt statisches Dehnen am besten?","Am Ende der Stunde nach dem Cool-down",["Direkt vor einem Sprint","Mitten im Spiel","Nie, es ist immer schädlich"]),
SC(BQ,"BEWEGLICHKEIT")
]);
more('a8',[
MEM(MQ,[["Schulter","Kugelgelenk"],["Knie","Scharniergelenk"],["Halswirbel","7"],["Brustwirbel","12"],["Lendenwirbel","5"],["Knochen Erwachsene","206"]]),
MC("Welche Form hat die Wirbelsäule von der Seite und wozu dient sie?","Doppel-S-Form: Sie wirkt wie eine Feder und dämpft Stösse.",["Gerade, damit sie möglichst stabil ist.","Kreisförmig, damit man sich drehen kann.","C-Form, damit man schneller läuft."]),
SC(BQ,"SKELETT"),
CW(CQ,[["SKELETT","Stützt den Körper und schützt Organe"],["KNOCHEN","Davon haben Erwachsene 206"],["KNORPEL","Wirkt im Gelenk wie ein Stossdämpfer"],["KUGELGELENK","Gelenktyp von Schulter und Hüfte"],["LENDENWIRBEL","Davon hat die Wirbelsäule fünf"],["GELENK","Hier treffen zwei Knochen aufeinander"]])
]);
more('a9',[
SO("Bringe den Wiedereinstieg nach einer Verletzung in die richtige Reihenfolge.",["Freigabe durch Arzt oder Ärztin, schmerzfrei","Mobilisieren","Kraft aufbauen","Sportartspezifisch üben","Wieder Spiel"]),
MEM(MQ,[["Schiedsrichter","Regeln überwachen"],["Zeitnehmer","Spielzeit stoppen"],["Statistiker","Punkte notieren"],["Coach","Tipps geben"],["Schmerz","Stoppsignal"]]),
TF("Richtig oder falsch?",[["Training für gesunde Körperteile ist oft möglich, aber nur nach Absprache mit Arzt und Lehrperson.",1],["Man steigt wieder ein, sobald man das Gefühl hat, es geht schon.",0],["Verletzte können durch Beobachten viel lernen.",1],["Bei Schmerzen macht man trotzdem weiter.",0]]),
OP("Wähle eine Rolle: Schiedsrichter, Zeitnehmer, Statistiker oder Coach. Was musst du dafür wissen und beachten?","Beispiel Zeitnehmer: Ich muss die Spielzeit genau stoppen, bei Unterbrechungen die Uhr anhalten und das Ende klar ansagen. Dafür muss ich die Regeln der Sportart kennen.",60)
]);
more('a10',[
MEM(MQ,[["Schlaf","8 bis 10 Stunden"],["Training","Setzt einen Reiz"],["Erholung","Hier passiert die Anpassung"],["Übertraining","Zu viel Belastung bei zu wenig Pause"],["Bildschirm","Eine Stunde vor dem Schlafen weglegen"]]),
SO("Bringe den Ablauf von Training und Anpassung in die richtige Reihenfolge.",["Training setzt einen Reiz","Der Körper ermüdet","Erholung und Schlaf","Der Körper ist danach leistungsfähiger"]),
SC(BQ,"ERHOLUNG"),
CW(CQ,[["SCHLAF","Wichtigste Form der Erholung"],["REIZ","Wird durch das Training gesetzt"],["ERHOLUNG","Hier passiert die Anpassung"],["PAUSE","Gehört zum Training dazu"],["MUSKEL","Wird im Schlaf repariert"],["TRAINING","Setzt den Reiz, die Anpassung kommt danach"]])
]);

/* ---------- 90 Minuten ---------- */
more('b1',[
MEM(MQ,[["Pritschen","Obere Technik mit den Fingern"],["Baggern","Untere Technik mit den Unterarmen"],["Libero","Abwehrspezialist"],["Rally-Point","Jeder Ballwechsel gibt einen Punkt"],["Satz","Bis 25 Punkte, 2 Punkte Vorsprung"],["Entscheidungssatz","Bis 15 Punkte"]]),
SO("Bringe die drei Ballkontakte eines Angriffs in die typische Reihenfolge.",["Annahme (Baggern)","Zuspiel (Pritschen)","Angriff (Schmettern)"]),
CW(CQ,[["PRITSCHEN","Obere Technik mit den Fingern"],["BAGGERN","Untere Technik mit den Unterarmen"],["BLOCK","Abwehr direkt am Netz"],["LIBERO","Abwehrspezialist"],["AUFSCHLAG","Eröffnet den Ballwechsel"],["ZUSPIELER","Verteilt den Ball an die Angreifer"]]),
TF("Richtig oder falsch?",[["Ein Volleyballfeld ist 18 × 9 Meter gross.",1],["Die Netzhöhe ist in allen Altersstufen gleich.",0],["Ein Team darf den Ball höchstens dreimal berühren.",1],["Beim Rally-Point gibt nur das aufschlagende Team Punkte.",0]]),
SC(BQ,"SCHMETTERN")
]);
more('b2',[
MEM(MQ,[["Gelbe Karte","Verwarnung"],["Rote Karte","Platzverweis"],["Strafstoss","11 Meter"],["Abseits","Vor Ball und zweitletztem Gegner"],["Torhüter","Darf im Strafraum die Hände benutzen"],["4-4-2","Abwehr, Mittelfeld, Sturm"]]),
CW(CQ,[["STRAFRAUM","Hier darf der Torhüter den Ball mit den Händen spielen"],["ABSEITS","Regel zur Position beim Zuspiel"],["ELFMETER","Strafstoss aus 11 Metern"],["EINWURF","Der Ball ging über die Seitenlinie"],["VERWARNUNG","Bedeutung der gelben Karte"],["MITTELFELD","Verbindet Abwehr und Angriff"]]),
TF("Richtig oder falsch?",[["Bei einem Eckstoss gibt es kein Abseits.",1],["Bei einem Abstoss gibt es kein Abseits.",1],["Ein Angreifer in der eigenen Hälfte kann im Abseits stehen.",0],["Ein Foul im eigenen Strafraum führt zu einem Strafstoss für den Gegner.",1]]),
SC(BQ,"STRAFSTOSS"),
MC("Wer bin ich? Ich darf im eigenen Strafraum den Ball mit den Händen spielen.","Der Torhüter",["Der Verteidiger","Der Stürmer","Der Schiedsrichter"])
]);
more('b3',[
MEM(MQ,[["Freiwurf","1 Punkt"],["Normaler Wurf","2 Punkte"],["Dreipunktelinie","3 Punkte"],["Angriffszeit","24 Sekunden"],["Korbhöhe","3.05 Meter"],["Persönliche Fouls","Nach 5 scheidet man aus"]]),
CW(CQ,[["DRIBBLING","Prellen des Balls"],["FREIWURF","Bringt einen Punkt"],["ZONE","Verteidigung, bei der jeder einen Raum deckt"],["FOUL","Unerlaubter Körperkontakt"],["KORB","Hängt auf 3.05 Metern"],["TRAVELLING","Englischer Name für den Schrittfehler"]]),
SO("Ordne die Würfe nach der Punktzahl, von wenig zu viel.",["Freiwurf","Wurf innerhalb der Dreipunktelinie","Wurf hinter der Dreipunktelinie"]),
TF("Richtig oder falsch?",[["Man darf mit dem Ball in den Händen beliebig weit laufen.",0],["Ein Doppeldribbling ist erneutes Dribbeln, nachdem man den Ball gehalten hat.",1],["Der Korb hängt auf 3.05 Metern.",1],["Ein Spiel nach FIBA dauert 4 × 10 Minuten.",1],["Ohne Dribbling sind 5 Schritte erlaubt.",0]]),
SC(BQ,"VERTEIDIGUNG")
]);
more('b4',[
MEM(MQ,[["Tiefstart","Sprint"],["Flop","Hochsprung"],["Cooper-Test","12 Minuten laufen"],["Kugelstossen","Die Kugel liegt am Hals"],["Weitsprung","Absprung vor dem Balken"],["Staffel","Stab in der Wechselzone"]]),
SO("Bringe die Phasen des Weitsprungs in die richtige Reihenfolge.",["Anlauf","Absprung","Flug","Landung"]),
CW(CQ,[["SPRINT","Kurzer Lauf mit höchstem Tempo"],["WEITSPRUNG","Gemessen wird vom Balken bis zum Abdruck im Sand"],["HOCHSPRUNG","Der Flop gehört dazu"],["STAFFEL","Der Stab wird übergeben"],["KUGEL","Wird gestossen, nicht geworfen"],["COOPER","Name des 12-Minuten-Tests"]]),
TF("Richtig oder falsch?",[["Laufen, Springen und Werfen sind Grundformen der Leichtathletik.",1],["Beim Weitsprung wird vom Anlaufbeginn bis zum Sand gemessen.",0],["Der Cooper-Test dauert 12 Minuten.",1],["Beim Flop geht man rückwärts über die Latte.",1]]),
FI("Ergänze.","Für einen schnellen Sprint braucht es eine hohe Schrittfrequenz und einen kräftigen ___.",[["Abdruck"]])
]);
more('b5',[
MEM(MQ,[["Intensität","Wie hart"],["Umfang","Wie viel"],["Dauer","Wie lange"],["Dichte","Pausen"],["Häufigkeit","Wie oft"],["Progression","Schrittweise steigern"]]),
SO("Bringe den Ablauf der Trainingsplanung in die richtige Reihenfolge.",["Ziel festlegen","Ausgangswert testen","Plan erstellen","Trainieren","Erneut testen"]),
MA("SMART-Ziele: Wofür steht jeder Buchstabe?",[["S","spezifisch"],["M","messbar"],["A","attraktiv"],["R","realistisch"],["T","terminiert"]]),
CW(CQ,[["PROGRESSION","Schrittweise Steigerung der Belastung"],["ERHOLUNG","Gehört zum Plan und zum Training dazu"],["UMFANG","Belastungsnormativ: Wie viel?"],["ZIEL","Wird vor dem Plan festgelegt"],["SMART","Formel für gute Ziele"],["DICHTE","Belastungsnormativ: Pausen"]]),
MC("Welches Ziel ist NICHT messbar?","Ich will irgendwie fitter werden.",["Ich laufe in 6 Wochen 15 Minuten ohne Pause.","Ich steigere meinen Cooper-Test in 8 Wochen um 200 Meter.","Ich mache bis Ende Monat 20 Kniebeugen am Stück."])
]);
more('b6',[
MEM(MQ,[["Aerob","Mit Sauerstoff"],["Anaerob","Ohne genug Sauerstoff"],["Dauermethode","Lange und gleichmässig"],["Intervallmethode","Belastung und Pause im Wechsel"],["Fahrtspiel","Tempo wechselt frei"],["Talk-Test","Noch sprechen können"]]),
FI("Rechne mit einem Maximalpuls von 200 Schlägen pro Minute.","60 % davon sind ___ Schläge, 75 % davon sind ___ Schläge pro Minute.",[["120"],["150"]]),
TF("Richtig oder falsch?",[["Beim anaeroben Training reicht der Sauerstoff nicht aus.",1],["Beim aeroben Training kannst du dich beim Laufen noch unterhalten.",1],["Die Dauermethode wechselt ständig zwischen Belastung und Pause.",0],["Regelmässiges Ausdauertraining macht das Herz kräftiger.",1]]),
CW(CQ,[["AEROB","Mit Sauerstoff"],["ANAEROB","Ohne genug Sauerstoff"],["INTERVALL","Belastung und Pause im Wechsel"],["FAHRTSPIEL","Das Tempo wechselt frei"],["COOPER","12-Minuten-Lauf"],["AUSDAUER","Hält dich im Spiel und beschleunigt die Erholung"]]),
SC(BQ,"DAUERMETHODE")
]);
more('b7',[
MEM(MQ,[["Maximalkraft","Einmal sehr schwer heben"],["Schnellkraft","Hochspringen zum Block"],["Kraftausdauer","Viele Liegestütze nacheinander"],["Plank","Übung für den Rumpf"],["Kniebeuge","Beine und Gesäss"],["2 bis 3 Mal","Trainings pro Woche"]]),
SO("Bringe die Kniebeuge in die richtige Reihenfolge.",["Füsse schulterbreit hinstellen","Brust raus, Rücken gerade, Blick nach vorne","Hüfte nach hinten unten schieben","Kraftvoll aufstehen und dabei ausatmen"]),
CW(CQ,[["MAXIMALKRAFT","Einmal sehr schwer heben"],["SCHNELLKRAFT","Hochspringen zum Block"],["PLANK","Unterarmstütz für den Rumpf"],["RUMPF","Stabilisiert den ganzen Körper"],["TECHNIK","Wichtiger als viel Gewicht"],["LIEGESTUETZ","Übung für Brust, Trizeps und Rumpf"]]),
TF("Richtig oder falsch?",[["Technik ist wichtiger als schweres Gewicht.",1],["Beim Krafttraining soll man pressen und die Luft anhalten.",0],["Muskelkater entsteht bei ungewohnter Belastung.",1],["Krafttraining mit dem eigenen Körpergewicht ist für Jugendliche geeignet.",1]]),
FI("Ergänze.","Man trainiert ___ bis ___ Mal pro Woche und macht dazwischen mindestens einen Pausentag.",[["2","zwei"],["3","drei"]])
]);
more('b8',[
MEM(MQ,[["Grossfeld","40 × 20 Meter"],["Ballhöhe","Nur bis Kniehöhe"],["Ausholen","Nicht über Hüfthöhe"],["Hand","Für Feldspieler verboten"],["Spielzeit Erwachsene","3 × 20 Minuten"]]),
CW(CQ,[["STOCK","Damit wird der Ball gespielt"],["TORHUETER","Spielt neben den Feldspielern"],["FREISCHLAG","Folge eines Fouls"],["KNIEHOEHE","Bis hierhin darf der Ball gespielt werden"],["SCHLAGSCHUSS","Schussart mit Ausholen"],["FREILAUFEN","Taktik: sich anbieten und Platz suchen"]]),
TF("Richtig oder falsch?",[["Der gegnerische Stock darf heruntergedrückt werden.",0],["Freilaufen und schnelle Pässe helfen, eine Überzahl zu schaffen.",1],["Ein Unihockeyteam hat auf dem Grossfeld 11 Spieler.",0],["Auf dem Kleinfeld spielt man oft mit 3 Feldspielern.",1]]),
SC(BQ,"UNIHOCKEY"),
MC("Welche Handlung ist im Kampf um den Ball erlaubt?","Kontrollierter Körpereinsatz",["Checken","Den gegnerischen Stock anheben","Stossen"])
]);
more('b9',[
MEM(MQ,[["Bewegungsempfehlung","60 Minuten pro Tag"],["Sitzpause","Alle 30 bis 60 Minuten"],["Alltagsbewegung","Treppe, Velo, zu Fuss"],["Muskeln und Knochen kräftigen","Etwa 3 Mal pro Woche"],["Bildschirmzeit","Begrenzen, besonders am Abend"]]),
FI("Ergänze.","Aktivitäten, die Muskeln und Knochen kräftigen, sollen etwa ___ Mal pro Woche dabei sein.",[["3","drei"]]),
CW(CQ,[["BEWEGUNG","Stärkt Herz-Kreislauf, Knochen, Muskeln und Psyche"],["SCHLAF","Hängt mit Bewegung und Ernährung zusammen"],["VELO","Alltagsbewegung auf zwei Rädern"],["TREPPE","Statt Lift nehmen"],["KONZENTRATION","Wird durch Bewegung besser"],["HERZ","Wird durch Bewegung leistungsfähiger"]]),
TF("Richtig oder falsch?",[["Treppe statt Lift zählt zur Alltagsbewegung.",1],["Bewegung stärkt Herz-Kreislauf, Knochen und Muskeln.",1],["Wer abends Sport macht, darf tagsüber stundenlang sitzen.",0],["Bei mittlerer Intensität kommst du leicht ins Schwitzen und kannst noch sprechen.",1]]),
SC(BQ,"ALLTAGSBEWEGUNG")
]);
more('b10',[
MEM(MQ,[["1896","Erste modernen Spiele in Athen"],["1924","Erste Winterspiele in Chamonix"],["Pierre de Coubertin","Begründer der modernen Spiele"],["Lausanne","Sitz des IOC"],["Fünf Ringe","Fünf Kontinente"],["J+S","Förderprogramm für Kinder und Jugendliche"]]),
SO("Ordne die Ereignisse zeitlich, vom frühesten zum spätesten.",["Antike Spiele in Olympia","Erste modernen Spiele 1896 in Athen","Erste Winterspiele 1924 in Chamonix"]),
CW(CQ,[["OLYMPIA","Ort der antiken Spiele"],["ATHEN","Hier fanden 1896 die ersten modernen Spiele statt"],["LAUSANNE","Sitz des IOC"],["PARALYMPICS","Spiele für Athletinnen und Athleten mit Beeinträchtigung"],["COUBERTIN","Begründer der modernen Spiele"],["ZEUS","Die antiken Spiele fanden zu seinen Ehren statt"]]),
TF("Richtig oder falsch?",[["Die olympischen Ringe stehen für die fünf Kontinente.",1],["Die antiken Spiele fanden zu Ehren des Zeus statt.",1],["Swiss Olympic ist der Dachverband des Schweizer Sports.",1],["Die modernen Spiele finden alle 2 Jahre statt.",0]]),
MC("Wer ist der Dachverband des Schweizer Sports?","Swiss Olympic",["Das IOC","Jugend+Sport","Die FIFA"])
]);
