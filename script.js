document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('disclaimerModal');
    const closeButton = document.querySelector('.close-button'); // X butonu
    const acceptButton = document.getElementById('modalAcceptButton'); // Anladım ve Kabul Ediyorum butonu
    const openDisclaimerLink = document.getElementById('openDisclaimerLink'); // Footer'daki link

    // Kullanıcının modalı daha önce görüp görmediğini kontrol et
    // 'true' string olarak saklandığı için kontrol ederken de string ile karşılaştırıyoruz.
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer') === 'true';

    // Eğer daha önce görmemişse, modalı göster
    if (!hasSeenDisclaimer) {
        modal.style.display = 'flex'; // Modalı görünür yap
        document.body.style.overflow = 'hidden'; // Arka planı kaydırmayı engelle
    }

    // Modalı kapatma işlevini tanımlayan fonksiyon
    function closeModal() {
        modal.style.display = 'none'; // Modalı gizle
        document.body.style.overflow = 'auto'; // Arka planı tekrar kaydırılabilir yap
        localStorage.setItem('hasSeenDisclaimer', 'true'); // Kullanıcının gördüğünü işaretle
    }

    // Kapatma butonu olay dinleyicisi
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // "Anladım ve Kabul Ediyorum" butonu olay dinleyicisi
    if (acceptButton) {
        acceptButton.addEventListener('click', closeModal);
    }

    // Footer'daki linke tıklandığında modalı tekrar aç
    if (openDisclaimerLink) {
        openDisclaimerLink.addEventListener('click', function(e) {
            e.preventDefault(); // Varsayılan link davranışını engelle (sayfanın en üstüne kaymayı önler)
            modal.style.display = 'flex'; // Modalı görünür yap
            document.body.style.overflow = 'hidden'; // Arka planı kaydırmayı engelle
            // Bu linkten açıldığında hasSeenDisclaimer'ı tekrar 'false' yapmaya gerek yok,
            // çünkü kullanıcı zaten manuel olarak açtı.
        });
    }
});
