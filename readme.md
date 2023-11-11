# Todo List Management API

API ini menyediakan layanan untuk membuat, membaca, mengubah, dan menghapus (CRUD) daftar tugas (todo list). Dengan menggunakan API ini, pengguna dapat dengan mudah mengelola aktivitas sehari-hari mereka dan menyusun daftar tugas sesuai kebutuhan.

## Daftar Fitur

1. **Membuat Todo Baru**
   - Endpoint: `POST /api/v1/todo`
   - Deskripsi: Menambahkan tugas baru ke daftar.
   - Parameter Body: `title` (judul tugas).

2. **Melihat Semua Todo**
   - Endpoint: `GET /api/v1/todo`
   - Deskripsi: Menampilkan semua tugas yang telah dibuat.

3. **Melihat Detail Todo**
   - Endpoint: `GET /api/v1/todo/:id`
   - Deskripsi: Menampilkan detail tugas berdasarkan ID.

4. **Memperbarui Todo**
   - Endpoint: `PUT /api/v1/todo/:id`
   - Deskripsi: Mengubah judul atau status tugas berdasarkan ID.
   - Parameter Body: `title` (judul tugas), `status` (status tugas).

5. **Menghapus Todo**
   - Endpoint: `DELETE /api/v1/todo/:id`
   - Deskripsi: Menghapus tugas berdasarkan ID.

6. **Menghapus Semua Todo**
   - Endpoint: `DELETE /api/v1/todo/delete`
   - Deskripsi: Menghapus semua tugas dalam daftar.

## Penggunaan

1. **Mendaftar dan Masuk**
   - Untuk membuat dan mengelola tugas, penggunaan token JWT dapat diperlukan. Gunakan endpoint `POST /api/v1/auth/register` dan `POST /api/v1/auth/login` untuk mendaftar dan masuk.

2. **Menggunakan Endpoint Todo**
   - Setelah masuk, gunakan endpoint di atas untuk membuat, melihat, memperbarui, dan menghapus tugas sesuai kebutuhan.

## Catatan Penting

- Pastikan menyertakan token JWT di header untuk endpoint yang memerlukannya (`Authorization: Bearer <token>`).
- Gunakan parameter yang sesuai untuk setiap operasi CRUD.
- Simpan token JWT dengan aman dan gunakan untuk otentikasi pada setiap permintaan yang memerlukan otentikasi.

## Kontribusi

Jika Anda ingin berkontribusi pada pengembangan proyek ini, silakan buka _issue_ atau kirim _pull request_. Kami sangat menghargai kontribusi Anda!

## Contoh Permintaan
1. Register User
POST /api/v1/auth/register
Content-Type: application/json

{
  "nama" : "Angga Pratama",
  "username" : "angga14",
  "password" : "belajar1"
}

2. Login User

POST /api/v1/auth/login
Content-Type: application/json

{
  "username" : "angga14",
  "password" : "belajar1"
}

3. Membuat Todo Baru

POST /api/v1/todo
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

{
  "title" : "Membuat express js restful Api",
  "status" : "Complete"
}

4. Menampilkan semua Todo

GET /api/v1/todo
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

5. Menampilkan detail Todo

GET /api/v1/todo/69
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

6. Mengupdate Todo sesuai id todo
PUT /api/v1/todo/69
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

7. Menghapus Todo sesuai id todo

DELETE /api/v1/todo/69
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

8. Menghapus semua Todo Sesuai User yang sedang login

DELETE /api/v1/todo/delete
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...



## Contoh Tanggapan

1. Register User

HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Success",
  "statusCode": 200
}

2. Login User

HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Successfull to login user!",
  "statusText": "Successfull to login user!",
  "statusCode": 200,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk2NzkxODMsImRhdGEiOnsidXNlciI6ImFuZ2dhMTQiLCJ1c2VybmFtZSI6ImFuZ2dhMTQiLCJubyI6MTR9LCJpYXQiOjE2OTk2NzU1ODN9.rrsNGVIur_FbQzMVSFShv5ticMpvmm1Ch7SuznTlnTQ",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk2NzkxODMsImRhdGEiOnsidXNlciI6ImFuZ2dhMTQiLCJ1c2VybmFtZSI6ImFuZ2dhMTQiLCJubyI6MTR9LCJpYXQiOjE2OTk2NzU1ODN9.rrsNGVIur_FbQzMVSFShv5ticMpvmm1Ch7SuznTlnTQ",
    "expired_date": 1699679183,
    "user": "angga14",
    "id": 14
  }
}

3. Membuat Todo Baru

HTTP/1.1 200 Ok
Content-Type: application/json

{
  "message": "Successfull to create data Todo!",
  "statusText": "Successfull to create data Todo!",
  "statusCode": 200
}

4. Menampilkan semua Todo
HTTP/1.1 200 Ok
Content-Type: application/json

{
  "message": "Here your data Todo",
  "statusText": "Here your data Todo",
  "statusCode": 200,
  "data": [
    {
      "id": 69,
      "title": "Membuat express js restful Api",
      "user_id": 13,
      "status": "Complete",
      "createdAt": "2023-11-11T04:08:42.000Z",
      "updatedAt": "2023-11-11T04:08:42.000Z"
    }
  ]
}

5. Menampilkan detail Todo
HTTP/1.1 200 Ok
Content-Type: application/json

{
  "id": 69,
  "title": "Membuat express js restful Api",
  "user_id": 13,
  "status": "Complete",
  "createdAt": "2023-11-11T04:08:42.000Z",
  "updatedAt": "2023-11-11T04:08:42.000Z"
}

6. Mengupdate Todo
HTTP/1.1 200 Ok
Content-Type: application/json

{
  "message": "Todo updated successfully",
  "statusCode": 200
}

7. Menghapus Todo
HTTP/1.1 200 Ok
Content-Type: application/json

{
  "message": "Todo deleted successfully",
  "statusCode": 200
}

8. Menghapus user sesuai user yang sedang login
HTTP/1.1 200 Ok
Content-Type: application/json

{
  "message": "All Delete Complete",
  "statusText": "All Data Has Been Deleted",
  "statusCode": 200
}

