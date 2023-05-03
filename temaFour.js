console.log("Exercitiul 1:");

/* const findSquare = (num) => {
  return num * num;
};
console.log(findSquare(6));
console.log(findSquare(0));
console.log(findSquare(-12)); */

//-------------------------------------

const findSquare = (num) => {
  return Math.pow(num, 2);
};
console.log(findSquare(6));
console.log(findSquare(0));
console.log(findSquare(-12));

//------------------------------------------------------
console.log("Exercitiul 2:");

const getRandom = (start, end) => {
  return Math.random() * (end - start) + start;
};
console.log(getRandom(3, 5));

//------------------------------------------------------
console.log("Exercitiul 3:");

const letterCount = (sir, litera) => {
  const litere = sir.split("");
  counter = 0;
  for (let i = 0; i < litere.length; i++) {
    if (litere[i] === litera) {
      counter++;
    }
  }
  return counter;
};
const string = "Imi place programarea";
console.log(letterCount(string, "a"));

//------------------------------------------------------
console.log("Exercitiul 4:");

const addNumber = (...argumente) => {
  let sum = 0;

  for (let x of argumente) {
    sum += x;
  }

  return sum;
};
console.log(addNumber(1, 2, 3, 4, 5));
