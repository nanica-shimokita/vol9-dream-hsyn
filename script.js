document.addEventListener('DOMContentLoaded', function() {

    // --- スタート画面とタイマー機能のロジック ---
    const startScreen = document.getElementById('start-screen');
    const hintContent = document.getElementById('hint-content');
    const showHintButton = document.getElementById('show-hint-button');
    let timeoutId;

    function showStartScreen() {
        if (startScreen && hintContent) {
            startScreen.style.display = 'flex';
            hintContent.style.display = 'none';
        }
        clearTimeout(timeoutId);
    }

    function showHintContent() {
        if (startScreen && hintContent) {
            startScreen.style.display = 'none';
            hintContent.style.display = 'block';
        }
        // 5分（300000ミリ秒）後にスタート画面に戻るタイマーを設定
        timeoutId = setTimeout(showStartScreen, 300000);
    }

    if (showHintButton) {
        showHintButton.addEventListener('click', showHintContent);
    }

    // ユーザーが何か操作をしたらタイマーをリセットする
    document.addEventListener('mousemove', () => clearTimeout(timeoutId));
    document.addEventListener('keydown', () => clearTimeout(timeoutId));
    document.addEventListener('scroll', () => clearTimeout(timeoutId));

    // ページ読み込み時にスタート画面を表示
    showStartScreen();

    // --- アコーディオンとパスワード機能のロジック ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // closest()は不要
            const accordionContent = this.nextElementSibling;

            if (accordionContent) {
                if (accordionContent.classList.contains('open')) {
                    accordionContent.classList.remove('open');
                    this.classList.remove('active');
                } else {
                    accordionContent.classList.add('open');
                    this.classList.add('active');
                }
            }
        });
    });

    const passwordInput = document.getElementById('passwordInput');
    const submitPasswordBtn = document.getElementById('submitPasswordBtn');
    const finalHint = document.getElementById('finalHint');

    if (submitPasswordBtn && passwordInput && finalHint) {
        submitPasswordBtn.addEventListener('click', function() {
            const correctPassword = "password123";
            if (passwordInput.value === correctPassword) {
                finalHint.style.display = 'block';
                alert("パスワードが正しく、最終ヒントが表示されました！");
            } else {
                alert("パスワードが違います。");
            }
            passwordInput.value = '';
        });
    }
});
