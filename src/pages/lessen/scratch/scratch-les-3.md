---
title: Scratch LES 3
layout: Les
isIntro: true
draft: true
date: 2019-10-10T14:21:15.378Z
description: Een crab die appels vangt
image: /uploads/crab.png
next: 'Sratch opdracht: "Raad een getal tussen 1 en 10"'
previous: Scratch LES 2
---
## **De Crab die appeltjes vangt**

- - -

**We gaan eerst de sprite “cat” verwijderen, want die hebben we niet nodig.** \
**Klik op de prullenbak bij de sprite (rechts onderaan) en de poes (cat) zal verdwijnen.**

![](/uploads/cat-verwijderen.png)

**Klik daarna in het vak waar de sprite stond, en dat nu leeg is, op het sprite-teken met de plus. Er verschijnt een bibliotheek met allemaal sprite figuren. Zoek naar “crab” en laat deze in het programma door er met de linker muisknop op te klikken.**

![](/uploads/nieuwe-sprite-kiezen.png)

**We zetten de crab midden onderaan en maken hem een stuk kleiner. Klik daarvoor op het getal 100 naast het woord Grootte en maak daar dan 50 van.**

![](/uploads/crab-verkleinen.png)

**We plaatsen in het scriptveld nu het blokje “_wanneer op de groene vlag wordt geklikt_” uit “gebeurtenis” en maken daar een “_herhaal-blokje_” uit “besturen” aan vast.**

**De crab moet naar links en rechts kunnen bewegen. Hij moet dus reageren op: “Als ik op het pijltje naar rechts klik” of op: “Als ik op het pijltje naar links klik”.**

**We nemen daarvoor het blokje “_Als…. dan_” uit besturen en plaatsen dat in het herhaal blokje. We nemen daarna het blokje “_Toets spatiebalk ingedrukt_” uit “waarnemingen” en plaatsen dat in het vakje tussen de woorden “als” en “dan”. Klik dan op het driehoekje naast het woord “spatiebalk” en kies dan voor: “pijltje rechts”. Er staat nu dus eigenlijk: “**als pijltje rechts ingedrukt dan**”.** 

**Neem nu het blokje: “_neem 10 stappen_” uit “bewegen” en plaats dat in het “als..dan” blokje.** 

- - -

**Als het goed is ziet jouw script van de crab er nu zo uit:**

![](/uploads/script-pijltjes.png)

**Nu moet je hetzelfde doen om de crab naar links te laten lopen. Je kunt de stappen herhalen maar je kunt ook een kopie maken van de stappen die je al gedaan hebt.**

**Ga op het “als…dan” blokje staan met je muis en klik dan op de rechter muisknop. Klik dan op de mogelijkheid: “Kopie maken”.  Er verschijnt een kopie van het “als..dan” blok. Plaats dit kopie onder het al gemaakte blok. Je hebt nu 2 dezelfde “als…dan” blokken onder elkaar. Het onderste “als…dan” blok moet je aanpassen. Klik daar op het driehoekje achter “pijltje rechts” en kies dan voor “pijltje links”. Verander ook de 10 in “neem 10 stappen” in:  – 10, om de crab de andere kant op te laten gaan.**

**Jouw script ziet er nu als volgt uit:**

![](/uploads/script-pijltjes2.png)

**De crab hoeft alleen onderaan te bewegen en dan is het handig als je bij het starten van het spel, de crab meteen op de goede plaats zet. Midden onderaan.**

**Als er op de vlag geklikt wordt moet hij naar midden onderaan, en dat wordt gedaan door de x-coördinaat en de y-coördinaat.**  

**Plaats het bokje: “_Ga naar x 33  y -156”_** **uit “bewegen” meteen onder het blokje “wanneer op de groene vlag wordt geklikt” en boven het blokje “herhaal”.** 

**Als je nu op de groene vlag klikt staat de crab meteen op de juiste plek en kun je met de pijltjes toetsen de crab naar links en rechts bewegen.**

**We gaan nu de sprite voor appeltjes toevoegen.**\

**Ga daarvoor naar het vak waar de sprite crab staat, en klik dan weer op de sprite met het + teken, rechts onderaan in dat vak. Er verschijnt een bibliotheek met allemaal sprite figuren. Zoek naar “apple” en laat deze in het programma door er met de linker muisknop op te klikken. We maken deze apple meteen een stuk kleiner (anders wordt die wel heel makkelijk gevangen). We maken de apple ook de helft kleiner. Van 110 naar 50.** 

**We gaan de apple een andere kleur geven. We gaan hem geel maken.**\
**Klik op het tabblad: Uiterlijken en klik dan op de verf-emmer aan de linkerkant.** 

![](/uploads/verfemmer.png)

**Klik dan op het driehoekje naast het woord Vulling en schuif het rondje op de balk bij kleur zover naar links of rechts tot je kleur no 18 hebt. De gele kleur. Klik dan op de rode appel en je ziet dat die appel een gele kleur krijgt i.p.v. rood.**

![](/uploads/appelkleur-veranderen.png)

**We willen straks misschien het uiterlijk van de sprite apple kunnen laten veranderen. Daarom maken we een tweede uiterlijk door in het tabblad Uiterlijk op de sprite van de apple te klikken en dan op “dupliceren” te klikken.**

![](/uploads/appel-kopieren.png)

**Je hebt nu de sprite-uiterlijken  Apple en Apple2 van de sprite Aplle.**

**We passen het eerste uiterlijk van Apple aan en maken die groen. Nu heeft de sprite Apple dus 2 uiterlijken. Een groene kleur en een gele.**

![](/uploads/appel-2maal.png)

**De appel moet gaan vallen van boven naar beneden en hij moet op een willekeurige plek verschijnen bovenaan.** 

**We gaan terug naar het tabblad Code** \
**en brengen in het scriptveld van Apple de blokken “_Wanneer op de groene vlag wordt geklikt_” en “_herhaal_” zoals we dat in het scriptveld van Crab hebben gedaan.** 

**Breng nu het blokje: “_Verander y met 10” van “beweging_” in het blokje “Herhaal” en verander het getal 10 in -3.  (-3 geeft de snelheid van vallen aan. -4 is sneller, -5 is nog sneller enz.).** 

**De appel moet wel altijd bovenaan beginnen en ook nog op een willekeurige plek als er op de groene vlag wordt geklikt. Dus we brengen in het scriptveld van Apple weer een blokje “_Wanneer op de groene vlag wordt geklikt_” aan en plak daaronder het blokje “_Ga naar x 210 en y 261_” Maar die x-coördinaat moet steeds anders zijn (Ergens bovenaan links of rechts). Plaats daarom het blokje “_Willekeurig getal tussen 1 en 10_” op de plaats van het getal dat achter x staat. Dan gaan we de getallen 1 en 10 aanpassen. Je begint links met -220 tot helemaal rechts 220. Verander dus de1 in -220 en de 10 in 220. Dus ergens tussen die 2 getallen, -220 (helemaal links) en 220 (helemaal rechts) moet de appel bovenaan verschijnen.** 

**Als de appel helemaal beneden komt, moet hij weer bovenaan opnieuw beginnen. Dit gaan we inbouwen met een “Als...dan” blokje. Zet een “_Als...dan_” blokje uit “besturen” in het script binnen het “herhaal” blokje onder “verander y met -3”.**

**Tussen de woorden “als” en “dan” zetten we een functie. We halen het blokje “_O < 50_** **“ (dat betekent dat wat je bij het O invoert, kleiner moet zijn dan 50) uit “functie” en plaatsen dat op de plek tussen de woorden “als” en “dan”.  In het rondje wordt nu het blokje “_y-positie_” uit “beweging” geplaatst. Er staat nu dus: “**Als de y-positie kleiner is dan 50, dan**”.** \
**Nu moet je nog zeggen wat er dan moet gebeuren. De appel moet weer naar een willekeurige plaats bovenaan, zoals aan het begin van het spel. Kopieer daarom het script dat je daarvoor al gemaakt hebt ( ga naar x willekeurig getal tussen -220 2n 220 y 180) naar dit “als…dan” blokje en plaats het in de lege regel onder “als...dan”.  Verander nog wel eerst even de y-positie 50 in y-positie -170 in dat “als…dan” blok.** 

**Het scriptvenster van Apple ziet nu zo uit:**

![](/uploads/script-voor-appel.png)

**Nu moeten we nog iets doen met de Crab.** \
**Als de appel op de crab komt moeten we punten gaan tellen.**

**Haal weer een “_als…dan_” blokje uit “besturen” en plaats dat onder het eerste “als…dan” blok in het herhaal blok. Plaats nu het blokje “_raak ik muisaanwijzer_ “ uit “waarnemen” en plaats dit in het vakje tussen de woorden “als” en “dan” . Klik op het driehokje naast het woord muisaanwijzer en kies dan voor: Crab.** \
**Als de Crab geraakt wordt moet de appel weer bovenaan op een willekeurige plaats beginnen. Dus we kopiëren dezelfde regel als vorige keer (ga naar x willekeurig getal tussen -220 en 220 y 180) weer naar de lege plek onder de “Als raak ik Crab dan”.** 

**Nu gaan we nog iets toevoegen. Als de appel de Crab raakt, moet de appel van kleur veranderen. Sleep daarom het blokje: “_verander uiterlijk naar apple2_ “ uit “uiterlijken” naar de plek onder de regel “Als raak ik de crab dan”.** \

**Zet onder dat blokje, het bloke “_Start geluid Chomp_” uit “geluid”.**\

**Zet daaronder dan het blokje “_wacht 1 sec_” uit “besturen” en verander de 1 in 0.3 sec.** 

**Daarna moetje de appel weer terug veranderen naar de kleur van de eerste apple.**\

**Sleep daarom het blokje “_verander uiterlijk naar apple_” uit “uiterlijken” onder het blokje “Start geluid Chomp”.** 

**Het scriptvenster van Apple ziet nu zo uit:**

![](/uploads/script-voor-appel2.png)

**Nu willen we scores bijhouden.**

**We maken een variabele aan.** 

Een variable is zoiets als een doos waar je verschillende dingen in kunt stoppen en uithalen. Maar telkens maar één ding tegelijk. Zo kun je bijvoorbeeld een variabele (doos) met de naam “Voornaam” maken en telkens een andere voornaam in die doos stoppen. Als je dan in de doos “Voornaam” kijkt, kun je zien welke voornaam er dan in zit.

 **Ga daarvoor naar “Variabelen” en klik dan op de mogelijkheid:** 

**“Maak een variabele”.**

![](/uploads/variabele-maken.png)

**Je krijgt dan een invulvenster, en vul daarin “score” omdat jouw variabele score gaat heten. Klik daarna op de Ok knop.**

![](/uploads/variabele-naam-geven.png)

**Sleep nu het blokje “_Maak mijn variabele O_”  uit “Variabele” naar het script van de twee regels die wordt gebruikt bij het starten van het programma. Zet het meteen onder het blokje “Wanneer op de groene vlag wordt gedrukt”.** \

**Klik op het driehoekje naast “mijn variabele” en kies dan voor “score”. Nu staat er “**maak mijn score 0"**. En dit gebeurt dan als het programma start.**

**Nu moet ik zorgen dat elke keer als ik de appel de crab raakt, de score met 1 veranderd.** 

**Daarvoor sleep ik het blokje “_Verander mijn variabele met 1_” uit “Variabele” naar de herhaal lus en plaats in het “Als raak ik de crab dan” blokje, meteen bovenaan. De tekst “mijn variabele” verander ik in "score" door op het driehoekje te klikken en voor score te kiezen.** 

**We gaan nog een variabele maken.**

**Als de appel drie keer op de grond gevallen is, ben ik mijn levens kwijt.  We maken een variabele met de naam “Levens”. Je doet dit op dezelfde manier zoals je de variabele “score” hebt gemaakt.**

**Je sleept het blokje “_maak levens 0_” uit “variabelen” naar het script dat wordt gebruikt bij het starten van het programma en zet het blokje onder het blokje “Maak mijn variabele 0”. Je verandert in het blokje “maak levens 0” het getal 0 in 3 omdat ik met 3 levens start.**

**Dan moet je het blokje “_verander levens met 1_” uit “variabelen” slepen naar de herhaal lus en het plaatsen in het blok “als y positie < -170 dan” meteen bovenaan in dit blok. De appel is namelijk op de grond gekomen. We moeten nog wel even bij “verander levens met 1” de 1 veranderen in -1 want we verliezen een leven en krijgen er geen bij.** 

**Het scriptveld van Apple ziet er nu zo uit:**

![](/uploads/script-voor-appel3.png)

**De snelheid hadden we op -3 gemaakt. Nu willen we dat de snelheid telkens verandert en maken die dus ook variabel.** 

**We maken een variabele “snelheid” aan. We weten nu hoe we dat moeten doen.** 

**Zet nu in het blokje ‘verander y met -3” de variabele “snelheid” op de plaats van de -3 .**

![](/uploads/variabele-snelheid-plaatsen.png)

**Sleep het blokje _“maak snelheid 0”_ naar het scriptblok van het opstarten en maak dan van de 0, -3. De snelheid waarmee begonnen wordt is dus: -3.**

![](/uploads/variabele-snelheid-opstarten.png)

**Nu moet de snelheid veranderen na een aantal behaalde punten.** 

**Sleep een “_als…dan_” blok uit “besturen” naar het herhaal blok en plaats dit onderaan binnen het herhaal blok. Plaats de functie “_O = 50_” uit “Functies” naar de plek tussen de woorden “als” en “dan”. Plaats in de plek O de variabele “score” uit “variabelen” en maak van het getal 50 een 6. In de lege regel onder “Als score = 6 dan” plaats je het blok: “maak snelheid > -5” uit “variabelen”.**

**Dit blok van de sprite Apple ziet er nu zo uit:**

![](/uploads/script-voor-appel4.png)

**Het laatste blok kopieer je nu en maak voor score 12 en voor snelheid dan -8. Dit blok plaats je onder het eerste blok dat je net gemaakt hebt**

![](/uploads/kopie-scoreblok.png)

**Klik bij Variabelen op het v-teken in het blauwe vakje voor de variabele “snelheid”. Je ziet dan die variabele in het speelveld onzichtbaar is geworden.**

![](/uploads/variabele-onzichtbaar.png)

**We kiezen ook nog een andere achtergrond.** \
**Natuurlijk kun je zelf kiezen wat je wilt maar een leuke lijkt me “desert”.** 

**Klik rechts onderaan in de hoek op het pictogram voor achtergrond en klik dan op “kies een achtergrond”.** 

**Zoek naar desert (of iets anders als je dat wilt) en laadt die achtergrond dan door er op te klikken**

![](/uploads/nieuwe-achtergrond.png)

**In het tabblad van achtergronden maak ik een kopie van deze achtergrond (dupiceren).**

![](/uploads/achtergrond-kopieren.png)

**Zorg er dan voor dat de vulling de kleur rood heeft (of een andere kleur als je dat mooier vindt) en klik dan op de T om een tekst te kunnen maken. Maak dan de tekst “END OF THE GAME   GAME OVER” . Dus Desert2 gebruiken we om als achtergrond te dienen als het spel is afgelopen.**

![](/uploads/end-of-the-game.png)

De **witte achtergrond heb je niet meer nodig en die kun je rustig verwijderen als je dat wilt.**

**Vanuit de achtergrond klik je nu op het tabblad “Code”.** \
**Je komt dan in het script veld van de achtergrond.**

**Sleep het blokje: “_Als er op de groene vlag wordt geklikt_” uit gebeurtenissen, naar het scriptveld. Sleep het blokje “_verander achtergrond naar Desert2_” uit “uiterlijken” naar dit script veld en plak dit blokje aan het blokje “Als er op de groene vlag wordt geklikt”. Klik op het driehoekje achter het woord “Desert2” en kies dan voor “Desert”. (Als “Desert” daar al staat kun je dat natuurlijk gewoon laten staan.**



**Bij de Crab moeten we ook het script nu wat aanpassen.** \
**Klik op de sprite “Crab” (rechts onderaan) en het script veld van de Crab verschijnt.** 

**Neem een blokje “_Als…dan_” uit “besturen” en plaats dat onderaan binnen het herhaal blok. (Dit wordt nu de 3e Als...dan  constructie binnen dit herhaal blok.)** 

**Neem nu het blokje “_0 = 50_** **“ uit “Functies” en plaats dit blokje op de plek tussen de woorden “Als” en “dan” . Plaats op de O de variabele “levens” en maak van 50: 0. Er staat dan in die regel: “**Als levens = 0 dan**” .**

**Neem nu het blokje “_verander achtergrond naar desert2_” uit “uiterlijken” en plaats dat in de lege regel in dat “Als…dan” blok.** 

**Het script van de crab ziet er nu zo uit:**

![](/uploads/script-voor-crab.png)
