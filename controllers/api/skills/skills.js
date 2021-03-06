const authService = require('../../../services/auth'),
      skillsService = require('../../../services/skillsService');

class Skills {
    constructor(router) {
        router.get('/languages', authService.authenticateUser.bind(this), skillsService.getAllLanguages.bind(this));
        router.get('/software', authService.authenticateUser.bind(this), skillsService.getAllSoftware.bind(this));
        router.get('/specializations', authService.authenticateUser.bind(this), skillsService.getAllSpecializations.bind(this));
        router.get('/certifications', authService.authenticateUser.bind(this), skillsService.getAllCertifications.bind(this));
    }
}

module.exports = Skills;