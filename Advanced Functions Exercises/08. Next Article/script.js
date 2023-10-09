function getArticleGenerator(articles) {
    let initialArr = articles;
    let currentIndex = 0;
    function solve() {
        if (currentIndex >= initialArr.length) {
            return;
        }
        let article = document.getElementById('content');
        article.textContent = initialArr[currentIndex]
        currentIndex++;
    }

    return solve;
}