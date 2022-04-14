module.exports = {
  development: {
    type: 'development',
    port: 3000,
    mongodb: 'mongodb+srv://xzen:<password>@cluster0.sprwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'          
  },
  production: {
    type: 'production',
    port: 3000,
    mongodb: 'mongodb+srv://xzen:<password>@cluster0.sprwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  }
}