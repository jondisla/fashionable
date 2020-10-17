import {API_KEY} from './config.js';

window.onload = function() {

    //get IDs
    let womensBtn = document.getElementById('womensBtn');
    let load_txt = document.getElementById('load_text');

    //Triger Functions on Category btns
    womensBtn.addEventListener('click', loadWomens);


function loadWomens(){

    womensBtn.classList.add('active');
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
        ///////////////////////////////
        // let prev_img = document.createElement('img');
        // prev_img.append(productImg)
        // ///////////////////////////////
        // let prev = document.createElement('div')
        // prev.classList.add('product_preview')
        // prev.append(productName)

        // pro_pre.append(prev)

        pro_pre.innerHTML+= `
        <div class="product_wrap">
            <div class="product_preview"><img src="https://www.forever21.com/images/default_330/${productImg}"></div>
            <div>${productName}</div>
        </div>    
        `
    }
    womensBtn.removeEventListener('click', loadWomens);
    load_text.style.cssText = 'display:none;'
    
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