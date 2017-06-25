# Aquaclick

<h2>Introductie</h2>

Welkom bij Aquaclick! De vis met benen moet in dit spel drie keer aangeklikt worden, dan heeft de speler gewonnen. Na elke klik word de vis waarop je klikt sneller. Dit betekent dat het moeilijker wordt om de vis met benen aan te klikken. Daarnaast zijn er ook nog twee andere vissen in het spel, deze kunnen behoorlijk in de weg zitten, probeer deze dus te vermijden!

Hier is het spel te spelen: https://0908495.github.io/aquaclick/

<h2>Classes en instances</h2>

Ik heb verschillende classes gemaakt. Een <i>main</i> die de <i>start</i> aanroept. Deze linkt door naar de class <i>game</i> wanneer er op de knop wordt geklikt. In deze game zijn meerdere classes te zien. De <i>yellowfish</i>, <i>pufferfish</i>, <i>legfish</i>, deze drie soorten vissen overerven van hun parent, namelijk <i>fish</i>. Zodra het spel is uitgespeeld kom je bij de laatste class terecht, <i>end</i>

Ook worden er natuurlijk instances aangemaakt van de classes. Dit gebeurt in de class start. Hier wordt een instance van <i>game</i> aangemaakt. Vervolgens worden er in de game zelf meerdere instances aangemaakt. Eerst wordt er een nieuwe array gemaakt:

<i>this.fishes = new Array<Fish>();</i>

Vervolgens worden hier instances in gemaakt:

<i>this.fishes.push(new Legfish(this));</i>

<i>this.fishes.push(new Yellowfish());</i>

<i>this.fishes.push(new Pufferfish());</i>

Als laatst wordt er een instance gemaakt van het eindscherm als de vis met benen drie keer is aangeklikt.

<h2>Encapsulation</h2>

In de UML is goed te zien dat ik Encapsulation toe heb gepast in mijn game. Alle instance variabelen en functies in de parents (fish) zijn protected. Zo kunnen alleen de childs erbij. In de rest van de classes heb ik alle instance variabelen en functies private gemaakt, behalve de points in de game. Dit omdat deze benaderd moesten worden door legfish.ts.

<h2>Composition</h2>

Ook is in de UML de stukken te zien waar ik composition gebruik. Zo heeft de start een Game, heeft de game een Fish en heeft de legfish een End.

<h2>Inheritance</h2>

Als laatste puntje de inheritance. Dit is wederom terug te vinden in de UML, maar ik zal het alsnog toelichten. De Fish is de parent class van de legfish, de pufferfish en de yellowfish. Zij overerven alles van de parent, het enige wat ze niet gemeen hebben, is dat ze ook nog een aparte click functie hebben voor hun eigen speciale eigenschappen.
