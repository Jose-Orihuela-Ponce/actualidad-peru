export type NewsArticle = {
  id: string
  title: string
  slug: string
  category: string
  date: string
  summary: string
  content: string
  image: string
  source: string
}

export const newsData: NewsArticle[] = [
  {
    id: '1',
    title: 'Dina Boluarte convoca a elecciones generales en Perú',
    slug: 'dina-boluarte-convoca-elecciones-generales-peru',
    category: 'politica',
    date: '2025-03-25',
    summary:
      'La presidenta Dina Boluarte anunció la convocatoria a elecciones generales, un movimiento que busca estabilizar el panorama político peruano.',
    content:
      'En un discurso sorpresivo el 25 de marzo de 2025, la presidenta de Perú, Dina Boluarte, anunció la convocatoria a elecciones generales, cerrando la puerta a especulaciones sobre una posible vacancia. Este anuncio llega en un contexto de tensiones políticas y sociales, con el objetivo de renovar el mandato y dar estabilidad al país tras años de crisis institucional. Boluarte destacó la necesidad de un proceso electoral transparente y llamó a la unidad nacional.',
    image:
      'https://e.rpp-noticias.io/large/2025/03/25/4d65b7-3214-40cd-b06d-2e3ce7897d9e-1721969mp4_1721970.webp',
    source: 'RPP Noticias'
  },
  {
    id: '2',
    title:
      'Congreso de Perú declara al Tren de Aragua como organización terrorista',
    slug: 'congreso-peru-tren-aragua-terrorista',
    category: 'politica',
    date: '2025-03-20',
    summary:
      'El Congreso peruano aprobó una moción para clasificar al Tren de Aragua como grupo terrorista, intensificando la lucha contra el crimen organizado.',
    content:
      'El Congreso de Perú, en una sesión realizada el 20 de marzo de 2025, aprobó por amplia mayoría declarar al Tren de Aragua, una conocida banda criminal transnacional, como organización terrorista. Esta medida busca endurecer las penas y facilitar operativos contra sus miembros, en respuesta al aumento de la violencia y el crimen organizado en el país. La decisión ha generado debate sobre sus implicancias legales y de seguridad.',
    image:
      'https://resizer.glanacion.com/resizer/v2/la-banda-delictiva-venezolana-tren-de-aragua-HB5E2KXCPZAIDM2DUMGUTWCXEU.png?auth=3381af574a4cd3b7aaa37bba2bfe9d9e7cb1e03a564f22ae56f066330836a2cd&width=1280&height=854&quality=70&smart=true',
    source: 'CNN en Español'
  },
  {
    id: '3',
    title: 'Boluarte acusa al Ministerio Público de intento de golpe de Estado',
    slug: 'boluarte-acusa-ministerio-publico-golpe',
    category: 'politica',
    date: '2025-03-15',
    summary:
      'La presidenta peruana denunció un supuesto complot del Ministerio Público tras un allanamiento a la casa del ministro del Interior.',
    content:
      "El 15 de marzo de 2025, Dina Boluarte acusó al Ministerio Público de intentar un 'golpe de Estado' luego de que se realizara un allanamiento en la residencia del ministro del Interior, Juan José Santiváñez, como parte de una investigación en curso. La mandataria calificó la acción como un ataque político y defendió la gestión de su gobierno, generando una nueva escalada de tensiones entre el Ejecutivo y el sistema judicial peruano.",
    image:
      'https://imagenes.elpais.com/resizer/v2/DXIEKQ6AL7AWKSBNTSJ5LK2RMY.jpg?auth=33da4154c6e6092b255cd7562943325dc0e120d1b0118a4b3ea4c0da4af1f756&width=980',
    source: 'El País'
  },
  {
    id: '4',
    title:
      'Donald Trump impone aranceles del 10% a importaciones de América Latina',
    slug: 'trump-aranceles-america-latina',
    category: 'politica',
    date: '2025-04-01',
    summary:
      'El presidente de EE.UU., Donald Trump, anunció nuevos aranceles que afectan a países como Perú, impactando sus exportaciones.',
    content:
      'El 1 de abril de 2025, el presidente de Estados Unidos, Donald Trump, implementó un arancel del 10% a las importaciones provenientes de varios países latinoamericanos, incluyendo Perú. Esta medida, que afecta exportaciones peruanas valorizadas en $760 millones, busca proteger la industria estadounidense, pero ha generado preocupación en la región sobre sus efectos económicos. Expertos analizan posibles retaliaciones y ajustes comerciales.',
    image: 'https://e.rpp-noticias.io/large/2025/04/03/225622_1725955.webp',
    source: 'RPP Noticias'
  },
  {
    id: '5',
    title: 'Somalilandia celebra elecciones y refuerza su democracia',
    slug: 'somalilandia-elecciones-democracia',
    category: 'politica',
    date: '2025-03-30',
    summary:
      'Somalilandia llevó a cabo elecciones presidenciales exitosas, consolidándose como un ejemplo democrático en el Cuerno de África.',
    content:
      'El 30 de marzo de 2025, Somalilandia celebró elecciones presidenciales que culminaron en una transferencia pacífica del poder, fortaleciendo su reputación como una de las democracias más sólidas del Cuerno de África. A pesar de las tensiones regionales, el proceso electoral fue elogiado por observadores internacionales, destacando la participación ciudadana y la estabilidad política en un área marcada por conflictos.',
    image:
      'https://www.politicaexterior.com/wp-content/uploads/2025/01/GettyImages-1257129724-2-1024x683.jpg',
    source: 'Política Exterior'
  }
];

export function getNewsByCategory(category: string): NewsArticle[] {
  return newsData.filter((news) => news.category === category)
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsData.find((news) => news.slug === slug)
}

export function getRelatedNews(article: NewsArticle, limit = 3): NewsArticle[] {
  return newsData.filter((news) => news.category === article.category && news.id !== article.id).slice(0, limit)
}

