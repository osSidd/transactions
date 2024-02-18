const Transaction = require('../models/transactions')
const priceRange = require('../utils/price')

//seed database
const seedDB = async () => {
    try{
        const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
        let data = []
        if(response.ok){
            data = await response.json()
            
            const transactions = await Transaction.find()
            if(transactions.length){
                console.log('data already exists in db')
                return
            }
            else{
                data.forEach(async d => {
                    await Transaction.create({...d, dateOfSale: new Date(d.dateOfSale).getMonth(), date: d.dateOfSale})
                })
                console.log('database seeded')
                return
            }
        }else{
            console.log('repsonse not ok')
            return 
        }
    }catch(err){
        console.log(err)
        return
    } 
}

//get all transactions
const getAllTransactions = async (req, res) => {
    const results = 10
    try{    
        let {month, page, search} = req.query
        month = parseInt(month)
        page = parseInt(page)

        let transactions = await Transaction.find({dateOfSale: month})

        const {totalSale, totalSold, totalUnSold} = getStats(transactions)
        const categories = getCategories(transactions)
        const obj = getPriceRange(transactions)

        transactions = transactions.slice((page-1)*results, results)

        let noOfPages = parseInt(transactions.length/results)
        noOfPages = noOfPages > 0 ? noOfPages : noOfPages + 1

        return res.status(200).json({transactions, noOfPages, totalSale, totalSold, totalUnSold, categories, priceRange: obj})
    }catch(err){
        return res.status(400).json(err.message)
    }
}

//get stats for a month
const getStats = (transactions) => {
    const totalSale = transactions.reduce((total, item) => item.price + total, 0)
    const totalSold = transactions.reduce((total, item) => {if(item.sold) total += 1; return total}, 0)
    const totalUnSold = transactions.reduce((total, item) => {if(!item.sold) total += 1; return total}, 0)

    return {totalSale, totalSold, totalUnSold}
}

//get piechart data
const getCategories = (transactions) => {
    let categories = {}
    transactions.forEach(item => {
        if(categories[item.category]){
            categories[item.category].total += 1
        }
        else{
            categories[item.category] = {category: item.category, total: 1}
        }
    })
    return categories
}

//get price range
const getPriceRange = (transactions) => {
    let rangeObj = [...priceRange]
    transactions.forEach(item => {
       rangeObj = increment(item, rangeObj)
    })
    return rangeObj
}

function increment(item, rangeObj){
    for(let i in rangeObj){
        if(parseInt(i) === rangeObj.length - 1)
        {
            rangeObj[i].total += 1
            return rangeObj
        }
        if(item.price <= rangeObj[i].value){
            rangeObj[i].total += 1
            return rangeObj
        }
    }
}

module.exports = {
    seedDB,
    getAllTransactions,
}