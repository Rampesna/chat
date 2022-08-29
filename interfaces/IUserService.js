class IUserService {
    constructor() {
        if (!this.login) {
            throw new Error('IUserService.login is not implemented');
        }

        if (!this.getAll) {
            throw new Error('IUserService.getAll is not implemented');
        }

        if (!this.getById) {
            throw new Error('IUserService.getById is not implemented');
        }
    }
}

module.exports = IUserService;
