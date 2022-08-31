class IMessageService {
    constructor() {
        if (!this.create) {
            throw new Error('IMessageService.create is not implemented');
        }
    }
}

module.exports = IMessageService;
