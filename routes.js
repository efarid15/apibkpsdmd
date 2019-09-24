'use strict';

module.exports = function(app) {
    const users = require('./controller/users');
    const auth = require('./controller/auth');
    const bkd = require('./controller/bkd');

    app.route('/login')
        .post(auth.login)

    app.route('/me')
        .get(auth.me);    

    app.route('/')
        .get(users.index);

    app.route('/users')
        .get(users.users);

    app.route('/users/:user_id')
        .get(users.findUsers);

    app.route('/users')
        .post(users.createUsers);

    app.route('/users')
        .put(users.updateUsers);

    app.route('/users')
        .delete(users.deleteUsers);
    
        app.route('/')
        .get(bkd.index);

    app.route('/bkd')
        .get(bkd.listBkd);

    app.route('/bkd/:bkd_id')
        .get(bkd.findBkd);

    app.route('/bkd')
        .post(bkd.createBkd);

    app.route('/bkd')
        .put(bkd.updateBkd);

    app.route('/bkd')
        .delete(bkd.deleteBkd);
};