const buildSomething = function (housePart, estimate) {
  console.log(housePart + " building started...");

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (true) {
        resolve("ready");
      } else {
        reject("Unexpected error found, building can not be continued!");
      }
    }, estimate);
  });
};

buildSomething("Foundations", 1000)
  .then((status) => {
    console.log(`Foundations are ${status}`);
    return buildSomething("Walls", 1000);
  })
  .then((status) => {
    console.log(`Walls are ${status}`);
    return buildSomething("Roof", 2000);
  })
  .then((status) => {
    console.log(`Roof is ${status}`);
    return buildSomething("House is built!");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(()=> {
    console.log(
      "Bez obzira jel se desilo ovo il ono ja ću se pokrenuti"
    )
  })
  ;