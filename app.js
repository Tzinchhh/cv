var express = require("express"),
    app = express();

//you can write render files without ejs
app.set('view engine', 'ejs')

//share public dir with stylesheets
app.use(express.static(__dirname +'/public'))

app.get('/', function(req, res){
    res.render('index');
});    
    
app.listen(process.env.PORT,process.env.IP, function(){
    console.log('Resume start')
});    