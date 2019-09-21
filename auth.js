module.exports = ({db, express, bcrypt, jwt, config}) => {
    const routes = express.Router()

    routes.post('/login', (req, res) => {
        const email = req.body.email
        const password = req.body.password
        if (!email || !password) return res.status(400).json({type: 'error', message: 'email dan password harus diisi'})
        db.query('select * from `v_users` where `email`=?', email, (error, results) => {
            if (error) return res.status(500).json({type: 'error', message: 'db error', error})
            if (results.length == 0) return res.status(403).json({type: 'error', message: 'User tidak ditemukan'})
            const user = results[0]
            bcrypt.compare(password, user.password, (error, result) => {
                if (error) return res.status(500).json({type: 'error', message: 'enkripsi error', error})
                if (result) {
                    res.json({
                        type: 'success',
                        message: 'User berhasil login',
                        user: {id: user.id, email: user.email, nama:user.nama, roleuser:user.role},
                        token: jwt.sign({id: user.id, email: user.email}, config.jwtToken, {expiresIn: '7d'})
                    })
                } else return res.status(403).json({type: 'error', message: 'Password salah.'})
            })
        })
    })

    routes.get('/me', (req, res) => {
        const token = req.headers['x-access-token']
        if (!token) return res.status(400).json({type: 'error', message: 'x-access-token header tidak ditemukan.'})
        jwt.verify(token, config.jwtToken, (error, result) => {
            if (error) return res.status(403).json({type: 'error', message: 'Token yang diberikan salah.', error})
            return res.json({
                type: 'success',
                message: 'token yang diberikan benar.',
                result
            })
        })
    })

    routes.get('/bkd', (req, res) => {
        db.query('select * from bkd', (error, results) => {
            if (error) return res.status(500).json({type: 'error', message: 'db error', error})
            if (results.length == 0) return res.status(403).json({type: 'error', message: 'Data tidak ditemukan'})
            return res.json({
                type: 'success',
                message: 'data sukses',
                results
            })
        })
    })



    return routes
}