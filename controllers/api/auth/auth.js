const authService = require('../../../services/auth');

class Some {
    constructor(router) {
        router.post('/login', authService.loginUser.bind(this));
        router.post('/register', authService.registerUser.bind(this));
        router.get('/id', authService.authenticateUser.bind(this), authService.getUserID.bind(this));
    }
}

module.exports = Some;