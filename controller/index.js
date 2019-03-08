// 主要路由文件

const Router = require("express");
const router = Router();
const path =require("path");

const userRoutes = require("./user");
const articleRoutes = require("./article");
const categoryRoutes = require("./category");

router.get("/content", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/content.html'));
});

router.use('/user', userRoutes);
router.use('/article', articleRoutes);
router.use('/category', categoryRoutes);
module.exports = router;