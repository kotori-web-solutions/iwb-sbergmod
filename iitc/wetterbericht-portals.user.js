// ==UserScript==
// @id             iitc-plugin-iwb-sbergmod-portals@maruschka forked from iitc-plugin-wetterbericht-portals@dazz
// @name           iitc: wetterbericht-portals
// @version        0.1
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      https://github.com/kotori-web-solutions/iwb-sbergmod/raw/master/iitc/wetterbericht-portals.user.js
// @downloadURL    https://github.com/kotori-web-solutions/iwb-sbergmod/raw/master/iitc/wetterbericht-portals.user.js
// @description    wetterbericht-portals
// @include        *://www.ingress.com/intel*
// @match          *://www.ingress.com/intel*
// ==/UserScript==

function wrapper() { 
  // ensure plugin framework is there, even if iitc is not yet loaded
  if(typeof window.plugin !== 'function') window.plugin = function() {};


  // PLUGIN START ////////////////////////////////////////////////////////
  // use own namespace for plugin
  // wetterberichtportals can be multiple city files so let's prepare
  if(typeof window.plugin.wetterberichtportals !== 'function') {
    window.plugin.wetterberichtportals = function() {};
    window.plugin.wetterberichtportals.city = function() {};
  }

  // city start: BERLIN
  window.plugin.wetterberichtportals.city.berlin = function() {
    return {
      'areas': [ // select area(s) you want to see
        'GM', 'LG', 'NNG', 'TP', 'VPS', 'AVK'
      ],
      'GM': {
        'portals': [
          'ebdb40377ce84c4abd15c8ec25588cdb.12', // Französischer Dom - Statue
          'c5607f1ae88249aa9b8993f28e60770a.12', // Berlin
          '6c0431949e7443f9912ab48fd74cf843.12', // Berlin  , Alemania / Germany /
          'b465fa16e866480693bf9510787351d3.12', // Gendarmenmarkt
          '6dcb0eb304104cf6a713865a60800e5f.12', // Franzoesischer Dom Bronze Loew
          '517101d0cab04bcf94bb27e8d4bca0fb.12', // Gendarmenmarkt - Berlin
          '651a3fed64904ac29ee827a30fa52a8e.12', // Ein mahnender Blick
          '69e8edd045484ed289320310dd4bb637.12', // Französischer Dom met Konzerth
          'f711a8a3f6c9441fb22b540d6e65f891.12', // Konzerthaus Franzoesischer Dom
          '934051d8bdf440a4a6938c8f4a37b02f.12', // Konzerthaus Franzoesischer Dom
        ]
      },
      'TP': {
        'portals': [
          '866d70e70e4843f8a1d7ad4fcb5b2302.12', // Sowjetisches Ehrenmal - Trepto
          '5fe4d15fb2bc44cfbe1a5471eab1c885.12', // Soviet War Memorial, Treptower
          '1a80b7641e39408e8f54d6d7eace4894.12', // Sowjetisches Ehrenmall
          '99c13c4b32c94df696cc83dc2e1058f7.12', // Sowjetisches Ehrenmall
          '1f7ff3555db74af6a35b69f9d03c5ec9.12', // Sowjetisches Ehrenmall
          '53a14d00adfd4a6bbe939895cc7bf9fe.12', // Берлин. Трептов-парк. 04.2012.
          '4cd2eee6f5b14a1d80a56402f7a789c8.12', // Sowjetisches Ehrenmall
          '8ec098b330dc4b50ba39ed06c37e1206.12', // Sowjetisches Ehrenmal - Trepto
          'f35e1b84ae734fed8eaa80694027c184.12', // Soviet War Memorial, Treptower
          '3b8c79dc8a084f41a8f27e5c5c451db7.12', // Soviet War Memorial, Treptower
        ]
      },
      'NNG': {
        'portals': [
          'fb485d2af0b54d6db636b0d30718a058.12', // Pferdekopf (Horsehead) by Hans
          '8c3d0917e2e34ee98660e4b37fb97ac4.12', // De San Martin
          'bcf752a3f3384da183d854a734a29685.12', // Berlin - St. Matthäuskirche
          'd02674ef8b2c47589605f46443c00876.12', // Têtes et Queue by Alexander Ca
          '26824e3f518a45b3a9c8d10d8ede43df.12', // Broken Obelisk by Barnett Newm
          '33fcbd09613145eea39b139179cef2e4.12', // Die Goldene Philharmonie...
          '21740b573dc448598f677a09d250500a.12', // Echo II by Bernhard Heiliger
          'c335a177385941019f55a532e4e102bc.12', // Matthäikirche...
          'b9554c9256094330ae36e8e4ad239594.12', // Berlin - Skulptur
          'ad38e18304c64f6ea61a8344dd7502c2.12', // St. Matthäuskirche seen from t
          '1191237191bd4cf39332cbba18c2b0ab.12', // Echo I by Bernhard Heiliger
          'a6fe290608de4da8ad60874c6f486ada.12', // Matthaïkirche
          '9d8af48751ca4f4e86eb426cb12547a2.12', // Broken Obelisk - Barnett Newma
          'e4e0060f11fc4066b73fe66db6b4783f.12', // Polis by Joannis Avramidis
          'ae1455a1d65746a2acc88ffd92b24a7c.12', // Aktion T4 memorial for the vic
          'b54ed6376f994c11b99a84e4de242e34.12', // New houses, Potsdammer Platz
          '78d18d0e944248e297e6115a8dab0017.12', // Berlin
          '8e1cbe818978493f804af7b787d35d2f.12', // Berlin Junction by Richard Ser
          '12d092049ef44c708f24e2cf67fc3ea0.12', // Potzdamer Platz
          '56cfb1d2cc594128b4a4415c0839bf23.12', // Berlin - Daimler Quartier (3)
          'ca27cef33ab84940a7b29349f074e708.12', // Sculpture Galileo by Mark di S
          '13816c41aa82487da49f9d226df0948e.12', // Sculpture Gelandet by Auke de
          '1e2a74ae3d7148718cb584819f26e0fe.12', // Haus Huth & sculpture Riding B
          '9d2f17b28be74f4d8f5cac1c950f1c20.12', // Galileo Skulptur am Theaterufe
          'a1a9004ac8a14b9e95fab1fdf135728a.12', // Potsdamer Platz  Lego
          'de9ef544d6524d50b24a3147f92a3ac8.12', // Potsdamer Platz - Station Metr
          'ab459f6c9c204a02956e257da221e89d.12', // Berlin
          '3dc2b08dbc1d45b3933ce1927a389a51.12', // Old in New, My Vision in the S
          '9fbed651ba5744709a331de700f82a68.12', // Berlin - Dachkonstruktion des
          '603ad31bbac44bac92363c8eb2281b66.12', // Bahntower
          '6946629834f34ea3b56235eeb9a39fa1.12', // Sony Center
          '4943d3b8690e41379a526e06873ebb13.12', // Sony Center
          '700d6cf96ba54aeca7b8528a7af38938.12', // Berlin, Potsdammmer Platz
          'b4dbbee2c9154dbe89734b2291722c2d.12', // Berlin, the view
          'dce4e070447b447dbff540d5cbfdaea3.12', // sony center
          '44c7aef460d845569e706e3737f3964e.12', // Sony Center by night
          '56701babf1af47549166740eb3136139.12', // Lego giraffe, Legoland Discove
          '62ceda9b36a44141a639b0473e1f1224.12', // 2010.12.04 - remnants of the B
          'd8b5a737f2c44b6e88ee8604010ac2d1.12', // Berlin - Potsdamer Platz - Ein
          'ad5058a65553454aa691f001cd89de03.12', // Berlin - Inge-Beisheim Square
          '8c0162a3f7964be0ae0f81946c637714.12', // Have a seat !
          '55e10ae4fc234f5495ecf157042e9d3d.12', // Berlin - Potsdamer Platz - Ein
        ]
      },
      'LG': {
        'portals': [
          'c83b9f052f294351b031c596181be1dd.12', // Über die Schulter geschaut
          '5fdbab053aab4153a87dd3ce6ecf4281.12', // BATHER IN SPREE RIVER  (GERMAN
          '31972b5813c74e42bd5adff7889a6027.12', // Statues on River Spree Bank, B
          '2100908778654e09999748ca985f97d6.12', // Berlin    -Kämpfende Amazone a
          'e064cabb312645b790390ce55115c07d.12', // Drei Mädchen und ein Knabe
          'cb09f7c9cc98457f9be7e1554a20bab5.12', // Der Speer
          '9e1365f27d4e40c586f6ee23d4f19e58.12', // Isla de los Museos  - BERLIN ,
          'fb2d17f5593146f4ac3ea207bb3fcabe.12', // The Berliner Dom
          '9e3fc6efabd44bdab82315b8a80f3a5d.11', // statue of a marble woman
          '58e536f9d12047c0b4ea43d7922af46a.11', // Berlinner Dom
          '97a074b12f334cada6390ad9b2d81480.12', // Blick vom Dom zum Fernsehturm
          '94e799e32a414ddaae6f2c6872d58132.12', // Berlin
          'c1d3ee5ffc5c46bc812f3a0ddd954d12.12', // Berlin - Friedrichswerdersche
          '233e35b4057d438b927ab573f1199dc7.12', // The Old Museum
          '505e13ef67e044e2a914d2b4792cd3c6.12', // Fighting Amazon by August Kiss
          'ff4c0140667a46e2b2e084fe7546073a.12', // Statue at Altes Museum
          '39c7d2b3b5bc4bb29af438f6f9fb0301.12', // Attaque sur la Fernsehturm
          'e3b469b0139c49acbb9aa29f85533ef9.12', // Berlin
          'b33cb388f2634e459d373868075071de.12', // Gallienus, altes museum
          '7194a6fcb5134e7ebc8930d4c9379a79.12', // Horse Tamer by Christian Fried
          'f408eb2df7614728aadf72f172d47c78.12', // Schlossbrücke: Nike und der Kr
          '24471619448743b4ac75ac0a7098a620.12', // Bridge near German Historical
          '131df4fc4bba4883a9dbff3ecac55c11.12', // Berlin .- Alemania / Germany /
          'bf569a42f8394025a60cf8bb63c80c1e.12', // [Untitled]
          '03a32630fc3449959c84bbcdb7db3c52.12', // Bogenspannerin
          '4ab19f893d384fcfa7a3061b0dfacf89.12', // [Untitled]
          'c2718c7ce2774d1f98eeefa7a71c317c.12', // Pegasus von der Muse gelabt by
          '660b0c355f9649c781d6cc9cd8a3ec8f.11', // Humboldt Box
          '8c02734b2b014b07b33c4cf4b7b34c56.12', // Pegasus von der Grazie gebändi
          '492ae41fa0ea409ea06165e0fc388a46.12', // Alte Nationalgalerie
          '5e331bf2e5a44e44b2999f9c1db346c3.12', // Löwe (Lion) by August Gaul, Ko
          'e0ae87c10fc4410aadbe0a6e93c08167.12', // Neues Museum
          '5a7f484b9c934b67b257dccbf497ad20.12', // Amazing Amazon II
          '61965d06a95e45fa895f271e22e54f34.12', // In den Lüften
          'c24fa04860594d2bbba8aaae0800fe45.12', // Alte Nationalgalerie, Berlin,
          '4af172b1190e4daaad933e94a5b4e8db.12', // Altar de Pergamo
          'edb86f61a05a4fc6a85022883e5ac335.12', // Isla de los Museos, BERLIN , A
          'feaafea3fc7a443d85a038a6e52c3767.12', // Pergamon Museum Berlin - Perga
          'fa1cd646bc134e178d8d92e3f8516897.12', // Scholle auf dem Trockenen (Pla
          'e5c81e92e08e4b3bb5cf33eac4ca9a0e.12', // Fernsehturm, Berlin, Deutschla
          'bf41cd7aae37416a9a2bdf46b44d7394.12', // Neues Museum, Berlin, Deutschl
          '49cbfcddbbe64c7ab2d3c5f5ab9e420c.12', // Gerettet (Rescued) by Adolf Br
          '02fc08483008435f84aceabd3fbc6042.12', // Alte nationalgalerie de Berlin
          'edb488dee9884e5fbb5f682868e9d054.12', // Centaur and Nymph by Reinhold
        ]
      },
      'VPS': {
        'portals': [
          '9551f8376dfc49d6898345735d1d929c.11', // FridericusRex
          'c09fbb772c2a4b5985d28066b88491d5.12', // Märchenbrunnen im Volkspark Fr
          '85957cbaf30349998636e6ef60dac45d.12', // Brüderchen und Schwesterchen -
          'fb2e2d78aaf74615a292166b322d13cb.12', // Gedenkstatte der Deutschen Int
          'cd5dde3654694fca99c278b2a33f78b3.12', // Aschenputtel - Märchenbrunnen
          'd7b2f7e2d16d4deb9ce58cc991621315.11', // Pavillon
          'ed32e054cbd64a2794ac0ae950adeebe.11', // Steinmann
          '2df7589c11524e879b5f03ba98bc359c.11', // nakedwitch
          '796704ef6fff40e9abcb4adee9b19932.11', // Steinrobbe
          '772607ecfd654a30bbe7f8503baa0dec.11', // Steinpinguin
          '675e8163cac044fc9e8450178cc5d829.11', // Deutsch Polnisches Denkmal
          'c6592dd52f7a476587b07a2452d11b78.11', // Japanische Glocke
          '65b2f1c2b59f4ef4aeb565f796453273.11', // Base Station
          '26e0183afd43401ba0a157b92b582e14.11', // SEZ Berlin
        ]
      },
      'AVK': {
        'portals': [
          '02be108a638c4fe0bc20d4192c938428.11', // Auguste Viktoria Klinik
          '03f38223d20d4b029e70799e74eb4e34.11', // avk kunst
          '0a07f293cabc4eeda993d58b732c76c3.16', // Steinturm
          '1d503a28e841417f87477299a2f7df21.11', // Bauarbeiter im AVK
          '2412b67a6fd24aa2ab53234fc1696dd3.11', // 4 kömpfe hinter glas vol.1
          '5fec30f11c244a64a7578c257d867b6e.11', // Mann Mit Koffer
          '673d60d9010c4fedaa0897c4c267a709.16', // Ancient Pillars
          '6dd5a381c95644e9bfb6f407811b3b8b.11', // AVK Elefant
          '6fac895bd55e49cc948fef5351e7169d.11', // Taschenpyramide
          '851490eb1f974cfca9650c9b739416aa.11', // Kunst des Vivantes
          '93257a77bfb142b4b81a296352b524d2.11', // Thüster Nautiliden
          '9993563ede9845168a82bf01a1df5718.11', // Menschen und Gepäck
          'acb70f415f2348b58b3484a85560dcdd.11', // Rotation Sculpture
          'b4ac0a2e705e4a2c831a876ba16c33de.11', // Mädchen von Yukatan
          'c86bd275e0fe4d2ba23b56baa53756d5.11', // Berlin Bear
          'dd4689f6d9624055bce2f17d8c1483b4.11', // Vier Heilige Schwestern
          'de4da1476c7c4731a4c58a06f27e6f11.11', // Man Without Legs
        ]
      }
//      '': {
//        'portals': [
//
//        ]
//      },
    };
  };
  var setup = function(){};
  // PLUGIN END //////////////////////////////////////////////////////////

  if(window.iitcLoaded && typeof setup === 'function') {
    setup();
  } else {
    if(window.bootPlugins)
      window.bootPlugins.push(setup);
    else
      window.bootPlugins = [setup];
  }
} // wrapper end
// inject code into site context
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ wrapper +')();'));
(document.body || document.head || document.documentElement).appendChild(script);
