app.factory('cartService', function () {
  var cart = [];
  var records = [
    {
        _id: "55c8ee82152165d244b98300",
        artist: "Fleetwood Mac",
        album: "Rumours",
        releaseYear: 1977,
        price: 25,
        inStock: true,
        rating: 5,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0001/511/MI0001511716.jpg?partner=allrovi.com',
        bandMembers: 'Lindsey Buckingham, Mick Fleetwood, Christine McVie, John McVie, Stevie Nicks',
        trendingScale: 244,
        styles: [
          'Pop',
          'Soft Rock'
        ]
    },
    {
        _id: "55c8ee82152165d244b98301",
        artist: "Billy Joel",
        album: "Piano Man",
        releaseYear: 1973,
        price: 33,
        inStock: true,
        rating: 5,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0000/020/MI0000020836.jpg?partner=allrovi.com',
        bandMembers: 'Billy Joel, Larry Carlton, Eric Weissberg, Billy Armstrong, Richard Bennett...',
        trendingScale: 150,
        styles: [
          'Contemporary Pop',
          'Soft Rock',
          'Singer/Songwriter'
        ]
    },
    {
        _id: "55c8ee82152165d244b98302",
        artist: "ABBA",
        album: "ABBA",
        releaseYear: 1975,
        price: 19,
        inStock: true,
        rating: 3,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0000/699/MI0000699371.jpg?partner=allrovi.com',
        bandMembers: 'Agnetha Fältskog, Anni-Frid Lyngstad, Benny Andersson, Björn Ulvaeus',
        trendingScale: 75,
        styles: [
          'Euro Pop',
          'Swedish Pop',
          'Contemporary Pop/Rock'
        ]
    },
    {
        _id: "55c8ee82152165d244b98303",
        artist: "Metallica",
        album: "Master of Puppets",
        releaseYear: 1986,
        price: 20,
        inStock: true,
        rating: 4,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0001/781/MI0001781614.jpg?partner=allrovi.com',
        bandMembers: 'James Hetfield, Kirk Hammett, Cliff Burton, Lars Ulrich',
        trendingScale: 100,
        styles: [
          'Heavy Metal',
          'Thrash Metal',
          'Hard Rock'
        ]
    },
    {
        _id: "55c8ee82152165d244b98304",
        artist: "The Partridge Family",
        album: "The Partridge Family Album",
        releaseYear: 1970,
        price: 14,
        inStock: false,
        rating: 3,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0000/034/MI0000034646.jpg?partner=allrovi.com',
        bandMembers: 'David Cassidy, Shirley Jones, Dennis Budimir, Louie Shelton, Tommy Tedesco...',
        trendingScale: 20,
        styles: [
          'Sunshine Pop',
          'Teen Idols'
        ]
    },
    {
        _id: "55c8ee82152165d244b98305",
        artist: "Styx",
        album: "Paradise Theatre",
        releaseYear: 1981,
        price: 23,
        inStock: false,
        rating: 4,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0002/443/MI0002443570.jpg?partner=allrovi.com',
        bandMembers: 'Dennis DeYoung, Chuck Panozzo, John Panozzo, Tommy Shaw, James Young',
        trendingScale: 65,
        styles: [
          'Arena Rock',
          'Contemporary Rock'
        ]
    },
    {
        _id: "55c8ee82152165d244b98306",
        artist: "Queen",
        album: "A Night at the Opera",
        releaseYear: 1975,
        price: 30,
        inStock: true,
        rating: 5,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/201/MI0003201028.jpg?partner=allrovi.com',
        bandMembers: 'Freddie Mercury, Brian May, Roger Taylor, John Deacon',
        trendingScale: 250,
        styles: [
          'Arena Rock',
          'Contemporary Pop/Rock',
          'Glam Rock',
        ]
    },
    {
        _id: "55c8ee82152165d244b98307",
        artist: "Kansas",
        album: "Leftoverture",
        releaseYear: 1976,
        price: 34,
        inStock: false,
        rating: 4,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0002/503/MI0002503888.jpg?partner=allrovi.com',
        bandMembers: 'Steve Walsh, Robby Steinhardt, Kerry Livgren, Phil Ehart, Dave Hope, Rich Williams',
        trendingScale: 78,
        styles: [
          'Album Rock',
          'Progressive Rock'
        ]
    },
    {
        _id: "55c8ee82152165d244b98308",
        artist: "Michael Jackson",
        album: "Bad",
        releaseYear: 1987,
        price: 39,
        inStock: true,
        rating: 5,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677652.jpg?partner=allrovi.com',
        bandMembers: 'Michael Jackson, Ollie E. Brown, David Williams, Stefan Stefanovic...',
        trendingScale: 102,
        styles: [
          'Pop',
          'Dance Pop',
          'Contemporary R&B'
        ]
    },
    {
        _id: "55c8ee82152165d244b98309",
        artist: "The Beatles",
        album: "The White Album",
        releaseYear: 1968,
        price: 39,
        inStock: true,
        rating: 3,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0003/606/MI0003606498.jpg?partner=allrovi.com',
        bandMembers: 'Michael Jackson, Ollie E. Brown, David Williams, Stefan Stefanovic...',
        trendingScale: 50,
        styles: [
          'British Pop',
          'Contemporary Pop/Rock'
        ]
    },
    {
        _id: "55c8ee82152165d244b98310",
        artist: "Earth, Wind & Fire",
        album: "I am",
        releaseYear: 1979,
        price: 21,
        inStock: true,
        rating: 3,
        imageUrl: 'http://cps-static.rovicorp.com/3/JPG_400/MI0000/755/MI0000755797.jpg?partner=allrovi.com',
        bandMembers: 'Philip Bailey, Maurice White, Verdine White, Ralph Johnson, Fred White...',
        trendingScale: 63,
        styles: [
          'Funk',
          'Soul',
          'Disco'
        ]
    },
  ];
  var obj = {
    records: function () {
      return records;
    },
    cart: function () {
      return cart;
    },
    addRecord: function (record) {
      cart.push(record);
    }

  };
  return obj;
});

// app.factory('commentService', function () {
//   var comments = []
//
//   var obj = {
//     comments: function () {
//       return comments
//     },
//     addComment: function (comment) {
//       comments.push(comment)
//     }
//   }
//
//   return obj
// })
