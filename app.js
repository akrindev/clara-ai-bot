/**
 * probot
 * @param {import('probot').Probot} app
 */
const probotApp = (app) => {
  app.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    console.log(context);
    return context.octokit.issues.createComment(
      context.issue({ body: "Hello, World!" })
    );
  });
};

module.exports = probotApp;
