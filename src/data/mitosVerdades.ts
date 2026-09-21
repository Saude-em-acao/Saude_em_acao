export interface MitoVerdadeItem {
  id: number;
  numeroOriginal: number;
  afirmacao: string;
  tipo: "VERDADE" | "MITO";
  explicacao: string;
  fonte: string;
  emoji: string;
}

export const MITOS_VERDADES: MitoVerdadeItem[] = [
  {
    id: 1,
    numeroOriginal: 2,
    emoji: "⚠️",
    afirmacao: "Os defensivos agrícolas não fazem mal à saúde",
    tipo: "MITO",
    explicacao:
      "De acordo com a ONU, os defensivos agrícolas causam cerca de 200 mil mortes por ano no mundo por intoxicação aguda. No Brasil, em média, sete pessoas são intoxicadas por dia. De 2007 a 2017, 1.824 pessoas morreram devido ao uso de defensivos agrícolas e outras 718 tiveram sequelas segundo dados do Ministério da Saúde (estimando-se que apenas 1 em cada 50 casos seja notificado). Além disso, os testes laboratoriais em geral não consideram a exposição simultânea a múltiplos princípios ativos e os efeitos de longo prazo.",
    fonte: "IDEC / ONU / Ministério da Saúde"
  },
  {
    id: 2,
    numeroOriginal: 3,
    emoji: "🍎",
    afirmacao: "Os defensivos agrícolas podem se acumular nas cascas das frutas e hortaliças",
    tipo: "VERDADE",
    explicacao:
      "Devido à sua composição química, os defensivos agrícolas podem se acumular tanto nas cascas quanto no interior dos alimentos e nos tecidos de seres vivos. Essas substâncias percorrem toda a cadeia alimentar: contaminam plantas e insetos que depois servem de alimento para animais e humanos. Estudos científicos no Brasil já detectaram inclusive a contaminação de leite materno por múltiplos defensivos agrícolas em regiões agrícolas do país.",
    fonte: "IDEC / Pesquisas de Saúde Coletiva"
  },
  {
    id: 3,
    numeroOriginal: 4,
    emoji: "🚰",
    afirmacao: "É só lavar bem os alimentos que os defensivos agrícolas são removidos",
    tipo: "MITO",
    explicacao:
      "Segundo a Anvisa, a lavagem não retira completamente os resíduos de defensivos agrícolas. Muitos compostos químicos possuem ação sistêmica e são absorvidos pelas plantas através dos poros, instalando-se no interior da polpa. Além disso, análises da Anvisa e de entidades de pesquisa revelam a presença de resíduos em cerca de 60% das amostras e o uso de dezenas de defensivos combinados em uma mesma cultura (como amostras de pimentão com dezenas de princípios ativos diferentes).",
    fonte: "IDEC / Anvisa / Pesquisas Científicas"
  },
  {
    id: 4,
    numeroOriginal: 5,
    emoji: "🌍",
    afirmacao: "Os defensivos agrícolas contaminam o meio ambiente",
    tipo: "VERDADE",
    explicacao:
      "A utilização de defensivos agrícolas é responsável pela contaminação de recursos naturais porque muitos compostos dificilmente se dissolvem em água e penetram facilmente nos tecidos vivos. Pesquisa da Embrapa evidenciou contaminação do solo e da água nas cinco regiões do Brasil. O Dossiê da Abrasco também reúne comprovações científicas de defensivos agrícolas em água para consumo humano, poços subterrâneos, sedimentos de lagoas e até no ar e na chuva coletados em pátios escolares.",
    fonte: "IDEC / Embrapa / Dossiê Abrasco"
  },
  {
    id: 5,
    numeroOriginal: 6,
    emoji: "🧬",
    afirmacao: "Alimentos transgênicos têm menos defensivos agrícolas",
    tipo: "MITO",
    explicacao:
      "Uma das principais promessas no início do cultivo de transgênicos era a redução de defensivos pela resistência das plantas a pragas. Na prática, aconteceu o oposto: estudo de monitoramento no Brasil entre 2000 e 2012 mostrou um aumento de 1,6 vezes no uso de defensivos agrícolas em plantações transgênicas. As lavouras de soja transgênica, por exemplo, triplicaram o consumo de químicos agrícolas sem aumento proporcional da produtividade.",
    fonte: "IDEC / Estudos de Monitoramento de OGMs no Brasil"
  },
  {
    id: 6,
    numeroOriginal: 7,
    emoji: "🚜",
    afirmacao: "Não é possível ter grandes plantações sem utilizar defensivos agrícolas",
    tipo: "MITO",
    explicacao:
      "Segundo a Federação Internacional de Movimentos de Agricultura Orgânica (IFOAM), a área dedicada a orgânicos no planeta ultrapassa 57,8 milhões de hectares. No Brasil, o cultivo no Rio Grande do Sul é o maior produtor de arroz orgânico da América Latina, com mais de 27 mil toneladas colhidas por safra e exportação para EUA, Alemanha, Espanha e outros países. Sistemas orgânicos e agroecológicos mantêm o solo saudável e empregam métodos biológicos eficazes em grande escala.",
    fonte: "IDEC / IFOAM / Pesquisas de Agroecologia"
  },
  {
    id: 7,
    numeroOriginal: 8,
    emoji: "🌿",
    afirmacao: "Os defensivos agrícolas não são utilizados na agricultura orgânica",
    tipo: "VERDADE",
    explicacao:
      "Alimentos orgânicos são produzidos sem defensivos agrícolas sintéticos, sem fertilizantes químicos industriais e sem sementes transgênicas. Esse modelo de cultivo respeita os ciclos naturais das plantas e do solo, gerando alimentos com mais nutrientes e fibras. Além disso, a FAO analisou centenas de estudos e concluiu que sistemas orgânicos preservam a biodiversidade, favorecendo a variedade de espécies e o equilíbrio ambiental.",
    fonte: "IDEC / FAO (Organização das Nações Unidas)"
  },
  {
    id: 8,
    numeroOriginal: 9,
    emoji: "🥬",
    afirmacao: "Alimentos hidropônicos não têm defensivos agrícolas",
    tipo: "MITO",
    explicacao:
      "Alimentos hidropônicos são cultivados na água, sem contato com a terra, mas precisam de soluções de nutrientes químicos e muitos produtores utilizam defensivos agrícolas para controlar pragas e fungos em estufas. Hidropônico não é sinônimo de orgânico. Para ser orgânico de verdade, o alimento deve possuir certificação oficial (como o selo federal do SisOrg) ou declaração emitida pelo Ministério da Agricultura.",
    fonte: "IDEC / MAPA / SisOrg"
  },
  {
    id: 9,
    numeroOriginal: 10,
    emoji: "🧺",
    afirmacao: "Alimentos orgânicos são mais caros do que os cultivados com defensivos agrícolas",
    tipo: "MITO",
    explicacao:
      "O preço final dos orgânicos varia drasticamente conforme o ponto de venda. Pesquisa do Instituto Kairós e Instituto Terra Mater comprovou que uma cesta com 17 itens orgânicos comprada em feiras é 50% mais barata do que nos supermercados. Em feiras agroecológicas e compras diretas de produtores familiares, os orgânicos frequentemente têm preços equivalentes ou até inferiores aos alimentos convencionais.",
    fonte: "IDEC / Instituto Kairós / Terra Mater"
  }
];
