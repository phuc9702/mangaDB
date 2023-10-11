const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/dulieuquanly', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    titles: String,
    author: String,
    chapters: Number, //chương

})

// tao model

const user = mongoose.model('user', userSchema)

user.create([
    {title: "1",author:"phục" ,chapters: 40},
    {title: "2",author:"phạm", chapters: 45},
])
