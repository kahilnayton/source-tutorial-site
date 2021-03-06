const fetch = require('node-fetch');
const queryString = require('query-string');

exports.sourceNodes = async (
  { boundActionCreators: { createNode }, createNodeId, createContentDigest },
  { plugins, ...options }
) => {
  const apiUrl = `https://medi-api.herokuapp.com/api/v1/drugs/`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log("Data", data)

  data.forEach(drug => {
    createNode({
      ...drug,
      id: createNodeId(`drug-${drug.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'drug',
        content: JSON.stringify(drug),
        contentDigest: createContentDigest(drug)
      }
    });
      console.log("Drugs", drug)
  });
};
