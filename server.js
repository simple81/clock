const express = require('express');
const path = require('path');
const app = express();

// 设置静态文件目录
app.use(express.static(__dirname));

// 所有路由都返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 设置端口
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 