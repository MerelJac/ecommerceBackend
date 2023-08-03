
const updateBtnShow = document.querySelector('#updateBtnShow');
const catGetBtn = document.querySelector('#catGetBtn');
const productGetBtn = document.querySelector('#productGetBtn');
const tagGetBtn = document.querySelector('#tagGetBtn');
const printAll = document.querySelector('#printAll');
const findBtn = document.querySelector('#findBtn');
const idSearch = document.querySelector('#idSearch');
const resultSection = document.querySelector('#result')

let passedTerm;
let idSearchValue;
// all categories
catGetBtn.addEventListener('click', () => {
    passedTerm = 'categories';
    fetch('/api/categories/')
    .then((response) => {
        return response.json();
    })
    .then((data) => 
    {data.forEach((element) => {
        const p = document.createElement('p');
        p.textContent = (`id: ${element.id} category_name: ${element.category_name}`)
        printAll.appendChild(p);
    });})
    .catch((err) => {
        console.error(err)
    })
})

// find one category 
findBtn.addEventListener('click', () => {
    idSearchValue = idSearch.value;
    console.log(`/api/${passedTerm}/${idSearchValue}`);
    fetch(`/api/${passedTerm}/${idSearchValue}`).then((response) => {
        return response.json()
    }).then((data) => {
        resultSection.textContent = (`id: ${idSearchValue} was found + ${JSON.stringify(data)
        }`)
        console.log(data)
    })
    .catch((err) => console.error(err))
})
// all products 
productGetBtn.addEventListener('click', () => {
    fetch('/api/products/')
    .then((response) => {
        return response.json();
    })
    .then((data) => 
    {data.forEach((element) => {
        const p = document.createElement('p');
        p.textContent = (`id: ${element.id} product_name: ${element.product_name} price: $${element.price} stock: ${element.stock} category_id: ${element.category_id}`)
        printAll.appendChild(p);
    });})
    .catch((err) => {
        console.error(err)
    })
})

updateBtnShow.addEventListener('click', () => {
    console.log('clicked')
    const updateInfoDiv = document.querySelector('#updateInfoDiv');
    updateInfoDiv.classList.remove('hide');
});


