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
        db.query('select * from bkd', (error, data) => {
            if (error) return res.status(500).json({type: 'error', message: 'db error', error})
            if (data.length == 0) return res.status(404).json({type: 'error', message: 'Data tidak ditemukan'})
            return res.json({
                type: 'success',
                message: 'data sukses',
                data
            })
        })
    })

    routes.get('/bkd/:bkdid', (req, res) => {
        const bkdid = req.params.bkdid
        db.query('select * from bkd where id=?',[bkdid], (error, data) => {
            if (error) return res.status(500).json({type: 'error', message: 'db error', error})
            if (data.length == 0) return res.status(404).json({type: 'error', message: 'Data tidak ditemukan'})
            return res.json({
                type: 'success',
                message: 'data sukses',
                data
            })
        })
    })

    routes.post('/bkd', (req, res) => {
        const bkdnama = req.body.bkdnama
        const bkdalamat = req.body.bkdalamat
        const bkdnotelp = req.body.bkdnotelp
        const bkdkabupaten = req.body.bkdkabupaten

        db.query('insert into bkd(namabkd, alamat, kabupaten, notelp) values(?,?,?,?)',
            [bkdnama, bkdalamat, bkdkabupaten, bkdnotelp], (error, results) => {
            if (error) return res.status(500).json({type: 'error', message: 'db error', error})
            return res.json({
                type: 'success',
                message: 'data berhasil disimpan'
            })
        })
    })

    routes.put('/bkd', function (req, res) {
        const bkdid = req.body.bkdid
        const bkdnama = req.body.bkdnama
        const bkdalamat = req.body.bkdalamat
        const bkdnotelp = req.body.bkdnotelp
        const bkdkabupaten = req.body.bkdkabupaten

        db.query('update bkd set namabkd = ?, alamat = ?, kabupaten = ?, notelp = ? where id=? ',
            [bkdid, bkdnama, bkdalamat, bkdkabupaten, bkdnotelp], (error, results) => {
                if (error) return res.status(500).json({type: 'error', message: 'db error', error})
                return res.json({
                    type: 'success',
                    message: 'data berhasil diupdate'
                })
            })
    });

    routes.delete('/bkd', function (req, res) {
        const bkdid = req.body.bkdid

        db.query('delete from bkd where id = ?',
            [bkdid], (error, results) => {
                if (error) return res.status(500).json({type: 'error', message: 'db error', error})
                return res.json({
                    type: 'success',
                    message: 'data berhasil dihapus'
                })
            })
    });



    return routes
}