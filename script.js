// 这是翻译给浏览器听的普通 JS 代码
var btn = document.getElementById('colorBtn');
var myColors = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7'];

btn.addEventListener('click', function () {
    var randomColor = myColors[Math.floor(Math.random() * myColors.length)];
    document.body.style.backgroundColor = randomColor;
    console.log("当前颜色是：" + randomColor);
});
