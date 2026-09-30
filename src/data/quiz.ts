export interface QuizQuestion {
  nome: string;
  emoji: string;
  img: string;
  contaminado: boolean;
  fato: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    nome: "Morango",
    emoji: "🍓",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/PerfectStrawberry.jpg?width=800",
    contaminado: true,
    fato: "Campeão de contaminação nos testes da Anvisa — já foram encontrados até 4 pesticidas diferentes em uma única amostra."
  },
  {
    nome: "Pimentão",
    emoji: "🫑",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Capsicum_and_cross_section.jpg?width=800",
    contaminado: true,
    fato: "Um dos vegetais com mais irregularidades na Anvisa, incluindo pesticidas proibidos em outros países, como o acefato*."
  },
  {
    nome: "Abacate",
    emoji: "🥑",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Persea_americana_fruit_2.JPG?width=800",
    contaminado: false,
    fato: "A casca bem grossa e firme protege a polpa — está entre as frutas mais seguras para comer."
  },
  {
    nome: "Laranja",
    emoji: "🍊",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Orange-Whole-%26-Split.jpg?width=800",
    contaminado: true,
    fato: "Recebe muito pesticida na casca. Ao espremer para fazer suco, resíduos químicos passam para o copo se a fruta não for bem lavada antes."
  },
  {
    nome: "Cebola",
    emoji: "🧅",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Onion_on_White.JPG?width=800",
    contaminado: false,
    fato: "Como retiramos as camadas secas de fora na hora de cozinhar, a cebola fica entre os alimentos mais limpos da feira."
  },
  {
    nome: "Uva",
    emoji: "🍇",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Table_grapes_on_white.jpg?width=800",
    contaminado: true,
    fato: "Recebe muitas pulverizações de fungicidas* para não mofar. Como sua casca é fininha, os químicos penetram facilmente."
  },
  {
    nome: "Abacaxi",
    emoji: "🍍",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Pineapple_and_cross_section.jpg?width=800",
    contaminado: false,
    fato: "Apesar de usar defensivos na plantação, a casca grossa e espinhosa impede que a maior parte chegue à polpa amarela."
  },
  {
    nome: "Pepino",
    emoji: "🥒",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Cucumber_BNC.jpg?width=800",
    contaminado: true,
    fato: "Aparece com frequência nos alertas da Anvisa por conter inseticidas (acefato*) e fungicidas (carbendazim*) acima do limite permitido."
  },
  {
    nome: "Banana",
    emoji: "🍌",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Banana-Single.jpg?width=800",
    contaminado: false,
    fato: "A casca que descascamos funciona como um escudo natural — a polpa é uma das mais protegidas e limpas da natureza."
  },
  {
    nome: "Goiaba",
    emoji: "🍈",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Guava_ID.jpg?width=800",
    contaminado: true,
    fato: "Com casca comestível e delicada, atrai muitas moscas-das-frutas e costuma receber altas doses de pesticidas nas lavouras comuns."
  },
  {
    nome: "Melancia",
    emoji: "🍉",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Watermelon_cross_BNC.jpg?width=800",
    contaminado: false,
    fato: "A casca espessa e dura bloqueia os produtos aplicados por fora, mantendo a polpa vermelha bem protegida e fresca."
  },
  {
    nome: "Tomate",
    emoji: "🍅",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tomato_je.jpg?width=800",
    contaminado: true,
    fato: "Como comemos com casca quase todos os dias, a alta quantidade de fungicidas* aplicados na lavoura gera um acúmulo contínuo no corpo."
  }
];
