// 💕 情人节爱情故事页面配置文件
// 在这里修改你们的故事内容，无需修改其他文件

const LOVE_STORY_CONFIG = {
    // 🗓️ 你们认识的日期（重要：修改这里！）
    meetDate: '2023-06-15', // 格式：YYYY-MM-DD
    
    // 👫 你们的名字
    names: {
        yourName: '亲爱的', // 你的称呼
        partnerName: '宝贝'  // 女友的称呼
    },
    
    // 📖 回忆故事内容
    memories: [
        {
            id: 1,
            icon: '💕',
            title: '亲爱的宝贝',
            type: 'counter', // 特殊页面：显示认识天数
            message: '每一天都因为有你而变得特别'
        },
        {
            id: 2,
            icon: '🌙',
            title: '还记得那个深夜吗？',
            date: '2024年1月15日',
            question: '我们聊到了深夜，你还记得我们聊的是什么吗？',
            details: [
                '那晚我们聊到了凌晨2点，从工作聊到生活，从梦想聊到未来...',
                '你说希望我们能一直这样聊下去，我也这么想 ❤️'
            ]
        },
        {
            id: 3,
            icon: '☕',
            title: '我们的第一次约会',
            date: '2024年2月1日',
            question: '那家咖啡店，你还记得吗？',
            details: [
                '你点了一杯拿铁，我点了一杯美式',
                '我们坐在窗边，阳光洒在你的脸上，那一刻我觉得整个世界都亮了 ✨'
            ]
        },
        {
            id: 4,
            icon: '✈️',
            title: '一起看过的风景',
            date: '2024年3月20日',
            question: '那次周末短途旅行，你还记得吗？',
            details: [
                '我们去了海边，你穿着白色连衣裙',
                '海风吹起你的发丝，夕阳西下，我们手牵手走在沙滩上',
                '那一刻，我想时间永远停留 🌅'
            ]
        },
        {
            id: 5,
            icon: '🎁',
            title: '那些小惊喜',
            date: '2024年4月10日',
            question: '记得我送你的那束花吗？',
            details: [
                '你收到花的时候，眼睛都亮了',
                '你说这是你收到过最漂亮的花',
                '其实，你比花更美 🌸'
            ]
        },
        {
            id: 6,
            icon: '🌟',
            title: '我们的未来',
            question: '亲爱的，情人节快乐！',
            details: [
                '感谢你让我的生活变得如此美好',
                '希望未来的每一天都能和你一起度过',
                '我爱你 ❤️'
            ]
        }
    ],
    
    // 🎨 主题颜色（可选）
    theme: {
        primaryColor: '#ff6b9d',    // 主色调
        secondaryColor: '#ffd700',   // 次要色调
        gradientStart: '#667eea',    // 渐变开始色
        gradientEnd: '#764ba2'       // 渐变结束色
    },
    
    // 🎵 背景音乐（可选）
    backgroundMusic: {
        enabled: false,              // 是否启用背景音乐
        url: '',                     // 音乐文件URL
        autoplay: false              // 是否自动播放
    }
};

// 导出配置（如果你需要修改其他文件）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LOVE_STORY_CONFIG;
}
