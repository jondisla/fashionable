import {API_KEY} from './config.js';

window.onload = function() {

    let load_txt = document.getElementById('load_text');

    //womens IDs
    let womensBtn = document.getElementById('womensBtn');
    //mens IDs
    let mensBtn = document.getElementById('mensBtn');
    //Kids IDs
    let kidsBtn = document.getElementById('kidsBtn');
    //Babie IDs
    let babiesBtn = document.getElementById('babiesBtn');

    //Triger Functions on Category btns
    womensBtn.addEventListener('click', loadWomens);
    mensBtn.addEventListener('click', loadMens);
    // kidsBtn.addEventListener('click', loadKids);
    // babiesBtn.addEventListener('click', loadBabies);


function loadWomens(){

    womensBtn.classList.add('active');
    mensBtn.classList.remove('active');
    load_text.style.cssText = "display:block;z-index:0;position:absolute"

    fetch("https://rapidapi.p.rapidapi.com/products/list?category=women-new-arrivals&page=1&pagesize=20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": API_KEY
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
    //get ids
    let pro_pre = document.getElementById('products');

    for (let k in response.CatalogProducts){
        let productName = response.CatalogProducts[k].DisplayName;

        let productImg = response.CatalogProducts[k].ImageFilename;

        pro_pre.innerHTML+= `
        <div class="product_wrap">
            <div class="product_preview"><img src="https://www.forever21.com/images/default_330/${productImg}"></div>
            <div>${productName}</div>
        </div>    
        `
    }
    mensBtn.addEventListener('click', loadMens);
    womensBtn.removeEventListener('click', loadWomens);
    load_text.style.cssText = 'display:none;'
    let test = document.getElementsByClassName('product_wrap');
    test.style.cssText = 'display:none;'

    
    })

    .catch(err => {
        console.error(err);
    });
}

function loadMens(){

    mensBtn.classList.add('active');
    womensBtn.classList.remove('active');
    load_text.style.cssText = "display:block;z-index:0;position:absolute"

    fetch("https://rapidapi.p.rapidapi.com/products/list?category=mens-new-arrivals&page=1&pagesize=20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
		"x-rapidapi-key": API_KEY
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
    //get ids
    let pro_pre = document.getElementById('products');

    for (let k in response.CatalogProducts){
        let productName = response.CatalogProducts[k].DisplayName;

        let productImg = response.CatalogProducts[k].ImageFilename;

        pro_pre.innerHTML+= `
        <div class="product_wrap">
            <div class="product_preview"><img src="https://www.forever21.com/images/default_330/${productImg}"></div>
            <div>${productName}</div>
        </div>    
        `
    }
    womensBtn.addEventListener('click', loadWomens);
    mensBtn.removeEventListener('click', loadMens);
    load_text.style.cssText = 'display:none;'

    let products = document.getElementById('products')
    prodcuts.style.cssText = 'display:none;'
    
    })

    .catch(err => {
        console.error(err);
    });
}



}


/////////////////////Categories////////////////

// fetch("https://rapidapi.p.rapidapi.com/categories/list", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "2c9b89f0a8mshaa5ced2148fb98bp13e9f7jsnc96924d86068"
// 	}
// })
// .then(response=> response.json())
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });