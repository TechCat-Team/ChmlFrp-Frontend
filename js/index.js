function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const backdrop = document.getElementById('backdrop');
    const button = document.getElementById('menuButton');
    const isOpen = menu.getAttribute('data-state') === 'open';

    menu.setAttribute('data-state', isOpen ? 'closed' : 'open');
    backdrop.classList.toggle('hidden', !isOpen);
    menu.classList.toggle('transform', !isOpen);
    menu.classList.toggle('translate-x-full', isOpen);
    backdrop.classList.toggle('opacity-50', !isOpen);
}

// 页面加载动画
document.addEventListener('DOMContentLoaded', function () {
    // 初始化AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // 为导航链接添加悬停动画
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // 为按钮添加点击动画
    const buttons = document.querySelectorAll('button, a[href="#"]');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            if (this.tagName === 'A' && this.getAttribute('href') === '#') {
                e.preventDefault();
            }

            // 添加点击效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});