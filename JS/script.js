// ===================================
// Fungsi: Pencarian Produk (index.html)
// ===================================
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const productCards = document.querySelectorAll(".card-product");

    if (searchInput && productCards.length > 0) {
        searchInput.addEventListener("input", function () {
            const query = this.value.toLowerCase();

        productCards.forEach((card) => {
            const name = card.querySelector("h3").textContent.toLowerCase();
            if (name.includes(query)) {
                card.style.display = "block";
            } 
            else {
                card.style.display = "none";
            }
        });
    });
    }
});

// ===================================
// Fungsi: Alert Tombol Beli dan Keranjang
// ===================================
document.addEventListener("DOMContentLoaded",function(){
    const btnBeli = document.getElementById("btnBeli");
    const btnKeranjang = document.getElementById("btnKeranjang");

    if (btnBeli) {
        btnBeli.addEventListener("click", function () {
            alert("Produk berhasil dibeli!");
        });
    }

    if (btnKeranjang) {
        btnKeranjang.addEventListener("click", function () {
            alert("Produk telah ditambahkan ke keranjang.");
        });  
    }
});

// Dropdown profil klik untuk tampil/sembunyi
document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("profileIcon");
    const menu = document.getElementById("dropdownMenu");

    if (icon && menu) {
        icon.addEventListener("click", function (e) {
            e.stopPropagation();
            menu.classList.toggle("show-dropdown");
        });

    // Tutup dropdown saat klik di luar
        document.addEventListener("click", function () {
            menu.classList.remove("show-dropdown");
        });
    }
});

// Validasi form kontak
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        if (!nama || !email || !pesan) {
                alert("Semua kolom wajib diisi.");
                return;
        }

        if (!email.includes("@") || !email.includes(".")) {
                alert("Masukkan alamat email yang valid.");
                return;
        }

        alert("Pesan berhasil dikirim. (simulasi)");
        form.reset(); // kosongkan form
        });
    }
});

//hamburger
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        });
    }
});