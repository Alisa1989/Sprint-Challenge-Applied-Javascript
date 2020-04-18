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
    .then( function (response) 
    {
        console.log(response);
        // Javascript
         for(let i = 0; i < response.data.articles.javascript.length; i++)
         {
            createCard(response.data.articles.javascript[i]);
         }
        //bootstrap
         for(let i = 0; i < response.data.articles.bootstrap.length; i++)
         {
            createCard(response.data.articles.bootstrap[i]);
         }
        //technology
         for(let i = 0; i < response.data.articles.technology.length; i++)
         {
            createCard(response.data.articles.technology[i]);
         }
         //jquery
         for(let i = 0; i < response.data.articles.jquery.length; i++)
         {
            createCard(response.data.articles.jquery[i]);
         }
         //node 
         for(let i = 0; i < response.data.articles.node.length; i++)
         {
            createCard(response.data.articles.node[i]);
         }

         //I know I could use the following but couldn't implement it
         //console.log(Object.keys(response.data.articles));

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

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.appendChild(card);

  //  console.log(card);
    return card;
}

