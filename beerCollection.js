
const beerCollection = [
    // Europe
    ...beerAustria,
    ...beerBayern,
    ...beerBelgium,
    ...beerBulgaria,
    ...beerCzechia,
    ...beerDenmark,
    ...beerEstonia,
    ...beerHungary,
    ...beerFrance,
    ...beerGreece,
    ...beerIreland,
    ...beerItaly,
    ...beerNetherlands,
    ...beerPoland,
    ...beerPortugal,
    ...beerRomania,
    ...beerRussia,
    ...beerSpain,
    ...beerTurkiye,
    ...beerUkraine,
    ...beerUnitedKingdom,

    // Americas
    ...beerArgentina,
    ...beerAruba,
    ...beerBrazil,
    ...beerCanada,
    ...beerDominicanRepublic,
    ...beerMexico,
    ...beerPeru,
    ...beerUnitedStates,
    ...beerVenezuela,

    // region Germany
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/1.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/2.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/3.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/4.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/5.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/6.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/7.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/8.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/9.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/10.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/11.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/12.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/13.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/14.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/15.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/16.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/17.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/18.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/19.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/20.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/21.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/22.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/23.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/24.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/25.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/26.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/27.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/28.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/29.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/30.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/31.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/32.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/33.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/34.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/35.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/36.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/37.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/38.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/39.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/40.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/41.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/42.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/43.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/44.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/45.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/46.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/47.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/48.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/49.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/50.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/51.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/52.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/53.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/54.png'},
    {name: '', brewery: 'Unknown', country: 'Germany', continent: 'Europe', image: 'img/Germany/55.png'},
    // endregion

    // Asia
    // region China
    {name: 'Tsingtao </br> Premium Lager', brewery: 'Tsingtao', country: 'China', continent: 'Asia', image: 'img/China/1.png'},
    {name: 'Tsingtao </br> Premium Lager', brewery: 'Tsingtao', country: 'China', continent: 'Asia', image: 'img/China/2.png'},
    // endregion
    // region Singapore
    {name: 'Tiger Beer', brewery: 'Tiger', country: 'Singapore', continent: 'Asia', image: 'img/Singapore/1.png'},
    // endregion
    // region Indonesia
    {name: 'Bintang Pilsener', brewery: 'Bintang', country: 'Indonesia', continent: 'Asia', image: 'img/Indonesia/1.png'},
    // endregion
    // region India
    {name: 'Cobra Premium', brewery: 'Cobra', country: 'India', continent: 'Asia', image: 'img/India/1.png'},
    {name: 'Kingfisher Premium', brewery: 'Kingfisher', country: 'India', continent: 'Asia', image: 'img/India/2.png'},
    {name: 'Namaste Premium', brewery: 'Namaste', country: 'India', continent: 'Asia', image: 'img/India/3.png'},
    // endregion
    // region Japan
    {name: 'Sapporo </br> Premium Beer', brewery: 'Sapporo', country: 'Japan', continent: 'Asia', image: 'img/Japan/1.png'},
    {name: 'Kirin Ichiban', brewery: 'Kirin Ichiban', country: 'Japan', continent: 'Asia', image: 'img/Japan/2.png'},
    {name: 'Asahi </br> Super Dry', brewery: 'Asahi', country: 'Japan', continent: 'Asia', image: 'img/Japan/3.png'},
    // endregion
    // region Philippines
    {name: 'San Miguel </br> Pale Pilsen', brewery: 'San Miguel', country: 'Philippines', continent: 'Asia', image: 'img/Philippines/1.png'},
    // endregion
    // region South Korea
    {name: 'Hite Lager', brewery: 'Hite', country: 'South Korea', continent: 'Asia', image: 'img/SouthKorea/1.png'},
    // endregion
    // region Thailand
    {name: 'Chang Classic', brewery: 'Chang', country: 'Thailand', continent: 'Asia', image: 'img/Thailand/1.png'},
    {name: 'Singha', brewery: 'Singha', country: 'Thailand', continent: 'Asia', image: 'img/Thailand/2.png'},
    // endregion
    // region Vietnam
    {name: 'Saigon Export', brewery: 'Sabeco', country: 'Vietnam', continent: 'Asia', image: 'img/Vietnam/1.png'},
    // endregion

];