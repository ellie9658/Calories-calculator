const foodIntake = [ 
    ['pork meat', 670, '22/02/2020'],// first row
    ['tomatoes', 400, '22/02/2020'],
    ['yogurt', 300, '22/02/2020'],
    ['oats', 300, '22/02/2020'],
    ['spagetti', 490, '22/02/2020'],
    ['bananas', 900, '22/02/2020'],
    ['milk', 100, '22/02/2020'],
    ['tuna', 400, '22/02/2020'],
    ['lettuce', 300, '22/02/2020'],
    ['chocolate', 300, '22/02/2020'],
    ['cake',99999999, '22/02/2020'],
    ['bred', 350, '22/02/2020'],
    ['nuts', 100, '22/02/2020'],
    
    

]

const emptySpace = (space, times) => {
    let result = ""
    for (let i = 0; i < times; i = i + 1) {
        result = result + space
    }
    return result
}

const renderTable = (rows) => {
    let meal  = "meal"
    let grams = "grams"
    let date = "date"
    let afterMealSpace = emptySpace(" ", 20 - meal.length)
    let afterGramsSpace = emptySpace(" ", 20 - grams.length)
    let afterDateSpace = emptySpace(" ", 20 - date.length)
    let line = emptySpace("-", 63)

    let firstRow = meal + afterMealSpace + "|" + grams + afterGramsSpace + "|" + date + afterDateSpace + "|"
    
    console.log(firstRow)
    console.log(line)
     

    for (i = 0; i < foodIntake.length; i = i + 1) {
       let firstCol = foodIntake[i][0]
       let secondCol = foodIntake[i][1]
       let thirdCol = foodIntake[i][2]

       let after1stColSpace = emptySpace(" ", 20 - firstCol.length)
       let after2ndColSpace = emptySpace(" ", 20 - secondCol.toString().length)// fix
       let after3rdColSpace = emptySpace(" ", 20 - thirdCol.length)

      
       let table = firstCol + after1stColSpace + "|" + secondCol+ after2ndColSpace + "|" + thirdCol + after3rdColSpace + "|"

       console.log(table)
    }



    
    
}

renderTable(foodIntake)
console.log(Array(process.stdout.rows).join('\n'));
