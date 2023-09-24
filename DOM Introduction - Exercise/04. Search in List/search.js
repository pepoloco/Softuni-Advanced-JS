function search() {
  let townsRow = document.querySelectorAll("#towns li");
  let input = document.getElementById('searchText').value.toLowerCase();
  let result = document.getElementById('result');

  let matches = 0;
  for (const li of townsRow) {
    let liText = li.textContent.toLowerCase();
    if (liText.includes(input)){
      li.style.fontWeight = 'bolder';
      li.style.fontWeight = 'underline'
      matches++;
    }else{
      li.style.fontWeight ='normal';
      li.style.fontWeight = 'none'
    }
   
  }


  result.textContent = (`${matches} matches found`);
  


}