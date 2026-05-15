//import // 告诉打包工具 Vite，这个网站需要这份 CSS 皮肤
import './style.css';
// TypeScript 的严格体现：我们需要定义元素的具体类型
const btn = document.getElementById('colorBtn') as HTMLButtonElement;

// 定义颜色数组，指定它是字符串数组类型
const myColors: string[] = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7'];

btn.addEventListener('click', (): void => {
    // 随机选择颜色
    const randomColor: string = myColors[Math.floor(Math.random() * myColors.length)];
    document.body.style.backgroundColor = randomColor;
    console.log("当前颜色是：" + randomColor);
});
