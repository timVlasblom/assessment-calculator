Het eerste wat ik heb gedaan is het maken van een simpele html pagina met een paar buttons voor de getalen en de -+*/

daarna moest ik ervoor zorgen dat als je een 2 cijferig getal invulde hij de oude niet overschreef of ze bij elkaar optelde dit deed ik door ze samen te voegen als strings en vervolgens terug te converten naar ints

nu moet er een manier komen om de modifiers toe te voegen dit is een kwestie van een simpele var maken en die invullen

dan moet ik checken of er al een modifier is toegevoegd om het tweede getal te kunnen maken dit kan met een paar simpele if statements

nu de basis functies van de calculator werken moet ik een clear funtie maken voor de bovenste 3 knoppen
voor de AC reset ik gewoon de x y en modifier naar null

voor de C check ik welke variabele als laatste ingevuld is en zet ik die naar null

en voor de backspace doe ik hetzelfde als de C maar maak ik een string van de variabele en gebruik ik de .slice functie om het laatst toegevoegde getal te verwijderen

bij het testen kwam ik erachter dat als je nog geen getal had ingevuld en een -+* of / indrukte dat er een undefined kwam te staan dus dit heb ik gefixed door eerst te checken of het eerste getal is ingevuld voordat die doorgaat