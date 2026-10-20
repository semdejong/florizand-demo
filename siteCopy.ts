/** Langere pagina-teksten. Alleen toelichting op wat FloriZand zelf noemt. Geen prijzen, termijnen of projectclaims. */

export const serviceStory: Record<string, { paragraphs: string[]; talk: string[] }> = {
  tuinontwerp: {
    paragraphs: [
      "Tuinontwerp staat bovenaan de lijst. Het is het vertrekpunt: eerst in beeld brengen wat u met de tuin wilt, daarna pas de aanleg.",
      "FloriZand houdt ontwerp en aanleg in één hand. U hoeft het tekenen en het maken niet bij twee bedrijven onder te brengen. Dave Emke blijft daarbij uw vaste contact, van het eerste gesprek tot de opgeleverde tuin.",
      "Een ontwerp ontstaat in overleg, voor uw eigen perceel. Op deze site staat geen voorbeeldontwerp van een tuin die FloriZand heeft uitgevoerd.",
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
      "Wat er precies de grond in gaat, staat niet als pakket op deze site. Dat komt terug in de gespecificeerde offerte.",
    ],
    talk: [
      "Wat er aangelegd wordt en wat blijft liggen",
      "Hoe de aanleg aansluit op het ontwerp",
      "Of u na oplevering ook onderhoud wilt",
    ],
  },
  bestrating: {
    paragraphs: [
      "(Sier)bestrating is een eigen werkzaamheid: een pad, een terras of een sierverband als onderdeel van de tuin, niet als losse steenhandel.",
      "Materiaal en patroon staan hier niet vast. Die keuze hoort in het gesprek met Dave en daarna in de offerte, samen met de rest van het ontwerp.",
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
      "De aanleg van vijvers staat apart op de lijst. Een vijver is hier een onderdeel van de tuin, geen product met een vaste maat of een vaste prijs.",
      "Vorm, rand en de beplanting eromheen komen in het overleg. Soms hoort er een vlonder bij; dat is een aparte werkzaamheid en geen automatisch onderdeel.",
      "Het sfeerbeeld van een vijver met ligstoelen op deze site is geen project van FloriZand.",
    ],
    talk: [
      "Of een vijver past bij hoe u de tuin gebruikt",
      "De rand en wat eromheen komt te staan",
      "Of houtwerk, zoals een vlonder, daarbij hoort",
    ],
  },
  gazons: {
    paragraphs: [
      "Bij de werkzaamheden staat de aanleg van gazons genoemd als gras of als kunstgras. Beide zijn mogelijk. Geen van beide wordt op deze site als de enige juiste keuze voorgeschreven.",
      "Welke van de twee past bij uw tuin, bespreekt u met Dave. Merken en prijzen staan hier niet.",
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
      "Kindvriendelijke (speel)tuinen zijn bij FloriZand een eigen regel op de lijst, niet een bijzin onder een gewone tuin.",
      "Het is bedoeld voor wie een tuin wil waarin gespeeld kan worden. Dat sluit ook aan bij een tuin rond een nieuwbouwwoning in het Westland, waar de buitenruimte vaak nog moet worden ingericht. Dat is een uitnodiging voor het gesprek, geen overzicht van uitgevoerde tuinen.",
      "De tekening op deze pagina toont een leeg klimrek en een zandbak. Er staan geen mensen op, en het is geen foto van een project.",
    ],
    talk: [
      "Voor wie de tuin bedoeld is",
      "Wat er gespeeld moet kunnen worden",
      "Hoe spelen samengaat met groen, terras en afscheiding",
    ],
  },
  vlonders: {
    paragraphs: [
      "Onder één werkzaamheid vallen vlonders, veranda's, pergola's en blokhutten. Het is houtwerk in de tuin, niet vier verplichte onderdelen tegelijk.",
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
      "Het gaat om een tuin die er al ligt en die bijgehouden moet worden. Hoe vaak dat gebeurt en in welke maanden, is nergens gepubliceerd.",
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
      "Een renovatie kan stukken van de andere werkzaamheden raken: bestrating, gazon, beplanting, een vijver of houtwerk. Wat ervan meedoet, is geen standaardpakket.",
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
    more: "Er is geen balie en geen wisselend aanspreekpunt. Het telefoonnummer en het mailadres komen bij Dave uit. Een vaste reactietermijn is niet gepubliceerd; die wordt hier niet verzonnen.",
  },
  {
    title: "Ontwerp",
    text: "In goed overleg worden uw tuinwensen besproken. FloriZand richt zich op het ontwerp en de aanleg van gevarieerde tuinen.",
    more: "Het ontwerp is het gesprek over gebruik, maat en sfeer van uw perceel. Het is nog geen belofte over een bepaalde stijl, en er wordt op deze site geen oud plan als voorbeeld getoond.",
  },
  {
    title: "Gespecificeerde offerte",
    text: "U ontvangt een gespecificeerde offerte. De aanvraag is vrijblijvend.",
    more: "Gespecificeerd betekent: de werkzaamheden staan uitgeschreven, niet als één regel ‘tuin’. Wat een offerte kost, zegt de huidige site niet. Vrijblijvend wel.",
  },
  {
    title: "Aanleg",
    text: "De afgesproken werkzaamheden worden uitgevoerd. Dat kan bestrating zijn, een vijver, een gazon, een speeltuin, een vlonder of een combinatie daarvan.",
    more: "Alleen wat in de offerte staat, wordt gemaakt. Een combinatie is mogelijk omdat de werkzaamheden bij hetzelfde bedrijf liggen, niet omdat elk tuinplan alles tegelijk bevat.",
  },
  {
    title: "Oplevering en onderhoud",
    text: "Na de aanleg kunt u de tuin zelf bijhouden, of tuinonderhoud afnemen. Tuinrenovatie is er voor een bestaande tuin die vernieuwd wordt.",
    more: "Onderhoud is geen automatische vervolgstap. U kunt het apart afnemen, of de tuin zelf houden. Een doorlooptijd tot de oplevering is niet gepubliceerd.",
  },
] as const;
