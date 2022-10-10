const arr = [10, 20, 50, 60, 90, 100, 99, 98, 55, 33, 0];

// every
function everyFnc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    } else return false;
  }
}
console.log(
  "Every Medodu:",
  everyFnc(arr, function (item) {
    return item > 50;
  })
);

// some

function someFnc(array, callback) {
  let a = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      a++;
    }
  }
  if (a > 0) {
    return true;
  } else return false;
}

console.log(
  "Some Medodu:",
  someFnc(arr, function (item) {
    return item > 50;
  })
);

// filter
function filterFnc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 50) {
      callback(array[i]);
    }
  }
}
filterFnc(arr, function (item) {
  console.log("Filter Medodu:", item);
});

// find
function findFnc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 50) {
      callback(array[i]);
      break;
    }
  }
}
findFnc(arr, function (item) {
  console.log("Find Medotu", item);
});



// sort

const personFarid = {
  firstname: "Farid",
  lastname: "Hacizade",
  age: 25,
};
const personRovsen = {
  firstname: "Rovsen",
  lastname: "Xelilov",
  age: 21,
};
const personTunar = {
  firstname: "Tunar",
  lastname: "Namazov",
  age: 21,
};
const personElnar = {
  firstname: "Elnar",
  lastname: "Mamedov",
  age: 24,
};
const personElmar = {
  firstname: "Elmar",
  lastname: "Haciyev",
  age: 23,
};


const person=[personElmar,personElnar,personFarid,personRovsen,personTunar]

person.sort((a, b) => {
    return a.firstname - b.firstname;
  
});

person.forEach((e) => {
    console.log(`${e.firstname} ${e.lastname} ${e.age}`);
});