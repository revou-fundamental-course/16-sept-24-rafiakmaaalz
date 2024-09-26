let slideIndex = 0;
let autoSlideInterval;

// Fungsi untuk mengganti nama pengguna
function replaceName() {
    const name = prompt("Siapakah nama anda?", "");
    if (name) {
        document.getElementById("user").innerText = name; // Ganti teks di elemen dengan ID 'user'
    }
}

// Menampilkan gambar awal
showDivs(slideIndex);

// Fungsi untuk melanjutkan slide
function plusDivs(n) {
    clearInterval(autoSlideInterval); // Hentikan autoslide saat tombol ditekan
    showDivs(slideIndex += n);
    startAutoSlide(); // Mulai kembali autoslide
}

// Fungsi untuk menampilkan gambar sesuai index
function showDivs(n) {
    const slides = document.getElementsByClassName("img-slideshow");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block"; 
}

// Fungsi untuk memulai autoslide
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        plusDivs(1); // Pindah ke slide berikutnya
    }, 3000); // Ubah gambar setiap 3 detik
}

// Mulai autoslide saat halaman dimuat
window.onload = function() {
    replaceName(); // Meminta nama saat halaman dimuat
    startAutoSlide();
};

function result() {
    // Validasi input
    const nama = document.getElementById("nama").value;
    const tglLhr = document.getElementById("tanggal-lahir").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const pesan = document.getElementById("pesan").value;

    if (nama.trim() === "") {
        alert("Masukkan Nama");
        document.getElementById("nama").focus();
        return false;
    }

    if (tglLhr === "") {
        alert("Masukkan Tanggal Lahir");
        document.getElementById("tanggal-lahir").focus();
        return false;
    }

    if (!gender) {
        alert("Pilih Jenis Kelamin");
        return false;
    }

    if (pesan.trim() === "") {
        alert("Masukkan Pesan");
        document.getElementById("pesan").focus();
        return false;
    }

    // Mendapatkan waktu saat ini
    const time = new Date().toLocaleTimeString();
    const date = new Date().toDateString();

    // Menampilkan hasil
    document.getElementById("result-nama").innerHTML = nama;
    document.getElementById("result-tgl-lhr").innerHTML = tglLhr;
    document.getElementById("result-gender").innerHTML = gender.value;
    document.getElementById("result-pesan").innerHTML = pesan;
    document.getElementById("time").innerHTML = date + ", " + time;

    // Menghapus input setelah submit
    document.getElementById("nama").value = "";
    document.getElementById("tanggal-lahir").value = "";
    document.getElementById("pesan").value = "";
    if (gender) gender.checked = false;
}
