const dotenv = require('dotenv');

dotenv.config();

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.ynmawcy.mongodb.net/ScholarFund?retryWrites=true&w=majority`;

module.exports = {
  MONGO_URL,
  connectionParams,
};
