function solve() {
    let columns = document.querySelectorAll('tbody tr');
    document.getElementById('searchBtn').addEventListener('click', onClick);
    function onClick(){
        let searchField = document.getElementById('searchField').value.toLowerCase();
        for (const row of columns) {
            const textToLower = row.textContent.toLowerCase();
            if(textToLower.includes(searchField)){
                row.setAttribute("class","select");
            }else{
                row.removeAttribute('class')
            }
        }
    }
   
}
