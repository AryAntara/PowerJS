import { Template, draw } from "./Expense"
import { TRANSACTIONS } from "./Expense"

const expense_4 = new Template(10000, 20000, '2022-01-31','untuk beli makan') 
expense_4.append(100, 1000, 'beli kain pel') 

const expense_5 = new Template(100,200, '2024-02-02', 'untuk minum') 

draw.printDetail()

