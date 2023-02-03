const warmColors = ["red", "green", "orange"];
const coolColors = ["blue", "green", "purple"];
const brojevi1 = [1, 2];
const brojevi2 = [2, 3, 4];

const arrayMachine = function (first, second) {
//   let finalArray = first.concat(second);
    let finalArray = [...first, ...second];
//  finalArray = new Set(finalArray);
// finalArray = Array.from(finalArray);
    finalArray = [...new Set(finalArray)];

    finalArray.sort();
    console.log(finalArray);

    finalArray.reverse();
    console.log(finalArray);
};

arrayMachine(warmColors, coolColors);
arrayMachine(brojevi1, brojevi2);

const dog = {
    pasmina: "Doggo",    
};

const human = {
    name: "Ivana",
    age: 23,
    ...dog,
};
console.log(human);

