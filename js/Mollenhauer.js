// let cardNumber = "2034399002125581";
// let cardHidden = "*";

// const getHiddenCard = () => {
//   console.log(cardNumber.replace("203439900212", cardHidden.repeat(4)));
// };

// const isInternationalPhone = (number) => {
//   const firstLetter = number[0];
//   console.log(firstLetter.toUpperCase() === firstLetter);
// };

// isInternationalPhone();

// const normalizeUrl = (site) => {
//     let normalizedUrl;
  
//     if (site.startsWith('https://')) {
//       normalizedUrl = site;
//     } else {
//       normalizedUrl = `https://${site}`;
//     }
  
//     return normalizedUrl;
// }

// normalizeUrl('createx.com');

// const convertText = (text) => {
//     if (text === '') {
//       return '';d
//     }
  
//     const reversable = text[0] !== text[0].toUpperCase();
//     return reversable ? reverse(text) : text;
//   };

// convertText('');

// const getNumberExplanation = () => {
  // if (666 === 'devil number') {
  //   console.log('devil number');
  // } else if (42 ==='answer for everything') {
  //   console.log('answer for everything');
  // } else if (7 === 'prime number') {
  //   console.log('prime number');
  // } else {
  //   console.log('error')
  // }

//   switch (getNumberExplanation) {
//     case 666:
//       console.log('devil number');
//       break;
//     case 42:
//       console.log('answer for everything');
//       break;
//     case 7:
//       console.log('prime number');
//       break;
//     default:
//       console.log('error');
//   }
// };

// getNumberExplanation();

const printNumbers = (initialNumber = 4) => {
  let i = 1;

  while (i <= initialNumber) {
    console.log(i);
    i = i - 1;
  }

  console.log('finished!');
};

printNumbers();