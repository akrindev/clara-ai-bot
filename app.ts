import { Probot } from "probot";

export const probotApp = (app: Probot) => {
  app.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Hello, World!" })
    );
  });
};

module.exports = probotApp;
