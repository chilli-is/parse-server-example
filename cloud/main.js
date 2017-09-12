
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.beforeSave("Project", function(request, response) {
 
  if (!request.object.get("title")) {
    response.error("A title is required for a project.");
  } else {
    response.success();
  }

});