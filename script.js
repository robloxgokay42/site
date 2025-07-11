document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('disclaimerModal');
    const closeButton = document.querySelector('.close-button');
    const acceptButton = document.getElementById('modalAcceptButton');
    const openDisclaimerLink = document.getElementById('openDisclaimerLink');

    // Kullanıcının modalı daha önce görüp görmediğini kontrol et
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');

    if (!hasSeenDisclaimer) {
        // Eğer daha önce görmemişse, modalı göster
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Arka planı kaydırmayı engelle
    }

    // Kapatma butonu işlevi
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Arka planı tekrar kaydırılabilir yap
        localStorage.setItem('hasSeenDisclaimer', 'true'); // Kullanıcının gördüğünü işaretle
    });

    // "Anladım ve Kabul Ediyorum" butonu işlevi
    acceptButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        localStorage.setItem('hasSeenDisclaimer', 'true');
    });

    // Footer'daki linke tıklandığında modalı tekrar aç
    if (openDisclaimerLink) {
        openDisclaimerLink.addEventListener('click', function(e) {
            e.preventDefault(); // Sayfanın en üstüne gitmesini engelle
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
});
