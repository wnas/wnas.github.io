// test
var fs = require("fs");

 var content = fs.readFileSync("_data.json");

 var x = JSON.parse(content);

 
 for ( var i in x){
 	var date = new Date(x[i].pubdate*1000),
 		day = '<span class="day">'+date.getDate()+'</span>',
 		month = '<span class="month">'+(date.getMonth()+1)+'</span>',
 		year = '<span class="year">'+date.getFullYear()+'</span>';

 	var filename = x[i].slug+'.md',
 		title = '<h1>'+ x[i].title + '</h1>',
 		date = '<time>'+day + month + year+'</time>',
 		
 		content = '<article>'+title+date+x[i].content+'</article>';
 	fs.writeFile(filename, content,function (err,data) {
  if (err) {
    return console.log(err);
  }
});
 }
