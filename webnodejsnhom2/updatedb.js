const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mangadb', {
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

const updateUser = async () => {
    try {
        await user.updateOne({chapters:{$gte:40}}, 
            {title:"quannew"});
        const userFind = await user.findOne();
        console.log("Update user: " + userFind);
    } catch(err) {
        console.log(err);
    }
}
updateUser();
