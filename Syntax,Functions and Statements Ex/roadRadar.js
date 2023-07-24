function solve(speed, area) {
  let status = "";
  const motorwayLimit = 130;
  const interstateLimit = 90;
  const cityLimit = 50;
  const residentialArea = 20;
  let difference = 0;
  switch (area) {
    case "motorway":
      if (speed > motorwayLimit) {
        difference = Math.abs(motorwayLimit - speed);
        if (difference <= 20) {
          status = "speeding";
        } else if (difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
      }
      break;
    case "interstate":
      if (speed > interstateLimit) {
        difference = Math.abs(interstateLimit - speed);
        if (difference <= 20) {
          status = "speeding";
        } else if (difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
      }
      break;
    case "city":
      if (speed > cityLimit) {
        difference = Math.abs(cityLimit - speed);
        if (difference <= 20) {
          status = "speeding";
        } else if (difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
      }
      break;
    case "residential":
      if (speed > residentialArea) {
        difference = Math.abs(residentialArea - speed);
        if (difference <= 20) {
          status = "speeding";
        } else if (difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${residentialArea} - ${status}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a ${residentialArea} zone`);
      }
      break;
  }
}
solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
