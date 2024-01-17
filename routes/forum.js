var express = require('express');
var router = express.Router();
const Forum = require('../model/forum.js')
const Comment = require('../model/comment.js')

router.get('/', async function (req, res, next) {
  try {
    const forum = await Forum.find();

    res.render('forum/view_forum', {
      title: 'Express',
      forum
    })
  } catch (error) {
    console.log('Error FIND >>> ' + error);
  }
});

router.post('/create', async function (req, res, next) {
  try {
    console.log('berhasil ke dalam proses create');
    const { name, question } = req.body
    console.log(name, question);

    let forum = await Forum({ name, question })
    await forum.save()

    console.log('data forum>>>' + forum);
    res.redirect('/forum')
  } catch (error) {
    console.log('Error Create >>> ' + error);
  }
});

router.get('/detail/:id', async function (req, res, next) {
  try {
    const { id } = req.params;

    const forum = await Forum.findOne({ _id: id })

    const comment = await Comment.find({ question: id })
    res.render('forum/detail', {
      title: 'Ikhwan',
      forum,
      comment
    })
  } catch (error) {
    console.log('Error GET ID TO DETAIl >>> ' + error);
  }
})

router.post('/comment', async function (req, res, next) {
  try {
    console.log('berhasil ke dalam proses update');
    const { _id, name, answer } = req.body;

    let comment = await Comment({
      name: name,
      answer: answer,
      question: _id
    })
    await comment.save()

    res.redirect(`/forum/detail/${_id}`)
  } catch (error) {
    console.log('Error UPDATE >>> ' + error);
  }
});

module.exports = router;