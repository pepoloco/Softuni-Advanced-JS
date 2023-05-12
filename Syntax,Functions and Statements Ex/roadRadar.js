function roadRadar(speed, area) {
  /* On the motorway, the limit is 130 km/h
 On the interstate, the limit is 90 km/h
 In the city, the limit is 50 km/h
 Within a residential area, the limit is 20 km/h
*/
  let status = "";
  let speedLimit = 0;
  let difference = 0;
  switch (area) {
    case "motorway":
      speedLimit = 130;
      if (speed <= 130) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else {
        difference = speed - speedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
    case "interstate":
      speedLimit = 90;
      if (speed <= 90) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else {
        difference = speed - speedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
    case "city":
      speedLimit = 50;
      if (speed <= 50) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else {
        difference = speed - speedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
    case "residential":
      speedLimit = 20;
      if (speed <= 20) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else {
        difference = speed - speedLimit;
        if (difference <= 20) {
          status = "speeding";
        } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      break;
      20;
  }
}
roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
