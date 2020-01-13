const fetch = require('node-fetch');
const queryString = require('query-string');

exports.sourceNodes = async (
  { boundActionCreators: { createNode }, createNodeId, createContentDigest },
  { plugins, ...options }
) => {
  const apiUrl = `https://newsapi.org/v2/everything?${queryString.stringify(options)}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  data.hits.forEach(news => {
    createNode({
      ...news,
      id: createNodeId(`pixabay-news-${news.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Pixabaynews',
        content: JSON.stringify(news),
        contentDigest: createContentDigest(news)
      }
    });
    console.log("news data is:", news)
  });
};



