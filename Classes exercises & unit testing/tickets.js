function travel(data, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = +price;
      this.status = status;
    }
  }

  let copyData = [...data];
  const splittedArr = copyData.map((x) => x.split("|"));
  const ticketList = splittedArr.map(([destination, price, status]) => {
    return new Ticket(destination, +price, status);
  });
  const sortedTickets = ticketList.sort((a, b) => {
    return typeof a[criteria] === "number"
      ? a[criteria] - b[criteria]
      : a[criteria].localeCompare(b[criteria]);
  });

  return sortedTickets;
}
console.log(
  travel(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);
