const images = [
    "images/Thai.jpg",
    "images/Phuket.jpg",
    "images/PhiPhi.jpg",
];

let currentIndex = 0;
let slideshowElement;

document.addEventListener("DOMContentLoaded", () => {
    slideshowElement = document.getElementById("slideshow");

    if (!slideshowElement) {
        console.error("スライドショーの要素が見つかりません。HTML に <img id='slideshow'> があるか確認してください。");
        return;
    }

    // 初回表示をフェードイン
    slideshowElement.classList.add("active");

    // 5秒ごとに画像を変更（フェードアニメーション込み）
    setInterval(changeImage, 5000);
});

function changeImage() {
    if (!slideshowElement) return;

    // フェードアウト（透明にする）
    slideshowElement.classList.remove("active");

    setTimeout(() => {
        // 画像を変更
        currentIndex = (currentIndex + 1) % images.length;
        slideshowElement.src = images[currentIndex];

        // 画像が完全に変更された後にフェードイン
        setTimeout(() => {
            slideshowElement.classList.add("active");
        }, 300); // 画像変更後 500ms 後にフェードイン
    }, 800); // フェードアウト後 1秒待って画像変更
}


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");
    const body = document.body;

    // 🚀 1. スムーズスクロール（既存のコード）
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // デフォルトのジャンプを無効化

            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // ナビゲーションバーの高さを考慮
                    behavior: "smooth"
                });
            }
        });
    });

    // 🚀 2. ナビゲーションバーの色変更（初回チェック + スクロール時の変更）
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
            body.classList.add("scrolled-padding"); // 余白を確保
        } else {
            navbar.classList.remove("scrolled");
            body.classList.remove("scrolled-padding"); // 余白を削除
        }
    }

    // 🌟 ページ読み込み時に初期状態をチェック
    updateNavbar();

    // スクロール時にナビバーの状態を更新
    window.addEventListener("scroll", updateNavbar);
});


