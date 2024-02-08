const router = require('express').Router({ mergeParams: true })
const userRoute = require('../routes/user.route')
const postRoute = require('../routes/post.route')

router.use('/', userRoute)
router.use('/', postRoute)

module.exports = router