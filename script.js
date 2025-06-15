function setClock() {
    const now = new Date();
    
    // 获取当前时间
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // 转换为12小时制

    // 计算指针角度
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;

    // 更新指针位置
    document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
}

// 每秒更新一次时钟
setInterval(setClock, 1000);

// 初始化时钟
setClock();

// 自动生成数字并均匀分布
function createClockNumbers() {
    const clockFace = document.querySelector('.clock-face');
    const clock = document.querySelector('.clock');
    // 获取内容区宽高
    const width = clockFace.offsetWidth;
    const height = clockFace.offsetHeight;
    // 获取border宽度
    const style = getComputedStyle(clock);
    const borderWidth = parseFloat(style.borderWidth) || 0;
    // 数字自身高度
    const numberSize = 30; // 与CSS中.number宽高一致
    // 计算中心和半径
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = (width - numberSize) / 2 - borderWidth / 2 - 6; // 6为微调padding
    for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * (Math.PI / 6); // 12点在顶部
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.textContent = i;
        numberDiv.style.position = 'absolute';
        numberDiv.style.left = `${x}px`;
        numberDiv.style.top = `${y}px`;
        numberDiv.style.transform = 'translate(-50%, -50%)';
        clockFace.appendChild(numberDiv);
    }
}

createClockNumbers(); 