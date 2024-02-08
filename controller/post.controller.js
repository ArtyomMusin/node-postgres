const db = require('../db')

class PostController {
    async create (req, res) {
        const {title, content, userId} = req.body
        const newPost = await db.query('INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, userId])
        res.json(newPost.rows[0])
    }

    async getPostsByUser (req, res) {
        const { userId } = req.query
        const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [userId])
        res.json(posts.rows)
    }
    async getPostById (req, res) {
        const { id } = req.params
        const post = await db.query('SELECT * FROM post WHERE id = $1', [id])
        res.json(post.rows[0])
    }
}

module.exports = new PostController()