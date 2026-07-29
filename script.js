const bgMusic = document.getElementById("bgMusic");
const btnBuka = document.getElementById("btnBuka");
const sampulCard = document.getElementById("sampulCard");

// Fungsi untuk menentukan hari ke berapa sekarang berdasarkan tanggal
function dapatkanHariKeBerapa() {
    const hariIni = new Date();
    const tanggal = hariIni.getDate();
    const bulan = hariIni.getMonth() + 1; // getMonth() mulai dari 0, jadi ditambah 1

    // Karena Juli bulan 7, Agustus bulan 8
    if (bulan === 7 && tanggal === 30) return 1; // 30 Juli
    if (bulan === 7 && tanggal === 31) return 2; // 31 Juli
    if (bulan === 8 && tanggal === 1) return 3;  // 1 Agustus
    if (bulan === 8 && tanggal === 2) return 4;  // 2 Agustus
    if (bulan === 8 && tanggal >= 3) return 5;   // 3 Agustus dst (mentok di hari 5)

    return 0; // Jika dibuka sebelum 30 Juli
}

// Aksi ketika tombol "Buka Surat" dipencet
btnBuka.addEventListener("click", () => {
    // 1. Mulai putar musik
    bgMusic.play();

    // 2. Cek sekarang hari ke berapa
    const hariKe = dapatkanHariKeBerapa();

    // 3. Beri animasi menghilang ke sampul
    sampulCard.classList.add("open");

    setTimeout(() => {
        // Hilangkan sampul
        sampulCard.classList.add("hidden");

        // Tampilkan card sesuai hari
        if (hariKe >= 1 && hariKe <= 5) {
            document.getElementById(`day${hariKe}Card`).classList.remove("hidden");
        } else {
            // Kalau belum tanggalnya, munculkan kartu gembok
            document.getElementById("lockedCard").classList.remove("hidden");
        }
    }, 800);
});

// ==========================================
// LOGIKA HARI PERTAMA (MOOD SELECTOR)
// ==========================================
function pilihMood(pilihan) {
    const moodSection = document.getElementById("moodSection");
    const responseSection = document.getElementById("responseSection");
    const responseText = document.getElementById("responseText");
    const d1Image = document.getElementById("d1Image");

    // Sembunyikan menu pertanyaan
    moodSection.classList.add("hidden");
    
    // Tampilkan sesi jawaban
    responseSection.classList.remove("hidden");

    // Ganti teks dan gambar berdasarkan pilihan
    if (pilihan === 1) {
        responseText.innerHTML = "Yeyyy aku seneng ngedengernyaaa, semoga mood kamu sama kayak gini terus yaaa 💖";
        d1Image.src = "assets/cewek_happy.png";
    } 
    else if (pilihan === 2) {
        responseText.innerHTML = "Utututu kacciannn, semangat ayanggg kalau ada kesempatan bobo kamu bobo yaaa jangan main hp 😴";
        d1Image.src = "assets/cewek_sleepy.png";
    } 
    else if (pilihan === 3) {
        responseText.innerHTML = "Jangan keseringan ngomong 'biasa aja' sayanggg gak baik tauuuu tapi it's okayyy semangattt hari iniii sering sering kasih kabar ke aku yaaa ✨";
        d1Image.src = "assets/cewek_idle.png";
    } 
    else if (pilihan === 4) {
        // Aku pasang foto cowok_blush, seolah-olah kamu yang muncul panik minta maaf :D
        responseText.innerHTML = "Maaf sayanggg, aku cumann mau tau keadaan kamuu, semangatt sayanggg sering sering kabarin yaaa 🥺";
        d1Image.src = "assets/cowok_blush.png"; 
    }
}

// Aksi tombol Peluk Virtual di Hari Pertama
document.getElementById("hugBtn").addEventListener("click", function() {
    this.innerHTML = "💖 Peluk Terkirim";
    document.getElementById("status").innerHTML = "✨ Semoga peluk virtualnya sampai yaa ✨";
});