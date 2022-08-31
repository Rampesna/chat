const {serviceResponse} = require("../../helpers/responses");
const IMessageService = require("../../interfaces/IMessageService");
const MessageModel = require("../../models/mongodb/MessageModel");

class MessageService extends IMessageService {
    constructor() {
        super();
    }

    async create(
        senderId,
        message,
        userId = null,
        groupId = null
    ) {
        if (!userId && !groupId) {
            return serviceResponse(
                false,
                'User or group is required',
                null,
                400
            );
        } else {
            MessageModel.create({
                sender_id: senderId,
                message: message,
                userId: userId,
                groupId: groupId
            });

            return serviceResponse(
                true,
                'Message is created',
                {
                    sender_id: senderId,
                    message: message,
                    userId: userId,
                    groupId: groupId
                },
                200
            );
        }
    }
}

module.exports = new MessageService();
