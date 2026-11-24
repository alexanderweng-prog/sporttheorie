const U=[];
const MC=(q,right,wrong)=>({t:'mc',q,opts:[{x:right,ok:1},...wrong.map(x=>({x,ok:0}))]});
const TF=(q,rows)=>({t:'tf',q,rows});
const MA=(q,p)=>({t:'ma',q,p});
const FI=(q,text,ans)=>({t:'fi',q,text,ans});
const OP=(q,m,min)=>({t:'op',q,m,min:min||50});
const add=(id,min,title,intro,k,tasks)=>U.push({id,min,title,intro,k,tasks});

/* ================= 45 MINUTEN ================= */
add('a1',45,'Aufwärmen','Vor jeder Sportstunde wärmst du dich auf. Moderne Aufwärmprogramme sind aktiv, dynamisch und folgen einem klaren Aufbau.',[
"Aufwärmen dauert etwa 10 bis 15 Minuten und findet direkt vor der Belastung statt. Es soll spielerisch sein und Spass machen.",
"Wirkung: Puls, Atmung und Muskeltemperatur steigen, die Durchblutung nimmt zu, die Muskeln reagieren schneller. Das Verletzungsrisiko sinkt, die Leistung steigt.",
"Aufbau nach dem RAMP-Modell: R = Raise (Puls und Temperatur erhöhen, z. B. Traben, Seilspringen, Spiel), A = Activate (wichtige Muskeln aktivieren, z. B. Kniebeugen, Ausfallschritte, Rumpf), M = Mobilise (Gelenke dynamisch durch den ganzen Bewegungsraum bewegen, z. B. Hüft- und Armkreisen), P = Potentiate (auf schnelle, kräftige Bewegungen vorbereiten, z. B. Steigerungsläufe, kurze Sprünge, Aufschläge).",
"Aufwärmen ist aktiv. Heisse Dusche oder Massage ersetzen es nicht.",
"Langes statisches Dehnen (Position halten) direkt vor dem Sport schützt nicht besser vor Verletzungen und kann Kraft und Schnelligkeit kurz leicht senken. Besser: dynamisch bewegen. Statisch dehnt man eher am Ende der Stunde."
],[
MC("Warum wärmen wir uns auf?","Der Körper wird auf die Belastung vorbereitet, das Verletzungsrisiko sinkt und die Leistung steigt.",["Damit wir müde werden.","Damit die Muskeln grösser werden.","Damit die Lehrperson Zeit hat, die Anwesenheit zu notieren."]),
TF("Richtig oder falsch?",[["Beim Aufwärmen steigt der Puls.",1],["Aufwärmen dauert nur etwa eine Minute.",0],["Langes Dehnen im Stand ist die beste Vorbereitung auf Sport.",0],["Eine heisse Dusche ersetzt das aktive Aufwärmen.",0],["Beim Aufwärmen bewegt man sich aktiv und dynamisch.",1]]),
MA("Ordne jede Übung der RAMP-Phase zu.",[["Locker traben oder Seilspringen","Raise: Puls und Temperatur erhöhen"],["Kniebeugen und Ausfallschritte","Activate: Wichtige Muskeln aktivieren"],["Hüft- und Armkreisen","Mobilise: Gelenke beweglich machen"],["Steigerungsläufe und kurze Sprünge","Potentiate: Auf schnelle, kräftige Bewegungen vorbereiten"]]),
FI("Ergänze das RAMP-Modell.","Raise, Activate, Mobilise und ___.",[["Potentiate","Potenzieren","Potentiation","Potenzierung"]]),
OP("Schreibe ein Mini-Aufwärmprogramm nach RAMP für deine Lieblingssportart: je eine Übung für R, A, M und P, mit einem Satz zum Zweck.","Beispiel Volleyball: R: 3 Minuten Traben und Seilspringen (Puls erhöhen). A: Kniebeugen und Unterarmstütz (Beine und Rumpf aktivieren). M: Schulter- und Hüftkreisen (Gelenke beweglich machen). P: 2 Steigerungsläufe und ein paar Aufschläge (auf schnelle Bewegungen vorbereiten).",80)
]);

add('a2',45,'Herz, Kreislauf und Puls','Dein Herz arbeitet ohne Pause. Beim Sport siehst du, wie es sich anpasst: Du kannst es am Puls messen.',[
"Das Herz ist ein Hohlmuskel, etwa so gross wie deine Faust. Es hat zwei Vorhöfe und zwei Kammern.",
"Das Blut bringt Sauerstoff und Nährstoffe zu den Muskeln und transportiert Abfallstoffe ab.",
"Lungenkreislauf: Das Blut nimmt in der Lunge Sauerstoff auf. Körperkreislauf: Das Blut versorgt Organe und Muskeln.",
"Puls = Anzahl Herzschläge pro Minute. Der Ruhepuls liegt bei Jugendlichen meist bei 60 bis 80.",
"Messen: Zeige- und Mittelfinger an Handgelenk (Daumenseite) oder Hals, 15 Sekunden zählen und mal 4 rechnen.",
"Maximalpuls schätzen: Tanaka-Formel 208 minus 0,7 mal Alter. Die ältere Faustregel 220 minus Alter ist ungenauer. Jede Formel ist nur ein Richtwert, bei einzelnen Personen weicht der Wert um etwa 10 Schläge ab."
],[
MC("Was misst der Puls?","Die Anzahl Herzschläge pro Minute.",["Die Menge Blut im Körper.","Den Sauerstoff in der Lunge.","Wie schnell du rennen kannst."]),
FI("Du zählst in 15 Sekunden 20 Herzschläge. Rechne um.","Dein Puls beträgt ___ Schläge pro Minute.",[["80"]]),
FI("Schätze den Maximalpuls einer 13-Jährigen mit der Tanaka-Formel (208 minus 0,7 mal Alter). Runde auf eine ganze Zahl.","208 − 0,7 × 13 = ___",[["199","198.9","198,9"]]),
TF("Richtig oder falsch?",[["Beim Sport steigt der Puls.",1],["Das Herz hat drei Kammern.",0],["Das Blut transportiert Sauerstoff zu den Muskeln.",1],["Regelmässiges Ausdauertraining senkt meist den Ruhepuls.",1]]),
OP("Warum schlägt dein Herz beim Rennen schneller? Erkläre in 2 bis 3 Sätzen.","Beim Rennen brauchen die Muskeln mehr Sauerstoff und Nährstoffe. Das Herz pumpt schneller und mehr Blut durch den Körper, damit diese Stoffe rascher bei den Muskeln ankommen und Abfallstoffe abtransportiert werden.",50)
]);

add('a3',45,'Muskeln','Ohne Muskeln keine Bewegung. Hier lernst du, wie sie arbeiten und warum sie immer im Team funktionieren.',[
"Muskeln können sich nur verkürzen (ziehen). Sie können nicht stossen.",
"Darum arbeiten sie als Gegenspieler: Beuger und Strecker.",
"Der Bizeps beugt den Ellbogen, der Trizeps streckt ihn.",
"Sehnen verbinden Muskeln mit Knochen. Bänder verbinden Knochen mit Knochen.",
"Dynamische Arbeit: Es gibt Bewegung (Kniebeuge). Statische Arbeit: Die Position wird gehalten (Plank)."
],[
MC("Wie bewegt ein Muskel einen Knochen?","Er verkürzt sich und zieht.",["Er stösst den Knochen weg.","Er wird länger und drückt.","Er bewegt sich nicht, nur die Sehne arbeitet."]),
MA("Ordne zu.",[["Bizeps","Beugt den Ellbogen"],["Trizeps","Streckt den Ellbogen"],["Sehne","Verbindet Muskel und Knochen"],["Band","Verbindet Knochen mit Knochen"]]),
TF("Richtig oder falsch?",[["Der Bizeps ist der Gegenspieler des Trizeps.",1],["Bei einer Plank arbeiten die Muskeln statisch.",1],["Muskeln können aktiv stossen.",0],["Sehnen verbinden zwei Knochen miteinander.",0]]),
FI("Ergänze.","Muskeln können nur ziehen. Darum arbeitet jeder Muskel mit einem ___ zusammen.",[["Gegenspieler","Gegner","Antagonist"]]),
OP("Nenne drei Muskelgruppen und je eine Übung, die sie trainiert.","Bauchmuskeln: Plank oder Sit-up. Oberschenkelvorderseite (Quadrizeps): Kniebeuge. Brust und Trizeps: Liegestütz.",60)
]);

add('a4',45,'Die fünf motorischen Fähigkeiten','Jede Sportart verlangt etwas anderes von dir. Fünf Fähigkeiten helfen dir, das zu beschreiben.',[
"Kraft: einen Widerstand überwinden (Liegestütz, Kugelstossen).",
"Ausdauer: lange durchhalten, ohne stark zu ermüden (20 Minuten Laufen).",
"Schnelligkeit: schnell reagieren und sich schnell bewegen (Sprint).",
"Beweglichkeit: grosse Gelenkbewegungen ausführen (Spagat).",
"Koordination: Bewegungen genau und flüssig abstimmen, Gleichgewicht halten (Jonglieren, Balancieren)."
],[
MA("Welche Fähigkeit steht im Vordergrund?",[["Marathon","Ausdauer"],["100-Meter-Sprint","Schnelligkeit"],["Kugelstossen","Kraft"],["Spagat","Beweglichkeit"],["Jonglieren","Koordination"]]),
MC("Welche Fähigkeit ist beim Balancieren auf der Langbank besonders wichtig?","Koordination (Gleichgewicht)",["Maximalkraft","Ausdauer","Schnelligkeit"]),
TF("Richtig oder falsch?",[["Ausdauer bedeutet, lange durchzuhalten.",1],["Ein Sprint trainiert vor allem die Schnelligkeit.",1],["Kraft kann man nicht trainieren.",0],["Beweglichkeit wird durch regelmässiges Dehnen verbessert.",1]]),
FI("Ergänze.","Kraft, Ausdauer, Schnelligkeit, Beweglichkeit und ___ sind die fünf Fähigkeiten.",[["Koordination","Koordinationsfähigkeit"]]),
OP("Wähle eine Sportart. Welche zwei Fähigkeiten sind dort am wichtigsten? Begründe.","Beispiel Volleyball: Schnelligkeit (schnell zum Ball reagieren) und Kraft (Sprungkraft für Angriff und Block). Auch die Koordination ist wichtig, weil der Ball genau getroffen werden muss.",60)
]);

add('a5',45,'Ernährung und Trinken','Was du isst und trinkst, ist dein Treibstoff. Gerade beim Sport macht das einen Unterschied.',[
"Die Schweizer Ernährungsempfehlungen wurden 2024 überarbeitet. Die Basis der Pyramide sind 1 bis 2 Liter ungezuckerte Getränke pro Tag, am besten Wasser.",
"Täglich 5 Portionen Früchte und Gemüse, davon 3 Gemüse und 2 Früchte. Eine Portion entspricht etwa einer Handvoll (120 Gramm).",
"Darüber folgen Getreideprodukte und Kartoffeln (Vollkorn bevorzugen), Milchprodukte und Proteinquellen wie Hülsenfrüchte, Tofu, Eier, Fisch und Fleisch (pflanzliche Quellen bevorzugen), dann Nüsse und Öle. Süssgetränke, Süsses und salzige Snacks nur in kleinen Mengen.",
"Kohlenhydrate (Brot, Pasta, Reis) sind der wichtigste Treibstoff.",
"Eiweiss baut Muskeln und Gewebe auf. Fette sind Energiespeicher.",
"Beim Sport trinkt man Wasser oder ungesüssten Tee. Energydrinks gehören zu den Extras ganz oben in der Pyramide und sind für Jugendliche ungeeignet.",
"Nach der Belastung helfen Kohlenhydrate und etwas Eiweiss bei der Erholung."
],[
MC("Was ist das beste Getränk beim Sport?","Wasser oder ungesüsster Tee",["Energydrink","Cola","Grosse Mengen Süssgetränk"]),
MA("Ordne zu.",[["Kohlenhydrate","Wichtigster Energielieferant"],["Eiweiss","Baustoff für Muskeln"],["Fette","Energiespeicher"],["Wasser","Transport und Kühlung im Körper"]]),
TF("Richtig oder falsch?",[["Empfohlen sind 5 Portionen Gemüse und Früchte pro Tag.",1],["Süssigkeiten bilden die Basis der Lebensmittelpyramide.",0],["Energydrinks sind für Jugendliche ein guter Durstlöscher.",0],["Man sollte täglich 1 bis 2 Liter trinken.",1]]),
FI("Ergänze.","Der wichtigste Treibstoff für die Muskeln sind die ___.",[["Kohlenhydrate","Kohlehydrate"]]),
OP("Du hast um 17 Uhr Training. Was isst und trinkst du am Mittag und kurz vorher? Begründe kurz.","Mittags eine Mahlzeit mit Kohlenhydraten (z. B. Pasta oder Reis) mit Gemüse und etwas Eiweiss. Vor dem Training einen kleinen Snack (Banane, Brot) und Wasser. Grund: Die Muskeln brauchen Energie, aber ein voller Magen stört beim Bewegen.",60)
]);

add('a6',45,'Verletzungen und Erste Hilfe','Verletzungen passieren. Entscheidend ist, dass du weisst, was zu tun ist. Der Ratschlag hat sich in den letzten Jahren geändert.',[
"Häufige Sportverletzungen: Verstauchung (Bänder am Gelenk), Zerrung (Muskel), Prellung, Schürfwunde.",
"Früher galt die PECH-Regel (Pause, Eis, Compression, Hochlagern). Sie gilt heute als veraltet, weil zu lange Ruhe die Heilung verlangsamen kann.",
"Heute: PEACE für die ersten 1 bis 3 Tage. P = Protect (schonen, nicht belasten), E = Elevate (hochlagern), A = Avoid anti-inflammatories (keine entzündungshemmenden Mittel ohne Absprache mit Arzt oder Ärztin), C = Compress (leichter Druck mit Verband), E = Educate (informieren und selbst aktiv an der Heilung mitwirken).",
"Danach LOVE: L = Load (wieder belasten, soweit es schmerzfrei geht), O = Optimism (zuversichtlich bleiben), V = Vascularisation (Ausdauerbewegung ohne Schmerzen, die den Blutfluss anregt), E = Exercise (gezielte Übungen für Beweglichkeit, Kraft und Gleichgewicht).",
"Notrufe in der Schweiz: 144 Sanität, 117 Polizei, 118 Feuerwehr, 1414 Rega, 112 europäischer Notruf.",
"Zum Arzt geht man bei starken Schmerzen, deutlicher Schwellung, Fehlstellung oder wenn man nicht mehr auftreten kann. Bei jeder Verletzung zuerst die Lehrperson informieren."
],[
MA("Ordne die PEACE-Buchstaben zu.",[["P = Protect","Verletzte Stelle in den ersten Tagen schonen"],["E = Elevate","Hochlagern"],["C = Compress","Leichter Druck mit einem Verband"],["E = Educate","Informieren und aktiv an der Heilung mitwirken"]]),
MA("Welche Nummer wählst du?",[["144","Sanität / Ambulanz"],["117","Polizei"],["118","Feuerwehr"],["1414","Rega (Luftrettung)"]]),
MC("Dein Kollege knickt um, der Knöchel schwillt an. Was machst du zuerst?","Die Belastung stoppen, die Lehrperson holen und den Fuss hochlagern.",["Weiterspielen, es geht schon vorbei.","Den Fuss kräftig massieren.","Heiss duschen."]),
TF("Richtig oder falsch?",[["Die PECH-Regel gilt heute als veraltet.",1],["Nach den ersten Tagen beginnt man wieder mit Bewegung, die nicht wehtut (LOVE).",1],["Eine verstauchte Stelle sollte man mehrere Wochen gar nicht bewegen.",0],["Bei starken Schmerzen und Schwellung geht man zum Arzt.",1],["Die Sanität erreicht man in der Schweiz unter 144.",1]]),
OP("Was ist der Unterschied zwischen einer Zerrung und einer Verstauchung?","Bei einer Zerrung ist ein Muskel überdehnt oder leicht eingerissen. Bei einer Verstauchung sind die Bänder eines Gelenks überdehnt oder angerissen (z. B. beim Umknicken).",40)
]);

add('a7',45,'Dehnen und Cool-down','Nach dem Sport fährt der Körper wieder herunter. Gut gemacht, bleibst du beweglich und erholst dich besser.',[
"Cool-down: locker auslaufen oder -gehen, bis sich der Puls beruhigt, danach dehnen.",
"Statisches Dehnen: Position 15 bis 30 Sekunden halten, ruhig atmen, nicht wippen.",
"Es soll ziehen, aber nicht weh tun.",
"Dynamisches Dehnen (Bewegung) passt zum Aufwärmen. Langes statisches Dehnen direkt vor Sprint, Sprung oder Wurf kann die Leistung kurz senken und gehört eher ans Ende der Stunde.",
"Beweglichkeit verbessert sich nur durch regelmässiges Training.",
"Dehnen nach dem Sport ist keine Pflicht und verhindert keinen Muskelkater."
],[
MC("Wie lange hältst du eine Dehnposition?","15 bis 30 Sekunden",["1 bis 2 Sekunden","10 Minuten","Man wippt kurz hin und her."]),
TF("Richtig oder falsch?",[["Beim Dehnen darf es richtig wehtun.",0],["Ein Cool-down hilft dem Körper herunterzufahren.",1],["Wippen beim Dehnen ist besonders wirksam.",0],["Statisches Dehnen passt gut ans Ende der Stunde.",1],["Langes statisches Dehnen direkt vor einem Sprint verbessert die Leistung.",0],["Dehnen nach dem Sport verhindert Muskelkater.",0]]),
MA("Welche Dehnübung gehört zu welchem Muskel?",[["Oberschenkelvorderseite","Im Stand Fuss zum Gesäss ziehen"],["Wade","Ausfallschritt, hintere Ferse bleibt am Boden"],["Oberschenkelrückseite","Bein vorne gestreckt, Oberkörper nach vorne neigen"],["Schulter","Arm quer vor der Brust zur Seite ziehen"]]),
FI("Ergänze.","Das Gegenstück zum Aufwärmen heisst auf Englisch ___-down.",[["Cool"]]),
OP("Beschreibe eine Dehnübung für die Wade: Position, Dauer, worauf du achtest.","Ausfallschritt: Das hintere Bein ist gestreckt, die Ferse bleibt am Boden, das vordere Knie ist gebeugt. 20 bis 30 Sekunden halten, ruhig atmen, nicht wippen, dann Seite wechseln.",40)
]);

add('a8',45,'Skelett und Gelenke','Dein Skelett trägt dich durch jede Sportstunde. Gelenke machen Bewegung erst möglich.',[
"Erwachsene haben 206 Knochen. Das Skelett stützt den Körper, schützt Organe und bietet den Muskeln Ansatzstellen.",
"Wirbelsäule: 7 Halswirbel, 12 Brustwirbel, 5 Lendenwirbel, dazu Kreuz- und Steissbein.",
"Ihre Doppel-S-Form wirkt wie eine Feder und dämpft Stösse.",
"Kugelgelenk (Schulter, Hüfte): Bewegung in alle Richtungen. Scharniergelenk (Ellbogen, Knie): nur beugen und strecken.",
"Gelenkknorpel und Gelenkschmiere wirken wie Stossdämpfer."
],[
MA("Welcher Gelenktyp ist es?",[["Schulter","Kugelgelenk"],["Knie","Scharniergelenk"],["Hüfte","Kugelgelenk"],["Ellbogen","Scharniergelenk"]]),
FI("Ergänze.","Die Wirbelsäule hat 7 Halswirbel, 12 Brustwirbel und ___ Lendenwirbel.",[["5","fünf"]]),
MC("Wozu dient das Skelett NICHT?","Zum Verdauen der Nahrung",["Zum Stützen des Körpers","Zum Schutz von Herz und Lunge","Als Ansatzstelle für Muskeln"]),
TF("Richtig oder falsch?",[["Das Kniegelenk ist ein Kugelgelenk.",0],["Erwachsene haben 206 Knochen.",1],["Schwere Dinge hebt man mit geradem Rücken aus den Knien.",1],["Gelenkknorpel wirkt wie ein Stossdämpfer.",1]]),
OP("Wie hebst du eine schwere Sporttasche rückenschonend vom Boden auf? Beschreibe in 2 bis 3 Sätzen.","Ich gehe nahe an die Tasche, beuge die Knie und halte den Rücken gerade. Dann greife ich die Tasche fest und stehe aus den Beinen auf. Die Tasche trage ich nahe am Körper.",50)
]);

add('a9',45,'Verletzt, aber dabei','Auch mit Verletzung bist du Teil der Sportstunde. Und du kannst einen guten Wiedereinstieg planen.',[
"Verletzte können viel lernen, indem sie beobachten, analysieren und Rollen übernehmen (Schiedsrichter, Zeitnehmer, Statistiker, Coach).",
"Wiedereinstieg: erst nach Freigabe durch Arzt oder Ärztin und wenn die Schmerzen weg sind.",
"Danach steigert man die Belastung schrittweise: mobilisieren, Kraft aufbauen, sportartspezifisch üben, dann wieder Spiel.",
"Schmerz ist ein Stoppsignal.",
"Training für gesunde Körperteile ist oft möglich, aber nur in Absprache mit Arzt und Lehrperson."
],[
MC("Wann steigst du nach einer Verletzung wieder voll ein?","Wenn der Arzt oder die Ärztin es erlaubt und du schmerzfrei bist, mit schrittweiser Steigerung.",["Sobald die Klasse ein Spiel macht.","Sobald es nur noch ein bisschen wehtut.","Nach genau einer Woche, bei jeder Verletzung."]),
TF("Richtig oder falsch?",[["Schmerz ist ein Stoppsignal.",1],["Verletzte können als Schiedsrichter oder Zeitnehmer mithelfen.",1],["Nach der Verletzung startet man am besten sofort mit vollem Tempo.",0],["Die Belastung wird schrittweise gesteigert.",1]]),
MA("Welche Rolle hat welche Aufgabe?",[["Schiedsrichter","Regeln überwachen und Entscheide treffen"],["Zeitnehmer","Spielzeit stoppen"],["Statistiker","Punkte und Aktionen notieren"],["Coach","Tipps und Rückmeldungen geben"]]),
FI("Ergänze.","Schmerz ist ein ___-Signal.",[["Stopp","Warn","Alarm"]]),
OP("Beobachte die aktuelle Sportstunde (oder erinnere dich an die letzte). Notiere 3 Beobachtungen zu Technik, Taktik oder Fairplay.","Beispiel: 1. Bei Pässen schauen viele nicht, wo der Mitspieler steht. 2. Das Team verteidigt gut, wenn alle Abstand halten. 3. Ein Spieler hat dem Gegner nach einem Foul aufgeholfen (Fairplay).",80)
]);

add('a10',45,'Schlaf und Erholung','Fortschritt entsteht nicht nur im Training, sondern auch in der Pause danach.',[
"Jugendliche brauchen etwa 8 bis 10 Stunden Schlaf.",
"Im Schlaf erholt sich der Körper und Muskeln werden repariert. Auch Gelerntes wird gefestigt.",
"Training setzt einen Reiz. Die Anpassung (stärker, fitter) passiert in der Erholung.",
"Zu wenig Erholung führt zu Müdigkeit, schlechter Leistung und höherem Verletzungsrisiko.",
"Gute Gewohnheiten: feste Schlafzeiten und Bildschirme eine Stunde vor dem Schlafen weglegen."
],[
MC("Wann werden die Muskeln stärker?","In der Erholung nach dem Training",["Nur während des Trainings","Wenn man nie Pause macht","Nur beim Essen"]),
FI("Ergänze.","Jugendliche brauchen etwa 8 bis ___ Stunden Schlaf.",[["10","zehn"]]),
TF("Richtig oder falsch?",[["Zu wenig Schlaf erhöht das Verletzungsrisiko.",1],["Das Handy bis kurz vor dem Einschlafen verbessert den Schlaf.",0],["Erholung gehört zum Training dazu.",1],["Man trainiert am besten jeden Tag ohne Pause so hart wie möglich.",0]]),
MA("Ordne zu.",[["Training","Setzt einen Reiz"],["Erholung","Der Körper repariert sich und wird stärker"],["Übertraining","Zu viel Belastung bei zu wenig Pause"],["Schlaf","Wichtigste Form der Erholung"]]),
OP("Plane eine Woche: An welchen Tagen bewegst du dich, wann machst du bewusst Pause? Schreibe kurz.","Beispiel: Montag Volleyballtraining, Dienstag Pause, Mittwoch Joggen 20 Minuten, Donnerstag Pause, Freitag Training, Wochenende Spaziergang und viel Schlaf. Nach harten Tagen plane ich eine Pause ein.",60)
]);

/* ================= 90 MINUTEN ================= */
add('b1',90,'Volleyball','Volleyball verbindet Technik, Teamarbeit und schnelle Entscheide. Hier lernst du Regeln, Technik und die Spielidee.',[
"Zwei Teams mit je 6 Spielerinnen und Spielern, getrennt durch ein Netz. Ziel: Den Ball im gegnerischen Feld zum Boden bringen.",
"Feld 18 × 9 Meter. Netzhöhe bei Erwachsenen: 2.24 m (Frauen) und 2.43 m (Männer). Im Nachwuchs sind die Netze tiefer, z. B. 2.15 m (Mädchen U15) und 2.24 m (Knaben U15).",
"Ein Team darf den Ball höchstens 3-mal berühren. Dieselbe Person darf nicht zweimal hintereinander spielen (Block ausgenommen).",
"Rally-Point: Jeder Ballwechsel gibt einen Punkt. Ein Satz geht bis 25 Punkte mit 2 Punkten Vorsprung, ein Entscheidungssatz bis 15.",
"Aufschlag hinter der Grundlinie. Gewinnt das Team, das nicht aufgeschlagen hat, rotiert es eine Position weiter.",
"Technik: Pritschen (obere Technik mit den Fingern, Zuspiel), Baggern (untere Technik mit den Unterarmen, Annahme), Angriff (Schmettern), Block am Netz.",
"Positionen: Zuspieler, Angreifer (Aussen, Mitte, Diagonal) und Libero (Abwehrspezialist)."
],[
MC("Wie viele Spieler hat ein Volleyballteam auf dem Feld?","6",["5","7","11"]),
FI("Ergänze.","Ein Team darf den Ball höchstens ___ Mal berühren, bevor er über das Netz muss.",[["3","drei"]]),
MA("Ordne zu.",[["Pritschen","Obere Technik mit den Fingern"],["Baggern","Untere Technik mit den Unterarmen"],["Aufschlag","Spielbeginn hinter der Grundlinie"],["Block","Abwehr direkt am Netz"]]),
TF("Richtig oder falsch?",[["Ein Satz geht normalerweise bis 25 Punkte.",1],["Derselbe Spieler darf den Ball zweimal hintereinander spielen.",0],["Beim Rally-Point gibt es einen Punkt für jeden Ballwechsel.",1],["Der Libero ist ein Spezialist für Annahme und Abwehr.",1]]),
MC("Welche Technik verwendest du für die Annahme eines harten Aufschlags?","Baggern",["Pritschen","Schmettern","Blocken"]),
FI("Ergänze.","Der Entscheidungssatz geht bis ___ Punkte (mit 2 Punkten Vorsprung).",[["15","fünfzehn"]]),
MC("Wann rotiert ein Team?","Wenn es das Aufschlagrecht vom Gegner zurückgewinnt.",["Nach jedem Punkt.","Nur nach jedem Satz.","Nie."]),
OP("Beobachte ca. 10 Minuten ein Spiel (live oder Video). Wie viele Berührungen hat ein Team pro Ballwechsel? Wer spielt zu? Welche Fehler siehst du?","Meistens drei Berührungen: Annahme (Bagger), Zuspiel (Pritschen), Angriff. Der Zuspieler (oft die Spielerin in der Mitte vorne) spielt zu. Typische Fehler: Aufschlag ins Netz, Ball fällt zwischen zwei Spielern, Doppelberührung, schlechte Annahme.",80),
OP("Erkläre einer Person, die Volleyball nicht kennt, die Spielidee in 4 bis 5 Sätzen.","Zwei Teams spielen über ein Netz. Jedes Team versucht, den Ball im gegnerischen Feld auf den Boden zu bringen. Dafür darf man den Ball dreimal berühren: annehmen, zuspielen, angreifen. Fällt der Ball im eigenen Feld, bekommt der Gegner einen Punkt. Gewonnen hat, wer die meisten Sätze gewinnt.",120)
]);

add('b2',90,'Fussball','Fussball ist der meistgespielte Mannschaftssport der Welt. Regeln und Taktik helfen dir, das Spiel besser zu lesen.',[
"11 gegen 11 (mit Torhüter). Spielzeit im Erwachsenenfussball: 2 × 45 Minuten. In der Schule wird oft mit kleineren Teams und kürzer gespielt.",
"Nur der Torhüter darf im eigenen Strafraum den Ball mit den Händen spielen.",
"Abseits: Ein Angreifer steht im Abseits, wenn er beim Zuspiel näher an der gegnerischen Torlinie ist als der Ball und der zweitletzte Gegner. Kein Abseits bei Einwurf, Abstoss, Eckstoss und in der eigenen Hälfte.",
"Foul im Strafraum: Strafstoss (Elfmeter) aus 11 Metern.",
"Gelbe Karte = Verwarnung. Rote Karte = Platzverweis. Zwei Gelbe ergeben Rot.",
"Standards: Anstoss, Einwurf, Eckstoss, Freistoss, Abstoss.",
"Positionen: Torhüter, Abwehr, Mittelfeld, Sturm. Eine Formation wie 4-4-2 nennt die Anzahl in jeder Reihe."
],[
MC("Wie lange dauert ein Fussballspiel im Erwachsenenfussball?","2 × 45 Minuten",["4 × 10 Minuten","3 × 20 Minuten","1 × 60 Minuten"]),
MA("Ordne zu.",[["Gelbe Karte","Verwarnung"],["Rote Karte","Platzverweis"],["Elfmeter","Strafstoss nach Foul im Strafraum"],["Einwurf","Ball ging über die Seitenlinie"]]),
TF("Richtig oder falsch?",[["Der Torhüter darf den Ball im Strafraum mit den Händen spielen.",1],["Bei einem Einwurf kann man im Abseits stehen.",0],["Zwei gelbe Karten ergeben eine rote Karte.",1],["Ein Fussballteam hat im Standardspiel 7 Spieler.",0]]),
FI("Ergänze.","Ein Strafstoss wird aus ___ Metern geschossen.",[["11","elf"]]),
MC("Wann steht ein Angreifer im Abseits?","Wenn er beim Zuspiel näher am gegnerischen Tor ist als der Ball und der zweitletzte Gegner.",["Wenn er schneller läuft als der Verteidiger.","Wenn er den Ball annimmt.","Wenn er im eigenen Strafraum steht."]),
MA("Wer macht was?",[["Torhüter","Verhindert Gegentore"],["Verteidiger","Schützen das eigene Tor"],["Mittelfeld","Verbindet Abwehr und Angriff"],["Stürmer","Erzielen Tore"]]),
FI("Ergänze.","Bei der Formation 4-4-2 spielen 4 in der Abwehr, 4 im Mittelfeld und 2 im ___.",[["Sturm","Angriff"]]),
OP("Wie würdest du bei einer Ecke des Gegners verteidigen? Beschreibe in 3 bis 4 Sätzen.","Jeder Verteidiger übernimmt einen bestimmten Gegner (Manndeckung) oder einen Raum (Raumdeckung). Der Torhüter ruft laut an, wer wo steht. Zwei Spieler stehen an den Pfosten. Nach dem Klären läuft das Team schnell nach vorne.",80),
OP("Fairplay: Beschreibe eine Situation, in der ein Fussballer (oder du) fair gehandelt hat oder hätte handeln sollen.","Beispiel: Ein Spieler sieht, dass der Ball zuletzt von seinem Team ins Aus ging, obwohl der Schiedsrichter anders entschieden hat. Er gibt es zu. Das ist fair, auch wenn es das Team Nachteile kostet.",80)
]);

add('b3',90,'Basketball','Schnell, wendig und präzise: Basketball verlangt Technik und Spielverständnis.',[
"5 gegen 5. Der Korb hängt auf 3.05 Metern. Spielzeit (FIBA): 4 × 10 Minuten.",
"Punkte: Freiwurf 1, normaler Wurf 2, Wurf hinter der Dreipunktelinie 3.",
"Mit dem Ball darf man nicht laufen. Man muss dribbeln (prellen). Hält man den Ball, darf man nicht erneut dribbeln (Doppeldribbling).",
"Ohne Dribbling sind nur 2 Schritte erlaubt. Mehr Schritte sind ein Schrittfehler (Travelling).",
"Angriffszeit: 24 Sekunden. Danach muss das Team geworfen haben.",
"Foul = unerlaubter Körperkontakt. Nach 5 persönlichen Fouls scheidet ein Spieler aus.",
"Verteidigung: Mann-Mann (jeder deckt einen Gegner) oder Zone (jeder deckt einen Raum)."
],[
FI("Ergänze.","Der Basketballkorb hängt auf ___ Metern Höhe.",[["3.05","3,05","305"]]),
MC("Was ist ein Doppeldribbling?","Den Ball nach dem Dribbling halten und dann nochmals dribbeln.",["Zwei Spieler prellen gleichzeitig.","Ein Wurf mit zwei Händen.","Zwei Punkte mit einem Wurf."]),
MA("Ordne zu.",[["Freiwurf","1 Punkt"],["Wurf innerhalb der Dreipunktelinie","2 Punkte"],["Wurf hinter der Dreipunktelinie","3 Punkte"],["Schrittfehler","Zu viele Schritte ohne Dribbling"]]),
TF("Richtig oder falsch?",[["Man darf mit dem Ball in den Händen beliebig weit laufen.",0],["Im Basketball spielen 5 Spieler pro Team auf dem Feld.",1],["Nach 5 persönlichen Fouls scheidet ein Spieler aus.",1],["Die Angriffszeit beträgt 24 Sekunden.",1]]),
MC("Welcher Pass eignet sich, wenn ein Gegner direkt vor dir steht?","Bodenpass unter den Armen des Gegners durch",["Hoher Pass über den Gegner","Gar nicht passen","Wurf aus dem Stand"]),
FI("Ergänze.","Das Prellen des Balls heisst auf Englisch ___.",[["Dribbling","dribbeln","dribble"]]),
TF("Richtig oder falsch?",[["Bei der Mann-Mann-Verteidigung deckt jeder Spieler einen bestimmten Gegner.",1],["Bei der Zonenverteidigung deckt jeder Spieler einen Raum.",1],["Ein Foul ist unerlaubter Körperkontakt.",1],["Beim Freiwurf darf man den Schützen stören.",0]]),
OP("Beobachte 5 Minuten lang ein Spiel. Wie oft wird gepasst, bevor geworfen wird? Welche Würfe sind erfolgreich?","Oft wird 3- bis 5-mal gepasst, bevor ein freier Wurf entsteht. Erfolgreiche Würfe sind meistens Korbleger und freie Würfe aus der Mitteldistanz. Gedrängte Würfe sind seltener erfolgreich.",80),
OP("Erkläre den Unterschied zwischen Mann-Mann- und Zonenverteidigung mit einem Beispiel.","Bei Mann-Mann deckt jede Verteidigerin eine Gegnerin und folgt ihr überall hin. Bei der Zone deckt jede einen festen Raum, zum Beispiel den Bereich unter dem Korb, und übernimmt Gegner, die in ihren Raum kommen.",80)
]);

add('b4',90,'Leichtathletik','Laufen, Springen, Werfen: Die Leichtathletik ist die Grundlage fast aller Sportarten.',[
"Drei Grundformen: Laufen, Springen, Werfen und Stossen.",
"Sprint (60 m, 100 m): Tiefstart, kräftiger Abdruck, hohe Schrittfrequenz.",
"Weitsprung: Anlauf, Absprung vor dem Balken, Flug, Landung in der Sandgrube. Gemessen wird vom Balken bis zum nächsten Abdruck im Sand.",
"Hochsprung: Der Flop führt rückwärts über die Latte.",
"Kugelstossen: Die Kugel wird gestossen, nicht geworfen. Sie liegt am Hals.",
"Ausdauer: Beim Cooper-Test läuft man 12 Minuten, so weit wie möglich.",
"Staffel: Der Stab wird in der Wechselzone übergeben."
],[
MA("Ordne jede Disziplin einer Grundform zu.",[["100-Meter-Sprint","Laufen"],["Weitsprung","Springen"],["Kugelstossen","Stossen/Werfen"],["Hochsprung","Springen"]]),
FI("Ergänze.","Beim Cooper-Test läuft man ___ Minuten.",[["12","zwölf"]]),
MC("Wo wird im Weitsprung gemessen?","Vom Absprungbalken bis zum nächsten Abdruck im Sand",["Vom Anlaufbeginn bis zur Landung","Bis zu den Fussspitzen","Bis zum Ende der Sandgrube"]),
TF("Richtig oder falsch?",[["Beim Kugelstossen wird die Kugel geworfen (Schleuderbewegung).",0],["Beim Weitsprung muss man vor dem Balken abspringen.",1],["Der Flop ist eine Hochsprungtechnik.",1],["Der Tiefstart wird im Sprint verwendet.",1]]),
MC("Was macht den Sprint schnell?","Hohe Schrittfrequenz und kraftvoller Abdruck",["Langer Rhythmus ohne Armeinsatz","Lange Pause vor dem Start","Möglichst wenig Bewegung"]),
FI("Ergänze.","Bei der Staffel wird der ___ in der Wechselzone übergeben.",[["Stab","Staffelstab"]]),
MA("Weitsprung: Welche Phase hat welche Aufgabe?",[["Anlauf","Tempo aufbauen"],["Absprung","Kraftvoll vom Balken abdrücken"],["Flug","Körperhaltung halten"],["Landung","Füsse nach vorne in den Sand"]]),
OP("Miss bei einer Mitschülerin oder einem Mitschüler 3 Versuche (Weitsprung oder Sprintzeit). Notiere die Werte. Was fällt dir auf?","Beispiel: 3.10 m, 3.25 m, 3.18 m. Der zweite Sprung war am weitesten, weil der Anlauf gleichmässiger war und der Absprung vor dem Balken sauber. Die Werte zeigen, wie wichtig Technik ist.",80),
OP("Welche Disziplin würdest du wählen und warum? Welche Fähigkeiten brauchst du dafür?","Ich würde Weitsprung wählen. Ich brauche Schnelligkeit für den Anlauf, Sprungkraft beim Absprung und Koordination, um den Absprung genau zu treffen.",80)
]);

add('b5',90,'Trainingsplanung und Prinzipien','Wer besser werden will, trainiert nicht einfach drauflos. Mit Prinzipien und einem Plan geht es gezielter.',[
"Superkompensation (vereinfachtes Modell): Belastung → Ermüdung → Erholung → Leistung ist danach höher als vorher. Einen exakten Zeitpunkt für die nächste Belastung gibt es nicht. Wichtiger sind Regelmässigkeit und genug Erholung.",
"Prinzipien: Regelmässigkeit, Progression (schrittweise steigern), Individualität, Abwechslung, Erholung.",
"Belastungsnormative: Intensität (wie hart), Umfang (wie viel), Dauer, Dichte (Pausen), Häufigkeit.",
"SMART-Ziele: spezifisch, messbar, attraktiv, realistisch, terminiert.",
"Ablauf: Ziel festlegen → Ausgangswert testen → Plan erstellen → trainieren → erneut testen."
],[
MC("Was beschreibt die Superkompensation?","Nach Belastung und Erholung ist die Leistung höher als vorher.",["Man wird nach Belastung dauerhaft müder.","Man braucht keine Erholung.","Die Leistung bleibt immer gleich."]),
MA("Ordne das Prinzip der Beschreibung zu.",[["Regelmässigkeit","Mehrmals pro Woche trainieren"],["Progression","Belastung schrittweise steigern"],["Individualität","Training passt zur Person"],["Abwechslung","Verschiedene Übungen und Reize"]]),
FI("Ergänze.","Intensität, Umfang, Dauer, Dichte und ___ heissen Belastungsnormative.",[["Häufigkeit","Haeufigkeit"]]),
TF("Richtig oder falsch?",[["Training ohne Pausen bringt die schnellsten Fortschritte.",0],["Die Belastung sollte langsam gesteigert werden.",1],["Alle Menschen brauchen genau denselben Trainingsplan.",0],["Ziele sollten messbar sein.",1],["Es gibt einen exakten Zeitpunkt, an dem man immer wieder trainieren muss.",0]]),
MC("Welches Ziel ist ein SMART-Ziel?","In 6 Wochen laufe ich 15 Minuten ohne Pause.",["Ich will fitter werden.","Irgendwann bin ich schneller.","Ich trainiere einfach viel."]),
FI("Ergänze.","Die schrittweise Steigerung der Belastung heisst ___.",[["Progression","Steigerung"]]),
TF("Richtig oder falsch?",[["Mit einem Eingangstest erkennt man den Ausgangswert.",1],["Ein Plan wird nie überprüft.",0],["Bei Schmerzen trainiert man einfach weiter.",0],["Erholung ist Teil des Plans.",1]]),
OP("Formuliere ein SMART-Ziel für dich in einem Satz.","In 8 Wochen steigere ich meinen Cooper-Test um 200 Meter, indem ich 2-mal pro Woche 20 Minuten laufe.",40),
OP("Erstelle einen 4-Wochen-Plan für dein Ziel mit je 2 Trainings pro Woche. Schreibe pro Woche 1 bis 2 Sätze.","Woche 1: 2 × 15 Minuten locker laufen. Woche 2: 2 × 18 Minuten. Woche 3: 1 × 20 Minuten, 1 × Intervalle (3 × 3 Minuten). Woche 4: 2 × 20 Minuten, am Schluss Test. Dazwischen immer einen Pausentag.",120)
]);

add('b6',90,'Ausdauertraining','Ausdauer hält dich im Spiel und beschleunigt die Erholung. Hier lernst du, wie du sie trainierst und misst.',[
"Aerob = mit Sauerstoff (lange, ruhig). Anaerob = ohne genug Sauerstoff (kurz, intensiv).",
"Talk-Test: Kannst du beim Laufen noch sprechen, bist du im aeroben Bereich.",
"Grundlagenausdauer: etwa 60 bis 75 % des Maximalpulses. Der Maximalpuls lässt sich mit der Tanaka-Formel (208 minus 0,7 mal Alter) schätzen, ist aber nur ein Richtwert.",
"Dauermethode: lange, gleichmässig. Intervallmethode: Belastung und Pause im Wechsel. Fahrtspiel: Tempo wechselt frei.",
"Wirkungen: Das Herz wird kräftiger, der Ruhepuls sinkt, man erholt sich schneller.",
"Messen: Cooper-Test, 1000-Meter-Lauf, Pulskontrolle."
],[
FI("Schätze den Maximalpuls mit der Tanaka-Formel (208 minus 0,7 mal Alter) für 14 Jahre. Runde auf eine ganze Zahl.","208 − 0,7 × 14 = ___",[["198","198.2","198,2"]]),
FI("60 % von 200 Schlägen pro Minute sind ___ Schläge pro Minute.","60 % von 200 = ___",[["120"]]),
MA("Ordne zu.",[["Dauermethode","Lange gleichmässig laufen"],["Intervallmethode","Belastung und Pause im Wechsel"],["Fahrtspiel","Tempo wechselt nach Gefühl"],["Talk-Test","Einfache Intensitätskontrolle über das Sprechen"]]),
MC("Was passiert bei regelmässigem Ausdauertraining mit dem Ruhepuls?","Er sinkt.",["Er steigt.","Er bleibt immer gleich.","Er verschwindet."]),
TF("Richtig oder falsch?",[["Aerob heisst: mit Sauerstoff.",1],["Beim aeroben Training kann man sich noch unterhalten.",1],["Intervalltraining hat keine Pausen.",0],["Grundlagenausdauer trainiert man in ruhigem Tempo.",1]]),
MC("Ein Kollege keucht und kann nicht mehr sprechen. Wo ist er?","Eher im anaeroben Bereich, zu schnell für Grundlagenausdauer.",["Im entspannten Ruhebereich.","Das lässt sich nie sagen.","Im aeroben Bereich bei 40 % des Maximalpulses."]),
FI("Ergänze.","Beim Cooper-Test läuft man ___ Minuten so weit wie möglich.",[["12","zwölf"]]),
OP("Miss deinen Ruhepuls (30 Sekunden zählen, mal 2). Dann nach 1 Minute Armkreisen oder 20 Kniebeugen, falls es deine Verletzung zulässt. Notiere beide Werte und wie schnell er wieder sinkt.","Beispiel: Ruhepuls 72, nach 20 Kniebeugen 108, nach 2 Minuten wieder bei 80. Je schneller der Puls sinkt, desto besser die Erholungsfähigkeit.",60),
OP("Plane eine 20-Minuten-Ausdauereinheit (Dauermethode) für die Klasse. Welches Tempo? Wie kontrollierst du es?","Alle laufen 20 Minuten im Tempo, bei dem man noch sprechen kann (Talk-Test). Wer keucht, wird langsamer. Zusätzlich kann der Puls nach 10 Minuten gemessen werden. Ziel: 60 bis 75 % des Maximalpulses.",100)
]);

add('b7',90,'Krafttraining für Jugendliche','Kraft verbessert Haltung, Sprungkraft und schützt vor Verletzungen. Wichtig ist, richtig zu starten.',[
"Kraftarten: Maximalkraft, Schnellkraft, Kraftausdauer.",
"Jugendliche trainieren mit dem eigenen Körpergewicht: Liegestütz, Kniebeuge, Plank, Ausfallschritt, Rudern.",
"Technik vor Gewicht: sauber ausführen, Rücken gerade, ruhig atmen und nicht pressen.",
"Krafttraining schadet den Wachstumsfugen nicht, wenn es angeleitet wird und die Technik stimmt. Das Risiko liegt bei zu schweren Gewichten und schlechter Technik. In der Schule gilt: Körpergewicht oder leichte Lasten, keine Maximalversuche.",
"2 bis 3 Mal pro Woche, dazwischen mindestens einen Pausentag.",
"Der Rumpf stabilisiert den ganzen Körper und gehört in jedes Programm.",
"Muskelkater entsteht bei ungewohnter Belastung. Er ist kein Mass für ein gutes Training."
],[
MA("Welche Körperregion trainiert die Übung hauptsächlich?",[["Liegestütz","Brust, Trizeps und Rumpf"],["Kniebeuge","Beine und Gesäss"],["Plank","Rumpf"],["Ausfallschritt","Beine und Gleichgewicht"]]),
MC("Welche Last eignet sich für den Einstieg ins Krafttraining?","Das eigene Körpergewicht",["Das schwerste Gewicht, das man gerade noch hebt","Nur Maschinen mit Maximalgewicht","Krafttraining ist für Jugendliche verboten"]),
TF("Richtig oder falsch?",[["Beim Krafttraining hält man den Atem an und presst.",0],["Technik ist wichtiger als viel Gewicht.",1],["Man trainiert 2 bis 3 Mal pro Woche mit Pausentagen.",1],["Muskelkater zeigt, dass das Training besonders gut war.",0]]),
FI("Ergänze.","Die Kraftarten heissen Maximalkraft, Schnellkraft und ___.",[["Kraftausdauer"]]),
MA("Welche Kraftart ist gemeint?",[["Einmal sehr schwer heben","Maximalkraft"],["Hochspringen zum Block","Schnellkraft"],["Viele Liegestütze nacheinander","Kraftausdauer"]]),
MC("Du hast ein verletztes Bein. Was ist (nach Absprache mit Lehrperson oder Arzt) möglich?","Rumpf- und Oberkörperübungen, die das Bein nicht belasten",["Normal mitmachen","Die Beine mit viel Gewicht trainieren","Gar nichts tun und nur zuschauen"]),
FI("Ergänze.","Für den Rumpf ist der Unterarmstütz, die ___, eine sehr gute Übung.",[["Plank"]]),
OP("Beschreibe die richtige Ausführung einer Kniebeuge in 3 bis 4 Sätzen.","Füsse schulterbreit, Fussspitzen leicht nach aussen. Brust raus, Rücken gerade, Blick nach vorne. Hüfte nach hinten unten schieben, Knie zeigen in Richtung der Zehen. Dann kraftvoll aufstehen und dabei ausatmen.",80),
OP("Entwirf ein 10-Minuten-Programm mit 5 Körpergewichtsübungen (Name und Wiederholungen).","Beispiel: 15 Kniebeugen, 10 Liegestütze (auch auf Knien), 20 Sekunden Plank, 10 Ausfallschritte pro Seite, 15 Rumpf-Aufrichter. 2 Durchgänge, dazwischen 30 Sekunden Pause.",100)
]);

add('b8',90,'Unihockey','Unihockey ist in der Schweiz sehr beliebt und eignet sich für jede Halle.',[
"Grossfeld: 5 Feldspieler und ein Torhüter pro Team, Spielfeld 40 × 20 Meter. Spielzeit bei Erwachsenen 3 × 20 Minuten. In der Schule wird oft auf dem Kleinfeld mit 3 Feldspielern gespielt.",
"Der Ball darf nur bis Kniehöhe gespielt werden. Ausholen und Ausschwingen über Hüfthöhe sind verboten.",
"Feldspieler dürfen den Ball nicht mit der Hand spielen.",
"Im Kampf um den Ball darf der Körper kontrolliert eingesetzt werden. Stossen, Checken und das Anheben oder Herunterdrücken des gegnerischen Stocks sind verboten. Ein Foul führt zu einem Freischlag oder zu einer 2-Minuten-Strafe.",
"Technik: Passen, Annehmen, Schuss (Handgelenkschuss, Schlagschuss), Ballführung.",
"Taktik: Freilaufen, Abstand halten, schnelle Pässe, Überzahl schaffen."
],[
FI("Ergänze.","Ein Unihockeyteam spielt mit 5 Feldspielern und einem ___.",[["Torhüter","Torhueter","Goalie","Torwart"]]),
MC("Welche Regel gilt für den Stock?","Der Ball darf nur bis Kniehöhe gespielt werden, ausgeholt wird nicht über Hüfthöhe.",["Der Ball darf bis Kopfhöhe gespielt werden.","Der Stock darf zum Halten des Gegners benutzt werden.","Der Stock darf geworfen werden."]),
TF("Richtig oder falsch?",[["Feldspieler dürfen den Ball mit der Hand spielen.",0],["Stossen und Checken sind verboten, kontrollierter Körpereinsatz im Kampf um den Ball ist erlaubt.",1],["Ein Foul kann zu einer 2-Minuten-Strafe führen.",1],["Das Spiel dauert bei Erwachsenen normalerweise 3 × 20 Minuten.",1],["Man darf den gegnerischen Stock anheben, um an den Ball zu kommen.",0]]),
MA("Ordne zu.",[["Passen","Ball zu Mitspieler spielen"],["Schuss","Ball aufs Tor bringen"],["Annahme","Ball mit dem Stock kontrollieren"],["Ballführung","Ball mit dem Stock mitnehmen"]]),
MC("Wie schaffst du eine Überzahl-Situation?","Durch gutes Freilaufen und schnelle Pässe",["Durch Festhalten des Gegners","Durch Stehenbleiben","Durch Schlagen auf den gegnerischen Stock"]),
FI("Ergänze.","Das Unihockey-Grossfeld ist 40 × ___ Meter gross.",[["20","zwanzig"]]),
MC("Der Schiedsrichter hat einen Pfiff verpasst, der zu deinem Vorteil wäre. Was ist fair?","Offen sagen, wenn die Situation klar war.",["Nichts sagen und profitieren.","Den Schiedsrichter beschimpfen.","Das Spiel verlassen."]),
OP("Beobachte ein Spiel. Wie bewegt sich ein Team in der Offensive (Pässe, Freilaufen)? Notiere 3 Punkte.","Beispiel: 1. Ein Spieler läuft frei und bietet sich an. 2. Es wird schnell quer gepasst, bis eine Lücke entsteht. 3. Der Schuss wird vorbereitet, indem die Verteidiger auf eine Seite gelockt werden.",80),
OP("Schreibe 3 Sicherheitsregeln für Unihockey in der Halle.","1. Den Ball nur bis Kniehöhe spielen und nie über Hüfthöhe ausholen. 2. Nicht stossen oder checken. 3. Den Stock des Gegners nicht anheben oder herunterdrücken.",80)
]);

add('b9',90,'Gesundheit und Bewegung','Bewegung ist mehr als Sportunterricht. Sie beeinflusst Körper, Kopf und Alltag.',[
"Schweizer Bewegungsempfehlung für Kinder und Jugendliche (hepa.ch, BASPO, BAG): im Durchschnitt über die Woche verteilt mindestens 60 Minuten Bewegung pro Tag, mit mittlerer bis hoher Intensität. Bei mittlerer Intensität kommst du leicht ins Schwitzen, kannst aber noch sprechen.",
"Etwa 3 Mal pro Woche sollen Aktivitäten dabei sein, die Muskeln und Knochen kräftigen, zum Beispiel Springen, Klettern oder Kraftübungen.",
"Langes Sitzen vermeiden: alle 30 bis 60 Minuten kurz aufstehen und bewegen.",
"Bildschirmzeit begrenzen, besonders am Abend.",
"Bewegung stärkt Herz-Kreislauf, Knochen, Muskeln, Psyche, Konzentration und Schlaf.",
"Alltagsbewegung zählt: Treppe, Velo, zu Fuss zur Schule.",
"Bewegung, Ernährung und Schlaf hängen zusammen."
],[
FI("Ergänze.","Jugendliche sollten täglich mindestens ___ Minuten bewegt sein.",[["60","sechzig"]]),
TF("Richtig oder falsch?",[["Bewegung hilft auch der Konzentration.",1],["Langes Sitzen ist unproblematisch, wenn man abends trainiert.",0],["Zu Fuss zur Schule gehen zählt als Alltagsbewegung.",1],["Bildschirmzeit hat nichts mit Bewegung zu tun.",0]]),
MA("Was stärkt die Bewegung?",[["Herz-Kreislauf","Wird leistungsfähiger"],["Knochen","Werden stabiler"],["Muskeln","Werden stärker"],["Psyche","Stress wird abgebaut"]]),
MC("Wie unterbrichst du langes Sitzen am besten?","Alle 30 bis 60 Minuten aufstehen und bewegen",["Einmal am Tag 5 Minuten","Gar nicht","Noch tiefer sinken"]),
FI("Ergänze.","Die Bewegungsempfehlungen kommen unter anderem von der Weltgesundheitsorganisation, abgekürzt ___.",[["WHO"]]),
MC("Welche Aktivität zählt NICHT als Bewegung mit mittlerer bis hoher Intensität?","Eine Stunde Serien schauen",["Schnelles Velofahren","Fussballspielen","Zügig Treppen steigen"]),
OP("Wie viele Minuten bewegst du dich an einem normalen Schultag? Wie kannst du mehr erreichen?","Ich laufe 10 Minuten zur Schule, habe 2 Stunden Sport pro Woche und gehe abends manchmal raus. Ich könnte öfter das Velo nehmen, in der Pause rausgehen und zu Hause kurz Treppen steigen.",80),
OP("Schreibe 3 Tipps für Mitschüler, wie man im Alltag mehr Bewegung einbaut.","1. Treppe statt Lift. 2. Kurze Wege zu Fuss oder mit dem Velo. 3. Beim Lernen alle 45 Minuten kurz aufstehen und sich strecken.",80),
OP("Setze dir ein Bewegungsziel für die nächste Woche (konkret und messbar).","Ich bewege mich in der nächsten Woche an 5 Tagen mindestens 30 Minuten zusätzlich zum Sportunterricht, zum Beispiel mit Spazieren oder Velofahren.",40)
]);

add('b10',90,'Olympische Spiele und Sport in der Schweiz','Olympia ist das grösste Sportfest der Welt. Auch in der Schweiz gibt es viele Organisationen, die Sport fördern.',[
"Antike Spiele: in Olympia (Griechenland), zu Ehren des Zeus. Als frühester belegter Zeitpunkt gilt 776 v. Chr.",
"Moderne Spiele: seit 1896 in Athen, Gründer: Pierre de Coubertin. Sie finden alle 4 Jahre statt.",
"Sommerspiele und Winterspiele (Winter seit 1924 in Chamonix).",
"Die fünf Ringe stehen für die fünf Kontinente.",
"Das Internationale Olympische Komitee (IOC) hat seinen Sitz in Lausanne.",
"Olympische Werte: Respekt, Freundschaft, Streben nach Leistung.",
"Paralympics sind die Spiele für Athletinnen und Athleten mit Beeinträchtigung.",
"In der Schweiz: Swiss Olympic ist der Dachverband, Jugend+Sport (J+S) fördert den Sport von Kindern und Jugendlichen."
],[
FI("Ergänze.","Die modernen Olympischen Spiele fanden 1896 erstmals in ___ statt.",[["Athen"]]),
MC("Wo hat das IOC seinen Sitz?","Lausanne",["Zürich","Genf","Bern"]),
MA("Ordne zu.",[["Pierre de Coubertin","Begründer der modernen Spiele"],["Olympia","Ort der antiken Spiele"],["Fünf Ringe","Die fünf Kontinente"],["Paralympics","Spiele für Athleten mit Beeinträchtigung"]]),
TF("Richtig oder falsch?",[["Olympische Spiele finden alle 4 Jahre statt.",1],["Die Winterspiele gibt es seit 1924.",1],["Das IOC hat seinen Sitz in Paris.",0],["Respekt gehört zu den olympischen Werten.",1]]),
FI("Ergänze.","Das Förderprogramm für Kinder und Jugendliche in der Schweiz heisst Jugend+ ___ (J+S).",[["Sport"]]),
MC("Wer nimmt an den Paralympics teil?","Athletinnen und Athleten mit Beeinträchtigung",["Nur Profis über 40","Nur Schülerinnen und Schüler","Nur Zuschauer"]),
OP("Wähle eine olympische Disziplin oder eine Schweizer Sportlerin bzw. einen Schweizer Sportler. Schreibe 4 bis 5 Sätze (mit Recherche).","Individuelle Antwort. Gute Antworten nennen: Name, Sportart, einen Erfolg oder Rekord, und warum die Person oder Disziplin interessant ist.",100),
OP("Was bedeutet Fairplay für dich? Gib ein Beispiel aus dem Sport.","Fairplay heisst, sich an die Regeln zu halten, den Gegner zu respektieren und Entscheide zu akzeptieren, auch wenn man verliert. Beispiel: Man hilft einem gefoulten Gegner auf.",80),
OP("Erstelle eine Quizfrage mit Antwort zu einem Kapitel dieser App, die du der Klasse stellen könntest.","Individuelle Antwort. Beispiel: Wie viele Berührungen hat ein Volleyballteam höchstens pro Ballwechsel? Antwort: drei.",40)
]);
