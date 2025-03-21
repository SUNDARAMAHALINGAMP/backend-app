require('dotenv').config();

const CONFIG = {};

CONFIG.PORT = process.env.port || 5000;
CONFIG.SECRET_KEY = process.env.secret_key || "abcde";
CONFIG.EXPIRY_IN = process.env.expiries_in || "1h";

CONFIG.DB_DIALECT = process.env.DB_DIALECT || 'mysql';
CONFIG.HOST = process.env.DB_HOST || 'localhost';
CONFIG.DB_PORT = process.env.DB_PORT || '3306';
CONFIG.DB_NAME = process.env.DB_NAME || 'record';
CONFIG.DB_USERNAME = process.env.DB_USER || 'root';
CONFIG.DB_PASS = process.env.DB_PASSWORD || 'root';

CONFIG.MAX_POOL_CONN = Number(process.env.MAX_POOL_CONN) || 50;
CONFIG.MIN_POOL_CONN = Number(process.env.MIN_POOL_CONN) || 1;
CONFIG.CONN_IDLE_TIME = Number(process.env.CONN_IDLE_TIME) || 10000;

CONFIG.SENDER_MAIL = process.env.sender_mail || "sundar1432004@gmail.com";
CONFIG.EMAIL_PASS_KEY = process.env.EMAIL_PASS_KEY || "abc def ghi";


module.exports = { CONFIG };