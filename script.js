// 滚动动画功能
document.addEventListener('DOMContentLoaded', function() {
    // 创建 Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // 可选：动画显示后停止观察以提高性能
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 选择所有需要动画的元素
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 平滑滚动导航
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
