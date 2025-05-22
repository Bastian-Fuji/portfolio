// 画像のプリロード処理
function preloadImages(imageUrls, callback) {
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = img.onerror = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                callback();
            }
        };
    });
}

// ページ内の全画像URLを取得
function getAllImageUrls() {
    const images = document.querySelectorAll('img');
    return Array.from(images).map(img => img.src);
}

// 全画像読み込み後にメインコンテンツを表示
window.addEventListener('DOMContentLoaded', () => {
    const imageUrls = getAllImageUrls();
    preloadImages(imageUrls, () => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');

        // ローディング画面をフェードアウト
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500);
    });
});


const images = [
    "images/Thai.webp",
    "images/Phuket.webp",
    "images/PhiPhi.webp",
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
            const href = link.getAttribute("href");

            // ページ内リンク（#から始まる）だけ防ぐ
            if (href && href.startsWith("#")) {
                event.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
            // href="movie.html" のような外部リンクはそのまま遷移させる
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


function openMap(location) {
    const url = `https://www.google.com/maps/search/?q=${encodeURIComponent(location)}`;
    window.open(url, '_blank');
}


const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');

loadingScreen.style.opacity = '0';

window.addEventListener('DOMContentLoaded', () => {
    const imageUrls = getAllImageUrls();
    preloadImages(imageUrls, () => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');

        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                if (mainContent) {
                    mainContent.style.display = 'block';
                }
            }, 500);
        }
    });
});

