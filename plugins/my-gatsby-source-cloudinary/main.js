const gatsby_node = require ('./gatsby-node.js');
const gatsby = {
  createContentDigest: function (media) {},
  createNodeId: function (id){},
  actions: {createNode: function (nodeData) {return nodeData}}
}

const options = {
  cloudName: 'dwb6ecajn',
  apiKey: '336997989592833',
  apiSecret: 'W543gYzShY4WmphjCCSIPizyTds' ,
  resourceType: `image`,
  prefix: 'cocinaQ/',
  maxResults: 100
};

console.log(gatsby_node.sourceNodes(gatsby, options));

