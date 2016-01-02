// test
var fs = require("fs");

 var content = fs.readFileSync("_data.json");

 var x = JSON.parse(content);

 
 for ( var i in x){
 	
 	var filename = x[i].slug+'.md',
 		title = '<h2>'+ x[i].title + '</h2>',
 		
 		content = '<article>'+title+x[i].content+'</article>';
 	fs.writeFile(filename, content,function (err,data) {
  if (err) {
    return console.log(err);
  }
});
 }
