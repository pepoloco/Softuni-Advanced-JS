function solve(...input) {
  const [numberOfSteps, lenghtOfFoot, kmh] = input;
  const metersWalked = numberOfSteps * lenghtOfFoot;
  const breaks = Math.floor(metersWalked / 500) * 60;
  const speedMeterPerSec = (kmh * 1000) / (60 * 60);
  let time = metersWalked / speedMeterPerSec + breaks;

  let seconds = Math.round(time % 60);
  time -= time % 60;
  time = time / 60;
  let min = Math.floor(time % 60);
  time -= time % 60;
  time = time / 60;
  let hr = Math.floor(time % 60);
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (min < 10) {
    min = "0" + min;
  }
  console.log(`${hr}:${min}:${seconds}`);
}
//Every 500 meters the student rests and takes a 1-minute break.
//wanted output 00:32:48
solve(4000, 0.6, 5);
