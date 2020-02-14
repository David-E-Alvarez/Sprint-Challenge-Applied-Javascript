// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cards = document.querySelector('.cards-container');
function createArticle(string){
    //elements
    const articleCard = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');
    //element structure
    articleCard.appendChild(headline);
    articleCard.appendChild(author);
    author.appendChild(imageDiv);
    author.appendChild(authorName);
    imageDiv.appendChild(image);
    //textContent
    headline.textContent = string.headline;
    //console.log("string: ", string.headline);
    return articleCard;


}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    //console.log("response.data: ",  response.data);
    /*response.data.topics.forEach(element => {
        console.log("element: ",element);
        topics.append(Tab(element))
    });*/
    //console.log("response.data.article: ", response.data.articles);
    response.data.articles.javascript.forEach(element => {
        cards.append(createArticle(element))
        console.log("element: " + element);
    })

})
.catch(error => {
    console.log("the data was not returned", error)
})