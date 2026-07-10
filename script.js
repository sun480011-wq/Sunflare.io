document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableItems = document.querySelectorAll('[data-lang-ko][data-lang-en]');
    const accessibleLabels = document.querySelectorAll('[data-aria-ko][data-aria-en]');
    const alternativeTexts = document.querySelectorAll('[data-alt-ko][data-alt-en]');

    function changeLanguage(lang) {
        translatableItems.forEach(item => {
            const text = lang === 'ko' ? item.dataset.langKo : item.dataset.langEn;
            if (text) {
                item.textContent = text;
            }
        });

        accessibleLabels.forEach(item => {
            item.setAttribute('aria-label', lang === 'ko' ? item.dataset.ariaKo : item.dataset.ariaEn);
        });

        alternativeTexts.forEach(item => {
            item.alt = lang === 'ko' ? item.dataset.altKo : item.dataset.altEn;
        });

        langButtons.forEach(button => {
            const isActive = button.dataset.lang === lang;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        document.documentElement.lang = lang;
    }

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });

    const contactLink = document.getElementById('contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', function(event) {
            event.preventDefault();
            const currentLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
            const message = currentLang === 'ko'
                ? '문의: sunflare@sunflare.co.kr'
                : 'Contact: sunflare@sunflare.co.kr';
            alert(message);
        });
    }

    const defaultLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
    changeLanguage(defaultLang);
});
