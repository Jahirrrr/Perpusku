# Perpusku
Perpusku adalah Aplikasi perpustakaan sekolah berbasis website yang berguna untuk pinjam-meminjam buku secara online!

Dibuat dengan :
- MongoDB
- ExpressJS
- ReactJS
- NodeJS

Fitur Lengkap Aplikasi :

- Pustakawan bisa meng-upload data buku, informasi penulis, juga genre buku
- Murid bisa meminjam/mengembalikan buku secara online
- Pustakawan bisa menambahkan/menghapus data pengguna secara manual

## Cara Installnya Gimana MasBro ?

Ikuti Step by step nya satu2 yaaaa :)

### 1) Clone Repo Ini, Atau Download Source Codenya
```
git clone https://github.com/Jahirrrr/Perpusku
```

### 2) Ganti Direktorinya
```
cd Perpusku
```
### 3) Install Dependencies Server/Backend
```
cd server
```

```
yarn install
```

atau

```
npm install
```

### 4) Install Dependencies Client/Frontend
```
cd client
```

```
yarn install
```

atau

```
npm install
```


### 5) Setting MongoDB

Untuk Menyetting MongoDB, kalian buka file .env di direktori server, lalu kalian cari syntax berikut :

```
MONGO_URI="TARUH_DISINI_BANG"
```
Setelah itu kalian taruh URL nya dibagian situ

### 6) Setting Session Secret

Untuk Menyetting Session Secret, kalian buka file .env di direktori server, lalu kalian cari syntax berikut :

```
SESSION_SECRET="MASUKIN_KATA_RAHASIANYA_DONG_BANG"
```
Lalu kalian beri privatekey semau kalian


### 7) Membuat Akun Admin Serta Menyettingnya

Untuk Membuat akun admin, kalian buka file index.js di folder server, lalu
panggil createadmin function:

```
createadmin();
```
Untuk custom akun admin, silakan kalian buka folder server/createAdmin.js, lalu ganti di kode berikut ini :

```js
var createadmin = async (res) => {
  const user = new User({
    name: "Admin Sekolah",
    email: "perpuskuapp@gmail.com",
    dob: new Date(),
    phone: "08xxxxxxxxx",
    isAdmin: true,
    photoUrl: "https://pngfre.com/wp-content/uploads/anime-png-image-pngfre-1.jpg"
  });
```

### 8) Jalani Server

Buka Console NodeJS kalian, lalu ketik:
```
yarn dev
```

atau

```
npm run dev
```


Buka browser kamu, lalu masuk ke:
http://localhost:3000/

## Catatan
Ini adalah Project Open Source, Jika Kalian Ingin Menggunakannya Untuk Kepentingan Pribadi / Komersil, Boleh Saja, Asal Kalian Mencantumkan Kredit, jika ingin meminta password file zip nya, hubungi instagram saya @jahirishere.js

## CREDITS
- Zahir Hadi Athallah

## Donate For Support This Project :)
https://saweria.co/zsoft


