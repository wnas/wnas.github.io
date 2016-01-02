// test
var fs = require("fs");

console.log('start');

 var content = fs.readFileSync("_data.json");

 var x = JSON.parse(content);
 console.log(x);
 
 for ( var i in x){
 	var next = '',
 		prev = '';
 	if (x[x+1] !== null){
 		next = '<a href="'+x[i+1].slug+'.html">'+x[i+1].title+'</a>'
 	}
 	if (x[x-1] !== null){
 		next = '<a href="'+x[i-1].slug+'.html">'+x[i-1].title+'</a>'
 	}
 	var filename = x[i].slug+'.md',
 		title = '<h2>'+ x[i].title + '</h2>',
 		nav = '<nav>'+prev+next+'</nav>',
 		content = '<article>'+title+nav+x[i].content+'</article>';
 	fs.writeFile(filename, content,function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
 }

 // console.log("Output Content : \n"+ content);
 console.log("\n *EXIT* \n");