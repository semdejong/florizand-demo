/**
 * Feiten van Hoveniersbedrijf FloriZand.
 * Alleen teksten die op de huidige site staan of die als ontbrekend veld
 * expliciet voor de klant zijn gemarkeerd. Geen reviews, cijfers of prijzen.
 */

export const company = {
  name: "Hoveniersbedrijf FloriZand",
  shortName: "FloriZand",
  person: "Dave Emke",
  phoneDisplay: "06-41222325",
  phoneHref: "tel:+31641222325",
  email: "info@florizand.nl",
  emailHref: "mailto:info@florizand.nl",
  street: "Vestdijklaan 28",
  postalCode: "2692 CV",
  city: "'s-Gravenzande",
  since: "2010",
  kvk: "27365353",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Vestdijklaan%2028%2C%202692%20CV%20%27s-Gravenzande",
  tagline: "Tuinontwerp | Aanleg | Onderhoud",
} as const;

export const welcome = {
  title: "Welkom op de website van FloriZand",
  lead: "Hoveniersbedrijf FloriZand is een jong, dynamisch en betrouwbaar hoveniersbedrijf dat sinds 2010 gevestigd is in 's-Gravenzande. We richten ons op ontwerp en aanleg van gevarieerde tuinen.",
  approach:
    "Om al uw tuinwensen te realiseren is goed overleg en een persoonlijke benadering noodzakelijk. Voor een gespecificeerde offerte kunt u telefonisch contact opnemen met Dave Emke die graag persoonlijk met u een afspraak maakt.",
  area: "Wij beperken ons niet alleen tot het Westland, maar onze werkzaamheden strekken zich uit over geheel Zuid-Holland.",
  contactIntro:
    "Neem vrijblijvend contact op met Hoveniersbedrijf FloriZand voor al uw tuingerelateerde zaken via onderstaande gegevens:",
  appointment:
    "Onderstaand ziet u het adres van Hoveniersbedrijf FloriZand. Aarzel niet om contact op te nemen voor een vrijblijvend gesprek of een afspraak.",
} as const;

export type Service = {
  id: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  group: "nieuw" | "onderhoud";
};

export const services: Service[] = [
  {
    id: "tuinontwerp",
    title: "Tuinontwerp",
    text: "Een ontwerp voor uw tuin, als basis voor de aanleg. In overleg, afgestemd op wat u met de tuin wilt.",
    image: "/illustraties/ill-ontwerp.jpg",
    alt: "Illustratie van een tuinontwerp in bovenaanzicht, met paden, vijver en vlonder. Geen foto van een project.",
    group: "nieuw",
  },
  {
    id: "tuinaanleg",
    title: "Tuinaanleg",
    text: "De aanleg van de tuin volgens wat is afgesproken, inclusief de inrichting die bij het ontwerp hoort.",
    image: "/illustraties/ill-aanleg.jpg",
    alt: "Illustratie van een nieuw aangeplante border. Geen foto van een project.",
    group: "nieuw",
  },
  {
    id: "bestrating",
    title: "(Sier)bestrating",
    text: "Bestrating en sierbestrating als onderdeel van de tuin.",
    image: "/illustraties/ill-bestrating.jpg",
    alt: "Illustratie van sierbestrating in keperverband met een groene rand. Geen foto van een project.",
    group: "nieuw",
  },
  {
    id: "vijvers",
    title: "Aanleg van vijvers",
    text: "Het aanleggen van een vijver in de tuin.",
    image: "/illustraties/ill-vijver.jpg",
    alt: "Illustratie van een kleine vijver met irissen en een stenen rand. Geen foto van een project.",
    group: "nieuw",
  },
  {
    id: "gazons",
    title: "Aanleg van gazons (gras of kunstgras)",
    text: "Een gazon van gras, of van kunstgras. Beide staan genoemd bij de werkzaamheden.",
    image: "/illustraties/ill-gazon.jpg",
    alt: "Illustratie van een gazon langs een zandpad en een beplantingsrand. Geen foto van een project.",
    group: "nieuw",
  },
  {
    id: "speeltuinen",
    title: "Aanleg van kindvriendelijke (speel)tuinen",
    text: "Een tuin die is ingericht om in te spelen, als eigen werkzaamheid naast het tuinontwerp.",
    image: "/illustraties/ill-speeltuin.jpg",
    alt: "Illustratie van een lege tuin met een houten klimrek en een zandbak, zonder personen. Geen foto van een project.",
    group: "nieuw",
  },
  {
    id: "vlonders",
    title: "Aanleg van vlonders, veranda's, pergola's en blokhutten",
    text: "Houten elementen in de tuin: een vlonder, veranda, pergola of blokhut.",
    image: "/illustraties/ill-vlonder.jpg",
    alt: "Illustratie van een houten vlonder met pergola en een blokhut. Geen foto van een project.",
    group: "nieuw",
  },
  {
    id: "onderhoud",
    title: "Tuinonderhoud",
    text: "Het onderhoud van een bestaande tuin. Dit kan los van een nieuwe aanleg.",
    image: "/illustraties/ill-onderhoud.jpg",
    alt: "Illustratie van een geschoren haag en een snoeischaar op een stenen rand. Geen foto van een project.",
    group: "onderhoud",
  },
  {
    id: "renovatie",
    title: "Tuinrenovatie",
    text: "Het vernieuwen van een tuin die er al ligt.",
    image: "/illustraties/ill-renovatie.jpg",
    alt: "Illustratie van een border die deels wordt vernieuwd, met contourlijnen van een nieuw plan. Geen foto van een project.",
    group: "onderhoud",
  },
];

export const steps = [
  {
    title: "Kennismaking",
    text: "U belt, mailt of vult het formulier in. Dave Emke maakt persoonlijk een afspraak met u.",
  },
  {
    title: "Ontwerp",
    text: "In goed overleg worden uw tuinwensen besproken. FloriZand richt zich op het ontwerp en de aanleg van gevarieerde tuinen.",
  },
  {
    title: "Gespecificeerde offerte",
    text: "U ontvangt een gespecificeerde offerte. De aanvraag is vrijblijvend.",
  },
  {
    title: "Aanleg",
    text: "De afgesproken werkzaamheden worden uitgevoerd. Dat kan bestrating zijn, een vijver, een gazon, een speeltuin, een vlonder of een combinatie daarvan.",
  },
  {
    title: "Oplevering en onderhoud",
    text: "Na de aanleg kunt u de tuin zelf bijhouden, of tuinonderhoud afnemen. Tuinrenovatie is er voor een bestaande tuin die vernieuwd wordt.",
  },
] as const;

export const sfeer = [
  {
    src: "/sfeer/slider-01.jpg",
    alt: "Sfeerbeeld van een vijvertuin met een houten vlonder. Geen projectfoto van FloriZand.",
    caption: "Sfeerbeeld: vijver en vlonder",
  },
  {
    src: "/sfeer/slider-02.jpg",
    alt: "Sfeerbeeld van tuingereedschap op een gazon. Geen projectfoto van FloriZand.",
    caption: "Sfeerbeeld: gereedschap op gras",
  },
  {
    src: "/sfeer/slider-03.jpg",
    alt: "Sfeerbeeld van het uitrollen van graszoden. Geen projectfoto van FloriZand.",
    caption: "Sfeerbeeld: graszoden",
  },
  {
    src: "/sfeer/slider-04.jpg",
    alt: "Sfeerbeeld van een ingekleurde tuinontwerpschets. Geen projectfoto van FloriZand.",
    caption: "Sfeerbeeld: ontwerpschets",
  },
  {
    src: "/sfeer/slider-05.jpg",
    alt: "Sfeerbeeld van een strak aangelegde tuin met hagen. Geen projectfoto van FloriZand.",
    caption: "Sfeerbeeld: strakke tuin",
  },
] as const;

export const nav = [
  { label: "Diensten", href: "/diensten" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Projecten", href: "/projecten" },
  { label: "Over FloriZand", href: "/over" },
  { label: "Contact", href: "/contact" },
] as const;

export function serviceById(id: string) {
  return services.find((service) => service.id === id);
}
