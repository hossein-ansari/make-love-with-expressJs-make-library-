const commentsModel = require('../models/comment')
exports.create = async (req,res) => {
    const {body ,userId} = req.body

    commentsModel.create({
        body,
        userId,
    })
    res.status(200).json({massage:'comment gozashti'})
}
exports.getAll = async (req, res) => {
  const comments = await commentsModel.find({}).populate('userId');
  res.status(200).json(comments);
};