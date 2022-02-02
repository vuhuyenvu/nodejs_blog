//  function contructor
class SiteController {
    //[GET] /news
    index(req, res) {
        res.render('home');
    }

    //[GET] /search
    search(req, res) {
        // console.log(req.query.q)//lay value qua url
        res.render('search');
    }
}
// tao 1 doi tuong - out put ra ngoai
module.exports = new SiteController();
