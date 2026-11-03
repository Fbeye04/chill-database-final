# Menjalankan database lokal

Proyek ini membutuhkan MySQL 8. File Compose di repo ini menjalankan MySQL dalam container terpisah dari database proyek lain, menggunakan port lokal `3306`.

## Persiapan

Pastikan file `.env` ada di folder proyek dan memiliki konfigurasi berikut. Password harus sama dengan password lokal yang akan dipakai container:

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=password_mysql_lokal_anda
DB_NAME=chill_db
DB_PORT=3306
```

Jangan commit `.env` atau membagikan password di dalamnya.

## Mulai database dan API

Dari folder proyek backend:

```bash
docker compose up -d
docker compose ps
npm run dev
```

Saat container MySQL pertama kali dibuat, Docker mengimpor schema lalu data awal dari folder `database/`. Tunggu sampai status container `healthy` sebelum menjalankan API.

Untuk menghubungkan DBeaver, gunakan MySQL dengan host `127.0.0.1`, port `3306`, database `chill_db`, user `root`, dan password yang sama dengan `DB_PASSWORD` di `.env`.

## Menghentikan database

```bash
docker compose down
```

Perintah tersebut mempertahankan data. Jangan gunakan `docker compose down -v` kecuali memang ingin menghapus database lokal beserta seluruh datanya. File SQL init hanya dijalankan saat volume database masih kosong.
