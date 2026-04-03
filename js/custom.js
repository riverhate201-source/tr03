// 자바스크립트를 위에 넣어도 쓸 수 있게 하는 방법
$(function () {
    lucide.createIcons();

    const swiper = new Swiper('.main_visual_slider', {
        loop: true,
        autoplay: {
            delay: 3000, // 3초마다 슬라이드
            disableOnInteraction: false, // 클릭해도 계속 자동재생
        },

        effect: 'fade', // ⭐ 페이드 효과

        fadeEffect: {
            crossFade: true // 자연스럽게 겹치면서 전환
        },
    });
})