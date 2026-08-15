const serverless = require("serverless-http");
const app = require("../../Server");
const { initialize } = require("../../Config/db");

const expressHandler = serverless(app);

exports.handler = async (event, context) => {
  // A warm Netlify Function reuses this connection; cold starts establish it
  // once before Express handles the request.
  await initialize();
  return expressHandler(event, context);
};
