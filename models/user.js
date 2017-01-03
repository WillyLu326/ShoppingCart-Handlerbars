/**
 * Created by zhenglu on 1/3/17.
 */
const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      bcrypt   = require('bcrypt');

var userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
    bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);