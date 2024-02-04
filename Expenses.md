### Expenses 

Expenses adalah sebuah bagian dari powered js, yang bisa digunakan untuk mencatat pengeluaran dan pemasukan selama sebulan penuh.

### Rule of Expenses

1. untuk menggunakan Expenses kita bisa membuat sebuah file. Nama file dimulai dengan kata Expense diikuti oleh bulan dan tahun saat ini, contoh `Expenses_Feburary_2024.js`

2. untuk membuat sebuah transaction kita bisa membuat constant variable dan membuat instance dari class Template yang disediakan dalam Expenses, nama constant variable harus `expenses_{tanggal hari ini}`,
contoh 

```js 
import { Template} from "./Expense"
const expense_5 = new Template(100,200, '2024-02-02', 'untuk minum') 
```

4. Selain itu, untuk membuat transaction lebih dari satu dalam 1 hari dapat menggunakan method append, 

```js 
import { Template} from "./Expense"
const expense_5 = new Template(10000, 20000, '2022-01-31','untuk beli makan') 
expense_5.append(100, 1000, 'beli kain pel') 
``` 

5. untuk melihat output dari Expenses yang telah dibuat bisa menggunakan function `draw.printQuiet` atau `draw.printDetail`, setelah itu tinggal run filenya.
contoh :
```js 
import { Template, draw } from "./Expense"

const expense_4 = new Template(10000, 20000, '2022-01-31','untuk beli makan') 
expense_4.append(100, 1000, 'beli kain pel') 

const expense_5 = new Template(100,200, '2024-02-02', 'untuk minum') 

draw.printDetail()
```

```sh
node Expenses_February_2024
```

### CLI command
1. `detail`. Melakukan print transaction beserta dengan transactio history
2. `quiet`. Hanya print nominal dan keterangan saja.

contoh : 
``` 
node ./pow.js Expense detail
```



