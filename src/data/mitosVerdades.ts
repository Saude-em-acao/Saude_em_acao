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
      "É um grande mito. Dados da ONU mostram que esses pesticidas causam cerca de 200 mil mortes por ano no mundo por intoxicação aguda. No Brasil, em média, 7 pessoas são intoxicadas todos os dias segundo o Ministério da Saúde. Além disso, a maioria dos testes não avalia o perigo de ingerir múltiplos químicos misturados ao longo dos anos.",
    fonte: "IDEC / ONU / Ministério da Saúde"
  },
  {
    id: 2,
    numeroOriginal: 3,
    emoji: "🍎",
    afirmacao: "Os defensivos agrícolas podem se acumular nas cascas das frutas e hortaliças",
    tipo: "VERDADE",
    explicacao:
      "É verdade! Esses químicos grudam na casca e muitos penetram até a polpa do alimento. Eles contaminam plantas e animais que comemos. No Brasil, pesquisas já encontraram restos de defensivos agrícolas até no leite materno de mães em regiões de lavoura.",
    fonte: "IDEC / Pesquisas de Saúde Coletiva"
  },
  {
    id: 3,
    numeroOriginal: 4,
    emoji: "🚰",
    afirmacao: "É só lavar bem os alimentos que os defensivos agrícolas são removidos",
    tipo: "MITO",
    explicacao:
      "Lavar em água corrente ajuda a tirar a sujeira e parte do pesticida que fica por fora, mas não resolve tudo. A Anvisa alerta que muitos produtos entram na seiva da planta e vão parar dentro da polpa. Ou seja: não tem como lavar o que já está dentro do alimento.",
    fonte: "IDEC / Anvisa"
  },
  {
    id: 4,
    numeroOriginal: 5,
    emoji: "🌍",
    afirmacao: "Os defensivos agrícolas contaminam o meio ambiente",
    tipo: "VERDADE",
    explicacao:
      "É verdade. O pesticida pulverizado não fica só na lavoura. O vento e a chuva levam esses produtos para os rios, poços de água, para a terra e até para o ar que as crianças respiram perto de escolas rurais, como comprovou a Embrapa e a Fiocruz.",
    fonte: "IDEC / Embrapa / Dossiê Abrasco"
  },
  {
    id: 5,
    numeroOriginal: 6,
    emoji: "🧬",
    afirmacao: "Alimentos transgênicos têm menos defensivos agrícolas",
    tipo: "MITO",
    explicacao:
      "Prometiam que as plantas transgênicas precisariam de menos pesticidas, mas aconteceu o contrário! Como a planta foi modificada para aguentar doses maiores de agroquímicos sem morrer, as plantações de soja transgênica no Brasil triplicaram o uso de químicos.",
    fonte: "IDEC / Estudos de Monitoramento de OGMs no Brasil"
  },
  {
    id: 6,
    numeroOriginal: 7,
    emoji: "🚜",
    afirmacao: "Não é possível ter grandes plantações sem utilizar defensivos agrícolas",
    tipo: "MITO",
    explicacao:
      "É perfeitamente possível produzir em grande escala sem agroquímicos. O Brasil é o maior produtor de arroz orgânico de toda a América Latina (no Rio Grande do Sul), colhendo mais de 27 mil toneladas por safra usando apenas técnicas naturais e biológicas.",
    fonte: "IDEC / IFOAM / Pesquisas de Agroecologia"
  },
  {
    id: 7,
    numeroOriginal: 8,
    emoji: "🌿",
    afirmacao: "Os defensivos agrícolas não são utilizados na agricultura orgânica",
    tipo: "VERDADE",
    explicacao:
      "É verdade! A comida orgânica é plantada sem nenhum tipo de pesticida químico de laboratório, sem adubos industriais e sem sementes transgênicas. Os agricultores cuidam da terra de forma natural, gerando alimentos mais nutritivos e protegendo a natureza.",
    fonte: "IDEC / FAO (Organização das Nações Unidas)"
  },
  {
    id: 8,
    numeroOriginal: 9,
    emoji: "🥬",
    afirmacao: "Alimentos hidropônicos não têm defensivos agrícolas",
    tipo: "MITO",
    explicacao:
      "Hidropônico significa apenas que a hortaliça cresceu na água com nutrientes químicos, e não na terra. Muitos produtores ainda aplicam pesticidas para evitar pragas e fungos dentro das estufas. Hidropônico não é orgânico!",
    fonte: "IDEC / Ministério da Agricultura"
  },
  {
    id: 9,
    numeroOriginal: 10,
    emoji: "🧺",
    afirmacao: "Alimentos orgânicos são mais caros do que os cultivados com defensivos agrícolas",
    tipo: "MITO",
    explicacao:
      "Nos supermercados grandes eles podem custar mais, mas em feiras livres de produtores e feiras agroecológicas, a comida orgânica costuma ter preços iguais ou até mais baratos do que os alimentos cultivados com pesticidas, porque você compra direto de quem planta.",
    fonte: "IDEC / Instituto Kairós / Terra Mater"
  }
];
