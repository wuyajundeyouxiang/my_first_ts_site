import './style.css';

/* ==========================================================================
   1. 严格的类型定义 (TypeScript 核心特征)
   定义一个“设备数据结构”，规定任何设备都必须包含标题、描述和背景色这三样东西。
   ========================================================================== */
interface DeviceInfo {
  title: string;
  description: string;
  bgColor: string;
}

// 定义我们的数据源（业务数据库）
const appleDatabase: Record<string, DeviceInfo> = {
  Mac: {
    title: " MacBook Pro ",
    description: "搭载强劲芯片，为创作者、工程师和专业人士打造的终极生产力工具。",
    bgColor: "#2d3748" // 深邃暗黑风背景
  },
  iPad: {
    title: " iPad Pro ",
    description: "超薄设计，极致的单片全面屏体验，让你的创意随时随地流淌。",
    bgColor: "#e2e8f0" // 极简银灰色背景
  },
  iPhone: {
    title: " iPhone 16 Pro ",
    description: "全新相机控制，强悍芯片，为你开启智能与影像的全新时代。",
    bgColor: "#fce7f3" // 柔和钛金属粉背景
  }
};

/* ==========================================================================
   2. 获取 HTML 元素 (获取骨架)
   TypeScript 强制要求我们明确这些元素的具体类型，如果不加，它就会划红线报错。
   ========================================================================== */
const colorBtn = document.getElementById('colorBtn') as HTMLButtonElement;
const pageTitle = document.getElementById('pageTitle') as HTMLHeadingElement;
const pageDescription = document.getElementById('pageDescription') as HTMLParagraphElement;

const tabMac = document.getElementById('tabMac') as HTMLAnchorElement;
const tabIpad = document.getElementById('tabIpad') as HTMLAnchorElement;
const tabIphone = document.getElementById('tabIphone') as HTMLAnchorElement;

/* ==========================================================================
   3. 核心业务逻辑函数
   写一个公共函数，只要传入设备名字，就自动更新界面文字和背景
   ========================================================================== */
function switchDevice(deviceName: 'Mac' | 'iPad' | 'iPhone'): void {
  // 从我们的业务数据库里拿到对应的数据
  const data = appleDatabase[deviceName];
  
  // 严格更新网页上的文字内容
  pageTitle.innerText = data.title;
  pageDescription.innerText = data.description;
  
  // 丝滑更换背景色（享受昨晚写的 CSS 过渡动效）
  document.body.style.backgroundColor = data.bgColor;
}

/* ==========================================================================
   4. 绑定点击事件 (给骨架装上神经系统)
   ========================================================================== */
tabMac.addEventListener('click', (e) => {
  e.preventDefault(); // 阻止网页默认的刷新跳转
  switchDevice('Mac');
});

tabIpad.addEventListener('click', (e) => {
  e.preventDefault();
  switchDevice('iPad');
});

tabIphone.addEventListener('click', (e) => {
  e.preventDefault();
  switchDevice('iPhone');
});

/* 你原有的随机变色按钮逻辑，依然保留 */
const myColors: string[] = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7'];
colorBtn.addEventListener('click', (): void => {
  const randomColor = myColors[Math.floor(Math.random() * myColors.length)];
  document.body.style.backgroundColor = randomColor;
});
