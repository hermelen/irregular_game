var irregulars = [
  ["arise",	"arose",	"arisen",	"se lever"],
  ["awake",	"awake",	"awoken",	"s'éveiller"],
  ["be",	"was",	"been",	"être"],
  // ["be",	"were",	"been",	"être"],
  ["bear",	"bore",	"borne",	"supporter"],
  ["beat",	"beat",	"beaten",	"battre"],
  ["become",	"became",	"become",	"devenir"],
  ["beget",	"begot",	"begotten",	"engendrer"],
  ["begin",	"began",	"begun",	"commencer"],
  ["behold",	"beheld",	"beheld",	"contempler"],
  ["bend",	"bent",	"bent",	"courber"],
  ["beseech",	"besought",	"besought",	"implorer"],
  ["beset",	"beset",	"beset",	"cerner"],
  ["bespeak",	"bespoke",	"bespoken",	"annoncer"],
  ["bestride",	"bestrode",	"bestridden",	"enjamber"],
  ["bet",	"bet",	"bet",	"parier"],
  ["bid",	"bid",	"bid",	"enchérir"],
  ["bid",	"bade",	"bidden",	"commander"],
  ["bind",	"bound",	"bound",	"lier"],
  ["bite",	"bit",	"bitten",	"mordre"],
  ["bleed",	"bled",	"bled",	"saigner"],
  ["blow",	"blew",	"blown",	"souffler"],
  ["break",	"broke",	"broken",	"casser"],
  ["breed",	"bred",	"bred",	"élever"],
  ["bring",	"brought",	"brought",	"apporter"],
  ["build",	"built",	"built",	"bâtir"],
  ["burn",	"burnt",	"burnt",	"brûler"],
  // ["burn",	"burned",	"burned",	"brûler"],
  ["burst",	"burst",	"burst",	"éclater"],
  ["buy",	"bought",	"bought",	"acheter"],
  ["cast",	"cast",	"cast",	"lancer"],
  ["catch",	"caught",	"caught",	"attraper"],
  ["chide",	"chid",	"chidden",	"gronder"],
  // ["chide",	"chid",	"chid",	"gronder"],
  ["choose",	"chose",	"chosen",	"choisir"],
  ["cleave",	"clove",	"cloven",	"cliver"],
  // ["cleave",	"cleft",	"cleft",	"cliver"],
  ["cling",	"clung",	"clung",	"s'accrocher"],
  ["clothe",	"clad",	"clad",	"vêtir"],
  // ["clothe",	"clothed",	"clothed",	"vêtir"],
  ["come",	"came",	"come",	"venir"],
  ["cost",	"cost",	"cost",	"coûter"],
  ["creep",	"crept",	"crept",	"ramper"],
  ["crow",	"crew, crowed",	"crowed",	"se vanter"],
  ["cut",	"cut",	"cut",	"couper"],
  ["dare",	"durst",	"durst",	"oser"],
  // ["dare",	"dared",	"dared",	"oser"],
  ["deal",	"dealt",	"dealt",	"distribuer"],
  ["dig",	"dug",	"dug",	"creuser"],
  ["do",	"did",	"done",	"faire"],
  ["draw",	"drew",	"drawn",	"dessiner"],
  ["dream",	"dreamt",	"dreamt",	"rêver"],
  // ["dream",	"dreamed",	"dreamed",	"rêver"],
  ["drink",	"drank",	"drunk",	"boire"],
  ["drive",	"drove",	"driven",	"conduire"],
  ["dwell",	"dwelt",	"dwelt",	"habiter"],
  ["eat",	"ate",	"eaten",	"manger"],
  ["fall",	"fell",	"fallen",	"tomber"],
  ["feed",	"fed",	"fed",	"nourrir"],
  ["feel",	"felt",	"felt",	"sentir"],
  ["fight",	"fought",	"fought",	"combattre"],
  ["find",	"found",	"found",	"trouver"],
  ["flee",	"fled",	"fled",	"fuir"],
  ["fling",	"flung",	"flung",	"lancer"],
  ["fly",	"flew",	"flown",	"voler"],
  ["forbear",	"forbore",	"forborne",	"s'abstenir"],
  ["forbid",	"forbade",	"forbidden",	"défendre"],
  ["forecast",	"forecast",	"forecast",	"prédire"],
  ["forget",	"forgot",	"forgotten",	"oublier"],
  ["forgive",	"forgave",	"forgiven",	"pardonner"],
  ["forsake",	"forsook",	"forsaken",	"abandonner"],
  ["freeze",	"froze",	"frozen",	"geler"],
  ["get",	"got",	"got",	"obtenir"],
  ["gild",	"gilt",	"gilt",	"dorer"],
  ["gird",	"girt",	"girt",	"ceindre"],
  ["give",	"gave",	"given",	"donner"],
  ["go",	"went",	"gone",	"aller"],
  ["grind",	"ground",	"ground",	"moudre"],
  ["grow",	"grew",	"grown",	"croître"],
  ["hang",	"hung",	"hung",	"suspendre"],
  ["hang",	"hanged",	"hanged",	"pendre (supplice)"],
  ["have",	"had",	"had",	"avoir"],
  ["hear",	"heard",	"heard",	"entendre"],
  ["heave",	"hove",	"hove",	"se soulever"],
  ["hew",	"hewed",	"hewn",	"tailler"],
  ["hide",	"hid",	"hidden",	"cacher"],
  // ["hide",	"hid",	"hid",	"cacher"],
  ["hit",	"hit",	"hit",	"frapper, atteindre"],
  ["hold",	"held",	"held",	"tenir"],
  ["hurt",	"hurt",	"hurt",	"blesser"],
  ["keep",	"kept",	"kept",	"garder"],
  ["kneel",	"knelt",	"knelt",	"s'agenouiller"],
  ["knit",	"knit",	"knit",	"tricoter"],
  ["know",	"knew",	"known",	"connaître"],
  ["lade",	"laded",	"laden",	"charger"],
  ["lay",	"laid",	"laid",	"poser"],
  ["lead",	"led",	"led",	"conduire"],
  ["lean",	"leant",	"leant",	"se pencher"],
  ["leap",	"leapt",	"leapt",	"bondir"],
  ["learn",	"learnt",	"learnt",	"apprendre"],
  ["leave",	"left",	"left",	"laisser"],
  ["lend",	"lent",	"lent",	"prêter"],
  ["let",	"let",	"let",	"laisser"],
  ["lie",	"lay",	"lain",	"être couché"],
  ["light",	"lit",	"lit",	"allumer"],
  ["lose",	"lost",	"lost",	"perdre"],
  ["make",	"made",	"made",	"faire"],
  ["mean",	"meant",	"meant",	"signifier"],
  ["meet",	"met",	"met",	"rencontrer"],
  ["melt",	"melted",	"molten",	"fondre"],
  // ["melt",	"melted",	"melted",	"fondre"],
  ["mistake",	"mistook",	"mistaken",	"se tromper"],
  ["mow",	"mowed",	"mown",	"faucher"],
  ["pay",	"paid",	"paid",	"payer"],
  ["put",	"put",	"put",	"mettre"],
  ["quit",	"quit",	"quit",	"quitter"],
  ["read",	"read",	"read",	"lire"],
  ["rend",	"rent",	"rent",	"déchirer"],
  ["rid",	"rid",	"rid",	"débarrasser"],
  ["ride",	"rode",	"ridden",	"chevaucher"],
  ["ring",	"rang",	"rung",	"sonner"],
  ["rise",	"rose",	"risen",	"se lever"],
  ["run",	"ran",	"run",	"courir"],
  ["saw",	"sawed",	"sawn",	"scier"],
  ["say",	"said",	"said",	"dire"],
  ["see",	"saw",	"seen",	"voir"],
  ["seek",	"sought",	"sought",	"chercher"],
  ["seethe",	"sod",	"sodden",	"bouillir"],
  ["sell",	"sold",	"sold",	"vendre"],
  ["send",	"sent",	"sent",	"envoyer"],
  ["set",	"set",	"set",	"placer"],
  ["sew",	"sewed",	"sewn",	"coudre"],
  ["shake",	"shook",	"shaken",	"secouer"],
  ["shear",	"shore",	"shorn",	"tondre"],
  ["shed",	"shed",	"shed",	"verser"],
  ["shine",	"shone",	"shone",	"briller"],
  ["shoe",	"shod",	"shod",	"chausser"],
  ["shoot",	"shot",	"shot",	"tirer"],
  ["show",	"showed",	"shown",	"montrer"],
  ["shred",	"shred",	"shred",	"lacérer"],
  ["shrink",	"shrank",	"shrunken",	"se rétrécir"],
  // ["shrink",	"shrank",	"shrunk",	"se rétrécir"],
  ["shrive",	"shrove",	"shriven",	"confesser"],
  ["shut",	"shut",	"shut",	"fermer"],
  ["sing",	"sang",	"sung",	"chanter"],
  ["sink",	"sank",	"sunk",	"enfoncer"],
  ["sit",	"sat",	"sat",	"être assis"],
  ["slay",	"slew",	"slain",	"tuer"],
  ["sleep",	"slept",	"slept",	"dormir"],
  ["slide",	"slid",	"slid",	"glisser"],
  ["sling",	"slung",	"slung",	"lancer"],
  ["slink",	"slunk",	"slunk",	"se glisser"],
  ["slit",	"slit",	"slit",	"fendre"],
  ["smell",	"smelt",	"smelt",	"sentir"],
  ["smite",	"smote",	"smitten",	"frapper"],
  ["sow",	"sowed",	"sown",	"semer"],
  ["speak",	"spoke",	"spoken",	"parler"],
  ["speed",	"sped",	"sped",	"se hâter"],
  ["spell",	"spelt",	"spelt",	"épeler"],
  ["spend",	"spent",	"spent",	"dépenser"],
  ["spill",	"spilt",	"spilt",	"répandre"],
  ["spin",	"span",	"spun",	"filer, tourner"],
  // ["spin",	"spun",	"spun",	"filer, tourner"],
  ["spit",	"spat",	"spat",	"cracher"],
  ["split",	"split",	"split",	"fendre (en éclat)"],
  ["spoil",	"spoilt",	"spoilt",	"gâter"],
  ["spread",	"spread",	"spread",	"etendre"],
  ["spring",	"sprang",	"sprung",	"s'élancer"],
  ["stand",	"stood",	"stood",	"se tenir debout"],
  ["steal",	"stole",	"stolen",	"voler(dérober)"],
  ["stick",	"stuck",	"stuck",	"coller"],
  ["sting",	"stung",	"stung",	"piquer"],
  ["stink",	"stunk",	"stunk",	"puer"],
  // ["stink",	"stank",	"stunk",	"puer"],
  ["strew",	"strewed",	"strewn",	"joncher"],
  ["stride",	"strode",	"stridden",	"marcher à grands pas"],
  ["strike",	"struck",	"struck",	"frapper"],
  ["string",	"strung",	"strung",	"enfiler"],
  ["strive",	"strove",	"striven",	"s'efforcer"],
  ["swear",	"swore",	"sworn",	"jurer"],
  ["sweat",	"sweat",	"sweat",	"suer"],
  ["sweep",	"swept",	"swept",	"balayer"],
  ["swell",	"swelled",	"swollen",	"enfler"],
  ["swim",	"swam",	"swum",	"nager"],
  ["swing",	"swung",	"swung",	"balancer"],
  ["take",	"took",	"taken",	"prendre"],
  ["teach",	"taught",	"taught",	"enseigner"],
  ["tear",	"tore",	"torn",	"déchirer"],
  ["tell",	"told",	"told",	"dire"],
  ["think",	"thought",	"thought",	"penser"],
  ["thrive",	"throve",	"thriven",	"prospérer"],
  ["throw",	"threw",	"thrown",	"jeter"],
  ["thrust",	"thrust",	"thrust",	"lancer"],
  ["tread",	"trod",	"trodden",	"fouler (aux pieds)"],
  ["understand",	"understood",	"understood",	"comprendre"],
  ["undo",	"undid",	"undone",	"défaire"],
  ["upset",	"upset",	"upset",	"renverser"],
  ["wake",	"woke",	"woken",	"éveiller"],
  // ["wake",	"woke",	"woke",	"éveiller"],
  ["wear",	"wore",	"worn",	"porter, user"],
  ["weave",	"wove",	"woven",	"tisser"],
  ["weep",	"wept",	"wept",	"pleurer"],
  ["win",	"won",	"won",	"gagner"],
  ["wind",	"wound",	"wound",	"enrouler"],
  ["withdraw",	"withdrew",	"withdrawn",	"retirer"],
  ["withstand",	"withstood",	"withstood",	"résister à"],
  ["work",	"wrought",	"wrought",	"travailler"],
  ["wring",	"wrung",	"wrung",	"tordre"],
  ["write",	"wrote",	"written",	"écrire"]
]
