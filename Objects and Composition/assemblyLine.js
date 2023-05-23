function createAssemblyLine() {
  return {
    hasClima: function (car) {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = function () {
        if (this.temp < car.tempSettings) {
          this.temp++;
        } else if (this.temp > car.tempSettings) {
          this.temp--;
        }
      };
    },
    hasAudio: function (car) {
      car.currentTrack = { name: "", artist: "" };
      car.nowPlaying = function () {
        if (car.currentTrack !== null) {
          console.log(
            `Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic: function (car) {
      car.checkDistance = function (distance) {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };
}

let assemblyLine = createAssemblyLine();
let myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
