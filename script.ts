import './style.css';

// 1. 严格抓取 HTML 元素
// TypeScript 强制要求我们使用 'as HTMLAnchorElement' 声明它的精确真实身份（它是一个超链接标签）
const macButton = document.getElementById('tabMac') as HTMLAnchorElement;
const ipadButton = document.getElementById('tabIpad') as HTMLAnchorElement;
const iphoneButton = document.getElementById('tabIphone') as HTMLAnchorElement;

// 2. 编写神经反射（业务逻辑）
// 我们为 macButton 绑定点击监听器
macButton.addEventListener('click', (event: MouseEvent): void => {
  // // 阻止超链接默认的刷新页面行为
  
  // 核心逻辑：改变背景颜色
  document.body.style.backgroundColor = '#1a202c'; // 变成 Mac 标志性的太空灰深色
  
  console.log('用户点击了 Mac 标签！');
});

// 同理，为 iPad 绑定点击
ipadButton.addEventListener('click', (event: MouseEvent): void => {
  //event.preventDefault();
  document.body.style.backgroundColor = '#cbd5e1'; // 变成 iPad 标志性的银色
});

// 为 iPhone 绑定点击
iphoneButton.addEventListener('click', (event: MouseEvent): void => {
  //event.preventDefault();
  document.body.style.backgroundColor = '#fbcfe8'; // 变成 iPhone 标志性的浅粉色
});
