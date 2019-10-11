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
