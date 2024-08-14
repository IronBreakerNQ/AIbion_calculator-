
class SiteController {
    // [GET] /
    index(req,res){
        res.render('home');
    }
    test(req,res){
        res.render('test');
    }
}

module.exports = new SiteController;