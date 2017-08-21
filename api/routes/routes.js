/* eslint-disable */
module.exports = (app) => {
  const controllerMethods = require('../controllers/postsController');

  app.route('/posts')
    .get(controllerMethods.listPosts)
    .post(controllerMethods.createPost);

  app.route('/posts/:id')
      .delete(controllerMethods.deletePost);

  app.route('/posts/:id/comments')
    .post(controllerMethods.addComment);

  app.route('/posts/:id/comments/:commentId')
      .delete(controllerMethods.deleteComment);
};
