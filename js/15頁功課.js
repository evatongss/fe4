 // 搜尋功能
        document.getElementById('search').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const searchResults = document.getElementById('searchResults');
            
            if (searchTerm.length === 0) {
                searchResults.style.display = 'none';
                return;
            }
            
            // 模擬搜尋結果 - 實際應用中可以從資料庫或陣列中獲取
            const prefectures = [
                { name: '東京都', japanese: 'とうきょうと', url: '/Documents/fe4/html/ttours/15頁東京.html' },
                { name: '大阪府', japanese: 'おおさかふ', url: '/Documents/fe4/html/ttours/15頁大阪.html' },
                { name: '愛知縣', japanese: 'あいちけん', url: '/Documents/fe4/html/ttours/15頁愛知.html' },
                { name: '京都府', japanese: 'きょうとふ', url: '/Documents/fe4/html/ttours/15頁京都.html' },
                { name: '北海道', japanese: 'ほっかいどう', url: '/Documents/fe4/html/ttours/15頁北海.html' },
                { name: '廣島縣', japanese: 'ひろしまけん', url: '/Documents/fe4/html/ttours/15頁廣島.html' },
                { name: '福岡縣', japanese: 'ふくおかけん', url: '/Documents/fe4/html/ttours/15頁福岡.html' },
                { name: '德島縣', japanese: 'とくしまけん', url: '/Documents/fe4/html/ttours/15頁德島.html' },
                { name: '琦玉縣', japanese: 'さいたまけん', url: '/Documents/fe4/html/ttours/15頁琦玉.html' },
                { name: '宮城縣', japanese: 'みやぎけん', url: '/Documents/fe4/html/ttours/15頁宮城.html' },
                { name: '青森縣', japanese: 'あおもりけん', url: '/Documents/fe4/html/ttours/15頁青森.html' },
                { name: '石川縣', japanese: 'いしかわけん', url: '/Documents/fe4/html/ttours/15頁石川.html' },
                { name: '岡山縣', japanese: 'おかやまけん', url: '/Documents/fe4/html/ttours/15頁岡山.html' },
                { name: '兵庫縣', japanese: 'ひょうごけん', url: '/Documents/fe4/html/ttours/15頁兵庫.html' }
            ];
            
            const filtered = prefectures.filter(pref => 
                pref.name.toLowerCase().includes(searchTerm) || 
                pref.japanese.includes(searchTerm)
            );
            
            if (filtered.length > 0) {
                searchResults.innerHTML = filtered.map(pref => `
                    <div class="search-result-item" onclick="window.location.href='${pref.url}'">
                        <strong>${pref.name}</strong> (${pref.japanese})
                    </div>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="search-result-item">沒有找到匹配的結果</div>';
                searchResults.style.display = 'block';
            }
        });
        
        // 點擊頁面其他區域關閉搜尋結果
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                document.getElementById('searchResults').style.display = 'none';
            }
        });
        
        // 聯絡表單提交
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的訊息！我們會盡快回覆您。');
            this.reset();
        });
        
        // 回到頂部按鈕
        window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('backToTop');
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        document.getElementById('backToTop').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }); // 搜尋功能
        document.getElementById('search').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const searchResults = document.getElementById('searchResults');
            
            if (searchTerm.length === 0) {
                searchResults.style.display = 'none';
                return;
            }
            
            // 模擬搜尋結果 - 實際應用中可以從資料庫或陣列中獲取
            const prefectures = [
                { name: '東京都', japanese: 'とうきょうと', url: '/Documents/fe4/html/ttours/15頁東京.html' },
                { name: '大阪府', japanese: 'おおさかふ', url: '/Documents/fe4/html/ttours/15頁大阪.html' },
                { name: '愛知縣', japanese: 'あいちけん', url: '/Documents/fe4/html/ttours/15頁愛知.html' },
                { name: '京都府', japanese: 'きょうとふ', url: '/Documents/fe4/html/ttours/15頁京都.html' },
                { name: '北海道', japanese: 'ほっかいどう', url: '/Documents/fe4/html/ttours/15頁北海.html' },
                { name: '廣島縣', japanese: 'ひろしまけん', url: '/Documents/fe4/html/ttours/15頁廣島.html' },
                { name: '福岡縣', japanese: 'ふくおかけん', url: '/Documents/fe4/html/ttours/15頁福岡.html' },
                { name: '德島縣', japanese: 'とくしまけん', url: '/Documents/fe4/html/ttours/15頁德島.html' },
                { name: '琦玉縣', japanese: 'さいたまけん', url: '/Documents/fe4/html/ttours/15頁琦玉.html' },
                { name: '宮城縣', japanese: 'みやぎけん', url: '/Documents/fe4/html/ttours/15頁宮城.html' },
                { name: '青森縣', japanese: 'あおもりけん', url: '/Documents/fe4/html/ttours/15頁青森.html' },
                { name: '石川縣', japanese: 'いしかわけん', url: '/Documents/fe4/html/ttours/15頁石川.html' },
                { name: '岡山縣', japanese: 'おかやまけん', url: '/Documents/fe4/html/ttours/15頁岡山.html' },
                { name: '兵庫縣', japanese: 'ひょうごけん', url: '/Documents/fe4/html/ttours/15頁兵庫.html' }
            ];
            
            const filtered = prefectures.filter(pref => 
                pref.name.toLowerCase().includes(searchTerm) || 
                pref.japanese.includes(searchTerm)
            );
            
            if (filtered.length > 0) {
                searchResults.innerHTML = filtered.map(pref => `
                    <div class="search-result-item" onclick="window.location.href='${pref.url}'">
                        <strong>${pref.name}</strong> (${pref.japanese})
                    </div>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="search-result-item">沒有找到匹配的結果</div>';
                searchResults.style.display = 'block';
            }
        });
        
        // 點擊頁面其他區域關閉搜尋結果
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                document.getElementById('searchResults').style.display = 'none';
            }
        });
        
        // 聯絡表單提交
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的訊息！我們會盡快回覆您。');
            this.reset();
        });
        
        // 回到頂部按鈕
        window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('backToTop');
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        document.getElementById('backToTop').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    