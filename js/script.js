//A click function for Memory
document.getElementById('memoryone').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost').innerText = '0';
    const memoryCostInt = parseInt(memoryCost);
})

//A click function for Memory

document.getElementById('memorytwo').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost').innerText = '180';
    const memoryCostInt = parseInt(memoryCost);
    console.log(memoryCostInt)

    const total = document.getElementById('total-cost').innerText;
    const totalCost = parseInt(total);
    console.log(totalCost)

    // final cost calsulate
     const finalCost = document.getElementById('total-cost').innerText = totalCost + memoryCostInt;
    document.getElementById('final-amount').innerText = finalCost;
})

//A click function for Memory
document.getElementById('storageone').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost').innerText = '0';
    const memoryCostInt = parseInt(storageCost);
})

//A click function for Memory
document.getElementById('storagetwo').addEventListener('click', function(){
    const storage = document.getElementById('storage-cost').innerText = '100';
    const memoryCostInt = parseInt(storage);
    console.log(memoryCostInt)

    const total = document.getElementById('total-cost').innerText;
    const totalCost = parseInt(total);
    console.log(totalCost)

    // final cost calsulate
    const finalCost = document.getElementById('total-cost').innerText = totalCost + memoryCostInt;
    document.getElementById('final-amount').innerText = finalCost;
})

//A click function for Memory
document.getElementById('storagethree').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost').innerText = '180';
    const memoryCostInt = parseInt(storageCost);
    console.log(memoryCostInt)

    const total = document.getElementById('total-cost').innerText;
    const totalCost = parseInt(total);
    console.log(totalCost)

    // final cost calsulate
    const finalCost = document.getElementById('total-cost').innerText = totalCost + memoryCostInt;
    document.getElementById('final-amount').innerText = finalCost;

})

//A click function for Memory
document.getElementById('deliveryone').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost').innerText = '0';
    const memoryCostInt = parseInt(deliveryCost);
})

//A click function for Memory
document.getElementById('deliverytwo').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost').innerText = '20';
    const memoryCostInt = parseInt(deliveryCost);
    console.log(memoryCostInt)

    const total = document.getElementById('total-cost').innerText;
    const totalCost = parseInt(total);
    console.log(totalCost)
    
    // finalCost calculate
    const finalCost = document.getElementById('total-cost').innerText = totalCost + memoryCostInt;
    document.getElementById('final-amount').innerText = finalCost;
})

//convert best price to an integer number
const bestPrice = document.getElementById('best-price').innerText;
const bestPriceInt = parseInt(bestPrice);

// function for pomocode discount
function pomocode(){
    const inputText = document.getElementById('steve').value;
    const final = document.getElementById('final-amount').innerText;
    if(inputText == 'stevekaku'){
        const amount = final * 0.2;
        // console.log(amount);
        const finalMoney = document.getElementById('final-amount').innerText;
        document.getElementById('final-amount').innerText = finalMoney - amount;
    }
}