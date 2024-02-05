import { TRANSACTIONS } from "../global.js"

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24

export class Template {

    outcome = 0
    income = 0
    transactionDescription = ""
    date = "2020-09-04"
    transactionTime = new Date()
    formattedTransactionTime = ""
    trxHistory = []

    /**
     * @param {number} outcome
     * @param {number} income 
     * @param {string} date 
     * @param {string} desc  
     */
    constructor(outcome, income, date, desc) {
        this.outcome = outcome ?? 0
        this.income = income ?? 0
        this.transactionDescription = desc ?? ""
        this.date = date ?? "2020-02-02"
        this.transactionTime = Date.now() - Date.parse(this.date)
        this.formattedTransactionTime = `${Math.floor(this.transactionTime / MILLISECONDS_IN_A_DAY)} Hari yang lalu`
        this.trxHistory.push({
            outcome, income, desc
        })

        TRANSACTIONS.push(this)
    }

    /**
     * Append new transaction 
     * 
     * @param {number} outcome
     * @param {number} income
     * @param {string} desc 
     */
    append(outcome, income, desc) {
        this.trxHistory.push({
            outcome, income, desc
        })

        this.outcome += outcome
        this.income += income
        this.transactionDescription += `, ${desc} `
    }

}