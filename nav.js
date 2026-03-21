// كود الربط الشامل - يوضع في بداية nav.js
function updateGlobalProfile() {
    const savedName = localStorage.getItem('user_name');
    const savedImg = localStorage.getItem('user_img');
    const savedTheme = localStorage.getItem('theme');

    // 1. ربط الاسم في كل مكان
    const nameTags = document.querySelectorAll('.global-name');
    if (savedName) {
        nameTags.forEach(el => {
            if (el.tagName === 'INPUT') el.value = savedName;
            else el.textContent = savedName;
        });
    }

    // 2. ربط الصورة في كل مكان
    const imgTags = document.querySelectorAll('.global-img');
    if (savedImg) {
        imgTags.forEach(img => img.src = savedImg);
    }

    // 3. ربط الوضع الليلي في كل مكان
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}

// تشغيل التحديث فور تحميل أي صفحة
document.addEventListener("DOMContentLoaded", updateGlobalProfile);

// nav.js - إصدار "الثبات الملكي" (The Stable VIP Edition)
document.addEventListener("DOMContentLoaded", () => {
    const navbar = `
    <style>
        /* الحاوية الكريستالية VIP */
        .nav-bar-vip {
            position: fixed; 
            bottom: 20px; 
            left: 50%; 
            transform: translateX(-50%);
            width: 82%; 
            height: 60px; 
            background: rgba(10, 5, 25, 0.85); 
            border-radius: 40px;
            border: 1px solid rgba(125, 42, 232, 0.2);
            display: flex; 
            justify-content: space-around; 
            align-items: center; 
            z-index: 10000;
            backdrop-filter: blur(20px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.9);
        }

        /* زر الجيمنج الدائري - حجم ثابت وأنيق */
        .gaming-core {
            width: 52px; 
            height: 52px; 
            background: radial-gradient(circle at center, #1a0b3c 0%, #05020a 100%);
            border-radius: 50%;
            display: flex; 
            justify-content: center; 
            align-items: center;
            position: relative;
            border: 2px solid #7d2ae8;
            box-shadow: 0 0 15px rgba(125, 42, 232, 0.3);
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 10001;
        }

        /* حلقة النيون الدوارة (تظهر فقط في الرئيسية) */
        .gaming-core::before {
            content: '';
            position: absolute;
            width: 120%; height: 120%;
            border-radius: 50%;
            border: 1.5px solid transparent;
            border-top: 1.5px solid #7d2ae8;
            opacity: 0; 
            transition: 0.5s;
        }

        @keyframes rotateCore { 100% { transform: rotate(360deg); } }

        /* حالة الصعود والدوران (فقط في صفحة login.html) */
        .joy-active-main { 
            margin-top: -40px; 
            transform: scale(1.1); 
            border-color: #fff; 
            box-shadow: 0 10px 25px rgba(125, 42, 232, 0.8); 
        }
        
        .joy-active-main::before {
            opacity: 1;
            animation: rotateCore 1.5s linear infinite;
        }

        /* حالة النزول الطبيعية في باقي الصفحات */
        .joy-rest { margin-top: 0px; transform: scale(1); opacity: 0.9; }

        /* الأيقونات الجانبية - حجم ثابت 100% */
        .nav-link-vip { 
            text-decoration: none; 
            width: 45px; 
            height: 45px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            transition: 0.3s;
        }

        .nav-link-vip i { 
            font-size: 20px; 
            color: rgba(255, 255, 255, 0.2); 
            transition: 0.3s;
        }

        /* اللون فقط يتغير عند النشاط بدون تكبير الحجم */
        .active-vip i { 
            color: #ffcc00 !important; 
            filter: drop-shadow(0 0 10px #ffcc00);
        }

        .gaming-core:active { transform: scale(0.85); background: #7d2ae8; }
    </style>

    <nav class="nav-bar-vip">
        <a href="share.html" class="nav-link-vip" id="v-share"><i class="fa-solid fa-link"></i></a>
        
        <a href="stats.html" class="nav-link-vip" id="v-stats"><i class="fa-solid fa-chart-pie"></i></a>
        
        <div id="v-joy" class="gaming-core" onclick="setTimeout(()=> location.href='login.html', 150)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="3"/>
                <circle cx="12" cy="12" r="3"/>
                <path d="M7 12h2M15 12h2M12 9v1M12 14v1"/>
            </svg>
        </div>

        <a href="wallet.html" class="nav-link-vip" id="v-wallet"><i class="fa-solid fa-wallet"></i></a>
        
        <a href="settings.html" class="nav-link-vip" id="v-settings"><i class="fa-solid fa-sliders"></i></a>
    </nav>`;

    document.body.insertAdjacentHTML('beforeend', navbar);

    const loc = window.location.pathname;
    const joy = document.getElementById('v-joy');

    // منطق البروز والدوران للوسط فقط
    if(loc.includes('login.html') || loc === '/' || loc.endsWith('/')) {
        joy.classList.add('joy-active-main');
    } else {
        joy.classList.add('joy-rest');
    }

    // تلوين الأيقونات النشطة فقط
    if(loc.includes('share.html')) document.getElementById('v-share').classList.add('active-vip');
    if(loc.includes('stats.html')) document.getElementById('v-stats').classList.add('active-vip');
    if(loc.includes('wallet.html')) document.getElementById('v-wallet').classList.add('active-vip');
    if(loc.includes('settings.html')) document.getElementById('v-settings').classList.add('active-vip');
});
