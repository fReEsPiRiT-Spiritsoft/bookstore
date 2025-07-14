let books = [
  {
    "name": "Dr. Stone",
    "author": "Riichiro Inagaki & Boichi",
    "likes": 18000000,
    "liked": false,
    "price": 7.95,
    "publishedYear": 2017,
    "genre": "Adventure, Science Fiction, Shōnen Manga",
    "pic": "./img/drstone.jpg",
    "comments": [
      {
        "name": "MangaLover91",
        "comment": "Wissenschaft trifft Abenteuer – genial umgesetzt!"
      },
      {
        "name": "ScienceGeek",
        "comment": "Die Erfindungen sind super cool erklärt und spannend!"
      },
      {
        "name": "ChemieStudent",
        "comment": "Endlich ein Manga, der Chemie richtig cool macht!"
      },
      {
        "name": "SenkunFan",
        "comment": "Senku ist einfach der beste Protagonist ever! 10 Milliarden Prozent genial!"
      },
      {
        "name": "StoneWorldExplorer",
        "comment": "Die Steinzeit-Welt ist so detailliert und faszinierend dargestellt."
      },
      {
        "name": "KohakuLover",
        "comment": "Kohaku ist eine starke Heldin! Ihre Entwicklung ist großartig."
      },
      {
        "name": "PhysikNerd",
        "comment": "Boichi's Artwork ist unglaublich detailliert, besonders die Experimente!"
      },
      {
        "name": "AnimeWatcher",
        "comment": "Nach der Anime-Adaption musste ich unbedingt den Manga lesen!"
      },
      {
        "name": "WissenschaftsFan",
        "comment": "Man lernt tatsächlich echte wissenschaftliche Fakten beim Lesen!"
      },
      {
        "name": "MangaCollector",
        "comment": "Definitiv einer der besten Shonen-Manga der letzten Jahre!"
      },
      {
        "name": "TsukasaDebatte",
        "comment": "Der Konflikt zwischen Senku und Tsukasa ist philosophisch tiefgreifend."
      },
      {
        "name": "KraftderWissenschaft",
        "comment": "Dieser Manga zeigt, dass Wissen wirklich Macht ist!"
      }
    ]
  },
  {
    "name": "Hellsing",
    "author": "Kouta Hirano",
    "likes": 4000000,
    "liked": false,
    "price": 17.99,
    "publishedYear": 1997,
    "genre": "Action, Horror, Supernatural, Seinen Manga",
    "pic": "./img/vanhelsing.jpg",
    "comments": [
      {
        "name": "VampirLover",
        "comment": "Düster, brutal und unvergesslich!"
      },
      {
        "name": "MangaCollectors",
        "comment": "Artwork ist top, Action nonstop – sehr lohnenswert."
      },
      {
        "name": "CollectorFan",
        "comment": "Die Deluxe-Hardcover sind echt schick für Regale."
      }
    ]
  },
  {
    "name": "Mononoke‑hime (Prinzessin Mononoke Manga)",
    "author": "Hayao Miyazaki (Adaption / Concept Art Book)",
    "likes": 15000,
    "liked": false,
    "price": 24.99,
    "publishedYear": 2015,
    "genre": "Fantasy, Art Book, Adaptation",
    "pic": "./img/mononoke.jpg",
    "comments": [
      {
        "name": "GhibliFan",
        "comment": "Ein wunderschön illustriertes Buch für Fans!"
      },
      {
        "name": "ForestLover",
        "comment": "Die Konzeptzeichnungen sind einfach magisch."
      }
    ]
  },
  {
    "name": "Chihiro no Kamikakushi (Chihiros Reise ins Zauberland – Manga)",
    "author": "Hayao Miyazaki (Manga Adaption)",
    "likes": 20000,
    "liked": false,
    "price": 19.99,
    "publishedYear": 2019,
    "genre": "Fantasy, Adaptation, Art Book",
    "pic": "./img/chihiro1.jpg",
    "comments": [
      {
        "name": "SpiritFan",
        "comment": "Sehr schöne Adaption vom Film, die Stimmung stimmt."
      },
      {
        "name": "AnimeCollector",
        "comment": "Perfekt für Ghibli-Sammler!"
      }
    ]
  },
  {
    "name": "One Piece",
    "author": "Eiichiro Oda",
    "likes": 980000,
    "liked": false,
    "price": 8.99,
    "publishedYear": 1997,
    "genre": "Abenteuer, Fantasy, Action",
    "pic": "./img/onepiece1.jpg",
    "comments": [
      {
        "name": "StrawHatMax",
        "comment": "Ich liebe Ruffy und seine Crew, einfach episch!"
      },
      {
        "name": "NamiRules",
        "comment": "Tausendmal gelesen, nie langweilig."
      },
      {
        "name": "ZoroFan87",
        "comment": "Oda ist ein Genie. Die Story ist unglaublich tief."
      },
      {
        "name": "MangaJunkie",
        "comment": "Preis-Leistung top. Mega viele Seiten."
      },
      {
        "name": "BinksSake",
        "comment": "Wer One Piece nicht kennt, verpasst Geschichte."
      },
      {
        "name": "SanjiSenpai",
        "comment": "Auch nach 100 Bänden immer noch spannend."
      }
    ]
  },
  {
    "name": "Attack on Titan",
    "author": "Hajime Isayama",
    "likes": 750000,
    "liked": false,
    "price": 10.49,
    "publishedYear": 2009,
    "genre": "Drama, Mystery, Action, Horror",
    "pic": "./img/aot1.webp",
    "comments": [
      {
        "name": "TitanHunter",
        "comment": "Krass düstere Welt, voll mein Ding."
      },
      {
        "name": "ErenFTW",
        "comment": "Plot Twists ohne Ende – Gänsehaut!"
      },
      {
        "name": "WallMariaGirl",
        "comment": "Mega spannend von Anfang bis Ende."
      },
      {
        "name": "MikasaFan",
        "comment": "Visuell stark, brutal aber emotional."
      },
      {
        "name": "LeviSquad",
        "comment": "Levi ist einfach badass. Punkt."
      },
      {
        "name": "ShifterSoul",
        "comment": "Nichts für schwache Nerven – aber genial."
      }
    ]
  },
  {
    "name": "Death Note",
    "author": "Tsugumi Ohba, Takeshi Obata",
    "likes": 620000,
    "liked": false,
    "price": 9.99,
    "publishedYear": 2003,
    "genre": "Thriller, Psychologisch, Übernatürlich",
    "pic": "./img/deathnote1.webp",
    "comments": [
      {
        "name": "LightYagamiFan",
        "comment": "Gedankenspiele auf höchstem Niveau!"
      },
      {
        "name": "KiraRules",
        "comment": "Der Manga ist sogar besser als der Anime."
      },
      {
        "name": "RyukLover",
        "comment": "Spannung pur – einfach genial geschrieben."
      },
      {
        "name": "MindTwistMe",
        "comment": "Ich hab's in einem Rutsch durchgelesen."
      },
      {
        "name": "JustL",
        "comment": "L ist mein Lieblingscharakter. Und wie!"
      },
      {
        "name": "DarkReader",
        "comment": "Philosophisch, clever, packend."
      }
    ]
  },
  {
    "name": "Naruto",
    "author": "Masashi Kishimoto",
    "likes": 890000,
    "liked": false,
    "price": 7.49,
    "publishedYear": 1999,
    "genre": "Action, Abenteuer, Ninja, Coming-of-Age",
    "pic": "./img/naruto.webp",
    "comments": [
      {
        "name": "ShadowClone88",
        "comment": "Kindheit pur! Naruto hat mich geprägt."
      },
      {
        "name": "SasukeFan",
        "comment": "Kämpfe und Story perfekt ausbalanciert."
      },
      {
        "name": "IchirakuLover",
        "comment": "Ramen und Rasengan – was will man mehr?"
      },
      {
        "name": "NindoSoul",
        "comment": "Der beste Coming-of-Age Manga überhaupt."
      },
      {
        "name": "HinataHeart",
        "comment": "Emotional & episch. ❤️"
      },
      {
        "name": "ChakraJunkie",
        "comment": "Ich feier das ganze Universum."
      }
    ]
  },
  {
    "name": "Jujutsu Kaisen",
    "author": "Gege Akutami",
    "likes": 510000,
    "liked": false,
    "price": 9.49,
    "publishedYear": 2018,
    "genre": "Action, Horror, Übernatürlich",
    "pic": "./img/jujutsu1.webp",
    "comments": [
      {
        "name": "GojoSimp",
        "comment": "Gojo ist der coolste Lehrer ever!"
      },
      {
        "name": "CursedEnergy",
        "comment": "Sehr düster, aber fesselnd."
      },
      {
        "name": "YujiMain",
        "comment": "Yuji ist ein klasse Protagonist."
      },
      {
        "name": "SukunaSmile",
        "comment": "Der Humor inmitten der Dunkelheit – genial."
      },
      {
        "name": "DomainFan",
        "comment": "Die Kämpfe sind visuell und taktisch top!"
      },
      {
        "name": "JJKLover",
        "comment": "Für moderne Shonen-Fans ein Muss!"
      }
    ]
  }
];
