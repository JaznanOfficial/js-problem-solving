// Bismillahir Rahmanir Rahim


// problem number 1 is start

function seerToMon(seer) {
    let mon = seer / 40;
    if (mon == -1) {
        return "This is not acceptable";             //error msg
    }
    return mon;
}

// example
let firstProblemResult = seerToMon(80);
console.log(firstProblemResult);

// problem number 1 is end
































// problem number 2 is start
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    let shirtTotal = shirtQuantity * 100;
    let pantTotal = pantQuantity * 200;
    let shoeTotal = shoeQuantity * 500;
    let allTotal = shirtTotal + pantTotal + shoeTotal;
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return "Negative values are not acceptable.please remove that product or give that product a positive value and try again";     //error msg
    }
    return allTotal;
}
// example
let secondProblemResult = totalSales(3, 2, 1);
console.log(secondProblemResult);
// problem number 2 is end














// problem number 3 is start

function deliveryCost(tShirt) {
    let first100Price = 100;
    let second100Price = 80;
    let third100Price = 50;


    if (typeof (tShirt) == "string") {
        return 'please give a positive number';  //error msg
    }
    else if (tShirt <= 100) {
        let first100Total = tShirt * first100Price;
        return (first100Total);
    }
    else if (tShirt <= 200) {
        let first100Total = 100 * 100;
        let restTShirt = tShirt - 100;
        let second100Total = restTShirt * second100Price;
        let bothTotal = second100Total + first100Total;
        return bothTotal;
    }
    else {
        let first100Total = 100 * first100Price;
        let second100Total = 100 * second100Price;
        let thirdRestTShirt = tShirt - 200;
        let upper200Total = thirdRestTShirt * third100Price;
        let allTotal = first100Total + second100Total + upper200Total;
        return allTotal;
    }
}

// example
let thirdProblemResult = deliveryCost(202);
console.log(thirdProblemResult);

// problem number 3 is end



















// problem number 4 is start
let friends = ['Abdullah', 'Fayjullah', 'Obaidullah', 'Ratul', 'Raisa', 'Ruhi', 'Rafia', 'Rodela'];


function perfectFriend(friends) {
    for (let element of friends) {
        if (element.length == 5) {
            return element;
        }
    }
    return 'please give a array that store a lot of string';   //error msg
}

let friend = perfectFriend(friends);
console.log(friend);

// problem number 4 is end