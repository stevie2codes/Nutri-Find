module.exports = function(revisedRecipes) {

    // GET route for getting all of the posts/note modifications
    app.get("/api/posts", function(req, res) {
      var query = {};
      if (req.query.nutri_find_id) {
        query.RecipeId = req.query.recipe_id;
      }
      db.Post.findAll({
        where: query,
        include: [db.revisedRecipes]
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });