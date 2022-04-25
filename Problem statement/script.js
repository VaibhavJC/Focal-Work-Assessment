let input1 = "There are Twenty-Four hours in a day. A year has 14 months."
let ans = "There are thwenty-four hours in a day, 30 days in a month, and 12 months in the calendar year."

//num = 4pts
//word>7 = 3pts
//words<5 = 0pts
//other words = 1pts


let calculateSimilar = (str1, str2) =>{
    let length = 0;
    let array1 = str1.split(' ').filter(w => w !== '');
    let array2 = str2.split(' ').filter(w => w !== '');
    let array3 = [];
    for (let i = 0; i < array1.length; i++) {
        let letter1 = array1[i];
        for (let j = 0; j < array2.length; j++) {
            let letter2 = array2[j];
            if(letter1.toLowerCase() === letter2.toLowerCase()){
                array3.push(letter1)
            }
        }
    }
    return array3
    
}

let calculateLength = (str)=> {
    let array = str.split(' ').filter(w => w !== '');
    let array3 = calculateSimilar(input1, ans)
    for (let k = 0; k < array.length; k++) {

        for (let l = 0; l < array3.length; l++) {
            let letter = array[k]
            if(letter.toLowerCase() === (array3[l].toLowerCase())){
                    if(Number.isInteger(parseInt(letter))){
                    length += 4;
                    console.log(letter + " 4")
                }else if(letter.length > 7){
                    length += 3
                    console.log(letter + " 3")
                }else if(letter.length >= 5 && letter.length <= 7){
                    length += 1
                    console.log(letter + " 1")
                }
                else if(letter.length < 5){
                    length += 0
                    console.log(letter + " 0")
                }
            }
            
        }
        
        
    }
    return length
}


let result1 = calculateLength(input1);
let result2 = calculateLength(ans);

let finalPercentage = (result1/result2) * 100

console.log(result1 + "\n" + result2)