const catShowAll = document.querySelector('#categoryShowAll');

catShowAll.addEventListener('click', () => {
    fetch('/api/categories/').then((response) => response.json()).then((data) => console.table(data))
})