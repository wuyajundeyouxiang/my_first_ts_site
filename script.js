// ==========================================================================
// 1. 获取 HTML 骨架标签（通过唯一的 ID 身份证精准定位）
// ==========================================================================
const macButton = document.getElementById('tabMac');
const ipadButton = document.getElementById('tabIpad');
const iphoneButton = document.getElementById('tabIphone');

// ==========================================================================
// 2. 编写点击的神经反射（大脑业务逻辑）
// ==========================================================================

// 🍏 逻辑 A：当用户点击 Mac 标签时
macButton.addEventListener('click', (event) => {
  event.preventDefault(); // 阻断超链接默认的刷新页面行为
  
  // 执行换色逻辑：变成 Mac 官方标志性的深空灰/深色背景
  document.body.style.backgroundColor = '#1a202c'; 
  
  // 发送调试密电：你昨晚学会的 Console 打印，右键点击“检查”切换到 Console 就能看到
  console.log('用户点击了 Mac123 标签！背景成功切换为深空灰。');
});

// 🍏 逻辑 B：当用户点击 iPad 标签时
ipadButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  // 执行换色逻辑：变成 iPad 官方经典的银灰色背景
  document.body.style.backgroundColor = '#cbd5e1'; 
  
  console.log('用户点击了 iPad 标签！背景成功切换为银灰色。');
});

// 🍏 逻辑 C：当用户点击 iPhone 标签时
iphoneButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  // 执行换色逻辑：变成 iPhone 官方精致的浅粉色/钛金属背景
  document.body.style.backgroundColor = '#fbcfe8'; 
  
  console.log('用户点击了 iPhone 标签！背景成功切换为浅粉色。');
});
