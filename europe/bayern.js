const beerBayern = [
    // Paulaner
    {name: 'Paulaner', brewery: 'Paulaner', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Paulaner/Paulaner_1.png'},
    {name: 'Paulaner', brewery: 'Paulaner', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Paulaner/Paulaner_2.png'},
    {name: 'Paulaner', brewery: 'Paulaner', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Paulaner/Paulaner_3.png'},
    {name: 'Paulaner', brewery: 'Paulaner', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Paulaner/Paulaner_4.png'},
    {
        name: 'Paulaner </br> Original Münchner Hell',
        brewery: 'Paulaner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Paulaner/Paulaner_Hell.png'
    },
    // Augustiner
    {
        name: 'Münchner Bier </br> 500 Jahre',
        brewery: 'Augustiner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Augustiner/Augustiner_500.png'
    },
    {
        name: 'Münchner Bier </br> 525 Jahre',
        brewery: 'Augustiner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Augustiner/Augustiner_525.png'
    },
    // Löwenbräu
    {name: 'Löwenbräu', brewery: 'Löwenbräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Lowenbrau/Lowenbrau.png'},
    {
        name: 'Löwenbräu </br> Alkoholfrei',
        brewery: 'Löwenbräu',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Lowenbrau/Lowenbrau_Alkoholfrei.png'
    },
    // Weihenstephaner
    {
        name: 'Weihenstephaner </br> Kellerbier',
        brewery: 'Weihenstephaner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Weihenstephaner/Weihenstephaner_Kellerbier.png'
    },
    {
        name: 'Weihenstephaner </br> Hefeweissbier',
        brewery: 'Weihenstephaner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Weihenstephaner/Weihenstephaner_Hefeweissbier.png'
    },
    // Hofbräuhaus
    {name: 'HB Hofbräu', brewery: 'Hofbräuhaus', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/HB/HB_1.png'},
    {name: 'HB Hofbräu </br> Oktoberfestbier', brewery: 'Hofbräuhaus', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/HB/HB_2.png'},
    //Hacker Pschorr
    {name: 'Hacker Pschorr', brewery: 'Hacker Pschorr', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/HackerPschorr/Hacker_Pschorr.png'},
    // Spaten
    {name: 'Spaten', brewery: 'Spaten', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Spaten/Spaten.png'},
    // Franziskaner
    {
        name: 'Franziskaner </br> Weissbier',
        brewery: 'Franziskaner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Franziskaner/Franziskaner_Weissbier_1.png'
    },
    {
        name: 'Franziskaner </br> Weissbier',
        brewery: 'Franziskaner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Franziskaner/Franziskaner_Weissbier_2.png'
    },
    {
        name: 'Franziskaner </br> Weissbier',
        brewery: 'Franziskaner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Franziskaner/Franziskaner_Weissbier_3.png'
    },
    {
        name: 'Franziskaner </br> Kellerbier',
        brewery: 'Franziskaner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Franziskaner/Franziskaner_Kellerbier.png'
    },
    {
        name: 'Franziskaner </br> Premium Weissbier',
        brewery: 'Franziskaner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Franziskaner/Franziskaner_Premium_Weissbier.png'
    },
    {
        name: 'Franziskaner </br> Alkoholfrei Zitrone',
        brewery: 'Franziskaner',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Franziskaner/Franziskaner_Alkoholfrei_Zitrone.png'
    },
    // Erdinger
    {
        name: 'Erdinger </br> Weissbier',
        brewery: 'Erdinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Erdinger/Erdinger_Weissbier_1.png'
    },
    {
        name: 'Erdinger </br> Weissbier',
        brewery: 'Erdinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Erdinger/Erdinger_Weissbier_2.png'
    },
    {
        name: 'Erdinger </br> Weissbier Dunkel',
        brewery: 'Erdinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Erdinger/Erdinger_Weissbier_Dunkel.png'
    },
    {
        name: 'Erdinger </br> Urweisse',
        brewery: 'Erdinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Erdinger/Erdinger_Urweisse.png'
    },
    {
        name: 'Erdinger </br> Schneeweisse',
        brewery: 'Erdinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Erdinger/Erdinger_Schneeweisse.png'
    },
    {
        name: 'Erdinger </br> Kristall',
        brewery: 'Erdinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Erdinger/Erdinger_Kristall.png'
    },
    {name: 'Erdinger </br> Dunkel', brewery: 'Erdinger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Erdinger/Erdinger_Dunkel_1.png'},
    {name: 'Erdinger </br> Dunkel', brewery: 'Erdinger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Erdinger/Erdinger_Dunkel_2.png'},
    {
        name: 'Erdinger </br> Pikantus',
        brewery: 'Erdinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Erdinger/Erdinger_Pikantus.png'
    },
    {
        name: 'Erdinger </br> Weizen Bock',
        brewery: 'Erdinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Erdinger/Erdinger_Weizenbock.png'
    },
    {
        name: 'Erdinger </br> Brauhaus Helles',
        brewery: 'Erdinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Erdinger/Erdinger_Helles.png'
    },
    // Giesinger
    {
        name: 'Giesinger </br> Untergiesinger Erhellung',
        brewery: 'Giesinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Giesinger/Giesinger_Untergiesinger_Erhellung_1.png'
    },
    {
        name: 'Giesinger </br> Weißbier',
        brewery: 'Giesinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Giesinger/Giesinger_Weissbier.png'
    },
    {
        name: 'Giesinger </br> Feines Pilschen',
        brewery: 'Giesinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Giesinger/Giesinger_Feines_Pilschen.png'
    },
    {
        name: 'Giesinger </br> Märzen',
        brewery: 'Giesinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Giesinger/Giesinger_Maerzen.png'
    },
    {
        name: 'Giesinger </br> Innovator',
        brewery: 'Giesinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Giesinger/Giesinger_Innovator.png'
    },
    {
        name: 'Giesinger </br> Dunkles Vollbier',
        brewery: 'Giesinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Giesinger/Giesinger_Dunkles_Vollbier.png'
    },
    {
        name: 'Giesinger </br> Untergiesinger Erhellung',
        brewery: 'Giesinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Giesinger/Giesinger_Untergiesinger_Erhellung_2.png'
    },
    {
        name: 'Giesinger </br> Sternhagel',
        brewery: 'Giesinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Giesinger/Giesinger_Sternhagel.png'
    },
    {
        name: 'Giesinger </br> Radler',
        brewery: 'Giesinger',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/Giesinger/Giesinger_Radler.png'
    },
    // Schneider Weisse
    {
        name: 'Schneider Weisse </br> Meine Blonde Weisse',
        brewery: 'Schneider Weisse',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/SchneiderWeisse/Schneider_Weisse_1_Meine.png'
    },
    {
        name: 'Schneider Weisse </br> Mein Alkoholfrei',
        brewery: 'Schneider Weisse',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/SchneiderWeisse/Schneider_Weisse_3_Mein.png'
    },
    {
        name: 'Schneider Weisse </br> Mein Grunes',
        brewery: 'Schneider Weisse',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/SchneiderWeisse/Schneider_Weisse_4.png'
    },
    {
        name: 'Schneider Weisse </br> Mein Aventinus',
        brewery: 'Schneider Weisse',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/SchneiderWeisse/Schneider_Weisse_6_Mein.png'
    },
    {
        name: 'Schneider Weisse </br> Mein Original',
        brewery: 'Schneider Weisse',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/SchneiderWeisse/Schneider_Weisse_7_Mein.png'
    },
    {
        name: 'Schneider Weisse </br> Unser Original',
        brewery: 'Schneider Weisse',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/SchneiderWeisse/Schneider_Weisse_7_Unser.png'
    },
    {
        name: 'Schneider </br> Meine Leichte Weisse',
        brewery: 'Schneider Weisse',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/SchneiderWeisse/Schneider_Weisse_11_Meine.png'
    },
    {
        name: 'Schneider </br> Unsere Leichte Weisse',
        brewery: 'Schneider Weisse',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/SchneiderWeisse/Schneider_Weisse_11_Unsere.png'
    },
    {
        name: 'Schneider Weisse </br> Original',
        brewery: 'Schneider Weisse',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/SchneiderWeisse/Schneider_Weisse_Original.png'
    },
    // Hopf
    {name: 'Hopf </br> Helle Weisse', brewery: 'Hopf', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Hopf/Hopf_Helle_Weisse.png'},
    {name: 'Hopf </br> Dunkle Weisse', brewery: 'Hopf', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Hopf/Hopf_Dunkle_Weisse.png'},
    {name: 'Hopf </br> Eisweissbier White', brewery: 'Hopf', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Hopf/Hopf_Eisweissbier_White.png'},
    {name: 'Hopf </br> Russ\'n-Halbe', brewery: 'Hopf', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Hopf/Hopf_Russn_Halbe.png'},
    {name: 'Hopf </br> Die Leichtere', brewery: 'Hopf', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Hopf/Hopf_Die_Leichtere.png'},
    {name: 'Hopf </br> Die Alkoholfreie', brewery: 'Hopf', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Hopf/Hopf_Die_Alkoholfreie.png'},
    {name: 'Unertl </br> Weißbier', brewery: 'Unertl Weißbier', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Unertl/Unertl_Weissbier.png'},
    {name: 'Unertl </br> Leichte Weisse', brewery: 'Unertl Weißbier', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Unertl/Unertl_Leichte_Weisse.png'},
    {name: 'Steiner', brewery: 'Steiner', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Steiner/Steiner.png'},
    {name: 'Steiner </br> Natur Radler', brewery: 'Steiner', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Steiner/Steiner_Natur_Radler.png'},
    {name: 'Flötzinger Bräu', brewery: 'Flötzinger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Floetzinger/Floetzinger.png'},
    {name: 'Flötzinger Bräu 2015', brewery: 'Flötzinger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Floetzinger/Floetzinger_2015.png'},
    {name: 'Unertl </br> Weißbier', brewery: 'Weißbräu Unertl Mühldorf', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Others/Unertl_Weissbier.png'},
    {name: 'Störchle', brewery: 'Störchle', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Stoerchle/Stoerchle.png'},
    {name: 'Schwarz Störchle', brewery: 'Störchle', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Stoerchle/Schwarz_Stoerchle.png'},
    {name: 'Andechser </br> Hell', brewery: 'Andechs', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Andechs/Andechser_Hell.png'},
    {name: 'Andechs </br> Dunkel', brewery: 'Andechs', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Andechs/Andechs_Dunkel.png'},
    {name: 'Kaltenberg', brewery: 'Kaltenberg', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Kaltenberg/Kaltenberg_1.png'},
    {name: 'Kaltenberg', brewery: 'Kaltenberg', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Kaltenberg/Kaltenberg_2.png'},
    {name: 'Kaltenberg', brewery: 'Kaltenberg', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Kaltenberg/Kaltenberg_3.png'},
    {name: 'Ayinger </br> Bräuweisse', brewery: 'Ayinger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Ayinger/Ayinger_Brauweisse.png'},
    {name: 'Ayinger </br> Weizen Beer Star', brewery: 'Ayinger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Ayinger/Ayinger_Weizen_Beer_Star.png'},
    {name: 'Ayinger </br> Öko-Test', brewery: 'Ayinger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Ayinger/Ayinger_Oko_Test.png'},
    {name: 'Hasen Bräu', brewery: 'Hasen Bräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/HasenBrau/HasenBrau_1.png'},
    {name: 'Hasen Bräu', brewery: 'Hasen Bräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/HasenBrau_HasenBrau_2.png'},
    {name: 'Huber Weisses', brewery: 'Gräfliches Hofbrauhaus Freising', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Others/Huber_Weisses.png'},
    {name: 'Maisel\'s Weisse', brewery: 'Maisel\'s', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Others/Maisels_Weisse.png'},
    {name: 'Meckatzer', brewery: 'Meckatzer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Others/Meckatzer.png'},
    {name: 'Graf Arco </br> Weisse', brewery: 'Graf Arco', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/GrafArco/Graf_Arco_Weisse.png'},
    {name: 'Graf Arco', brewery: 'Graf Arco', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/GrafArco/Graf_Arco.png'},
    {name: 'GAB </br> Mia san Bia', brewery: 'Graf Arco', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/GrafArco/GAB_Mia_san_Bia.png'},
    {name: 'Maxl Helles', brewery: 'Maxl', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Others/Maxl_Helles.png'},
    {name: 'Mittenwalder', brewery: 'Mittenwalder', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/Others/Mittenwalder.png'},
    {name: 'Wildbräu', brewery: 'Wildbräu Grafing', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/84.png'},
    {name: 'Schweiger', brewery: 'Schweiger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/85.png'},
    {name: 'Auer Bräu', brewery: 'Auer Bräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/86.png'},
    {name: 'Maisacher', brewery: 'Brauerei Maisach', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/87.png'},
    {name: 'Kaufbeuren ABK', brewery: 'Kaufbeuren', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/88.png'},
    {name: 'Schonramer', brewery: 'Schonramer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/89.png'},
    {name: 'Maxlrainer', brewery: 'Maxlrainer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/90.png'},
    {name: 'Ustersbacher', brewery: 'Ustersbacher', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/91.png'},
    {name: 'Maisel\'s </br> Edelhopfen', brewery: 'Brauerei Gebrüder Maisel', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/92.png'},
    {name: 'Karg Weissbier', brewery: 'Karg', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/93.png'},
    {name: 'Tegernseer', brewery: 'Tegernseer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/94.png'},
    {name: 'Chiemseer', brewery: 'Chiemseer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/95.png'},
    {name: 'Zötler Bier', brewery: 'Zötler', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/96.png'},
    {name: 'Weltenburger', brewery: 'Weltenburger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/97.png'},
    {name: 'Kuchlbauer', brewery: 'Kuchlbauer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/98.png'},
    {name: 'Neumarkter Lammsbräu', brewery: 'Neumarkter Lammsbräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/99.png'},
    {name: 'Neumarkter Lammsbräu', brewery: 'Neumarkter Lammsbräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/100.png'},
    {
        name: 'Neumarkter Lammsbräu </br> ZZZisch',
        brewery: 'Neumarkter Lammsbräu',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/101.png'
    },
    {
        name: 'Neumarkter Lammsbräu </br> Glutenfrei',
        brewery: 'Neumarkter Lammsbräu',
        country: 'Bayern',
        continent: 'Europe',
        image: 'img/Bayern/102.png'
    },
    {name: 'Steinie Original', brewery: 'Steinie', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/103.png'},
    {name: 'Steinie Natur Radler', brewery: 'Steinie', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/104.png'},
    {name: 'Herrngiersdorfer', brewery: 'Herrngiersdorfer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/105.png'},
    {name: 'Kloster Scheyern', brewery: 'Kloster Scheyern', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/106.png'},
    {name: 'Bayreuther Hell', brewery: 'Bayreuther', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/107.png'},
    {name: 'Bayreuther Bio-Weisse', brewery: 'Bayreuther', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/108.png'},
    {name: 'Au-Hallertau', brewery: 'Au-Hallertau', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/109.png'},
    {name: 'Stiftungs Bräu', brewery: 'Stiftungs Bräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/110.png'},
    {name: 'Gutmann', brewery: 'Gutmann', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/111.png'},
    {name: 'Hacklberg Urhell', brewery: 'Hacklberg Passau', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/112.png'},
    {name: 'Hacklberg Radler', brewery: 'Hacklberg Passau', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/113.png'},
    {name: 'Starnberger', brewery: 'Starnberger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/114.png'},
    {name: 'Hoppebräu', brewery: 'Hoppebräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/115.png'},
    {name: 'Tilmans Das Helle', brewery: 'Tilmans Biere', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/116.png'},
    {name: 'Wildbräu Meistersud', brewery: 'Wildbräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/117.png'},
    {name: 'Fürst Wallerstein', brewery: 'Fürst Wallerstein', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/118.png'},
    {name: 'Hanscraft </br> Bayrisch Nizza', brewery: 'Hanscraft', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/119.png'},
    {name: 'Allgäuer Brauhaus', brewery: 'Allgäuer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/120.png'},
    {name: 'Der Hirschbräu', brewery: 'Der Hirschbräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/121.png'},
    {name: 'Aldersbacher', brewery: 'Aldersbacher', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/122.png'},
    {name: 'Löwenpils', brewery: 'Löwenpils', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/123.png'},
    {name: 'Löwenbrauerei Passau', brewery: 'Löwenbrauerei Passau', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/124.png'},
    {name: 'Stockbauer Weisse Original', brewery: 'Stockbauer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/125.png'},
    {name: 'Kronburger', brewery: 'Kronburger', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/126.png'},
    {name: 'Thurn Und Taxis', brewery: 'Thurn Und Taxis', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/127.png'},
    {name: 'Arcobräu Mooser Liesl', brewery: 'Arcobräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/128.png'},
    {name: 'Stöttner Neues Helles', brewery: 'Stöttner', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/129.png'},
    {name: 'Irseer Klosterlich Handwerklich', brewery: 'Irseer Klosterbrauerei', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/130.png'},
    {name: 'Schlenkerla Rauchbier', brewery: 'Aecht Schlenkerla', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/131.png'},
    {name: 'Schwarzbräu', brewery: 'Schwarzbräu', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/132.png'},
    {name: 'Wolferstetter', brewery: 'Wolferstetter', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/133.png'},
    {name: 'Mikes Wanderlust', brewery: 'Mikes Wanderlust', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/134.png'},
    {name: 'Bayerisches Bier', brewery: 'Bayerisches Bier', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/135.png'},
    {name: 'Zirndorfer Landbier', brewery: 'Zirndorfer', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/136.png'},
    {name: 'Kulmbacher', brewery: 'Kulmbacher', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/137.png'},
    {name: 'Jacob', brewery: 'Jacob', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/138.png'},
    {name: 'Himburgs Laguna IPA', brewery: 'Himburgs', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/139.png'},
    {name: 'Riegele', brewery: 'Riegele', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/140.png'},
    {name: 'Riegele', brewery: 'Riegele', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/141.png'},
    {name: 'Riegele Engerl Hell Alkoholfrei', brewery: 'Riegele', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/142.png'},
    {name: 'Hallbergmooser Handwerkshelle', brewery: 'Hallbergmooser', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/143.png'},
    {name: 'Hallbergmooser Moosweisse', brewery: 'Hallbergmooser', country: 'Bayern', continent: 'Europe', image: 'img/Bayern/144.png'},
];