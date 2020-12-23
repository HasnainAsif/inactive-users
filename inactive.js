const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime(),
};

const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};

let count = 0;

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
  count++;

  if (count <= 2) {
    inactiveFirstStage();
  } else if (count <= 3 && count > 2) {
    inactiveSecondStage();
  } else if (count > 4 && count <= 5) {
    inactiveThirdStage();
  }

  if (count == 5) {
    count = 0;
  }
  // please write your code here
}, 60000);
