const mongoose = require('mongoose');
const environments = require('dotenv').config().parsed;

function connectToMongoDb() {
    mongoose.connect(`mongodb://${environments.MONGO_DB_HOST}:${environments.MONGO_DB_PORT}/${environments.MONGO_DB_NAME}`);
}

module.exports = {
    connectToMongoDb
};
