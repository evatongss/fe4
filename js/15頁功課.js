  document.getElementById('search').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.prefecture-card');
            
            cards.forEach(card => {
                const title = card.querySelector('h2').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        
        // 地區篩選
        const regionBtns = document.querySelectorAll('.region-btn');
        regionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const region = this.dataset.region;
                
                // 更新按鈕狀態
                regionBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // 篩選卡片
                const cards = document.querySelectorAll('.prefecture-card');
                cards.forEach(card => {
                    if (region === 'all' || card.dataset.region === region) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // 返回頂部按鈕
        window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('backToTop');
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        document.getElementById('backToTop').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 表單提交
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的訊息！我們會盡快回覆您。');
            this.reset();
        });