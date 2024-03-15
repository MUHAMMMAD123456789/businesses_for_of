let bussines = [
    {
        name: "ali-airlines",
        budget: 3500000,
        tax: 18,
        expences: [
            1200000,
            500000,
            100000
        ]

    },
    {
        name: "jav-oil",
        budget: 1500000,
        tax: 12,
        expences: [
            10000,
            500000,
            25000
        ]

    },
    {
        name: "munir-auto",
        budget: 10000000,
        tax: 24,
        expences: [
            6000000,
            20000,
            60000
        ]

    },
    {
        name: "jago-kalyoshi",
        budget: 500000,
        tax: 6,
        expences: [
            10000,
            8000,
            12000
        ]

    },
    {
        name: "jahonbek-nosfrush",
        budget: 1000000,
        tax: 0,
        expences: [
            200000,
            15000,
            3000
        ]

    },

]

// let tax_each_month = item.budget / 100 * item.tax / 12
// console.log(tax_each_month);




// for(let item of bussines) {
//     let total_expenses = item.expenses.reduce((a,b) => a + b) / 12
//     let total_month_budget = (item.budget / 12) - total_expenses 

//     total_month_budget = total_month_budget - (item.tax * (total_month_budget) / 100) 


//     console.log(total_month_budget);                        
// }






// найти компанию которая больше всех платит налог
// найти компанию которая меньше всех платит налог
// покзать сколько гос-во зарабатывает со всех компаний 
// найти успешные и не успешные 20000
let unsuccessfull = []
let successfull = []



for (let item of bussines) {
    let max = bussines.reduce((a, b) => {

        if (a.tax > b.tax) { return a }
        else {
            return b
        }

    }) 
    console.log(max);
}




for (let item of bussines) {
    let max = bussines.reduce((a, b) => {

        if (a.tax < b.tax) { return a }
        else {
            return b
        }

    }) 
    console.log(max);
}





for (item of bussines) {
    let tax_each_month = item.budget / 100 * item.tax / 12
 

    item.tax_each_month.reduce((a , b) => {a + b})

    console.log(tax_each_month);
}










