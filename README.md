<img width="1920" height="1020" alt="image" src="https://github.com/danJidan/pwl25-mini-project/blob/main/screenshots/Screenshot%202025-10-27%20114518.png" />

Gambar di atas menunjukkan hasil pengujian endpoint `POST http://localhost:3000/movies`.  
Endpoint ini digunakan untuk menambahkan data film baru ke dalam database.  
Body dikirim dalam format JSON berisi data film seperti judul, genre, sutradara, tahun rilis, dan rating.  
Setelah request dikirim, server merespon dengan pesan *“Movie created”* dan ID dari film baru yang berhasil dibuat (`movie: 3`).  
Respon memiliki status **201 Created**, menunjukkan bahwa data baru telah berhasil dimasukkan ke tabel `movies`.

<img width="1920" height="1020" alt="image" src="https://github.com/danJidan/pwl25-mini-project/blob/main/screenshots/Screenshot%202025-10-27%20114841.png" />


Pada gambar di atas ditampilkan hasil pengujian endpoint `GET http://localhost:3000/movies`.  
Endpoint ini berfungsi untuk menampilkan seluruh data film yang ada di dalam database.  
Respon yang diterima berupa kumpulan objek JSON berisi atribut seperti `id`, `title`, `genre`, `director`, `release_year`, `rating`, dan `created_at`.  
Hasil pengujian menunjukkan status **200 OK**, menandakan bahwa data berhasil diambil dan ditampilkan tanpa error.

<img width="1920" height="1020" alt="image" src="https://github.com/danJidan/pwl25-mini-project/blob/main/screenshots/Screenshot%202025-10-27%20115059.png" />

Gambar ini menampilkan pengujian endpoint `PUT http://localhost:3000/movies/1`.  
Endpoint ini berfungsi untuk memperbarui data film berdasarkan ID tertentu.  
Pada contoh ini, film dengan ID 1 diperbarui menjadi *The Lord of the Rings: The Fellowship of the Ring* dengan sutradara *Peter Jackson* dan rating 8.8.  
Server mengembalikan pesan *“Movie updated”* dan nilai `updated: 1`, yang menandakan satu data berhasil diperbarui.  
Respon berstatus **200 OK**, artinya pembaruan berhasil dilakukan dan disimpan ke database.

<img width="1920" height="1020" alt="image" src="https://github.com/danJidan/pwl25-mini-project/blob/main/screenshots/Screenshot%202025-10-27%20114949.png" />


Gambar ini menunjukkan hasil pengujian endpoint `GET http://localhost:3000/movies/3`.  
Endpoint ini digunakan untuk mengambil satu data film berdasarkan ID.  
Respon yang diberikan berupa satu objek JSON berisi informasi lengkap film dengan judul *The Last Air Bender*, genre *Fantasy*, sutradara *Ang*, tahun rilis 2005, dan rating 9.1.  
Status respon **200 OK** menandakan bahwa data berhasil ditemukan di database dan dikirimkan ke klien dengan benar.


<img width="1920" height="1020" alt="image" src="https://github.com/danJidan/pwl25-mini-project/blob/main/screenshots/Screenshot%202025-10-27%20115314.png" />

Gambar ini menunjukkan hasil dari endpoint `DELETE http://localhost:3000/movies/1`.  
Endpoint ini digunakan untuk menghapus data film dari database berdasarkan ID tertentu.  
Setelah request dijalankan, server merespon dengan pesan *“Movie deleted”* dan status **200 OK**.  
Hal ini menandakan bahwa film dengan ID tersebut telah berhasil dihapus dari tabel `movies` secara permanen.


### 📚 Kesimpulan
Dari seluruh pengujian di atas, dapat disimpulkan bahwa seluruh endpoint CRUD — **Create, Read, Update, Delete** — telah berjalan dengan baik.  
Setiap permintaan menghasilkan respon sesuai fungsinya dengan status HTTP yang benar (**200 OK** dan **201 Created**).  
Hal ini membuktikan bahwa integrasi antara **Express.js** dan **MySQL** berjalan sukses.
