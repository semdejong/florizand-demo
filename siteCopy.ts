/** Langere pagina-teksten. Alleen toelichting op wat FloriZand zelf noemt. Geen prijzen, termijnen of projectclaims. */

export const serviceStory: Record<string, { paragraphs: string[]; talk: string[] }> = {
  tuinontwerp: {
    paragraphs: [
      "Tuinontwerp staat bovenaan de lijst. Het is het vertrekpunt: eerst in beeld brengen wat u met de tuin wilt, daarna pas de aanleg.",
      "FloriZand houdt ontwerp en aanleg in één hand. U hoeft het tekenen en het maken niet bij twee bedrijven onder te brengen. Dave Emke blijft daarbij uw vaste contact, van het eerste gesprek tot de opgeleverde tuin.",
      "Een ontwerp ontstaat in overleg, voor uw eigen perceel. Dave stemt het plan af op hoe u de tuin wilt gebruiken.",
    ],
    talk: [
      "Hoe u de tuin wilt gebruiken",
      "Wat er al ligt en wat mag veranderen",
      "Welke andere werkzaamheden in hetzelfde plan horen",
    ],
  },
  tuinaanleg: {
    paragraphs: [
      "Tuinaanleg is het maken van de tuin volgens wat is afgesproken. Het volgt op het ontwerp, of loopt ermee samen als u ontwerp en uitvoering in één keer wilt.",
      "De aanleg kan de beplanting zijn, en ook de delen die FloriZand apart noemt: bestrating, een vijver, een gazon, een speeltuin of houtwerk.",
      "Wat er de grond in gaat, staat in de gespecificeerde offerte. De aanvraag daarvoor is vrijblijvend.",
    ],
    talk: [
      "Wat er aangelegd wordt en wat blijft liggen",
      "Hoe de aanleg aansluit op het ontwerp",
      "Of u na oplevering ook onderhoud wilt",
    ],
  },
  bestrating: {
    paragraphs: [
      "(Sier)bestrating is een eigen werkzaamheid: een pad, een terras of een sierverband als onderdeel van de tuin.",
      "Materiaal en patroon kiest u met Dave. Die keuze komt in de offerte, samen met de rest van het ontwerp.",
      "Verharding wordt bekeken naast groen, gazon of een vlonder, zodat de tuin één geheel blijft.",
    ],
    talk: [
      "Welk deel van de tuin verhard wordt",
      "Of het om gebruik gaat, om sier, of om beide",
      "Hoe de bestrating aansluit op border, gazon of vlonder",
    ],
  },
  vijvers: {
    paragraphs: [
      "De aanleg van vijvers staat apart op de lijst. Een vijver is een onderdeel van de tuin, afgestemd op uw perceel.",
      "Vorm, rand en de beplanting eromheen komen in het overleg. Soms hoort er een vlonder bij; dat is een aparte werkzaamheid.",
    ],
    talk: [
      "Of een vijver past bij hoe u de tuin gebruikt",
      "De rand en wat eromheen komt te staan",
      "Of houtwerk, zoals een vlonder, daarbij hoort",
    ],
  },
  gazons: {
    paragraphs: [
      "Bij de werkzaamheden staat de aanleg van gazons genoemd als gras of als kunstgras. Beide zijn mogelijk.",
      "Welke van de twee past bij uw tuin, bespreekt u met Dave.",
      "Een gazon kan deel zijn van een nieuwe aanleg, en het kan ook terugkomen als een bestaande tuin wordt vernieuwd.",
    ],
    talk: [
      "Gras of kunstgras",
      "De plek, de vorm en de randen",
      "Hoe het gazon samenvalt met bestrating of borders",
    ],
  },
  speeltuinen: {
    paragraphs: [
      "Kindvriendelijke (speel)tuinen zijn bij FloriZand een eigen regel op de lijst, naast het gewone tuinontwerp.",
      "Het is bedoeld voor wie een tuin wil waarin gespeeld kan worden. Dat sluit ook aan bij een tuin rond een nieuwbouwwoning in het Westland, waar de buitenruimte vaak nog moet worden ingericht.",
      "U bespreekt de wensen met Dave. Ze komen terug in het ontwerp en in de gespecificeerde offerte.",
    ],
    talk: [
      "Voor wie de tuin bedoeld is",
      "Wat er gespeeld moet kunnen worden",
      "Hoe spelen samengaat met groen, terras en afscheiding",
    ],
  },
  vlonders: {
    paragraphs: [
      "Onder één werkzaamheid vallen vlonders, veranda's, pergola's en blokhutten. Het is houtwerk in de tuin.",
      "Welke van de vier u nodig hebt, neemt Dave op in het gesprek en in de gespecificeerde offerte.",
      "Het houtwerk wordt bekeken samen met de rest van de tuin: naast een border, als terras, of bij een vijver.",
    ],
    talk: [
      "Vlonder, veranda, pergola, blokhut, of een combinatie",
      "De plek ten opzichte van het huis",
      "Of het deel is van een nieuw ontwerp of van een renovatie",
    ],
  },
  onderhoud: {
    paragraphs: [
      "Tuinonderhoud is een eigen route. U kunt het afnemen zonder dat de tuin opnieuw ontworpen of helemaal opnieuw aangelegd wordt.",
      "Het gaat om een tuin die er al ligt en die bijgehouden moet worden. Hoe dat eruitziet, bespreekt u met Dave.",
      "Als de tuin niet meer bij te houden is maar vernieuwd moet worden, is tuinrenovatie de andere route.",
    ],
    talk: [
      "De staat van de tuin nu",
      "Wat u zelf blijft doen",
      "Of onderhoud volstaat, of dat renovatie logischer is",
    ],
  },
  renovatie: {
    paragraphs: [
      "Tuinrenovatie is het vernieuwen van een tuin die er al ligt. Dat is iets anders dan onderhoud, en ook iets anders dan een lege tuin die vanaf een ontwerp wordt aangelegd.",
      "Een renovatie kan stukken van de andere werkzaamheden raken: bestrating, gazon, beplanting, een vijver of houtwerk. Wat ervan meedoet, spreken we per tuin af.",
      "Ook hier begint het bij overleg. Dave maakt persoonlijk een afspraak, en u ontvangt een gespecificeerde offerte. De aanvraag is vrijblijvend.",
    ],
    talk: [
      "Wat behouden blijft",
      "Wat vernieuwd wordt",
      "Of het traject begint met een nieuw ontwerp",
    ],
  },
};

export const stepStory = [
  {
    title: "Kennismaking",
    text: "U belt, mailt of vult het formulier in. Dave Emke maakt persoonlijk een afspraak met u.",
    more: "U spreekt Dave zelf. Het telefoonnummer en het mailadres komen bij hem uit. Hij maakt de afspraak persoonlijk.",
  },
  {
    title: "Ontwerp",
    text: "In goed overleg worden uw tuinwensen besproken. FloriZand richt zich op het ontwerp en de aanleg van gevarieerde tuinen.",
    more: "Het ontwerp is het gesprek over gebruik, maat en sfeer van uw perceel. Dave stemt het plan af op wat u met de tuin wilt.",
  },
  {
    title: "Gespecificeerde offerte",
    text: "U ontvangt een gespecificeerde offerte. De aanvraag is vrijblijvend.",
    more: "Gespecificeerd betekent: de werkzaamheden staan uitgeschreven. De aanvraag is vrijblijvend.",
  },
  {
    title: "Aanleg",
    text: "De afgesproken werkzaamheden worden uitgevoerd. Dat kan bestrating zijn, een vijver, een gazon, een speeltuin, een vlonder of een combinatie daarvan.",
    more: "Alleen wat in de offerte staat, wordt gemaakt. Een combinatie is mogelijk omdat de werkzaamheden bij hetzelfde bedrijf liggen.",
  },
  {
    title: "Oplevering en onderhoud",
    text: "Na de aanleg kunt u de tuin zelf bijhouden, of tuinonderhoud afnemen. Tuinrenovatie is er voor een bestaande tuin die vernieuwd wordt.",
    more: "Onderhoud kunt u apart afnemen, of u houdt de tuin zelf bij.",
  },
] as const;
