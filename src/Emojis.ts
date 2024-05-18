namespace Emojis {
  type LabelledEmoji = {
    emoji: string,
    label: string,
  };

  export const findMostRelevantEmoji: (prompt: string) => string = (prompt) => Emojis.parsedEmojis.map((labelledEmoji) => ({
    labelledEmoji,
    distance: Words.computeDistance(prompt, labelledEmoji.label),
  })).filter(({ distance }) => distance !== 0).sort((a, b) => a.distance - b.distance).shift()?.labelledEmoji.emoji ?? "#";

  export const parsedEmojis: LabelledEmoji[] = [
    {
      "emoji": "©️",
      "label": "COPYRIGHT SIGN"
    },
    {
      "emoji": "®️",
      "label": "REGISTERED SIGN"
    },
    {
      "emoji": "‼️",
      "label": "DOUBLE EXCLAMATION MARK"
    },
    {
      "emoji": "⁉️",
      "label": "EXCLAMATION QUESTION MARK"
    },
    {
      "emoji": "™️",
      "label": "TRADE MARK SIGN"
    },
    {
      "emoji": "ℹ️",
      "label": "INFORMATION SOURCE"
    },
    {
      "emoji": "↔️",
      "label": "LEFT RIGHT ARROW"
    },
    {
      "emoji": "↕️",
      "label": "UP DOWN ARROW"
    },
    {
      "emoji": "↖️",
      "label": "NORTH WEST ARROW"
    },
    {
      "emoji": "↗️",
      "label": "NORTH EAST ARROW"
    },
    {
      "emoji": "↘️",
      "label": "SOUTH EAST ARROW"
    },
    {
      "emoji": "↙️",
      "label": "SOUTH WEST ARROW"
    },
    {
      "emoji": "↩️",
      "label": "LEFTWARDS ARROW WITH HOOK"
    },
    {
      "emoji": "↪️",
      "label": "RIGHTWARDS ARROW WITH HOOK"
    },
    {
      "emoji": "⌚️",
      "label": "WATCH"
    },
    {
      "emoji": "⌛️",
      "label": "HOURGLASS"
    },
    {
      "emoji": "⌨️",
      "label": "KEYBOARD"
    },
    {
      "emoji": "⏏️",
      "label": "EJECT SYMBOL"
    },
    {
      "emoji": "⏩️",
      "label": "BLACK RIGHT-POINTING DOUBLE TRIANGLE"
    },
    {
      "emoji": "⏪️",
      "label": "BLACK LEFT-POINTING DOUBLE TRIANGLE"
    },
    {
      "emoji": "⏫️",
      "label": "BLACK UP-POINTING DOUBLE TRIANGLE"
    },
    {
      "emoji": "⏬️",
      "label": "BLACK DOWN-POINTING DOUBLE TRIANGLE"
    },
    {
      "emoji": "⏭️",
      "label": "BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR"
    },
    {
      "emoji": "⏮️",
      "label": "BLACK LEFT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR"
    },
    {
      "emoji": "⏯️",
      "label": "BLACK RIGHT-POINTING TRIANGLE WITH DOUBLE VERTICAL BAR"
    },
    {
      "emoji": "⏰️",
      "label": "ALARM CLOCK"
    },
    {
      "emoji": "⏱️",
      "label": "STOPWATCH"
    },
    {
      "emoji": "⏲️",
      "label": "TIMER CLOCK"
    },
    {
      "emoji": "⏳️",
      "label": "HOURGLASS WITH FLOWING SAND"
    },
    {
      "emoji": "⏸️",
      "label": "DOUBLE VERTICAL BAR"
    },
    {
      "emoji": "⏹️",
      "label": "BLACK SQUARE FOR STOP"
    },
    {
      "emoji": "⏺️",
      "label": "BLACK CIRCLE FOR RECORD"
    },
    {
      "emoji": "Ⓜ️",
      "label": "CIRCLED LATIN CAPITAL LETTER M"
    },
    {
      "emoji": "▪️",
      "label": "BLACK SMALL SQUARE"
    },
    {
      "emoji": "▫️",
      "label": "WHITE SMALL SQUARE"
    },
    {
      "emoji": "▶️",
      "label": "BLACK RIGHT-POINTING TRIANGLE"
    },
    {
      "emoji": "◀️",
      "label": "BLACK LEFT-POINTING TRIANGLE"
    },
    {
      "emoji": "◻️",
      "label": "WHITE MEDIUM SQUARE"
    },
    {
      "emoji": "◼️",
      "label": "BLACK MEDIUM SQUARE"
    },
    {
      "emoji": "◽️",
      "label": "WHITE MEDIUM SMALL SQUARE"
    },
    {
      "emoji": "◾️",
      "label": "BLACK MEDIUM SMALL SQUARE"
    },
    {
      "emoji": "☀️",
      "label": "BLACK SUN WITH RAYS"
    },
    {
      "emoji": "☁️",
      "label": "CLOUD"
    },
    {
      "emoji": "☂️",
      "label": "UMBRELLA"
    },
    {
      "emoji": "☃️",
      "label": "SNOWMAN"
    },
    {
      "emoji": "☄️",
      "label": "COMET"
    },
    {
      "emoji": "☎️",
      "label": "BLACK TELEPHONE"
    },
    {
      "emoji": "☑️",
      "label": "BALLOT BOX WITH CHECK"
    },
    {
      "emoji": "☔️",
      "label": "UMBRELLA WITH RAIN DROPS"
    },
    {
      "emoji": "☕️",
      "label": "HOT BEVERAGE"
    },
    {
      "emoji": "☘️",
      "label": "SHAMROCK"
    },
    {
      "emoji": "☝️",
      "label": "WHITE UP POINTING INDEX"
    },
    {
      "emoji": "☠️",
      "label": "SKULL AND CROSSBONES"
    },
    {
      "emoji": "☢️",
      "label": "RADIOACTIVE SIGN"
    },
    {
      "emoji": "☣️",
      "label": "BIOHAZARD SIGN"
    },
    {
      "emoji": "☦️",
      "label": "ORTHODOX CROSS"
    },
    {
      "emoji": "☪️",
      "label": "STAR AND CRESCENT"
    },
    {
      "emoji": "☮️",
      "label": "PEACE SYMBOL"
    },
    {
      "emoji": "☯️",
      "label": "YIN YANG"
    },
    {
      "emoji": "☸️",
      "label": "WHEEL OF DHARMA"
    },
    {
      "emoji": "☹️",
      "label": "WHITE FROWNING FACE"
    },
    {
      "emoji": "☺️",
      "label": "WHITE SMILING FACE"
    },
    {
      "emoji": "♀️",
      "label": "FEMALE SIGN"
    },
    {
      "emoji": "♂️",
      "label": "MALE SIGN"
    },
    {
      "emoji": "♈️",
      "label": "ARIES"
    },
    {
      "emoji": "♉️",
      "label": "TAURUS"
    },
    {
      "emoji": "♊️",
      "label": "GEMINI"
    },
    {
      "emoji": "♋️",
      "label": "CANCER"
    },
    {
      "emoji": "♌️",
      "label": "LEO"
    },
    {
      "emoji": "♍️",
      "label": "VIRGO"
    },
    {
      "emoji": "♎️",
      "label": "LIBRA"
    },
    {
      "emoji": "♏️",
      "label": "SCORPIUS"
    },
    {
      "emoji": "♐️",
      "label": "SAGITTARIUS"
    },
    {
      "emoji": "♑️",
      "label": "CAPRICORN"
    },
    {
      "emoji": "♒️",
      "label": "AQUARIUS"
    },
    {
      "emoji": "♓️",
      "label": "PISCES"
    },
    {
      "emoji": "♟️",
      "label": "BLACK CHESS PAWN"
    },
    {
      "emoji": "♠️",
      "label": "BLACK SPADE SUIT"
    },
    {
      "emoji": "♣️",
      "label": "BLACK CLUB SUIT"
    },
    {
      "emoji": "♥️",
      "label": "BLACK HEART SUIT"
    },
    {
      "emoji": "♦️",
      "label": "BLACK DIAMOND SUIT"
    },
    {
      "emoji": "♨️",
      "label": "HOT SPRINGS"
    },
    {
      "emoji": "♻️",
      "label": "BLACK UNIVERSAL RECYCLING SYMBOL"
    },
    {
      "emoji": "♾️",
      "label": "PERMANENT PAPER SIGN"
    },
    {
      "emoji": "♿️",
      "label": "WHEELCHAIR SYMBOL"
    },
    {
      "emoji": "⚒️",
      "label": "HAMMER AND PICK"
    },
    {
      "emoji": "⚓️",
      "label": "ANCHOR"
    },
    {
      "emoji": "⚔️",
      "label": "CROSSED SWORDS"
    },
    {
      "emoji": "⚕️",
      "label": "STAFF OF AESCULAPIUS"
    },
    {
      "emoji": "⚖️",
      "label": "SCALES"
    },
    {
      "emoji": "⚗️",
      "label": "ALEMBIC"
    },
    {
      "emoji": "⚙️",
      "label": "GEAR"
    },
    {
      "emoji": "⚛️",
      "label": "ATOM SYMBOL"
    },
    {
      "emoji": "⚜️",
      "label": "FLEUR-DE-LIS"
    },
    {
      "emoji": "⚠️",
      "label": "WARNING SIGN"
    },
    {
      "emoji": "⚡️",
      "label": "HIGH VOLTAGE SIGN"
    },
    {
      "emoji": "⚧️",
      "label": "MALE WITH STROKE AND MALE AND FEMALE SIGN"
    },
    {
      "emoji": "⚪️",
      "label": "MEDIUM WHITE CIRCLE"
    },
    {
      "emoji": "⚫️",
      "label": "MEDIUM BLACK CIRCLE"
    },
    {
      "emoji": "⚰️",
      "label": "COFFIN"
    },
    {
      "emoji": "⚱️",
      "label": "FUNERAL URN"
    },
    {
      "emoji": "⚽️",
      "label": "SOCCER BALL"
    },
    {
      "emoji": "⚾️",
      "label": "BASEBALL"
    },
    {
      "emoji": "⛄️",
      "label": "SNOWMAN WITHOUT SNOW"
    },
    {
      "emoji": "⛅️",
      "label": "SUN BEHIND CLOUD"
    },
    {
      "emoji": "⛈️",
      "label": "THUNDER CLOUD AND RAIN"
    },
    {
      "emoji": "⛎️",
      "label": "OPHIUCHUS"
    },
    {
      "emoji": "⛏️",
      "label": "PICK"
    },
    {
      "emoji": "⛑️",
      "label": "HELMET WITH WHITE CROSS"
    },
    {
      "emoji": "⛓️",
      "label": "CHAINS"
    },
    {
      "emoji": "⛔️",
      "label": "NO ENTRY"
    },
    {
      "emoji": "⛩️",
      "label": "SHINTO SHRINE"
    },
    {
      "emoji": "⛪️",
      "label": "CHURCH"
    },
    {
      "emoji": "⛰️",
      "label": "MOUNTAIN"
    },
    {
      "emoji": "⛱️",
      "label": "UMBRELLA ON GROUND"
    },
    {
      "emoji": "⛲️",
      "label": "FOUNTAIN"
    },
    {
      "emoji": "⛳️",
      "label": "FLAG IN HOLE"
    },
    {
      "emoji": "⛴️",
      "label": "FERRY"
    },
    {
      "emoji": "⛵️",
      "label": "SAILBOAT"
    },
    {
      "emoji": "⛷️",
      "label": "SKIER"
    },
    {
      "emoji": "⛸️",
      "label": "ICE SKATE"
    },
    {
      "emoji": "⛹️",
      "label": "PERSON WITH BALL"
    },
    {
      "emoji": "⛺️",
      "label": "TENT"
    },
    {
      "emoji": "⛽️",
      "label": "FUEL PUMP"
    },
    {
      "emoji": "✂️",
      "label": "BLACK SCISSORS"
    },
    {
      "emoji": "✅️",
      "label": "WHITE HEAVY CHECK MARK"
    },
    {
      "emoji": "✈️",
      "label": "AIRPLANE"
    },
    {
      "emoji": "✉️",
      "label": "ENVELOPE"
    },
    {
      "emoji": "✊️",
      "label": "RAISED FIST"
    },
    {
      "emoji": "✋️",
      "label": "RAISED HAND"
    },
    {
      "emoji": "✌️",
      "label": "VICTORY HAND"
    },
    {
      "emoji": "✍️",
      "label": "WRITING HAND"
    },
    {
      "emoji": "✏️",
      "label": "PENCIL"
    },
    {
      "emoji": "✒️",
      "label": "BLACK NIB"
    },
    {
      "emoji": "✔️",
      "label": "HEAVY CHECK MARK"
    },
    {
      "emoji": "✖️",
      "label": "HEAVY MULTIPLICATION X"
    },
    {
      "emoji": "✝️",
      "label": "LATIN CROSS"
    },
    {
      "emoji": "✡️",
      "label": "STAR OF DAVID"
    },
    {
      "emoji": "✨️",
      "label": "SPARKLES"
    },
    {
      "emoji": "✳️",
      "label": "EIGHT SPOKED ASTERISK"
    },
    {
      "emoji": "✴️",
      "label": "EIGHT POINTED BLACK STAR"
    },
    {
      "emoji": "❄️",
      "label": "SNOWFLAKE"
    },
    {
      "emoji": "❇️",
      "label": "SPARKLE"
    },
    {
      "emoji": "❌️",
      "label": "CROSS MARK"
    },
    {
      "emoji": "❎️",
      "label": "NEGATIVE SQUARED CROSS MARK"
    },
    {
      "emoji": "❓️",
      "label": "BLACK QUESTION MARK ORNAMENT"
    },
    {
      "emoji": "❔️",
      "label": "WHITE QUESTION MARK ORNAMENT"
    },
    {
      "emoji": "❕️",
      "label": "WHITE EXCLAMATION MARK ORNAMENT"
    },
    {
      "emoji": "❗️",
      "label": "HEAVY EXCLAMATION MARK SYMBOL"
    },
    {
      "emoji": "❣️",
      "label": "HEAVY HEART EXCLAMATION MARK ORNAMENT"
    },
    {
      "emoji": "❤️",
      "label": "HEAVY BLACK HEART"
    },
    {
      "emoji": "➕️",
      "label": "HEAVY PLUS SIGN"
    },
    {
      "emoji": "➖️",
      "label": "HEAVY MINUS SIGN"
    },
    {
      "emoji": "➗️",
      "label": "HEAVY DIVISION SIGN"
    },
    {
      "emoji": "➡️",
      "label": "BLACK RIGHTWARDS ARROW"
    },
    {
      "emoji": "➰️",
      "label": "CURLY LOOP"
    },
    {
      "emoji": "➿️",
      "label": "DOUBLE CURLY LOOP"
    },
    {
      "emoji": "⤴️",
      "label": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS"
    },
    {
      "emoji": "⤵️",
      "label": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS"
    },
    {
      "emoji": "⬅️",
      "label": "LEFTWARDS BLACK ARROW"
    },
    {
      "emoji": "⬆️",
      "label": "UPWARDS BLACK ARROW"
    },
    {
      "emoji": "⬇️",
      "label": "DOWNWARDS BLACK ARROW"
    },
    {
      "emoji": "⬛️",
      "label": "BLACK LARGE SQUARE"
    },
    {
      "emoji": "⬜️",
      "label": "WHITE LARGE SQUARE"
    },
    {
      "emoji": "⭐️",
      "label": "WHITE MEDIUM STAR"
    },
    {
      "emoji": "⭕️",
      "label": "HEAVY LARGE CIRCLE"
    },
    {
      "emoji": "〰️",
      "label": "WAVY DASH"
    },
    {
      "emoji": "〽️",
      "label": "PART ALTERNATION MARK"
    },
    {
      "emoji": "㊗️",
      "label": "CIRCLED IDEOGRAPH CONGRATULATION"
    },
    {
      "emoji": "㊙️",
      "label": "CIRCLED IDEOGRAPH SECRET"
    },
    {
      "emoji": "🀄",
      "label": "MAHJONG TILE RED DRAGON"
    },
    {
      "emoji": "🃏",
      "label": "PLAYING CARD BLACK JOKER"
    },
    {
      "emoji": "🅰️",
      "label": "NEGATIVE SQUARED LATIN CAPITAL LETTER A"
    },
    {
      "emoji": "🅱️",
      "label": "NEGATIVE SQUARED LATIN CAPITAL LETTER B"
    },
    {
      "emoji": "🅾️",
      "label": "NEGATIVE SQUARED LATIN CAPITAL LETTER O"
    },
    {
      "emoji": "🅿️",
      "label": "NEGATIVE SQUARED LATIN CAPITAL LETTER P"
    },
    {
      "emoji": "🆎",
      "label": "NEGATIVE SQUARED AB"
    },
    {
      "emoji": "🆑",
      "label": "SQUARED CL"
    },
    {
      "emoji": "🆒",
      "label": "SQUARED COOL"
    },
    {
      "emoji": "🆓",
      "label": "SQUARED FREE"
    },
    {
      "emoji": "🆔",
      "label": "SQUARED ID"
    },
    {
      "emoji": "🆕",
      "label": "SQUARED NEW"
    },
    {
      "emoji": "🆖",
      "label": "SQUARED NG"
    },
    {
      "emoji": "🆗",
      "label": "SQUARED OK"
    },
    {
      "emoji": "🆘",
      "label": "SQUARED SOS"
    },
    {
      "emoji": "🆙",
      "label": "SQUARED UP WITH EXCLAMATION MARK"
    },
    {
      "emoji": "🆚",
      "label": "SQUARED VS"
    },
    {
      "emoji": "🈁",
      "label": "SQUARED KATAKANA KOKO"
    },
    {
      "emoji": "🈂️",
      "label": "SQUARED KATAKANA SA"
    },
    {
      "emoji": "🈚",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-7121"
    },
    {
      "emoji": "🈯",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-6307"
    },
    {
      "emoji": "🈲",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-7981"
    },
    {
      "emoji": "🈳",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A"
    },
    {
      "emoji": "🈴",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-5408"
    },
    {
      "emoji": "🈵",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-6E80"
    },
    {
      "emoji": "🈶",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-6709"
    },
    {
      "emoji": "🈷️",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-6708"
    },
    {
      "emoji": "🈸",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-7533"
    },
    {
      "emoji": "🈹",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-5272"
    },
    {
      "emoji": "🈺",
      "label": "SQUARED CJK UNIFIED IDEOGRAPH-55B6"
    },
    {
      "emoji": "🉐",
      "label": "CIRCLED IDEOGRAPH ADVANTAGE"
    },
    {
      "emoji": "🉑",
      "label": "CIRCLED IDEOGRAPH ACCEPT"
    },
    {
      "emoji": "🌀",
      "label": "CYCLONE"
    },
    {
      "emoji": "🌁",
      "label": "FOGGY"
    },
    {
      "emoji": "🌂",
      "label": "CLOSED UMBRELLA"
    },
    {
      "emoji": "🌃",
      "label": "NIGHT WITH STARS"
    },
    {
      "emoji": "🌄",
      "label": "SUNRISE OVER MOUNTAINS"
    },
    {
      "emoji": "🌅",
      "label": "SUNRISE"
    },
    {
      "emoji": "🌆",
      "label": "CITYSCAPE AT DUSK"
    },
    {
      "emoji": "🌇",
      "label": "SUNSET OVER BUILDINGS"
    },
    {
      "emoji": "🌈",
      "label": "RAINBOW"
    },
    {
      "emoji": "🌉",
      "label": "BRIDGE AT NIGHT"
    },
    {
      "emoji": "🌊",
      "label": "WATER WAVE"
    },
    {
      "emoji": "🌋",
      "label": "VOLCANO"
    },
    {
      "emoji": "🌌",
      "label": "MILKY WAY"
    },
    {
      "emoji": "🌍",
      "label": "EARTH GLOBE EUROPE-AFRICA"
    },
    {
      "emoji": "🌎",
      "label": "EARTH GLOBE AMERICAS"
    },
    {
      "emoji": "🌏",
      "label": "EARTH GLOBE ASIA-AUSTRALIA"
    },
    {
      "emoji": "🌐",
      "label": "GLOBE WITH MERIDIANS"
    },
    {
      "emoji": "🌑",
      "label": "NEW MOON SYMBOL"
    },
    {
      "emoji": "🌒",
      "label": "WAXING CRESCENT MOON SYMBOL"
    },
    {
      "emoji": "🌓",
      "label": "FIRST QUARTER MOON SYMBOL"
    },
    {
      "emoji": "🌔",
      "label": "WAXING GIBBOUS MOON SYMBOL"
    },
    {
      "emoji": "🌕",
      "label": "FULL MOON SYMBOL"
    },
    {
      "emoji": "🌖",
      "label": "WANING GIBBOUS MOON SYMBOL"
    },
    {
      "emoji": "🌗",
      "label": "LAST QUARTER MOON SYMBOL"
    },
    {
      "emoji": "🌘",
      "label": "WANING CRESCENT MOON SYMBOL"
    },
    {
      "emoji": "🌙",
      "label": "CRESCENT MOON"
    },
    {
      "emoji": "🌚",
      "label": "NEW MOON WITH FACE"
    },
    {
      "emoji": "🌛",
      "label": "FIRST QUARTER MOON WITH FACE"
    },
    {
      "emoji": "🌜",
      "label": "LAST QUARTER MOON WITH FACE"
    },
    {
      "emoji": "🌝",
      "label": "FULL MOON WITH FACE"
    },
    {
      "emoji": "🌞",
      "label": "SUN WITH FACE"
    },
    {
      "emoji": "🌟",
      "label": "GLOWING STAR"
    },
    {
      "emoji": "🌠",
      "label": "SHOOTING STAR"
    },
    {
      "emoji": "🌡️",
      "label": "THERMOMETER"
    },
    {
      "emoji": "🌤️",
      "label": "WHITE SUN WITH SMALL CLOUD"
    },
    {
      "emoji": "🌥️",
      "label": "WHITE SUN BEHIND CLOUD"
    },
    {
      "emoji": "🌦️",
      "label": "WHITE SUN BEHIND CLOUD WITH RAIN"
    },
    {
      "emoji": "🌧️",
      "label": "CLOUD WITH RAIN"
    },
    {
      "emoji": "🌨️",
      "label": "CLOUD WITH SNOW"
    },
    {
      "emoji": "🌩️",
      "label": "CLOUD WITH LIGHTNING"
    },
    {
      "emoji": "🌪️",
      "label": "CLOUD WITH TORNADO"
    },
    {
      "emoji": "🌫️",
      "label": "FOG"
    },
    {
      "emoji": "🌬️",
      "label": "WIND BLOWING FACE"
    },
    {
      "emoji": "🌭",
      "label": "HOT DOG"
    },
    {
      "emoji": "🌮",
      "label": "TACO"
    },
    {
      "emoji": "🌯",
      "label": "BURRITO"
    },
    {
      "emoji": "🌰",
      "label": "CHESTNUT"
    },
    {
      "emoji": "🌱",
      "label": "SEEDLING"
    },
    {
      "emoji": "🌲",
      "label": "EVERGREEN TREE"
    },
    {
      "emoji": "🌳",
      "label": "DECIDUOUS TREE"
    },
    {
      "emoji": "🌴",
      "label": "PALM TREE"
    },
    {
      "emoji": "🌵",
      "label": "CACTUS"
    },
    {
      "emoji": "🌶️",
      "label": "HOT PEPPER"
    },
    {
      "emoji": "🌷",
      "label": "TULIP"
    },
    {
      "emoji": "🌸",
      "label": "CHERRY BLOSSOM"
    },
    {
      "emoji": "🌹",
      "label": "ROSE"
    },
    {
      "emoji": "🌺",
      "label": "HIBISCUS"
    },
    {
      "emoji": "🌻",
      "label": "SUNFLOWER"
    },
    {
      "emoji": "🌼",
      "label": "BLOSSOM"
    },
    {
      "emoji": "🌽",
      "label": "EAR OF MAIZE"
    },
    {
      "emoji": "🌾",
      "label": "EAR OF RICE"
    },
    {
      "emoji": "🌿",
      "label": "HERB"
    },
    {
      "emoji": "🍀",
      "label": "FOUR LEAF CLOVER"
    },
    {
      "emoji": "🍁",
      "label": "MAPLE LEAF"
    },
    {
      "emoji": "🍂",
      "label": "FALLEN LEAF"
    },
    {
      "emoji": "🍃",
      "label": "LEAF FLUTTERING IN WIND"
    },
    {
      "emoji": "🍄",
      "label": "MUSHROOM"
    },
    {
      "emoji": "🍅",
      "label": "TOMATO"
    },
    {
      "emoji": "🍆",
      "label": "AUBERGINE"
    },
    {
      "emoji": "🍇",
      "label": "GRAPES"
    },
    {
      "emoji": "🍈",
      "label": "MELON"
    },
    {
      "emoji": "🍉",
      "label": "WATERMELON"
    },
    {
      "emoji": "🍊",
      "label": "TANGERINE"
    },
    {
      "emoji": "🍋",
      "label": "LEMON"
    },
    {
      "emoji": "🍌",
      "label": "BANANA"
    },
    {
      "emoji": "🍍",
      "label": "PINEAPPLE"
    },
    {
      "emoji": "🍎",
      "label": "RED APPLE"
    },
    {
      "emoji": "🍏",
      "label": "GREEN APPLE"
    },
    {
      "emoji": "🍐",
      "label": "PEAR"
    },
    {
      "emoji": "🍑",
      "label": "PEACH"
    },
    {
      "emoji": "🍒",
      "label": "CHERRIES"
    },
    {
      "emoji": "🍓",
      "label": "STRAWBERRY"
    },
    {
      "emoji": "🍔",
      "label": "HAMBURGER"
    },
    {
      "emoji": "🍕",
      "label": "SLICE OF PIZZA"
    },
    {
      "emoji": "🍖",
      "label": "MEAT ON BONE"
    },
    {
      "emoji": "🍗",
      "label": "POULTRY LEG"
    },
    {
      "emoji": "🍘",
      "label": "RICE CRACKER"
    },
    {
      "emoji": "🍙",
      "label": "RICE BALL"
    },
    {
      "emoji": "🍚",
      "label": "COOKED RICE"
    },
    {
      "emoji": "🍛",
      "label": "CURRY AND RICE"
    },
    {
      "emoji": "🍜",
      "label": "STEAMING BOWL"
    },
    {
      "emoji": "🍝",
      "label": "SPAGHETTI"
    },
    {
      "emoji": "🍞",
      "label": "BREAD"
    },
    {
      "emoji": "🍟",
      "label": "FRENCH FRIES"
    },
    {
      "emoji": "🍠",
      "label": "ROASTED SWEET POTATO"
    },
    {
      "emoji": "🍡",
      "label": "DANGO"
    },
    {
      "emoji": "🍢",
      "label": "ODEN"
    },
    {
      "emoji": "🍣",
      "label": "SUSHI"
    },
    {
      "emoji": "🍤",
      "label": "FRIED SHRIMP"
    },
    {
      "emoji": "🍥",
      "label": "FISH CAKE WITH SWIRL DESIGN"
    },
    {
      "emoji": "🍦",
      "label": "SOFT ICE CREAM"
    },
    {
      "emoji": "🍧",
      "label": "SHAVED ICE"
    },
    {
      "emoji": "🍨",
      "label": "ICE CREAM"
    },
    {
      "emoji": "🍩",
      "label": "DOUGHNUT"
    },
    {
      "emoji": "🍪",
      "label": "COOKIE"
    },
    {
      "emoji": "🍫",
      "label": "CHOCOLATE BAR"
    },
    {
      "emoji": "🍬",
      "label": "CANDY"
    },
    {
      "emoji": "🍭",
      "label": "LOLLIPOP"
    },
    {
      "emoji": "🍮",
      "label": "CUSTARD"
    },
    {
      "emoji": "🍯",
      "label": "HONEY POT"
    },
    {
      "emoji": "🍰",
      "label": "SHORTCAKE"
    },
    {
      "emoji": "🍱",
      "label": "BENTO BOX"
    },
    {
      "emoji": "🍲",
      "label": "POT OF FOOD"
    },
    {
      "emoji": "🍳",
      "label": "COOKING"
    },
    {
      "emoji": "🍴",
      "label": "FORK AND KNIFE"
    },
    {
      "emoji": "🍵",
      "label": "TEACUP WITHOUT HANDLE"
    },
    {
      "emoji": "🍶",
      "label": "SAKE BOTTLE AND CUP"
    },
    {
      "emoji": "🍷",
      "label": "WINE GLASS"
    },
    {
      "emoji": "🍸",
      "label": "COCKTAIL GLASS"
    },
    {
      "emoji": "🍹",
      "label": "TROPICAL DRINK"
    },
    {
      "emoji": "🍺",
      "label": "BEER MUG"
    },
    {
      "emoji": "🍻",
      "label": "CLINKING BEER MUGS"
    },
    {
      "emoji": "🍼",
      "label": "BABY BOTTLE"
    },
    {
      "emoji": "🍽️",
      "label": "FORK AND KNIFE WITH PLATE"
    },
    {
      "emoji": "🍾",
      "label": "BOTTLE WITH POPPING CORK"
    },
    {
      "emoji": "🍿",
      "label": "POPCORN"
    },
    {
      "emoji": "🎀",
      "label": "RIBBON"
    },
    {
      "emoji": "🎁",
      "label": "WRAPPED PRESENT"
    },
    {
      "emoji": "🎂",
      "label": "BIRTHDAY CAKE"
    },
    {
      "emoji": "🎃",
      "label": "JACK-O-LANTERN"
    },
    {
      "emoji": "🎄",
      "label": "CHRISTMAS TREE"
    },
    {
      "emoji": "🎅",
      "label": "FATHER CHRISTMAS"
    },
    {
      "emoji": "🎆",
      "label": "FIREWORKS"
    },
    {
      "emoji": "🎇",
      "label": "FIREWORK SPARKLER"
    },
    {
      "emoji": "🎈",
      "label": "BALLOON"
    },
    {
      "emoji": "🎉",
      "label": "PARTY POPPER"
    },
    {
      "emoji": "🎊",
      "label": "CONFETTI BALL"
    },
    {
      "emoji": "🎋",
      "label": "TANABATA TREE"
    },
    {
      "emoji": "🎌",
      "label": "CROSSED FLAGS"
    },
    {
      "emoji": "🎍",
      "label": "PINE DECORATION"
    },
    {
      "emoji": "🎎",
      "label": "JAPANESE DOLLS"
    },
    {
      "emoji": "🎏",
      "label": "CARP STREAMER"
    },
    {
      "emoji": "🎐",
      "label": "WIND CHIME"
    },
    {
      "emoji": "🎑",
      "label": "MOON VIEWING CEREMONY"
    },
    {
      "emoji": "🎒",
      "label": "SCHOOL SATCHEL"
    },
    {
      "emoji": "🎓",
      "label": "GRADUATION CAP"
    },
    {
      "emoji": "🎖️",
      "label": "MILITARY MEDAL"
    },
    {
      "emoji": "🎗️",
      "label": "REMINDER RIBBON"
    },
    {
      "emoji": "🎙️",
      "label": "STUDIO MICROPHONE"
    },
    {
      "emoji": "🎚️",
      "label": "LEVEL SLIDER"
    },
    {
      "emoji": "🎛️",
      "label": "CONTROL KNOBS"
    },
    {
      "emoji": "🎞️",
      "label": "FILM FRAMES"
    },
    {
      "emoji": "🎟️",
      "label": "ADMISSION TICKETS"
    },
    {
      "emoji": "🎠",
      "label": "CAROUSEL HORSE"
    },
    {
      "emoji": "🎡",
      "label": "FERRIS WHEEL"
    },
    {
      "emoji": "🎢",
      "label": "ROLLER COASTER"
    },
    {
      "emoji": "🎣",
      "label": "FISHING POLE AND FISH"
    },
    {
      "emoji": "🎤",
      "label": "MICROPHONE"
    },
    {
      "emoji": "🎥",
      "label": "MOVIE CAMERA"
    },
    {
      "emoji": "🎦",
      "label": "CINEMA"
    },
    {
      "emoji": "🎧",
      "label": "HEADPHONE"
    },
    {
      "emoji": "🎨",
      "label": "ARTIST PALETTE"
    },
    {
      "emoji": "🎩",
      "label": "TOP HAT"
    },
    {
      "emoji": "🎪",
      "label": "CIRCUS TENT"
    },
    {
      "emoji": "🎫",
      "label": "TICKET"
    },
    {
      "emoji": "🎬",
      "label": "CLAPPER BOARD"
    },
    {
      "emoji": "🎭",
      "label": "PERFORMING ARTS"
    },
    {
      "emoji": "🎮",
      "label": "VIDEO GAME"
    },
    {
      "emoji": "🎯",
      "label": "DIRECT HIT"
    },
    {
      "emoji": "🎰",
      "label": "SLOT MACHINE"
    },
    {
      "emoji": "🎱",
      "label": "BILLIARDS"
    },
    {
      "emoji": "🎲",
      "label": "GAME DIE"
    },
    {
      "emoji": "🎳",
      "label": "BOWLING"
    },
    {
      "emoji": "🎴",
      "label": "FLOWER PLAYING CARDS"
    },
    {
      "emoji": "🎵",
      "label": "MUSICAL NOTE"
    },
    {
      "emoji": "🎶",
      "label": "MULTIPLE MUSICAL NOTES"
    },
    {
      "emoji": "🎷",
      "label": "SAXOPHONE"
    },
    {
      "emoji": "🎸",
      "label": "GUITAR"
    },
    {
      "emoji": "🎹",
      "label": "MUSICAL KEYBOARD"
    },
    {
      "emoji": "🎺",
      "label": "TRUMPET"
    },
    {
      "emoji": "🎻",
      "label": "VIOLIN"
    },
    {
      "emoji": "🎼",
      "label": "MUSICAL SCORE"
    },
    {
      "emoji": "🎽",
      "label": "RUNNING SHIRT WITH SASH"
    },
    {
      "emoji": "🎾",
      "label": "TENNIS RACQUET AND BALL"
    },
    {
      "emoji": "🎿",
      "label": "SKI AND SKI BOOT"
    },
    {
      "emoji": "🏀",
      "label": "BASKETBALL AND HOOP"
    },
    {
      "emoji": "🏁",
      "label": "CHEQUERED FLAG"
    },
    {
      "emoji": "🏂",
      "label": "SNOWBOARDER"
    },
    {
      "emoji": "🏃",
      "label": "RUNNER"
    },
    {
      "emoji": "🏄",
      "label": "SURFER"
    },
    {
      "emoji": "🏅",
      "label": "SPORTS MEDAL"
    },
    {
      "emoji": "🏆",
      "label": "TROPHY"
    },
    {
      "emoji": "🏇",
      "label": "HORSE RACING"
    },
    {
      "emoji": "🏈",
      "label": "AMERICAN FOOTBALL"
    },
    {
      "emoji": "🏉",
      "label": "RUGBY FOOTBALL"
    },
    {
      "emoji": "🏊",
      "label": "SWIMMER"
    },
    {
      "emoji": "🏋️",
      "label": "WEIGHT LIFTER"
    },
    {
      "emoji": "🏌️",
      "label": "GOLFER"
    },
    {
      "emoji": "🏍️",
      "label": "RACING MOTORCYCLE"
    },
    {
      "emoji": "🏎️",
      "label": "RACING CAR"
    },
    {
      "emoji": "🏏",
      "label": "CRICKET BAT AND BALL"
    },
    {
      "emoji": "🏐",
      "label": "VOLLEYBALL"
    },
    {
      "emoji": "🏑",
      "label": "FIELD HOCKEY STICK AND BALL"
    },
    {
      "emoji": "🏒",
      "label": "ICE HOCKEY STICK AND PUCK"
    },
    {
      "emoji": "🏓",
      "label": "TABLE TENNIS PADDLE AND BALL"
    },
    {
      "emoji": "🏔️",
      "label": "SNOW CAPPED MOUNTAIN"
    },
    {
      "emoji": "🏕️",
      "label": "CAMPING"
    },
    {
      "emoji": "🏖️",
      "label": "BEACH WITH UMBRELLA"
    },
    {
      "emoji": "🏗️",
      "label": "BUILDING CONSTRUCTION"
    },
    {
      "emoji": "🏘️",
      "label": "HOUSE BUILDINGS"
    },
    {
      "emoji": "🏙️",
      "label": "CITYSCAPE"
    },
    {
      "emoji": "🏚️",
      "label": "DERELICT HOUSE BUILDING"
    },
    {
      "emoji": "🏛️",
      "label": "CLASSICAL BUILDING"
    },
    {
      "emoji": "🏜️",
      "label": "DESERT"
    },
    {
      "emoji": "🏝️",
      "label": "DESERT ISLAND"
    },
    {
      "emoji": "🏞️",
      "label": "NATIONAL PARK"
    },
    {
      "emoji": "🏟️",
      "label": "STADIUM"
    },
    {
      "emoji": "🏠",
      "label": "HOUSE BUILDING"
    },
    {
      "emoji": "🏡",
      "label": "HOUSE WITH GARDEN"
    },
    {
      "emoji": "🏢",
      "label": "OFFICE BUILDING"
    },
    {
      "emoji": "🏣",
      "label": "JAPANESE POST OFFICE"
    },
    {
      "emoji": "🏤",
      "label": "EUROPEAN POST OFFICE"
    },
    {
      "emoji": "🏥",
      "label": "HOSPITAL"
    },
    {
      "emoji": "🏦",
      "label": "BANK"
    },
    {
      "emoji": "🏧",
      "label": "AUTOMATED TELLER MACHINE"
    },
    {
      "emoji": "🏨",
      "label": "HOTEL"
    },
    {
      "emoji": "🏩",
      "label": "LOVE HOTEL"
    },
    {
      "emoji": "🏪",
      "label": "CONVENIENCE STORE"
    },
    {
      "emoji": "🏫",
      "label": "SCHOOL"
    },
    {
      "emoji": "🏬",
      "label": "DEPARTMENT STORE"
    },
    {
      "emoji": "🏭",
      "label": "FACTORY"
    },
    {
      "emoji": "🏮",
      "label": "IZAKAYA LANTERN"
    },
    {
      "emoji": "🏯",
      "label": "JAPANESE CASTLE"
    },
    {
      "emoji": "🏰",
      "label": "EUROPEAN CASTLE"
    },
    {
      "emoji": "🏳️",
      "label": "WAVING WHITE FLAG"
    },
    {
      "emoji": "🏴",
      "label": "WAVING BLACK FLAG"
    },
    {
      "emoji": "🏵️",
      "label": "ROSETTE"
    },
    {
      "emoji": "🏷️",
      "label": "LABEL"
    },
    {
      "emoji": "🏸",
      "label": "BADMINTON RACQUET AND SHUTTLECOCK"
    },
    {
      "emoji": "🏹",
      "label": "BOW AND ARROW"
    },
    {
      "emoji": "🏺",
      "label": "AMPHORA"
    },
    {
      "emoji": "🏻",
      "label": "EMOJI MODIFIER FITZPATRICK TYPE-1-2"
    },
    {
      "emoji": "🏼",
      "label": "EMOJI MODIFIER FITZPATRICK TYPE-3"
    },
    {
      "emoji": "🏽",
      "label": "EMOJI MODIFIER FITZPATRICK TYPE-4"
    },
    {
      "emoji": "🏾",
      "label": "EMOJI MODIFIER FITZPATRICK TYPE-5"
    },
    {
      "emoji": "🏿",
      "label": "EMOJI MODIFIER FITZPATRICK TYPE-6"
    },
    {
      "emoji": "🐀",
      "label": "RAT"
    },
    {
      "emoji": "🐁",
      "label": "MOUSE"
    },
    {
      "emoji": "🐂",
      "label": "OX"
    },
    {
      "emoji": "🐃",
      "label": "WATER BUFFALO"
    },
    {
      "emoji": "🐄",
      "label": "COW"
    },
    {
      "emoji": "🐅",
      "label": "TIGER"
    },
    {
      "emoji": "🐆",
      "label": "LEOPARD"
    },
    {
      "emoji": "🐇",
      "label": "RABBIT"
    },
    {
      "emoji": "🐈",
      "label": "CAT"
    },
    {
      "emoji": "🐉",
      "label": "DRAGON"
    },
    {
      "emoji": "🐊",
      "label": "CROCODILE"
    },
    {
      "emoji": "🐋",
      "label": "WHALE"
    },
    {
      "emoji": "🐌",
      "label": "SNAIL"
    },
    {
      "emoji": "🐍",
      "label": "SNAKE"
    },
    {
      "emoji": "🐎",
      "label": "HORSE"
    },
    {
      "emoji": "🐏",
      "label": "RAM"
    },
    {
      "emoji": "🐐",
      "label": "GOAT"
    },
    {
      "emoji": "🐑",
      "label": "SHEEP"
    },
    {
      "emoji": "🐒",
      "label": "MONKEY"
    },
    {
      "emoji": "🐓",
      "label": "ROOSTER"
    },
    {
      "emoji": "🐔",
      "label": "CHICKEN"
    },
    {
      "emoji": "🐕",
      "label": "DOG"
    },
    {
      "emoji": "🐖",
      "label": "PIG"
    },
    {
      "emoji": "🐗",
      "label": "BOAR"
    },
    {
      "emoji": "🐘",
      "label": "ELEPHANT"
    },
    {
      "emoji": "🐙",
      "label": "OCTOPUS"
    },
    {
      "emoji": "🐚",
      "label": "SPIRAL SHELL"
    },
    {
      "emoji": "🐛",
      "label": "BUG"
    },
    {
      "emoji": "🐜",
      "label": "ANT"
    },
    {
      "emoji": "🐝",
      "label": "HONEYBEE"
    },
    {
      "emoji": "🐞",
      "label": "LADY BEETLE"
    },
    {
      "emoji": "🐟",
      "label": "FISH"
    },
    {
      "emoji": "🐠",
      "label": "TROPICAL FISH"
    },
    {
      "emoji": "🐡",
      "label": "BLOWFISH"
    },
    {
      "emoji": "🐢",
      "label": "TURTLE"
    },
    {
      "emoji": "🐣",
      "label": "HATCHING CHICK"
    },
    {
      "emoji": "🐤",
      "label": "BABY CHICK"
    },
    {
      "emoji": "🐥",
      "label": "FRONT-FACING BABY CHICK"
    },
    {
      "emoji": "🐦",
      "label": "BIRD"
    },
    {
      "emoji": "🐧",
      "label": "PENGUIN"
    },
    {
      "emoji": "🐨",
      "label": "KOALA"
    },
    {
      "emoji": "🐩",
      "label": "POODLE"
    },
    {
      "emoji": "🐪",
      "label": "DROMEDARY CAMEL"
    },
    {
      "emoji": "🐫",
      "label": "BACTRIAN CAMEL"
    },
    {
      "emoji": "🐬",
      "label": "DOLPHIN"
    },
    {
      "emoji": "🐭",
      "label": "MOUSE FACE"
    },
    {
      "emoji": "🐮",
      "label": "COW FACE"
    },
    {
      "emoji": "🐯",
      "label": "TIGER FACE"
    },
    {
      "emoji": "🐰",
      "label": "RABBIT FACE"
    },
    {
      "emoji": "🐱",
      "label": "CAT FACE"
    },
    {
      "emoji": "🐲",
      "label": "DRAGON FACE"
    },
    {
      "emoji": "🐳",
      "label": "SPOUTING WHALE"
    },
    {
      "emoji": "🐴",
      "label": "HORSE FACE"
    },
    {
      "emoji": "🐵",
      "label": "MONKEY FACE"
    },
    {
      "emoji": "🐶",
      "label": "DOG FACE"
    },
    {
      "emoji": "🐷",
      "label": "PIG FACE"
    },
    {
      "emoji": "🐸",
      "label": "FROG FACE"
    },
    {
      "emoji": "🐹",
      "label": "HAMSTER FACE"
    },
    {
      "emoji": "🐺",
      "label": "WOLF FACE"
    },
    {
      "emoji": "🐻",
      "label": "BEAR FACE"
    },
    {
      "emoji": "🐼",
      "label": "PANDA FACE"
    },
    {
      "emoji": "🐽",
      "label": "PIG NOSE"
    },
    {
      "emoji": "🐾",
      "label": "PAW PRINTS"
    },
    {
      "emoji": "🐿️",
      "label": "CHIPMUNK"
    },
    {
      "emoji": "👀",
      "label": "EYES"
    },
    {
      "emoji": "👁️",
      "label": "EYE"
    },
    {
      "emoji": "👂",
      "label": "EAR"
    },
    {
      "emoji": "👃",
      "label": "NOSE"
    },
    {
      "emoji": "👄",
      "label": "MOUTH"
    },
    {
      "emoji": "👅",
      "label": "TONGUE"
    },
    {
      "emoji": "👆",
      "label": "WHITE UP POINTING BACKHAND INDEX"
    },
    {
      "emoji": "👇",
      "label": "WHITE DOWN POINTING BACKHAND INDEX"
    },
    {
      "emoji": "👈",
      "label": "WHITE LEFT POINTING BACKHAND INDEX"
    },
    {
      "emoji": "👉",
      "label": "WHITE RIGHT POINTING BACKHAND INDEX"
    },
    {
      "emoji": "👊",
      "label": "FISTED HAND SIGN"
    },
    {
      "emoji": "👋",
      "label": "WAVING HAND SIGN"
    },
    {
      "emoji": "👌",
      "label": "OK HAND SIGN"
    },
    {
      "emoji": "👍",
      "label": "THUMBS UP SIGN"
    },
    {
      "emoji": "👎",
      "label": "THUMBS DOWN SIGN"
    },
    {
      "emoji": "👏",
      "label": "CLAPPING HANDS SIGN"
    },
    {
      "emoji": "👐",
      "label": "OPEN HANDS SIGN"
    },
    {
      "emoji": "👑",
      "label": "CROWN"
    },
    {
      "emoji": "👒",
      "label": "WOMANS HAT"
    },
    {
      "emoji": "👓",
      "label": "EYEGLASSES"
    },
    {
      "emoji": "👔",
      "label": "NECKTIE"
    },
    {
      "emoji": "👕",
      "label": "T-SHIRT"
    },
    {
      "emoji": "👖",
      "label": "JEANS"
    },
    {
      "emoji": "👗",
      "label": "DRESS"
    },
    {
      "emoji": "👘",
      "label": "KIMONO"
    },
    {
      "emoji": "👙",
      "label": "BIKINI"
    },
    {
      "emoji": "👚",
      "label": "WOMANS CLOTHES"
    },
    {
      "emoji": "👛",
      "label": "PURSE"
    },
    {
      "emoji": "👜",
      "label": "HANDBAG"
    },
    {
      "emoji": "👝",
      "label": "POUCH"
    },
    {
      "emoji": "👞",
      "label": "MANS SHOE"
    },
    {
      "emoji": "👟",
      "label": "ATHLETIC SHOE"
    },
    {
      "emoji": "👠",
      "label": "HIGH-HEELED SHOE"
    },
    {
      "emoji": "👡",
      "label": "WOMANS SANDAL"
    },
    {
      "emoji": "👢",
      "label": "WOMANS BOOTS"
    },
    {
      "emoji": "👣",
      "label": "FOOTPRINTS"
    },
    {
      "emoji": "👤",
      "label": "BUST IN SILHOUETTE"
    },
    {
      "emoji": "👥",
      "label": "BUSTS IN SILHOUETTE"
    },
    {
      "emoji": "👦",
      "label": "BOY"
    },
    {
      "emoji": "👧",
      "label": "GIRL"
    },
    {
      "emoji": "👨",
      "label": "MAN"
    },
    {
      "emoji": "👩",
      "label": "WOMAN"
    },
    {
      "emoji": "👪",
      "label": "FAMILY"
    },
    {
      "emoji": "👫",
      "label": "MAN AND WOMAN HOLDING HANDS"
    },
    {
      "emoji": "👬",
      "label": "TWO MEN HOLDING HANDS"
    },
    {
      "emoji": "👭",
      "label": "TWO WOMEN HOLDING HANDS"
    },
    {
      "emoji": "👮",
      "label": "POLICE OFFICER"
    },
    {
      "emoji": "👯",
      "label": "WOMAN WITH BUNNY EARS"
    },
    {
      "emoji": "👰",
      "label": "BRIDE WITH VEIL"
    },
    {
      "emoji": "👱",
      "label": "PERSON WITH BLOND HAIR"
    },
    {
      "emoji": "👲",
      "label": "MAN WITH GUA PI MAO"
    },
    {
      "emoji": "👳",
      "label": "MAN WITH TURBAN"
    },
    {
      "emoji": "👴",
      "label": "OLDER MAN"
    },
    {
      "emoji": "👵",
      "label": "OLDER WOMAN"
    },
    {
      "emoji": "👶",
      "label": "BABY"
    },
    {
      "emoji": "👷",
      "label": "CONSTRUCTION WORKER"
    },
    {
      "emoji": "👸",
      "label": "PRINCESS"
    },
    {
      "emoji": "👹",
      "label": "JAPANESE OGRE"
    },
    {
      "emoji": "👺",
      "label": "JAPANESE GOBLIN"
    },
    {
      "emoji": "👻",
      "label": "GHOST"
    },
    {
      "emoji": "👼",
      "label": "BABY ANGEL"
    },
    {
      "emoji": "👽",
      "label": "EXTRATERRESTRIAL ALIEN"
    },
    {
      "emoji": "👾",
      "label": "ALIEN MONSTER"
    },
    {
      "emoji": "👿",
      "label": "IMP"
    },
    {
      "emoji": "💀",
      "label": "SKULL"
    },
    {
      "emoji": "💁",
      "label": "INFORMATION DESK PERSON"
    },
    {
      "emoji": "💂",
      "label": "GUARDSMAN"
    },
    {
      "emoji": "💃",
      "label": "DANCER"
    },
    {
      "emoji": "💄",
      "label": "LIPSTICK"
    },
    {
      "emoji": "💅",
      "label": "NAIL POLISH"
    },
    {
      "emoji": "💆",
      "label": "FACE MASSAGE"
    },
    {
      "emoji": "💇",
      "label": "HAIRCUT"
    },
    {
      "emoji": "💈",
      "label": "BARBER POLE"
    },
    {
      "emoji": "💉",
      "label": "SYRINGE"
    },
    {
      "emoji": "💊",
      "label": "PILL"
    },
    {
      "emoji": "💋",
      "label": "KISS MARK"
    },
    {
      "emoji": "💌",
      "label": "LOVE LETTER"
    },
    {
      "emoji": "💍",
      "label": "RING"
    },
    {
      "emoji": "💎",
      "label": "GEM STONE"
    },
    {
      "emoji": "💏",
      "label": "KISS"
    },
    {
      "emoji": "💐",
      "label": "BOUQUET"
    },
    {
      "emoji": "💑",
      "label": "COUPLE WITH HEART"
    },
    {
      "emoji": "💒",
      "label": "WEDDING"
    },
    {
      "emoji": "💓",
      "label": "BEATING HEART"
    },
    {
      "emoji": "💔",
      "label": "BROKEN HEART"
    },
    {
      "emoji": "💕",
      "label": "TWO HEARTS"
    },
    {
      "emoji": "💖",
      "label": "SPARKLING HEART"
    },
    {
      "emoji": "💗",
      "label": "GROWING HEART"
    },
    {
      "emoji": "💘",
      "label": "HEART WITH ARROW"
    },
    {
      "emoji": "💙",
      "label": "BLUE HEART"
    },
    {
      "emoji": "💚",
      "label": "GREEN HEART"
    },
    {
      "emoji": "💛",
      "label": "YELLOW HEART"
    },
    {
      "emoji": "💜",
      "label": "PURPLE HEART"
    },
    {
      "emoji": "💝",
      "label": "HEART WITH RIBBON"
    },
    {
      "emoji": "💞",
      "label": "REVOLVING HEARTS"
    },
    {
      "emoji": "💟",
      "label": "HEART DECORATION"
    },
    {
      "emoji": "💠",
      "label": "DIAMOND SHAPE WITH A DOT INSIDE"
    },
    {
      "emoji": "💡",
      "label": "ELECTRIC LIGHT BULB"
    },
    {
      "emoji": "💢",
      "label": "ANGER SYMBOL"
    },
    {
      "emoji": "💣",
      "label": "BOMB"
    },
    {
      "emoji": "💤",
      "label": "SLEEPING SYMBOL"
    },
    {
      "emoji": "💥",
      "label": "COLLISION SYMBOL"
    },
    {
      "emoji": "💦",
      "label": "SPLASHING SWEAT SYMBOL"
    },
    {
      "emoji": "💧",
      "label": "DROPLET"
    },
    {
      "emoji": "💨",
      "label": "DASH SYMBOL"
    },
    {
      "emoji": "💩",
      "label": "PILE OF POO"
    },
    {
      "emoji": "💪",
      "label": "FLEXED BICEPS"
    },
    {
      "emoji": "💫",
      "label": "DIZZY SYMBOL"
    },
    {
      "emoji": "💬",
      "label": "SPEECH BALLOON"
    },
    {
      "emoji": "💭",
      "label": "THOUGHT BALLOON"
    },
    {
      "emoji": "💮",
      "label": "WHITE FLOWER"
    },
    {
      "emoji": "💯",
      "label": "HUNDRED POINTS SYMBOL"
    },
    {
      "emoji": "💰",
      "label": "MONEY BAG"
    },
    {
      "emoji": "💱",
      "label": "CURRENCY EXCHANGE"
    },
    {
      "emoji": "💲",
      "label": "HEAVY DOLLAR SIGN"
    },
    {
      "emoji": "💳",
      "label": "CREDIT CARD"
    },
    {
      "emoji": "💴",
      "label": "BANKNOTE WITH YEN SIGN"
    },
    {
      "emoji": "💵",
      "label": "BANKNOTE WITH DOLLAR SIGN"
    },
    {
      "emoji": "💶",
      "label": "BANKNOTE WITH EURO SIGN"
    },
    {
      "emoji": "💷",
      "label": "BANKNOTE WITH POUND SIGN"
    },
    {
      "emoji": "💸",
      "label": "MONEY WITH WINGS"
    },
    {
      "emoji": "💹",
      "label": "CHART WITH UPWARDS TREND AND YEN SIGN"
    },
    {
      "emoji": "💺",
      "label": "SEAT"
    },
    {
      "emoji": "💻",
      "label": "PERSONAL COMPUTER"
    },
    {
      "emoji": "💼",
      "label": "BRIEFCASE"
    },
    {
      "emoji": "💽",
      "label": "MINIDISC"
    },
    {
      "emoji": "💾",
      "label": "FLOPPY DISK"
    },
    {
      "emoji": "💿",
      "label": "OPTICAL DISC"
    },
    {
      "emoji": "📀",
      "label": "DVD"
    },
    {
      "emoji": "📁",
      "label": "FILE FOLDER"
    },
    {
      "emoji": "📂",
      "label": "OPEN FILE FOLDER"
    },
    {
      "emoji": "📃",
      "label": "PAGE WITH CURL"
    },
    {
      "emoji": "📄",
      "label": "PAGE FACING UP"
    },
    {
      "emoji": "📅",
      "label": "CALENDAR"
    },
    {
      "emoji": "📆",
      "label": "TEAR-OFF CALENDAR"
    },
    {
      "emoji": "📇",
      "label": "CARD INDEX"
    },
    {
      "emoji": "📈",
      "label": "CHART WITH UPWARDS TREND"
    },
    {
      "emoji": "📉",
      "label": "CHART WITH DOWNWARDS TREND"
    },
    {
      "emoji": "📊",
      "label": "BAR CHART"
    },
    {
      "emoji": "📋",
      "label": "CLIPBOARD"
    },
    {
      "emoji": "📌",
      "label": "PUSHPIN"
    },
    {
      "emoji": "📍",
      "label": "ROUND PUSHPIN"
    },
    {
      "emoji": "📎",
      "label": "PAPERCLIP"
    },
    {
      "emoji": "📏",
      "label": "STRAIGHT RULER"
    },
    {
      "emoji": "📐",
      "label": "TRIANGULAR RULER"
    },
    {
      "emoji": "📑",
      "label": "BOOKMARK TABS"
    },
    {
      "emoji": "📒",
      "label": "LEDGER"
    },
    {
      "emoji": "📓",
      "label": "NOTEBOOK"
    },
    {
      "emoji": "📔",
      "label": "NOTEBOOK WITH DECORATIVE COVER"
    },
    {
      "emoji": "📕",
      "label": "CLOSED BOOK"
    },
    {
      "emoji": "📖",
      "label": "OPEN BOOK"
    },
    {
      "emoji": "📗",
      "label": "GREEN BOOK"
    },
    {
      "emoji": "📘",
      "label": "BLUE BOOK"
    },
    {
      "emoji": "📙",
      "label": "ORANGE BOOK"
    },
    {
      "emoji": "📚",
      "label": "BOOKS"
    },
    {
      "emoji": "📛",
      "label": "NAME BADGE"
    },
    {
      "emoji": "📜",
      "label": "SCROLL"
    },
    {
      "emoji": "📝",
      "label": "MEMO"
    },
    {
      "emoji": "📞",
      "label": "TELEPHONE RECEIVER"
    },
    {
      "emoji": "📟",
      "label": "PAGER"
    },
    {
      "emoji": "📠",
      "label": "FAX MACHINE"
    },
    {
      "emoji": "📡",
      "label": "SATELLITE ANTENNA"
    },
    {
      "emoji": "📢",
      "label": "PUBLIC ADDRESS LOUDSPEAKER"
    },
    {
      "emoji": "📣",
      "label": "CHEERING MEGAPHONE"
    },
    {
      "emoji": "📤",
      "label": "OUTBOX TRAY"
    },
    {
      "emoji": "📥",
      "label": "INBOX TRAY"
    },
    {
      "emoji": "📦",
      "label": "PACKAGE"
    },
    {
      "emoji": "📧",
      "label": "E-MAIL SYMBOL"
    },
    {
      "emoji": "📨",
      "label": "INCOMING ENVELOPE"
    },
    {
      "emoji": "📩",
      "label": "ENVELOPE WITH DOWNWARDS ARROW ABOVE"
    },
    {
      "emoji": "📪",
      "label": "CLOSED MAILBOX WITH LOWERED FLAG"
    },
    {
      "emoji": "📫",
      "label": "CLOSED MAILBOX WITH RAISED FLAG"
    },
    {
      "emoji": "📬",
      "label": "OPEN MAILBOX WITH RAISED FLAG"
    },
    {
      "emoji": "📭",
      "label": "OPEN MAILBOX WITH LOWERED FLAG"
    },
    {
      "emoji": "📮",
      "label": "POSTBOX"
    },
    {
      "emoji": "📯",
      "label": "POSTAL HORN"
    },
    {
      "emoji": "📰",
      "label": "NEWSPAPER"
    },
    {
      "emoji": "📱",
      "label": "MOBILE PHONE"
    },
    {
      "emoji": "📲",
      "label": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT"
    },
    {
      "emoji": "📳",
      "label": "VIBRATION MODE"
    },
    {
      "emoji": "📴",
      "label": "MOBILE PHONE OFF"
    },
    {
      "emoji": "📵",
      "label": "NO MOBILE PHONES"
    },
    {
      "emoji": "📶",
      "label": "ANTENNA WITH BARS"
    },
    {
      "emoji": "📷",
      "label": "CAMERA"
    },
    {
      "emoji": "📸",
      "label": "CAMERA WITH FLASH"
    },
    {
      "emoji": "📹",
      "label": "VIDEO CAMERA"
    },
    {
      "emoji": "📺",
      "label": "TELEVISION"
    },
    {
      "emoji": "📻",
      "label": "RADIO"
    },
    {
      "emoji": "📼",
      "label": "VIDEOCASSETTE"
    },
    {
      "emoji": "📽️",
      "label": "FILM PROJECTOR"
    },
    {
      "emoji": "📿",
      "label": "PRAYER BEADS"
    },
    {
      "emoji": "🔀",
      "label": "TWISTED RIGHTWARDS ARROWS"
    },
    {
      "emoji": "🔁",
      "label": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS"
    },
    {
      "emoji": "🔂",
      "label": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY"
    },
    {
      "emoji": "🔃",
      "label": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS"
    },
    {
      "emoji": "🔄",
      "label": "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS"
    },
    {
      "emoji": "🔅",
      "label": "LOW BRIGHTNESS SYMBOL"
    },
    {
      "emoji": "🔆",
      "label": "HIGH BRIGHTNESS SYMBOL"
    },
    {
      "emoji": "🔇",
      "label": "SPEAKER WITH CANCELLATION STROKE"
    },
    {
      "emoji": "🔈",
      "label": "SPEAKER"
    },
    {
      "emoji": "🔉",
      "label": "SPEAKER WITH ONE SOUND WAVE"
    },
    {
      "emoji": "🔊",
      "label": "SPEAKER WITH THREE SOUND WAVES"
    },
    {
      "emoji": "🔋",
      "label": "BATTERY"
    },
    {
      "emoji": "🔌",
      "label": "ELECTRIC PLUG"
    },
    {
      "emoji": "🔍",
      "label": "LEFT-POINTING MAGNIFYING GLASS"
    },
    {
      "emoji": "🔎",
      "label": "RIGHT-POINTING MAGNIFYING GLASS"
    },
    {
      "emoji": "🔏",
      "label": "LOCK WITH INK PEN"
    },
    {
      "emoji": "🔐",
      "label": "CLOSED LOCK WITH KEY"
    },
    {
      "emoji": "🔑",
      "label": "KEY"
    },
    {
      "emoji": "🔒",
      "label": "LOCK"
    },
    {
      "emoji": "🔓",
      "label": "OPEN LOCK"
    },
    {
      "emoji": "🔔",
      "label": "BELL"
    },
    {
      "emoji": "🔕",
      "label": "BELL WITH CANCELLATION STROKE"
    },
    {
      "emoji": "🔖",
      "label": "BOOKMARK"
    },
    {
      "emoji": "🔗",
      "label": "LINK SYMBOL"
    },
    {
      "emoji": "🔘",
      "label": "RADIO BUTTON"
    },
    {
      "emoji": "🔙",
      "label": "BACK WITH LEFTWARDS ARROW ABOVE"
    },
    {
      "emoji": "🔚",
      "label": "END WITH LEFTWARDS ARROW ABOVE"
    },
    {
      "emoji": "🔛",
      "label": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE"
    },
    {
      "emoji": "🔜",
      "label": "SOON WITH RIGHTWARDS ARROW ABOVE"
    },
    {
      "emoji": "🔝",
      "label": "TOP WITH UPWARDS ARROW ABOVE"
    },
    {
      "emoji": "🔞",
      "label": "NO ONE UNDER EIGHTEEN SYMBOL"
    },
    {
      "emoji": "🔟",
      "label": "KEYCAP TEN"
    },
    {
      "emoji": "🔠",
      "label": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS"
    },
    {
      "emoji": "🔡",
      "label": "INPUT SYMBOL FOR LATIN SMALL LETTERS"
    },
    {
      "emoji": "🔢",
      "label": "INPUT SYMBOL FOR NUMBERS"
    },
    {
      "emoji": "🔣",
      "label": "INPUT SYMBOL FOR SYMBOLS"
    },
    {
      "emoji": "🔤",
      "label": "INPUT SYMBOL FOR LATIN LETTERS"
    },
    {
      "emoji": "🔥",
      "label": "FIRE"
    },
    {
      "emoji": "🔦",
      "label": "ELECTRIC TORCH"
    },
    {
      "emoji": "🔧",
      "label": "WRENCH"
    },
    {
      "emoji": "🔨",
      "label": "HAMMER"
    },
    {
      "emoji": "🔩",
      "label": "NUT AND BOLT"
    },
    {
      "emoji": "🔪",
      "label": "HOCHO"
    },
    {
      "emoji": "🔫",
      "label": "PISTOL"
    },
    {
      "emoji": "🔬",
      "label": "MICROSCOPE"
    },
    {
      "emoji": "🔭",
      "label": "TELESCOPE"
    },
    {
      "emoji": "🔮",
      "label": "CRYSTAL BALL"
    },
    {
      "emoji": "🔯",
      "label": "SIX POINTED STAR WITH MIDDLE DOT"
    },
    {
      "emoji": "🔰",
      "label": "JAPANESE SYMBOL FOR BEGINNER"
    },
    {
      "emoji": "🔱",
      "label": "TRIDENT EMBLEM"
    },
    {
      "emoji": "🔲",
      "label": "BLACK SQUARE BUTTON"
    },
    {
      "emoji": "🔳",
      "label": "WHITE SQUARE BUTTON"
    },
    {
      "emoji": "🔴",
      "label": "LARGE RED CIRCLE"
    },
    {
      "emoji": "🔵",
      "label": "LARGE BLUE CIRCLE"
    },
    {
      "emoji": "🔶",
      "label": "LARGE ORANGE DIAMOND"
    },
    {
      "emoji": "🔷",
      "label": "LARGE BLUE DIAMOND"
    },
    {
      "emoji": "🔸",
      "label": "SMALL ORANGE DIAMOND"
    },
    {
      "emoji": "🔹",
      "label": "SMALL BLUE DIAMOND"
    },
    {
      "emoji": "🔺",
      "label": "UP-POINTING RED TRIANGLE"
    },
    {
      "emoji": "🔻",
      "label": "DOWN-POINTING RED TRIANGLE"
    },
    {
      "emoji": "🔼",
      "label": "UP-POINTING SMALL RED TRIANGLE"
    },
    {
      "emoji": "🔽",
      "label": "DOWN-POINTING SMALL RED TRIANGLE"
    },
    {
      "emoji": "🕉️",
      "label": "OM SYMBOL"
    },
    {
      "emoji": "🕊️",
      "label": "DOVE OF PEACE"
    },
    {
      "emoji": "🕋",
      "label": "KAABA"
    },
    {
      "emoji": "🕌",
      "label": "MOSQUE"
    },
    {
      "emoji": "🕍",
      "label": "SYNAGOGUE"
    },
    {
      "emoji": "🕎",
      "label": "MENORAH WITH NINE BRANCHES"
    },
    {
      "emoji": "🕐",
      "label": "CLOCK FACE ONE OCLOCK"
    },
    {
      "emoji": "🕑",
      "label": "CLOCK FACE TWO OCLOCK"
    },
    {
      "emoji": "🕒",
      "label": "CLOCK FACE THREE OCLOCK"
    },
    {
      "emoji": "🕓",
      "label": "CLOCK FACE FOUR OCLOCK"
    },
    {
      "emoji": "🕔",
      "label": "CLOCK FACE FIVE OCLOCK"
    },
    {
      "emoji": "🕕",
      "label": "CLOCK FACE SIX OCLOCK"
    },
    {
      "emoji": "🕖",
      "label": "CLOCK FACE SEVEN OCLOCK"
    },
    {
      "emoji": "🕗",
      "label": "CLOCK FACE EIGHT OCLOCK"
    },
    {
      "emoji": "🕘",
      "label": "CLOCK FACE NINE OCLOCK"
    },
    {
      "emoji": "🕙",
      "label": "CLOCK FACE TEN OCLOCK"
    },
    {
      "emoji": "🕚",
      "label": "CLOCK FACE ELEVEN OCLOCK"
    },
    {
      "emoji": "🕛",
      "label": "CLOCK FACE TWELVE OCLOCK"
    },
    {
      "emoji": "🕜",
      "label": "CLOCK FACE ONE-THIRTY"
    },
    {
      "emoji": "🕝",
      "label": "CLOCK FACE TWO-THIRTY"
    },
    {
      "emoji": "🕞",
      "label": "CLOCK FACE THREE-THIRTY"
    },
    {
      "emoji": "🕟",
      "label": "CLOCK FACE FOUR-THIRTY"
    },
    {
      "emoji": "🕠",
      "label": "CLOCK FACE FIVE-THIRTY"
    },
    {
      "emoji": "🕡",
      "label": "CLOCK FACE SIX-THIRTY"
    },
    {
      "emoji": "🕢",
      "label": "CLOCK FACE SEVEN-THIRTY"
    },
    {
      "emoji": "🕣",
      "label": "CLOCK FACE EIGHT-THIRTY"
    },
    {
      "emoji": "🕤",
      "label": "CLOCK FACE NINE-THIRTY"
    },
    {
      "emoji": "🕥",
      "label": "CLOCK FACE TEN-THIRTY"
    },
    {
      "emoji": "🕦",
      "label": "CLOCK FACE ELEVEN-THIRTY"
    },
    {
      "emoji": "🕧",
      "label": "CLOCK FACE TWELVE-THIRTY"
    },
    {
      "emoji": "🕯️",
      "label": "CANDLE"
    },
    {
      "emoji": "🕰️",
      "label": "MANTELPIECE CLOCK"
    },
    {
      "emoji": "🕳️",
      "label": "HOLE"
    },
    {
      "emoji": "🕴️",
      "label": "MAN IN BUSINESS SUIT LEVITATING"
    },
    {
      "emoji": "🕵️",
      "label": "SLEUTH OR SPY"
    },
    {
      "emoji": "🕶️",
      "label": "DARK SUNGLASSES"
    },
    {
      "emoji": "🕷️",
      "label": "SPIDER"
    },
    {
      "emoji": "🕸️",
      "label": "SPIDER WEB"
    },
    {
      "emoji": "🕹️",
      "label": "JOYSTICK"
    },
    {
      "emoji": "🕺",
      "label": "MAN DANCING"
    },
    {
      "emoji": "🖇️",
      "label": "LINKED PAPERCLIPS"
    },
    {
      "emoji": "🖊️",
      "label": "LOWER LEFT BALLPOINT PEN"
    },
    {
      "emoji": "🖋️",
      "label": "LOWER LEFT FOUNTAIN PEN"
    },
    {
      "emoji": "🖌️",
      "label": "LOWER LEFT PAINTBRUSH"
    },
    {
      "emoji": "🖍️",
      "label": "LOWER LEFT CRAYON"
    },
    {
      "emoji": "🖐️",
      "label": "RAISED HAND WITH FINGERS SPLAYED"
    },
    {
      "emoji": "🖕",
      "label": "REVERSED HAND WITH MIDDLE FINGER EXTENDED"
    },
    {
      "emoji": "🖖",
      "label": "RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS"
    },
    {
      "emoji": "🖤",
      "label": "BLACK HEART"
    },
    {
      "emoji": "🖥️",
      "label": "DESKTOP COMPUTER"
    },
    {
      "emoji": "🖨️",
      "label": "PRINTER"
    },
    {
      "emoji": "🖱️",
      "label": "THREE BUTTON MOUSE"
    },
    {
      "emoji": "🖲️",
      "label": "TRACKBALL"
    },
    {
      "emoji": "🖼️",
      "label": "FRAME WITH PICTURE"
    },
    {
      "emoji": "🗂️",
      "label": "CARD INDEX DIVIDERS"
    },
    {
      "emoji": "🗃️",
      "label": "CARD FILE BOX"
    },
    {
      "emoji": "🗄️",
      "label": "FILE CABINET"
    },
    {
      "emoji": "🗑️",
      "label": "WASTEBASKET"
    },
    {
      "emoji": "🗒️",
      "label": "SPIRAL NOTE PAD"
    },
    {
      "emoji": "🗓️",
      "label": "SPIRAL CALENDAR PAD"
    },
    {
      "emoji": "🗜️",
      "label": "COMPRESSION"
    },
    {
      "emoji": "🗝️",
      "label": "OLD KEY"
    },
    {
      "emoji": "🗞️",
      "label": "ROLLED-UP NEWSPAPER"
    },
    {
      "emoji": "🗡️",
      "label": "DAGGER KNIFE"
    },
    {
      "emoji": "🗣️",
      "label": "SPEAKING HEAD IN SILHOUETTE"
    },
    {
      "emoji": "🗨️",
      "label": "LEFT SPEECH BUBBLE"
    },
    {
      "emoji": "🗯️",
      "label": "RIGHT ANGER BUBBLE"
    },
    {
      "emoji": "🗳️",
      "label": "BALLOT BOX WITH BALLOT"
    },
    {
      "emoji": "🗺️",
      "label": "WORLD MAP"
    },
    {
      "emoji": "🗻",
      "label": "MOUNT FUJI"
    },
    {
      "emoji": "🗼",
      "label": "TOKYO TOWER"
    },
    {
      "emoji": "🗽",
      "label": "STATUE OF LIBERTY"
    },
    {
      "emoji": "🗾",
      "label": "SILHOUETTE OF JAPAN"
    },
    {
      "emoji": "🗿",
      "label": "MOYAI"
    },
    {
      "emoji": "😀",
      "label": "GRINNING FACE"
    },
    {
      "emoji": "😁",
      "label": "GRINNING FACE WITH SMILING EYES"
    },
    {
      "emoji": "😂",
      "label": "FACE WITH TEARS OF JOY"
    },
    {
      "emoji": "😃",
      "label": "SMILING FACE WITH OPEN MOUTH"
    },
    {
      "emoji": "😄",
      "label": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES"
    },
    {
      "emoji": "😅",
      "label": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT"
    },
    {
      "emoji": "😆",
      "label": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"
    },
    {
      "emoji": "😇",
      "label": "SMILING FACE WITH HALO"
    },
    {
      "emoji": "😈",
      "label": "SMILING FACE WITH HORNS"
    },
    {
      "emoji": "😉",
      "label": "WINKING FACE"
    },
    {
      "emoji": "😊",
      "label": "SMILING FACE WITH SMILING EYES"
    },
    {
      "emoji": "😋",
      "label": "FACE SAVOURING DELICIOUS FOOD"
    },
    {
      "emoji": "😌",
      "label": "RELIEVED FACE"
    },
    {
      "emoji": "😍",
      "label": "SMILING FACE WITH HEART-SHAPED EYES"
    },
    {
      "emoji": "😎",
      "label": "SMILING FACE WITH SUNGLASSES"
    },
    {
      "emoji": "😏",
      "label": "SMIRKING FACE"
    },
    {
      "emoji": "😐",
      "label": "NEUTRAL FACE"
    },
    {
      "emoji": "😑",
      "label": "EXPRESSIONLESS FACE"
    },
    {
      "emoji": "😒",
      "label": "UNAMUSED FACE"
    },
    {
      "emoji": "😓",
      "label": "FACE WITH COLD SWEAT"
    },
    {
      "emoji": "😔",
      "label": "PENSIVE FACE"
    },
    {
      "emoji": "😕",
      "label": "CONFUSED FACE"
    },
    {
      "emoji": "😖",
      "label": "CONFOUNDED FACE"
    },
    {
      "emoji": "😗",
      "label": "KISSING FACE"
    },
    {
      "emoji": "😘",
      "label": "FACE THROWING A KISS"
    },
    {
      "emoji": "😙",
      "label": "KISSING FACE WITH SMILING EYES"
    },
    {
      "emoji": "😚",
      "label": "KISSING FACE WITH CLOSED EYES"
    },
    {
      "emoji": "😛",
      "label": "FACE WITH STUCK-OUT TONGUE"
    },
    {
      "emoji": "😜",
      "label": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE"
    },
    {
      "emoji": "😝",
      "label": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES"
    },
    {
      "emoji": "😞",
      "label": "DISAPPOINTED FACE"
    },
    {
      "emoji": "😟",
      "label": "WORRIED FACE"
    },
    {
      "emoji": "😠",
      "label": "ANGRY FACE"
    },
    {
      "emoji": "😡",
      "label": "POUTING FACE"
    },
    {
      "emoji": "😢",
      "label": "CRYING FACE"
    },
    {
      "emoji": "😣",
      "label": "PERSEVERING FACE"
    },
    {
      "emoji": "😤",
      "label": "FACE WITH LOOK OF TRIUMPH"
    },
    {
      "emoji": "😥",
      "label": "DISAPPOINTED BUT RELIEVED FACE"
    },
    {
      "emoji": "😦",
      "label": "FROWNING FACE WITH OPEN MOUTH"
    },
    {
      "emoji": "😧",
      "label": "ANGUISHED FACE"
    },
    {
      "emoji": "😨",
      "label": "FEARFUL FACE"
    },
    {
      "emoji": "😩",
      "label": "WEARY FACE"
    },
    {
      "emoji": "😪",
      "label": "SLEEPY FACE"
    },
    {
      "emoji": "😫",
      "label": "TIRED FACE"
    },
    {
      "emoji": "😬",
      "label": "GRIMACING FACE"
    },
    {
      "emoji": "😭",
      "label": "LOUDLY CRYING FACE"
    },
    {
      "emoji": "😮",
      "label": "FACE WITH OPEN MOUTH"
    },
    {
      "emoji": "😯",
      "label": "HUSHED FACE"
    },
    {
      "emoji": "😰",
      "label": "FACE WITH OPEN MOUTH AND COLD SWEAT"
    },
    {
      "emoji": "😱",
      "label": "FACE SCREAMING IN FEAR"
    },
    {
      "emoji": "😲",
      "label": "ASTONISHED FACE"
    },
    {
      "emoji": "😳",
      "label": "FLUSHED FACE"
    },
    {
      "emoji": "😴",
      "label": "SLEEPING FACE"
    },
    {
      "emoji": "😵",
      "label": "DIZZY FACE"
    },
    {
      "emoji": "😶",
      "label": "FACE WITHOUT MOUTH"
    },
    {
      "emoji": "😷",
      "label": "FACE WITH MEDICAL MASK"
    },
    {
      "emoji": "😸",
      "label": "GRINNING CAT FACE WITH SMILING EYES"
    },
    {
      "emoji": "😹",
      "label": "CAT FACE WITH TEARS OF JOY"
    },
    {
      "emoji": "😺",
      "label": "SMILING CAT FACE WITH OPEN MOUTH"
    },
    {
      "emoji": "😻",
      "label": "SMILING CAT FACE WITH HEART-SHAPED EYES"
    },
    {
      "emoji": "😼",
      "label": "CAT FACE WITH WRY SMILE"
    },
    {
      "emoji": "😽",
      "label": "KISSING CAT FACE WITH CLOSED EYES"
    },
    {
      "emoji": "😾",
      "label": "POUTING CAT FACE"
    },
    {
      "emoji": "😿",
      "label": "CRYING CAT FACE"
    },
    {
      "emoji": "🙀",
      "label": "WEARY CAT FACE"
    },
    {
      "emoji": "🙁",
      "label": "SLIGHTLY FROWNING FACE"
    },
    {
      "emoji": "🙂",
      "label": "SLIGHTLY SMILING FACE"
    },
    {
      "emoji": "🙃",
      "label": "UPSIDE-DOWN FACE"
    },
    {
      "emoji": "🙄",
      "label": "FACE WITH ROLLING EYES"
    },
    {
      "emoji": "🙅",
      "label": "FACE WITH NO GOOD GESTURE"
    },
    {
      "emoji": "🙆",
      "label": "FACE WITH OK GESTURE"
    },
    {
      "emoji": "🙇",
      "label": "PERSON BOWING DEEPLY"
    },
    {
      "emoji": "🙈",
      "label": "SEE-NO-EVIL MONKEY"
    },
    {
      "emoji": "🙉",
      "label": "HEAR-NO-EVIL MONKEY"
    },
    {
      "emoji": "🙊",
      "label": "SPEAK-NO-EVIL MONKEY"
    },
    {
      "emoji": "🙋",
      "label": "HAPPY PERSON RAISING ONE HAND"
    },
    {
      "emoji": "🙌",
      "label": "PERSON RAISING BOTH HANDS IN CELEBRATION"
    },
    {
      "emoji": "🙍",
      "label": "PERSON FROWNING"
    },
    {
      "emoji": "🙎",
      "label": "PERSON WITH POUTING FACE"
    },
    {
      "emoji": "🙏",
      "label": "PERSON WITH FOLDED HANDS"
    },
    {
      "emoji": "🚀",
      "label": "ROCKET"
    },
    {
      "emoji": "🚁",
      "label": "HELICOPTER"
    },
    {
      "emoji": "🚂",
      "label": "STEAM LOCOMOTIVE"
    },
    {
      "emoji": "🚃",
      "label": "RAILWAY CAR"
    },
    {
      "emoji": "🚄",
      "label": "HIGH-SPEED TRAIN"
    },
    {
      "emoji": "🚅",
      "label": "HIGH-SPEED TRAIN WITH BULLET NOSE"
    },
    {
      "emoji": "🚆",
      "label": "TRAIN"
    },
    {
      "emoji": "🚇",
      "label": "METRO"
    },
    {
      "emoji": "🚈",
      "label": "LIGHT RAIL"
    },
    {
      "emoji": "🚉",
      "label": "STATION"
    },
    {
      "emoji": "🚊",
      "label": "TRAM"
    },
    {
      "emoji": "🚋",
      "label": "TRAM CAR"
    },
    {
      "emoji": "🚌",
      "label": "BUS"
    },
    {
      "emoji": "🚍",
      "label": "ONCOMING BUS"
    },
    {
      "emoji": "🚎",
      "label": "TROLLEYBUS"
    },
    {
      "emoji": "🚏",
      "label": "BUS STOP"
    },
    {
      "emoji": "🚐",
      "label": "MINIBUS"
    },
    {
      "emoji": "🚑",
      "label": "AMBULANCE"
    },
    {
      "emoji": "🚒",
      "label": "FIRE ENGINE"
    },
    {
      "emoji": "🚓",
      "label": "POLICE CAR"
    },
    {
      "emoji": "🚔",
      "label": "ONCOMING POLICE CAR"
    },
    {
      "emoji": "🚕",
      "label": "TAXI"
    },
    {
      "emoji": "🚖",
      "label": "ONCOMING TAXI"
    },
    {
      "emoji": "🚗",
      "label": "AUTOMOBILE"
    },
    {
      "emoji": "🚘",
      "label": "ONCOMING AUTOMOBILE"
    },
    {
      "emoji": "🚙",
      "label": "RECREATIONAL VEHICLE"
    },
    {
      "emoji": "🚚",
      "label": "DELIVERY TRUCK"
    },
    {
      "emoji": "🚛",
      "label": "ARTICULATED LORRY"
    },
    {
      "emoji": "🚜",
      "label": "TRACTOR"
    },
    {
      "emoji": "🚝",
      "label": "MONORAIL"
    },
    {
      "emoji": "🚞",
      "label": "MOUNTAIN RAILWAY"
    },
    {
      "emoji": "🚟",
      "label": "SUSPENSION RAILWAY"
    },
    {
      "emoji": "🚠",
      "label": "MOUNTAIN CABLEWAY"
    },
    {
      "emoji": "🚡",
      "label": "AERIAL TRAMWAY"
    },
    {
      "emoji": "🚢",
      "label": "SHIP"
    },
    {
      "emoji": "🚣",
      "label": "ROWBOAT"
    },
    {
      "emoji": "🚤",
      "label": "SPEEDBOAT"
    },
    {
      "emoji": "🚥",
      "label": "HORIZONTAL TRAFFIC LIGHT"
    },
    {
      "emoji": "🚦",
      "label": "VERTICAL TRAFFIC LIGHT"
    },
    {
      "emoji": "🚧",
      "label": "CONSTRUCTION SIGN"
    },
    {
      "emoji": "🚨",
      "label": "POLICE CARS REVOLVING LIGHT"
    },
    {
      "emoji": "🚩",
      "label": "TRIANGULAR FLAG ON POST"
    },
    {
      "emoji": "🚪",
      "label": "DOOR"
    },
    {
      "emoji": "🚫",
      "label": "NO ENTRY SIGN"
    },
    {
      "emoji": "🚬",
      "label": "SMOKING SYMBOL"
    },
    {
      "emoji": "🚭",
      "label": "NO SMOKING SYMBOL"
    },
    {
      "emoji": "🚮",
      "label": "PUT LITTER IN ITS PLACE SYMBOL"
    },
    {
      "emoji": "🚯",
      "label": "DO NOT LITTER SYMBOL"
    },
    {
      "emoji": "🚰",
      "label": "POTABLE WATER SYMBOL"
    },
    {
      "emoji": "🚱",
      "label": "NON-POTABLE WATER SYMBOL"
    },
    {
      "emoji": "🚲",
      "label": "BICYCLE"
    },
    {
      "emoji": "🚳",
      "label": "NO BICYCLES"
    },
    {
      "emoji": "🚴",
      "label": "BICYCLIST"
    },
    {
      "emoji": "🚵",
      "label": "MOUNTAIN BICYCLIST"
    },
    {
      "emoji": "🚶",
      "label": "PEDESTRIAN"
    },
    {
      "emoji": "🚷",
      "label": "NO PEDESTRIANS"
    },
    {
      "emoji": "🚸",
      "label": "CHILDREN CROSSING"
    },
    {
      "emoji": "🚹",
      "label": "MENS SYMBOL"
    },
    {
      "emoji": "🚺",
      "label": "WOMENS SYMBOL"
    },
    {
      "emoji": "🚻",
      "label": "RESTROOM"
    },
    {
      "emoji": "🚼",
      "label": "BABY SYMBOL"
    },
    {
      "emoji": "🚽",
      "label": "TOILET"
    },
    {
      "emoji": "🚾",
      "label": "WATER CLOSET"
    },
    {
      "emoji": "🚿",
      "label": "SHOWER"
    },
    {
      "emoji": "🛀",
      "label": "BATH"
    },
    {
      "emoji": "🛁",
      "label": "BATHTUB"
    },
    {
      "emoji": "🛂",
      "label": "PASSPORT CONTROL"
    },
    {
      "emoji": "🛃",
      "label": "CUSTOMS"
    },
    {
      "emoji": "🛄",
      "label": "BAGGAGE CLAIM"
    },
    {
      "emoji": "🛅",
      "label": "LEFT LUGGAGE"
    },
    {
      "emoji": "🛋️",
      "label": "COUCH AND LAMP"
    },
    {
      "emoji": "🛌",
      "label": "SLEEPING ACCOMMODATION"
    },
    {
      "emoji": "🛍️",
      "label": "SHOPPING BAGS"
    },
    {
      "emoji": "🛎️",
      "label": "BELLHOP BELL"
    },
    {
      "emoji": "🛏️",
      "label": "BED"
    },
    {
      "emoji": "🛐",
      "label": "PLACE OF WORSHIP"
    },
    {
      "emoji": "🛑",
      "label": "OCTAGONAL SIGN"
    },
    {
      "emoji": "🛒",
      "label": "SHOPPING TROLLEY"
    },
    {
      "emoji": "🛕",
      "label": "HINDU TEMPLE"
    },
    {
      "emoji": "🛖",
      "label": "HUT"
    },
    {
      "emoji": "🛗",
      "label": "ELEVATOR"
    },
    {
      "emoji": "🛜",
      "label": "WIRELESS"
    },
    {
      "emoji": "🛝",
      "label": "PLAYGROUND SLIDE"
    },
    {
      "emoji": "🛞",
      "label": "WHEEL"
    },
    {
      "emoji": "🛟",
      "label": "RING BUOY"
    },
    {
      "emoji": "🛠️",
      "label": "HAMMER AND WRENCH"
    },
    {
      "emoji": "🛡️",
      "label": "SHIELD"
    },
    {
      "emoji": "🛢️",
      "label": "OIL DRUM"
    },
    {
      "emoji": "🛣️",
      "label": "MOTORWAY"
    },
    {
      "emoji": "🛤️",
      "label": "RAILWAY TRACK"
    },
    {
      "emoji": "🛥️",
      "label": "MOTOR BOAT"
    },
    {
      "emoji": "🛩️",
      "label": "SMALL AIRPLANE"
    },
    {
      "emoji": "🛫",
      "label": "AIRPLANE DEPARTURE"
    },
    {
      "emoji": "🛬",
      "label": "AIRPLANE ARRIVING"
    },
    {
      "emoji": "🛰️",
      "label": "SATELLITE"
    },
    {
      "emoji": "🛳️",
      "label": "PASSENGER SHIP"
    },
    {
      "emoji": "🛴",
      "label": "SCOOTER"
    },
    {
      "emoji": "🛵",
      "label": "MOTOR SCOOTER"
    },
    {
      "emoji": "🛶",
      "label": "CANOE"
    },
    {
      "emoji": "🛷",
      "label": "SLED"
    },
    {
      "emoji": "🛸",
      "label": "FLYING SAUCER"
    },
    {
      "emoji": "🛹",
      "label": "SKATEBOARD"
    },
    {
      "emoji": "🛺",
      "label": "AUTO RICKSHAW"
    },
    {
      "emoji": "🛻",
      "label": "PICKUP TRUCK"
    },
    {
      "emoji": "🛼",
      "label": "ROLLER SKATE"
    },
    {
      "emoji": "🟠",
      "label": "LARGE ORANGE CIRCLE"
    },
    {
      "emoji": "🟡",
      "label": "LARGE YELLOW CIRCLE"
    },
    {
      "emoji": "🟢",
      "label": "LARGE GREEN CIRCLE"
    },
    {
      "emoji": "🟣",
      "label": "LARGE PURPLE CIRCLE"
    },
    {
      "emoji": "🟤",
      "label": "LARGE BROWN CIRCLE"
    },
    {
      "emoji": "🟥",
      "label": "LARGE RED SQUARE"
    },
    {
      "emoji": "🟦",
      "label": "LARGE BLUE SQUARE"
    },
    {
      "emoji": "🟧",
      "label": "LARGE ORANGE SQUARE"
    },
    {
      "emoji": "🟨",
      "label": "LARGE YELLOW SQUARE"
    },
    {
      "emoji": "🟩",
      "label": "LARGE GREEN SQUARE"
    },
    {
      "emoji": "🟪",
      "label": "LARGE PURPLE SQUARE"
    },
    {
      "emoji": "🟫",
      "label": "LARGE BROWN SQUARE"
    },
    {
      "emoji": "🟰",
      "label": "HEAVY EQUALS SIGN"
    },
    {
      "emoji": "🤌",
      "label": "PINCHED FINGERS"
    },
    {
      "emoji": "🤍",
      "label": "WHITE HEART"
    },
    {
      "emoji": "🤎",
      "label": "BROWN HEART"
    },
    {
      "emoji": "🤏",
      "label": "PINCHING HAND"
    },
    {
      "emoji": "🤐",
      "label": "ZIPPER-MOUTH FACE"
    },
    {
      "emoji": "🤑",
      "label": "MONEY-MOUTH FACE"
    },
    {
      "emoji": "🤒",
      "label": "FACE WITH THERMOMETER"
    },
    {
      "emoji": "🤓",
      "label": "NERD FACE"
    },
    {
      "emoji": "🤔",
      "label": "THINKING FACE"
    },
    {
      "emoji": "🤕",
      "label": "FACE WITH HEAD-BANDAGE"
    },
    {
      "emoji": "🤖",
      "label": "ROBOT FACE"
    },
    {
      "emoji": "🤗",
      "label": "HUGGING FACE"
    },
    {
      "emoji": "🤘",
      "label": "SIGN OF THE HORNS"
    },
    {
      "emoji": "🤙",
      "label": "CALL ME HAND"
    },
    {
      "emoji": "🤚",
      "label": "RAISED BACK OF HAND"
    },
    {
      "emoji": "🤛",
      "label": "LEFT-FACING FIST"
    },
    {
      "emoji": "🤜",
      "label": "RIGHT-FACING FIST"
    },
    {
      "emoji": "🤝",
      "label": "HANDSHAKE"
    },
    {
      "emoji": "🤞",
      "label": "HAND WITH INDEX AND MIDDLE FINGERS CROSSED"
    },
    {
      "emoji": "🤟",
      "label": "I LOVE YOU HAND SIGN"
    },
    {
      "emoji": "🤠",
      "label": "FACE WITH COWBOY HAT"
    },
    {
      "emoji": "🤡",
      "label": "CLOWN FACE"
    },
    {
      "emoji": "🤢",
      "label": "NAUSEATED FACE"
    },
    {
      "emoji": "🤣",
      "label": "ROLLING ON THE FLOOR LAUGHING"
    },
    {
      "emoji": "🤤",
      "label": "DROOLING FACE"
    },
    {
      "emoji": "🤥",
      "label": "LYING FACE"
    },
    {
      "emoji": "🤦",
      "label": "FACE PALM"
    },
    {
      "emoji": "🤧",
      "label": "SNEEZING FACE"
    },
    {
      "emoji": "🤨",
      "label": "FACE WITH ONE EYEBROW RAISED"
    },
    {
      "emoji": "🤩",
      "label": "GRINNING FACE WITH STAR EYES"
    },
    {
      "emoji": "🤪",
      "label": "GRINNING FACE WITH ONE LARGE AND ONE SMALL EYE"
    },
    {
      "emoji": "🤫",
      "label": "FACE WITH FINGER COVERING CLOSED LIPS"
    },
    {
      "emoji": "🤬",
      "label": "SERIOUS FACE WITH SYMBOLS COVERING MOUTH"
    },
    {
      "emoji": "🤭",
      "label": "SMILING FACE WITH SMILING EYES AND HAND COVERING MOUTH"
    },
    {
      "emoji": "🤮",
      "label": "FACE WITH OPEN MOUTH VOMITING"
    },
    {
      "emoji": "🤯",
      "label": "SHOCKED FACE WITH EXPLODING HEAD"
    },
    {
      "emoji": "🤰",
      "label": "PREGNANT WOMAN"
    },
    {
      "emoji": "🤱",
      "label": "BREAST-FEEDING"
    },
    {
      "emoji": "🤲",
      "label": "PALMS UP TOGETHER"
    },
    {
      "emoji": "🤳",
      "label": "SELFIE"
    },
    {
      "emoji": "🤴",
      "label": "PRINCE"
    },
    {
      "emoji": "🤵",
      "label": "MAN IN TUXEDO"
    },
    {
      "emoji": "🤶",
      "label": "MOTHER CHRISTMAS"
    },
    {
      "emoji": "🤷",
      "label": "SHRUG"
    },
    {
      "emoji": "🤸",
      "label": "PERSON DOING CARTWHEEL"
    },
    {
      "emoji": "🤹",
      "label": "JUGGLING"
    },
    {
      "emoji": "🤺",
      "label": "FENCER"
    },
    {
      "emoji": "🤼",
      "label": "WRESTLERS"
    },
    {
      "emoji": "🤽",
      "label": "WATER POLO"
    },
    {
      "emoji": "🤾",
      "label": "HANDBALL"
    },
    {
      "emoji": "🤿",
      "label": "DIVING MASK"
    },
    {
      "emoji": "🥀",
      "label": "WILTED FLOWER"
    },
    {
      "emoji": "🥁",
      "label": "DRUM WITH DRUMSTICKS"
    },
    {
      "emoji": "🥂",
      "label": "CLINKING GLASSES"
    },
    {
      "emoji": "🥃",
      "label": "TUMBLER GLASS"
    },
    {
      "emoji": "🥄",
      "label": "SPOON"
    },
    {
      "emoji": "🥅",
      "label": "GOAL NET"
    },
    {
      "emoji": "🥇",
      "label": "FIRST PLACE MEDAL"
    },
    {
      "emoji": "🥈",
      "label": "SECOND PLACE MEDAL"
    },
    {
      "emoji": "🥉",
      "label": "THIRD PLACE MEDAL"
    },
    {
      "emoji": "🥊",
      "label": "BOXING GLOVE"
    },
    {
      "emoji": "🥋",
      "label": "MARTIAL ARTS UNIFORM"
    },
    {
      "emoji": "🥌",
      "label": "CURLING STONE"
    },
    {
      "emoji": "🥍",
      "label": "LACROSSE STICK AND BALL"
    },
    {
      "emoji": "🥎",
      "label": "SOFTBALL"
    },
    {
      "emoji": "🥏",
      "label": "FLYING DISC"
    },
    {
      "emoji": "🥐",
      "label": "CROISSANT"
    },
    {
      "emoji": "🥑",
      "label": "AVOCADO"
    },
    {
      "emoji": "🥒",
      "label": "CUCUMBER"
    },
    {
      "emoji": "🥓",
      "label": "BACON"
    },
    {
      "emoji": "🥔",
      "label": "POTATO"
    },
    {
      "emoji": "🥕",
      "label": "CARROT"
    },
    {
      "emoji": "🥖",
      "label": "BAGUETTE BREAD"
    },
    {
      "emoji": "🥗",
      "label": "GREEN SALAD"
    },
    {
      "emoji": "🥘",
      "label": "SHALLOW PAN OF FOOD"
    },
    {
      "emoji": "🥙",
      "label": "STUFFED FLATBREAD"
    },
    {
      "emoji": "🥚",
      "label": "EGG"
    },
    {
      "emoji": "🥛",
      "label": "GLASS OF MILK"
    },
    {
      "emoji": "🥜",
      "label": "PEANUTS"
    },
    {
      "emoji": "🥝",
      "label": "KIWIFRUIT"
    },
    {
      "emoji": "🥞",
      "label": "PANCAKES"
    },
    {
      "emoji": "🥟",
      "label": "DUMPLING"
    },
    {
      "emoji": "🥠",
      "label": "FORTUNE COOKIE"
    },
    {
      "emoji": "🥡",
      "label": "TAKEOUT BOX"
    },
    {
      "emoji": "🥢",
      "label": "CHOPSTICKS"
    },
    {
      "emoji": "🥣",
      "label": "BOWL WITH SPOON"
    },
    {
      "emoji": "🥤",
      "label": "CUP WITH STRAW"
    },
    {
      "emoji": "🥥",
      "label": "COCONUT"
    },
    {
      "emoji": "🥦",
      "label": "BROCCOLI"
    },
    {
      "emoji": "🥧",
      "label": "PIE"
    },
    {
      "emoji": "🥨",
      "label": "PRETZEL"
    },
    {
      "emoji": "🥩",
      "label": "CUT OF MEAT"
    },
    {
      "emoji": "🥪",
      "label": "SANDWICH"
    },
    {
      "emoji": "🥫",
      "label": "CANNED FOOD"
    },
    {
      "emoji": "🥬",
      "label": "LEAFY GREEN"
    },
    {
      "emoji": "🥭",
      "label": "MANGO"
    },
    {
      "emoji": "🥮",
      "label": "MOON CAKE"
    },
    {
      "emoji": "🥯",
      "label": "BAGEL"
    },
    {
      "emoji": "🥰",
      "label": "SMILING FACE WITH SMILING EYES AND THREE HEARTS"
    },
    {
      "emoji": "🥱",
      "label": "YAWNING FACE"
    },
    {
      "emoji": "🥲",
      "label": "SMILING FACE WITH TEAR"
    },
    {
      "emoji": "🥳",
      "label": "FACE WITH PARTY HORN AND PARTY HAT"
    },
    {
      "emoji": "🥴",
      "label": "FACE WITH UNEVEN EYES AND WAVY MOUTH"
    },
    {
      "emoji": "🥵",
      "label": "OVERHEATED FACE"
    },
    {
      "emoji": "🥶",
      "label": "FREEZING FACE"
    },
    {
      "emoji": "🥷",
      "label": "NINJA"
    },
    {
      "emoji": "🥸",
      "label": "DISGUISED FACE"
    },
    {
      "emoji": "🥹",
      "label": "FACE HOLDING BACK TEARS"
    },
    {
      "emoji": "🥺",
      "label": "FACE WITH PLEADING EYES"
    },
    {
      "emoji": "🥻",
      "label": "SARI"
    },
    {
      "emoji": "🥼",
      "label": "LAB COAT"
    },
    {
      "emoji": "🥽",
      "label": "GOGGLES"
    },
    {
      "emoji": "🥾",
      "label": "HIKING BOOT"
    },
    {
      "emoji": "🥿",
      "label": "FLAT SHOE"
    },
    {
      "emoji": "🦀",
      "label": "CRAB"
    },
    {
      "emoji": "🦁",
      "label": "LION FACE"
    },
    {
      "emoji": "🦂",
      "label": "SCORPION"
    },
    {
      "emoji": "🦃",
      "label": "TURKEY"
    },
    {
      "emoji": "🦄",
      "label": "UNICORN FACE"
    },
    {
      "emoji": "🦅",
      "label": "EAGLE"
    },
    {
      "emoji": "🦆",
      "label": "DUCK"
    },
    {
      "emoji": "🦇",
      "label": "BAT"
    },
    {
      "emoji": "🦈",
      "label": "SHARK"
    },
    {
      "emoji": "🦉",
      "label": "OWL"
    },
    {
      "emoji": "🦊",
      "label": "FOX FACE"
    },
    {
      "emoji": "🦋",
      "label": "BUTTERFLY"
    },
    {
      "emoji": "🦌",
      "label": "DEER"
    },
    {
      "emoji": "🦍",
      "label": "GORILLA"
    },
    {
      "emoji": "🦎",
      "label": "LIZARD"
    },
    {
      "emoji": "🦏",
      "label": "RHINOCEROS"
    },
    {
      "emoji": "🦐",
      "label": "SHRIMP"
    },
    {
      "emoji": "🦑",
      "label": "SQUID"
    },
    {
      "emoji": "🦒",
      "label": "GIRAFFE FACE"
    },
    {
      "emoji": "🦓",
      "label": "ZEBRA FACE"
    },
    {
      "emoji": "🦔",
      "label": "HEDGEHOG"
    },
    {
      "emoji": "🦕",
      "label": "SAUROPOD"
    },
    {
      "emoji": "🦖",
      "label": "T-REX"
    },
    {
      "emoji": "🦗",
      "label": "CRICKET"
    },
    {
      "emoji": "🦘",
      "label": "KANGAROO"
    },
    {
      "emoji": "🦙",
      "label": "LLAMA"
    },
    {
      "emoji": "🦚",
      "label": "PEACOCK"
    },
    {
      "emoji": "🦛",
      "label": "HIPPOPOTAMUS"
    },
    {
      "emoji": "🦜",
      "label": "PARROT"
    },
    {
      "emoji": "🦝",
      "label": "RACCOON"
    },
    {
      "emoji": "🦞",
      "label": "LOBSTER"
    },
    {
      "emoji": "🦟",
      "label": "MOSQUITO"
    },
    {
      "emoji": "🦠",
      "label": "MICROBE"
    },
    {
      "emoji": "🦡",
      "label": "BADGER"
    },
    {
      "emoji": "🦢",
      "label": "SWAN"
    },
    {
      "emoji": "🦣",
      "label": "MAMMOTH"
    },
    {
      "emoji": "🦤",
      "label": "DODO"
    },
    {
      "emoji": "🦥",
      "label": "SLOTH"
    },
    {
      "emoji": "🦦",
      "label": "OTTER"
    },
    {
      "emoji": "🦧",
      "label": "ORANGUTAN"
    },
    {
      "emoji": "🦨",
      "label": "SKUNK"
    },
    {
      "emoji": "🦩",
      "label": "FLAMINGO"
    },
    {
      "emoji": "🦪",
      "label": "OYSTER"
    },
    {
      "emoji": "🦫",
      "label": "BEAVER"
    },
    {
      "emoji": "🦬",
      "label": "BISON"
    },
    {
      "emoji": "🦭",
      "label": "SEAL"
    },
    {
      "emoji": "🦮",
      "label": "GUIDE DOG"
    },
    {
      "emoji": "🦯",
      "label": "PROBING CANE"
    },
    {
      "emoji": "🦰",
      "label": "EMOJI COMPONENT RED HAIR"
    },
    {
      "emoji": "🦱",
      "label": "EMOJI COMPONENT CURLY HAIR"
    },
    {
      "emoji": "🦲",
      "label": "EMOJI COMPONENT BALD"
    },
    {
      "emoji": "🦳",
      "label": "EMOJI COMPONENT WHITE HAIR"
    },
    {
      "emoji": "🦴",
      "label": "BONE"
    },
    {
      "emoji": "🦵",
      "label": "LEG"
    },
    {
      "emoji": "🦶",
      "label": "FOOT"
    },
    {
      "emoji": "🦷",
      "label": "TOOTH"
    },
    {
      "emoji": "🦸",
      "label": "SUPERHERO"
    },
    {
      "emoji": "🦹",
      "label": "SUPERVILLAIN"
    },
    {
      "emoji": "🦺",
      "label": "SAFETY VEST"
    },
    {
      "emoji": "🦻",
      "label": "EAR WITH HEARING AID"
    },
    {
      "emoji": "🦼",
      "label": "MOTORIZED WHEELCHAIR"
    },
    {
      "emoji": "🦽",
      "label": "MANUAL WHEELCHAIR"
    },
    {
      "emoji": "🦾",
      "label": "MECHANICAL ARM"
    },
    {
      "emoji": "🦿",
      "label": "MECHANICAL LEG"
    },
    {
      "emoji": "🧀",
      "label": "CHEESE WEDGE"
    },
    {
      "emoji": "🧁",
      "label": "CUPCAKE"
    },
    {
      "emoji": "🧂",
      "label": "SALT SHAKER"
    },
    {
      "emoji": "🧃",
      "label": "BEVERAGE BOX"
    },
    {
      "emoji": "🧄",
      "label": "GARLIC"
    },
    {
      "emoji": "🧅",
      "label": "ONION"
    },
    {
      "emoji": "🧆",
      "label": "FALAFEL"
    },
    {
      "emoji": "🧇",
      "label": "WAFFLE"
    },
    {
      "emoji": "🧈",
      "label": "BUTTER"
    },
    {
      "emoji": "🧉",
      "label": "MATE DRINK"
    },
    {
      "emoji": "🧊",
      "label": "ICE CUBE"
    },
    {
      "emoji": "🧋",
      "label": "BUBBLE TEA"
    },
    {
      "emoji": "🧌",
      "label": "TROLL"
    },
    {
      "emoji": "🧍",
      "label": "STANDING PERSON"
    },
    {
      "emoji": "🧎",
      "label": "KNEELING PERSON"
    },
    {
      "emoji": "🧏",
      "label": "DEAF PERSON"
    },
    {
      "emoji": "🧐",
      "label": "FACE WITH MONOCLE"
    },
    {
      "emoji": "🧑",
      "label": "ADULT"
    },
    {
      "emoji": "🧒",
      "label": "CHILD"
    },
    {
      "emoji": "🧓",
      "label": "OLDER ADULT"
    },
    {
      "emoji": "🧔",
      "label": "BEARDED PERSON"
    },
    {
      "emoji": "🧕",
      "label": "PERSON WITH HEADSCARF"
    },
    {
      "emoji": "🧖",
      "label": "PERSON IN STEAMY ROOM"
    },
    {
      "emoji": "🧗",
      "label": "PERSON CLIMBING"
    },
    {
      "emoji": "🧘",
      "label": "PERSON IN LOTUS POSITION"
    },
    {
      "emoji": "🧙",
      "label": "MAGE"
    },
    {
      "emoji": "🧚",
      "label": "FAIRY"
    },
    {
      "emoji": "🧛",
      "label": "VAMPIRE"
    },
    {
      "emoji": "🧜",
      "label": "MERPERSON"
    },
    {
      "emoji": "🧝",
      "label": "ELF"
    },
    {
      "emoji": "🧞",
      "label": "GENIE"
    },
    {
      "emoji": "🧟",
      "label": "ZOMBIE"
    },
    {
      "emoji": "🧠",
      "label": "BRAIN"
    },
    {
      "emoji": "🧡",
      "label": "ORANGE HEART"
    },
    {
      "emoji": "🧢",
      "label": "BILLED CAP"
    },
    {
      "emoji": "🧣",
      "label": "SCARF"
    },
    {
      "emoji": "🧤",
      "label": "GLOVES"
    },
    {
      "emoji": "🧥",
      "label": "COAT"
    },
    {
      "emoji": "🧦",
      "label": "SOCKS"
    },
    {
      "emoji": "🧧",
      "label": "RED GIFT ENVELOPE"
    },
    {
      "emoji": "🧨",
      "label": "FIRECRACKER"
    },
    {
      "emoji": "🧩",
      "label": "JIGSAW PUZZLE PIECE"
    },
    {
      "emoji": "🧪",
      "label": "TEST TUBE"
    },
    {
      "emoji": "🧫",
      "label": "PETRI DISH"
    },
    {
      "emoji": "🧬",
      "label": "DNA DOUBLE HELIX"
    },
    {
      "emoji": "🧭",
      "label": "COMPASS"
    },
    {
      "emoji": "🧮",
      "label": "ABACUS"
    },
    {
      "emoji": "🧯",
      "label": "FIRE EXTINGUISHER"
    },
    {
      "emoji": "🧰",
      "label": "TOOLBOX"
    },
    {
      "emoji": "🧱",
      "label": "BRICK"
    },
    {
      "emoji": "🧲",
      "label": "MAGNET"
    },
    {
      "emoji": "🧳",
      "label": "LUGGAGE"
    },
    {
      "emoji": "🧴",
      "label": "LOTION BOTTLE"
    },
    {
      "emoji": "🧵",
      "label": "SPOOL OF THREAD"
    },
    {
      "emoji": "🧶",
      "label": "BALL OF YARN"
    },
    {
      "emoji": "🧷",
      "label": "SAFETY PIN"
    },
    {
      "emoji": "🧸",
      "label": "TEDDY BEAR"
    },
    {
      "emoji": "🧹",
      "label": "BROOM"
    },
    {
      "emoji": "🧺",
      "label": "BASKET"
    },
    {
      "emoji": "🧻",
      "label": "ROLL OF PAPER"
    },
    {
      "emoji": "🧼",
      "label": "BAR OF SOAP"
    },
    {
      "emoji": "🧽",
      "label": "SPONGE"
    },
    {
      "emoji": "🧾",
      "label": "RECEIPT"
    },
    {
      "emoji": "🧿",
      "label": "NAZAR AMULET"
    },
    {
      "emoji": "🩰",
      "label": "BALLET SHOES"
    },
    {
      "emoji": "🩱",
      "label": "ONE-PIECE SWIMSUIT"
    },
    {
      "emoji": "🩲",
      "label": "BRIEFS"
    },
    {
      "emoji": "🩳",
      "label": "SHORTS"
    },
    {
      "emoji": "🩴",
      "label": "THONG SANDAL"
    },
    {
      "emoji": "🩵",
      "label": "LIGHT BLUE HEART"
    },
    {
      "emoji": "🩶",
      "label": "GREY HEART"
    },
    {
      "emoji": "🩷",
      "label": "PINK HEART"
    },
    {
      "emoji": "🩸",
      "label": "DROP OF BLOOD"
    },
    {
      "emoji": "🩹",
      "label": "ADHESIVE BANDAGE"
    },
    {
      "emoji": "🩺",
      "label": "STETHOSCOPE"
    },
    {
      "emoji": "🩻",
      "label": "X-RAY"
    },
    {
      "emoji": "🩼",
      "label": "CRUTCH"
    },
    {
      "emoji": "🪀",
      "label": "YO-YO"
    },
    {
      "emoji": "🪁",
      "label": "KITE"
    },
    {
      "emoji": "🪂",
      "label": "PARACHUTE"
    },
    {
      "emoji": "🪃",
      "label": "BOOMERANG"
    },
    {
      "emoji": "🪄",
      "label": "MAGIC WAND"
    },
    {
      "emoji": "🪅",
      "label": "PINATA"
    },
    {
      "emoji": "🪆",
      "label": "NESTING DOLLS"
    },
    {
      "emoji": "🪇",
      "label": "MARACAS"
    },
    {
      "emoji": "🪈",
      "label": "FLUTE"
    },
    {
      "emoji": "🪐",
      "label": "RINGED PLANET"
    },
    {
      "emoji": "🪑",
      "label": "CHAIR"
    },
    {
      "emoji": "🪒",
      "label": "RAZOR"
    },
    {
      "emoji": "🪓",
      "label": "AXE"
    },
    {
      "emoji": "🪔",
      "label": "DIYA LAMP"
    },
    {
      "emoji": "🪕",
      "label": "BANJO"
    },
    {
      "emoji": "🪖",
      "label": "MILITARY HELMET"
    },
    {
      "emoji": "🪗",
      "label": "ACCORDION"
    },
    {
      "emoji": "🪘",
      "label": "LONG DRUM"
    },
    {
      "emoji": "🪙",
      "label": "COIN"
    },
    {
      "emoji": "🪚",
      "label": "CARPENTRY SAW"
    },
    {
      "emoji": "🪛",
      "label": "SCREWDRIVER"
    },
    {
      "emoji": "🪜",
      "label": "LADDER"
    },
    {
      "emoji": "🪝",
      "label": "HOOK"
    },
    {
      "emoji": "🪞",
      "label": "MIRROR"
    },
    {
      "emoji": "🪟",
      "label": "WINDOW"
    },
    {
      "emoji": "🪠",
      "label": "PLUNGER"
    },
    {
      "emoji": "🪡",
      "label": "SEWING NEEDLE"
    },
    {
      "emoji": "🪢",
      "label": "KNOT"
    },
    {
      "emoji": "🪣",
      "label": "BUCKET"
    },
    {
      "emoji": "🪤",
      "label": "MOUSE TRAP"
    },
    {
      "emoji": "🪥",
      "label": "TOOTHBRUSH"
    },
    {
      "emoji": "🪦",
      "label": "HEADSTONE"
    },
    {
      "emoji": "🪧",
      "label": "PLACARD"
    },
    {
      "emoji": "🪨",
      "label": "ROCK"
    },
    {
      "emoji": "🪩",
      "label": "MIRROR BALL"
    },
    {
      "emoji": "🪪",
      "label": "IDENTIFICATION CARD"
    },
    {
      "emoji": "🪫",
      "label": "LOW BATTERY"
    },
    {
      "emoji": "🪬",
      "label": "HAMSA"
    },
    {
      "emoji": "🪭",
      "label": "FOLDING HAND FAN"
    },
    {
      "emoji": "🪮",
      "label": "HAIR PICK"
    },
    {
      "emoji": "🪯",
      "label": "KHANDA"
    },
    {
      "emoji": "🪰",
      "label": "FLY"
    },
    {
      "emoji": "🪱",
      "label": "WORM"
    },
    {
      "emoji": "🪲",
      "label": "BEETLE"
    },
    {
      "emoji": "🪳",
      "label": "COCKROACH"
    },
    {
      "emoji": "🪴",
      "label": "POTTED PLANT"
    },
    {
      "emoji": "🪵",
      "label": "WOOD"
    },
    {
      "emoji": "🪶",
      "label": "FEATHER"
    },
    {
      "emoji": "🪷",
      "label": "LOTUS"
    },
    {
      "emoji": "🪸",
      "label": "CORAL"
    },
    {
      "emoji": "🪹",
      "label": "EMPTY NEST"
    },
    {
      "emoji": "🪺",
      "label": "NEST WITH EGGS"
    },
    {
      "emoji": "🪻",
      "label": "HYACINTH"
    },
    {
      "emoji": "🪼",
      "label": "JELLYFISH"
    },
    {
      "emoji": "🪽",
      "label": "WING"
    },
    {
      "emoji": "🪿",
      "label": "GOOSE"
    },
    {
      "emoji": "🫀",
      "label": "ANATOMICAL HEART"
    },
    {
      "emoji": "🫁",
      "label": "LUNGS"
    },
    {
      "emoji": "🫂",
      "label": "PEOPLE HUGGING"
    },
    {
      "emoji": "🫃",
      "label": "PREGNANT MAN"
    },
    {
      "emoji": "🫄",
      "label": "PREGNANT PERSON"
    },
    {
      "emoji": "🫅",
      "label": "PERSON WITH CROWN"
    },
    {
      "emoji": "🫎",
      "label": "MOOSE"
    },
    {
      "emoji": "🫏",
      "label": "DONKEY"
    },
    {
      "emoji": "🫐",
      "label": "BLUEBERRIES"
    },
    {
      "emoji": "🫑",
      "label": "BELL PEPPER"
    },
    {
      "emoji": "🫒",
      "label": "OLIVE"
    },
    {
      "emoji": "🫓",
      "label": "FLATBREAD"
    },
    {
      "emoji": "🫔",
      "label": "TAMALE"
    },
    {
      "emoji": "🫕",
      "label": "FONDUE"
    },
    {
      "emoji": "🫖",
      "label": "TEAPOT"
    },
    {
      "emoji": "🫗",
      "label": "POURING LIQUID"
    },
    {
      "emoji": "🫘",
      "label": "BEANS"
    },
    {
      "emoji": "🫙",
      "label": "JAR"
    },
    {
      "emoji": "🫚",
      "label": "GINGER ROOT"
    },
    {
      "emoji": "🫛",
      "label": "PEA POD"
    },
    {
      "emoji": "🫠",
      "label": "MELTING FACE"
    },
    {
      "emoji": "🫡",
      "label": "SALUTING FACE"
    },
    {
      "emoji": "🫢",
      "label": "FACE WITH OPEN EYES AND HAND OVER MOUTH"
    },
    {
      "emoji": "🫣",
      "label": "FACE WITH PEEKING EYE"
    },
    {
      "emoji": "🫤",
      "label": "FACE WITH DIAGONAL MOUTH"
    },
    {
      "emoji": "🫥",
      "label": "DOTTED LINE FACE"
    },
    {
      "emoji": "🫦",
      "label": "BITING LIP"
    },
    {
      "emoji": "🫧",
      "label": "BUBBLES"
    },
    {
      "emoji": "🫨",
      "label": "SHAKING FACE"
    },
    {
      "emoji": "🫰",
      "label": "HAND WITH INDEX FINGER AND THUMB CROSSED"
    },
    {
      "emoji": "🫱",
      "label": "RIGHTWARDS HAND"
    },
    {
      "emoji": "🫲",
      "label": "LEFTWARDS HAND"
    },
    {
      "emoji": "🫳",
      "label": "PALM DOWN HAND"
    },
    {
      "emoji": "🫴",
      "label": "PALM UP HAND"
    },
    {
      "emoji": "🫵",
      "label": "INDEX POINTING AT THE VIEWER"
    },
    {
      "emoji": "🫶",
      "label": "HEART HANDS"
    },
    {
      "emoji": "🫷",
      "label": "LEFTWARDS PUSHING HAND"
    },
    {
      "emoji": "🫸",
      "label": "RIGHTWARDS PUSHING HAND"
    }
  ];
}