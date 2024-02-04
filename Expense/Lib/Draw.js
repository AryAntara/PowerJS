import { TRANSACTIONS } from "../global.js";

const FIELD_DATE = 'Tanggal'
    , FIELD_OUTCOME = 'Pegeluaran'
    , FIELD_INCOME = 'Pemasukan'
    , FIELD_DESCRIPTION = 'Deskripsi'

    , FEILD_TRANSACTION_HISTORY = {
        title: 'Transaction History', callback: (items) => {
            let itemString = ":\n"

            for (let item of items) {
                itemString += ' + Income : ' + item.income + '\n'
                itemString += ' + Outcone : ' + item.outcome + '\n'
                itemString += ' + Decsription : ' + item.desc + `\n${Line}\n`
            }
            return itemString
        }
    }

const Line = '------------'

export class Draw {
    transactions = []
    fields = {}
    constructor() {
        this.transactions = TRANSACTIONS
    }

    /**
     * Print transaction
     * @param {boolean} oneLine
     */
    print(oneLine = false) {
        if (!this.fields) return

        let separator = oneLine ? ", " : "\n"

        let trxString = ""
        for (let transaction of this.transactions) {
            trxString += `\n${Line}\n${Line}\n`
            for (let field of Object.keys(this.fields)) {

                if(this.fields[field] === '-'){
                    trxString += transaction[field] + separator
                    continue
                }

                if (typeof this.fields[field] == 'string') {
                    trxString += this.fields[field] + ' : ' + transaction[field].toString().trim() + separator
                    continue
                }

                const callback = this.fields[field].callback
                const processedField = callback ? callback(transaction[field]) : transaction[field].trim()
                trxString += this.fields[field].title + ' : ' + processedField.trim() + separator
            }
            trxString = trxString.slice(0, trxString.length - 1).trim() + '\n'
        }

        console.log(trxString)
    }

    /**
     * Print fast only date, outcome, income, description
     */
    printQuiet() {
        this.fields = {
            date: FIELD_DATE,
            outcome: FIELD_OUTCOME,
            income: FIELD_INCOME,
            transactionDescription: FIELD_DESCRIPTION
        }
        this.print(true)
    }

    /**
     * Print detail
     */
    printDetail() {
        this.fields = {
            formattedTransactionTime : '-', 
            date: FIELD_DATE,
            outcome: FIELD_OUTCOME,
            income: FIELD_INCOME,
            transactionDescription: FIELD_DESCRIPTION,
            trxHistory: FEILD_TRANSACTION_HISTORY,
        }
        this.print(false)
    }
}
