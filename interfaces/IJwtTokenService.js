class IJwtTokenService {
    constructor() {
        if (!this.generateToken) {
            throw new Error('IJwtTokenService.generateToken is not implemented');
        }

        if (!this.validateToken) {
            throw new Error('IJwtTokenService.generateToken is not implemented');
        }
    }
}

module.exports = IJwtTokenService;
