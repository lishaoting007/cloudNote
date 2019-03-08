const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({ // 定义用户的数据结构
    name: String,
    email: {
        unique: true, // 唯一
        type: String
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "../public/images/avatar1.jpg"
    }
}, {
    versionKey: false,
    timestamps: {createdAt: "createTime", updatedAt: "updateTime"}
});

module.exports = mongoose.model("user", userSchema);