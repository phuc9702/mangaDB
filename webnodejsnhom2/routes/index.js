var express = require('express');
var router = express.Router();

/* GET home page. */
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/dulieuquanly', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
const userSchema = new mongoose.Schema({
  titles: String,
  author: String,//tacs giả
  chapters: Number, 
})
// tao model
const user = mongoose.model('user', userSchema)
/* GET home page. */
router.get('/', function(req, res, next) {
const findUser = async () => {
const userFind = await user.find();
res.render('index', { ds: userFind });
}
findUser();
});
/* GET home page. */

  // form add
  router.get('/form-add', function(req, res, next)
  {
    res.render('form-add',{});
  });

  router.post('/add', function(req, res, next)
  {
    user.create(req.body)
    res.redirect('/');
  });

  // update
  router.get('/form-update/:id', function(req, res, next)
  {
    const findUser = async () => {
      const userFind = await user.findById(req.params.id);
      res.render('form-update', { user: userFind });
      }
      findUser();
  });

  router.post('/update', function(req, res, next)
  {
    const updateUser = async () => {
    await  user.findByIdAndUpdate(req.body.id,req.body); 
  }
    updateUser();
    res.redirect('/');
  });
  
  // xoa

  router.get('/form-delete/:id', function(req, res, next)
  {
    const deleteUser = async () => {
      await  user.findByIdAndDelete(req.params.id); 
    }
    deleteUser();
    res.redirect('/');
  });


module.exports = router;
