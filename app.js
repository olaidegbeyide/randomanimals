
let cat_result = document.getElementById('cat-result');
let dog_result = document.getElementById('dog-result');
let fox_result = document.getElementById('fox-result');
let get_cat = document.getElementById('cat-btn');
let get_dog = document.getElementById('dog-btn');
let get_fox = document.getElementById('fox-btn');

get_cat.addEventListener('click', loadCat)
get_dog.addEventListener('click', loadDog)
//get_fox.addEventListener('click', loadFox)

var loadCat = async () => {
   await fetch("https://aws.random.cat/meow")
    .then(res => res.json())
    .then(data => {
        cat_result.innerHTML=`<img src="${data.file}"/>`
    })
    
}
loadCat()

var loadDog = async () => {
     await fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then(data => {
        dog_result.innerHTML=`<img src="${data.url}"/>`
    })
    
}
loadDog()

// var loadFox = async () => {
//     await fetch("https://randomfox.ca/floof/")
//     .then(res => res.json())
//     .then(data => {
//         fox_result.innerHTML= `<img src="${data.link}"/>`
//     })
//     .catch(err => console.log(err))
    
// }
// loadFox()