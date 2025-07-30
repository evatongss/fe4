<script>
    // 文檔加載完成後執行
    document.addEventListener('DOMContentLoaded', function() {
        // 1. 平滑滾動導航
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
                }
            });
        });

        // 2. 導航欄滾動效果
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', function() {
            if(window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // 3. 社交媒體圖標動畫
        const socialIcons = document.querySelectorAll('.icon-item a');
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.querySelector('i').classList.add('fa-beat');
            });
            icon.addEventListener('mouseleave', function() {
                this.querySelector('i').classList.remove('fa-beat');
            });
        });

        // 4. 服務卡片懸停效果
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
        });

        // 5. 表單驗證 (假設頁面有聯絡表單)
        const contactForm = document.getElementById('contact-form');
        if(contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = this.querySelector('input[name="name"]').value;
                const email = this.querySelector('input[name="email"]').value;
                const message = this.querySelector('textarea[name="message"]').value;
                
                if(!name || !email || !message) {
                    alert('請填寫所有欄位');
                    return;
                }
                
                if(!validateEmail(email)) {
                    alert('請輸入有效的電子郵件地址');
                    return;
                }
                
                // 這裡可以添加AJAX提交代碼
                alert('表單已提交，我們會盡快與您聯繫！');
                this.reset();
            });
        }

        // 6. 價格動態顯示
        const servicePrices = document.querySelectorAll('.service-price');
        servicePrices.forEach(price => {
            const originalText = price.textContent;
            price.textContent = '點擊查看價格';
            price.style.cursor = 'pointer';
            
            price.addEventListener('click', function() {
                this.textContent = originalText;
                this.style.cursor = 'default';
            });
        });

        // 7. 返回頂部按鈕
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'back-to-top';
        document.body.appendChild(backToTopBtn);
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', function() {
            if(window.scrollY > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        });

        // 8. 圖片懶加載
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, { threshold: 0.1 });
        
        lazyImages.forEach(img => imageObserver.observe(img));

        // 9. 動態年份更新
        const yearElement = document.querySelector('.copyright p');
        if(yearElement) {
            const currentYear = new Date().getFullYear();
            yearElement.textContent = yearElement.textContent.replace('2023', currentYear);
        }

        // 10. 響應式導航菜單 (移動設備)
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.navbar .container').appendChild(menuToggle);
        
menuToggle.addEventListener('click', function() {
document.body.classList.toggle('menu-open');
});
});


function validateEmail(email) {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
    }

  
window.addEventListener('load', function() {
document.body.classList.add('page-loaded');
});
