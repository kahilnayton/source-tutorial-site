const axios = require('axios');

// Load the api key as an environment variable
// This line is used to use different .env for development and production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

// Send a call to the api to retrieve events

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const result = await axios({
    method: "GET",
    url: "https://newsapi.org/v2/everything?q=bitcoin&apiKey=8ff8c1536f0645d68c258fc65e3a77b8",
    // params: {
    //   key: process.env.NEWS_API_KEY,
    //   q: "bitcoin",
    // },
  }).catch(error => {
    console.error(error.message);
  });
  
  
  const articles = result.data.articles
  // console.log(result.data.articles);
  console.log(articles);

  articles.forEach(article => {
    const node = {
      ...article,
      id: createNodeId(`NewsArticle-${article.id}`), // No set way to do this 
      internal: {
        type: 'NewsArticle',
        contentDigest: createContentDigest(article),
      }
    };

    actions.createNode(node);
  })
  //   const nodeData = {
  //     title: "Test Node",
  //     description: 'This is a test',

  //   };
  //   const newNode = {
  //     ...nodeData,
  //     id: createNodeId('TestNode-testid'), // id is is required and you can pass anything you want as long as it's unique
  //     internal: {
  //       type: 'TestNode', // Required by gatsby
  //       contentDigest: createContentDigest(nodeData), // Required by gatsby
  //     },
  //   };

  //   actions.createNode(newNode)
};
// Create gatsby nodes using the response
// Create page to show
// Create individual pages ect
