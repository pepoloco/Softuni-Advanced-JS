function create(words) {

   const content = document.getElementById('content');

   words.forEach(word => {
      const paragraph = document.createElement('p');
      const div = document.createElement('div');
      paragraph.style.display = 'none'
      paragraph.textContent = word
      div.appendChild(paragraph);
      div.addEventListener('click',onClick);
      content.appendChild(div)

      
   });
   function onClick(e) {
      e.target.children[0].style.display = 'block'

   }

}