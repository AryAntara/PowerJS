### Pages 

Pagess adalah sebuah bagian dari powered js, yang bisa digunakan untuk mencatat segala hal termasuk sebuah novel atau apapun itu.

### Rule of Pages

1. untuk menggunakan Page kita bisa membuat sebuah file. Nama file dimulai dengan kata Page diikuti oleh tanggal, bulan pendek dan tahun saat ini, contoh `Page_04_Feb_2024.js`

2. untuk membuat sebuah transaction kita bisa membuat constant variable dan membuat instance dari class Template yang disediakan dalam Pages, nama constant variable harus `page`,
contoh 

```js 
import { Template} from "./Page"
const page = new Template('2024-02-04')
```

4. untuk setting title dapat dilakukan dengan cara berikut
```js 
page.setTitle("Judul disini")
```

5. untuk membuat sebuah paragaph dapat dilakukan dengan cara berikut
```js
page.newParagraph(`
Ini adalah sebuah paragraf dari page yang sudah teman-teman buat
`)
```

### CLI command

1. `look`. lihat detail dari page yang sudah temen-temen buat dari index-nya.
2. `list`. list semua pages yang sudah temen-temen buat