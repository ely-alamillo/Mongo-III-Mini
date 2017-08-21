/* eslint-disable */
const mongoose = require('mongoose');

const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment');

const STATUS_USER_ERROR = 422;

/* Fill in each of the below controller methods */
const createPost = (req, res) => {
  // console.log(here);
  const { title, text } = req.body;
  if (!title || !text) {
    res.status(STATUS_USER_ERROR);
    res.send({ err: 'error'});
  }
  const post = new Post({ title, text });
  post.save((err) => {
    if (err) {
      res.status(STATUS_USER_ERROR);
      res.json(err);
    }
    res.json(post);
  });
};

const listPosts = (req, res) => {

};

const findPost = (req, res) => {

};

const addComment = (req, res) => {

};

const deleteComment = (req, res) => {

};

const deletePost = (req, res) => {

};

module.exports = {
    createPost,
    listPosts,
    findPost,
    addComment,
    deleteComment,
    deletePost
};
