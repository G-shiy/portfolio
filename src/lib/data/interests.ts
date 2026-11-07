export interface InterestItem {
  title: string;
  description: string;
  highlights: string[];
}

export interface InterestCategory {
  id: string;
  label: string;
  items: InterestItem[];
}

export const interests: InterestCategory[] = [
  {
    id: 'narrativas',
    label: 'Narrativas e universos',
    items: [
      {
        title: 'Histórias que deixam marcas',
        description:
          'Gosto de explorar mundos bem construídos, histórias densas, personagens complexos e narrativas em que as escolhas têm consequências.',
        highlights: ['Clair Obscur: Expedition 33', 'Elden Ring', 'Dark Souls', 'Fullmetal Alchemist: Brotherhood'],
      },
    ],
  },
  {
    id: 'computacao',
    label: 'Computação e personalização',
    items: [
      {
        title: 'Ferramentas com espaço para experimentar',
        description:
          'Tenho curiosidade por ferramentas configuráveis e gosto de adaptar meu ambiente de desenvolvimento ao meu jeito de trabalhar.',
        highlights: [
          'Linux', 'Fedora', 'KDE', 'Niri', 'Neovim', 'tmux', 'Fish',
          'Computadores retrô', 'Terminais', 'Teclados mecânicos', 'Ferramentas de desenvolvimento personalizáveis',
        ],
      },
    ],
  },
  {
    id: 'criatividade',
    label: 'Criatividade e cotidiano',
    items: [
      {
        title: 'Ideias para escrever e imaginar',
        description:
          'Escrita, leitura, fantasia, ficção científica e construção de mundos convivem com a música no meu cotidiano.',
        highlights: ['Escrita', 'Leitura', 'Fantasia', 'Ficção científica', 'Construção de mundos', 'Música'],
      },
    ],
  },
];
