namespace Emojis {
  type TaggedEmoji = {
    emoji: string,
    tags: string[],
  };

  export const findMostRelevantEmoji: (prompt: string) => string = (prompt) => Emojis.parsedEmojis.map((taggedEmoji) => ({
    taggedEmoji,
    distance: taggedEmoji.tags.map((tag) => Words.computeDistance(prompt, tag)).reduce((a, b) => a + b, 0),
  })).filter(({ distance }) => distance !== 0).sort((a, b) => a.distance - b.distance).shift()?.taggedEmoji.emoji ?? "#";

  export const parsedEmojis: TaggedEmoji[] = [
    {
      "emoji": "😀",
      "tags": [
        "visage",
        "rieur"
      ]
    },
    {
      "emoji": "😁",
      "tags": [
        "visage",
        "souriant",
        "yeux",
        "rieurs"
      ]
    },
    {
      "emoji": "😅",
      "tags": [
        "visage",
        "souriant",
        "goutte",
        "sueur"
      ]
    },
    {
      "emoji": "🤣",
      "tags": [
        "rouler",
        "terre",
        "rire"
      ]
    },
    {
      "emoji": "😂",
      "tags": [
        "visage",
        "riant",
        "larmes"
      ]
    },
    {
      "emoji": "🙂",
      "tags": [
        "visage",
        "léger",
        "sourire"
      ]
    },
    {
      "emoji": "😉",
      "tags": [
        "visage",
        "clin",
        "dœil"
      ]
    },
    {
      "emoji": "😊",
      "tags": [
        "visage",
        "souriant",
        "yeux",
        "rieurs"
      ]
    },
    {
      "emoji": "🥰",
      "tags": [
        "visage",
        "souriant",
        "cœurs"
      ]
    },
    {
      "emoji": "😍",
      "tags": [
        "visage",
        "souriant",
        "yeux",
        "forme",
        "cœur"
      ]
    },
    {
      "emoji": "🤩",
      "tags": [
        "visage",
        "étoiles",
        "place",
        "yeux"
      ]
    },
    {
      "emoji": "😘",
      "tags": [
        "visage",
        "envoyant",
        "bisou"
      ]
    },
    {
      "emoji": "😋",
      "tags": [
        "miam"
      ]
    },
    {
      "emoji": "🤗",
      "tags": [
        "visage",
        "câlin"
      ]
    },
    {
      "emoji": "🤔",
      "tags": [
        "visage",
        "pleine",
        "réflexion"
      ]
    },
    {
      "emoji": "🥳",
      "tags": [
        "visage",
        "festif"
      ]
    },
    {
      "emoji": "😎",
      "tags": [
        "visage",
        "lunettes",
        "soleil"
      ]
    },
    {
      "emoji": "❤️",
      "tags": [
        "cœur",
        "rouge"
      ]
    },
    {
      "emoji": "💚",
      "tags": [
        "cœur",
        "vert"
      ]
    },
    {
      "emoji": "🤍",
      "tags": [
        "cœur",
        "blanc"
      ]
    },
    {
      "emoji": "💬",
      "tags": [
        "bulle"
      ]
    },
    {
      "emoji": "👋",
      "tags": [
        "signe",
        "main"
      ]
    },
    {
      "emoji": "👌",
      "tags": [
        "ok"
      ]
    },
    {
      "emoji": "🤞",
      "tags": [
        "doigts",
        "croisés"
      ]
    },
    {
      "emoji": "👉",
      "tags": [
        "main",
        "index",
        "pointant"
      ]
    },
    {
      "emoji": "👇",
      "tags": [
        "main",
        "index",
        "pointant"
      ]
    },
    {
      "emoji": "👍",
      "tags": [
        "pouce"
      ]
    },
    {
      "emoji": "👏",
      "tags": [
        "applaudissements"
      ]
    },
    {
      "emoji": "🫶",
      "tags": [
        "mains",
        "forment",
        "cœur"
      ]
    },
    {
      "emoji": "🤝",
      "tags": [
        "poignée",
        "main"
      ]
    },
    {
      "emoji": "🙏",
      "tags": [
        "mains",
        "prière"
      ]
    },
    {
      "emoji": "💪",
      "tags": [
        "biceps",
        "contracté"
      ]
    },
    {
      "emoji": "🗣️",
      "tags": [
        "tête"
      ]
    },
    {
      "emoji": "🐕",
      "tags": [
        "chien"
      ]
    },
    {
      "emoji": "🐈",
      "tags": [
        "chat"
      ]
    },
    {
      "emoji": "🌸",
      "tags": [
        "fleur",
        "cerisier"
      ]
    },
    {
      "emoji": "🌼",
      "tags": [
        "bourgeon"
      ]
    },
    {
      "emoji": "🌷",
      "tags": [
        "tulipe"
      ]
    },
    {
      "emoji": "🌱",
      "tags": [
        "jeune",
        "pousse"
      ]
    },
    {
      "emoji": "🌿",
      "tags": [
        "feuille"
      ]
    },
    {
      "emoji": "🎂",
      "tags": [
        "gâteau",
        "danniversaire"
      ]
    },
    {
      "emoji": "🌍",
      "tags": [
        "globe",
        "tourné",
        "lafrique",
        "leurope"
      ]
    },
    {
      "emoji": "🏠",
      "tags": [
        "maison"
      ]
    },
    {
      "emoji": "🚗",
      "tags": [
        "voiture"
      ]
    },
    {
      "emoji": "🚨",
      "tags": [
        "gyrophare"
      ]
    },
    {
      "emoji": "✈️",
      "tags": [
        "avion"
      ]
    },
    {
      "emoji": "🚀",
      "tags": [
        "fusée"
      ]
    },
    {
      "emoji": "⌛",
      "tags": [
        "sablier"
      ]
    },
    {
      "emoji": "☀️",
      "tags": [
        "soleil"
      ]
    },
    {
      "emoji": "🌞",
      "tags": [
        "soleil",
        "visage"
      ]
    },
    {
      "emoji": "⭐",
      "tags": [
        "étoile"
      ]
    },
    {
      "emoji": "🌟",
      "tags": [
        "étoile",
        "brillante"
      ]
    },
    {
      "emoji": "⚡",
      "tags": [
        "haute",
        "tension"
      ]
    },
    {
      "emoji": "🔥",
      "tags": [
        "feu"
      ]
    },
    {
      "emoji": "✨",
      "tags": [
        "étincelles"
      ]
    },
    {
      "emoji": "🎉",
      "tags": [
        "cotillons"
      ]
    },
    {
      "emoji": "🎁",
      "tags": [
        "cadeau"
      ]
    },
    {
      "emoji": "🏆",
      "tags": [
        "trophée"
      ]
    },
    {
      "emoji": "🎯",
      "tags": []
    },
    {
      "emoji": "🎮",
      "tags": [
        "jeu",
        "vidéo"
      ]
    },
    {
      "emoji": "👑",
      "tags": [
        "couronne"
      ]
    },
    {
      "emoji": "📢",
      "tags": [
        "parleur"
      ]
    },
    {
      "emoji": "📣",
      "tags": [
        "porte",
        "voix"
      ]
    },
    {
      "emoji": "🎵",
      "tags": [
        "note",
        "musique"
      ]
    },
    {
      "emoji": "🎶",
      "tags": [
        "notes",
        "musique"
      ]
    },
    {
      "emoji": "🎤",
      "tags": [
        "micro"
      ]
    },
    {
      "emoji": "📱",
      "tags": [
        "téléphone",
        "portable"
      ]
    },
    {
      "emoji": "☎️",
      "tags": [
        "téléphone"
      ]
    },
    {
      "emoji": "📞",
      "tags": [
        "combiné",
        "téléphonique"
      ]
    },
    {
      "emoji": "💻",
      "tags": [
        "ordinateur",
        "portable"
      ]
    },
    {
      "emoji": "🎥",
      "tags": [
        "caméra"
      ]
    },
    {
      "emoji": "🎬",
      "tags": [
        "clap"
      ]
    },
    {
      "emoji": "📷",
      "tags": [
        "appareil",
        "photo"
      ]
    },
    {
      "emoji": "📸",
      "tags": [
        "appareil",
        "photo",
        "flash"
      ]
    },
    {
      "emoji": "🔎",
      "tags": [
        "loupe",
        "orientée"
      ]
    },
    {
      "emoji": "💡",
      "tags": [
        "ampoule"
      ]
    },
    {
      "emoji": "📖",
      "tags": [
        "livre"
      ]
    },
    {
      "emoji": "📚",
      "tags": [
        "livres"
      ]
    },
    {
      "emoji": "💰",
      "tags": [
        "sac",
        "dargent"
      ]
    },
    {
      "emoji": "📧",
      "tags": [
        "mail"
      ]
    },
    {
      "emoji": "📝",
      "tags": [
        "mémo"
      ]
    },
    {
      "emoji": "💼",
      "tags": [
        "porte",
        "documents"
      ]
    },
    {
      "emoji": "📅",
      "tags": [
        "calendrier"
      ]
    },
    {
      "emoji": "🗓️",
      "tags": [
        "calendrier",
        "spirale"
      ]
    },
    {
      "emoji": "📈",
      "tags": [
        "graphique",
        "hausse"
      ]
    },
    {
      "emoji": "📍",
      "tags": [
        "épingle"
      ]
    },
    {
      "emoji": "🛠️",
      "tags": [
        "marteau",
        "clé",
        "molette"
      ]
    },
    {
      "emoji": "⚠️",
      "tags": [
        "symbole",
        "davertissement"
      ]
    },
    {
      "emoji": "➡️",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "⬇️",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "❓",
      "tags": [
        "point",
        "dinterrogation",
        "rouge"
      ]
    },
    {
      "emoji": "✅",
      "tags": [
        "bouton",
        "coché"
      ]
    },
    {
      "emoji": "✔️",
      "tags": [
        "coche"
      ]
    },
    {
      "emoji": "❌",
      "tags": [
        "croix"
      ]
    },
    {
      "emoji": "ℹ️",
      "tags": [
        "source",
        "dinformations"
      ]
    },
    {
      "emoji": "🔴",
      "tags": [
        "disque",
        "rouge"
      ]
    },
    {
      "emoji": "🟢",
      "tags": [
        "disque",
        "vert"
      ]
    },
    {
      "emoji": "🇩🇿",
      "tags": [
        "drapeau",
        "algérie"
      ]
    },
    {
      "emoji": "🇫🇷",
      "tags": [
        "drapeau",
        "france"
      ]
    },
    {
      "emoji": "🇲🇦",
      "tags": [
        "drapeau",
        "maroc"
      ]
    },
    {
      "emoji": "😀",
      "tags": [
        "visage",
        "rieur"
      ]
    },
    {
      "emoji": "😃",
      "tags": [
        "visage",
        "souriant",
        "grands",
        "yeux"
      ]
    },
    {
      "emoji": "😄",
      "tags": [
        "visage",
        "souriant",
        "yeux",
        "rieurs"
      ]
    },
    {
      "emoji": "😁",
      "tags": [
        "visage",
        "souriant",
        "yeux",
        "rieurs"
      ]
    },
    {
      "emoji": "😆",
      "tags": [
        "visage",
        "souriant",
        "yeux",
        "plissés"
      ]
    },
    {
      "emoji": "😅",
      "tags": [
        "visage",
        "souriant",
        "goutte",
        "sueur"
      ]
    },
    {
      "emoji": "🤣",
      "tags": [
        "rouler",
        "terre",
        "rire"
      ]
    },
    {
      "emoji": "😂",
      "tags": [
        "visage",
        "riant",
        "larmes"
      ]
    },
    {
      "emoji": "🙂",
      "tags": [
        "visage",
        "léger",
        "sourire"
      ]
    },
    {
      "emoji": "🙃",
      "tags": [
        "tête",
        "lenvers"
      ]
    },
    {
      "emoji": "🫠",
      "tags": [
        "visage",
        "fond"
      ]
    },
    {
      "emoji": "😉",
      "tags": [
        "visage",
        "clin",
        "dœil"
      ]
    },
    {
      "emoji": "😊",
      "tags": [
        "visage",
        "souriant",
        "yeux",
        "rieurs"
      ]
    },
    {
      "emoji": "😇",
      "tags": [
        "visage",
        "souriant",
        "auréole"
      ]
    },
    {
      "emoji": "🥰",
      "tags": [
        "visage",
        "souriant",
        "cœurs"
      ]
    },
    {
      "emoji": "😍",
      "tags": [
        "visage",
        "souriant",
        "yeux",
        "forme",
        "cœur"
      ]
    },
    {
      "emoji": "🤩",
      "tags": [
        "visage",
        "étoiles",
        "place",
        "yeux"
      ]
    },
    {
      "emoji": "😘",
      "tags": [
        "visage",
        "envoyant",
        "bisou"
      ]
    },
    {
      "emoji": "😗",
      "tags": [
        "visage",
        "bisou"
      ]
    },
    {
      "emoji": "☺️",
      "tags": [
        "visage",
        "souriant"
      ]
    },
    {
      "emoji": "😚",
      "tags": [
        "visage",
        "bisou",
        "yeux",
        "fermés"
      ]
    },
    {
      "emoji": "😙",
      "tags": [
        "visage",
        "yeux",
        "rieurs",
        "bisou"
      ]
    },
    {
      "emoji": "🥲",
      "tags": [
        "visage",
        "souriant",
        "larme"
      ]
    },
    {
      "emoji": "😋",
      "tags": [
        "miam"
      ]
    },
    {
      "emoji": "😛",
      "tags": [
        "visage",
        "tire",
        "langue"
      ]
    },
    {
      "emoji": "😜",
      "tags": [
        "visage",
        "tire",
        "langue",
        "clin",
        "dœil"
      ]
    },
    {
      "emoji": "🤪",
      "tags": [
        "tête",
        "fou"
      ]
    },
    {
      "emoji": "😝",
      "tags": [
        "visage",
        "tire",
        "langue",
        "yeux",
        "plissés"
      ]
    },
    {
      "emoji": "🤑",
      "tags": [
        "argent",
        "yeux",
        "bouche"
      ]
    },
    {
      "emoji": "🤗",
      "tags": [
        "visage",
        "câlin"
      ]
    },
    {
      "emoji": "🤭",
      "tags": [
        "visage",
        "main",
        "bouche"
      ]
    },
    {
      "emoji": "🫢",
      "tags": [
        "visage",
        "yeux",
        "main",
        "bouche"
      ]
    },
    {
      "emoji": "🫣",
      "tags": [
        "visage",
        "regarde",
        "doigts"
      ]
    },
    {
      "emoji": "🤫",
      "tags": [
        "visage",
        "doigt",
        "bouche"
      ]
    },
    {
      "emoji": "🤔",
      "tags": [
        "visage",
        "pleine",
        "réflexion"
      ]
    },
    {
      "emoji": "🫡",
      "tags": [
        "visage",
        "salut",
        "militaire"
      ]
    },
    {
      "emoji": "🤐",
      "tags": [
        "visage",
        "bouche",
        "fermeture",
        "éclair"
      ]
    },
    {
      "emoji": "🤨",
      "tags": [
        "visage",
        "sourcils",
        "relevés"
      ]
    },
    {
      "emoji": "😐",
      "tags": [
        "visage",
        "neutre"
      ]
    },
    {
      "emoji": "😑",
      "tags": [
        "visage",
        "expression"
      ]
    },
    {
      "emoji": "😶",
      "tags": [
        "visage",
        "bouche"
      ]
    },
    {
      "emoji": "🫥",
      "tags": [
        "visage",
        "pointillés"
      ]
    },
    {
      "emoji": "😶‍🌫️",
      "tags": [
        "visage",
        "nuages"
      ]
    },
    {
      "emoji": "😏",
      "tags": [
        "visage",
        "sourire",
        "malin"
      ]
    },
    {
      "emoji": "😒",
      "tags": [
        "visage",
        "blasé"
      ]
    },
    {
      "emoji": "🙄",
      "tags": [
        "visage",
        "roulant",
        "yeux"
      ]
    },
    {
      "emoji": "😬",
      "tags": [
        "visage",
        "grimaçant"
      ]
    },
    {
      "emoji": "😮‍💨",
      "tags": [
        "visage",
        "expirant"
      ]
    },
    {
      "emoji": "🤥",
      "tags": [
        "visage",
        "menteur"
      ]
    },
    {
      "emoji": "🫨",
      "tags": [
        "visage",
        "secoué"
      ]
    },
    {
      "emoji": "🙂‍↔️",
      "tags": [
        "tête",
        "secouée",
        "horizontalement"
      ]
    },
    {
      "emoji": "🙂‍↕️",
      "tags": [
        "tête",
        "secouée",
        "verticalement"
      ]
    },
    {
      "emoji": "😌",
      "tags": [
        "visage",
        "soulagé"
      ]
    },
    {
      "emoji": "😔",
      "tags": [
        "visage",
        "pensif"
      ]
    },
    {
      "emoji": "😪",
      "tags": [
        "visage",
        "endormi"
      ]
    },
    {
      "emoji": "🤤",
      "tags": [
        "visage",
        "bave"
      ]
    },
    {
      "emoji": "😴",
      "tags": [
        "visage",
        "somnolent"
      ]
    },
    {
      "emoji": "😷",
      "tags": [
        "visage",
        "masque"
      ]
    },
    {
      "emoji": "🤒",
      "tags": [
        "visage",
        "thermomètre"
      ]
    },
    {
      "emoji": "🤕",
      "tags": [
        "visage",
        "bandage",
        "autour",
        "tête"
      ]
    },
    {
      "emoji": "🤢",
      "tags": [
        "visage",
        "nauséeux"
      ]
    },
    {
      "emoji": "🤮",
      "tags": [
        "visage",
        "vomit"
      ]
    },
    {
      "emoji": "🤧",
      "tags": [
        "visage",
        "éternue"
      ]
    },
    {
      "emoji": "🥵",
      "tags": [
        "visage",
        "rouge",
        "chaud"
      ]
    },
    {
      "emoji": "🥶",
      "tags": [
        "visage",
        "bleu",
        "froid"
      ]
    },
    {
      "emoji": "🥴",
      "tags": [
        "visage",
        "éméché"
      ]
    },
    {
      "emoji": "😵",
      "tags": [
        "visage",
        "étourdi"
      ]
    },
    {
      "emoji": "😵‍💫",
      "tags": [
        "visage",
        "yeux",
        "spirales"
      ]
    },
    {
      "emoji": "🤯",
      "tags": [
        "tête",
        "explose"
      ]
    },
    {
      "emoji": "🤠",
      "tags": [
        "visage",
        "chapeau",
        "cowboy"
      ]
    },
    {
      "emoji": "🥳",
      "tags": [
        "visage",
        "festif"
      ]
    },
    {
      "emoji": "🥸",
      "tags": [
        "visage",
        "déguisé"
      ]
    },
    {
      "emoji": "😎",
      "tags": [
        "visage",
        "lunettes",
        "soleil"
      ]
    },
    {
      "emoji": "🤓",
      "tags": [
        "visage",
        "geek"
      ]
    },
    {
      "emoji": "🧐",
      "tags": [
        "visage",
        "monocle"
      ]
    },
    {
      "emoji": "😕",
      "tags": [
        "visage",
        "confus"
      ]
    },
    {
      "emoji": "🫤",
      "tags": [
        "visage",
        "bouche",
        "diagonale"
      ]
    },
    {
      "emoji": "😟",
      "tags": [
        "visage",
        "inquiet"
      ]
    },
    {
      "emoji": "🙁",
      "tags": [
        "visage",
        "légèrement",
        "mécontent"
      ]
    },
    {
      "emoji": "☹️",
      "tags": [
        "visage",
        "mécontent"
      ]
    },
    {
      "emoji": "😮",
      "tags": [
        "visage",
        "bouche"
      ]
    },
    {
      "emoji": "😯",
      "tags": [
        "visage",
        "ébahi"
      ]
    },
    {
      "emoji": "😲",
      "tags": [
        "visage",
        "stupéfait"
      ]
    },
    {
      "emoji": "😳",
      "tags": [
        "visage",
        "rougit"
      ]
    },
    {
      "emoji": "🥺",
      "tags": [
        "visage",
        "implorant"
      ]
    },
    {
      "emoji": "🥹",
      "tags": [
        "visage",
        "retenant",
        "larmes"
      ]
    },
    {
      "emoji": "😦",
      "tags": [
        "visage",
        "mécontent",
        "bouche"
      ]
    },
    {
      "emoji": "😧",
      "tags": [
        "visage",
        "angoissé"
      ]
    },
    {
      "emoji": "😨",
      "tags": [
        "visage",
        "effrayé"
      ]
    },
    {
      "emoji": "😰",
      "tags": [
        "visage",
        "anxieux",
        "goutte",
        "sueur"
      ]
    },
    {
      "emoji": "😥",
      "tags": [
        "visage",
        "triste",
        "soulagé"
      ]
    },
    {
      "emoji": "😢",
      "tags": [
        "visage",
        "pleure"
      ]
    },
    {
      "emoji": "😭",
      "tags": [
        "visage",
        "pleure",
        "chaudes",
        "larmes"
      ]
    },
    {
      "emoji": "😱",
      "tags": [
        "visage",
        "hurle",
        "peur"
      ]
    },
    {
      "emoji": "😖",
      "tags": [
        "visage",
        "déconcerté"
      ]
    },
    {
      "emoji": "😣",
      "tags": [
        "visage",
        "persévérant"
      ]
    },
    {
      "emoji": "😞",
      "tags": [
        "visage",
        "déçu"
      ]
    },
    {
      "emoji": "😓",
      "tags": [
        "visage",
        "démoralisé",
        "goutte",
        "sueur"
      ]
    },
    {
      "emoji": "😩",
      "tags": [
        "visage",
        "épuisé"
      ]
    },
    {
      "emoji": "😫",
      "tags": [
        "visage",
        "fatigué"
      ]
    },
    {
      "emoji": "🥱",
      "tags": [
        "visage",
        "bâillant"
      ]
    },
    {
      "emoji": "😤",
      "tags": [
        "visage",
        "fumée",
        "sortant",
        "narines"
      ]
    },
    {
      "emoji": "😡",
      "tags": [
        "visage",
        "boudeur"
      ]
    },
    {
      "emoji": "😠",
      "tags": [
        "visage",
        "colère"
      ]
    },
    {
      "emoji": "🤬",
      "tags": [
        "visage",
        "symboles",
        "bouche"
      ]
    },
    {
      "emoji": "😈",
      "tags": [
        "visage",
        "souriant",
        "cornes"
      ]
    },
    {
      "emoji": "👿",
      "tags": [
        "visage",
        "colère",
        "cornes"
      ]
    },
    {
      "emoji": "💀",
      "tags": [
        "crâne"
      ]
    },
    {
      "emoji": "☠️",
      "tags": [
        "tête",
        "mort"
      ]
    },
    {
      "emoji": "💩",
      "tags": [
        "tas",
        "crotte"
      ]
    },
    {
      "emoji": "🤡",
      "tags": [
        "visage",
        "clown"
      ]
    },
    {
      "emoji": "👹",
      "tags": [
        "ogre"
      ]
    },
    {
      "emoji": "👺",
      "tags": [
        "monstre",
        "japonais"
      ]
    },
    {
      "emoji": "👻",
      "tags": [
        "fantôme"
      ]
    },
    {
      "emoji": "👽",
      "tags": [
        "alien"
      ]
    },
    {
      "emoji": "👾",
      "tags": [
        "monstre",
        "lespace"
      ]
    },
    {
      "emoji": "🤖",
      "tags": [
        "robot"
      ]
    },
    {
      "emoji": "😺",
      "tags": [
        "chat",
        "sourit"
      ]
    },
    {
      "emoji": "😸",
      "tags": [
        "chat",
        "sourit",
        "yeux",
        "rieurs"
      ]
    },
    {
      "emoji": "😹",
      "tags": [
        "chat",
        "pleure",
        "joie"
      ]
    },
    {
      "emoji": "😻",
      "tags": [
        "chat",
        "souriant",
        "yeux",
        "cœurs"
      ]
    },
    {
      "emoji": "😼",
      "tags": [
        "chat",
        "sourire",
        "coin"
      ]
    },
    {
      "emoji": "😽",
      "tags": [
        "chat",
        "bisou"
      ]
    },
    {
      "emoji": "🙀",
      "tags": [
        "chat",
        "fatigué"
      ]
    },
    {
      "emoji": "😿",
      "tags": [
        "chat",
        "pleure"
      ]
    },
    {
      "emoji": "😾",
      "tags": [
        "chat",
        "boude"
      ]
    },
    {
      "emoji": "🙈",
      "tags": [
        "singe",
        "voir"
      ]
    },
    {
      "emoji": "🙉",
      "tags": [
        "singe",
        "entendre"
      ]
    },
    {
      "emoji": "🙊",
      "tags": [
        "singe"
      ]
    },
    {
      "emoji": "💌",
      "tags": [
        "lettre",
        "damour"
      ]
    },
    {
      "emoji": "💘",
      "tags": [
        "cœur",
        "flèche"
      ]
    },
    {
      "emoji": "💝",
      "tags": [
        "cœur",
        "ruban"
      ]
    },
    {
      "emoji": "💖",
      "tags": [
        "cœur",
        "étincelant"
      ]
    },
    {
      "emoji": "💗",
      "tags": [
        "cœur",
        "grandissant"
      ]
    },
    {
      "emoji": "💓",
      "tags": [
        "cœur",
        "battant"
      ]
    },
    {
      "emoji": "💞",
      "tags": [
        "cœurs",
        "tournent"
      ]
    },
    {
      "emoji": "💕",
      "tags": [
        "cœurs"
      ]
    },
    {
      "emoji": "💟",
      "tags": [
        "décoration",
        "cœur"
      ]
    },
    {
      "emoji": "❣️",
      "tags": [
        "cœur",
        "point",
        "dexclamation"
      ]
    },
    {
      "emoji": "💔",
      "tags": [
        "cœur",
        "brisé"
      ]
    },
    {
      "emoji": "❤️‍🔥",
      "tags": [
        "cœur",
        "enflammé"
      ]
    },
    {
      "emoji": "❤️‍🩹",
      "tags": [
        "cœur",
        "bandages"
      ]
    },
    {
      "emoji": "❤️",
      "tags": [
        "cœur",
        "rouge"
      ]
    },
    {
      "emoji": "🩷",
      "tags": [
        "cœur",
        "rose"
      ]
    },
    {
      "emoji": "🧡",
      "tags": [
        "cœur",
        "orange"
      ]
    },
    {
      "emoji": "💛",
      "tags": [
        "cœur",
        "jaune"
      ]
    },
    {
      "emoji": "💚",
      "tags": [
        "cœur",
        "vert"
      ]
    },
    {
      "emoji": "💙",
      "tags": [
        "cœur",
        "bleu"
      ]
    },
    {
      "emoji": "🩵",
      "tags": [
        "cœur",
        "bleu",
        "clair"
      ]
    },
    {
      "emoji": "💜",
      "tags": [
        "cœur",
        "violet"
      ]
    },
    {
      "emoji": "🤎",
      "tags": [
        "cœur",
        "marron"
      ]
    },
    {
      "emoji": "🖤",
      "tags": [
        "cœur",
        "noir"
      ]
    },
    {
      "emoji": "🩶",
      "tags": [
        "cœur",
        "gris"
      ]
    },
    {
      "emoji": "🤍",
      "tags": [
        "cœur",
        "blanc"
      ]
    },
    {
      "emoji": "💋",
      "tags": [
        "trace",
        "rouge",
        "lèvres"
      ]
    },
    {
      "emoji": "💯",
      "tags": [
        "points"
      ]
    },
    {
      "emoji": "💢",
      "tags": [
        "symbole",
        "colère"
      ]
    },
    {
      "emoji": "💥",
      "tags": [
        "explosion"
      ]
    },
    {
      "emoji": "💫",
      "tags": [
        "étourdissement"
      ]
    },
    {
      "emoji": "💦",
      "tags": [
        "gouttes",
        "sueur"
      ]
    },
    {
      "emoji": "💨",
      "tags": [
        "décamper"
      ]
    },
    {
      "emoji": "🕳️",
      "tags": [
        "trou"
      ]
    },
    {
      "emoji": "💬",
      "tags": [
        "bulle"
      ]
    },
    {
      "emoji": "👁️‍🗨️",
      "tags": [
        "œil",
        "bulle",
        "bd"
      ]
    },
    {
      "emoji": "🗨️",
      "tags": [
        "bulle",
        "gauche"
      ]
    },
    {
      "emoji": "🗯️",
      "tags": [
        "bulle",
        "colère"
      ]
    },
    {
      "emoji": "💭",
      "tags": [
        "bulle",
        "pensée"
      ]
    },
    {
      "emoji": "💤",
      "tags": [
        "endormi"
      ]
    },
    {
      "emoji": "👋",
      "tags": [
        "signe",
        "main"
      ]
    },
    {
      "emoji": "🤚",
      "tags": [
        "main",
        "levée"
      ]
    },
    {
      "emoji": "🖐️",
      "tags": [
        "main",
        "levée",
        "doigts",
        "écartés"
      ]
    },
    {
      "emoji": "✋",
      "tags": [
        "main",
        "levée"
      ]
    },
    {
      "emoji": "🖖",
      "tags": [
        "salut",
        "vulcain"
      ]
    },
    {
      "emoji": "🫱",
      "tags": [
        "main"
      ]
    },
    {
      "emoji": "🫲",
      "tags": [
        "main",
        "gauche"
      ]
    },
    {
      "emoji": "🫳",
      "tags": [
        "main",
        "paume"
      ]
    },
    {
      "emoji": "🫴",
      "tags": [
        "main",
        "paume"
      ]
    },
    {
      "emoji": "🫷",
      "tags": [
        "main",
        "pousse",
        "gauche"
      ]
    },
    {
      "emoji": "🫸",
      "tags": [
        "main",
        "pousse"
      ]
    },
    {
      "emoji": "👌",
      "tags": [
        "ok"
      ]
    },
    {
      "emoji": "🤌",
      "tags": [
        "bout",
        "doigts",
        "joints"
      ]
    },
    {
      "emoji": "🤏",
      "tags": [
        "pouce",
        "index",
        "rapprochés"
      ]
    },
    {
      "emoji": "✌️",
      "tags": [
        "victoire"
      ]
    },
    {
      "emoji": "🤞",
      "tags": [
        "doigts",
        "croisés"
      ]
    },
    {
      "emoji": "🫰",
      "tags": [
        "main",
        "index",
        "pouce",
        "croisés"
      ]
    },
    {
      "emoji": "🤟",
      "tags": [
        "signe",
        "taime"
      ]
    },
    {
      "emoji": "🤘",
      "tags": [
        "cornes",
        "doigts"
      ]
    },
    {
      "emoji": "🤙",
      "tags": [
        "signe",
        "appel",
        "téléphonique",
        "doigts"
      ]
    },
    {
      "emoji": "👈",
      "tags": [
        "main",
        "index",
        "pointant",
        "gauche"
      ]
    },
    {
      "emoji": "👉",
      "tags": [
        "main",
        "index",
        "pointant"
      ]
    },
    {
      "emoji": "👆",
      "tags": [
        "main",
        "index",
        "pointant"
      ]
    },
    {
      "emoji": "🖕",
      "tags": [
        "doigt",
        "dhonneur"
      ]
    },
    {
      "emoji": "👇",
      "tags": [
        "main",
        "index",
        "pointant"
      ]
    },
    {
      "emoji": "☝️",
      "tags": [
        "index",
        "pointant"
      ]
    },
    {
      "emoji": "🫵",
      "tags": [
        "index",
        "pointant",
        "lutilisateur"
      ]
    },
    {
      "emoji": "👍",
      "tags": [
        "pouce"
      ]
    },
    {
      "emoji": "👎",
      "tags": [
        "pouce"
      ]
    },
    {
      "emoji": "✊",
      "tags": [
        "poing",
        "levé"
      ]
    },
    {
      "emoji": "👊",
      "tags": [
        "poing",
        "face"
      ]
    },
    {
      "emoji": "🤛",
      "tags": [
        "poing",
        "gauche"
      ]
    },
    {
      "emoji": "🤜",
      "tags": [
        "poing"
      ]
    },
    {
      "emoji": "👏",
      "tags": [
        "applaudissements"
      ]
    },
    {
      "emoji": "🙌",
      "tags": [
        "mains",
        "levées"
      ]
    },
    {
      "emoji": "🫶",
      "tags": [
        "mains",
        "forment",
        "cœur"
      ]
    },
    {
      "emoji": "👐",
      "tags": [
        "mains",
        "ouvertes"
      ]
    },
    {
      "emoji": "🤲",
      "tags": [
        "paume",
        "paume",
        "doigts"
      ]
    },
    {
      "emoji": "🤝",
      "tags": [
        "poignée",
        "main"
      ]
    },
    {
      "emoji": "🙏",
      "tags": [
        "mains",
        "prière"
      ]
    },
    {
      "emoji": "✍️",
      "tags": [
        "main",
        "écrit"
      ]
    },
    {
      "emoji": "💅",
      "tags": [
        "vernis",
        "ongles"
      ]
    },
    {
      "emoji": "🤳",
      "tags": [
        "selfie"
      ]
    },
    {
      "emoji": "💪",
      "tags": [
        "biceps",
        "contracté"
      ]
    },
    {
      "emoji": "🦾",
      "tags": [
        "bras",
        "mécanique"
      ]
    },
    {
      "emoji": "🦿",
      "tags": [
        "jambe",
        "mécanique"
      ]
    },
    {
      "emoji": "🦵",
      "tags": [
        "jambe"
      ]
    },
    {
      "emoji": "🦶",
      "tags": [
        "pied"
      ]
    },
    {
      "emoji": "👂",
      "tags": [
        "oreille"
      ]
    },
    {
      "emoji": "🦻",
      "tags": [
        "oreille",
        "appareillée"
      ]
    },
    {
      "emoji": "👃",
      "tags": [
        "nez"
      ]
    },
    {
      "emoji": "🧠",
      "tags": [
        "cerveau"
      ]
    },
    {
      "emoji": "🫀",
      "tags": [
        "cœur"
      ]
    },
    {
      "emoji": "🫁",
      "tags": [
        "poumons"
      ]
    },
    {
      "emoji": "🦷",
      "tags": [
        "dent"
      ]
    },
    {
      "emoji": "🦴",
      "tags": [
        "os"
      ]
    },
    {
      "emoji": "👀",
      "tags": [
        "yeux"
      ]
    },
    {
      "emoji": "👁️",
      "tags": [
        "œil"
      ]
    },
    {
      "emoji": "👅",
      "tags": [
        "langue"
      ]
    },
    {
      "emoji": "👄",
      "tags": [
        "bouche"
      ]
    },
    {
      "emoji": "🫦",
      "tags": [
        "lèvres",
        "mordent"
      ]
    },
    {
      "emoji": "👶",
      "tags": [
        "bébé"
      ]
    },
    {
      "emoji": "🧒",
      "tags": [
        "enfant"
      ]
    },
    {
      "emoji": "👦",
      "tags": [
        "garçon"
      ]
    },
    {
      "emoji": "👧",
      "tags": [
        "fille"
      ]
    },
    {
      "emoji": "🧑",
      "tags": [
        "adulte"
      ]
    },
    {
      "emoji": "👱",
      "tags": [
        "blonde"
      ]
    },
    {
      "emoji": "👨",
      "tags": [
        "homme"
      ]
    },
    {
      "emoji": "🧔",
      "tags": [
        "barbue"
      ]
    },
    {
      "emoji": "🧔‍♂️",
      "tags": [
        "homme",
        "barbu"
      ]
    },
    {
      "emoji": "🧔‍♀️",
      "tags": [
        "femme",
        "barbue"
      ]
    },
    {
      "emoji": "👨‍🦰",
      "tags": [
        "homme",
        "cheveux",
        "roux"
      ]
    },
    {
      "emoji": "👨‍🦱",
      "tags": [
        "homme",
        "cheveux",
        "bouclés"
      ]
    },
    {
      "emoji": "👨‍🦳",
      "tags": [
        "homme",
        "cheveux",
        "blancs"
      ]
    },
    {
      "emoji": "👨‍🦲",
      "tags": [
        "homme",
        "chauve"
      ]
    },
    {
      "emoji": "👩",
      "tags": [
        "femme"
      ]
    },
    {
      "emoji": "👩‍🦰",
      "tags": [
        "femme",
        "cheveux",
        "roux"
      ]
    },
    {
      "emoji": "🧑‍🦰",
      "tags": [
        "adulte",
        "cheveux",
        "roux"
      ]
    },
    {
      "emoji": "👩‍🦱",
      "tags": [
        "femme",
        "cheveux",
        "bouclés"
      ]
    },
    {
      "emoji": "🧑‍🦱",
      "tags": [
        "adulte",
        "cheveux",
        "bouclés"
      ]
    },
    {
      "emoji": "👩‍🦳",
      "tags": [
        "femme",
        "cheveux",
        "blancs"
      ]
    },
    {
      "emoji": "🧑‍🦳",
      "tags": [
        "adulte",
        "cheveux",
        "blancs"
      ]
    },
    {
      "emoji": "👩‍🦲",
      "tags": [
        "femme",
        "chauve"
      ]
    },
    {
      "emoji": "🧑‍🦲",
      "tags": [
        "adulte",
        "chauve"
      ]
    },
    {
      "emoji": "👱‍♀️",
      "tags": [
        "femme",
        "blonde"
      ]
    },
    {
      "emoji": "👱‍♂️",
      "tags": [
        "homme",
        "blond"
      ]
    },
    {
      "emoji": "🧓",
      "tags": [
        "âgée"
      ]
    },
    {
      "emoji": "👴",
      "tags": [
        "homme",
        "âgé"
      ]
    },
    {
      "emoji": "👵",
      "tags": [
        "femme",
        "âgée"
      ]
    },
    {
      "emoji": "🙍",
      "tags": [
        "fronçant",
        "sourcils"
      ]
    },
    {
      "emoji": "🙍‍♂️",
      "tags": [
        "homme",
        "fronçant",
        "sourcils"
      ]
    },
    {
      "emoji": "🙍‍♀️",
      "tags": [
        "femme",
        "fronçant",
        "sourcils"
      ]
    },
    {
      "emoji": "🙎",
      "tags": [
        "boude"
      ]
    },
    {
      "emoji": "🙎‍♂️",
      "tags": [
        "homme",
        "boude"
      ]
    },
    {
      "emoji": "🙎‍♀️",
      "tags": [
        "femme",
        "boude"
      ]
    },
    {
      "emoji": "🙅",
      "tags": [
        "geste",
        "dinterdiction"
      ]
    },
    {
      "emoji": "🙅‍♂️",
      "tags": [
        "homme",
        "geste",
        "dinterdiction"
      ]
    },
    {
      "emoji": "🙅‍♀️",
      "tags": [
        "femme",
        "geste",
        "dinterdiction"
      ]
    },
    {
      "emoji": "🙆",
      "tags": [
        "geste",
        "dacceptation"
      ]
    },
    {
      "emoji": "🙆‍♂️",
      "tags": [
        "homme",
        "geste",
        "dacceptation"
      ]
    },
    {
      "emoji": "🙆‍♀️",
      "tags": [
        "femme",
        "geste",
        "dacceptation"
      ]
    },
    {
      "emoji": "💁",
      "tags": [
        "paume"
      ]
    },
    {
      "emoji": "💁‍♂️",
      "tags": [
        "homme",
        "paume"
      ]
    },
    {
      "emoji": "💁‍♀️",
      "tags": [
        "femme",
        "paume"
      ]
    },
    {
      "emoji": "🙋",
      "tags": [
        "lève",
        "main"
      ]
    },
    {
      "emoji": "🙋‍♂️",
      "tags": [
        "homme",
        "lève",
        "main"
      ]
    },
    {
      "emoji": "🙋‍♀️",
      "tags": [
        "femme",
        "lève",
        "main"
      ]
    },
    {
      "emoji": "🧏",
      "tags": [
        "sourde"
      ]
    },
    {
      "emoji": "🧏‍♂️",
      "tags": [
        "homme",
        "sourd"
      ]
    },
    {
      "emoji": "🧏‍♀️",
      "tags": [
        "femme",
        "sourde"
      ]
    },
    {
      "emoji": "🙇",
      "tags": [
        "sincline"
      ]
    },
    {
      "emoji": "🙇‍♂️",
      "tags": [
        "homme",
        "sincline"
      ]
    },
    {
      "emoji": "🙇‍♀️",
      "tags": [
        "femme",
        "sincline"
      ]
    },
    {
      "emoji": "🤦",
      "tags": [
        "paume",
        "visage"
      ]
    },
    {
      "emoji": "🤦‍♂️",
      "tags": [
        "homme",
        "paume",
        "visage"
      ]
    },
    {
      "emoji": "🤦‍♀️",
      "tags": [
        "femme",
        "paume",
        "visage"
      ]
    },
    {
      "emoji": "🤷",
      "tags": [
        "hausse",
        "épaules"
      ]
    },
    {
      "emoji": "🤷‍♂️",
      "tags": [
        "homme",
        "hausse",
        "épaules"
      ]
    },
    {
      "emoji": "🤷‍♀️",
      "tags": [
        "femme",
        "hausse",
        "épaules"
      ]
    },
    {
      "emoji": "🧑‍⚕️",
      "tags": [
        "professionnel",
        "santé",
        "genres"
      ]
    },
    {
      "emoji": "👨‍⚕️",
      "tags": [
        "professionnel",
        "santé"
      ]
    },
    {
      "emoji": "👩‍⚕️",
      "tags": [
        "professionnelle",
        "santé"
      ]
    },
    {
      "emoji": "🧑‍🎓",
      "tags": [
        "étudiant",
        "genres"
      ]
    },
    {
      "emoji": "👨‍🎓",
      "tags": [
        "étudiant"
      ]
    },
    {
      "emoji": "👩‍🎓",
      "tags": [
        "étudiante"
      ]
    },
    {
      "emoji": "🧑‍🏫",
      "tags": [
        "personnel",
        "enseignant"
      ]
    },
    {
      "emoji": "👨‍🏫",
      "tags": [
        "enseignant"
      ]
    },
    {
      "emoji": "👩‍🏫",
      "tags": [
        "enseignante"
      ]
    },
    {
      "emoji": "🧑‍⚖️",
      "tags": [
        "juge"
      ]
    },
    {
      "emoji": "👨‍⚖️",
      "tags": [
        "juge",
        "homme"
      ]
    },
    {
      "emoji": "👩‍⚖️",
      "tags": [
        "juge",
        "femme"
      ]
    },
    {
      "emoji": "🧑‍🌾",
      "tags": [
        "fermier",
        "genres"
      ]
    },
    {
      "emoji": "👨‍🌾",
      "tags": [
        "fermier"
      ]
    },
    {
      "emoji": "👩‍🌾",
      "tags": [
        "fermière"
      ]
    },
    {
      "emoji": "🧑‍🍳",
      "tags": [
        "cuisinier",
        "genres"
      ]
    },
    {
      "emoji": "👨‍🍳",
      "tags": [
        "cuisinier"
      ]
    },
    {
      "emoji": "👩‍🍳",
      "tags": [
        "cuisinière"
      ]
    },
    {
      "emoji": "🧑‍🔧",
      "tags": [
        "mécanicien",
        "genres"
      ]
    },
    {
      "emoji": "👨‍🔧",
      "tags": [
        "mécanicien"
      ]
    },
    {
      "emoji": "👩‍🔧",
      "tags": [
        "mécanicienne"
      ]
    },
    {
      "emoji": "🧑‍🏭",
      "tags": [
        "ouvrier",
        "genres"
      ]
    },
    {
      "emoji": "👨‍🏭",
      "tags": [
        "ouvrier"
      ]
    },
    {
      "emoji": "👩‍🏭",
      "tags": [
        "ouvrière"
      ]
    },
    {
      "emoji": "🧑‍💼",
      "tags": [
        "employé",
        "bureau",
        "genres"
      ]
    },
    {
      "emoji": "👨‍💼",
      "tags": [
        "employé",
        "bureau"
      ]
    },
    {
      "emoji": "👩‍💼",
      "tags": [
        "employée",
        "bureau"
      ]
    },
    {
      "emoji": "🧑‍🔬",
      "tags": [
        "scientifique"
      ]
    },
    {
      "emoji": "👨‍🔬",
      "tags": [
        "scientifique",
        "homme"
      ]
    },
    {
      "emoji": "👩‍🔬",
      "tags": [
        "scientifique",
        "femme"
      ]
    },
    {
      "emoji": "🧑‍💻",
      "tags": [
        "informaticien",
        "genres"
      ]
    },
    {
      "emoji": "👨‍💻",
      "tags": [
        "informaticien"
      ]
    },
    {
      "emoji": "👩‍💻",
      "tags": [
        "informaticienne"
      ]
    },
    {
      "emoji": "🧑‍🎤",
      "tags": [
        "chanteur",
        "genres"
      ]
    },
    {
      "emoji": "👨‍🎤",
      "tags": [
        "chanteur"
      ]
    },
    {
      "emoji": "👩‍🎤",
      "tags": [
        "chanteuse"
      ]
    },
    {
      "emoji": "🧑‍🎨",
      "tags": [
        "artiste"
      ]
    },
    {
      "emoji": "👨‍🎨",
      "tags": [
        "artiste",
        "homme"
      ]
    },
    {
      "emoji": "👩‍🎨",
      "tags": [
        "artiste",
        "femme"
      ]
    },
    {
      "emoji": "🧑‍✈️",
      "tags": [
        "pilote"
      ]
    },
    {
      "emoji": "👨‍✈️",
      "tags": [
        "pilote",
        "homme"
      ]
    },
    {
      "emoji": "👩‍✈️",
      "tags": [
        "pilote",
        "femme"
      ]
    },
    {
      "emoji": "🧑‍🚀",
      "tags": [
        "astronaute"
      ]
    },
    {
      "emoji": "👨‍🚀",
      "tags": [
        "astronaute",
        "homme"
      ]
    },
    {
      "emoji": "👩‍🚀",
      "tags": [
        "astronaute",
        "femme"
      ]
    },
    {
      "emoji": "🧑‍🚒",
      "tags": [
        "pompier"
      ]
    },
    {
      "emoji": "👨‍🚒",
      "tags": [
        "pompier",
        "homme"
      ]
    },
    {
      "emoji": "👩‍🚒",
      "tags": [
        "pompier",
        "femme"
      ]
    },
    {
      "emoji": "👮",
      "tags": [
        "officier",
        "police"
      ]
    },
    {
      "emoji": "👮‍♂️",
      "tags": [
        "policier"
      ]
    },
    {
      "emoji": "👮‍♀️",
      "tags": [
        "policière"
      ]
    },
    {
      "emoji": "🕵️",
      "tags": [
        "détective"
      ]
    },
    {
      "emoji": "🕵️‍♂️",
      "tags": [
        "détective",
        "homme"
      ]
    },
    {
      "emoji": "🕵️‍♀️",
      "tags": [
        "détective",
        "femme"
      ]
    },
    {
      "emoji": "💂",
      "tags": [
        "garde"
      ]
    },
    {
      "emoji": "💂‍♂️",
      "tags": [
        "garde",
        "homme"
      ]
    },
    {
      "emoji": "💂‍♀️",
      "tags": [
        "garde",
        "femme"
      ]
    },
    {
      "emoji": "🥷",
      "tags": [
        "ninja"
      ]
    },
    {
      "emoji": "👷",
      "tags": [
        "personnel",
        "bâtiment"
      ]
    },
    {
      "emoji": "👷‍♂️",
      "tags": [
        "ouvrier",
        "bâtiment"
      ]
    },
    {
      "emoji": "👷‍♀️",
      "tags": [
        "ouvrière",
        "bâtiment"
      ]
    },
    {
      "emoji": "🫅",
      "tags": [
        "couronne"
      ]
    },
    {
      "emoji": "🤴",
      "tags": [
        "prince"
      ]
    },
    {
      "emoji": "👸",
      "tags": [
        "princesse"
      ]
    },
    {
      "emoji": "👳",
      "tags": [
        "turban"
      ]
    },
    {
      "emoji": "👳‍♂️",
      "tags": [
        "homme",
        "turban"
      ]
    },
    {
      "emoji": "👳‍♀️",
      "tags": [
        "femme",
        "turban"
      ]
    },
    {
      "emoji": "👲",
      "tags": [
        "homme",
        "casquette",
        "chinoise"
      ]
    },
    {
      "emoji": "🧕",
      "tags": [
        "femme",
        "foulard"
      ]
    },
    {
      "emoji": "🤵",
      "tags": [
        "smoking"
      ]
    },
    {
      "emoji": "🤵‍♂️",
      "tags": [
        "homme",
        "smoking"
      ]
    },
    {
      "emoji": "🤵‍♀️",
      "tags": [
        "femme",
        "smoking"
      ]
    },
    {
      "emoji": "👰",
      "tags": [
        "mariée",
        "voile"
      ]
    },
    {
      "emoji": "👰‍♂️",
      "tags": [
        "homme",
        "voile"
      ]
    },
    {
      "emoji": "👰‍♀️",
      "tags": [
        "femme",
        "voile"
      ]
    },
    {
      "emoji": "🤰",
      "tags": [
        "femme",
        "enceinte"
      ]
    },
    {
      "emoji": "🫃",
      "tags": [
        "homme",
        "enceint"
      ]
    },
    {
      "emoji": "🫄",
      "tags": [
        "enceinte"
      ]
    },
    {
      "emoji": "🤱",
      "tags": [
        "allaitement"
      ]
    },
    {
      "emoji": "👩‍🍼",
      "tags": [
        "femme",
        "allaitant",
        "bébé"
      ]
    },
    {
      "emoji": "👨‍🍼",
      "tags": [
        "homme",
        "allaitant",
        "bébé"
      ]
    },
    {
      "emoji": "🧑‍🍼",
      "tags": [
        "allaitant",
        "bébé"
      ]
    },
    {
      "emoji": "👼",
      "tags": [
        "bébé",
        "ange"
      ]
    },
    {
      "emoji": "🎅",
      "tags": [
        "père",
        "noël"
      ]
    },
    {
      "emoji": "🤶",
      "tags": [
        "mère",
        "noël"
      ]
    },
    {
      "emoji": "🧑‍🎄",
      "tags": [
        "santa"
      ]
    },
    {
      "emoji": "🦸",
      "tags": [
        "super",
        "héros"
      ]
    },
    {
      "emoji": "🦸‍♂️",
      "tags": [
        "super",
        "héros",
        "homme"
      ]
    },
    {
      "emoji": "🦸‍♀️",
      "tags": [
        "super",
        "héroïne"
      ]
    },
    {
      "emoji": "🦹",
      "tags": [
        "super",
        "vilain"
      ]
    },
    {
      "emoji": "🦹‍♂️",
      "tags": [
        "super",
        "vilain",
        "homme"
      ]
    },
    {
      "emoji": "🦹‍♀️",
      "tags": [
        "super",
        "vilain",
        "femme"
      ]
    },
    {
      "emoji": "🧙",
      "tags": [
        "mage"
      ]
    },
    {
      "emoji": "🧙‍♂️",
      "tags": [
        "mage",
        "homme"
      ]
    },
    {
      "emoji": "🧙‍♀️",
      "tags": [
        "mage",
        "femme"
      ]
    },
    {
      "emoji": "🧚",
      "tags": [
        "personnage",
        "féérique"
      ]
    },
    {
      "emoji": "🧚‍♂️",
      "tags": [
        "féetaud"
      ]
    },
    {
      "emoji": "🧚‍♀️",
      "tags": [
        "fée"
      ]
    },
    {
      "emoji": "🧛",
      "tags": [
        "vampire"
      ]
    },
    {
      "emoji": "🧛‍♂️",
      "tags": [
        "vampire",
        "homme"
      ]
    },
    {
      "emoji": "🧛‍♀️",
      "tags": [
        "vampire",
        "femme"
      ]
    },
    {
      "emoji": "🧜",
      "tags": [
        "créature",
        "aquatique"
      ]
    },
    {
      "emoji": "🧜‍♂️",
      "tags": [
        "triton"
      ]
    },
    {
      "emoji": "🧜‍♀️",
      "tags": [
        "sirène"
      ]
    },
    {
      "emoji": "🧝",
      "tags": [
        "elfe"
      ]
    },
    {
      "emoji": "🧝‍♂️",
      "tags": [
        "elfe",
        "homme"
      ]
    },
    {
      "emoji": "🧝‍♀️",
      "tags": [
        "elfe",
        "femme"
      ]
    },
    {
      "emoji": "🧞",
      "tags": [
        "génie"
      ]
    },
    {
      "emoji": "🧞‍♂️",
      "tags": [
        "génie",
        "homme"
      ]
    },
    {
      "emoji": "🧞‍♀️",
      "tags": [
        "génie",
        "femme"
      ]
    },
    {
      "emoji": "🧟",
      "tags": [
        "zombie"
      ]
    },
    {
      "emoji": "🧟‍♂️",
      "tags": [
        "zombie",
        "homme"
      ]
    },
    {
      "emoji": "🧟‍♀️",
      "tags": [
        "zombie",
        "femme"
      ]
    },
    {
      "emoji": "🧌",
      "tags": [
        "troll"
      ]
    },
    {
      "emoji": "💆",
      "tags": [
        "masser"
      ]
    },
    {
      "emoji": "💆‍♂️",
      "tags": [
        "homme",
        "masser"
      ]
    },
    {
      "emoji": "💆‍♀️",
      "tags": [
        "femme",
        "masser"
      ]
    },
    {
      "emoji": "💇",
      "tags": [
        "couper",
        "cheveux"
      ]
    },
    {
      "emoji": "💇‍♂️",
      "tags": [
        "homme",
        "couper",
        "cheveux"
      ]
    },
    {
      "emoji": "💇‍♀️",
      "tags": [
        "femme",
        "couper",
        "cheveux"
      ]
    },
    {
      "emoji": "🚶",
      "tags": [
        "marche"
      ]
    },
    {
      "emoji": "🚶‍♂️",
      "tags": [
        "homme",
        "marche"
      ]
    },
    {
      "emoji": "🚶‍♀️",
      "tags": [
        "femme",
        "marche"
      ]
    },
    {
      "emoji": "🚶‍➡️",
      "tags": [
        "marche",
        "face"
      ]
    },
    {
      "emoji": "🚶‍♀️‍➡️",
      "tags": [
        "femme",
        "marchant"
      ]
    },
    {
      "emoji": "🚶‍♂️‍➡️",
      "tags": [
        "homme",
        "marchant",
        "face"
      ]
    },
    {
      "emoji": "🧍",
      "tags": []
    },
    {
      "emoji": "🧍‍♂️",
      "tags": [
        "homme"
      ]
    },
    {
      "emoji": "🧍‍♀️",
      "tags": [
        "femme"
      ]
    },
    {
      "emoji": "🧎",
      "tags": [
        "genoux"
      ]
    },
    {
      "emoji": "🧎‍♂️",
      "tags": [
        "homme",
        "genoux"
      ]
    },
    {
      "emoji": "🧎‍♀️",
      "tags": [
        "femme",
        "genoux"
      ]
    },
    {
      "emoji": "🧎‍➡️",
      "tags": [
        "agenouillée",
        "tournée"
      ]
    },
    {
      "emoji": "🧎‍♀️‍➡️",
      "tags": [
        "femme",
        "agenouillée",
        "face"
      ]
    },
    {
      "emoji": "🧎‍♂️‍➡️",
      "tags": [
        "homme",
        "agenouillé",
        "face"
      ]
    },
    {
      "emoji": "🧑‍🦯",
      "tags": [
        "canne",
        "blanche"
      ]
    },
    {
      "emoji": "🧑‍🦯‍➡️",
      "tags": [
        "canne",
        "blanche",
        "tournée"
      ]
    },
    {
      "emoji": "👨‍🦯",
      "tags": [
        "homme",
        "canne",
        "blanche"
      ]
    },
    {
      "emoji": "👨‍🦯‍➡️",
      "tags": [
        "homme",
        "canne",
        "blanche",
        "tournée"
      ]
    },
    {
      "emoji": "👩‍🦯",
      "tags": [
        "femme",
        "canne",
        "blanche"
      ]
    },
    {
      "emoji": "👩‍🦯‍➡️",
      "tags": [
        "femme",
        "canne",
        "blanche",
        "tournée"
      ]
    },
    {
      "emoji": "🧑‍🦼",
      "tags": [
        "fauteuil",
        "motorisé"
      ]
    },
    {
      "emoji": "🧑‍🦼‍➡️",
      "tags": [
        "fauteuil",
        "roulant",
        "motorisé",
        "face"
      ]
    },
    {
      "emoji": "👨‍🦼",
      "tags": [
        "homme",
        "fauteuil",
        "motorisé"
      ]
    },
    {
      "emoji": "👨‍🦼‍➡️",
      "tags": [
        "homme",
        "fauteuil",
        "roulant",
        "motorisé",
        "face"
      ]
    },
    {
      "emoji": "👩‍🦼",
      "tags": [
        "femme",
        "fauteuil",
        "motorisé"
      ]
    },
    {
      "emoji": "👩‍🦼‍➡️",
      "tags": [
        "femme",
        "fauteuil",
        "roulant",
        "motorisé"
      ]
    },
    {
      "emoji": "🧑‍🦽",
      "tags": [
        "fauteuil",
        "roulant",
        "manuel"
      ]
    },
    {
      "emoji": "🧑‍🦽‍➡️",
      "tags": [
        "fauteuil",
        "roulant",
        "manuel",
        "tournée"
      ]
    },
    {
      "emoji": "👨‍🦽",
      "tags": [
        "homme",
        "fauteuil",
        "roulant",
        "manuel"
      ]
    },
    {
      "emoji": "👨‍🦽‍➡️",
      "tags": [
        "homme",
        "fauteuil",
        "roulant",
        "manuel",
        "face"
      ]
    },
    {
      "emoji": "👩‍🦽",
      "tags": [
        "femme",
        "fauteuil",
        "roulant",
        "manuel"
      ]
    },
    {
      "emoji": "👩‍🦽‍➡️",
      "tags": [
        "femme",
        "fauteuil",
        "roulant",
        "manuel"
      ]
    },
    {
      "emoji": "🏃",
      "tags": [
        "court"
      ]
    },
    {
      "emoji": "🏃‍♂️",
      "tags": [
        "homme",
        "court"
      ]
    },
    {
      "emoji": "🏃‍♀️",
      "tags": [
        "femme",
        "court"
      ]
    },
    {
      "emoji": "🏃‍➡️",
      "tags": [
        "court",
        "face"
      ]
    },
    {
      "emoji": "🏃‍♀️‍➡️",
      "tags": [
        "femme",
        "court",
        "face"
      ]
    },
    {
      "emoji": "🏃‍♂️‍➡️",
      "tags": [
        "homme",
        "court",
        "face"
      ]
    },
    {
      "emoji": "💃",
      "tags": [
        "danseuse"
      ]
    },
    {
      "emoji": "🕺",
      "tags": [
        "danseur"
      ]
    },
    {
      "emoji": "🕴️",
      "tags": [
        "homme",
        "daffaires",
        "lévitation"
      ]
    },
    {
      "emoji": "👯",
      "tags": [
        "oreilles",
        "lapin"
      ]
    },
    {
      "emoji": "👯‍♂️",
      "tags": [
        "hommes",
        "oreilles",
        "lapin"
      ]
    },
    {
      "emoji": "👯‍♀️",
      "tags": [
        "femmes",
        "oreilles",
        "lapin"
      ]
    },
    {
      "emoji": "🧖",
      "tags": [
        "hammam"
      ]
    },
    {
      "emoji": "🧖‍♂️",
      "tags": [
        "homme",
        "hammam"
      ]
    },
    {
      "emoji": "🧖‍♀️",
      "tags": [
        "femme",
        "hammam"
      ]
    },
    {
      "emoji": "🧗",
      "tags": [
        "grimpe"
      ]
    },
    {
      "emoji": "🧗‍♂️",
      "tags": [
        "homme",
        "grimpe"
      ]
    },
    {
      "emoji": "🧗‍♀️",
      "tags": [
        "femme",
        "grimpe"
      ]
    },
    {
      "emoji": "🤺",
      "tags": [
        "escrimeur"
      ]
    },
    {
      "emoji": "🏇",
      "tags": [
        "course",
        "hippique"
      ]
    },
    {
      "emoji": "⛷️",
      "tags": [
        "skieur"
      ]
    },
    {
      "emoji": "🏂",
      "tags": [
        "snowboardeur"
      ]
    },
    {
      "emoji": "🏌️",
      "tags": [
        "joueur",
        "golf"
      ]
    },
    {
      "emoji": "🏌️‍♂️",
      "tags": [
        "golfeur"
      ]
    },
    {
      "emoji": "🏌️‍♀️",
      "tags": [
        "golfeuse"
      ]
    },
    {
      "emoji": "🏄",
      "tags": [
        "surf"
      ]
    },
    {
      "emoji": "🏄‍♂️",
      "tags": [
        "surfeur"
      ]
    },
    {
      "emoji": "🏄‍♀️",
      "tags": [
        "surfeuse"
      ]
    },
    {
      "emoji": "🚣",
      "tags": [
        "ramant",
        "barque"
      ]
    },
    {
      "emoji": "🚣‍♂️",
      "tags": [
        "rameur",
        "barque"
      ]
    },
    {
      "emoji": "🚣‍♀️",
      "tags": [
        "rameuse",
        "barque"
      ]
    },
    {
      "emoji": "🏊",
      "tags": [
        "nageant"
      ]
    },
    {
      "emoji": "🏊‍♂️",
      "tags": [
        "nageur"
      ]
    },
    {
      "emoji": "🏊‍♀️",
      "tags": [
        "nageuse"
      ]
    },
    {
      "emoji": "⛹️",
      "tags": [
        "ballon"
      ]
    },
    {
      "emoji": "⛹️‍♂️",
      "tags": [
        "homme",
        "ballon"
      ]
    },
    {
      "emoji": "⛹️‍♀️",
      "tags": [
        "femme",
        "ballon"
      ]
    },
    {
      "emoji": "🏋️",
      "tags": [
        "haltérophile"
      ]
    },
    {
      "emoji": "🏋️‍♂️",
      "tags": [
        "homme",
        "haltérophile"
      ]
    },
    {
      "emoji": "🏋️‍♀️",
      "tags": [
        "femme",
        "haltérophile"
      ]
    },
    {
      "emoji": "🚴",
      "tags": [
        "cycliste"
      ]
    },
    {
      "emoji": "🚴‍♂️",
      "tags": [
        "cycliste",
        "homme"
      ]
    },
    {
      "emoji": "🚴‍♀️",
      "tags": [
        "cycliste",
        "femme"
      ]
    },
    {
      "emoji": "🚵",
      "tags": [
        "vtt"
      ]
    },
    {
      "emoji": "🚵‍♂️",
      "tags": [
        "homme",
        "vtt"
      ]
    },
    {
      "emoji": "🚵‍♀️",
      "tags": [
        "femme",
        "vtt"
      ]
    },
    {
      "emoji": "🤸",
      "tags": [
        "roue"
      ]
    },
    {
      "emoji": "🤸‍♂️",
      "tags": [
        "homme",
        "roue"
      ]
    },
    {
      "emoji": "🤸‍♀️",
      "tags": [
        "femme",
        "roue"
      ]
    },
    {
      "emoji": "🤼",
      "tags": [
        "lutte"
      ]
    },
    {
      "emoji": "🤼‍♂️",
      "tags": [
        "lutteurs"
      ]
    },
    {
      "emoji": "🤼‍♀️",
      "tags": [
        "lutteuses"
      ]
    },
    {
      "emoji": "🤽",
      "tags": [
        "jouant",
        "water",
        "polo"
      ]
    },
    {
      "emoji": "🤽‍♂️",
      "tags": [
        "joueur",
        "water",
        "polo"
      ]
    },
    {
      "emoji": "🤽‍♀️",
      "tags": [
        "joueuse",
        "water",
        "polo"
      ]
    },
    {
      "emoji": "🤾",
      "tags": [
        "jouant",
        "handball"
      ]
    },
    {
      "emoji": "🤾‍♂️",
      "tags": [
        "handballeur"
      ]
    },
    {
      "emoji": "🤾‍♀️",
      "tags": [
        "handballeuse"
      ]
    },
    {
      "emoji": "🤹",
      "tags": [
        "jongle"
      ]
    },
    {
      "emoji": "🤹‍♂️",
      "tags": [
        "jongleur"
      ]
    },
    {
      "emoji": "🤹‍♀️",
      "tags": [
        "jongleuse"
      ]
    },
    {
      "emoji": "🧘",
      "tags": [
        "posture",
        "lotus"
      ]
    },
    {
      "emoji": "🧘‍♂️",
      "tags": [
        "homme",
        "posture",
        "lotus"
      ]
    },
    {
      "emoji": "🧘‍♀️",
      "tags": [
        "femme",
        "posture",
        "lotus"
      ]
    },
    {
      "emoji": "🛀",
      "tags": [
        "prenant",
        "bain"
      ]
    },
    {
      "emoji": "🛌",
      "tags": [
        "lit"
      ]
    },
    {
      "emoji": "🧑‍🤝‍🧑",
      "tags": [
        "main"
      ]
    },
    {
      "emoji": "👭",
      "tags": [
        "femmes",
        "main"
      ]
    },
    {
      "emoji": "👫",
      "tags": [
        "femme",
        "homme",
        "main"
      ]
    },
    {
      "emoji": "👬",
      "tags": [
        "hommes",
        "main"
      ]
    },
    {
      "emoji": "💏",
      "tags": [
        "bisou"
      ]
    },
    {
      "emoji": "👩‍❤️‍💋‍👨",
      "tags": [
        "bisou",
        "femme",
        "homme"
      ]
    },
    {
      "emoji": "👨‍❤️‍💋‍👨",
      "tags": [
        "bisou",
        "homme",
        "homme"
      ]
    },
    {
      "emoji": "👩‍❤️‍💋‍👩",
      "tags": [
        "bisou",
        "femme",
        "femme"
      ]
    },
    {
      "emoji": "💑",
      "tags": [
        "couple",
        "cœur"
      ]
    },
    {
      "emoji": "👩‍❤️‍👨",
      "tags": [
        "couple",
        "cœur",
        "femme",
        "homme"
      ]
    },
    {
      "emoji": "👨‍❤️‍👨",
      "tags": [
        "couple",
        "cœur",
        "homme",
        "homme"
      ]
    },
    {
      "emoji": "👩‍❤️‍👩",
      "tags": [
        "couple",
        "cœur",
        "femme",
        "femme"
      ]
    },
    {
      "emoji": "👨‍👩‍👦",
      "tags": [
        "famille",
        "homme",
        "femme",
        "garçon"
      ]
    },
    {
      "emoji": "👨‍👩‍👧",
      "tags": [
        "famille",
        "homme",
        "femme",
        "fille"
      ]
    },
    {
      "emoji": "👨‍👩‍👧‍👦",
      "tags": [
        "famille",
        "homme",
        "femme",
        "fille",
        "garçon"
      ]
    },
    {
      "emoji": "👨‍👩‍👦‍👦",
      "tags": [
        "famille",
        "homme",
        "femme",
        "garçon",
        "garçon"
      ]
    },
    {
      "emoji": "👨‍👩‍👧‍👧",
      "tags": [
        "famille",
        "homme",
        "femme",
        "fille",
        "fille"
      ]
    },
    {
      "emoji": "👨‍👨‍👦",
      "tags": [
        "famille",
        "homme",
        "homme",
        "garçon"
      ]
    },
    {
      "emoji": "👨‍👨‍👧",
      "tags": [
        "famille",
        "homme",
        "homme",
        "fille"
      ]
    },
    {
      "emoji": "👨‍👨‍👧‍👦",
      "tags": [
        "famille",
        "homme",
        "homme",
        "fille",
        "garçon"
      ]
    },
    {
      "emoji": "👨‍👨‍👦‍👦",
      "tags": [
        "famille",
        "homme",
        "homme",
        "garçon",
        "garçon"
      ]
    },
    {
      "emoji": "👨‍👨‍👧‍👧",
      "tags": [
        "famille",
        "homme",
        "homme",
        "fille",
        "fille"
      ]
    },
    {
      "emoji": "👩‍👩‍👦",
      "tags": [
        "famille",
        "femme",
        "femme",
        "garçon"
      ]
    },
    {
      "emoji": "👩‍👩‍👧",
      "tags": [
        "famille",
        "femme",
        "femme",
        "fille"
      ]
    },
    {
      "emoji": "👩‍👩‍👧‍👦",
      "tags": [
        "famille",
        "femme",
        "femme",
        "fille",
        "garçon"
      ]
    },
    {
      "emoji": "👩‍👩‍👦‍👦",
      "tags": [
        "famille",
        "femme",
        "femme",
        "garçon",
        "garçon"
      ]
    },
    {
      "emoji": "👩‍👩‍👧‍👧",
      "tags": [
        "famille",
        "femme",
        "femme",
        "fille",
        "fille"
      ]
    },
    {
      "emoji": "👨‍👦",
      "tags": [
        "famille",
        "homme",
        "garçon"
      ]
    },
    {
      "emoji": "👨‍👦‍👦",
      "tags": [
        "famille",
        "homme",
        "garçon",
        "garçon"
      ]
    },
    {
      "emoji": "👨‍👧",
      "tags": [
        "famille",
        "homme",
        "fille"
      ]
    },
    {
      "emoji": "👨‍👧‍👦",
      "tags": [
        "famille",
        "homme",
        "fille",
        "garçon"
      ]
    },
    {
      "emoji": "👨‍👧‍👧",
      "tags": [
        "famille",
        "homme",
        "fille",
        "fille"
      ]
    },
    {
      "emoji": "👩‍👦",
      "tags": [
        "famille",
        "femme",
        "garçon"
      ]
    },
    {
      "emoji": "👩‍👦‍👦",
      "tags": [
        "famille",
        "femme",
        "garçon",
        "garçon"
      ]
    },
    {
      "emoji": "👩‍👧",
      "tags": [
        "famille",
        "femme",
        "fille"
      ]
    },
    {
      "emoji": "👩‍👧‍👦",
      "tags": [
        "famille",
        "femme",
        "fille",
        "garçon"
      ]
    },
    {
      "emoji": "👩‍👧‍👧",
      "tags": [
        "famille",
        "femme",
        "fille",
        "fille"
      ]
    },
    {
      "emoji": "🗣️",
      "tags": [
        "tête"
      ]
    },
    {
      "emoji": "👤",
      "tags": [
        "silhouette",
        "buste"
      ]
    },
    {
      "emoji": "👥",
      "tags": [
        "silhouettes",
        "bustes"
      ]
    },
    {
      "emoji": "🫂",
      "tags": [
        "étreinte"
      ]
    },
    {
      "emoji": "👪",
      "tags": [
        "famille"
      ]
    },
    {
      "emoji": "🧑‍🧑‍🧒",
      "tags": [
        "famille",
        "adulte",
        "adulte",
        "enfant"
      ]
    },
    {
      "emoji": "🧑‍🧑‍🧒‍🧒",
      "tags": [
        "famille",
        "adulte",
        "adulte",
        "enfant",
        "enfant"
      ]
    },
    {
      "emoji": "🧑‍🧒",
      "tags": [
        "famille",
        "adulte",
        "enfant"
      ]
    },
    {
      "emoji": "🧑‍🧒‍🧒",
      "tags": [
        "famille",
        "adulte",
        "enfant",
        "enfant"
      ]
    },
    {
      "emoji": "👣",
      "tags": [
        "traces"
      ]
    },
    {
      "emoji": "🐵",
      "tags": [
        "tête",
        "singe"
      ]
    },
    {
      "emoji": "🐒",
      "tags": [
        "singe"
      ]
    },
    {
      "emoji": "🦍",
      "tags": [
        "gorille"
      ]
    },
    {
      "emoji": "🦧",
      "tags": [
        "orang",
        "outan"
      ]
    },
    {
      "emoji": "🐶",
      "tags": [
        "tête",
        "chien"
      ]
    },
    {
      "emoji": "🐕",
      "tags": [
        "chien"
      ]
    },
    {
      "emoji": "🦮",
      "tags": [
        "chien",
        "guide"
      ]
    },
    {
      "emoji": "🐕‍🦺",
      "tags": [
        "chien",
        "dassistance"
      ]
    },
    {
      "emoji": "🐩",
      "tags": [
        "caniche"
      ]
    },
    {
      "emoji": "🐺",
      "tags": [
        "loup"
      ]
    },
    {
      "emoji": "🦊",
      "tags": [
        "renard"
      ]
    },
    {
      "emoji": "🦝",
      "tags": [
        "raton",
        "laveur"
      ]
    },
    {
      "emoji": "🐱",
      "tags": [
        "tête",
        "chat"
      ]
    },
    {
      "emoji": "🐈",
      "tags": [
        "chat"
      ]
    },
    {
      "emoji": "🐈‍⬛",
      "tags": [
        "chat",
        "noir"
      ]
    },
    {
      "emoji": "🦁",
      "tags": [
        "tête",
        "lion"
      ]
    },
    {
      "emoji": "🐯",
      "tags": [
        "tête",
        "tigre"
      ]
    },
    {
      "emoji": "🐅",
      "tags": [
        "tigre"
      ]
    },
    {
      "emoji": "🐆",
      "tags": [
        "léopard"
      ]
    },
    {
      "emoji": "🐴",
      "tags": [
        "tête",
        "cheval"
      ]
    },
    {
      "emoji": "🫎",
      "tags": [
        "élan"
      ]
    },
    {
      "emoji": "🫏",
      "tags": [
        "âne"
      ]
    },
    {
      "emoji": "🐎",
      "tags": [
        "cheval"
      ]
    },
    {
      "emoji": "🦄",
      "tags": [
        "licorne"
      ]
    },
    {
      "emoji": "🦓",
      "tags": [
        "zèbre"
      ]
    },
    {
      "emoji": "🦌",
      "tags": [
        "cerf"
      ]
    },
    {
      "emoji": "🦬",
      "tags": [
        "bison"
      ]
    },
    {
      "emoji": "🐮",
      "tags": [
        "tête",
        "vache"
      ]
    },
    {
      "emoji": "🐂",
      "tags": [
        "bœuf"
      ]
    },
    {
      "emoji": "🐃",
      "tags": [
        "buffle"
      ]
    },
    {
      "emoji": "🐄",
      "tags": [
        "vache"
      ]
    },
    {
      "emoji": "🐷",
      "tags": [
        "tête",
        "cochon"
      ]
    },
    {
      "emoji": "🐖",
      "tags": [
        "cochon"
      ]
    },
    {
      "emoji": "🐗",
      "tags": [
        "sanglier"
      ]
    },
    {
      "emoji": "🐽",
      "tags": [
        "groin"
      ]
    },
    {
      "emoji": "🐏",
      "tags": [
        "bélier"
      ]
    },
    {
      "emoji": "🐑",
      "tags": [
        "mouton"
      ]
    },
    {
      "emoji": "🐐",
      "tags": [
        "chèvre"
      ]
    },
    {
      "emoji": "🐪",
      "tags": [
        "dromadaire"
      ]
    },
    {
      "emoji": "🐫",
      "tags": [
        "chameau"
      ]
    },
    {
      "emoji": "🦙",
      "tags": [
        "lama"
      ]
    },
    {
      "emoji": "🦒",
      "tags": [
        "girafe"
      ]
    },
    {
      "emoji": "🐘",
      "tags": [
        "éléphant"
      ]
    },
    {
      "emoji": "🦣",
      "tags": [
        "mammouth"
      ]
    },
    {
      "emoji": "🦏",
      "tags": [
        "rhinocéros"
      ]
    },
    {
      "emoji": "🦛",
      "tags": [
        "hippopotame"
      ]
    },
    {
      "emoji": "🐭",
      "tags": [
        "tête",
        "souris"
      ]
    },
    {
      "emoji": "🐁",
      "tags": [
        "souris"
      ]
    },
    {
      "emoji": "🐀",
      "tags": [
        "rat"
      ]
    },
    {
      "emoji": "🐹",
      "tags": [
        "hamster"
      ]
    },
    {
      "emoji": "🐰",
      "tags": [
        "tête",
        "lapin"
      ]
    },
    {
      "emoji": "🐇",
      "tags": [
        "lapin"
      ]
    },
    {
      "emoji": "🐿️",
      "tags": [
        "écureuil"
      ]
    },
    {
      "emoji": "🦫",
      "tags": [
        "castor"
      ]
    },
    {
      "emoji": "🦔",
      "tags": [
        "hérisson"
      ]
    },
    {
      "emoji": "🦇",
      "tags": [
        "chauve",
        "souris"
      ]
    },
    {
      "emoji": "🐻",
      "tags": [
        "ours"
      ]
    },
    {
      "emoji": "🐻‍❄️",
      "tags": [
        "ours",
        "polaire"
      ]
    },
    {
      "emoji": "🐨",
      "tags": [
        "koala"
      ]
    },
    {
      "emoji": "🐼",
      "tags": [
        "panda"
      ]
    },
    {
      "emoji": "🦥",
      "tags": [
        "paresseux"
      ]
    },
    {
      "emoji": "🦦",
      "tags": [
        "loutre"
      ]
    },
    {
      "emoji": "🦨",
      "tags": [
        "mouffette"
      ]
    },
    {
      "emoji": "🦘",
      "tags": [
        "kangourou"
      ]
    },
    {
      "emoji": "🦡",
      "tags": [
        "blaireau"
      ]
    },
    {
      "emoji": "🐾",
      "tags": [
        "empreintes",
        "danimaux"
      ]
    },
    {
      "emoji": "🦃",
      "tags": [
        "dindon"
      ]
    },
    {
      "emoji": "🐔",
      "tags": [
        "poule"
      ]
    },
    {
      "emoji": "🐓",
      "tags": [
        "coq"
      ]
    },
    {
      "emoji": "🐣",
      "tags": [
        "poussin",
        "éclôt"
      ]
    },
    {
      "emoji": "🐤",
      "tags": [
        "poussin"
      ]
    },
    {
      "emoji": "🐥",
      "tags": [
        "poussin",
        "face"
      ]
    },
    {
      "emoji": "🐦",
      "tags": [
        "oiseau"
      ]
    },
    {
      "emoji": "🐧",
      "tags": [
        "pingouin"
      ]
    },
    {
      "emoji": "🕊️",
      "tags": [
        "colombe"
      ]
    },
    {
      "emoji": "🦅",
      "tags": [
        "aigle"
      ]
    },
    {
      "emoji": "🦆",
      "tags": [
        "canard"
      ]
    },
    {
      "emoji": "🦢",
      "tags": [
        "cygne"
      ]
    },
    {
      "emoji": "🦉",
      "tags": [
        "chouette"
      ]
    },
    {
      "emoji": "🦤",
      "tags": [
        "dodo"
      ]
    },
    {
      "emoji": "🪶",
      "tags": [
        "plume"
      ]
    },
    {
      "emoji": "🦩",
      "tags": [
        "flamant"
      ]
    },
    {
      "emoji": "🦚",
      "tags": [
        "paon"
      ]
    },
    {
      "emoji": "🦜",
      "tags": [
        "perroquet"
      ]
    },
    {
      "emoji": "🪽",
      "tags": [
        "aile"
      ]
    },
    {
      "emoji": "🐦‍⬛",
      "tags": [
        "oiseau",
        "noir"
      ]
    },
    {
      "emoji": "🪿",
      "tags": [
        "oie"
      ]
    },
    {
      "emoji": "🐦‍🔥",
      "tags": [
        "phénix"
      ]
    },
    {
      "emoji": "🐸",
      "tags": [
        "grenouille"
      ]
    },
    {
      "emoji": "🐊",
      "tags": [
        "crocodile"
      ]
    },
    {
      "emoji": "🐢",
      "tags": [
        "tortue"
      ]
    },
    {
      "emoji": "🦎",
      "tags": [
        "lézard"
      ]
    },
    {
      "emoji": "🐍",
      "tags": [
        "serpent"
      ]
    },
    {
      "emoji": "🐲",
      "tags": [
        "tête",
        "dragon"
      ]
    },
    {
      "emoji": "🐉",
      "tags": [
        "dragon"
      ]
    },
    {
      "emoji": "🦕",
      "tags": [
        "sauropode"
      ]
    },
    {
      "emoji": "🦖",
      "tags": [
        "rex"
      ]
    },
    {
      "emoji": "🐳",
      "tags": [
        "baleine",
        "soufflant",
        "évent"
      ]
    },
    {
      "emoji": "🐋",
      "tags": [
        "baleine"
      ]
    },
    {
      "emoji": "🐬",
      "tags": [
        "dauphin"
      ]
    },
    {
      "emoji": "🦭",
      "tags": [
        "phoque"
      ]
    },
    {
      "emoji": "🐟",
      "tags": [
        "poisson"
      ]
    },
    {
      "emoji": "🐠",
      "tags": [
        "poisson",
        "tropical"
      ]
    },
    {
      "emoji": "🐡",
      "tags": [
        "poisson",
        "lune"
      ]
    },
    {
      "emoji": "🦈",
      "tags": [
        "requin"
      ]
    },
    {
      "emoji": "🐙",
      "tags": [
        "pieuvre"
      ]
    },
    {
      "emoji": "🐚",
      "tags": [
        "coquille",
        "spirale"
      ]
    },
    {
      "emoji": "🪸",
      "tags": [
        "corail"
      ]
    },
    {
      "emoji": "🪼",
      "tags": [
        "méduse"
      ]
    },
    {
      "emoji": "🐌",
      "tags": [
        "escargot"
      ]
    },
    {
      "emoji": "🦋",
      "tags": [
        "papillon"
      ]
    },
    {
      "emoji": "🐛",
      "tags": [
        "chenille"
      ]
    },
    {
      "emoji": "🐜",
      "tags": [
        "fourmi"
      ]
    },
    {
      "emoji": "🐝",
      "tags": [
        "abeille"
      ]
    },
    {
      "emoji": "🪲",
      "tags": [
        "scarabée"
      ]
    },
    {
      "emoji": "🐞",
      "tags": [
        "coccinelle"
      ]
    },
    {
      "emoji": "🦗",
      "tags": [
        "criquet"
      ]
    },
    {
      "emoji": "🪳",
      "tags": [
        "cafard"
      ]
    },
    {
      "emoji": "🕷️",
      "tags": [
        "araignée"
      ]
    },
    {
      "emoji": "🕸️",
      "tags": [
        "toile",
        "daraignée"
      ]
    },
    {
      "emoji": "🦂",
      "tags": [
        "scorpion"
      ]
    },
    {
      "emoji": "🦟",
      "tags": [
        "moustique"
      ]
    },
    {
      "emoji": "🪰",
      "tags": [
        "mouche"
      ]
    },
    {
      "emoji": "🪱",
      "tags": [
        "lombric"
      ]
    },
    {
      "emoji": "🦠",
      "tags": [
        "microbe"
      ]
    },
    {
      "emoji": "💐",
      "tags": [
        "bouquet"
      ]
    },
    {
      "emoji": "🌸",
      "tags": [
        "fleur",
        "cerisier"
      ]
    },
    {
      "emoji": "💮",
      "tags": [
        "fleur",
        "blanche"
      ]
    },
    {
      "emoji": "🪷",
      "tags": [
        "lotus"
      ]
    },
    {
      "emoji": "🏵️",
      "tags": [
        "rosette"
      ]
    },
    {
      "emoji": "🌹",
      "tags": [
        "rose"
      ]
    },
    {
      "emoji": "🥀",
      "tags": [
        "fleur",
        "fanée"
      ]
    },
    {
      "emoji": "🌺",
      "tags": [
        "hibiscus"
      ]
    },
    {
      "emoji": "🌻",
      "tags": [
        "tournesol"
      ]
    },
    {
      "emoji": "🌼",
      "tags": [
        "bourgeon"
      ]
    },
    {
      "emoji": "🌷",
      "tags": [
        "tulipe"
      ]
    },
    {
      "emoji": "🪻",
      "tags": [
        "jacinthe"
      ]
    },
    {
      "emoji": "🌱",
      "tags": [
        "jeune",
        "pousse"
      ]
    },
    {
      "emoji": "🪴",
      "tags": [
        "plante",
        "pot"
      ]
    },
    {
      "emoji": "🌲",
      "tags": [
        "conifère"
      ]
    },
    {
      "emoji": "🌳",
      "tags": [
        "arbre",
        "feuilles",
        "caduques"
      ]
    },
    {
      "emoji": "🌴",
      "tags": [
        "palmier"
      ]
    },
    {
      "emoji": "🌵",
      "tags": [
        "cactus"
      ]
    },
    {
      "emoji": "🌾",
      "tags": [
        "plant",
        "riz"
      ]
    },
    {
      "emoji": "🌿",
      "tags": [
        "feuille"
      ]
    },
    {
      "emoji": "☘️",
      "tags": [
        "trèfle"
      ]
    },
    {
      "emoji": "🍀",
      "tags": [
        "trèfle",
        "feuilles"
      ]
    },
    {
      "emoji": "🍁",
      "tags": [
        "feuille",
        "dérable"
      ]
    },
    {
      "emoji": "🍂",
      "tags": [
        "feuille",
        "morte"
      ]
    },
    {
      "emoji": "🍃",
      "tags": [
        "feuille",
        "virevoltante"
      ]
    },
    {
      "emoji": "🪹",
      "tags": [
        "nid",
        "vide"
      ]
    },
    {
      "emoji": "🪺",
      "tags": [
        "nid",
        "œufs"
      ]
    },
    {
      "emoji": "🍄",
      "tags": [
        "champignon"
      ]
    },
    {
      "emoji": "🍇",
      "tags": [
        "raisin"
      ]
    },
    {
      "emoji": "🍈",
      "tags": [
        "melon"
      ]
    },
    {
      "emoji": "🍉",
      "tags": [
        "pastèque"
      ]
    },
    {
      "emoji": "🍊",
      "tags": [
        "mandarine"
      ]
    },
    {
      "emoji": "🍋",
      "tags": [
        "citron"
      ]
    },
    {
      "emoji": "🍋‍🟩",
      "tags": [
        "citron",
        "vert"
      ]
    },
    {
      "emoji": "🍌",
      "tags": [
        "banane"
      ]
    },
    {
      "emoji": "🍍",
      "tags": [
        "ananas"
      ]
    },
    {
      "emoji": "🥭",
      "tags": [
        "mangue"
      ]
    },
    {
      "emoji": "🍎",
      "tags": [
        "pomme",
        "rouge"
      ]
    },
    {
      "emoji": "🍏",
      "tags": [
        "pomme",
        "verte"
      ]
    },
    {
      "emoji": "🍐",
      "tags": [
        "poire"
      ]
    },
    {
      "emoji": "🍑",
      "tags": [
        "pêche"
      ]
    },
    {
      "emoji": "🍒",
      "tags": [
        "cerises"
      ]
    },
    {
      "emoji": "🍓",
      "tags": [
        "fraise"
      ]
    },
    {
      "emoji": "🫐",
      "tags": [
        "myrtilles"
      ]
    },
    {
      "emoji": "🥝",
      "tags": [
        "kiwi"
      ]
    },
    {
      "emoji": "🍅",
      "tags": [
        "tomate"
      ]
    },
    {
      "emoji": "🫒",
      "tags": [
        "olive"
      ]
    },
    {
      "emoji": "🥥",
      "tags": [
        "noix",
        "coco"
      ]
    },
    {
      "emoji": "🥑",
      "tags": [
        "avocat"
      ]
    },
    {
      "emoji": "🍆",
      "tags": [
        "aubergine"
      ]
    },
    {
      "emoji": "🥔",
      "tags": [
        "pomme",
        "terre"
      ]
    },
    {
      "emoji": "🥕",
      "tags": [
        "carotte"
      ]
    },
    {
      "emoji": "🌽",
      "tags": [
        "épi",
        "maïs"
      ]
    },
    {
      "emoji": "🌶️",
      "tags": [
        "piment",
        "rouge"
      ]
    },
    {
      "emoji": "🫑",
      "tags": [
        "poivron"
      ]
    },
    {
      "emoji": "🥒",
      "tags": [
        "concombre"
      ]
    },
    {
      "emoji": "🥬",
      "tags": [
        "légume",
        "feuilles",
        "vertes"
      ]
    },
    {
      "emoji": "🥦",
      "tags": [
        "brocoli"
      ]
    },
    {
      "emoji": "🧄",
      "tags": [
        "ail"
      ]
    },
    {
      "emoji": "🧅",
      "tags": [
        "oignon"
      ]
    },
    {
      "emoji": "🥜",
      "tags": [
        "cacahuètes"
      ]
    },
    {
      "emoji": "🫘",
      "tags": [
        "haricots"
      ]
    },
    {
      "emoji": "🌰",
      "tags": [
        "châtaigne"
      ]
    },
    {
      "emoji": "🫚",
      "tags": [
        "racine",
        "gingembre"
      ]
    },
    {
      "emoji": "🫛",
      "tags": [
        "cosse",
        "petits",
        "pois"
      ]
    },
    {
      "emoji": "🍄‍🟫",
      "tags": [
        "champignon",
        "marron"
      ]
    },
    {
      "emoji": "🍞",
      "tags": [
        "pain"
      ]
    },
    {
      "emoji": "🥐",
      "tags": [
        "croissant"
      ]
    },
    {
      "emoji": "🥖",
      "tags": [
        "baguette"
      ]
    },
    {
      "emoji": "🫓",
      "tags": [
        "galette"
      ]
    },
    {
      "emoji": "🥨",
      "tags": [
        "bretzel"
      ]
    },
    {
      "emoji": "🥯",
      "tags": [
        "bagel"
      ]
    },
    {
      "emoji": "🥞",
      "tags": [
        "pancakes"
      ]
    },
    {
      "emoji": "🧇",
      "tags": [
        "gaufre"
      ]
    },
    {
      "emoji": "🧀",
      "tags": [
        "part",
        "fromage"
      ]
    },
    {
      "emoji": "🍖",
      "tags": [
        "viande",
        "os"
      ]
    },
    {
      "emoji": "🍗",
      "tags": [
        "cuisse",
        "poulet"
      ]
    },
    {
      "emoji": "🥩",
      "tags": [
        "morceau",
        "viande"
      ]
    },
    {
      "emoji": "🥓",
      "tags": [
        "lard"
      ]
    },
    {
      "emoji": "🍔",
      "tags": [
        "hamburger"
      ]
    },
    {
      "emoji": "🍟",
      "tags": [
        "frites"
      ]
    },
    {
      "emoji": "🍕",
      "tags": [
        "pizza"
      ]
    },
    {
      "emoji": "🌭",
      "tags": [
        "hot",
        "dog"
      ]
    },
    {
      "emoji": "🥪",
      "tags": [
        "sandwich"
      ]
    },
    {
      "emoji": "🌮",
      "tags": [
        "taco"
      ]
    },
    {
      "emoji": "🌯",
      "tags": [
        "burrito"
      ]
    },
    {
      "emoji": "🫔",
      "tags": [
        "tamal"
      ]
    },
    {
      "emoji": "🥙",
      "tags": [
        "kebab"
      ]
    },
    {
      "emoji": "🧆",
      "tags": [
        "falafels"
      ]
    },
    {
      "emoji": "🥚",
      "tags": [
        "œuf"
      ]
    },
    {
      "emoji": "🍳",
      "tags": [
        "œuf",
        "plat"
      ]
    },
    {
      "emoji": "🥘",
      "tags": [
        "plat",
        "mitonné"
      ]
    },
    {
      "emoji": "🍲",
      "tags": [
        "marmite"
      ]
    },
    {
      "emoji": "🫕",
      "tags": [
        "fondue"
      ]
    },
    {
      "emoji": "🥣",
      "tags": [
        "bol",
        "cuillère"
      ]
    },
    {
      "emoji": "🥗",
      "tags": [
        "salade",
        "verte"
      ]
    },
    {
      "emoji": "🍿",
      "tags": [
        "pop",
        "corn"
      ]
    },
    {
      "emoji": "🧈",
      "tags": [
        "beurre"
      ]
    },
    {
      "emoji": "🧂",
      "tags": [
        "sel"
      ]
    },
    {
      "emoji": "🥫",
      "tags": [
        "aliments",
        "conserve"
      ]
    },
    {
      "emoji": "🍱",
      "tags": [
        "boîte",
        "déjeuner"
      ]
    },
    {
      "emoji": "🍘",
      "tags": [
        "galette",
        "riz"
      ]
    },
    {
      "emoji": "🍙",
      "tags": [
        "boulette",
        "riz"
      ]
    },
    {
      "emoji": "🍚",
      "tags": [
        "bol",
        "riz"
      ]
    },
    {
      "emoji": "🍛",
      "tags": [
        "riz",
        "curry"
      ]
    },
    {
      "emoji": "🍜",
      "tags": [
        "bol",
        "fumant"
      ]
    },
    {
      "emoji": "🍝",
      "tags": [
        "spaghetti"
      ]
    },
    {
      "emoji": "🍠",
      "tags": [
        "patate",
        "douce"
      ]
    },
    {
      "emoji": "🍢",
      "tags": [
        "brochette",
        "poisson"
      ]
    },
    {
      "emoji": "🍣",
      "tags": [
        "sushi"
      ]
    },
    {
      "emoji": "🍤",
      "tags": [
        "beignet",
        "crevette"
      ]
    },
    {
      "emoji": "🍥",
      "tags": [
        "croquette",
        "poisson"
      ]
    },
    {
      "emoji": "🥮",
      "tags": [
        "gâteau",
        "lune"
      ]
    },
    {
      "emoji": "🍡",
      "tags": [
        "brochette",
        "bonbons"
      ]
    },
    {
      "emoji": "🥟",
      "tags": [
        "boulette",
        "pâte"
      ]
    },
    {
      "emoji": "🥠",
      "tags": [
        "biscuit",
        "chinois"
      ]
    },
    {
      "emoji": "🥡",
      "tags": [
        "boîte",
        "emporter"
      ]
    },
    {
      "emoji": "🦀",
      "tags": [
        "crabe"
      ]
    },
    {
      "emoji": "🦞",
      "tags": [
        "homard"
      ]
    },
    {
      "emoji": "🦐",
      "tags": [
        "crevette"
      ]
    },
    {
      "emoji": "🦑",
      "tags": [
        "calamar"
      ]
    },
    {
      "emoji": "🦪",
      "tags": [
        "huître"
      ]
    },
    {
      "emoji": "🍦",
      "tags": [
        "glace",
        "italienne"
      ]
    },
    {
      "emoji": "🍧",
      "tags": [
        "granité"
      ]
    },
    {
      "emoji": "🍨",
      "tags": [
        "glace"
      ]
    },
    {
      "emoji": "🍩",
      "tags": [
        "doughnut"
      ]
    },
    {
      "emoji": "🍪",
      "tags": [
        "cookie"
      ]
    },
    {
      "emoji": "🎂",
      "tags": [
        "gâteau",
        "danniversaire"
      ]
    },
    {
      "emoji": "🍰",
      "tags": [
        "gâteau",
        "sablé"
      ]
    },
    {
      "emoji": "🧁",
      "tags": [
        "cupcake"
      ]
    },
    {
      "emoji": "🥧",
      "tags": [
        "tarte"
      ]
    },
    {
      "emoji": "🍫",
      "tags": [
        "barre",
        "chocolatée"
      ]
    },
    {
      "emoji": "🍬",
      "tags": [
        "bonbon"
      ]
    },
    {
      "emoji": "🍭",
      "tags": [
        "sucette"
      ]
    },
    {
      "emoji": "🍮",
      "tags": [
        "crème",
        "renversée"
      ]
    },
    {
      "emoji": "🍯",
      "tags": [
        "pot",
        "miel"
      ]
    },
    {
      "emoji": "🍼",
      "tags": [
        "biberon"
      ]
    },
    {
      "emoji": "🥛",
      "tags": [
        "verre",
        "lait"
      ]
    },
    {
      "emoji": "☕",
      "tags": [
        "boisson",
        "chaude"
      ]
    },
    {
      "emoji": "🫖",
      "tags": [
        "théière"
      ]
    },
    {
      "emoji": "🍵",
      "tags": [
        "tasse"
      ]
    },
    {
      "emoji": "🍶",
      "tags": [
        "saké"
      ]
    },
    {
      "emoji": "🍾",
      "tags": [
        "bouteille",
        "champagne"
      ]
    },
    {
      "emoji": "🍷",
      "tags": [
        "verre",
        "vin"
      ]
    },
    {
      "emoji": "🍸",
      "tags": [
        "cocktail"
      ]
    },
    {
      "emoji": "🍹",
      "tags": [
        "cocktail",
        "tropical"
      ]
    },
    {
      "emoji": "🍺",
      "tags": [
        "chope"
      ]
    },
    {
      "emoji": "🍻",
      "tags": [
        "chopes",
        "bière"
      ]
    },
    {
      "emoji": "🥂",
      "tags": [
        "trinquer"
      ]
    },
    {
      "emoji": "🥃",
      "tags": [
        "verre",
        "tumbler"
      ]
    },
    {
      "emoji": "🫗",
      "tags": [
        "verser",
        "liquide"
      ]
    },
    {
      "emoji": "🥤",
      "tags": [
        "gobelet",
        "paille"
      ]
    },
    {
      "emoji": "🧋",
      "tags": [
        "thé",
        "perles"
      ]
    },
    {
      "emoji": "🧃",
      "tags": [
        "briquette",
        "jus"
      ]
    },
    {
      "emoji": "🧉",
      "tags": [
        "maté"
      ]
    },
    {
      "emoji": "🧊",
      "tags": [
        "glaçon"
      ]
    },
    {
      "emoji": "🥢",
      "tags": [
        "baguettes"
      ]
    },
    {
      "emoji": "🍽️",
      "tags": [
        "fourchette",
        "couteau",
        "assiette"
      ]
    },
    {
      "emoji": "🍴",
      "tags": [
        "fourchette",
        "couteau"
      ]
    },
    {
      "emoji": "🥄",
      "tags": [
        "cuillère"
      ]
    },
    {
      "emoji": "🔪",
      "tags": [
        "couteau",
        "cuisine"
      ]
    },
    {
      "emoji": "🫙",
      "tags": [
        "bocal"
      ]
    },
    {
      "emoji": "🏺",
      "tags": [
        "amphore"
      ]
    },
    {
      "emoji": "🌍",
      "tags": [
        "globe",
        "tourné",
        "lafrique",
        "leurope"
      ]
    },
    {
      "emoji": "🌎",
      "tags": [
        "globe",
        "tourné",
        "amériques"
      ]
    },
    {
      "emoji": "🌏",
      "tags": [
        "globe",
        "tourné",
        "lasie",
        "laustralie"
      ]
    },
    {
      "emoji": "🌐",
      "tags": [
        "globe",
        "méridiens"
      ]
    },
    {
      "emoji": "🗺️",
      "tags": [
        "carte",
        "monde"
      ]
    },
    {
      "emoji": "🗾",
      "tags": [
        "carte",
        "japon"
      ]
    },
    {
      "emoji": "🧭",
      "tags": [
        "boussole"
      ]
    },
    {
      "emoji": "🏔️",
      "tags": [
        "montagne",
        "enneigée"
      ]
    },
    {
      "emoji": "⛰️",
      "tags": [
        "montagne"
      ]
    },
    {
      "emoji": "🌋",
      "tags": [
        "volcan"
      ]
    },
    {
      "emoji": "🗻",
      "tags": [
        "mont",
        "fuji"
      ]
    },
    {
      "emoji": "🏕️",
      "tags": [
        "camping"
      ]
    },
    {
      "emoji": "🏖️",
      "tags": [
        "plage",
        "parasol"
      ]
    },
    {
      "emoji": "🏜️",
      "tags": [
        "désert"
      ]
    },
    {
      "emoji": "🏝️",
      "tags": [
        "île",
        "déserte"
      ]
    },
    {
      "emoji": "🏞️",
      "tags": [
        "parc",
        "national"
      ]
    },
    {
      "emoji": "🏟️",
      "tags": [
        "stade"
      ]
    },
    {
      "emoji": "🏛️",
      "tags": [
        "monument",
        "classique"
      ]
    },
    {
      "emoji": "🏗️",
      "tags": [
        "construction",
        "dun",
        "bâtiment"
      ]
    },
    {
      "emoji": "🧱",
      "tags": [
        "brique"
      ]
    },
    {
      "emoji": "🪨",
      "tags": [
        "rocher"
      ]
    },
    {
      "emoji": "🪵",
      "tags": [
        "bois"
      ]
    },
    {
      "emoji": "🛖",
      "tags": [
        "hutte"
      ]
    },
    {
      "emoji": "🏘️",
      "tags": [
        "maisons"
      ]
    },
    {
      "emoji": "🏚️",
      "tags": [
        "maison",
        "abandonnée"
      ]
    },
    {
      "emoji": "🏠",
      "tags": [
        "maison"
      ]
    },
    {
      "emoji": "🏡",
      "tags": [
        "maison",
        "jardin"
      ]
    },
    {
      "emoji": "🏢",
      "tags": [
        "immeuble",
        "bureaux"
      ]
    },
    {
      "emoji": "🏣",
      "tags": [
        "bureau",
        "poste",
        "japonais"
      ]
    },
    {
      "emoji": "🏤",
      "tags": [
        "bureau",
        "poste"
      ]
    },
    {
      "emoji": "🏥",
      "tags": [
        "hôpital"
      ]
    },
    {
      "emoji": "🏦",
      "tags": [
        "banque"
      ]
    },
    {
      "emoji": "🏨",
      "tags": [
        "hôtel"
      ]
    },
    {
      "emoji": "🏩",
      "tags": [
        "love",
        "hotel"
      ]
    },
    {
      "emoji": "🏪",
      "tags": [
        "supérette"
      ]
    },
    {
      "emoji": "🏫",
      "tags": [
        "école"
      ]
    },
    {
      "emoji": "🏬",
      "tags": [
        "grand",
        "magasin"
      ]
    },
    {
      "emoji": "🏭",
      "tags": [
        "usine"
      ]
    },
    {
      "emoji": "🏯",
      "tags": [
        "château",
        "japonais"
      ]
    },
    {
      "emoji": "🏰",
      "tags": [
        "château"
      ]
    },
    {
      "emoji": "💒",
      "tags": [
        "mariage"
      ]
    },
    {
      "emoji": "🗼",
      "tags": [
        "tour",
        "tokyo"
      ]
    },
    {
      "emoji": "🗽",
      "tags": [
        "statue",
        "liberté"
      ]
    },
    {
      "emoji": "⛪",
      "tags": [
        "église"
      ]
    },
    {
      "emoji": "🕌",
      "tags": [
        "mosquée"
      ]
    },
    {
      "emoji": "🛕",
      "tags": [
        "temple",
        "hindou"
      ]
    },
    {
      "emoji": "🕍",
      "tags": [
        "synagogue"
      ]
    },
    {
      "emoji": "⛩️",
      "tags": [
        "sanctuaire",
        "shinto"
      ]
    },
    {
      "emoji": "🕋",
      "tags": [
        "kaaba"
      ]
    },
    {
      "emoji": "⛲",
      "tags": [
        "fontaine"
      ]
    },
    {
      "emoji": "⛺",
      "tags": []
    },
    {
      "emoji": "🌁",
      "tags": [
        "brume"
      ]
    },
    {
      "emoji": "🌃",
      "tags": [
        "nuit",
        "étoilée"
      ]
    },
    {
      "emoji": "🏙️",
      "tags": [
        "ville"
      ]
    },
    {
      "emoji": "🌄",
      "tags": [
        "soleil",
        "levant",
        "montagnes"
      ]
    },
    {
      "emoji": "🌅",
      "tags": [
        "soleil",
        "levant"
      ]
    },
    {
      "emoji": "🌆",
      "tags": [
        "ville",
        "crépuscule"
      ]
    },
    {
      "emoji": "🌇",
      "tags": [
        "coucher",
        "soleil"
      ]
    },
    {
      "emoji": "🌉",
      "tags": [
        "pont",
        "nuit"
      ]
    },
    {
      "emoji": "♨️",
      "tags": [
        "sources",
        "chaudes"
      ]
    },
    {
      "emoji": "🎠",
      "tags": [
        "cheval",
        "manège"
      ]
    },
    {
      "emoji": "🛝",
      "tags": [
        "toboggan"
      ]
    },
    {
      "emoji": "🎡",
      "tags": [
        "grande",
        "roue"
      ]
    },
    {
      "emoji": "🎢",
      "tags": [
        "montagnes",
        "russes"
      ]
    },
    {
      "emoji": "💈",
      "tags": [
        "enseigne",
        "barbier"
      ]
    },
    {
      "emoji": "🎪",
      "tags": [
        "chapiteau"
      ]
    },
    {
      "emoji": "🚂",
      "tags": [
        "locomotive"
      ]
    },
    {
      "emoji": "🚃",
      "tags": [
        "wagon"
      ]
    },
    {
      "emoji": "🚄",
      "tags": [
        "tgv"
      ]
    },
    {
      "emoji": "🚅",
      "tags": [
        "train",
        "grande",
        "vitesse"
      ]
    },
    {
      "emoji": "🚆",
      "tags": [
        "train"
      ]
    },
    {
      "emoji": "🚇",
      "tags": [
        "métro"
      ]
    },
    {
      "emoji": "🚈",
      "tags": [
        "métro",
        "léger"
      ]
    },
    {
      "emoji": "🚉",
      "tags": [
        "gare"
      ]
    },
    {
      "emoji": "🚊",
      "tags": [
        "tramway"
      ]
    },
    {
      "emoji": "🚝",
      "tags": [
        "monorail"
      ]
    },
    {
      "emoji": "🚞",
      "tags": [
        "train",
        "montagne"
      ]
    },
    {
      "emoji": "🚋",
      "tags": [
        "wagon",
        "tramway"
      ]
    },
    {
      "emoji": "🚌",
      "tags": [
        "bus"
      ]
    },
    {
      "emoji": "🚍",
      "tags": [
        "bus",
        "face"
      ]
    },
    {
      "emoji": "🚎",
      "tags": [
        "trolleybus"
      ]
    },
    {
      "emoji": "🚐",
      "tags": [
        "minibus"
      ]
    },
    {
      "emoji": "🚑",
      "tags": [
        "ambulance"
      ]
    },
    {
      "emoji": "🚒",
      "tags": [
        "camion",
        "pompier"
      ]
    },
    {
      "emoji": "🚓",
      "tags": [
        "voiture",
        "police"
      ]
    },
    {
      "emoji": "🚔",
      "tags": [
        "voiture",
        "police",
        "face"
      ]
    },
    {
      "emoji": "🚕",
      "tags": [
        "taxi"
      ]
    },
    {
      "emoji": "🚖",
      "tags": [
        "taxi",
        "face"
      ]
    },
    {
      "emoji": "🚗",
      "tags": [
        "voiture"
      ]
    },
    {
      "emoji": "🚘",
      "tags": [
        "voiture",
        "face"
      ]
    },
    {
      "emoji": "🚙",
      "tags": [
        "véhicule",
        "utilitaire",
        "sport"
      ]
    },
    {
      "emoji": "🛻",
      "tags": [
        "pick",
        "up"
      ]
    },
    {
      "emoji": "🚚",
      "tags": [
        "camion",
        "livraison"
      ]
    },
    {
      "emoji": "🚛",
      "tags": [
        "semi",
        "remorque"
      ]
    },
    {
      "emoji": "🚜",
      "tags": [
        "tracteur"
      ]
    },
    {
      "emoji": "🏎️",
      "tags": [
        "voiture",
        "course"
      ]
    },
    {
      "emoji": "🏍️",
      "tags": [
        "moto"
      ]
    },
    {
      "emoji": "🛵",
      "tags": [
        "scooter"
      ]
    },
    {
      "emoji": "🦽",
      "tags": [
        "fauteuil",
        "roulant",
        "manuel"
      ]
    },
    {
      "emoji": "🦼",
      "tags": [
        "fauteuil",
        "motorisé"
      ]
    },
    {
      "emoji": "🛺",
      "tags": [
        "tuk",
        "tuk"
      ]
    },
    {
      "emoji": "🚲",
      "tags": [
        "vélo"
      ]
    },
    {
      "emoji": "🛴",
      "tags": [
        "trottinette"
      ]
    },
    {
      "emoji": "🛹",
      "tags": [
        "planche",
        "roulettes"
      ]
    },
    {
      "emoji": "🛼",
      "tags": [
        "patin",
        "roulettes"
      ]
    },
    {
      "emoji": "🚏",
      "tags": [
        "arrêt",
        "bus"
      ]
    },
    {
      "emoji": "🛣️",
      "tags": [
        "autoroute"
      ]
    },
    {
      "emoji": "🛤️",
      "tags": [
        "ferrée"
      ]
    },
    {
      "emoji": "🛢️",
      "tags": [
        "baril",
        "pétrole"
      ]
    },
    {
      "emoji": "⛽",
      "tags": [
        "pompe",
        "essence"
      ]
    },
    {
      "emoji": "🛞",
      "tags": [
        "roue"
      ]
    },
    {
      "emoji": "🚨",
      "tags": [
        "gyrophare"
      ]
    },
    {
      "emoji": "🚥",
      "tags": [
        "feu",
        "tricolore",
        "horizontal"
      ]
    },
    {
      "emoji": "🚦",
      "tags": [
        "feu",
        "tricolore",
        "vertical"
      ]
    },
    {
      "emoji": "🛑",
      "tags": []
    },
    {
      "emoji": "🚧",
      "tags": [
        "travaux"
      ]
    },
    {
      "emoji": "⚓",
      "tags": [
        "ancre"
      ]
    },
    {
      "emoji": "🛟",
      "tags": [
        "bouée",
        "sauvetage"
      ]
    },
    {
      "emoji": "⛵",
      "tags": [
        "voilier"
      ]
    },
    {
      "emoji": "🛶",
      "tags": [
        "canoë"
      ]
    },
    {
      "emoji": "🚤",
      "tags": [
        "bord"
      ]
    },
    {
      "emoji": "🛳️",
      "tags": [
        "paquebot"
      ]
    },
    {
      "emoji": "⛴️",
      "tags": [
        "ferry"
      ]
    },
    {
      "emoji": "🛥️",
      "tags": [
        "bateau",
        "moteur"
      ]
    },
    {
      "emoji": "🚢",
      "tags": [
        "navire"
      ]
    },
    {
      "emoji": "✈️",
      "tags": [
        "avion"
      ]
    },
    {
      "emoji": "🛩️",
      "tags": [
        "petit",
        "avion"
      ]
    },
    {
      "emoji": "🛫",
      "tags": [
        "avion",
        "décollage"
      ]
    },
    {
      "emoji": "🛬",
      "tags": [
        "avion",
        "latterrissage"
      ]
    },
    {
      "emoji": "🪂",
      "tags": [
        "parachute"
      ]
    },
    {
      "emoji": "💺",
      "tags": [
        "siège"
      ]
    },
    {
      "emoji": "🚁",
      "tags": [
        "hélicoptère"
      ]
    },
    {
      "emoji": "🚟",
      "tags": [
        "train",
        "suspendu"
      ]
    },
    {
      "emoji": "🚠",
      "tags": [
        "téléphérique"
      ]
    },
    {
      "emoji": "🚡",
      "tags": [
        "tramway",
        "aérien"
      ]
    },
    {
      "emoji": "🛰️",
      "tags": [
        "satellite"
      ]
    },
    {
      "emoji": "🚀",
      "tags": [
        "fusée"
      ]
    },
    {
      "emoji": "🛸",
      "tags": [
        "soucoupe",
        "volante"
      ]
    },
    {
      "emoji": "🛎️",
      "tags": [
        "cloche",
        "comptoir"
      ]
    },
    {
      "emoji": "🧳",
      "tags": [
        "bagage"
      ]
    },
    {
      "emoji": "⌛",
      "tags": [
        "sablier"
      ]
    },
    {
      "emoji": "⏳",
      "tags": [
        "sablier",
        "sable",
        "coule"
      ]
    },
    {
      "emoji": "⌚",
      "tags": [
        "montre"
      ]
    },
    {
      "emoji": "⏰",
      "tags": [
        "réveil"
      ]
    },
    {
      "emoji": "⏱️",
      "tags": [
        "chronomètre"
      ]
    },
    {
      "emoji": "⏲️",
      "tags": [
        "horloge"
      ]
    },
    {
      "emoji": "🕰️",
      "tags": [
        "pendule"
      ]
    },
    {
      "emoji": "🕛",
      "tags": [
        "midiminuit"
      ]
    },
    {
      "emoji": "🕧",
      "tags": [
        "midiminuit",
        "demie"
      ]
    },
    {
      "emoji": "🕐",
      "tags": [
        "heure"
      ]
    },
    {
      "emoji": "🕜",
      "tags": [
        "heure",
        "demie"
      ]
    },
    {
      "emoji": "🕑",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕝",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🕒",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕞",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🕓",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕟",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🕔",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕠",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🕕",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕡",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🕖",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕢",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🕗",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕣",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🕘",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕤",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🕙",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕥",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🕚",
      "tags": [
        "heures"
      ]
    },
    {
      "emoji": "🕦",
      "tags": [
        "heures",
        "demie"
      ]
    },
    {
      "emoji": "🌑",
      "tags": [
        "nouvelle",
        "lune"
      ]
    },
    {
      "emoji": "🌒",
      "tags": [
        "lune",
        "croissante"
      ]
    },
    {
      "emoji": "🌓",
      "tags": [
        "quartier",
        "lune"
      ]
    },
    {
      "emoji": "🌔",
      "tags": [
        "lune",
        "gibbeuse",
        "croissante"
      ]
    },
    {
      "emoji": "🌕",
      "tags": [
        "pleine",
        "lune"
      ]
    },
    {
      "emoji": "🌖",
      "tags": [
        "lune",
        "gibbeuse",
        "décroissante"
      ]
    },
    {
      "emoji": "🌗",
      "tags": [
        "quartier",
        "lune"
      ]
    },
    {
      "emoji": "🌘",
      "tags": [
        "lune",
        "décroissante"
      ]
    },
    {
      "emoji": "🌙",
      "tags": [
        "croissant",
        "lune"
      ]
    },
    {
      "emoji": "🌚",
      "tags": [
        "nouvelle",
        "lune",
        "visage"
      ]
    },
    {
      "emoji": "🌛",
      "tags": [
        "quartier",
        "lune",
        "visage"
      ]
    },
    {
      "emoji": "🌜",
      "tags": [
        "quartier",
        "lune",
        "visage"
      ]
    },
    {
      "emoji": "🌡️",
      "tags": [
        "thermomètre"
      ]
    },
    {
      "emoji": "☀️",
      "tags": [
        "soleil"
      ]
    },
    {
      "emoji": "🌝",
      "tags": [
        "pleine",
        "lune",
        "visage"
      ]
    },
    {
      "emoji": "🌞",
      "tags": [
        "soleil",
        "visage"
      ]
    },
    {
      "emoji": "🪐",
      "tags": [
        "planète",
        "anneaux"
      ]
    },
    {
      "emoji": "⭐",
      "tags": [
        "étoile"
      ]
    },
    {
      "emoji": "🌟",
      "tags": [
        "étoile",
        "brillante"
      ]
    },
    {
      "emoji": "🌠",
      "tags": [
        "étoile",
        "filante"
      ]
    },
    {
      "emoji": "🌌",
      "tags": [
        "lactée"
      ]
    },
    {
      "emoji": "☁️",
      "tags": [
        "nuage"
      ]
    },
    {
      "emoji": "⛅",
      "tags": [
        "soleil",
        "nuages"
      ]
    },
    {
      "emoji": "⛈️",
      "tags": [
        "nuage",
        "éclair",
        "pluie"
      ]
    },
    {
      "emoji": "🌤️",
      "tags": [
        "soleil",
        "petit",
        "nuage"
      ]
    },
    {
      "emoji": "🌥️",
      "tags": [
        "soleil",
        "gros",
        "nuage"
      ]
    },
    {
      "emoji": "🌦️",
      "tags": [
        "soleil",
        "nuage",
        "pluie"
      ]
    },
    {
      "emoji": "🌧️",
      "tags": [
        "nuage",
        "pluie"
      ]
    },
    {
      "emoji": "🌨️",
      "tags": [
        "nuage",
        "neige"
      ]
    },
    {
      "emoji": "🌩️",
      "tags": [
        "nuage",
        "éclair"
      ]
    },
    {
      "emoji": "🌪️",
      "tags": [
        "tornade"
      ]
    },
    {
      "emoji": "🌫️",
      "tags": [
        "brouillard"
      ]
    },
    {
      "emoji": "🌬️",
      "tags": [
        "vent",
        "visage"
      ]
    },
    {
      "emoji": "🌀",
      "tags": [
        "cyclone"
      ]
    },
    {
      "emoji": "🌈",
      "tags": [
        "arc",
        "ciel"
      ]
    },
    {
      "emoji": "🌂",
      "tags": [
        "parapluie",
        "fermé"
      ]
    },
    {
      "emoji": "☂️",
      "tags": [
        "parapluie"
      ]
    },
    {
      "emoji": "☔",
      "tags": [
        "parapluie",
        "gouttes",
        "pluie"
      ]
    },
    {
      "emoji": "⛱️",
      "tags": [
        "parasol",
        "sol"
      ]
    },
    {
      "emoji": "⚡",
      "tags": [
        "haute",
        "tension"
      ]
    },
    {
      "emoji": "❄️",
      "tags": [
        "flocon"
      ]
    },
    {
      "emoji": "☃️",
      "tags": [
        "bonhomme",
        "neige"
      ]
    },
    {
      "emoji": "⛄",
      "tags": [
        "bonhomme",
        "neige",
        "neige"
      ]
    },
    {
      "emoji": "☄️",
      "tags": [
        "comète"
      ]
    },
    {
      "emoji": "🔥",
      "tags": [
        "feu"
      ]
    },
    {
      "emoji": "💧",
      "tags": [
        "goutte",
        "deau"
      ]
    },
    {
      "emoji": "🌊",
      "tags": [
        "vague"
      ]
    },
    {
      "emoji": "🎃",
      "tags": [
        "citrouille"
      ]
    },
    {
      "emoji": "🎄",
      "tags": [
        "sapin",
        "noël"
      ]
    },
    {
      "emoji": "🎆",
      "tags": [
        "feu",
        "dartifice"
      ]
    },
    {
      "emoji": "🎇",
      "tags": [
        "cierge",
        "magique"
      ]
    },
    {
      "emoji": "🧨",
      "tags": [
        "pétard"
      ]
    },
    {
      "emoji": "✨",
      "tags": [
        "étincelles"
      ]
    },
    {
      "emoji": "🎈",
      "tags": [
        "ballon",
        "gonflable"
      ]
    },
    {
      "emoji": "🎉",
      "tags": [
        "cotillons"
      ]
    },
    {
      "emoji": "🎊",
      "tags": [
        "confettis"
      ]
    },
    {
      "emoji": "🎋",
      "tags": [
        "arbre",
        "vœux"
      ]
    },
    {
      "emoji": "🎍",
      "tags": [
        "bambou",
        "décoratif"
      ]
    },
    {
      "emoji": "🎎",
      "tags": [
        "poupées",
        "japonaises"
      ]
    },
    {
      "emoji": "🎏",
      "tags": [
        "koinobori"
      ]
    },
    {
      "emoji": "🎐",
      "tags": [
        "carillon",
        "éolien"
      ]
    },
    {
      "emoji": "🎑",
      "tags": [
        "cérémonie",
        "lune"
      ]
    },
    {
      "emoji": "🧧",
      "tags": [
        "enveloppe",
        "rouge"
      ]
    },
    {
      "emoji": "🎀",
      "tags": [
        "ruban"
      ]
    },
    {
      "emoji": "🎁",
      "tags": [
        "cadeau"
      ]
    },
    {
      "emoji": "🎗️",
      "tags": [
        "ruban",
        "mémoire"
      ]
    },
    {
      "emoji": "🎟️",
      "tags": [
        "billet",
        "dentrée"
      ]
    },
    {
      "emoji": "🎫",
      "tags": [
        "billet"
      ]
    },
    {
      "emoji": "🎖️",
      "tags": [
        "médaille",
        "militaire"
      ]
    },
    {
      "emoji": "🏆",
      "tags": [
        "trophée"
      ]
    },
    {
      "emoji": "🏅",
      "tags": [
        "médaille",
        "sportive"
      ]
    },
    {
      "emoji": "🥇",
      "tags": [
        "médaille",
        "dor"
      ]
    },
    {
      "emoji": "🥈",
      "tags": [
        "médaille",
        "dargent"
      ]
    },
    {
      "emoji": "🥉",
      "tags": [
        "médaille",
        "bronze"
      ]
    },
    {
      "emoji": "⚽",
      "tags": [
        "ballon",
        "football"
      ]
    },
    {
      "emoji": "⚾",
      "tags": [
        "baseball"
      ]
    },
    {
      "emoji": "🥎",
      "tags": [
        "softball"
      ]
    },
    {
      "emoji": "🏀",
      "tags": [
        "basket"
      ]
    },
    {
      "emoji": "🏐",
      "tags": [
        "volley",
        "ball"
      ]
    },
    {
      "emoji": "🏈",
      "tags": [
        "football",
        "américain"
      ]
    },
    {
      "emoji": "🏉",
      "tags": [
        "rugby"
      ]
    },
    {
      "emoji": "🎾",
      "tags": [
        "tennis"
      ]
    },
    {
      "emoji": "🥏",
      "tags": [
        "disque",
        "volant"
      ]
    },
    {
      "emoji": "🎳",
      "tags": [
        "bowling"
      ]
    },
    {
      "emoji": "🏏",
      "tags": [
        "cricket"
      ]
    },
    {
      "emoji": "🏑",
      "tags": [
        "hockey",
        "gazon"
      ]
    },
    {
      "emoji": "🏒",
      "tags": [
        "hockey",
        "glace"
      ]
    },
    {
      "emoji": "🥍",
      "tags": [
        "crosse"
      ]
    },
    {
      "emoji": "🏓",
      "tags": [
        "ping",
        "pong"
      ]
    },
    {
      "emoji": "🏸",
      "tags": [
        "badminton"
      ]
    },
    {
      "emoji": "🥊",
      "tags": [
        "gant",
        "boxe"
      ]
    },
    {
      "emoji": "🥋",
      "tags": [
        "tenue",
        "darts",
        "martiaux"
      ]
    },
    {
      "emoji": "🥅",
      "tags": [
        "cage"
      ]
    },
    {
      "emoji": "⛳",
      "tags": [
        "drapeau",
        "golf"
      ]
    },
    {
      "emoji": "⛸️",
      "tags": [
        "patin",
        "glace"
      ]
    },
    {
      "emoji": "🎣",
      "tags": [
        "pêche",
        "ligne"
      ]
    },
    {
      "emoji": "🤿",
      "tags": [
        "masque",
        "plongée"
      ]
    },
    {
      "emoji": "🎽",
      "tags": [
        "maillot",
        "course"
      ]
    },
    {
      "emoji": "🎿",
      "tags": [
        "ski"
      ]
    },
    {
      "emoji": "🛷",
      "tags": [
        "luge"
      ]
    },
    {
      "emoji": "🥌",
      "tags": [
        "pierre",
        "curling"
      ]
    },
    {
      "emoji": "🎯",
      "tags": []
    },
    {
      "emoji": "🪀",
      "tags": [
        "yoyo"
      ]
    },
    {
      "emoji": "🪁",
      "tags": [
        "cerf",
        "volant"
      ]
    },
    {
      "emoji": "🔫",
      "tags": [
        "pistolet",
        "eau"
      ]
    },
    {
      "emoji": "🎱",
      "tags": [
        "boule",
        "billard"
      ]
    },
    {
      "emoji": "🔮",
      "tags": [
        "boule",
        "cristal"
      ]
    },
    {
      "emoji": "🪄",
      "tags": [
        "baguette",
        "magique"
      ]
    },
    {
      "emoji": "🎮",
      "tags": [
        "jeu",
        "vidéo"
      ]
    },
    {
      "emoji": "🕹️",
      "tags": [
        "manette",
        "jeu"
      ]
    },
    {
      "emoji": "🎰",
      "tags": [
        "machine"
      ]
    },
    {
      "emoji": "🎲",
      "tags": [
        "dés"
      ]
    },
    {
      "emoji": "🧩",
      "tags": [
        "puzzle"
      ]
    },
    {
      "emoji": "🧸",
      "tags": [
        "ours",
        "peluche"
      ]
    },
    {
      "emoji": "🪅",
      "tags": [
        "piñata"
      ]
    },
    {
      "emoji": "🪩",
      "tags": [
        "boule",
        "facettes"
      ]
    },
    {
      "emoji": "🪆",
      "tags": [
        "poupées",
        "russes"
      ]
    },
    {
      "emoji": "♠️",
      "tags": [
        "pique"
      ]
    },
    {
      "emoji": "♥️",
      "tags": [
        "cœur",
        "cartes"
      ]
    },
    {
      "emoji": "♦️",
      "tags": [
        "carreau"
      ]
    },
    {
      "emoji": "♣️",
      "tags": [
        "trèfle",
        "cartes"
      ]
    },
    {
      "emoji": "♟️",
      "tags": [
        "pion",
        "déchec"
      ]
    },
    {
      "emoji": "🃏",
      "tags": [
        "carte",
        "joker"
      ]
    },
    {
      "emoji": "🀄",
      "tags": [
        "dragon",
        "rouge",
        "mahjong"
      ]
    },
    {
      "emoji": "🎴",
      "tags": [
        "jeu",
        "fleurs"
      ]
    },
    {
      "emoji": "🎭",
      "tags": [
        "spectacle",
        "vivant"
      ]
    },
    {
      "emoji": "🖼️",
      "tags": [
        "cadre",
        "image"
      ]
    },
    {
      "emoji": "🎨",
      "tags": [
        "palette",
        "peinture"
      ]
    },
    {
      "emoji": "🧵",
      "tags": [
        "bobine",
        "fil"
      ]
    },
    {
      "emoji": "🪡",
      "tags": [
        "aiguille",
        "coudre"
      ]
    },
    {
      "emoji": "🧶",
      "tags": [
        "fil"
      ]
    },
    {
      "emoji": "🪢",
      "tags": [
        "nœud"
      ]
    },
    {
      "emoji": "👓",
      "tags": [
        "lunettes",
        "vue"
      ]
    },
    {
      "emoji": "🕶️",
      "tags": [
        "lunettes",
        "soleil"
      ]
    },
    {
      "emoji": "🥽",
      "tags": [
        "lunettes"
      ]
    },
    {
      "emoji": "🥼",
      "tags": [
        "blouse",
        "blanche"
      ]
    },
    {
      "emoji": "🦺",
      "tags": [
        "gilet",
        "sécurité"
      ]
    },
    {
      "emoji": "👔",
      "tags": [
        "cravate"
      ]
    },
    {
      "emoji": "👕",
      "tags": [
        "shirt"
      ]
    },
    {
      "emoji": "👖",
      "tags": [
        "jean"
      ]
    },
    {
      "emoji": "🧣",
      "tags": [
        "foulard"
      ]
    },
    {
      "emoji": "🧤",
      "tags": [
        "gants"
      ]
    },
    {
      "emoji": "🧥",
      "tags": [
        "manteau"
      ]
    },
    {
      "emoji": "🧦",
      "tags": [
        "chaussettes"
      ]
    },
    {
      "emoji": "👗",
      "tags": [
        "robe"
      ]
    },
    {
      "emoji": "👘",
      "tags": [
        "kimono"
      ]
    },
    {
      "emoji": "🥻",
      "tags": [
        "sari"
      ]
    },
    {
      "emoji": "🩱",
      "tags": [
        "maillot",
        "bain"
      ]
    },
    {
      "emoji": "🩲",
      "tags": [
        "slip"
      ]
    },
    {
      "emoji": "🩳",
      "tags": [
        "short"
      ]
    },
    {
      "emoji": "👙",
      "tags": [
        "bikini"
      ]
    },
    {
      "emoji": "👚",
      "tags": [
        "vêtements",
        "femme"
      ]
    },
    {
      "emoji": "🪭",
      "tags": [
        "éventail"
      ]
    },
    {
      "emoji": "👛",
      "tags": [
        "porte",
        "monnaie"
      ]
    },
    {
      "emoji": "👜",
      "tags": [
        "sac",
        "main"
      ]
    },
    {
      "emoji": "👝",
      "tags": [
        "pochette"
      ]
    },
    {
      "emoji": "🛍️",
      "tags": [
        "sacs",
        "shopping"
      ]
    },
    {
      "emoji": "🎒",
      "tags": [
        "cartable"
      ]
    },
    {
      "emoji": "🩴",
      "tags": [
        "tong"
      ]
    },
    {
      "emoji": "👞",
      "tags": [
        "chaussure",
        "dhomme"
      ]
    },
    {
      "emoji": "👟",
      "tags": [
        "chaussure",
        "sport"
      ]
    },
    {
      "emoji": "🥾",
      "tags": [
        "chaussure",
        "randonnée"
      ]
    },
    {
      "emoji": "🥿",
      "tags": [
        "chaussure",
        "plate"
      ]
    },
    {
      "emoji": "👠",
      "tags": [
        "chaussure",
        "talon"
      ]
    },
    {
      "emoji": "👡",
      "tags": [
        "sandale",
        "femme"
      ]
    },
    {
      "emoji": "🩰",
      "tags": [
        "chaussons",
        "danse"
      ]
    },
    {
      "emoji": "👢",
      "tags": [
        "botte",
        "femme"
      ]
    },
    {
      "emoji": "🪮",
      "tags": [
        "peigne",
        "afro"
      ]
    },
    {
      "emoji": "👑",
      "tags": [
        "couronne"
      ]
    },
    {
      "emoji": "👒",
      "tags": [
        "chapeau",
        "femme"
      ]
    },
    {
      "emoji": "🎩",
      "tags": [
        "forme"
      ]
    },
    {
      "emoji": "🎓",
      "tags": [
        "toque",
        "universitaire"
      ]
    },
    {
      "emoji": "🧢",
      "tags": [
        "casquette",
        "américaine"
      ]
    },
    {
      "emoji": "🪖",
      "tags": [
        "casque",
        "militaire"
      ]
    },
    {
      "emoji": "⛑️",
      "tags": [
        "casque",
        "secouriste"
      ]
    },
    {
      "emoji": "📿",
      "tags": [
        "chapelet"
      ]
    },
    {
      "emoji": "💄",
      "tags": [
        "rouge",
        "lèvres"
      ]
    },
    {
      "emoji": "💍",
      "tags": [
        "bague"
      ]
    },
    {
      "emoji": "💎",
      "tags": [
        "pierre",
        "précieuse"
      ]
    },
    {
      "emoji": "🔇",
      "tags": [
        "muet"
      ]
    },
    {
      "emoji": "🔈",
      "tags": [
        "volume",
        "enceintes",
        "faible"
      ]
    },
    {
      "emoji": "🔉",
      "tags": [
        "volume",
        "enceintes",
        "moyen"
      ]
    },
    {
      "emoji": "🔊",
      "tags": [
        "volume",
        "enceintes",
        "élevé"
      ]
    },
    {
      "emoji": "📢",
      "tags": [
        "parleur"
      ]
    },
    {
      "emoji": "📣",
      "tags": [
        "porte",
        "voix"
      ]
    },
    {
      "emoji": "📯",
      "tags": [
        "cor",
        "postal"
      ]
    },
    {
      "emoji": "🔔",
      "tags": [
        "cloche"
      ]
    },
    {
      "emoji": "🔕",
      "tags": [
        "alarme",
        "désactivée"
      ]
    },
    {
      "emoji": "🎼",
      "tags": [
        "partition"
      ]
    },
    {
      "emoji": "🎵",
      "tags": [
        "note",
        "musique"
      ]
    },
    {
      "emoji": "🎶",
      "tags": [
        "notes",
        "musique"
      ]
    },
    {
      "emoji": "🎙️",
      "tags": [
        "micro",
        "studio"
      ]
    },
    {
      "emoji": "🎚️",
      "tags": [
        "curseur",
        "niveau"
      ]
    },
    {
      "emoji": "🎛️",
      "tags": [
        "boutons",
        "réglage"
      ]
    },
    {
      "emoji": "🎤",
      "tags": [
        "micro"
      ]
    },
    {
      "emoji": "🎧",
      "tags": [
        "casque"
      ]
    },
    {
      "emoji": "📻",
      "tags": [
        "radio"
      ]
    },
    {
      "emoji": "🎷",
      "tags": [
        "saxophone"
      ]
    },
    {
      "emoji": "🪗",
      "tags": [
        "accordéon"
      ]
    },
    {
      "emoji": "🎸",
      "tags": [
        "guitare"
      ]
    },
    {
      "emoji": "🎹",
      "tags": [
        "piano"
      ]
    },
    {
      "emoji": "🎺",
      "tags": [
        "trompette"
      ]
    },
    {
      "emoji": "🎻",
      "tags": [
        "violon"
      ]
    },
    {
      "emoji": "🪕",
      "tags": [
        "banjo"
      ]
    },
    {
      "emoji": "🥁",
      "tags": [
        "batterie"
      ]
    },
    {
      "emoji": "🪘",
      "tags": [
        "djembé"
      ]
    },
    {
      "emoji": "🪇",
      "tags": [
        "maracas"
      ]
    },
    {
      "emoji": "🪈",
      "tags": [
        "flûte"
      ]
    },
    {
      "emoji": "📱",
      "tags": [
        "téléphone",
        "portable"
      ]
    },
    {
      "emoji": "📲",
      "tags": [
        "appel",
        "entrant"
      ]
    },
    {
      "emoji": "☎️",
      "tags": [
        "téléphone"
      ]
    },
    {
      "emoji": "📞",
      "tags": [
        "combiné",
        "téléphonique"
      ]
    },
    {
      "emoji": "📟",
      "tags": [
        "bipeur"
      ]
    },
    {
      "emoji": "📠",
      "tags": [
        "fax"
      ]
    },
    {
      "emoji": "🔋",
      "tags": [
        "pile"
      ]
    },
    {
      "emoji": "🪫",
      "tags": [
        "pile",
        "faible"
      ]
    },
    {
      "emoji": "🔌",
      "tags": [
        "câble",
        "fiche",
        "électrique"
      ]
    },
    {
      "emoji": "💻",
      "tags": [
        "ordinateur",
        "portable"
      ]
    },
    {
      "emoji": "🖥️",
      "tags": [
        "ordinateur",
        "bureau"
      ]
    },
    {
      "emoji": "🖨️",
      "tags": [
        "imprimante"
      ]
    },
    {
      "emoji": "⌨️",
      "tags": [
        "clavier"
      ]
    },
    {
      "emoji": "🖱️",
      "tags": [
        "souris",
        "dordinateur"
      ]
    },
    {
      "emoji": "🖲️",
      "tags": [
        "boule",
        "commande"
      ]
    },
    {
      "emoji": "💽",
      "tags": [
        "disque",
        "dordinateur"
      ]
    },
    {
      "emoji": "💾",
      "tags": [
        "disquette"
      ]
    },
    {
      "emoji": "💿",
      "tags": [
        "cd"
      ]
    },
    {
      "emoji": "📀",
      "tags": [
        "dvd"
      ]
    },
    {
      "emoji": "🧮",
      "tags": [
        "abaque"
      ]
    },
    {
      "emoji": "🎥",
      "tags": [
        "caméra"
      ]
    },
    {
      "emoji": "🎞️",
      "tags": [
        "pellicule"
      ]
    },
    {
      "emoji": "📽️",
      "tags": [
        "projecteur",
        "cinématographique"
      ]
    },
    {
      "emoji": "🎬",
      "tags": [
        "clap"
      ]
    },
    {
      "emoji": "📺",
      "tags": [
        "téléviseur"
      ]
    },
    {
      "emoji": "📷",
      "tags": [
        "appareil",
        "photo"
      ]
    },
    {
      "emoji": "📸",
      "tags": [
        "appareil",
        "photo",
        "flash"
      ]
    },
    {
      "emoji": "📹",
      "tags": [
        "caméscope"
      ]
    },
    {
      "emoji": "📼",
      "tags": [
        "cassette",
        "vidéo"
      ]
    },
    {
      "emoji": "🔍",
      "tags": [
        "loupe",
        "orientée",
        "gauche"
      ]
    },
    {
      "emoji": "🔎",
      "tags": [
        "loupe",
        "orientée"
      ]
    },
    {
      "emoji": "🕯️",
      "tags": [
        "bougie"
      ]
    },
    {
      "emoji": "💡",
      "tags": [
        "ampoule"
      ]
    },
    {
      "emoji": "🔦",
      "tags": [
        "torche"
      ]
    },
    {
      "emoji": "🏮",
      "tags": [
        "lampion",
        "rouge"
      ]
    },
    {
      "emoji": "🪔",
      "tags": [
        "diya"
      ]
    },
    {
      "emoji": "📔",
      "tags": [
        "carnet",
        "couverture"
      ]
    },
    {
      "emoji": "📕",
      "tags": [
        "livre",
        "fermé"
      ]
    },
    {
      "emoji": "📖",
      "tags": [
        "livre"
      ]
    },
    {
      "emoji": "📗",
      "tags": [
        "livre",
        "vert"
      ]
    },
    {
      "emoji": "📘",
      "tags": [
        "livre",
        "bleu"
      ]
    },
    {
      "emoji": "📙",
      "tags": [
        "livre",
        "orange"
      ]
    },
    {
      "emoji": "📚",
      "tags": [
        "livres"
      ]
    },
    {
      "emoji": "📓",
      "tags": [
        "carnet"
      ]
    },
    {
      "emoji": "📒",
      "tags": [
        "carnet",
        "compte"
      ]
    },
    {
      "emoji": "📃",
      "tags": [
        "page",
        "enroulée"
      ]
    },
    {
      "emoji": "📜",
      "tags": [
        "parchemin"
      ]
    },
    {
      "emoji": "📄",
      "tags": [
        "page"
      ]
    },
    {
      "emoji": "📰",
      "tags": [
        "journal"
      ]
    },
    {
      "emoji": "🗞️",
      "tags": [
        "journal",
        "roulé"
      ]
    },
    {
      "emoji": "📑",
      "tags": [
        "signets"
      ]
    },
    {
      "emoji": "🔖",
      "tags": [
        "marque",
        "page"
      ]
    },
    {
      "emoji": "🏷️",
      "tags": [
        "étiquette"
      ]
    },
    {
      "emoji": "💰",
      "tags": [
        "sac",
        "dargent"
      ]
    },
    {
      "emoji": "🪙",
      "tags": []
    },
    {
      "emoji": "💴",
      "tags": [
        "billet",
        "yens"
      ]
    },
    {
      "emoji": "💵",
      "tags": [
        "billet",
        "dollars"
      ]
    },
    {
      "emoji": "💶",
      "tags": [
        "billet",
        "euros"
      ]
    },
    {
      "emoji": "💷",
      "tags": [
        "billet",
        "livres"
      ]
    },
    {
      "emoji": "💸",
      "tags": [
        "billet",
        "ailes"
      ]
    },
    {
      "emoji": "💳",
      "tags": [
        "carte",
        "bancaire"
      ]
    },
    {
      "emoji": "🧾",
      "tags": [
        "reçu"
      ]
    },
    {
      "emoji": "💹",
      "tags": [
        "courbe",
        "yen",
        "hausse"
      ]
    },
    {
      "emoji": "✉️",
      "tags": [
        "enveloppe"
      ]
    },
    {
      "emoji": "📧",
      "tags": [
        "mail"
      ]
    },
    {
      "emoji": "📨",
      "tags": [
        "message",
        "reçu"
      ]
    },
    {
      "emoji": "📩",
      "tags": [
        "enveloppe",
        "flèche"
      ]
    },
    {
      "emoji": "📤",
      "tags": [
        "boîte",
        "denvoi"
      ]
    },
    {
      "emoji": "📥",
      "tags": [
        "boîte",
        "réception"
      ]
    },
    {
      "emoji": "📦",
      "tags": [
        "colis"
      ]
    },
    {
      "emoji": "📫",
      "tags": [
        "boîte",
        "lettres",
        "fermée",
        "drapeau",
        "levé"
      ]
    },
    {
      "emoji": "📪",
      "tags": [
        "boîte",
        "lettres",
        "fermée",
        "drapeau",
        "baissé"
      ]
    },
    {
      "emoji": "📬",
      "tags": [
        "boîte",
        "lettres",
        "drapeau",
        "levé"
      ]
    },
    {
      "emoji": "📭",
      "tags": [
        "boîte",
        "lettres",
        "drapeau",
        "baissé"
      ]
    },
    {
      "emoji": "📮",
      "tags": [
        "boîte",
        "lettres"
      ]
    },
    {
      "emoji": "🗳️",
      "tags": [
        "urne",
        "électorale"
      ]
    },
    {
      "emoji": "✏️",
      "tags": [
        "crayon"
      ]
    },
    {
      "emoji": "✒️",
      "tags": [
        "stylo",
        "plume",
        "noir"
      ]
    },
    {
      "emoji": "🖋️",
      "tags": [
        "stylo",
        "plume"
      ]
    },
    {
      "emoji": "🖊️",
      "tags": [
        "stylo"
      ]
    },
    {
      "emoji": "🖌️",
      "tags": [
        "pinceau"
      ]
    },
    {
      "emoji": "🖍️",
      "tags": [
        "crayon",
        "pastel"
      ]
    },
    {
      "emoji": "📝",
      "tags": [
        "mémo"
      ]
    },
    {
      "emoji": "💼",
      "tags": [
        "porte",
        "documents"
      ]
    },
    {
      "emoji": "📁",
      "tags": [
        "dossier"
      ]
    },
    {
      "emoji": "📂",
      "tags": [
        "dossier"
      ]
    },
    {
      "emoji": "🗂️",
      "tags": [
        "intercalaires"
      ]
    },
    {
      "emoji": "📅",
      "tags": [
        "calendrier"
      ]
    },
    {
      "emoji": "📆",
      "tags": [
        "éphéméride"
      ]
    },
    {
      "emoji": "🗒️",
      "tags": [
        "bloc",
        "notes",
        "spirale"
      ]
    },
    {
      "emoji": "🗓️",
      "tags": [
        "calendrier",
        "spirale"
      ]
    },
    {
      "emoji": "📇",
      "tags": [
        "carnet",
        "dadresses"
      ]
    },
    {
      "emoji": "📈",
      "tags": [
        "graphique",
        "hausse"
      ]
    },
    {
      "emoji": "📉",
      "tags": [
        "graphique",
        "baisse"
      ]
    },
    {
      "emoji": "📊",
      "tags": [
        "graphiques",
        "barres"
      ]
    },
    {
      "emoji": "📋",
      "tags": [
        "porte",
        "bloc"
      ]
    },
    {
      "emoji": "📌",
      "tags": [
        "punaise"
      ]
    },
    {
      "emoji": "📍",
      "tags": [
        "épingle"
      ]
    },
    {
      "emoji": "📎",
      "tags": [
        "trombone"
      ]
    },
    {
      "emoji": "🖇️",
      "tags": [
        "trombones"
      ]
    },
    {
      "emoji": "📏",
      "tags": [
        "règle"
      ]
    },
    {
      "emoji": "📐",
      "tags": [
        "équerre"
      ]
    },
    {
      "emoji": "✂️",
      "tags": [
        "ciseaux"
      ]
    },
    {
      "emoji": "🗃️",
      "tags": [
        "boîte",
        "dossiers"
      ]
    },
    {
      "emoji": "🗄️",
      "tags": [
        "meuble",
        "dossiers"
      ]
    },
    {
      "emoji": "🗑️",
      "tags": [
        "corbeille",
        "papiers"
      ]
    },
    {
      "emoji": "🔒",
      "tags": [
        "cadenas",
        "fermé"
      ]
    },
    {
      "emoji": "🔓",
      "tags": [
        "cadenas"
      ]
    },
    {
      "emoji": "🔏",
      "tags": [
        "cadenas",
        "fermé",
        "stylo"
      ]
    },
    {
      "emoji": "🔐",
      "tags": [
        "cadenas",
        "fermé",
        "clé"
      ]
    },
    {
      "emoji": "🔑",
      "tags": [
        "clé"
      ]
    },
    {
      "emoji": "🗝️",
      "tags": [
        "clé",
        "ancienne"
      ]
    },
    {
      "emoji": "🔨",
      "tags": [
        "marteau"
      ]
    },
    {
      "emoji": "🪓",
      "tags": [
        "hache"
      ]
    },
    {
      "emoji": "⛏️",
      "tags": [
        "pioche"
      ]
    },
    {
      "emoji": "⚒️",
      "tags": [
        "marteau",
        "pioche"
      ]
    },
    {
      "emoji": "🛠️",
      "tags": [
        "marteau",
        "clé",
        "molette"
      ]
    },
    {
      "emoji": "🗡️",
      "tags": [
        "dague"
      ]
    },
    {
      "emoji": "⚔️",
      "tags": [
        "épées",
        "croisées"
      ]
    },
    {
      "emoji": "💣",
      "tags": [
        "bombe"
      ]
    },
    {
      "emoji": "🪃",
      "tags": [
        "boomerang"
      ]
    },
    {
      "emoji": "🏹",
      "tags": [
        "arc",
        "flèche"
      ]
    },
    {
      "emoji": "🛡️",
      "tags": [
        "bouclier"
      ]
    },
    {
      "emoji": "🪚",
      "tags": [
        "scie"
      ]
    },
    {
      "emoji": "🔧",
      "tags": [
        "clé",
        "molette"
      ]
    },
    {
      "emoji": "🪛",
      "tags": [
        "tournevis"
      ]
    },
    {
      "emoji": "🔩",
      "tags": [
        "vis",
        "écrou"
      ]
    },
    {
      "emoji": "⚙️",
      "tags": [
        "roue",
        "dentée"
      ]
    },
    {
      "emoji": "🗜️",
      "tags": [
        "serre",
        "joint"
      ]
    },
    {
      "emoji": "⚖️",
      "tags": [
        "balance",
        "poids"
      ]
    },
    {
      "emoji": "🦯",
      "tags": [
        "canne",
        "blanche"
      ]
    },
    {
      "emoji": "🔗",
      "tags": [
        "chaînons"
      ]
    },
    {
      "emoji": "⛓️‍💥",
      "tags": [
        "chaîne",
        "brisée"
      ]
    },
    {
      "emoji": "⛓️",
      "tags": [
        "chaînes"
      ]
    },
    {
      "emoji": "🪝",
      "tags": [
        "crochet"
      ]
    },
    {
      "emoji": "🧰",
      "tags": [
        "boîte",
        "outils"
      ]
    },
    {
      "emoji": "🧲",
      "tags": [
        "aimant"
      ]
    },
    {
      "emoji": "🪜",
      "tags": [
        "échelle"
      ]
    },
    {
      "emoji": "⚗️",
      "tags": [
        "alambic"
      ]
    },
    {
      "emoji": "🧪",
      "tags": [
        "tube"
      ]
    },
    {
      "emoji": "🧫",
      "tags": [
        "boîte",
        "pétri"
      ]
    },
    {
      "emoji": "🧬",
      "tags": [
        "adn"
      ]
    },
    {
      "emoji": "🔬",
      "tags": [
        "microscope"
      ]
    },
    {
      "emoji": "🔭",
      "tags": [
        "télescope"
      ]
    },
    {
      "emoji": "📡",
      "tags": [
        "antenne",
        "satellite"
      ]
    },
    {
      "emoji": "💉",
      "tags": [
        "seringue"
      ]
    },
    {
      "emoji": "🩸",
      "tags": [
        "goutte",
        "sang"
      ]
    },
    {
      "emoji": "💊",
      "tags": [
        "pilule"
      ]
    },
    {
      "emoji": "🩹",
      "tags": [
        "sparadrap"
      ]
    },
    {
      "emoji": "🩼",
      "tags": [
        "béquille"
      ]
    },
    {
      "emoji": "🩺",
      "tags": [
        "stéthoscope"
      ]
    },
    {
      "emoji": "🩻",
      "tags": [
        "radiographie"
      ]
    },
    {
      "emoji": "🚪",
      "tags": [
        "porte"
      ]
    },
    {
      "emoji": "🛗",
      "tags": [
        "ascenseur"
      ]
    },
    {
      "emoji": "🪞",
      "tags": [
        "miroir"
      ]
    },
    {
      "emoji": "🪟",
      "tags": [
        "fenêtre"
      ]
    },
    {
      "emoji": "🛏️",
      "tags": [
        "lit"
      ]
    },
    {
      "emoji": "🛋️",
      "tags": [
        "canapé",
        "lampe"
      ]
    },
    {
      "emoji": "🪑",
      "tags": [
        "chaise"
      ]
    },
    {
      "emoji": "🚽",
      "tags": [
        "toilettes"
      ]
    },
    {
      "emoji": "🪠",
      "tags": [
        "ventouse"
      ]
    },
    {
      "emoji": "🚿",
      "tags": [
        "douche"
      ]
    },
    {
      "emoji": "🛁",
      "tags": [
        "baignoire"
      ]
    },
    {
      "emoji": "🪤",
      "tags": [
        "tapette",
        "souris"
      ]
    },
    {
      "emoji": "🪒",
      "tags": [
        "rasoir"
      ]
    },
    {
      "emoji": "🧴",
      "tags": [
        "bouteille",
        "lotion"
      ]
    },
    {
      "emoji": "🧷",
      "tags": [
        "épingle",
        "sûreté"
      ]
    },
    {
      "emoji": "🧹",
      "tags": [
        "balai"
      ]
    },
    {
      "emoji": "🧺",
      "tags": [
        "panier"
      ]
    },
    {
      "emoji": "🧻",
      "tags": [
        "rouleau",
        "papier"
      ]
    },
    {
      "emoji": "🪣",
      "tags": [
        "seau"
      ]
    },
    {
      "emoji": "🧼",
      "tags": [
        "savon"
      ]
    },
    {
      "emoji": "🫧",
      "tags": [
        "bulles"
      ]
    },
    {
      "emoji": "🪥",
      "tags": [
        "brosse",
        "dents"
      ]
    },
    {
      "emoji": "🧽",
      "tags": [
        "éponge"
      ]
    },
    {
      "emoji": "🧯",
      "tags": [
        "extincteur"
      ]
    },
    {
      "emoji": "🛒",
      "tags": [
        "chariot"
      ]
    },
    {
      "emoji": "🚬",
      "tags": [
        "cigarette"
      ]
    },
    {
      "emoji": "⚰️",
      "tags": [
        "cercueil"
      ]
    },
    {
      "emoji": "🪦",
      "tags": [
        "pierre",
        "tombale"
      ]
    },
    {
      "emoji": "⚱️",
      "tags": [
        "urne",
        "funéraire"
      ]
    },
    {
      "emoji": "🧿",
      "tags": [
        "mauvais",
        "œil"
      ]
    },
    {
      "emoji": "🪬",
      "tags": [
        "main",
        "fatma"
      ]
    },
    {
      "emoji": "🗿",
      "tags": [
        "moai"
      ]
    },
    {
      "emoji": "🪧",
      "tags": [
        "pancarte"
      ]
    },
    {
      "emoji": "🪪",
      "tags": [
        "carte",
        "didentité"
      ]
    },
    {
      "emoji": "🏧",
      "tags": [
        "distributeur",
        "billets"
      ]
    },
    {
      "emoji": "🚮",
      "tags": [
        "icône",
        "poubelle"
      ]
    },
    {
      "emoji": "🚰",
      "tags": [
        "eau",
        "potable"
      ]
    },
    {
      "emoji": "♿",
      "tags": [
        "symbole",
        "accès",
        "handicapés"
      ]
    },
    {
      "emoji": "🚹",
      "tags": [
        "symbole",
        "toilettes",
        "hommes"
      ]
    },
    {
      "emoji": "🚺",
      "tags": [
        "symbole",
        "toilettes",
        "femmes"
      ]
    },
    {
      "emoji": "🚻",
      "tags": [
        "panneau",
        "toilettes"
      ]
    },
    {
      "emoji": "🚼",
      "tags": [
        "symbole",
        "bébé"
      ]
    },
    {
      "emoji": "🚾",
      "tags": [
        "wc"
      ]
    },
    {
      "emoji": "🛂",
      "tags": [
        "contrôle",
        "passeports"
      ]
    },
    {
      "emoji": "🛃",
      "tags": [
        "douane"
      ]
    },
    {
      "emoji": "🛄",
      "tags": [
        "retrait",
        "bagages"
      ]
    },
    {
      "emoji": "🛅",
      "tags": [
        "consigne"
      ]
    },
    {
      "emoji": "⚠️",
      "tags": [
        "symbole",
        "davertissement"
      ]
    },
    {
      "emoji": "🚸",
      "tags": [
        "traversée",
        "denfants"
      ]
    },
    {
      "emoji": "⛔",
      "tags": [
        "sens",
        "interdit"
      ]
    },
    {
      "emoji": "🚫",
      "tags": [
        "symbole",
        "dinterdiction"
      ]
    },
    {
      "emoji": "🚳",
      "tags": [
        "vélos",
        "interdits"
      ]
    },
    {
      "emoji": "🚭",
      "tags": [
        "interdiction",
        "fumer"
      ]
    },
    {
      "emoji": "🚯",
      "tags": [
        "dépôt",
        "dordures",
        "interdit"
      ]
    },
    {
      "emoji": "🚱",
      "tags": [
        "eau",
        "potable"
      ]
    },
    {
      "emoji": "🚷",
      "tags": [
        "interdit",
        "piétons"
      ]
    },
    {
      "emoji": "📵",
      "tags": [
        "téléphones",
        "portables",
        "interdits"
      ]
    },
    {
      "emoji": "🔞",
      "tags": [
        "ans"
      ]
    },
    {
      "emoji": "☢️",
      "tags": [
        "radioactif"
      ]
    },
    {
      "emoji": "☣️",
      "tags": [
        "danger",
        "biologique"
      ]
    },
    {
      "emoji": "⬆️",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "↗️",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "➡️",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "↘️",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "⬇️",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "↙️",
      "tags": [
        "flèche",
        "gauche"
      ]
    },
    {
      "emoji": "⬅️",
      "tags": [
        "flèche",
        "gauche"
      ]
    },
    {
      "emoji": "↖️",
      "tags": [
        "flèche",
        "gauche"
      ]
    },
    {
      "emoji": "↕️",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "↔️",
      "tags": [
        "flèche",
        "gauche"
      ]
    },
    {
      "emoji": "↩️",
      "tags": [
        "flèche",
        "courbe",
        "gauche"
      ]
    },
    {
      "emoji": "↪️",
      "tags": [
        "flèche",
        "courbe"
      ]
    },
    {
      "emoji": "⤴️",
      "tags": [
        "flèche",
        "courbe"
      ]
    },
    {
      "emoji": "⤵️",
      "tags": [
        "flèche",
        "courbe"
      ]
    },
    {
      "emoji": "🔃",
      "tags": [
        "flèches",
        "sens",
        "horaire"
      ]
    },
    {
      "emoji": "🔄",
      "tags": [
        "flèches",
        "sens",
        "antihoraire"
      ]
    },
    {
      "emoji": "🔙",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "🔚",
      "tags": [
        "flèche",
        "fin"
      ]
    },
    {
      "emoji": "🔛",
      "tags": [
        "flèche",
        "activé"
      ]
    },
    {
      "emoji": "🔜",
      "tags": [
        "flèche",
        "bientôt"
      ]
    },
    {
      "emoji": "🔝",
      "tags": [
        "flèche"
      ]
    },
    {
      "emoji": "🛐",
      "tags": [
        "lieu",
        "culte"
      ]
    },
    {
      "emoji": "⚛️",
      "tags": [
        "symbole",
        "latome"
      ]
    },
    {
      "emoji": "🕉️",
      "tags": [
        "om"
      ]
    },
    {
      "emoji": "✡️",
      "tags": [
        "étoile",
        "david"
      ]
    },
    {
      "emoji": "☸️",
      "tags": [
        "roue",
        "dharma"
      ]
    },
    {
      "emoji": "☯️",
      "tags": [
        "yin",
        "yang"
      ]
    },
    {
      "emoji": "✝️",
      "tags": [
        "croix",
        "latine"
      ]
    },
    {
      "emoji": "☦️",
      "tags": [
        "croix",
        "orthodoxe"
      ]
    },
    {
      "emoji": "☪️",
      "tags": [
        "lune",
        "étoile"
      ]
    },
    {
      "emoji": "☮️",
      "tags": [
        "symbole",
        "paix"
      ]
    },
    {
      "emoji": "🕎",
      "tags": [
        "chandelier",
        "branches"
      ]
    },
    {
      "emoji": "🔯",
      "tags": [
        "étoile",
        "branches"
      ]
    },
    {
      "emoji": "🪯",
      "tags": [
        "khanda"
      ]
    },
    {
      "emoji": "♈",
      "tags": [
        "bélier",
        "zodiaque"
      ]
    },
    {
      "emoji": "♉",
      "tags": [
        "taureau"
      ]
    },
    {
      "emoji": "♊",
      "tags": [
        "gémeaux"
      ]
    },
    {
      "emoji": "♋",
      "tags": [
        "cancer"
      ]
    },
    {
      "emoji": "♌",
      "tags": [
        "lion"
      ]
    },
    {
      "emoji": "♍",
      "tags": [
        "vierge"
      ]
    },
    {
      "emoji": "♎",
      "tags": [
        "balance"
      ]
    },
    {
      "emoji": "♏",
      "tags": [
        "scorpion",
        "zodiaque"
      ]
    },
    {
      "emoji": "♐",
      "tags": [
        "sagittaire"
      ]
    },
    {
      "emoji": "♑",
      "tags": [
        "capricorne"
      ]
    },
    {
      "emoji": "♒",
      "tags": [
        "verseau"
      ]
    },
    {
      "emoji": "♓",
      "tags": [
        "poissons"
      ]
    },
    {
      "emoji": "⛎",
      "tags": [
        "serpentaire"
      ]
    },
    {
      "emoji": "🔀",
      "tags": [
        "bouton",
        "lecture",
        "aléatoire"
      ]
    },
    {
      "emoji": "🔁",
      "tags": [
        "bouton",
        "répétition"
      ]
    },
    {
      "emoji": "🔂",
      "tags": [
        "bouton",
        "répétition",
        "piste"
      ]
    },
    {
      "emoji": "▶️",
      "tags": [
        "bouton",
        "lecture"
      ]
    },
    {
      "emoji": "⏩",
      "tags": [
        "bouton",
        "avance",
        "rapide"
      ]
    },
    {
      "emoji": "⏭️",
      "tags": [
        "bouton",
        "piste"
      ]
    },
    {
      "emoji": "⏯️",
      "tags": [
        "bouton",
        "lecturepause"
      ]
    },
    {
      "emoji": "◀️",
      "tags": [
        "bouton"
      ]
    },
    {
      "emoji": "⏪",
      "tags": [
        "bouton",
        "rapide"
      ]
    },
    {
      "emoji": "⏮️",
      "tags": [
        "bouton",
        "piste",
        "précédente"
      ]
    },
    {
      "emoji": "🔼",
      "tags": [
        "petit",
        "triangle"
      ]
    },
    {
      "emoji": "⏫",
      "tags": [
        "double",
        "flèche"
      ]
    },
    {
      "emoji": "🔽",
      "tags": [
        "petit",
        "triangle"
      ]
    },
    {
      "emoji": "⏬",
      "tags": [
        "double",
        "flèche"
      ]
    },
    {
      "emoji": "⏸️",
      "tags": [
        "bouton",
        "pause"
      ]
    },
    {
      "emoji": "⏹️",
      "tags": [
        "bouton"
      ]
    },
    {
      "emoji": "⏺️",
      "tags": [
        "bouton",
        "enregistrer"
      ]
    },
    {
      "emoji": "⏏️",
      "tags": [
        "bouton",
        "éjecter"
      ]
    },
    {
      "emoji": "🎦",
      "tags": [
        "cinéma"
      ]
    },
    {
      "emoji": "🔅",
      "tags": [
        "luminosité",
        "faible"
      ]
    },
    {
      "emoji": "🔆",
      "tags": [
        "luminosité",
        "élevée"
      ]
    },
    {
      "emoji": "📶",
      "tags": [
        "barres",
        "réseau"
      ]
    },
    {
      "emoji": "🛜",
      "tags": [
        "fil"
      ]
    },
    {
      "emoji": "📳",
      "tags": [
        "mode",
        "vibreur"
      ]
    },
    {
      "emoji": "📴",
      "tags": [
        "téléphone",
        "éteint"
      ]
    },
    {
      "emoji": "♀️",
      "tags": [
        "symbole",
        "femme"
      ]
    },
    {
      "emoji": "♂️",
      "tags": [
        "symbole",
        "lhomme"
      ]
    },
    {
      "emoji": "⚧️",
      "tags": [
        "symbole",
        "communauté",
        "transgenre"
      ]
    },
    {
      "emoji": "✖️",
      "tags": [
        "signe",
        "multiplier"
      ]
    },
    {
      "emoji": "➕",
      "tags": []
    },
    {
      "emoji": "➖",
      "tags": []
    },
    {
      "emoji": "➗",
      "tags": [
        "signe",
        "diviser"
      ]
    },
    {
      "emoji": "🟰",
      "tags": [
        "signe",
        "égal",
        "gras"
      ]
    },
    {
      "emoji": "♾️",
      "tags": [
        "infini"
      ]
    },
    {
      "emoji": "‼️",
      "tags": [
        "double",
        "point",
        "dexclamation"
      ]
    },
    {
      "emoji": "⁉️",
      "tags": [
        "points",
        "dexclamation",
        "dinterrogation"
      ]
    },
    {
      "emoji": "❓",
      "tags": [
        "point",
        "dinterrogation",
        "rouge"
      ]
    },
    {
      "emoji": "❔",
      "tags": [
        "point",
        "dinterrogation",
        "blanc"
      ]
    },
    {
      "emoji": "❕",
      "tags": [
        "point",
        "dexclamation",
        "blanc"
      ]
    },
    {
      "emoji": "❗",
      "tags": [
        "point",
        "dexclamation",
        "rouge"
      ]
    },
    {
      "emoji": "〰️",
      "tags": [
        "ligne",
        "ondulée"
      ]
    },
    {
      "emoji": "💱",
      "tags": [
        "conversion",
        "devise"
      ]
    },
    {
      "emoji": "💲",
      "tags": [
        "symbole",
        "dollar"
      ]
    },
    {
      "emoji": "⚕️",
      "tags": [
        "caducée"
      ]
    },
    {
      "emoji": "♻️",
      "tags": [
        "symbole",
        "recyclage"
      ]
    },
    {
      "emoji": "⚜️",
      "tags": [
        "fleur",
        "lys"
      ]
    },
    {
      "emoji": "🔱",
      "tags": [
        "trident"
      ]
    },
    {
      "emoji": "📛",
      "tags": [
        "badge",
        "nominatif"
      ]
    },
    {
      "emoji": "🔰",
      "tags": [
        "symbole",
        "japonais",
        "débutant"
      ]
    },
    {
      "emoji": "⭕",
      "tags": [
        "cercle",
        "rouge"
      ]
    },
    {
      "emoji": "✅",
      "tags": [
        "bouton",
        "coché"
      ]
    },
    {
      "emoji": "☑️",
      "tags": [
        "case",
        "cochée"
      ]
    },
    {
      "emoji": "✔️",
      "tags": [
        "coche"
      ]
    },
    {
      "emoji": "❌",
      "tags": [
        "croix"
      ]
    },
    {
      "emoji": "❎",
      "tags": [
        "bouton",
        "croix"
      ]
    },
    {
      "emoji": "➰",
      "tags": [
        "boucle"
      ]
    },
    {
      "emoji": "➿",
      "tags": [
        "double",
        "boucle"
      ]
    },
    {
      "emoji": "〽️",
      "tags": [
        "alternance"
      ]
    },
    {
      "emoji": "✳️",
      "tags": [
        "astérisque",
        "branches"
      ]
    },
    {
      "emoji": "✴️",
      "tags": [
        "étoile",
        "branches"
      ]
    },
    {
      "emoji": "❇️",
      "tags": [
        "éclat"
      ]
    },
    {
      "emoji": "©️",
      "tags": [
        "symbole",
        "copyright"
      ]
    },
    {
      "emoji": "®️",
      "tags": [
        "marque",
        "déposée"
      ]
    },
    {
      "emoji": "™️",
      "tags": [
        "marque",
        "commerciale",
        "déposée"
      ]
    },
    {
      "emoji": "#️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "*️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "0️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "1️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "2️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "3️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "4️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "5️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "6️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "7️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "8️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "9️⃣",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "🔟",
      "tags": [
        "touches"
      ]
    },
    {
      "emoji": "🔠",
      "tags": [
        "majuscules"
      ]
    },
    {
      "emoji": "🔡",
      "tags": [
        "minuscules"
      ]
    },
    {
      "emoji": "🔢",
      "tags": [
        "saisie",
        "chiffres"
      ]
    },
    {
      "emoji": "🔣",
      "tags": [
        "saisie",
        "symboles"
      ]
    },
    {
      "emoji": "🔤",
      "tags": [
        "alphabet",
        "latin"
      ]
    },
    {
      "emoji": "🅰️",
      "tags": [
        "groupe",
        "sanguin"
      ]
    },
    {
      "emoji": "🆎",
      "tags": [
        "groupe",
        "sanguin",
        "ab"
      ]
    },
    {
      "emoji": "🅱️",
      "tags": [
        "groupe",
        "sanguin"
      ]
    },
    {
      "emoji": "🆑",
      "tags": [
        "bouton",
        "effacer"
      ]
    },
    {
      "emoji": "🆒",
      "tags": [
        "bouton",
        "cool"
      ]
    },
    {
      "emoji": "🆓",
      "tags": [
        "bouton",
        "gratuit"
      ]
    },
    {
      "emoji": "ℹ️",
      "tags": [
        "source",
        "dinformations"
      ]
    },
    {
      "emoji": "🆔",
      "tags": [
        "bouton",
        "identifiant"
      ]
    },
    {
      "emoji": "ⓜ️",
      "tags": [
        "encerclé"
      ]
    },
    {
      "emoji": "🆕",
      "tags": [
        "bouton"
      ]
    },
    {
      "emoji": "🆖",
      "tags": [
        "bouton"
      ]
    },
    {
      "emoji": "🅾️",
      "tags": [
        "groupe",
        "sanguin"
      ]
    },
    {
      "emoji": "🆗",
      "tags": [
        "bouton",
        "ok"
      ]
    },
    {
      "emoji": "🅿️",
      "tags": [
        "bouton"
      ]
    },
    {
      "emoji": "🆘",
      "tags": [
        "bouton",
        "sos"
      ]
    },
    {
      "emoji": "🆙",
      "tags": [
        "bouton"
      ]
    },
    {
      "emoji": "🆚",
      "tags": [
        "bouton",
        "vs"
      ]
    },
    {
      "emoji": "🈁",
      "tags": [
        "bouton",
        "japonais"
      ]
    },
    {
      "emoji": "🈂️",
      "tags": [
        "bouton",
        "frais",
        "service",
        "japonais"
      ]
    },
    {
      "emoji": "🈷️",
      "tags": [
        "bouton",
        "montant",
        "mensuel",
        "japonais"
      ]
    },
    {
      "emoji": "🈶",
      "tags": [
        "bouton",
        "gratuit",
        "japonais"
      ]
    },
    {
      "emoji": "🈯",
      "tags": [
        "bouton",
        "réservé",
        "japonais"
      ]
    },
    {
      "emoji": "🉐",
      "tags": [
        "bouton",
        "bonne",
        "affaire",
        "japonais"
      ]
    },
    {
      "emoji": "🈹",
      "tags": [
        "bouton",
        "réduction",
        "japonais"
      ]
    },
    {
      "emoji": "🈚",
      "tags": [
        "bouton",
        "gratuit",
        "japonais"
      ]
    },
    {
      "emoji": "🈲",
      "tags": [
        "bouton",
        "interdit",
        "japonais"
      ]
    },
    {
      "emoji": "🉑",
      "tags": [
        "bouton",
        "accepter",
        "japonais"
      ]
    },
    {
      "emoji": "🈸",
      "tags": [
        "bouton",
        "application",
        "japonais"
      ]
    },
    {
      "emoji": "🈴",
      "tags": [
        "bouton",
        "note",
        "réussir",
        "japonais"
      ]
    },
    {
      "emoji": "🈳",
      "tags": [
        "bouton",
        "chambres",
        "disponibles",
        "japonais"
      ]
    },
    {
      "emoji": "㊗️",
      "tags": [
        "bouton",
        "félicitations",
        "japonais"
      ]
    },
    {
      "emoji": "㊙️",
      "tags": [
        "bouton",
        "secret",
        "japonais"
      ]
    },
    {
      "emoji": "🈺",
      "tags": [
        "bouton",
        "affaires",
        "japonais"
      ]
    },
    {
      "emoji": "🈵",
      "tags": [
        "bouton",
        "complet",
        "japonais"
      ]
    },
    {
      "emoji": "🔴",
      "tags": [
        "disque",
        "rouge"
      ]
    },
    {
      "emoji": "🟠",
      "tags": [
        "disque",
        "orange"
      ]
    },
    {
      "emoji": "🟡",
      "tags": [
        "disque",
        "jaune"
      ]
    },
    {
      "emoji": "🟢",
      "tags": [
        "disque",
        "vert"
      ]
    },
    {
      "emoji": "🔵",
      "tags": [
        "disque",
        "bleu"
      ]
    },
    {
      "emoji": "🟣",
      "tags": [
        "disque",
        "violet"
      ]
    },
    {
      "emoji": "🟤",
      "tags": [
        "disque",
        "marron"
      ]
    },
    {
      "emoji": "⚫",
      "tags": [
        "disque",
        "noir"
      ]
    },
    {
      "emoji": "⚪",
      "tags": [
        "disque",
        "blanc"
      ]
    },
    {
      "emoji": "🟥",
      "tags": [
        "carré",
        "rouge"
      ]
    },
    {
      "emoji": "🟧",
      "tags": [
        "carré",
        "orange"
      ]
    },
    {
      "emoji": "🟨",
      "tags": [
        "carré",
        "jaune"
      ]
    },
    {
      "emoji": "🟩",
      "tags": [
        "carré",
        "vert"
      ]
    },
    {
      "emoji": "🟦",
      "tags": [
        "carré",
        "bleu"
      ]
    },
    {
      "emoji": "🟪",
      "tags": [
        "carré",
        "violet"
      ]
    },
    {
      "emoji": "🟫",
      "tags": [
        "carré",
        "marron"
      ]
    },
    {
      "emoji": "⬛",
      "tags": [
        "grand",
        "carré",
        "noir"
      ]
    },
    {
      "emoji": "⬜",
      "tags": [
        "grand",
        "carré",
        "blanc"
      ]
    },
    {
      "emoji": "◼️",
      "tags": [
        "carré",
        "moyen",
        "noir"
      ]
    },
    {
      "emoji": "◻️",
      "tags": [
        "carré",
        "moyen",
        "blanc"
      ]
    },
    {
      "emoji": "◾",
      "tags": [
        "carré",
        "petit",
        "moyen",
        "noir"
      ]
    },
    {
      "emoji": "◽",
      "tags": [
        "carré",
        "petit",
        "moyen",
        "blanc"
      ]
    },
    {
      "emoji": "▪️",
      "tags": [
        "petit",
        "carré",
        "noir"
      ]
    },
    {
      "emoji": "▫️",
      "tags": [
        "petit",
        "carré",
        "blanc"
      ]
    },
    {
      "emoji": "🔶",
      "tags": [
        "grand",
        "losange",
        "orange"
      ]
    },
    {
      "emoji": "🔷",
      "tags": [
        "grand",
        "losange",
        "bleu"
      ]
    },
    {
      "emoji": "🔸",
      "tags": [
        "petit",
        "losange",
        "orange"
      ]
    },
    {
      "emoji": "🔹",
      "tags": [
        "petit",
        "losange",
        "bleu"
      ]
    },
    {
      "emoji": "🔺",
      "tags": [
        "triangle",
        "rouge",
        "pointant"
      ]
    },
    {
      "emoji": "🔻",
      "tags": [
        "triangle",
        "rouge",
        "pointant"
      ]
    },
    {
      "emoji": "💠",
      "tags": [
        "diamant",
        "point"
      ]
    },
    {
      "emoji": "🔘",
      "tags": [
        "bouton",
        "radio"
      ]
    },
    {
      "emoji": "🔳",
      "tags": [
        "carré",
        "blanc"
      ]
    },
    {
      "emoji": "🔲",
      "tags": [
        "carré",
        "noir"
      ]
    },
    {
      "emoji": "🏁",
      "tags": [
        "drapeau",
        "damier"
      ]
    },
    {
      "emoji": "🚩",
      "tags": [
        "drapeau",
        "triangulaire"
      ]
    },
    {
      "emoji": "🎌",
      "tags": [
        "drapeaux",
        "croisés"
      ]
    },
    {
      "emoji": "🏴",
      "tags": [
        "drapeau",
        "noir"
      ]
    },
    {
      "emoji": "🏳️",
      "tags": [
        "drapeau",
        "blanc"
      ]
    },
    {
      "emoji": "🏳️‍🌈",
      "tags": [
        "drapeau",
        "arc",
        "ciel"
      ]
    },
    {
      "emoji": "🏳️‍⚧️",
      "tags": [
        "drapeau",
        "transgenre"
      ]
    },
    {
      "emoji": "🏴‍☠️",
      "tags": [
        "drapeau",
        "pirate"
      ]
    },
    {
      "emoji": "🇦🇨",
      "tags": [
        "drapeau",
        "île",
        "lascension"
      ]
    },
    {
      "emoji": "🇦🇩",
      "tags": [
        "drapeau",
        "andorre"
      ]
    },
    {
      "emoji": "🇦🇪",
      "tags": [
        "drapeau",
        "émirats",
        "arabes",
        "unis"
      ]
    },
    {
      "emoji": "🇦🇫",
      "tags": [
        "drapeau",
        "afghanistan"
      ]
    },
    {
      "emoji": "🇦🇬",
      "tags": [
        "drapeau",
        "antigua",
        "barbuda"
      ]
    },
    {
      "emoji": "🇦🇮",
      "tags": [
        "drapeau",
        "anguilla"
      ]
    },
    {
      "emoji": "🇦🇱",
      "tags": [
        "drapeau",
        "albanie"
      ]
    },
    {
      "emoji": "🇦🇲",
      "tags": [
        "drapeau",
        "arménie"
      ]
    },
    {
      "emoji": "🇦🇴",
      "tags": [
        "drapeau",
        "angola"
      ]
    },
    {
      "emoji": "🇦🇶",
      "tags": [
        "drapeau",
        "antarctique"
      ]
    },
    {
      "emoji": "🇦🇷",
      "tags": [
        "drapeau",
        "argentine"
      ]
    },
    {
      "emoji": "🇦🇸",
      "tags": [
        "drapeau",
        "samoa",
        "américaines"
      ]
    },
    {
      "emoji": "🇦🇹",
      "tags": [
        "drapeau",
        "autriche"
      ]
    },
    {
      "emoji": "🇦🇺",
      "tags": [
        "drapeau",
        "australie"
      ]
    },
    {
      "emoji": "🇦🇼",
      "tags": [
        "drapeau",
        "aruba"
      ]
    },
    {
      "emoji": "🇦🇽",
      "tags": [
        "drapeau",
        "îles",
        "åland"
      ]
    },
    {
      "emoji": "🇦🇿",
      "tags": [
        "drapeau",
        "azerbaïdjan"
      ]
    },
    {
      "emoji": "🇧🇦",
      "tags": [
        "drapeau",
        "bosnie",
        "herzégovine"
      ]
    },
    {
      "emoji": "🇧🇧",
      "tags": [
        "drapeau",
        "barbade"
      ]
    },
    {
      "emoji": "🇧🇩",
      "tags": [
        "drapeau",
        "bangladesh"
      ]
    },
    {
      "emoji": "🇧🇪",
      "tags": [
        "drapeau",
        "belgique"
      ]
    },
    {
      "emoji": "🇧🇫",
      "tags": [
        "drapeau",
        "burkina",
        "faso"
      ]
    },
    {
      "emoji": "🇧🇬",
      "tags": [
        "drapeau",
        "bulgarie"
      ]
    },
    {
      "emoji": "🇧🇭",
      "tags": [
        "drapeau",
        "bahreïn"
      ]
    },
    {
      "emoji": "🇧🇮",
      "tags": [
        "drapeau",
        "burundi"
      ]
    },
    {
      "emoji": "🇧🇯",
      "tags": [
        "drapeau",
        "bénin"
      ]
    },
    {
      "emoji": "🇧🇱",
      "tags": [
        "drapeau",
        "saint",
        "barthélemy"
      ]
    },
    {
      "emoji": "🇧🇲",
      "tags": [
        "drapeau",
        "bermudes"
      ]
    },
    {
      "emoji": "🇧🇳",
      "tags": [
        "drapeau",
        "brunei"
      ]
    },
    {
      "emoji": "🇧🇴",
      "tags": [
        "drapeau",
        "bolivie"
      ]
    },
    {
      "emoji": "🇧🇶",
      "tags": [
        "drapeau",
        "pays",
        "caribéens"
      ]
    },
    {
      "emoji": "🇧🇷",
      "tags": [
        "drapeau",
        "brésil"
      ]
    },
    {
      "emoji": "🇧🇸",
      "tags": [
        "drapeau",
        "bahamas"
      ]
    },
    {
      "emoji": "🇧🇹",
      "tags": [
        "drapeau",
        "bhoutan"
      ]
    },
    {
      "emoji": "🇧🇻",
      "tags": [
        "drapeau",
        "île",
        "bouvet"
      ]
    },
    {
      "emoji": "🇧🇼",
      "tags": [
        "drapeau",
        "botswana"
      ]
    },
    {
      "emoji": "🇧🇾",
      "tags": [
        "drapeau",
        "biélorussie"
      ]
    },
    {
      "emoji": "🇧🇿",
      "tags": [
        "drapeau",
        "belize"
      ]
    },
    {
      "emoji": "🇨🇦",
      "tags": [
        "drapeau",
        "canada"
      ]
    },
    {
      "emoji": "🇨🇨",
      "tags": [
        "drapeau",
        "îles",
        "cocos"
      ]
    },
    {
      "emoji": "🇨🇩",
      "tags": [
        "drapeau",
        "congo",
        "kinshasa"
      ]
    },
    {
      "emoji": "🇨🇫",
      "tags": [
        "drapeau",
        "république",
        "centrafricaine"
      ]
    },
    {
      "emoji": "🇨🇬",
      "tags": [
        "drapeau",
        "congo",
        "brazzaville"
      ]
    },
    {
      "emoji": "🇨🇭",
      "tags": [
        "drapeau",
        "suisse"
      ]
    },
    {
      "emoji": "🇨🇮",
      "tags": [
        "drapeau",
        "côte",
        "divoire"
      ]
    },
    {
      "emoji": "🇨🇰",
      "tags": [
        "drapeau",
        "îles",
        "cook"
      ]
    },
    {
      "emoji": "🇨🇱",
      "tags": [
        "drapeau",
        "chili"
      ]
    },
    {
      "emoji": "🇨🇲",
      "tags": [
        "drapeau",
        "cameroun"
      ]
    },
    {
      "emoji": "🇨🇳",
      "tags": [
        "drapeau",
        "chine"
      ]
    },
    {
      "emoji": "🇨🇴",
      "tags": [
        "drapeau",
        "colombie"
      ]
    },
    {
      "emoji": "🇨🇵",
      "tags": [
        "drapeau",
        "île",
        "clipperton"
      ]
    },
    {
      "emoji": "🇨🇷",
      "tags": [
        "drapeau",
        "costa",
        "rica"
      ]
    },
    {
      "emoji": "🇨🇺",
      "tags": [
        "drapeau",
        "cuba"
      ]
    },
    {
      "emoji": "🇨🇻",
      "tags": [
        "drapeau",
        "cap",
        "vert"
      ]
    },
    {
      "emoji": "🇨🇼",
      "tags": [
        "drapeau",
        "curaçao"
      ]
    },
    {
      "emoji": "🇨🇽",
      "tags": [
        "drapeau",
        "île",
        "christmas"
      ]
    },
    {
      "emoji": "🇨🇾",
      "tags": [
        "drapeau",
        "chypre"
      ]
    },
    {
      "emoji": "🇨🇿",
      "tags": [
        "drapeau",
        "tchéquie"
      ]
    },
    {
      "emoji": "🇩🇪",
      "tags": [
        "drapeau",
        "allemagne"
      ]
    },
    {
      "emoji": "🇩🇬",
      "tags": [
        "drapeau",
        "diego",
        "garcia"
      ]
    },
    {
      "emoji": "🇩🇯",
      "tags": [
        "drapeau",
        "djibouti"
      ]
    },
    {
      "emoji": "🇩🇰",
      "tags": [
        "drapeau",
        "danemark"
      ]
    },
    {
      "emoji": "🇩🇲",
      "tags": [
        "drapeau",
        "dominique"
      ]
    },
    {
      "emoji": "🇩🇴",
      "tags": [
        "drapeau",
        "république",
        "dominicaine"
      ]
    },
    {
      "emoji": "🇩🇿",
      "tags": [
        "drapeau",
        "algérie"
      ]
    },
    {
      "emoji": "🇪🇦",
      "tags": [
        "drapeau",
        "ceuta",
        "melilla"
      ]
    },
    {
      "emoji": "🇪🇨",
      "tags": [
        "drapeau",
        "équateur"
      ]
    },
    {
      "emoji": "🇪🇪",
      "tags": [
        "drapeau",
        "estonie"
      ]
    },
    {
      "emoji": "🇪🇬",
      "tags": [
        "drapeau",
        "égypte"
      ]
    },
    {
      "emoji": "🇪🇭",
      "tags": [
        "drapeau",
        "sahara",
        "occidental"
      ]
    },
    {
      "emoji": "🇪🇷",
      "tags": [
        "drapeau",
        "érythrée"
      ]
    },
    {
      "emoji": "🇪🇸",
      "tags": [
        "drapeau",
        "espagne"
      ]
    },
    {
      "emoji": "🇪🇹",
      "tags": [
        "drapeau",
        "éthiopie"
      ]
    },
    {
      "emoji": "🇪🇺",
      "tags": [
        "drapeau",
        "union",
        "européenne"
      ]
    },
    {
      "emoji": "🇫🇮",
      "tags": [
        "drapeau",
        "finlande"
      ]
    },
    {
      "emoji": "🇫🇯",
      "tags": [
        "drapeau",
        "fidji"
      ]
    },
    {
      "emoji": "🇫🇰",
      "tags": [
        "drapeau",
        "îles",
        "malouines"
      ]
    },
    {
      "emoji": "🇫🇲",
      "tags": [
        "drapeau",
        "micronésie"
      ]
    },
    {
      "emoji": "🇫🇴",
      "tags": [
        "drapeau",
        "îles",
        "féroé"
      ]
    },
    {
      "emoji": "🇫🇷",
      "tags": [
        "drapeau",
        "france"
      ]
    },
    {
      "emoji": "🇬🇦",
      "tags": [
        "drapeau",
        "gabon"
      ]
    },
    {
      "emoji": "🇬🇧",
      "tags": [
        "drapeau",
        "royaume",
        "uni"
      ]
    },
    {
      "emoji": "🇬🇩",
      "tags": [
        "drapeau",
        "grenade"
      ]
    },
    {
      "emoji": "🇬🇪",
      "tags": [
        "drapeau",
        "géorgie"
      ]
    },
    {
      "emoji": "🇬🇫",
      "tags": [
        "drapeau",
        "guyane",
        "française"
      ]
    },
    {
      "emoji": "🇬🇬",
      "tags": [
        "drapeau",
        "guernesey"
      ]
    },
    {
      "emoji": "🇬🇭",
      "tags": [
        "drapeau",
        "ghana"
      ]
    },
    {
      "emoji": "🇬🇮",
      "tags": [
        "drapeau",
        "gibraltar"
      ]
    },
    {
      "emoji": "🇬🇱",
      "tags": [
        "drapeau",
        "groenland"
      ]
    },
    {
      "emoji": "🇬🇲",
      "tags": [
        "drapeau",
        "gambie"
      ]
    },
    {
      "emoji": "🇬🇳",
      "tags": [
        "drapeau",
        "guinée"
      ]
    },
    {
      "emoji": "🇬🇵",
      "tags": [
        "drapeau",
        "guadeloupe"
      ]
    },
    {
      "emoji": "🇬🇶",
      "tags": [
        "drapeau",
        "guinée",
        "équatoriale"
      ]
    },
    {
      "emoji": "🇬🇷",
      "tags": [
        "drapeau",
        "grèce"
      ]
    },
    {
      "emoji": "🇬🇸",
      "tags": [
        "drapeau",
        "géorgie",
        "sud",
        "îles",
        "sandwich",
        "sud"
      ]
    },
    {
      "emoji": "🇬🇹",
      "tags": [
        "drapeau",
        "guatemala"
      ]
    },
    {
      "emoji": "🇬🇺",
      "tags": [
        "drapeau",
        "guam"
      ]
    },
    {
      "emoji": "🇬🇼",
      "tags": [
        "drapeau",
        "guinée",
        "bissau"
      ]
    },
    {
      "emoji": "🇬🇾",
      "tags": [
        "drapeau",
        "guyana"
      ]
    },
    {
      "emoji": "🇭🇰",
      "tags": [
        "drapeau",
        "ra.s.",
        "chinoise",
        "hong",
        "kong"
      ]
    },
    {
      "emoji": "🇭🇲",
      "tags": [
        "drapeau",
        "îles",
        "heard",
        "macdonald"
      ]
    },
    {
      "emoji": "🇭🇳",
      "tags": [
        "drapeau",
        "honduras"
      ]
    },
    {
      "emoji": "🇭🇷",
      "tags": [
        "drapeau",
        "croatie"
      ]
    },
    {
      "emoji": "🇭🇹",
      "tags": [
        "drapeau",
        "haïti"
      ]
    },
    {
      "emoji": "🇭🇺",
      "tags": [
        "drapeau",
        "hongrie"
      ]
    },
    {
      "emoji": "🇮🇨",
      "tags": [
        "drapeau",
        "îles",
        "canaries"
      ]
    },
    {
      "emoji": "🇮🇩",
      "tags": [
        "drapeau",
        "indonésie"
      ]
    },
    {
      "emoji": "🇮🇪",
      "tags": [
        "drapeau",
        "irlande"
      ]
    },
    {
      "emoji": "🇮🇱",
      "tags": [
        "drapeau",
        "israël"
      ]
    },
    {
      "emoji": "🇮🇲",
      "tags": [
        "drapeau",
        "île",
        "man"
      ]
    },
    {
      "emoji": "🇮🇳",
      "tags": [
        "drapeau",
        "inde"
      ]
    },
    {
      "emoji": "🇮🇴",
      "tags": [
        "drapeau",
        "territoire",
        "britannique",
        "locéan",
        "indien"
      ]
    },
    {
      "emoji": "🇮🇶",
      "tags": [
        "drapeau",
        "irak"
      ]
    },
    {
      "emoji": "🇮🇷",
      "tags": [
        "drapeau",
        "iran"
      ]
    },
    {
      "emoji": "🇮🇸",
      "tags": [
        "drapeau",
        "islande"
      ]
    },
    {
      "emoji": "🇮🇹",
      "tags": [
        "drapeau",
        "italie"
      ]
    },
    {
      "emoji": "🇯🇪",
      "tags": [
        "drapeau",
        "jersey"
      ]
    },
    {
      "emoji": "🇯🇲",
      "tags": [
        "drapeau",
        "jamaïque"
      ]
    },
    {
      "emoji": "🇯🇴",
      "tags": [
        "drapeau",
        "jordanie"
      ]
    },
    {
      "emoji": "🇯🇵",
      "tags": [
        "drapeau",
        "japon"
      ]
    },
    {
      "emoji": "🇰🇪",
      "tags": [
        "drapeau",
        "kenya"
      ]
    },
    {
      "emoji": "🇰🇬",
      "tags": [
        "drapeau",
        "kirghizstan"
      ]
    },
    {
      "emoji": "🇰🇭",
      "tags": [
        "drapeau",
        "cambodge"
      ]
    },
    {
      "emoji": "🇰🇮",
      "tags": [
        "drapeau",
        "kiribati"
      ]
    },
    {
      "emoji": "🇰🇲",
      "tags": [
        "drapeau",
        "comores"
      ]
    },
    {
      "emoji": "🇰🇳",
      "tags": [
        "drapeau",
        "saint",
        "christophe",
        "niévès"
      ]
    },
    {
      "emoji": "🇰🇵",
      "tags": [
        "drapeau",
        "corée",
        "nord"
      ]
    },
    {
      "emoji": "🇰🇷",
      "tags": [
        "drapeau",
        "corée",
        "sud"
      ]
    },
    {
      "emoji": "🇰🇼",
      "tags": [
        "drapeau",
        "koweït"
      ]
    },
    {
      "emoji": "🇰🇾",
      "tags": [
        "drapeau",
        "îles",
        "caïmans"
      ]
    },
    {
      "emoji": "🇰🇿",
      "tags": [
        "drapeau",
        "kazakhstan"
      ]
    },
    {
      "emoji": "🇱🇦",
      "tags": [
        "drapeau",
        "laos"
      ]
    },
    {
      "emoji": "🇱🇧",
      "tags": [
        "drapeau",
        "liban"
      ]
    },
    {
      "emoji": "🇱🇨",
      "tags": [
        "drapeau",
        "sainte",
        "lucie"
      ]
    },
    {
      "emoji": "🇱🇮",
      "tags": [
        "drapeau",
        "liechtenstein"
      ]
    },
    {
      "emoji": "🇱🇰",
      "tags": [
        "drapeau",
        "sri",
        "lanka"
      ]
    },
    {
      "emoji": "🇱🇷",
      "tags": [
        "drapeau",
        "liberia"
      ]
    },
    {
      "emoji": "🇱🇸",
      "tags": [
        "drapeau",
        "lesotho"
      ]
    },
    {
      "emoji": "🇱🇹",
      "tags": [
        "drapeau",
        "lituanie"
      ]
    },
    {
      "emoji": "🇱🇺",
      "tags": [
        "drapeau",
        "luxembourg"
      ]
    },
    {
      "emoji": "🇱🇻",
      "tags": [
        "drapeau",
        "lettonie"
      ]
    },
    {
      "emoji": "🇱🇾",
      "tags": [
        "drapeau",
        "libye"
      ]
    },
    {
      "emoji": "🇲🇦",
      "tags": [
        "drapeau",
        "maroc"
      ]
    },
    {
      "emoji": "🇲🇨",
      "tags": [
        "drapeau",
        "monaco"
      ]
    },
    {
      "emoji": "🇲🇩",
      "tags": [
        "drapeau",
        "moldavie"
      ]
    },
    {
      "emoji": "🇲🇪",
      "tags": [
        "drapeau",
        "monténégro"
      ]
    },
    {
      "emoji": "🇲🇫",
      "tags": [
        "drapeau",
        "saint",
        "martin"
      ]
    },
    {
      "emoji": "🇲🇬",
      "tags": [
        "drapeau",
        "madagascar"
      ]
    },
    {
      "emoji": "🇲🇭",
      "tags": [
        "drapeau",
        "îles",
        "marshall"
      ]
    },
    {
      "emoji": "🇲🇰",
      "tags": [
        "drapeau",
        "macédoine",
        "nord"
      ]
    },
    {
      "emoji": "🇲🇱",
      "tags": [
        "drapeau",
        "mali"
      ]
    },
    {
      "emoji": "🇲🇲",
      "tags": [
        "drapeau",
        "myanmar",
        "birmanie)"
      ]
    },
    {
      "emoji": "🇲🇳",
      "tags": [
        "drapeau",
        "mongolie"
      ]
    },
    {
      "emoji": "🇲🇴",
      "tags": [
        "drapeau",
        "ra.s.",
        "chinoise",
        "macao"
      ]
    },
    {
      "emoji": "🇲🇵",
      "tags": [
        "drapeau",
        "îles",
        "mariannes",
        "nord"
      ]
    },
    {
      "emoji": "🇲🇶",
      "tags": [
        "drapeau",
        "martinique"
      ]
    },
    {
      "emoji": "🇲🇷",
      "tags": [
        "drapeau",
        "mauritanie"
      ]
    },
    {
      "emoji": "🇲🇸",
      "tags": [
        "drapeau",
        "montserrat"
      ]
    },
    {
      "emoji": "🇲🇹",
      "tags": [
        "drapeau",
        "malte"
      ]
    },
    {
      "emoji": "🇲🇺",
      "tags": [
        "drapeau",
        "maurice"
      ]
    },
    {
      "emoji": "🇲🇻",
      "tags": [
        "drapeau",
        "maldives"
      ]
    },
    {
      "emoji": "🇲🇼",
      "tags": [
        "drapeau",
        "malawi"
      ]
    },
    {
      "emoji": "🇲🇽",
      "tags": [
        "drapeau",
        "mexique"
      ]
    },
    {
      "emoji": "🇲🇾",
      "tags": [
        "drapeau",
        "malaisie"
      ]
    },
    {
      "emoji": "🇲🇿",
      "tags": [
        "drapeau",
        "mozambique"
      ]
    },
    {
      "emoji": "🇳🇦",
      "tags": [
        "drapeau",
        "namibie"
      ]
    },
    {
      "emoji": "🇳🇨",
      "tags": [
        "drapeau",
        "nouvelle",
        "calédonie"
      ]
    },
    {
      "emoji": "🇳🇪",
      "tags": [
        "drapeau",
        "niger"
      ]
    },
    {
      "emoji": "🇳🇫",
      "tags": [
        "drapeau",
        "île",
        "norfolk"
      ]
    },
    {
      "emoji": "🇳🇬",
      "tags": [
        "drapeau",
        "nigeria"
      ]
    },
    {
      "emoji": "🇳🇮",
      "tags": [
        "drapeau",
        "nicaragua"
      ]
    },
    {
      "emoji": "🇳🇱",
      "tags": [
        "drapeau",
        "pays"
      ]
    },
    {
      "emoji": "🇳🇴",
      "tags": [
        "drapeau",
        "norvège"
      ]
    },
    {
      "emoji": "🇳🇵",
      "tags": [
        "drapeau",
        "népal"
      ]
    },
    {
      "emoji": "🇳🇷",
      "tags": [
        "drapeau",
        "nauru"
      ]
    },
    {
      "emoji": "🇳🇺",
      "tags": [
        "drapeau",
        "niue"
      ]
    },
    {
      "emoji": "🇳🇿",
      "tags": [
        "drapeau",
        "nouvelle",
        "zélande"
      ]
    },
    {
      "emoji": "🇴🇲",
      "tags": [
        "drapeau",
        "oman"
      ]
    },
    {
      "emoji": "🇵🇦",
      "tags": [
        "drapeau",
        "panama"
      ]
    },
    {
      "emoji": "🇵🇪",
      "tags": [
        "drapeau",
        "pérou"
      ]
    },
    {
      "emoji": "🇵🇫",
      "tags": [
        "drapeau",
        "polynésie",
        "française"
      ]
    },
    {
      "emoji": "🇵🇬",
      "tags": [
        "drapeau",
        "papouasie",
        "nouvelle",
        "guinée"
      ]
    },
    {
      "emoji": "🇵🇭",
      "tags": [
        "drapeau",
        "philippines"
      ]
    },
    {
      "emoji": "🇵🇰",
      "tags": [
        "drapeau",
        "pakistan"
      ]
    },
    {
      "emoji": "🇵🇱",
      "tags": [
        "drapeau",
        "pologne"
      ]
    },
    {
      "emoji": "🇵🇲",
      "tags": [
        "drapeau",
        "saint",
        "pierre",
        "miquelon"
      ]
    },
    {
      "emoji": "🇵🇳",
      "tags": [
        "drapeau",
        "îles",
        "pitcairn"
      ]
    },
    {
      "emoji": "🇵🇷",
      "tags": [
        "drapeau",
        "porto",
        "rico"
      ]
    },
    {
      "emoji": "🇵🇸",
      "tags": [
        "drapeau",
        "territoires",
        "palestiniens"
      ]
    },
    {
      "emoji": "🇵🇹",
      "tags": [
        "drapeau",
        "portugal"
      ]
    },
    {
      "emoji": "🇵🇼",
      "tags": [
        "drapeau",
        "palaos"
      ]
    },
    {
      "emoji": "🇵🇾",
      "tags": [
        "drapeau",
        "paraguay"
      ]
    },
    {
      "emoji": "🇶🇦",
      "tags": [
        "drapeau",
        "qatar"
      ]
    },
    {
      "emoji": "🇷🇪",
      "tags": [
        "drapeau",
        "réunion"
      ]
    },
    {
      "emoji": "🇷🇴",
      "tags": [
        "drapeau",
        "roumanie"
      ]
    },
    {
      "emoji": "🇷🇸",
      "tags": [
        "drapeau",
        "serbie"
      ]
    },
    {
      "emoji": "🇷🇺",
      "tags": [
        "drapeau",
        "russie"
      ]
    },
    {
      "emoji": "🇷🇼",
      "tags": [
        "drapeau",
        "rwanda"
      ]
    },
    {
      "emoji": "🇸🇦",
      "tags": [
        "drapeau",
        "arabie",
        "saoudite"
      ]
    },
    {
      "emoji": "🇸🇧",
      "tags": [
        "drapeau",
        "îles",
        "salomon"
      ]
    },
    {
      "emoji": "🇸🇨",
      "tags": [
        "drapeau",
        "seychelles"
      ]
    },
    {
      "emoji": "🇸🇩",
      "tags": [
        "drapeau",
        "soudan"
      ]
    },
    {
      "emoji": "🇸🇪",
      "tags": [
        "drapeau",
        "suède"
      ]
    },
    {
      "emoji": "🇸🇬",
      "tags": [
        "drapeau",
        "singapour"
      ]
    },
    {
      "emoji": "🇸🇭",
      "tags": [
        "drapeau",
        "sainte",
        "hélène"
      ]
    },
    {
      "emoji": "🇸🇮",
      "tags": [
        "drapeau",
        "slovénie"
      ]
    },
    {
      "emoji": "🇸🇯",
      "tags": [
        "drapeau",
        "svalbard",
        "jan",
        "mayen"
      ]
    },
    {
      "emoji": "🇸🇰",
      "tags": [
        "drapeau",
        "slovaquie"
      ]
    },
    {
      "emoji": "🇸🇱",
      "tags": [
        "drapeau",
        "sierra",
        "leone"
      ]
    },
    {
      "emoji": "🇸🇲",
      "tags": [
        "drapeau",
        "saint",
        "marin"
      ]
    },
    {
      "emoji": "🇸🇳",
      "tags": [
        "drapeau",
        "sénégal"
      ]
    },
    {
      "emoji": "🇸🇴",
      "tags": [
        "drapeau",
        "somalie"
      ]
    },
    {
      "emoji": "🇸🇷",
      "tags": [
        "drapeau",
        "suriname"
      ]
    },
    {
      "emoji": "🇸🇸",
      "tags": [
        "drapeau",
        "soudan",
        "sud"
      ]
    },
    {
      "emoji": "🇸🇹",
      "tags": [
        "drapeau",
        "sao",
        "tomé",
        "principe"
      ]
    },
    {
      "emoji": "🇸🇻",
      "tags": [
        "drapeau",
        "salvador"
      ]
    },
    {
      "emoji": "🇸🇽",
      "tags": [
        "drapeau",
        "saint",
        "martin",
        "partie",
        "néerlandaise"
      ]
    },
    {
      "emoji": "🇸🇾",
      "tags": [
        "drapeau",
        "syrie"
      ]
    },
    {
      "emoji": "🇸🇿",
      "tags": [
        "drapeau",
        "eswatini"
      ]
    },
    {
      "emoji": "🇹🇦",
      "tags": [
        "drapeau",
        "tristan",
        "cunha"
      ]
    },
    {
      "emoji": "🇹🇨",
      "tags": [
        "drapeau",
        "îles",
        "turques",
        "caïques"
      ]
    },
    {
      "emoji": "🇹🇩",
      "tags": [
        "drapeau",
        "tchad"
      ]
    },
    {
      "emoji": "🇹🇫",
      "tags": [
        "drapeau",
        "terres",
        "australes",
        "françaises"
      ]
    },
    {
      "emoji": "🇹🇬",
      "tags": [
        "drapeau",
        "togo"
      ]
    },
    {
      "emoji": "🇹🇭",
      "tags": [
        "drapeau",
        "thaïlande"
      ]
    },
    {
      "emoji": "🇹🇯",
      "tags": [
        "drapeau",
        "tadjikistan"
      ]
    },
    {
      "emoji": "🇹🇰",
      "tags": [
        "drapeau",
        "tokelau"
      ]
    },
    {
      "emoji": "🇹🇱",
      "tags": [
        "drapeau",
        "timor",
        "oriental"
      ]
    },
    {
      "emoji": "🇹🇲",
      "tags": [
        "drapeau",
        "turkménistan"
      ]
    },
    {
      "emoji": "🇹🇳",
      "tags": [
        "drapeau",
        "tunisie"
      ]
    },
    {
      "emoji": "🇹🇴",
      "tags": [
        "drapeau",
        "tonga"
      ]
    },
    {
      "emoji": "🇹🇷",
      "tags": [
        "drapeau",
        "turquie"
      ]
    },
    {
      "emoji": "🇹🇹",
      "tags": [
        "drapeau",
        "trinité",
        "tobago"
      ]
    },
    {
      "emoji": "🇹🇻",
      "tags": [
        "drapeau",
        "tuvalu"
      ]
    },
    {
      "emoji": "🇹🇼",
      "tags": [
        "drapeau",
        "taïwan"
      ]
    },
    {
      "emoji": "🇹🇿",
      "tags": [
        "drapeau",
        "tanzanie"
      ]
    },
    {
      "emoji": "🇺🇦",
      "tags": [
        "drapeau",
        "ukraine"
      ]
    },
    {
      "emoji": "🇺🇬",
      "tags": [
        "drapeau",
        "ouganda"
      ]
    },
    {
      "emoji": "🇺🇲",
      "tags": [
        "drapeau",
        "îles",
        "mineures",
        "éloignées",
        "états",
        "unis"
      ]
    },
    {
      "emoji": "🇺🇳",
      "tags": [
        "drapeau",
        "nations",
        "unies"
      ]
    },
    {
      "emoji": "🇺🇸",
      "tags": [
        "drapeau",
        "états",
        "unis"
      ]
    },
    {
      "emoji": "🇺🇾",
      "tags": [
        "drapeau",
        "uruguay"
      ]
    },
    {
      "emoji": "🇺🇿",
      "tags": [
        "drapeau",
        "ouzbékistan"
      ]
    },
    {
      "emoji": "🇻🇦",
      "tags": [
        "drapeau",
        "cité",
        "vatican"
      ]
    },
    {
      "emoji": "🇻🇨",
      "tags": [
        "drapeau",
        "saint",
        "vincent",
        "grenadines"
      ]
    },
    {
      "emoji": "🇻🇪",
      "tags": [
        "drapeau",
        "venezuela"
      ]
    },
    {
      "emoji": "🇻🇬",
      "tags": [
        "drapeau",
        "îles",
        "vierges",
        "britanniques"
      ]
    },
    {
      "emoji": "🇻🇮",
      "tags": [
        "drapeau",
        "îles",
        "vierges",
        "états",
        "unis"
      ]
    },
    {
      "emoji": "🇻🇳",
      "tags": [
        "drapeau",
        "viêt",
        "nam"
      ]
    },
    {
      "emoji": "🇻🇺",
      "tags": [
        "drapeau",
        "vanuatu"
      ]
    },
    {
      "emoji": "🇼🇫",
      "tags": [
        "drapeau",
        "wallis",
        "futuna"
      ]
    },
    {
      "emoji": "🇼🇸",
      "tags": [
        "drapeau",
        "samoa"
      ]
    },
    {
      "emoji": "🇽🇰",
      "tags": [
        "drapeau",
        "kosovo"
      ]
    },
    {
      "emoji": "🇾🇪",
      "tags": [
        "drapeau",
        "yémen"
      ]
    },
    {
      "emoji": "🇾🇹",
      "tags": [
        "drapeau",
        "mayotte"
      ]
    },
    {
      "emoji": "🇿🇦",
      "tags": [
        "drapeau",
        "afrique",
        "sud"
      ]
    },
    {
      "emoji": "🇿🇲",
      "tags": [
        "drapeau",
        "zambie"
      ]
    },
    {
      "emoji": "🇿🇼",
      "tags": [
        "drapeau",
        "zimbabwe"
      ]
    },
    {
      "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      "tags": [
        "drapeau",
        "angleterre"
      ]
    },
    {
      "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      "tags": [
        "drapeau",
        "écosse"
      ]
    },
    {
      "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      "tags": [
        "drapeau",
        "pays",
        "galles"
      ]
    },
    {
      "emoji": "🧒",
      "tags": [
        "enfant"
      ]
    },
    {
      "emoji": "🧑",
      "tags": [
        "adulte"
      ]
    },
    {
      "emoji": "👱",
      "tags": [
        "blonde"
      ]
    },
    {
      "emoji": "🧔",
      "tags": [
        "barbue"
      ]
    },
    {
      "emoji": "🧑‍🦰",
      "tags": [
        "adulte",
        "cheveux",
        "roux"
      ]
    },
    {
      "emoji": "🧑‍🦱",
      "tags": [
        "adulte",
        "cheveux",
        "bouclés"
      ]
    },
    {
      "emoji": "🧑‍🦳",
      "tags": [
        "adulte",
        "cheveux",
        "blancs"
      ]
    },
    {
      "emoji": "🧑‍🦲",
      "tags": [
        "adulte",
        "chauve"
      ]
    },
    {
      "emoji": "🧓",
      "tags": [
        "âgée"
      ]
    },
    {
      "emoji": "🙍",
      "tags": [
        "fronçant",
        "sourcils"
      ]
    },
    {
      "emoji": "🙎",
      "tags": [
        "boude"
      ]
    },
    {
      "emoji": "🙅",
      "tags": [
        "geste",
        "dinterdiction"
      ]
    },
    {
      "emoji": "🙆",
      "tags": [
        "geste",
        "dacceptation"
      ]
    },
    {
      "emoji": "💁",
      "tags": [
        "paume"
      ]
    },
    {
      "emoji": "🙋",
      "tags": [
        "lève",
        "main"
      ]
    },
    {
      "emoji": "🧏",
      "tags": [
        "sourde"
      ]
    },
    {
      "emoji": "🙇",
      "tags": [
        "sincline"
      ]
    },
    {
      "emoji": "🤦",
      "tags": [
        "paume",
        "visage"
      ]
    },
    {
      "emoji": "🤷",
      "tags": [
        "hausse",
        "épaules"
      ]
    },
    {
      "emoji": "🧑‍⚕️",
      "tags": [
        "professionnel",
        "santé",
        "genres"
      ]
    },
    {
      "emoji": "🧑‍🎓",
      "tags": [
        "étudiant",
        "genres"
      ]
    },
    {
      "emoji": "🧑‍🏫",
      "tags": [
        "personnel",
        "enseignant"
      ]
    },
    {
      "emoji": "🧑‍⚖️",
      "tags": [
        "juge"
      ]
    },
    {
      "emoji": "🧑‍🌾",
      "tags": [
        "fermier",
        "genres"
      ]
    },
    {
      "emoji": "🧑‍🍳",
      "tags": [
        "cuisinier",
        "genres"
      ]
    },
    {
      "emoji": "🧑‍🔧",
      "tags": [
        "mécanicien",
        "genres"
      ]
    },
    {
      "emoji": "🧑‍🏭",
      "tags": [
        "ouvrier",
        "genres"
      ]
    },
    {
      "emoji": "🧑‍💼",
      "tags": [
        "employé",
        "bureau",
        "genres"
      ]
    },
    {
      "emoji": "🧑‍🔬",
      "tags": [
        "scientifique"
      ]
    },
    {
      "emoji": "🧑‍💻",
      "tags": [
        "informaticien",
        "genres"
      ]
    },
    {
      "emoji": "🧑‍🎤",
      "tags": [
        "chanteur",
        "genres"
      ]
    },
    {
      "emoji": "🧑‍🎨",
      "tags": [
        "artiste"
      ]
    },
    {
      "emoji": "🧑‍✈️",
      "tags": [
        "pilote"
      ]
    },
    {
      "emoji": "🧑‍🚀",
      "tags": [
        "astronaute"
      ]
    },
    {
      "emoji": "🧑‍🚒",
      "tags": [
        "pompier"
      ]
    },
    {
      "emoji": "👮",
      "tags": [
        "officier",
        "police"
      ]
    },
    {
      "emoji": "🕵️",
      "tags": [
        "détective"
      ]
    },
    {
      "emoji": "💂",
      "tags": [
        "garde"
      ]
    },
    {
      "emoji": "👷",
      "tags": [
        "personnel",
        "bâtiment"
      ]
    },
    {
      "emoji": "👳",
      "tags": [
        "turban"
      ]
    },
    {
      "emoji": "👲",
      "tags": [
        "homme",
        "casquette",
        "chinoise"
      ]
    },
    {
      "emoji": "🤵",
      "tags": [
        "smoking"
      ]
    },
    {
      "emoji": "👰",
      "tags": [
        "mariée",
        "voile"
      ]
    },
    {
      "emoji": "🧑‍🍼",
      "tags": [
        "allaitant",
        "bébé"
      ]
    },
    {
      "emoji": "🧑‍🎄",
      "tags": [
        "santa"
      ]
    },
    {
      "emoji": "🦸",
      "tags": [
        "super",
        "héros"
      ]
    },
    {
      "emoji": "🦹",
      "tags": [
        "super",
        "vilain"
      ]
    },
    {
      "emoji": "🧙",
      "tags": [
        "mage"
      ]
    },
    {
      "emoji": "🧛",
      "tags": [
        "vampire"
      ]
    },
    {
      "emoji": "🧜",
      "tags": [
        "créature",
        "aquatique"
      ]
    },
    {
      "emoji": "🧝",
      "tags": [
        "elfe"
      ]
    },
    {
      "emoji": "🧞",
      "tags": [
        "génie"
      ]
    },
    {
      "emoji": "🧟",
      "tags": [
        "zombie"
      ]
    },
    {
      "emoji": "💆",
      "tags": [
        "masser"
      ]
    },
    {
      "emoji": "💇",
      "tags": [
        "couper",
        "cheveux"
      ]
    },
    {
      "emoji": "🚶",
      "tags": [
        "marche"
      ]
    },
    {
      "emoji": "🧍",
      "tags": []
    },
    {
      "emoji": "🧎",
      "tags": [
        "genoux"
      ]
    },
    {
      "emoji": "🧑‍🦯",
      "tags": [
        "canne",
        "blanche"
      ]
    },
    {
      "emoji": "🧑‍🦼",
      "tags": [
        "fauteuil",
        "motorisé"
      ]
    },
    {
      "emoji": "🧑‍🦽",
      "tags": [
        "fauteuil",
        "roulant",
        "manuel"
      ]
    },
    {
      "emoji": "🏃",
      "tags": [
        "court"
      ]
    },
    {
      "emoji": "🕴️",
      "tags": [
        "homme",
        "daffaires",
        "lévitation"
      ]
    },
    {
      "emoji": "🧖",
      "tags": [
        "hammam"
      ]
    },
    {
      "emoji": "🧗",
      "tags": [
        "grimpe"
      ]
    },
    {
      "emoji": "🤺",
      "tags": [
        "escrimeur"
      ]
    },
    {
      "emoji": "🏌️",
      "tags": [
        "joueur",
        "golf"
      ]
    },
    {
      "emoji": "🏄",
      "tags": [
        "surf"
      ]
    },
    {
      "emoji": "🚣",
      "tags": [
        "ramant",
        "barque"
      ]
    },
    {
      "emoji": "🏊",
      "tags": [
        "nageant"
      ]
    },
    {
      "emoji": "⛹️",
      "tags": [
        "ballon"
      ]
    },
    {
      "emoji": "🏋️",
      "tags": [
        "haltérophile"
      ]
    },
    {
      "emoji": "🚴",
      "tags": [
        "cycliste"
      ]
    },
    {
      "emoji": "🚵",
      "tags": [
        "vtt"
      ]
    },
    {
      "emoji": "🤸",
      "tags": [
        "roue"
      ]
    },
    {
      "emoji": "🤽",
      "tags": [
        "jouant",
        "water",
        "polo"
      ]
    },
    {
      "emoji": "🤾",
      "tags": [
        "jouant",
        "handball"
      ]
    },
    {
      "emoji": "🤹",
      "tags": [
        "jongle"
      ]
    },
    {
      "emoji": "🧘",
      "tags": [
        "posture",
        "lotus"
      ]
    },
    {
      "emoji": "🛀",
      "tags": [
        "prenant",
        "bain"
      ]
    },
    {
      "emoji": "🛌",
      "tags": [
        "lit"
      ]
    },
    {
      "emoji": "👦",
      "tags": [
        "garçon"
      ]
    },
    {
      "emoji": "👨",
      "tags": [
        "homme"
      ]
    },
    {
      "emoji": "🧔‍♂️",
      "tags": [
        "homme",
        "barbu"
      ]
    },
    {
      "emoji": "👨‍🦰",
      "tags": [
        "homme",
        "cheveux",
        "roux"
      ]
    },
    {
      "emoji": "👨‍🦱",
      "tags": [
        "homme",
        "cheveux",
        "bouclés"
      ]
    },
    {
      "emoji": "👨‍🦳",
      "tags": [
        "homme",
        "cheveux",
        "blancs"
      ]
    },
    {
      "emoji": "👨‍🦲",
      "tags": [
        "homme",
        "chauve"
      ]
    },
    {
      "emoji": "👱‍♂️",
      "tags": [
        "homme",
        "blond"
      ]
    },
    {
      "emoji": "👴",
      "tags": [
        "homme",
        "âgé"
      ]
    },
    {
      "emoji": "🙍‍♂️",
      "tags": [
        "homme",
        "fronçant",
        "sourcils"
      ]
    },
    {
      "emoji": "🙎‍♂️",
      "tags": [
        "homme",
        "boude"
      ]
    },
    {
      "emoji": "🙅‍♂️",
      "tags": [
        "homme",
        "geste",
        "dinterdiction"
      ]
    },
    {
      "emoji": "🙆‍♂️",
      "tags": [
        "homme",
        "geste",
        "dacceptation"
      ]
    },
    {
      "emoji": "💁‍♂️",
      "tags": [
        "homme",
        "paume"
      ]
    },
    {
      "emoji": "🙋‍♂️",
      "tags": [
        "homme",
        "lève",
        "main"
      ]
    },
    {
      "emoji": "🧏‍♂️",
      "tags": [
        "homme",
        "sourd"
      ]
    },
    {
      "emoji": "🙇‍♂️",
      "tags": [
        "homme",
        "sincline"
      ]
    },
    {
      "emoji": "🤦‍♂️",
      "tags": [
        "homme",
        "paume",
        "visage"
      ]
    },
    {
      "emoji": "🤷‍♂️",
      "tags": [
        "homme",
        "hausse",
        "épaules"
      ]
    },
    {
      "emoji": "👨‍⚕️",
      "tags": [
        "professionnel",
        "santé"
      ]
    },
    {
      "emoji": "👨‍🎓",
      "tags": [
        "étudiant"
      ]
    },
    {
      "emoji": "👨‍🏫",
      "tags": [
        "enseignant"
      ]
    },
    {
      "emoji": "👨‍⚖️",
      "tags": [
        "juge",
        "homme"
      ]
    },
    {
      "emoji": "👨‍🌾",
      "tags": [
        "fermier"
      ]
    },
    {
      "emoji": "👨‍🍳",
      "tags": [
        "cuisinier"
      ]
    },
    {
      "emoji": "👨‍🔧",
      "tags": [
        "mécanicien"
      ]
    },
    {
      "emoji": "👨‍🏭",
      "tags": [
        "ouvrier"
      ]
    },
    {
      "emoji": "👨‍💼",
      "tags": [
        "employé",
        "bureau"
      ]
    },
    {
      "emoji": "👨‍🔬",
      "tags": [
        "scientifique",
        "homme"
      ]
    },
    {
      "emoji": "👨‍💻",
      "tags": [
        "informaticien"
      ]
    },
    {
      "emoji": "👨‍🎤",
      "tags": [
        "chanteur"
      ]
    },
    {
      "emoji": "👨‍🎨",
      "tags": [
        "artiste",
        "homme"
      ]
    },
    {
      "emoji": "👨‍✈️",
      "tags": [
        "pilote",
        "homme"
      ]
    },
    {
      "emoji": "👨‍🚀",
      "tags": [
        "astronaute",
        "homme"
      ]
    },
    {
      "emoji": "👨‍🚒",
      "tags": [
        "pompier",
        "homme"
      ]
    },
    {
      "emoji": "👮‍♂️",
      "tags": [
        "policier"
      ]
    },
    {
      "emoji": "🕵️‍♂️",
      "tags": [
        "détective",
        "homme"
      ]
    },
    {
      "emoji": "💂‍♂️",
      "tags": [
        "garde",
        "homme"
      ]
    },
    {
      "emoji": "👷‍♂️",
      "tags": [
        "ouvrier",
        "bâtiment"
      ]
    },
    {
      "emoji": "🤴",
      "tags": [
        "prince"
      ]
    },
    {
      "emoji": "👳‍♂️",
      "tags": [
        "homme",
        "turban"
      ]
    },
    {
      "emoji": "🤵‍♂️",
      "tags": [
        "homme",
        "smoking"
      ]
    },
    {
      "emoji": "👰‍♂️",
      "tags": [
        "homme",
        "voile"
      ]
    },
    {
      "emoji": "👨‍🍼",
      "tags": [
        "homme",
        "allaitant",
        "bébé"
      ]
    },
    {
      "emoji": "🦸‍♂️",
      "tags": [
        "super",
        "héros",
        "homme"
      ]
    },
    {
      "emoji": "🦹‍♂️",
      "tags": [
        "super",
        "vilain",
        "homme"
      ]
    },
    {
      "emoji": "🧙‍♂️",
      "tags": [
        "mage",
        "homme"
      ]
    },
    {
      "emoji": "🧚‍♂️",
      "tags": [
        "féetaud"
      ]
    },
    {
      "emoji": "🧛‍♂️",
      "tags": [
        "vampire",
        "homme"
      ]
    },
    {
      "emoji": "🧜‍♂️",
      "tags": [
        "triton"
      ]
    },
    {
      "emoji": "🧝‍♂️",
      "tags": [
        "elfe",
        "homme"
      ]
    },
    {
      "emoji": "🧞‍♂️",
      "tags": [
        "génie",
        "homme"
      ]
    },
    {
      "emoji": "🧟‍♂️",
      "tags": [
        "zombie",
        "homme"
      ]
    },
    {
      "emoji": "💆‍♂️",
      "tags": [
        "homme",
        "masser"
      ]
    },
    {
      "emoji": "💇‍♂️",
      "tags": [
        "homme",
        "couper",
        "cheveux"
      ]
    },
    {
      "emoji": "🚶‍♂️",
      "tags": [
        "homme",
        "marche"
      ]
    },
    {
      "emoji": "🧍‍♂️",
      "tags": [
        "homme"
      ]
    },
    {
      "emoji": "🧎‍♂️",
      "tags": [
        "homme",
        "genoux"
      ]
    },
    {
      "emoji": "👨‍🦯",
      "tags": [
        "homme",
        "canne",
        "blanche"
      ]
    },
    {
      "emoji": "👨‍🦼",
      "tags": [
        "homme",
        "fauteuil",
        "motorisé"
      ]
    },
    {
      "emoji": "👨‍🦽",
      "tags": [
        "homme",
        "fauteuil",
        "roulant",
        "manuel"
      ]
    },
    {
      "emoji": "🏃‍♂️",
      "tags": [
        "homme",
        "court"
      ]
    },
    {
      "emoji": "🕺",
      "tags": [
        "danseur"
      ]
    },
    {
      "emoji": "🧖‍♂️",
      "tags": [
        "homme",
        "hammam"
      ]
    },
    {
      "emoji": "🧗‍♂️",
      "tags": [
        "homme",
        "grimpe"
      ]
    },
    {
      "emoji": "🏌️‍♂️",
      "tags": [
        "golfeur"
      ]
    },
    {
      "emoji": "🏄‍♂️",
      "tags": [
        "surfeur"
      ]
    },
    {
      "emoji": "🚣‍♂️",
      "tags": [
        "rameur",
        "barque"
      ]
    },
    {
      "emoji": "🏊‍♂️",
      "tags": [
        "nageur"
      ]
    },
    {
      "emoji": "⛹️‍♂️",
      "tags": [
        "homme",
        "ballon"
      ]
    },
    {
      "emoji": "🏋️‍♂️",
      "tags": [
        "homme",
        "haltérophile"
      ]
    },
    {
      "emoji": "🚴‍♂️",
      "tags": [
        "cycliste",
        "homme"
      ]
    },
    {
      "emoji": "🚵‍♂️",
      "tags": [
        "homme",
        "vtt"
      ]
    },
    {
      "emoji": "🤸‍♂️",
      "tags": [
        "homme",
        "roue"
      ]
    },
    {
      "emoji": "🤽‍♂️",
      "tags": [
        "joueur",
        "water",
        "polo"
      ]
    },
    {
      "emoji": "🤾‍♂️",
      "tags": [
        "handballeur"
      ]
    },
    {
      "emoji": "🤹‍♂️",
      "tags": [
        "jongleur"
      ]
    },
    {
      "emoji": "🧘‍♂️",
      "tags": [
        "homme",
        "posture",
        "lotus"
      ]
    },
    {
      "emoji": "👧",
      "tags": [
        "fille"
      ]
    },
    {
      "emoji": "🧔‍♀️",
      "tags": [
        "femme",
        "barbue"
      ]
    },
    {
      "emoji": "👩",
      "tags": [
        "femme"
      ]
    },
    {
      "emoji": "👩‍🦰",
      "tags": [
        "femme",
        "cheveux",
        "roux"
      ]
    },
    {
      "emoji": "👩‍🦱",
      "tags": [
        "femme",
        "cheveux",
        "bouclés"
      ]
    },
    {
      "emoji": "👩‍🦳",
      "tags": [
        "femme",
        "cheveux",
        "blancs"
      ]
    },
    {
      "emoji": "👩‍🦲",
      "tags": [
        "femme",
        "chauve"
      ]
    },
    {
      "emoji": "👱‍♀️",
      "tags": [
        "femme",
        "blonde"
      ]
    },
    {
      "emoji": "👵",
      "tags": [
        "femme",
        "âgée"
      ]
    },
    {
      "emoji": "🙍‍♀️",
      "tags": [
        "femme",
        "fronçant",
        "sourcils"
      ]
    },
    {
      "emoji": "🙎‍♀️",
      "tags": [
        "femme",
        "boude"
      ]
    },
    {
      "emoji": "🙅‍♀️",
      "tags": [
        "femme",
        "geste",
        "dinterdiction"
      ]
    },
    {
      "emoji": "🙆‍♀️",
      "tags": [
        "femme",
        "geste",
        "dacceptation"
      ]
    },
    {
      "emoji": "💁‍♀️",
      "tags": [
        "femme",
        "paume"
      ]
    },
    {
      "emoji": "🙋‍♀️",
      "tags": [
        "femme",
        "lève",
        "main"
      ]
    },
    {
      "emoji": "🧏‍♀️",
      "tags": [
        "femme",
        "sourde"
      ]
    },
    {
      "emoji": "🙇‍♀️",
      "tags": [
        "femme",
        "sincline"
      ]
    },
    {
      "emoji": "🤦‍♀️",
      "tags": [
        "femme",
        "paume",
        "visage"
      ]
    },
    {
      "emoji": "🤷‍♀️",
      "tags": [
        "femme",
        "hausse",
        "épaules"
      ]
    },
    {
      "emoji": "👩‍⚕️",
      "tags": [
        "professionnelle",
        "santé"
      ]
    },
    {
      "emoji": "👩‍🎓",
      "tags": [
        "étudiante"
      ]
    },
    {
      "emoji": "👩‍🏫",
      "tags": [
        "enseignante"
      ]
    },
    {
      "emoji": "👩‍⚖️",
      "tags": [
        "juge",
        "femme"
      ]
    },
    {
      "emoji": "👩‍🌾",
      "tags": [
        "fermière"
      ]
    },
    {
      "emoji": "👩‍🍳",
      "tags": [
        "cuisinière"
      ]
    },
    {
      "emoji": "👩‍🔧",
      "tags": [
        "mécanicienne"
      ]
    },
    {
      "emoji": "👩‍🏭",
      "tags": [
        "ouvrière"
      ]
    },
    {
      "emoji": "👩‍💼",
      "tags": [
        "employée",
        "bureau"
      ]
    },
    {
      "emoji": "👩‍🔬",
      "tags": [
        "scientifique",
        "femme"
      ]
    },
    {
      "emoji": "👩‍💻",
      "tags": [
        "informaticienne"
      ]
    },
    {
      "emoji": "👩‍🎤",
      "tags": [
        "chanteuse"
      ]
    },
    {
      "emoji": "👩‍🎨",
      "tags": [
        "artiste",
        "femme"
      ]
    },
    {
      "emoji": "👩‍✈️",
      "tags": [
        "pilote",
        "femme"
      ]
    },
    {
      "emoji": "👩‍🚀",
      "tags": [
        "astronaute",
        "femme"
      ]
    },
    {
      "emoji": "👩‍🚒",
      "tags": [
        "pompier",
        "femme"
      ]
    },
    {
      "emoji": "👮‍♀️",
      "tags": [
        "policière"
      ]
    },
    {
      "emoji": "🕵️‍♀️",
      "tags": [
        "détective",
        "femme"
      ]
    },
    {
      "emoji": "💂‍♀️",
      "tags": [
        "garde",
        "femme"
      ]
    },
    {
      "emoji": "👷‍♀️",
      "tags": [
        "ouvrière",
        "bâtiment"
      ]
    },
    {
      "emoji": "👸",
      "tags": [
        "princesse"
      ]
    },
    {
      "emoji": "👳‍♀️",
      "tags": [
        "femme",
        "turban"
      ]
    },
    {
      "emoji": "🧕",
      "tags": [
        "femme",
        "foulard"
      ]
    },
    {
      "emoji": "🤵‍♀️",
      "tags": [
        "femme",
        "smoking"
      ]
    },
    {
      "emoji": "👰‍♀️",
      "tags": [
        "femme",
        "voile"
      ]
    },
    {
      "emoji": "🤰",
      "tags": [
        "femme",
        "enceinte"
      ]
    },
    {
      "emoji": "👩‍🍼",
      "tags": [
        "femme",
        "allaitant",
        "bébé"
      ]
    },
    {
      "emoji": "🦸‍♀️",
      "tags": [
        "super",
        "héroïne"
      ]
    },
    {
      "emoji": "🦹‍♀️",
      "tags": [
        "super",
        "vilain",
        "femme"
      ]
    },
    {
      "emoji": "🧙‍♀️",
      "tags": [
        "mage",
        "femme"
      ]
    },
    {
      "emoji": "🧚‍♀️",
      "tags": [
        "fée"
      ]
    },
    {
      "emoji": "🧛‍♀️",
      "tags": [
        "vampire",
        "femme"
      ]
    },
    {
      "emoji": "🧝‍♀️",
      "tags": [
        "elfe",
        "femme"
      ]
    },
    {
      "emoji": "🧞‍♀️",
      "tags": [
        "génie",
        "femme"
      ]
    },
    {
      "emoji": "🧟‍♀️",
      "tags": [
        "zombie",
        "femme"
      ]
    },
    {
      "emoji": "💆‍♀️",
      "tags": [
        "femme",
        "masser"
      ]
    },
    {
      "emoji": "💇‍♀️",
      "tags": [
        "femme",
        "couper",
        "cheveux"
      ]
    },
    {
      "emoji": "🚶‍♀️",
      "tags": [
        "femme",
        "marche"
      ]
    },
    {
      "emoji": "🧍‍♀️",
      "tags": [
        "femme"
      ]
    },
    {
      "emoji": "🧎‍♀️",
      "tags": [
        "femme",
        "genoux"
      ]
    },
    {
      "emoji": "👩‍🦯",
      "tags": [
        "femme",
        "canne",
        "blanche"
      ]
    },
    {
      "emoji": "👩‍🦼",
      "tags": [
        "femme",
        "fauteuil",
        "motorisé"
      ]
    },
    {
      "emoji": "👩‍🦽",
      "tags": [
        "femme",
        "fauteuil",
        "roulant",
        "manuel"
      ]
    },
    {
      "emoji": "🏃‍♀️",
      "tags": [
        "femme",
        "court"
      ]
    },
    {
      "emoji": "💃",
      "tags": [
        "danseuse"
      ]
    },
    {
      "emoji": "🧖‍♀️",
      "tags": [
        "femme",
        "hammam"
      ]
    },
    {
      "emoji": "🧗‍♀️",
      "tags": [
        "femme",
        "grimpe"
      ]
    },
    {
      "emoji": "🏌️‍♀️",
      "tags": [
        "golfeuse"
      ]
    },
    {
      "emoji": "🏄‍♀️",
      "tags": [
        "surfeuse"
      ]
    },
    {
      "emoji": "🚣‍♀️",
      "tags": [
        "rameuse",
        "barque"
      ]
    },
    {
      "emoji": "🏊‍♀️",
      "tags": [
        "nageuse"
      ]
    },
    {
      "emoji": "⛹️‍♀️",
      "tags": [
        "femme",
        "ballon"
      ]
    },
    {
      "emoji": "🏋️‍♀️",
      "tags": [
        "femme",
        "haltérophile"
      ]
    },
    {
      "emoji": "🚴‍♀️",
      "tags": [
        "cycliste",
        "femme"
      ]
    },
    {
      "emoji": "🚵‍♀️",
      "tags": [
        "femme",
        "vtt"
      ]
    },
    {
      "emoji": "🤸‍♀️",
      "tags": [
        "femme",
        "roue"
      ]
    },
    {
      "emoji": "🤽‍♀️",
      "tags": [
        "joueuse",
        "water",
        "polo"
      ]
    },
    {
      "emoji": "🤾‍♀️",
      "tags": [
        "handballeuse"
      ]
    },
    {
      "emoji": "🤹‍♀️",
      "tags": [
        "jongleuse"
      ]
    },
    {
      "emoji": "🧘‍♀️",
      "tags": [
        "femme",
        "posture",
        "lotus"
      ]
    },
    {
      "emoji": "👋🏻",
      "tags": [
        "signe",
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤚🏻",
      "tags": [
        "main",
        "levée",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🖐🏻",
      "tags": [
        "main",
        "levée",
        "doigts",
        "écartés",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "✋🏻",
      "tags": [
        "main",
        "levée",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🖖🏻",
      "tags": [
        "salut",
        "vulcain",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫱🏻",
      "tags": [
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫲🏻",
      "tags": [
        "main",
        "gauche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫳🏻",
      "tags": [
        "main",
        "paume",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫴🏻",
      "tags": [
        "main",
        "paume",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫷🏻",
      "tags": [
        "main",
        "pousse",
        "gauche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫸🏻",
      "tags": [
        "main",
        "pousse",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👌🏻",
      "tags": [
        "ok",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤌🏻",
      "tags": [
        "bout",
        "doigts",
        "joints",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤏🏻",
      "tags": [
        "pouce",
        "index",
        "rapprochés",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "✌🏻",
      "tags": [
        "victoire",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤞🏻",
      "tags": [
        "doigts",
        "croisés",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫰🏻",
      "tags": [
        "main",
        "index",
        "pouce",
        "croisés",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤟🏻",
      "tags": [
        "signe",
        "taime",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤘🏻",
      "tags": [
        "cornes",
        "doigts",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤙🏻",
      "tags": [
        "signe",
        "appel",
        "téléphonique",
        "doigts",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👈🏻",
      "tags": [
        "main",
        "index",
        "pointant",
        "gauche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👉🏻",
      "tags": [
        "main",
        "index",
        "pointant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👆🏻",
      "tags": [
        "main",
        "index",
        "pointant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🖕🏻",
      "tags": [
        "doigt",
        "dhonneur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👇🏻",
      "tags": [
        "main",
        "index",
        "pointant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "☝🏻",
      "tags": [
        "index",
        "pointant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫵🏻",
      "tags": [
        "index",
        "pointant",
        "lutilisateur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👍🏻",
      "tags": [
        "pouce",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👎🏻",
      "tags": [
        "pouce",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "✊🏻",
      "tags": [
        "poing",
        "levé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👊🏻",
      "tags": [
        "poing",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤛🏻",
      "tags": [
        "poing",
        "gauche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤜🏻",
      "tags": [
        "poing",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👏🏻",
      "tags": [
        "applaudissements",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙌🏻",
      "tags": [
        "mains",
        "levées",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫶🏻",
      "tags": [
        "mains",
        "forment",
        "cœur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👐🏻",
      "tags": [
        "mains",
        "ouvertes",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤲🏻",
      "tags": [
        "paume",
        "paume",
        "doigts",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤝🏻",
      "tags": [
        "poignée",
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙏🏻",
      "tags": [
        "mains",
        "prière",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "✍🏻",
      "tags": [
        "main",
        "écrit",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💅🏻",
      "tags": [
        "vernis",
        "ongles",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤳🏻",
      "tags": [
        "selfie",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💪🏻",
      "tags": [
        "biceps",
        "contracté",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🦵🏻",
      "tags": [
        "jambe",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🦶🏻",
      "tags": [
        "pied",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👂🏻",
      "tags": [
        "oreille",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🦻🏻",
      "tags": [
        "oreille",
        "appareillée",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👃🏻",
      "tags": [
        "nez",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👶🏻",
      "tags": [
        "bébé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧒🏻",
      "tags": [
        "enfant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👦🏻",
      "tags": [
        "garçon",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👧🏻",
      "tags": [
        "fille",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻",
      "tags": [
        "adulte",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👱🏻",
      "tags": [
        "blonde",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻",
      "tags": [
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧔🏻",
      "tags": [
        "barbue",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧔🏻‍♂️",
      "tags": [
        "homme",
        "barbu",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧔🏻‍♀️",
      "tags": [
        "femme",
        "barbue",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🦰",
      "tags": [
        "homme",
        "peau",
        "claire",
        "cheveux",
        "roux"
      ]
    },
    {
      "emoji": "👨🏻‍🦱",
      "tags": [
        "homme",
        "peau",
        "claire",
        "cheveux",
        "bouclés"
      ]
    },
    {
      "emoji": "👨🏻‍🦳",
      "tags": [
        "homme",
        "peau",
        "claire",
        "cheveux",
        "blancs"
      ]
    },
    {
      "emoji": "👨🏻‍🦲",
      "tags": [
        "homme",
        "peau",
        "claire",
        "chauve"
      ]
    },
    {
      "emoji": "👩🏻",
      "tags": [
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🦰",
      "tags": [
        "femme",
        "peau",
        "claire",
        "cheveux",
        "roux"
      ]
    },
    {
      "emoji": "🧑🏻‍🦰",
      "tags": [
        "adulte",
        "peau",
        "claire",
        "cheveux",
        "roux"
      ]
    },
    {
      "emoji": "👩🏻‍🦱",
      "tags": [
        "femme",
        "peau",
        "claire",
        "cheveux",
        "bouclés"
      ]
    },
    {
      "emoji": "🧑🏻‍🦱",
      "tags": [
        "adulte",
        "peau",
        "claire",
        "cheveux",
        "bouclés"
      ]
    },
    {
      "emoji": "👩🏻‍🦳",
      "tags": [
        "femme",
        "peau",
        "claire",
        "cheveux",
        "blancs"
      ]
    },
    {
      "emoji": "🧑🏻‍🦳",
      "tags": [
        "adulte",
        "peau",
        "claire",
        "cheveux",
        "blancs"
      ]
    },
    {
      "emoji": "👩🏻‍🦲",
      "tags": [
        "femme",
        "peau",
        "claire",
        "chauve"
      ]
    },
    {
      "emoji": "🧑🏻‍🦲",
      "tags": [
        "adulte",
        "peau",
        "claire",
        "chauve"
      ]
    },
    {
      "emoji": "👱🏻‍♀️",
      "tags": [
        "femme",
        "blonde",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👱🏻‍♂️",
      "tags": [
        "homme",
        "blond",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧓🏻",
      "tags": [
        "âgée",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👴🏻",
      "tags": [
        "homme",
        "âgé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👵🏻",
      "tags": [
        "femme",
        "âgée",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙍🏻",
      "tags": [
        "fronçant",
        "sourcils",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙍🏻‍♂️",
      "tags": [
        "homme",
        "fronçant",
        "sourcils",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙍🏻‍♀️",
      "tags": [
        "femme",
        "fronçant",
        "sourcils",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙎🏻",
      "tags": [
        "boude",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙎🏻‍♂️",
      "tags": [
        "homme",
        "boude",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙎🏻‍♀️",
      "tags": [
        "femme",
        "boude",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙅🏻",
      "tags": [
        "geste",
        "dinterdiction",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙅🏻‍♂️",
      "tags": [
        "homme",
        "geste",
        "dinterdiction",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙅🏻‍♀️",
      "tags": [
        "femme",
        "geste",
        "dinterdiction",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙆🏻",
      "tags": [
        "geste",
        "dacceptation",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙆🏻‍♂️",
      "tags": [
        "homme",
        "geste",
        "dacceptation",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙆🏻‍♀️",
      "tags": [
        "femme",
        "geste",
        "dacceptation",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💁🏻",
      "tags": [
        "paume",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💁🏻‍♂️",
      "tags": [
        "homme",
        "paume",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💁🏻‍♀️",
      "tags": [
        "femme",
        "paume",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙋🏻",
      "tags": [
        "lève",
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙋🏻‍♂️",
      "tags": [
        "homme",
        "lève",
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙋🏻‍♀️",
      "tags": [
        "femme",
        "lève",
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧏🏻",
      "tags": [
        "sourde",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧏🏻‍♂️",
      "tags": [
        "homme",
        "sourd",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧏🏻‍♀️",
      "tags": [
        "femme",
        "sourde",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙇🏻",
      "tags": [
        "sincline",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙇🏻‍♂️",
      "tags": [
        "homme",
        "sincline",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🙇🏻‍♀️",
      "tags": [
        "femme",
        "sincline",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤦🏻",
      "tags": [
        "paume",
        "visage",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤦🏻‍♂️",
      "tags": [
        "homme",
        "paume",
        "visage",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤦🏻‍♀️",
      "tags": [
        "femme",
        "paume",
        "visage",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤷🏻",
      "tags": [
        "hausse",
        "épaules",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤷🏻‍♂️",
      "tags": [
        "homme",
        "hausse",
        "épaules",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤷🏻‍♀️",
      "tags": [
        "femme",
        "hausse",
        "épaules",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍⚕️",
      "tags": [
        "professionnel",
        "santé",
        "genres",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍⚕️",
      "tags": [
        "professionnel",
        "santé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍⚕️",
      "tags": [
        "professionnelle",
        "santé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🎓",
      "tags": [
        "étudiant",
        "genres",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🎓",
      "tags": [
        "étudiant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🎓",
      "tags": [
        "étudiante",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🏫",
      "tags": [
        "personnel",
        "enseignant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🏫",
      "tags": [
        "enseignant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🏫",
      "tags": [
        "enseignante",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍⚖️",
      "tags": [
        "juge",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍⚖️",
      "tags": [
        "juge",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍⚖️",
      "tags": [
        "juge",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🌾",
      "tags": [
        "fermier",
        "genres",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🌾",
      "tags": [
        "fermier",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🌾",
      "tags": [
        "fermière",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🍳",
      "tags": [
        "cuisinier",
        "genres",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🍳",
      "tags": [
        "cuisinier",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🍳",
      "tags": [
        "cuisinière",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🔧",
      "tags": [
        "mécanicien",
        "genres",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🔧",
      "tags": [
        "mécanicien",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🔧",
      "tags": [
        "mécanicienne",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🏭",
      "tags": [
        "ouvrier",
        "genres",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🏭",
      "tags": [
        "ouvrier",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🏭",
      "tags": [
        "ouvrière",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍💼",
      "tags": [
        "employé",
        "bureau",
        "genres",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍💼",
      "tags": [
        "employé",
        "bureau",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍💼",
      "tags": [
        "employée",
        "bureau",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🔬",
      "tags": [
        "scientifique",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🔬",
      "tags": [
        "scientifique",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🔬",
      "tags": [
        "scientifique",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍💻",
      "tags": [
        "informaticien",
        "genres",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍💻",
      "tags": [
        "informaticien",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍💻",
      "tags": [
        "informaticienne",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🎤",
      "tags": [
        "chanteur",
        "genres",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🎤",
      "tags": [
        "chanteur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🎤",
      "tags": [
        "chanteuse",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🎨",
      "tags": [
        "artiste",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🎨",
      "tags": [
        "artiste",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🎨",
      "tags": [
        "artiste",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍✈️",
      "tags": [
        "pilote",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍✈️",
      "tags": [
        "pilote",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍✈️",
      "tags": [
        "pilote",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🚀",
      "tags": [
        "astronaute",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🚀",
      "tags": [
        "astronaute",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🚀",
      "tags": [
        "astronaute",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🚒",
      "tags": [
        "pompier",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🚒",
      "tags": [
        "pompier",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🚒",
      "tags": [
        "pompier",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👮🏻",
      "tags": [
        "officier",
        "police",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👮🏻‍♂️",
      "tags": [
        "policier",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👮🏻‍♀️",
      "tags": [
        "policière",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🕵🏻",
      "tags": [
        "détective",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🕵🏻‍♂️",
      "tags": [
        "détective",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🕵🏻‍♀️",
      "tags": [
        "détective",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💂🏻",
      "tags": [
        "garde",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💂🏻‍♂️",
      "tags": [
        "garde",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💂🏻‍♀️",
      "tags": [
        "garde",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🥷🏻",
      "tags": [
        "ninja",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👷🏻",
      "tags": [
        "personnel",
        "bâtiment",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👷🏻‍♂️",
      "tags": [
        "ouvrier",
        "bâtiment",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👷🏻‍♀️",
      "tags": [
        "ouvrière",
        "bâtiment",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫅🏻",
      "tags": [
        "couronne",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤴🏻",
      "tags": [
        "prince",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👸🏻",
      "tags": [
        "princesse",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👳🏻",
      "tags": [
        "turban",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👳🏻‍♂️",
      "tags": [
        "homme",
        "turban",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👳🏻‍♀️",
      "tags": [
        "femme",
        "turban",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👲🏻",
      "tags": [
        "homme",
        "casquette",
        "chinoise",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧕🏻",
      "tags": [
        "femme",
        "foulard",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤵🏻",
      "tags": [
        "smoking",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤵🏻‍♂️",
      "tags": [
        "homme",
        "smoking",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤵🏻‍♀️",
      "tags": [
        "femme",
        "smoking",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👰🏻",
      "tags": [
        "mariée",
        "voile",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👰🏻‍♂️",
      "tags": [
        "homme",
        "voile",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👰🏻‍♀️",
      "tags": [
        "femme",
        "voile",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤰🏻",
      "tags": [
        "femme",
        "enceinte",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫃🏻",
      "tags": [
        "homme",
        "enceint",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🫄🏻",
      "tags": [
        "enceinte",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤱🏻",
      "tags": [
        "allaitement",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🍼",
      "tags": [
        "femme",
        "allaitant",
        "bébé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🍼",
      "tags": [
        "homme",
        "allaitant",
        "bébé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🍼",
      "tags": [
        "allaitant",
        "bébé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👼🏻",
      "tags": [
        "bébé",
        "ange",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🎅🏻",
      "tags": [
        "père",
        "noël",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤶🏻",
      "tags": [
        "mère",
        "noël",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🎄",
      "tags": [
        "santa",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🦸🏻",
      "tags": [
        "super",
        "héros",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🦸🏻‍♂️",
      "tags": [
        "super",
        "héros",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🦸🏻‍♀️",
      "tags": [
        "super",
        "héroïne",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🦹🏻",
      "tags": [
        "super",
        "vilain",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🦹🏻‍♂️",
      "tags": [
        "super",
        "vilain",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🦹🏻‍♀️",
      "tags": [
        "super",
        "vilain",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧙🏻",
      "tags": [
        "mage",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧙🏻‍♂️",
      "tags": [
        "mage",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧙🏻‍♀️",
      "tags": [
        "mage",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧚🏻",
      "tags": [
        "personnage",
        "féérique",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧚🏻‍♂️",
      "tags": [
        "féetaud",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧚🏻‍♀️",
      "tags": [
        "fée",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧛🏻",
      "tags": [
        "vampire",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧛🏻‍♂️",
      "tags": [
        "vampire",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧛🏻‍♀️",
      "tags": [
        "vampire",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧜🏻",
      "tags": [
        "créature",
        "aquatique",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧜🏻‍♂️",
      "tags": [
        "triton",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧜🏻‍♀️",
      "tags": [
        "sirène",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧝🏻",
      "tags": [
        "elfe",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧝🏻‍♂️",
      "tags": [
        "elfe",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧝🏻‍♀️",
      "tags": [
        "elfe",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💆🏻",
      "tags": [
        "masser",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💆🏻‍♂️",
      "tags": [
        "homme",
        "masser",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💆🏻‍♀️",
      "tags": [
        "femme",
        "masser",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💇🏻",
      "tags": [
        "couper",
        "cheveux",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💇🏻‍♂️",
      "tags": [
        "homme",
        "couper",
        "cheveux",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💇🏻‍♀️",
      "tags": [
        "femme",
        "couper",
        "cheveux",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚶🏻",
      "tags": [
        "marche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚶🏻‍♂️",
      "tags": [
        "homme",
        "marche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚶🏻‍♀️",
      "tags": [
        "femme",
        "marche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚶🏻‍➡️",
      "tags": [
        "marche",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚶🏻‍♀️‍➡️",
      "tags": [
        "femme",
        "marchant",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚶🏻‍♂️‍➡️",
      "tags": [
        "homme",
        "marche",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧍🏻",
      "tags": [
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧍🏻‍♂️",
      "tags": [
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧍🏻‍♀️",
      "tags": [
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧎🏻",
      "tags": [
        "genoux",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧎🏻‍♂️",
      "tags": [
        "homme",
        "genoux",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧎🏻‍♀️",
      "tags": [
        "femme",
        "genoux",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧎🏻‍➡️",
      "tags": [
        "agenouillée",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧎🏻‍♀️‍➡️",
      "tags": [
        "femme",
        "agenouillée",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧎🏻‍♂️‍➡️",
      "tags": [
        "homme",
        "agenouillé",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🦯",
      "tags": [
        "canne",
        "blanche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🦯‍➡️",
      "tags": [
        "canne",
        "blanche",
        "tournée",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🦯",
      "tags": [
        "homme",
        "canne",
        "blanche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🦯‍➡️",
      "tags": [
        "homme",
        "canne",
        "blanche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🦯",
      "tags": [
        "femme",
        "canne",
        "blanche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🦯‍➡️",
      "tags": [
        "femme",
        "canne",
        "blanche",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🦼",
      "tags": [
        "fauteuil",
        "motorisé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🦼‍➡️",
      "tags": [
        "fauteuil",
        "roulant",
        "motorisé",
        "tournée",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🦼",
      "tags": [
        "homme",
        "fauteuil",
        "motorisé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🦼‍➡️",
      "tags": [
        "homme",
        "fauteuil",
        "roulant",
        "motorisé",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🦼",
      "tags": [
        "femme",
        "fauteuil",
        "motorisé",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🦼‍➡️",
      "tags": [
        "femme",
        "fauteuil",
        "roulant",
        "motorisé",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🦽",
      "tags": [
        "fauteuil",
        "roulant",
        "manuel",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🦽‍➡️",
      "tags": [
        "fauteuil",
        "roulant",
        "manuel",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🦽",
      "tags": [
        "homme",
        "fauteuil",
        "roulant",
        "manuel",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍🦽‍➡️",
      "tags": [
        "homme",
        "fauteuil",
        "roulant",
        "manuel",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🦽",
      "tags": [
        "femme",
        "fauteuil",
        "roulant",
        "manuel",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍🦽‍➡️",
      "tags": [
        "femme",
        "fauteuil",
        "roulant",
        "manuel",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏃🏻",
      "tags": [
        "court",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏃🏻‍♂️",
      "tags": [
        "homme",
        "court",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏃🏻‍♀️",
      "tags": [
        "femme",
        "court",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏃🏻‍➡️",
      "tags": [
        "courant",
        "face",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏃🏻‍♀️‍➡️",
      "tags": [
        "femme",
        "courant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏃🏻‍♂️‍➡️",
      "tags": [
        "homme",
        "courant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💃🏻",
      "tags": [
        "danseuse",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🕺🏻",
      "tags": [
        "danseur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🕴🏻",
      "tags": [
        "homme",
        "daffaires",
        "lévitation",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧖🏻",
      "tags": [
        "hammam",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧖🏻‍♂️",
      "tags": [
        "homme",
        "hammam",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧖🏻‍♀️",
      "tags": [
        "femme",
        "hammam",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧗🏻",
      "tags": [
        "grimpe",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧗🏻‍♂️",
      "tags": [
        "homme",
        "grimpe",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧗🏻‍♀️",
      "tags": [
        "femme",
        "grimpe",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏇🏻",
      "tags": [
        "course",
        "hippique",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏂🏻",
      "tags": [
        "snowboardeur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏌🏻",
      "tags": [
        "joueur",
        "golf",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏌🏻‍♂️",
      "tags": [
        "golfeur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏌🏻‍♀️",
      "tags": [
        "golfeuse",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏄🏻",
      "tags": [
        "surf",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏄🏻‍♂️",
      "tags": [
        "surfeur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏄🏻‍♀️",
      "tags": [
        "surfeuse",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚣🏻",
      "tags": [
        "ramant",
        "barque",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚣🏻‍♂️",
      "tags": [
        "rameur",
        "barque",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚣🏻‍♀️",
      "tags": [
        "rameuse",
        "barque",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏊🏻",
      "tags": [
        "nageant",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏊🏻‍♂️",
      "tags": [
        "nageur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏊🏻‍♀️",
      "tags": [
        "nageuse",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "⛹🏻",
      "tags": [
        "ballon",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "⛹🏻‍♂️",
      "tags": [
        "homme",
        "ballon",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "⛹🏻‍♀️",
      "tags": [
        "femme",
        "ballon",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏋🏻",
      "tags": [
        "haltérophile",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏋🏻‍♂️",
      "tags": [
        "homme",
        "haltérophile",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏋🏻‍♀️",
      "tags": [
        "femme",
        "haltérophile",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚴🏻",
      "tags": [
        "cycliste",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚴🏻‍♂️",
      "tags": [
        "cycliste",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚴🏻‍♀️",
      "tags": [
        "cycliste",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚵🏻",
      "tags": [
        "vtt",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚵🏻‍♂️",
      "tags": [
        "homme",
        "vtt",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🚵🏻‍♀️",
      "tags": [
        "femme",
        "vtt",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤸🏻",
      "tags": [
        "roue",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤸🏻‍♂️",
      "tags": [
        "homme",
        "roue",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤸🏻‍♀️",
      "tags": [
        "femme",
        "roue",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤽🏻",
      "tags": [
        "jouant",
        "water",
        "polo",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤽🏻‍♂️",
      "tags": [
        "joueur",
        "water",
        "polo",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤽🏻‍♀️",
      "tags": [
        "joueuse",
        "water",
        "polo",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤾🏻",
      "tags": [
        "jouant",
        "handball",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤾🏻‍♂️",
      "tags": [
        "handballeur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤾🏻‍♀️",
      "tags": [
        "handballeuse",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤹🏻",
      "tags": [
        "jongle",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤹🏻‍♂️",
      "tags": [
        "jongleur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🤹🏻‍♀️",
      "tags": [
        "jongleuse",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧘🏻",
      "tags": [
        "posture",
        "lotus",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧘🏻‍♂️",
      "tags": [
        "homme",
        "posture",
        "lotus",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧘🏻‍♀️",
      "tags": [
        "femme",
        "posture",
        "lotus",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🛀🏻",
      "tags": [
        "prenant",
        "bain",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🛌🏻",
      "tags": [
        "lit",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🧑🏻‍🤝‍🧑🏻",
      "tags": [
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👭🏻",
      "tags": [
        "femmes",
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👫🏻",
      "tags": [
        "femme",
        "homme",
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👬🏻",
      "tags": [
        "hommes",
        "main",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💏🏻",
      "tags": [
        "bisou",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍❤️‍💋‍👨🏻",
      "tags": [
        "bisou",
        "femme",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍❤️‍💋‍👨🏻",
      "tags": [
        "bisou",
        "homme",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍❤️‍💋‍👩🏻",
      "tags": [
        "bisou",
        "femme",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "💑🏻",
      "tags": [
        "couple",
        "cœur",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍❤️‍👨🏻",
      "tags": [
        "couple",
        "cœur",
        "femme",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👨🏻‍❤️‍👨🏻",
      "tags": [
        "couple",
        "cœur",
        "homme",
        "homme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "👩🏻‍❤️‍👩🏻",
      "tags": [
        "couple",
        "cœur",
        "femme",
        "femme",
        "peau",
        "claire"
      ]
    },
    {
      "emoji": "🏻",
      "tags": [
        "peau",
        "claire"
      ]
    }
  ];
}