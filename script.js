<script>
    document.getElementById('language-switcher').addEventListener('change', function () {
        const selectedLanguage = this.value;
        if (selectedLanguage === 'en') {
            // Ganti teks menjadi Bahasa Inggris
            document.querySelector('h2').textContent = "Welcome to Zikri Store!";
            document.querySelector('p').textContent = "Find our collection of women's clothing:";
            // Tambahkan perubahan lain sesuai kebutuhan
        } else {
            // Ganti teks kembali menjadi Bahasa Indonesia
            document.querySelector('h2').textContent = "Selamat datang di Zikri Store!";
            document.querySelector('p').textContent = "Temukan koleksi baju wanita kami:";
            // Tambahkan perubahan lain sesuai kebutuhan
        }
    });
</script>
