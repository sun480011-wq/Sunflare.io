document.addEventListener('DOMContentLoaded', function() {
    // Contact Us 링크 기능 (변경 없음)
    const contactLink = document.getElementById('contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', function(event) {
            event.preventDefault(); // 링크의 기본 동작 방지

            // 현재 설정된 언어에 따라 다른 메시지를 표시
            const currentLang = document.querySelector('.lang-btn.active').dataset.lang;
            const message = (currentLang === 'ko')
                ? '문의: sunflare@sunflare.co.kr'
                : 'Contact: sunflare@sunflare.co.kr';
            alert(message);
        });
    }

    // --- 언어 변경 기능 ---
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // main-menu-index (index.html), main-menu (privacy.html)
    const menuItems = document.querySelectorAll('#main-menu a, #main-menu-index a'); 
    

    // 언어 변경 함수 (변경 없음)
    function changeLanguage(lang) {
        // 모든 메뉴 아이템의 텍스트를 선택된 언어에 맞게 변경
        menuItems.forEach(item => {
            const text = lang === 'ko' ? item.dataset.langKo : item.dataset.langEn;
            if (text) {
                item.textContent = text;
            }
        });

        // 활성 버튼 스타일 변경
        langButtons.forEach(button => {
            button.classList.remove('active');
        });
        const activeButton = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // 각 언어 버튼에 클릭 이벤트 추가 (변경 없음)
    langButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedLang = this.dataset.lang;
            changeLanguage(selectedLang);
        });
    });

    // 페이지 로드 시 기본 언어(영어)로 설정 (변경 없음)
    const defaultLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
    changeLanguage(defaultLang); 
});