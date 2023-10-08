function solve(input, criteria) {
  let parsed = JSON.parse(input);
  let filtredEmployees;
  let counter = 0;
  let [parameter1, parameter2] = criteria.split('-')
  if (criteria === 'all') {
    parsed.forEach(employee => {
      console.log(`${employee.id}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    });
  }
  else {
    filtredEmployees = parsed.filter(employee => employee[parameter1] === parameter2);
  }
  filtredEmployees.forEach(employee => {
    console.log(`${counter++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
  })
}
solve(
  `[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      },
      {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }]`,
  "gender-Female"
);
solve(`[{
 "id": "1",
 "first_name": "Kaylee",
 "last_name": "Johnson",
 "email": "k0@cnn.com",
 "gender": "Female"
 }, {"id": "2",
 "first_name": "Kizzee",
 "last_name": "Johnson",
 "email": "kjost1@forbes.com",
 "gender": "Female"
 }, {
 "id": "3",
 "first_name": "Evanne",
 "last_name": "Maldin",
 "email": "emaldin2@hostgator.com",
 "gender": "Male"
 }, {
 "id": "4",
 "first_name": "Evanne",
 "last_name": "Johnson",
 "email": "ev2@hostgator.com",
 "gender": "Male"
 }]`,
  'last_name-Johnson'

)