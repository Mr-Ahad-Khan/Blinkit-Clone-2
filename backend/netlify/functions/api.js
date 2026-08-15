const serverless = require("serverless-http");
const app = require("../../Server");
const { initialize } = require("../../Config/db");

let dbInitialized = false;
let dbPromise;

const handler = async (event, context) => {
  if (!dbInitialized) {
    if (!dbPromise) {
      dbPromise = initialize();
    }

    await dbPromise;
    dbInitialized = true;
  }

  return serverless(app)(event, context);
};

module.exports.handler = handler;
