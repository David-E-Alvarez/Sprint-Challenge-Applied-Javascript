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
//cards.append(Article());
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => { 
    response.data.articles.javascript.forEach(jsObjElement => {
        //console.log("jsObjElement: ", jsObjElement);
        cards.append(Article(jsObjElement))
    })
    response.data.articles.bootstrap.forEach(bSObjElement => {
        //console.log("jsObjElement: ", jsObjElement);
        cards.append(Article(bSObjElement))
    })
    response.data.articles.technology.forEach(tObjElement => {
        //console.log("jsObjElement: ", jsObjElement);
        cards.append(Article(tObjElement))
    })
    response.data.articles.jquery.forEach(JqObjElement => {
        //console.log("jsObjElement: ", jsObjElement);
        cards.append(Article(JqObjElement))
    })
    response.data.articles.node.forEach(nodeObjElement => {
        //console.log("jsObjElement: ", jsObjElement);
        cards.append(Article(nodeObjElement))
    })
})
.catch(error => {
    console.log("the data was not returned", error)
})
function Article(articleObj){
    //console.log("articleObj.authorPhoto: ", articleObj.authorPhoto);
    const articleCard = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    const author = document.createElement('span');

    articleCard.appendChild(headline);
    articleCard.appendChild(authorDiv);
    authorDiv.appendChild(imageDiv);
    authorDiv.appendChild(author);
    imageDiv.appendChild(image);

    articleCard.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imageDiv.classList.add('img-container');
    //textContent
    headline.textContent = articleObj.headline;
    image.src = articleObj.authorPhoto;
    author.textContent = articleObj.authorName;
    return articleCard;
}