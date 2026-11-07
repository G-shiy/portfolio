export interface ReadingGroup {
  id: string;
  label: string;
  books: ReadingBook[];
}

export interface ReadingBook {
  title: string;
  author: string;
  progress: number;
}

export interface ReadingSeries {
  title: string;
  author: string;
  progress: number;
  note?: string;
}

export const studyReadingGroups: ReadingGroup[] = [
  {
    id: 'pensamento',
    label: 'Pensamento e formação',
    books: [
      { title: 'Cristianismo puro e simples', author: 'C. S. Lewis', progress: 100 },
      { title: 'Inteligência Humilhada', author: 'Jonas Madureira', progress: 10 },
      { title: 'A República', author: 'Platão', progress: 100 },
      { title: 'Meditações', author: 'Marco Aurélio', progress: 70 },
      { title: 'Confissões', author: 'Agostinho de Hipona', progress: 100 },
      { title: 'Apologia de Sócrates', author: 'Platão', progress: 100 },
      { title: 'Ética a Nicômaco', author: 'Aristóteles', progress: 100 },
      { title: 'Como ler livros: o guia clássico para a leitura inteligente', author: 'Mortimer J. Adler e Charles Van Doren', progress: 100 },
      { title: 'A Vida Intelectual: Seu Espírito, Suas Condições, Seus Métodos', author: 'A.-D. Sertillanges', progress: 100 },
    ],
  },
  {
    id: 'computacao',
    label: 'Computação e sistemas',
    books: [
      { title: 'Clean Code', author: 'Robert C. Martin', progress: 100 },
      { title: 'Redes de computadores e a internet: uma abordagem top-down', author: 'James F. Kurose e Keith W. Ross', progress: 100 },
      { title: 'Sistemas Operacionais Modernos', author: 'Andrew S. Tanenbaum e Herbert Bos', progress: 100 },
      { title: 'Digital Systems: Principles and Applications', author: 'Ronald J. Tocci, Neal S. Widmer e Gregory L. Moss', progress: 100 },
      { title: 'HTTP: The Definitive Guide', author: 'David Gourley, Brian Totty, Marjorie Sayer, Anshu Aggarwal e Sailu Reddy', progress: 100 },
      { title: 'How Linux Works', author: 'Brian Ward', progress: 100 },
      { title: 'The Pragmatic Programmer', author: 'Andrew Hunt e David Thomas', progress: 100 },
      { title: 'Computer Networks', author: 'Andrew S. Tanenbaum, Nick Feamster e David J. Wetherall', progress: 100 },
      { title: 'Code: The Hidden Language of Computer Hardware and Software', author: 'Charles Petzold', progress: 100 },
    ],
  },
  {
    id: 'matematica',
    label: 'Matemática',
    books: [{ title: 'Basic Mathematics', author: 'Serge Lang', progress: 100 }],
  },
];

export const storyReadingSeries: ReadingSeries[] = [
  { title: 'As Crônicas de Nárnia', author: 'C. S. Lewis', progress: 100, note: 'Série completa' },
  { title: 'O Senhor dos Anéis', author: 'J. R. R. Tolkien', progress: 0, note: 'Série completa' },
  { title: 'As Crônicas de Olam', author: 'L. L. Wurlitzer', progress: 100, note: 'Série completa' },
  { title: 'Os Irmãos Karamázov', author: 'Fiódor Dostoiévski', progress: 0 },
  { title: 'Crime e Castigo', author: 'Fiódor Dostoiévski', progress: 0 },
  { title: 'O Peregrino', author: 'John Bunyan', progress: 0 },
  { title: 'O Conde de Monte Cristo', author: 'Alexandre Dumas', progress: 0 },
];
