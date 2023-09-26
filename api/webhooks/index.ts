import { createNodeMiddleware, createProbot } from "probot";
import { probotApp } from "../../app";

const probot = createProbot();

module.exports = createNodeMiddleware(probotApp, {
  probot,
  webhooksPath: "/api/github/webhooks",
});
