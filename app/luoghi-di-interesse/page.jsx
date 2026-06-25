'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/context/LanguageContext';
import '../styles/luoghi_interesse.css';
import Breadcrumbs from '@/components/Breadcrumbs';

const places = [
  // =====================
  // POSTI DA VISITARE
  // =====================
  {
    id: 1,
    name: 'Museo Nazionale Atestino',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/museo-atestino.png',
    description: 'Il Museo Atestino si trova nel centro storico di Este, all’interno del cinquecentesco Palazzo Mocenigo. È uno dei musei archeologici più importanti del Veneto e ospita una vasta collezione di reperti risalenti all’epoca paleoveneta, romana e medievale.',
    nameEn: 'Museo Nazionale Atestino',
    descEn: 'Located in the historic center of Este, inside the 16th-century Palazzo Mocenigo, it is one of the most important archaeological museums in Veneto, housing a vast collection of artifacts from the Paleovenetian, Roman, and medieval periods.',
    phone: '+39 0429 208561',
    website: 'https://museiveneto.cultura.gov.it/musei/museo-nazionale-atestino',
    maps: 'https://maps.app.goo.gl/example',
  },
  {
    id: 2,
    name: 'Cava Bomba (Cinto Euganeo)',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/cava-bomba.png',
    description: 'Cava Bomba è un\'ex cava di calcare oggi trasformata in un affascinante museo geologico e paleontologico. Qui si possono osservare fossili, collezioni di minerali e una dettagliata narrazione della storia geologica dei Colli Euganei. ',
    nameEn: 'Cava Bomba (Cinto Euganeo)',
    descEn: 'Cava Bomba is a former limestone quarry turned into a fascinating geological and paleontological museum. Here you can observe fossils, mineral collections, and a detailed narrative of the geological history of the Euganean Hills.',
    phone: '+393513319352',
    website: 'http://museocavabomba.it/',
    maps: 'https://maps.app.goo.gl/dL3rXvwKnK7RDR2h8',
  },
  {
    id: 3,
    name: 'Castello di Valbona',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/castello-valbona.png',
    description: 'Suggestivo castello medievale ben conservato, immerso nella campagna euganea. Visitabile liberamente dall\'esterno, oggi ospita anche un ristorante e location per eventi, mantenendo intatto il fascino storico.',
    nameEn: 'Castello di Valbona',
    descEn: 'A fascinating well-preserved medieval castle immersed in the Euganean countryside. Freely visitable from the outside, today it also houses a restaurant and event venue, keeping its historical charm intact.',
    phone: '+39393 979 3497',
    website: 'https://www.castellodivalbona.eu/_it/',
    maps: 'https://maps.app.goo.gl/TBcotj9GoV2BqPBB8',
  },
  {
    id: 4,
    name: 'Castello del Catajo (Battaglia Terme)',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/castello-del-catajo.png',
    description: 'Imponente villa-fortezza costruita nel XVI secolo, con affreschi cinquecenteschi e un parco romantico. Uno dei monumenti più affascinanti del territorio, rappresenta un mix tra dimora principesca e fortezza militare.',
    nameEn: 'Castello del Catajo (Battaglia Terme)',
    descEn: 'An imposing 16th-century villa-fortress with frescoes and a romantic park. One of the most fascinating monuments in the area, it represents a mix between a princely residence and a military fortress.',
    phone: '+39349 934 7190',
    website: 'https://castellodelcatajo.it/',
    maps: 'https://share.google/zHgz4pL0iFGHEYAyA',
  },
  {
    id: 5,
    name: 'Villa dei Vescovi (Luvigliano di Torreglia)',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/villa-dei-vescovi.png',
    description: 'Residenza cinquecentesca immersa nei vigneti, gestita dal FAI. Gli affreschi e il paesaggio che si gode dalle logge rendono questa villa un\'esperienza raffinata e armoniosa con il territorio.',
    nameEn: 'Villa dei Vescovi (Luvigliano di Torreglia)',
    descEn: 'A 16th-century residence immersed in vineyards, managed by FAI. The frescoes and the landscape visible from the loggias make this villa a refined experience in harmony with the territory.',
    phone: '049 993 0473',
    website: 'https://fondoambiente.it/luoghi/villa-dei-vescovi',
    maps: 'https://share.google/A261a62uOyr6OfelK',
  },
  {
    id: 6,
    name: 'Parco Regionale dei Colli Euganei',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/parco-regionale-colli-euganei.png',
    description: 'Il Parco Regionale dei Colli Euganei è un\'area naturale protetta nel cuore del Veneto, famosa per i suoi paesaggi collinari, sentieri immersi nel verde e antiche vestigia storiche. Ideale per passeggiate, escursioni e degustazioni enogastronomiche, il parco offre un\'esperienza unica di natura e cultura.',
    nameEn: 'Euganean Hills Regional Park',
    descEn: 'A protected natural area in the heart of Veneto, famous for its hilly landscapes, nature trails, and ancient historical sites. Ideal for walks, excursions, and food and wine tastings, the park offers a unique nature and culture experience.',
    phone: '0429 632911',
    website: 'https://www.parcocollieuganei.com/',
    maps: '',
  },
  {
    id: 7,
    name: 'Terme di Abano e Montegrotto',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/terme-montegrotto.png',
    description: 'Le Terme di Abano e Montegrotto sono tra le più antiche e rinomate d\'Europa. Famosissime per le acque termali e i fanghi curativi, offrono relax, benessere e strutture moderne immerse nei Colli Euganei. Un\'oasi perfetta per rigenerarsi corpo e mente.',
    nameEn: 'Abano and Montegrotto Thermal Baths',
    descEn: 'Among the oldest and most renowned in Europe, famous for thermal waters and healing mud treatments. They offer relaxation, wellness, and modern facilities immersed in the Euganean Hills. A perfect oasis to recharge body and mind.',
    phone: '',
    website: 'https://www.visitabanomontegrotto.com/',
    maps: '',
  },
  {
    id: 8,
    name: 'Rocca di Monselice',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/rocca-monselice.png',
    description: 'Dominando la città dall\'alto, la Rocca di Monselice è un\'imponente fortificazione medievale ricca di storia e fascino. Da qui si gode di un panorama mozzafiato sui Colli Euganei e sulla pianura. Il percorso delle Sette Chiese, che parte dal centro storico, rende la visita ancora più suggestiva.',
    nameEn: 'Rocca di Monselice',
    descEn: 'Towering over the city from above, the Rocca di Monselice is an imposing medieval fortification rich in history and charm. From here you can enjoy a breathtaking view of the Euganean Hills and the plain.',
    phone: '+39 0429 72931',
    website: 'https://www.castellodimonselice.it/',
    maps: 'https://share.google/eYBjCJPSuRbewcaeN',
  },
  {
    id: 9,
    name: 'Giardino di Villa Barbarigo (Valsanzibio)',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/giardino-villa-barbarigo.png',
    description: 'Un capolavoro del barocco veneto, questo giardino storico è noto per i suoi labirinti di siepi, giochi d\'acqua, statue e fontane allegoriche. Passeggiare tra i suoi viali è come entrare in un\'opera d\'arte viva, in armonia con la natura circostante.',
    nameEn: 'Villa Barbarigo Garden (Valsanzibio)',
    descEn: 'A masterpiece of the Venetian Baroque, this historic garden is known for its hedge mazes, water features, statues, and allegorical fountains. Walking through its paths is like entering a living work of art in harmony with the surrounding nature.',
    phone: '+39 340 0825844',
    website: 'https://www.valsanzibiogiardino.com/it/',
    maps: 'https://share.google/Q0ti31CM1eWE2vF7B',
  },
  {
    id: 10,
    name: 'Arquà Petrarca',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/arqua-petrarca.png',
    description: 'Uno dei borghi più belli d\'Italia, noto per essere stato l\'ultimo rifugio del poeta Francesco Petrarca. Il paese ha un\'atmosfera senza tempo, con viuzze acciottolate, case in pietra e la casa-museo del poeta immersa nel verde dei colli.',
    nameEn: 'Arquà Petrarca',
    descEn: 'One of the most beautiful villages in Italy, known for being the last refuge of the poet Francesco Petrarca. The village has a timeless atmosphere with cobblestone streets, stone houses, and the poet’s house-museum immersed in the green hills.',
    phone: '',
    website: 'https://www.arquapetrarca.com/',
    maps: 'https://share.google/cFEUSQVWZ4cue1yRM',
  },
  {
    id: 11,
    name: 'Anello ciclabile dei Colli Euganei',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/anello-ciclabile-colli-euganei.png',
    description: 'Un percorso ciclabile panoramico di circa 64 km che gira tutto intorno al Parco Regionale. È ideale per escursionisti e cicloturisti, grazie alla sua bellezza paesaggistica e ai numerosi punti di sosta tra vigneti, borghi e siti storici.',
    nameEn: 'Euganean Hills Cycling Route',
    descEn: 'A panoramic cycling route of about 64 km that circles the entire Regional Park. Ideal for hikers and cycle tourists, with numerous stopping points among vineyards, villages, and historical sites.',
    phone: '0429/632911',
    website: 'https://www.parcocollieuganei.com/itinerari-dettaglio.php?id_iti=3709',
    maps: 'https://share.google/NwiCFzhvlrpnvernd',
  },
  {
    id: 12,
    name: 'Monastero di San Daniele (Abano Terme)',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/monastero-san-daniele.png',
    description: 'Un\'oasi di silenzio e spiritualità immersa nel verde dei Colli Euganei. Il monastero è ancora abitato dalle monache benedettine e regala una vista incantevole su tutta la vallata. Si visita solo su prenotazione, perfetto per chi cerca pace e bellezza.',
    nameEn: 'Monastery of San Daniele (Abano Terme)',
    descEn: 'An oasis of silence and spirituality immersed in the green of the Euganean Hills. The monastery is still inhabited by Benedictine nuns and offers a beautiful view over the entire valley. Visitable only by reservation.',
    phone: '+39 049 8669149',
    website: 'https://www.monasterosandaniele.it/',
    maps: 'https://maps.app.goo.gl/PKDqsq7U2QFW1CM96',
  },
  {
    id: 13,
    name: 'Eremo del Monte Rua',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/eremo-monte-rua.png',
    description: 'Situato nel cuore dei colli, è un luogo sacro e silenzioso, abitato da monaci Camaldolesi. Anche se non visitabile all\'interno, il panorama che lo circonda e il sentiero per raggiungerlo lo rendono una meta magica e fuori dal tempo.',
    nameEn: 'Hermitage of Monte Rua',
    descEn: 'Located in the heart of the hills, it is a sacred and silent place inhabited by Camaldolese monks. Although not visitable inside, the surrounding panorama and the path to reach it make it a magical and timeless destination.',
    phone: '0495211340',
    website: 'https://villaimmacolata.net/eremo.html',
    maps: 'https://maps.app.goo.gl/zo4tTxixw7RihzP17',
  },
  {
    id: 14,
    name: 'Anfiteatro del Monte Venda',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/anfiteatro-venda.png',
    description: 'Con i suoi 603 metri, è la cima più alta dei Colli Euganei. Offre numerosi sentieri per escursioni panoramiche, rifugi e i suggestivi resti del monastero degli Olivetani. Ideale per amanti del trekking e della fotografia. L\'anfiteatro ospita concerti musicali su uno sfondo panoramico mozzafiato',
    nameEn: 'Monte Venda Amphitheater',
    descEn: 'At 603 meters, it is the highest peak of the Euganean Hills. It offers numerous hiking trails, shelters, and the remains of the Olivetan monastery. The amphitheater hosts concerts with a breathtaking panoramic backdrop.',
    phone: '0429 94128',
    website: 'https://anfiteatrodelvenda.it/',
    maps: 'https://maps.app.goo.gl/smdTh9zAAGcUYqK89',
  },
  {
    id: 15,
    name: 'Santuario delle Sette Chiese (Monselice)',
    category: 'posti-da-visitare',
    image: '/imgs/luoghi-di-interesse/posti-da-visitare/santuario-delle-sette-chiese.png',
    description: 'Un cammino spirituale che collega Monselice alla Rocca attraverso sette cappelle costruite nel Seicento, replica simbolica delle basiliche romane. Una passeggiata panoramica e affascinante nella storia religiosa del Veneto.',
    nameEn: 'Sanctuary of the Seven Churches (Monselice)',
    descEn: 'A spiritual path connecting Monselice to the Rocca through seven chapels built in the 17th century, a symbolic replica of the Roman basilicas. A panoramic and fascinating walk through the religious history of Veneto.',
    phone: '+39 0429 72130',
    website: 'https://duomomonselice.com/santuario-sette-chiesette/',
    maps: 'https://maps.app.goo.gl/kEfsAY4YUYShHzLU7',
  },

  // =====================
  // CITTA
  // =====================
  {
    id: 5,
    name: 'Padova',
    category: 'citta',
    image: '/imgs/luoghi-di-interesse/citta/padova.png',
    description: 'Città d\'arte e cultura con la Cappella degli Scrovegni, Prato della Valle, Basilica del Santo e un centro storico pieno di vita.',
    nameEn: 'Padua',
    descEn: 'The capital of the province, known for its millennia-old university (the second oldest in Italy), the Scrovegni Chapel with Giotto’s frescoes, and Prato della Valle. A city of art, science, and faith.',
    phone: '',
    website: '',
    maps: '',
  },
  {
    id: 6,
    name: 'Venezia',
    category: 'citta',
    image: '/imgs/luoghi-di-interesse/citta/venezia.png',
    description: 'Un classico senza tempo. Anche solo per una gita giornaliera, offre un\'esperienza unica al mondo.',
    nameEn: 'Venice',
    descEn: 'One of the most beautiful cities in the world, built on water. Famous for St. Mark’s Square, the Rialto Bridge, the Grand Canal, and its unique atmosphere of art, history, and romance.',
    phone: '',
    website: '',
    maps: '',
  },
  {
    id: 7,
    name: 'Verona',
    category: 'citta',
    image: '/imgs/luoghi-di-interesse/citta/verona.png',
    description: 'Patrimonio UNESCO, perfetta per una giornata romantica. L\'Arena, il balcone di Giulietta, Castelvecchio...',
    nameEn: 'Verona',
    descEn: 'The city of Romeo and Juliet, with a perfectly preserved Roman amphitheater (the Arena) and a historic center declared a UNESCO World Heritage Site. A perfect mix of history, music, and romance.',
    phone: '',
    website: '',
    maps: '',
  },
  {
    id: 8,
    name: 'Vicenza',
    category: 'citta',
    image: '/imgs/luoghi-di-interesse/citta/vicenza.png',
    description: 'Patrimonio dell\'UNESCO, è famosa in tutto il mondo per le opere di Andrea Palladio.',
    nameEn: 'Vicenza',
    descEn: 'UNESCO World Heritage city, known for the works of the Renaissance architect Andrea Palladio, including the Basilica Palladiana and Villa Rotonda. An open-air museum of architecture.',
    phone: '',
    website: '',
    maps: '',
  },
  {
    id: 35,
    name: 'Este',
    category: 'citta',
    image: '/imgs/luoghi-di-interesse/citta/este.png',
    description: 'Cittadina elegante con un imponente castello carrarese, un museo archeologico di rilievo e vie del centro piene di storia e tranquillità.',
    nameEn: 'Este',
    descEn: 'A town rich in history, home to the National Atestino Museum and dominated by the Carraresi castle. Its historic center is elegant and lively, surrounded by the hills.',
    phone: '',
    website: '',
    maps: '',
  },
  {
    id: 36,
    name: 'Cittadella',
    category: 'citta',
    image: '/imgs/luoghi-di-interesse/citta/cittadella.png',
    description: 'Città murata con camminamento di ronda completamente percorribile. Affascinante per adulti e bambini.',
    nameEn: 'Cittadella',
    descEn: 'A magnificent example of a medieval walled city with its star-shaped walls still intact. The entire perimeter of the walls can be walked on foot, offering a unique view.',
    phone: '',
    website: '',
    maps: '',
  },
  {
    id: 37,
    name: 'Montagnana',
    category: 'citta',
    image: '/imgs/luoghi-di-interesse/citta/montagnana.png',
    description: 'Altro borgo murato stupendo, meno conosciuto ma ben conservato. Ottimo anche per gustare il prosciutto crudo locale.',
    nameEn: 'Montagnana',
    descEn: 'Considered one of the best-preserved medieval walled cities in Europe. Its massive brick wall enclosure, unique of its kind, and the historic center make it a hidden gem of the Veneto.',
    phone: '',
    website: '',
    maps: '',
  },

  // =====================
  // CANTINE
  // =====================
  {
    id: 9,
    name: 'Parco del Venda',
    category: 'cantine',
    image: '/imgs/luoghi-di-interesse/cantine/parco-del-venda.png',
    description: 'Azienda vitivinicola immersa nei Colli Euganei, con produzione di vini DOC e possibilità di visite guidate tra i vigneti.',
    nameEn: 'Parco del Venda',
    descEn: 'A farm immersed in the green of the Euganean Hills, producing quality wines and extra virgin olive oil. A place where the love for the land meets innovation and hospitality.',
    phone: '+39 348 4443378',
    website: 'https://www.parcodelvenda.com/',
    maps: 'https://maps.app.goo.gl/eseoGW1JQJnxabdU7',
  },
  {
    id: 10,
    name: 'Villa Sceriman',
    category: 'cantine',
    image: '/imgs/luoghi-di-interesse/cantine/villa-sceriman.png',
    description: 'Storica dimora circondata da vigneti, che produce vini pregiati dei Colli Euganei con degustazioni in un ambiente elegante.',
    nameEn: 'Villa Sceriman',
    descEn: 'Historic residence surrounded by vineyards, producing DOC wines of the Euganean Hills. An evocative location that combines winemaking tradition and architectural elegance.',
    phone: '0499940123',
    website: 'https://www.villasceriman.it/',
    maps: 'https://maps.app.goo.gl/J6DXuBHoPGRue5Xu5',
  },
  {
    id: 11,
    name: 'Azienda Agricola Salvan Vigne del Pigozzo',
    category: 'cantine',
    image: '/imgs/luoghi-di-interesse/cantine/azienda-agricola-salvan.png',
    description: 'Cantina artigianale che unisce tradizione e innovazione, producendo vini di carattere nel cuore dei Colli Euganei.',
    nameEn: 'Azienda Agricola Salvan Vigne del Pigozzo',
    descEn: 'Family-run winery dedicated to producing high-quality wines, with a strong connection to the territory and sustainability. Visits and tastings available by reservation.',
    phone: '+39 379 2927162',
    website: 'https://www.salvan.it/',
    maps: 'https://maps.app.goo.gl/M2z5FibzdcGCc5Pq8',
  },
  {
    id: 16,
    name: 'Cantina Terra Felice',
    category: 'cantine',
    image: '/imgs/luoghi-di-interesse/cantine/terra-felice.png',
    description: 'Cantina immersa nei Colli Euganei, nota per la produzione di vini biologici e per l\'accoglienza calorosa durante le degustazioni.',
    nameEn: 'Cantina Terra Felice',
    descEn: 'A winery that combines tradition and innovation, producing wines that express the unique character of the Euganean Hills terroir. Welcoming atmosphere and guided tastings of local products.',
    phone: '+39 347 7025928',
    website: 'https://www.cantinaterrafelice.it/',
    maps: 'https://maps.app.goo.gl/LpEjGJdYkpJmgv156',
  },
  {
    id: 17,
    name: 'Vignalta',
    category: 'cantine',
    image: '/imgs/luoghi-di-interesse/cantine/vignalta.png',
    description: 'Cantina storica dei Colli Euganei, rinomata per i suoi vini premiati e per le visite guidate con degustazione.',
    nameEn: 'Vignalta',
    descEn: 'One of the most renowned wineries in the Euganean Hills, founded in 1980. It produces prestigious wines with native and international grapes, boasting awards and recognitions worldwide.',
    phone: '0429 777 305',
    website: 'https://www.vignalta.it/',
    maps: 'https://maps.app.goo.gl/TYsKcTE1HZjYmztcA',
  },
  {
    id: 18,
    name: 'Ca\' Lustra Zanovello',
    category: 'cantine',
    image: '/imgs/luoghi-di-interesse/cantine/ca-lustra-zanovello.png',
    description: 'Cantina familiare che produce vini di eccellenza con metodi tradizionali, offrendo un\'esperienza autentica tra i vigneti.',
    phone: '+39 0429 94128',
    website: 'https://calustra.it/it/',
    maps: 'https://maps.app.goo.gl/ZxXrVEiXJVmvBehf8',
  },
  {
    id: 19,
    name: 'Le Volpi',
    category: 'cantine',
    image: '/imgs/luoghi-di-interesse/cantine/le-volpi.png',
    description: 'Cantina moderna che produce vini raffinati, con una filosofia attenta alla sostenibilità e alla qualità.',
    nameEn: 'Le Volpi',
    descEn: 'An artisanal winery that follows organic philosophy, cultivating native vines in full respect of the environment. Intimate tastings in a family atmosphere surrounded by nature.',
    phone: '+390429613088',
    website: 'https://www.levolpi.it/',
    maps: 'https://maps.app.goo.gl/KRVvSct7eUFM5DZ67',
  },
  {
    id: 20,
    name: 'Maeli Wine',
    category: 'cantine',
    image: '/imgs/luoghi-di-interesse/cantine/maeli-wine.png',
    description: 'Giovane cantina artigianale che produce vini naturali e biologici, con passione e rispetto per il territorio euganeo.',
    nameEn: 'Maeli Wine',
    descEn: 'A young and dynamic winery that produces fresh, modern wines with an eye on tradition. A welcoming farmhouse where you can taste wines paired with local products.',
    phone: '+39 331 3155244',
    website: 'https://maeliwine.com/',
    maps: 'https://maps.app.goo.gl/SCpUoHqbNsE5LYpH7',
  },

  // =====================
  // DOVE MANGIARE - RISTORANTI
  // =====================
  {
    id: 12,
    name: 'Tolin Macelleria e Ristorante',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/tolin-macelleria.png',
    description: 'Ristorante-macelleria di carni eccellenti, ambiente rustico-chic.',
    nameEn: 'Tolin Butcher Shop and Restaurant',
    descEn: 'A unique experience combining high-quality butchery and traditional cuisine. Meat is the absolute star, with grilled specialties and refined dishes that celebrate the flavors of the Euganean Hills.',
    phone: '+39 0429 94144',
    website: 'https://www.macelleriatolin.it/',
    maps: 'https://maps.app.goo.gl/AubRi1rR1x2mrytu5',
  },
  {
    id: 13,
    name: 'Trattoria Al Cantinon',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/trattoria-al-cantinon.png',
    description: 'Trattoria tradizionale nel borgo, cucina locale genuina.',
    nameEn: 'Trattoria Al Cantinon',
    descEn: 'A historic trattoria with a warm family atmosphere, offering authentic local cuisine. Homemade pasta, grilled meats, and traditional desserts in a rustic and welcoming setting.',
    phone: '+39 0429 94282',
    website: 'https://www.trattoriaalcantinon.com/trattoria.html',
    maps: 'https://maps.app.goo.gl/KJxneoKkU5jd4Vzw7',
  },
  {
    id: 14,
    name: 'Ristorante Al Cavallino',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/ristorante-al-cavallino.png',
    description: 'Rinomata per cucina stagionale e prodotti locali. Situata sotto i suggestivi portici di Este, ideale per gustare i sapori autentici dei Colli Euganei.',
    nameEn: 'Ristorante Al Cavallino',
    descEn: 'Elegant restaurant located in a historic building in the center of Cinto Euganeo. Refined cuisine that enhances local products, with a selection of fine wines from the Euganean Hills.',
    phone: '+39 0429 50306',
    website: '',
    maps: 'https://maps.app.goo.gl/iitB87r1rXen7WA87',
  },
  {
    id: 15,
    name: 'Agriturismo Frassine',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/agriturismo-frassine.png',
    description: 'Prestigioso per la qualità del cibo e il servizio, adatto anche per portare cani.',
    nameEn: 'Agriturismo Frassine',
    descEn: 'A farmhouse immersed in the greenery of the Euganean Hills, offering genuine zero-mile cuisine. Typical dishes prepared with ingredients from their own farm, in a rustic and relaxing atmosphere.',
    phone: '+39 347 429 3831',
    website: '',
    maps: 'https://maps.app.goo.gl/nixC8Kc9XGBXF7g46',
  },
  {
    id: 21,
    name: 'Trattoria Tre Camini',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/trattoria-tre-camini.png',
    description: 'Cucina autentica, location suggestiva e servizio caloroso la rendono una tappa imperdibile per chi cerca sapori locali e relax immersi nel verde.',
    nameEn: 'Trattoria Tre Camini',
    descEn: 'Traditional trattoria with a friendly and informal atmosphere. Known for homemade pasta, mixed grills, and local wines. A piece of authentic Euganean culinary tradition.',
    phone: '+39 345 5845677',
    website: '',
    maps: 'https://maps.app.goo.gl/H6wxMiA9TU5Mf5H17',
  },
  {
    id: 22,
    name: 'Ristorante La Torre',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/ristorante-la-torre.png',
    description: 'Eccellente per una cucina mediterranea di qualità in location panoramica accogliente.',
    nameEn: 'Ristorante La Torre',
    descEn: 'Restaurant with a panoramic view located in the heart of the historic center. Creative and refined cuisine, with dishes that reinterpret local tradition in a modern key.',
    phone: '+39 0429 73752',
    website: '',
    maps: 'https://maps.app.goo.gl/djZRDYT6GYcrrUse6',
  },
  {
    id: 23,
    name: 'Ristorante Val Pomaro',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/ristorante-val-pomaro.png',
    description: 'Salendo lungo il colle che porta all\'incantevole borgo di Arquà Petrarca, è facile raggiungere questo splendido ristorante fra il verde degli ulivi.',
    nameEn: 'Ristorante Val Pomaro',
    descEn: 'A restaurant set among the vineyards of the hills, offering a unique culinary experience paired with excellent local wines. The perfect place for a romantic dinner or a special occasion.',
    phone: '+39 320 665 0364',
    website: 'https://www.ristorantevalpomaro.it/',
    maps: 'https://maps.app.goo.gl/KzqCseQurhRjrQNc6',
  },
  {
    id: 24,
    name: 'Osteria Al Guerriero',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/osteria-al-guerriero.png',
    description: 'Ambiente familiare, menù tradizionale, ottimo per atmosfera autentica tra i borghi.',
    nameEn: 'Osteria Al Guerriero',
    descEn: 'Typical osteria where tradition meets the warmth of the welcome and genuine flavors. Simple but high-quality dishes, with cured meats, cheeses, and first courses that tell the story of the Euganean territory.',
    phone: '+39 0429 718376',
    website: 'https://www.osteriaguerriero.com/',
    maps: 'https://maps.app.goo.gl/tho1bXJws3ckw6sw9',
  },
  {
    id: 25,
    name: 'Trattoria Le Banchine',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/trattoria-le-banchine.png',
    description: 'Ristorante di cucina tipica gestito da uno staff giovane. Pasta fatta a mano, piatti veneti, dolci fatti in casa e vini dei Colli Euganei in locale sobrio con pietra e travi a vista.',
    nameEn: 'Trattoria Le Banchine',
    descEn: 'Family-run trattoria, famous for its authentic homemade cuisine. The menu changes with the seasons, always offering fresh and genuine dishes, carefully prepared with local ingredients.',
    phone: '+39 049 738 5288',
    website: 'https://www.lebanchine.it/',
    maps: 'https://maps.app.goo.gl/vxZ9HrVs8BkYUmAy7',
  },
  {
    id: 26,
    name: 'Ristorante Al Pirio',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/ristorante-al-pirio.png',
    description: 'Il ristorante AL PIRIO nei Colli Euganei offre una splendida terrazza panoramica senza paragoni. Tradizione e innovazione si sposano perfettamente.',
    nameEn: 'Ristorante Al Pirio',
    descEn: 'Elegant restaurant with a welcoming atmosphere, offering refined traditional cuisine. The dishes, prepared with local ingredients, are paired with a selection of regional wines.',
    phone: '+39 049 521 1085',
    website: 'https://alpirio.it/',
    maps: 'https://maps.app.goo.gl/V8oyS3P2dhFDsAjb8',
  },
  {
    id: 27,
    name: 'Ristorante Cencio',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/ristorante-cencio.png',
    description: 'Un ambiente rustico e accogliente immerso nel verde dei Colli Euganei. Fresco d\'estate e caldo d\'inverno.',
    nameEn: 'Ristorante Cencio',
    descEn: 'Historic restaurant in the Euganean area, known for its hospitality and excellent cuisine. Specializing in fish and meat dishes, with revisited traditional recipes.',
    phone: '+39 049 793470',
    website: 'https://www.ristorantecencio.com/',
    maps: 'https://maps.app.goo.gl/X6nikMJ4FXJ7F97V9',
  },
  {
    id: 28,
    name: 'Trattoria La Scudeleta',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/trattoria-la-scudeleta.png',
    description: 'La Scudelletta è un ristorante con terrazza panoramica situato a Barbarano Vicentino nella suggestiva località di San Giovanni in Monte sui Colli Berici.',
    nameEn: 'Trattoria La Scudeleta',
    descEn: 'Rustic trattoria with a familiar atmosphere, where you can taste the true flavors of the Veneto countryside. Homemade pasta, roast meats, and side dishes from the garden.',
    phone: '+39 0444 886015',
    website: 'https://www.trattorialascudeleta.it/',
    maps: 'https://maps.app.goo.gl/BxiPwXfVLEYgLNi49',
  },
  {
    id: 29,
    name: 'Il Cenacolo degli Euganei',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/il-cenacolo-degli-euganei.png',
    description: 'Ristorante dall\'atmosfera romantica e raccolta nel cuore dei Colli Euganei, location mozzafiato incastonata sul fianco del colle di Cortelà di Vo\'.',
    nameEn: 'Il Cenacolo degli Euganei',
    descEn: 'A restaurant that celebrates the gastronomic culture of the Euganean Hills. The menu offers a journey through local flavors, with dishes prepared with care and passion.',
    phone: '+39 351 403 0800',
    website: 'https://www.ilcenacolodeglieuganei.it/',
    maps: 'https://maps.app.goo.gl/UY1Sny12vcv4JSJy5',
  },
  {
    id: 30,
    name: 'Trattoria Al Sasso',
    category: 'dove-mangiare',
    subcategory: 'ristoranti',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/trattoria-al-sasso.png',
    description: 'La Trattoria Al Sasso si trova nel cuore dei Colli Euganei, a Castelnuovo di Teolo (PD), ed è un locale storico che ha saputo rinnovarsi mantenendo viva la tradizione.',
    nameEn: 'Trattoria Al Sasso',
    descEn: 'A trattoria set in the Euganean Hills, with a breathtaking view and genuine cuisine. Simple, traditional dishes made with high-quality ingredients, perfect for a relaxing lunch immersed in nature.',
    phone: '+39 049 992 5073',
    website: '',
    maps: 'https://maps.app.goo.gl/5j1KDrMsiK4PdZqt8',
  },

  // =====================
  // DOVE MANGIARE - PIZZERIE
  // =====================
  {
    id: 31,
    name: 'Pizzeria Gigi Pipa',
    category: 'dove-mangiare',
    subcategory: 'pizzerie',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/pizzeria-gigi-pipa.png',
    description: 'Pizzeria con l\'orto, riconosciuta con tre spicchi dal Gambero Rosso. Impasti a lunga lievitazione, ingredienti stagionali del loro orto.',
    nameEn: 'Pizzeria Gigi Pipa',
    descEn: 'Pizzeria known for its excellent pizza made with selected ingredients. A welcoming and informal place, ideal for an evening of taste and conviviality.',
    phone: '+39 331 4161253',
    website: 'https://pizzeriagigipipa.it/',
    maps: 'https://maps.app.goo.gl/oQUkPVa6ziFSE2XQA',
  },
  {
    id: 32,
    name: 'Pizzeria Ristorante Bar Gabi',
    category: 'dove-mangiare',
    subcategory: 'pizzerie',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/pizzeria-bar-gabi.png',
    description: 'Locale accogliente e rustico, con parcheggio comodo e orario serale esteso. Pizza buonissima e ambiente familiare.',
    nameEn: 'Pizzeria Ristorante Bar Gabi',
    descEn: 'A versatile venue that combines pizza, restaurant, and bar. The pizzas are baked in a wood-fired oven and the dishes offered satisfy every taste, from classic Italian cuisine to quick snacks.',
    phone: '+39 338 8986537',
    website: 'https://www.gabicinto.it/gpr/',
    maps: 'https://maps.app.goo.gl/Nt8iPpzckhNPbWDfA',
  },
  {
    id: 33,
    name: 'La Lunatica',
    category: 'dove-mangiare',
    subcategory: 'pizzerie',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/la-lunatica.png',
    description: 'Pizzeria ad asporto con consegna a domicilio. Pizza di buona qualità nel paese.',
    nameEn: 'La Lunatica',
    descEn: 'A modern and welcoming gelateria, offering artisanal gelato made with natural ingredients and genuine flavors. The perfect place for a refreshing break.',
    phone: '+39 0429 644388',
    website: '',
    maps: 'https://maps.app.goo.gl/TYuq27U9ejae878F9',
  },

  // =====================
  // DOVE MANGIARE - GELATERIE
  // =====================
  {
    id: 34,
    name: 'Gelateria Il Castello (Este)',
    category: 'dove-mangiare',
    subcategory: 'gelaterie',
    image: '/imgs/luoghi-di-interesse/dove-mangiare/gelateria-il-castello.png',
    description: 'Uno dei gelati più buoni di Padova e provincia. Pistacchio, cioccolato fondente e il buonissimo gelato biscotto pannaghiaccio.',
    nameEn: 'Gelateria Il Castello (Este)',
    descEn: 'Artisanal gelateria located in the center of Este, famous for the quality of its gelato made with fresh, natural ingredients. A fundamental stop for a sweet break in the city.',
    phone: '+39 0429 653112',
    website: '',
    maps: 'https://maps.app.goo.gl/QnDLyms8JgBqfhXT6',
  },
];

export default function LuoghiInteressePage() {
  const { t, locale } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('posti-da-visitare');
  const [activeSubFilter, setActiveSubFilter] = useState('ristoranti');

  const categories = [
    { key: 'posti-da-visitare', label: t('luoghi.categories.posti-da-visitare') },
    { key: 'citta', label: t('luoghi.categories.citta') },
    { key: 'cantine', label: t('luoghi.categories.cantine') },
    { key: 'dove-mangiare', label: t('luoghi.categories.dove-mangiare') },
  ];

  const subcategories = [
    { key: 'ristoranti', label: t('luoghi.subcategories.ristoranti') },
    { key: 'pizzerie', label: t('luoghi.subcategories.pizzerie') },
    { key: 'gelaterie', label: t('luoghi.subcategories.gelaterie') },
  ];

  const filteredPlaces = places.filter(p =>
    p.category === activeFilter &&
    (activeFilter !== 'dove-mangiare' || p.subcategory === activeSubFilter)
  );

  return (
    <main>
      <section className="luoghi-hero">
        <div className="container luoghi-hero-content">
          <div className="luoghi-hero-card">
            <h1>Luoghi d'interesse</h1>
            <button className="breadcrumb-btn" onClick={() => window.location.href='/'}>Home &gt; Luoghi d'interesse</button>
          </div>
        </div>
      </section>
      <Breadcrumbs hidden items={[{ name: 'Home', href: '/' }, { name: 'Luoghi di interesse' }]} />

      <section className="luoghi-section">
        <div className="container">
          <div className="luoghi-filters">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(cat.key)
                  if (cat.key !== 'dove-mangiare') setActiveSubFilter('ristoranti')
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {activeFilter === 'dove-mangiare' && (
            <div className="luoghi-sub-filters">
              {subcategories.map(sub => (
                <button
                  key={sub.key}
                  className={`filter-btn filter-btn--sub ${activeSubFilter === sub.key ? 'active' : ''}`}
                  onClick={() => setActiveSubFilter(sub.key)}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}

          <div className="luoghi-list">
            {filteredPlaces.map(place => (
              <div key={place.id} className="luoghi-card">
                <div className="luoghi-card-img">
                  <Image src={place.image} alt={place.name} fill sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="luoghi-card-body">
                  <h3 className="luoghi-card-title">{locale === 'en' && place.nameEn ? place.nameEn : place.name}</h3>
                  <p className="luoghi-card-desc">{locale === 'en' && place.descEn ? place.descEn : place.description}</p>
                  {activeFilter !== 'citta' && (
                    <div className="luoghi-card-links">
                      {place.phone && (
                        <a href={`tel:${place.phone}`} className="luoghi-link" target="_blank" rel="noopener noreferrer">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                          </svg>
                          {place.phone}
                        </a>
                      )}
                      {place.website && (
                        <a href={place.website} className="luoghi-link" target="_blank" rel="noopener noreferrer">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                          </svg>
                          {t('luoghi.website')}
                        </a>
                      )}
                      {place.maps && (
                        <a href={place.maps} className="luoghi-link" target="_blank" rel="noopener noreferrer">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          {t('luoghi.map')}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
