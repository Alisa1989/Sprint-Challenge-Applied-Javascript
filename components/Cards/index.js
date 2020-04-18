// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then( function (response) {
        console.log(response);
        //console.log(response.data.articles.javascript[1].headline);
        
        const articleSubjects = Object.keys(response.data.articles);
        console.log(articleSubjects[0]);

        console.log(response.data.articles.javascript[1].headline)
       // console.log(response.data.articles.articleSubjects[0]);
        console.log(response.data.articles.javascript[1])


        // articleSubjects.forEach( element => {
        //     console.log(response.data.articles.element);
        // })
        
        // response.data.articles.forEach(element => {
        //     //createCard(element);
        //     console.log(element);
        // });
    })
    .catch( function (error) {
        console.log("The data was not returned!", error);
    })

function createCard(element) 
{
    const card = document.createElement('div');
    card.classList.add('card');
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = element.headline;
    const author = document.createElement('div');
    author.classList.add('author');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    const image = document.createElement('img');
    image.src = element.authorPhoto;
    const by = document.createElement('span');
    by.textContent = `By ${element.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(by);

  //  console.log(card);
    return card;
}

