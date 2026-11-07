export interface InterestItem {
  title: string;
  description: string;
  highlights?: string[];
}

export interface InterestCategory {
  id: string;
  label: string;
  items: InterestItem[];
}

export const interests: InterestCategory[] = [
  {
    id: 'jogos-rpg',
    label: 'Jogos e RPG',
    items: [
      {
        title: 'Mundos que pedem exploração',
        description:
          'Gosto de jogos com universos bem construídos, atmosferas marcantes e histórias onde as escolhas têm peso. Valorizo exploração, consequência narrativa e sistemas que recompensam curiosidade.',
        highlights: ['Clair Obscur: Expedition 33', 'Elden Ring', 'Dark Souls'],
      },
    ],
  },
  {
    id: 'anime-manga',
    label: 'Anime e mangá',
    items: [
      {
        title: 'Personagens que mudam',
        description:
          'Aprecio narrativas que investem tempo no desenvolvimento de seus personagens, seus conflitos internos e as consequências de suas escolhas. Histórias onde ninguém é apenas bom ou mau.',
        highlights: ['Fullmetal Alchemist: Brotherhood'],
      },
    ],
  },
  {
    id: 'computacao-retro',
    label: 'Computação retrô',
    items: [
      {
        title: 'Objetos com caráter',
        description:
          'Tenho afinidade por computadores antigos, terminais, teclados mecânicos e interfaces instrumentais. Gosto de equipamentos que combinam funcionalidade, boa construção e identidade visual própria: objetos que envelhecem com personalidade.',
      },
    ],
  },
  {
    id: 'linux-personalizacao',
    label: 'Linux e personalização',
    items: [
      {
        title: 'Ambiente que me entende',
        description:
          'Configurar meu ambiente de desenvolvimento é uma forma de experimentar, compreender e adaptar ferramentas às minhas necessidades. Não é sobre superioridade técnica; é sobre liberdade de escolha e prazer no ofício.',
        highlights: ['Fedora', 'KDE', 'Niri', 'Neovim', 'tmux', 'Fish'],
      },
    ],
  },
  {
    id: 'escrita-leitura',
    label: 'Escrita e leitura',
    items: [
      {
        title: 'Histórias com consequência',
        description:
          'Gosto de narrativas densas, construção de mundos, personagens moralmente complexos e histórias onde as escolhas têm peso real. Tenho interesse por fantasia e ficção científica, e também desenvolvo ideias e projetos próprios de escrita.',
      },
    ],
  },
  {
    id: 'musica',
    label: 'Música',
    items: [
      {
        title: 'Atmosfera e significado',
        description:
          'Aprecio a atmosfera e o significado que diferentes composições podem transmitir. A música acompanha o trabalho, a leitura e os momentos de pausa, não como ruído de fundo, mas como camada adicional de contexto.',
      },
    ],
  },
];