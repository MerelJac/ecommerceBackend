const updateBtnShow = document.querySelector('#updateBtnShow');
const catGetBtn = document.querySelector('#catGetBtn');
const productGetBtn = document.querySelector('#productGetBtn');
const tagGetBtn = document.querySelector('#tagGetBtn');
const printAll = document.querySelector('#printAll');
const findBtn = document.querySelector('#findBtn');
const idSearch = document.querySelector('#idSearch');
const resultSection = document.querySelector('#result')
const deleteBtn = document.querySelector('#deleteBtn');
const updateBtn = document.querySelector('#updateBtn');
const updateText = document.querySelector('#updateText');

let passedTerm;
let idSearchValue;
// all categories
catGetBtn.addEventListener('click', () => {
    // clear print section
    printAll.textContent = '';
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

// all products 
productGetBtn.addEventListener('click', () => {
    // clear print section
    printAll.textContent = '';
    passedTerm = 'products';
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
});

// all tags 
tagGetBtn.addEventListener('click', () => {
    // clear print section
    printAll.textContent = '';
    passedTerm = 'tags';
    fetch('/api/tags/')
    .then((response) => {
        return response.json();
    })
    .then((data) => 
    {data.forEach((element) => {
        const p = document.createElement('p');
        p.textContent = (`id: ${element.id} tag_name: ${element.tag_name}`)
        printAll.appendChild(p);
    });})
    .catch((err) => {
        console.error(err)
    })
})

// show update text input
updateBtnShow.addEventListener('click', () => {
    console.log('clicked')
    const updateInfoDiv = document.querySelector('#updateInfoDiv');
    updateInfoDiv.classList.remove('hide');
});

// find one category 
findBtn.addEventListener('click', () => {
    //clear resutls section
    resultSection.textContent = '';
    idSearchValue = idSearch.value;
    // clear
    idSearch.value = ''
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

// delete one index
deleteBtn.addEventListener('click', () => {
    //clear resutls section
    resultSection.textContent = '';
    idSearchValue = idSearch.value;
    // clear
    idSearch.value = ''
    let name;
    if (passedTerm == 'categories') {name == 'category'} else if (passedTerm == 'products') {
        name == 'product'
    } else if (passedTerm == 'tags') { name == 'tag'} else {console.log('error in')}
    console.log(`/api/${passedTerm}/${idSearchValue}`);
    fetch(`/api/${passedTerm}/${idSearchValue}`, {
        method: 'DELETE'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        resultSection.textContent = (`id: ${idSearchValue} was deleted`)
        console.log(data)
    })
    .catch((err) => console.error(err))
})

// update name
updateBtn.addEventListener('click', () => {
    //clear resutls section
    resultSection.textContent = '';
    idSearchValue = idSearch.value;
    // clear
    idSearch.value = ''
    let updateTextValue = updateText.value;
    let name;
    if (passedTerm == 'categories') {name = 'category_name'} else if (passedTerm == 'products') {
        name = 'product_name'
    } else if (passedTerm == 'tags') { name = 'tag_name'} else {console.log('error in converting name')}
    console.log(`/api/${passedTerm}/${idSearchValue}`);
    fetch(`/api/${passedTerm}/${idSearchValue}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({[name]: updateTextValue})
    }).then((response) => {
        return response.json()
    }).then((data) => {
        resultSection.textContent = (`id: ${idSearchValue} was udpated`)
        console.log(data)
    })
    .catch((err) => console.error(err))
})

// create name
updateBtn.addEventListener('click', () => {
    //clear resutls section
    resultSection.textContent = '';
    idSearchValue = idSearch.value;
    let updateTextValue = updateText.value;
    let name;
    if (passedTerm == 'categories') {name = 'category_name'} else if (passedTerm == 'products') {
        name = 'product_name'
    } else if (passedTerm == 'tags') { name = 'tag_name'} else {console.log('error in converting name')}
    console.log(`/api/${passedTerm}/${idSearchValue}`);
    fetch(`/api/${passedTerm}/${idSearchValue}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({[name]: updateTextValue})
    }).then((response) => {
        return response.json()
    }).then((data) => {
        resultSection.textContent = (`id: ${idSearchValue} was udpated`)
        console.log(data)
    })
    .catch((err) => console.error(err))
})

