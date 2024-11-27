document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.list-menu a'); // Ambil semua tautan navigasi
    const content = document.getElementById('content'); // Elemen untuk memuat konten

    // Fungsi untuk memuat halaman
    const loadPage = async (page) => {
        try {
            const response = await fetch(`${page}.html`); // Fetch file HTML
            if (response.ok) {
                const html = await response.text(); // Ambil konten sebagai teks
                content.innerHTML = html; // Masukkan ke elemen content
            } else {
                content.innerHTML = `<h2>Error ${response.status}</h2><p>Page not found!</p>`;
            }
        } catch (error) {
            console.error("Failed to load page:", error);
            content.innerHTML = `<h2>Error</h2><p>Failed to load the page.</p>`;
        }
    };

    // Event listener untuk tautan navigasi
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Mencegah reload halaman
            const page = event.target.getAttribute('data-page'); // Ambil nama halaman
            loadPage(page); // Panggil fungsi loadPage
        });
    });

    // Pemuatan awal (default ke "home")
    loadPage('home'); // Muat halaman home saat pertama kali dibuka
});


//untuk pop up login
function showPopup(type) {
    const popup = document.getElementById(`popup-${type}`);
    if (popup) {
        popup.style.display = 'flex'; // Tampilkan popup
    }
}

function closePopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = 'none'); // Sembunyikan semua popup
}
