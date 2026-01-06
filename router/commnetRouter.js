const express = require('express');
const CommentController = require('../controller/commentController');

const CommentRouter = express.Router();

// Create a new comment
CommentRouter.post('/', CommentController.createComment);

// Get all comments
CommentRouter.get('/', CommentController.getAllComments);

// Get comment by RecieptNumber
CommentRouter.get('/:recieptNumber', CommentController.getCommentByRecieptNumber);

// Update comment by RecieptNumber
CommentRouter.put('/:recieptNumber', CommentController.updateComment);

// Delete comment by RecieptNumber
CommentRouter.delete('/:recieptNumber', CommentController.deleteComment);

module.exports = CommentRouter;
