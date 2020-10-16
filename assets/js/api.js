import {API_KEY} from './config.js';

window.onload = function() {

    let womensBtn = document.getElementById('womensBtn');

    //Triger Functions on Category btns
    womensBtn.addEventListener('click', loadWomens)    

function loadWomens(){
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
    let pro_pre = document.getElementById('product_preview')


    let product_img = response.response.docs[0].thumb_image;
    pro_pre.innerHTML = `<img src = ${product_img}>`;
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