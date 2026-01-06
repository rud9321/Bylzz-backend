// Comment Controller

const CommentsModel = require('../model/commentsModel');

// Create a new comment
exports.createComment = async (req, res) => {
  try {
    const { RecieptNumber, Comment,CommentType } = req.body;
    if (!RecieptNumber) {
      return res.status(400).json({ message: 'RecieptNumber is required.' });
    }

    const newComment = await CommentsModel.create({ RecieptNumber, Comment,CommentType });
    return res.status(201).json(newComment);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating comment', error: error.message });
  }
};

// Get all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await CommentsModel.find();
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving comments', error: error.message });
  }
};

// Get comment by RecieptNumber
exports.getCommentByRecieptNumber = async (req, res) => {
  try {
    const { recieptNumber } = req.params;
    const comment = await CommentsModel.findOne({ RecieptNumber: recieptNumber });
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving comment', error: error.message });
  }
};

// Update comment by RecieptNumber
exports.updateComment = async (req, res) => {
  try {
    const { recieptNumber } = req.params;
    const { Comment } = req.body;
    const updatedComment = await CommentsModel.findOneAndUpdate(
      { RecieptNumber: recieptNumber },
      { Comment },
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    return res.status(200).json(updatedComment);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating comment', error: error.message });
  }
};

// Delete comment by RecieptNumber
exports.deleteComment = async (req, res) => {
  try {
    const { recieptNumber } = req.params;
    const deleted = await CommentsModel.findOneAndDelete({ RecieptNumber: recieptNumber });
    if (!deleted) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    return res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting comment', error: error.message });
  }
};
