function solve() {
  //capture elements
  const table = document.querySelector('table.table tbody');
  const [input, output] = [...document.querySelectorAll('textarea')]
  const [generateBtn, buyBtn] = [...document.querySelectorAll('button')]

  //attach events
  generateBtn.addEventListener('click', generate)
  buyBtn.addEventListener('click', buy)

  //helper functions
  function paragraph(...content) {
    return createElemenet('p', {}, ...content)
  }
  function td(...content) {
    return createElemenet('td', {}, ...content)
  }

  function createElemenet(type, props, ...content) {
    const element = document.createElement(type);
    for (const prop in props) {
      element[prop] = props[prop];
    }
    for (const entry of content) {
      if (typeof entry === 'string' || typeof entry === 'number') {
        entry = document.createTextNode(entry);
      }
      element.appendChild(entry);
    }
    return element;
  }

  //on click 
  const items = [];
  function generate(e) {
    const data = JSON.parse(input.value);
    for (const item of data) {
      //create checkbox
      const checkbox = createElemenet('input', { type: 'checkbox' });
      //create row
      const { img, name, price, decFactor } = item;
      const row = createElemenet('tr', {},
        td(createElemenet('img', { src: img })),
        td(p(name)),
        td(p(price)),
        td(p(decFactor)),
        td((checkbox))
      );
      items.push({ element: row, isChecked, item });
      function isChecked() {
        return checkbox.isChecked
      }
      table.append(row);
    }
  }
  function buy(e) {
    const furniture = items.filter((i) => i.isChecked()).reduce((acc, { item: c }, i, a) => {
      acc.names.push(c.name);
      acc.total += Number(c.price);
      acc.decFactor += Number(c.decFactor) / a.length;
      return acc;
    }, { names: [], total: 0, decFactor: 0 });
    const result = `Bought furniture: ${furniture.names.join(', ')}
    Total price: ${furniture.total.toFixed(2)}
    Average Decoration factor: ${furniture.decFactor}`;
    
    output.value = result;
  }
}