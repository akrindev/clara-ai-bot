import { createNodeMiddleware, createProbot } from "probot";

const app = require("../../app");
const probot = createProbot();

module.exports = createNodeMiddleware(app, {
  probot,
  webhooksPath: "/api/github/webhooks",
});
