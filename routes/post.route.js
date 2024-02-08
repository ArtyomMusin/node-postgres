const router = require('express').Router({ mergeParams: true })
const postController = require('../controller/post.controller')

router.post('/post', postController.create)
router.get('/post', postController.getPostsByUser)
router.get('/post/:id', postController.getPostById)

module.exports = router
