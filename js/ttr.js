document.addEventListener('DOMContentLoaded', function() {
    // 平滑滾動導航
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                if(history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });

    // 漢堡包選單功能 - 修正版本
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-btn');
    
    if(hamburgerBtn && mobileNav && closeBtn) {
        // 初始隱藏移動導航
        mobileNav.style.display = 'none';
        
        hamburgerBtn.addEventListener('click', function() {
            mobileNav.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        
        closeBtn.addEventListener('click', function() {
            mobileNav.style.display = 'none';
            document.body.style.overflow = '';
        });
        
        // 點擊導航連結後關閉選單
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
    }

    // 社交媒體圖標動畫 - 修正選擇器
    const socialIcons = document.querySelectorAll('.social-media-list a');
    socialIcons.forEach(icon => {
        const iconElement = icon.querySelector('i');
        if(iconElement) {
            icon.addEventListener('mouseenter', () => {
                iconElement.classList.add('fa-beat');
            });
            icon.addEventListener('mouseleave', () => {
                iconElement.classList.remove('fa-beat');
            });
        }
    });

    // 其他保持不變的代碼...
    // ... (服務卡片、返回頂部等原有功能)
});

window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
});