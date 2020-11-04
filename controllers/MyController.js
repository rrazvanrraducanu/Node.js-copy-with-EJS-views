module.exports= {
    FirstPage:function(req, res){
        res.render('index', { title: 'Express' });},
    UraPage:function(req, res){
        var postdata = req.body;
        res.render('ura', { data: postdata});},
}
