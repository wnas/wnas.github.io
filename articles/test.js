// test
var fs = require("fs");

 var content = fs.readFileSync("_data.json");

 var x = JSON.parse(content);

 
 for ( var i in x){
 	var date = new Date(x[i].pubdate*1000),
 		day = '<span class="day">'+date.getDay()+'</span>',
 		month = '<span class="month">'+date.getMonth()+'</span>',
 		year = '<span class="year">'+date.getYear()+'</span>';

 	var filename = x[i].slug+'.md',
 		title = '<h2>'+ x[i].title + '</h2>',
 		date = '<time>'+day + month + year+'</time>',
 		
 		content = '<article>'+title+date+x[i].content+'</article>';
 	fs.writeFile(filename, content,function (err,data) {
  if (err) {
    return console.log(err);
  }
});
 }
