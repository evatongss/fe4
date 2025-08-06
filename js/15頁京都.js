 const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 設置當前日期
        const currentDate = document.getElementById('current-date');
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        currentDate.textContent = new Date().toLocaleDateString('zh-TW', options);
        
        // 測驗功能
        const quizOptions = document.querySelectorAll('.quiz-option');
        const submitBtn = document.getElementById('submitQuiz');
        const quizResult = document.getElementById('quizResult');
        
        let selectedAnswers = [];
        
        quizOptions.forEach(option => {
            option.addEventListener('click', function() {
                const questionIndex = Array.from(this.parentNode.parentNode.children)
                    .indexOf(this.parentNode) - 1; // 減去問題標題
                
                // 移除同問題的其他選項的selected類
                const questionOptions = this.parentNode.querySelectorAll('.quiz-option');
                questionOptions.forEach(opt => opt.classList.remove('selected'));
                
                // 為當前選項添加selected類
                this.classList.add('selected');
                
                // 記錄選擇的答案
                selectedAnswers[questionIndex] = this;
            });
        });
        
        submitBtn.addEventListener('click', function() {
            let correctCount = 0;
            let totalQuestions = document.querySelectorAll('.quiz-question').length;
            
            // 檢查每個問題的答案
            selectedAnswers.forEach((answer, index) => {
                if (answer && answer.hasAttribute('data-correct')) {
                    answer.classList.add('correct');
                    correctCount++;
                } else if (answer) {
                    answer.classList.add('incorrect');
                    // 顯示正確答案
                    const correctOption = answer.parentNode.querySelector('[data-correct="true"]');
                    if (correctOption) {
                        correctOption.classList.add('correct');
                    }
                }
            });
            
            // 顯示結果
            quizResult.textContent = `您答對了 ${correctCount} 題，共 ${totalQuestions} 題`;
            quizResult.classList.add('show');
            
            if (correctCount === totalQuestions) {
                quizResult.classList.add('correct');
                quizResult.innerHTML += '<br>太棒了！您對東京非常了解！';
            } else {
                quizResult.classList.add('incorrect');
                quizResult.innerHTML += '<br>再試一次吧！';
            }
            
            // 禁用提交按鈕
            submitBtn.disabled = true;
        });
        
        // 圖片懸停效果
        const cards = document.querySelectorAll('.attraction-card, .food-card');
        cards.forEach(card => {
            const img = card.querySelector('img');
            
            card.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.05)';
            });
            
            card.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        });