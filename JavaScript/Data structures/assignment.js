const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// const { keywords: tags } = books[0];
// console.log(tags);

// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// const printBookInfo = function (title, author, year = 'year unknown') {
//   console.log(`${title} by ${author}, ${year}`);
// };

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// const spellWord = function (string) {
//   console.log(...string);
// };
// spellWord('javascript');

// const {
//   keywords: [mainKeyword, ...rest],
// } = books[0];

// console.log(mainKeyword, rest);

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(`The book ${title} has ${authors.length} authors`);
// };

// printBookAuthorsCount('algorithms', 'robert sedwick', 'kevin wayne');

// const hasExamplesInJava = function (book) {
//   return book.programmingLanguage === 'java' || 'no data avaliable';
// };

// for (let i = 0; i < books.length; i++) {
//   console.log(
//     books[i].onlineContent &&
//       console.log(`${books[i].title} provides online content`)
//   );
// }

// for (let i = 0; i < books.length; i++) {
//   return (
//     books[i].onlineContent ??
//     console.log(`${books[i].title} provides no data about its online content`)
//   );
// }

// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// let pageSum = 0;
// for (const el of books) {
//   pageSum += el.pages;
// }
// console.log(pageSum);

// const allAuthors = [];
// for (const el of books) {
//   if (typeof el.author === 'string') {
//     allAuthors.push(el.author);
//   } else {
//     for (const author of el.author) {
//       allAuthors.push(author);
//     }
//   }
// }
// console.log(allAuthors);

// for (const [index, author] of allAuthors.entries()) {
//   console.log(`${index + 1}. ${author}`);
// }
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };
// console.log(newBook);
// const pages = 880;
// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };
// console.log(newBook2);

// const getFirstKeyword = function (book) {
//   return book.keywords?.[0];
// };
// console.log(getFirstKeyword(books[5]));
// const entries = [];
// for (const x of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push(x);
// }
// console.log([entries]);
// const entries = [];
// for (const [index, entry] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(entry);
// }
// show example solution
//  {...}
// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries.push(value);
// }
// console.log(entries);
// const entries2 = Object.entries(books[0].thirdParty.goodreads);

// console.log(entries2);
// const allKeywords = [];

// for (const x of books) {
//   allKeywords.push(...x.keywords);
// }
// console.log(allKeywords);

// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);
// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');
// console.log(uniqueKeywords);

// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);
// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);
// uniqueKeywords.clear();
// console.log(uniqueKeywords);

// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);
// bookMap.set('pages', 464);
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
// console.log(bookMap.get('author'));
// console.log(bookMap.size);
// if (bookMap.has('author')) console.log('the author is known');

// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);
// for (const [number, value] of firstBookMap) {
//   if (typeof value === 'number') console.log(number);
// }

// wjat to chjoose ***********************************
// array, set object, map

// simjple list array or sets
// key value objects or maps
// web api

// console.log(books[0].ISBN[6]);
// console.log(books[0].ISBN[4]);
// console.log(books[0].ISBN[9]);
// console.log(books[0].ISBN[8]);
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';

// console.log(quote.indexOf('chess'));
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// const isContributor = function (name) {
//   return name.lastIndexOf('(Contributor)') !== -1;
// };

// console.log(isContributor('Julie Sussman (Contributor)'));

// const normalizeAuthorName = function (author) {
//   author = author.trim();
//   const authorLowerCase = author.toLowerCase();
//   const authorGood = authorLowerCase[0].toUpperCase();
//   const authorNormalized = authorGood[authorGood.indexOf(' ')].toUpperCase();
//   }
//   return authorNormalized;
// };
// console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// const newBookTitle = books[1].title.replace('Programs', 'Software');

// const logBookTheme = function (bookTitle) {
//   bookTitle = bookTitle.toLowerCase();
//   if (bookTitle.startsWith('computer')) {
//     console.log('This book is about computers');
//   } else if (
//     bookTitle.includes('algorithms') &&
//     bookTitle.includes('structures')
//   ) {
//     console.log('This book is about algorithms and data structures');
//   } else if (
//     (bookTitle.endsWith('system') || bookTitle.endsWith('systems')) &&
//     !bookTitle.includes('operating')
//   ) {
//     console.log(
//       'This book is about some systems, but definitely not about operating systems'
//     );
//   }
// };

// logBookTheme('Computer algorithms structures system operating');
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

const logBookCategories = function (categoriess) {
  const categories = categoriess.split(';');
  for (let category of categories) {
    console.log(category);
  }
};
logBookCategories(bookCategories);

const getKeywordsAsString = function (books) {
  const keywordsArr = [];
  for (book of books) {
    keywordsArr.push(...book.keywords);
  }
  console.log(new Set(keywordsArr));
};
getKeywordsAsString(books);

const logBookChapters = function (bookChapters) {
  for (const [name, page] of bookChapters) {
    console.log(`${name.padEnd(20, '_')} ${page}`);
  }
};
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
logBookChapters(bookChapters);
