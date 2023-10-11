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

const findUser = async () => {
    try {
        const userFind = await user.find();
        console.log("Find user:" + userFind);
    } catch(err) {
        console.log(err);
    }
}
findUser();
