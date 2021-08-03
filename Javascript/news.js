console.log("News");
const container = document.getElementById('container');
const row = document.getElementById('row');

// Fetch Api
getNews('https://newsapi.org/v2/top-headlines?country=in&apiKey=cf30b692fd6847c5a718aadaf442fe14')

let category="";
 
let categoryBtn = document.querySelectorAll('.category');
categoryBtn.forEach(element => {
  element.addEventListener('click',()=>{
    category=element.id;
    
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=cf30b692fd6847c5a718aadaf442fe14`;
    console.log(category);
    getNews(url);
  })
});
 
let top1=document.getElementById('top');
top1.addEventListener('click',()=>{
  
  getNews('https://newsapi.org/v2/top-headlines?country=in&apiKey=cf30b692fd6847c5a718aadaf442fe14');
})

function getNews(url){
    fetch(url).then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data);
        let articles = data.articles;
        let html = "";

        articles.forEach(element => {
            console.log(element.urlToImage);
            if(element.urlToImage !=null){
            html+=`
            <div class="col">
            <div class="card m-1 cards"  >
              <img src="${element.urlToImage}" class="card-img-top img" alt="${element.urlToImage}" />
              <div class="card-body">
                <h5 class="card-text">
                  ${element.title}
                </h5>
                <a href="${element.url}" class="btn btn-outline-primary"  target ="_blank">Read more..</a>
              </div>
            </div>
          </div>
            `
            row.innerHTML = html;
            }
        });


    })
    .catch(err=>{
        console.log("Error occured",err);
    })
}

