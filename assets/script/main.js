// swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1.25,
    loopedSlides: 3, // 3つのスライドをループに含める
    initialSlide: 1, // 初期表示スライドを2番目に設定
    spaceBetween: 16,
    centeredSlides: true, // アクティブなスライドを中央に表示
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true, // スクロールバーを非表示にする
    },
    speed: 600, // スライド切り替えスピードを0.6秒に設定
    breakpoints: {
        768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 15,
            initialSlide: 1
        },
    },
});