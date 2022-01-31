//  function contructor
  class NewsController {
    
        //[GET] /news
        index(req, res){
            res.render('news')
        }

        //[GET] /news:slug
        show(req,res){
            res.send('detail')
        }
    }
// tao 1 doi tuong - out put ra ngoai
    module.exports = new NewsController