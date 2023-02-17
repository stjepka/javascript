const buildSomething = function(housePart, estimate, callback) {
  console.log(housePart + "build started...");
  setTimeout(function () {
    if (true) {
      callback(housePart, "ready");
    } else {
      callback(housePart, "not ready");
    }
  }, estimate);
};

buildSomething("Foundations ", 1000, function (housePart, status) {
  let houseParts = housePart;
  console.log(`${houseParts} are ${status}`);

  if(status === "ready") {
    buildSomething("Walls ", 2000, function (housePart, status) {
      houseParts += `, ${housePart}`;
      console.log(`${houseParts} are ${status}`);

      if (status === "ready") {
        buildSomething("Roof ", 3000, function (housePart, status) {
          houseParts += `, ${housePart}`;
          console.log(`${houseParts} are ${status}`);
          console.log("House is built!");
        });
      }
    });
  }
});