const serverless = require("serverless-http");
const app = require("../../Server");
const { initialize } = require("../../Config/db");

const expressHandler = serverless(app);

exports.handler = async (event, context) => {
  try {
    await initialize();

    return await expressHandler(event, context);
  } catch (error) {
    console.error("Backend error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Backend initialization failed",
        message: error.message,
      }),
    };
  }
};
