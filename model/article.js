const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    content: String, // 存储富文本
    contentText: String,// 存储纯文本
    author: {
        ref: "user",
        type: Schema.Types.ObjectId
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: "category",
            required: true
        }
    ],
    looksnum: {
        type: Number,
        default: 0
    },
    commons: [
        {
            type: Schema.Types.ObjectId,
            ref: "common"
        }
    ]
}, {
    versionKey: false,
    timestamps: {createdAt: "createTime", updatedAt: "updateTime"}
});

module.exports = mongoose.model("article", articleSchema);