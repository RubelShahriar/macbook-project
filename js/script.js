

    const momeryClick = document.getElementById('memoryone').addEventListener('click', function(){
        const bestPrice = document.getElementById('best-price').innerText;
        const bestPriceInt = parseInt(bestPrice);
        console.log(bestPriceInt);
        const storageCost = document.getElementById('storage-cost').innerText;
        const storageCostInt = parseInt(storageCost);
        console.log(storageCostInt)
        const deliveryCost = document.getElementById('delivery-cost').innerText;
        const deliveryCostInt = parseInt(deliveryCost);
        console.log(deliveryCostInt)
        const memoryCost = document.getElementById('memory-cost').innerText = '0';
    const memoryCostInt = parseInt(memoryCost);
    console.log(memoryCostInt)
    
        const total = bestPriceInt + memoryCostInt + storageCostInt + deliveryCostInt;
        const finalCost = document.getElementById('total-cost').innerText = total;
        document.getElementById('final-amount').innerText = finalCost;
    })

    const momeryClick1 = document.getElementById('memorytwo').addEventListener('click', function(){
        const bestPrice = document.getElementById('best-price').innerText;
        const bestPriceInt = parseInt(bestPrice);
        console.log(bestPriceInt);
        const storageCost = document.getElementById('storage-cost').innerText;
        const storageCostInt = parseInt(storageCost);
        console.log(storageCostInt)
        const deliveryCost = document.getElementById('delivery-cost').innerText;
        const deliveryCostInt = parseInt(deliveryCost);
        console.log(deliveryCostInt)
        const memoryCost = document.getElementById('memory-cost').innerText = '180';
    const memoryCostInt = parseInt(memoryCost);
    console.log(memoryCostInt)
    
        const total = bestPriceInt + memoryCostInt + storageCostInt + deliveryCostInt;
        const finalCost = document.getElementById('total-cost').innerText = total;
        document.getElementById('final-amount').innerText = finalCost;
    })


    const storageClick = document.getElementById('storageone').addEventListener('click', function(){
        const bestPrice = document.getElementById('best-price').innerText;
        const bestPriceInt = parseInt(bestPrice);
        const storageCost = document.getElementById('storage-cost').innerText = '0';
        const storageCostInt = parseInt(storageCost);
        const deliveryCost = document.getElementById('delivery-cost').innerText;
        const deliveryCostInt = parseInt(deliveryCost);
        const memoryCost = document.getElementById('memory-cost').innerText ;
    const memoryCostInt = parseInt(memoryCost);
    
        const total = bestPriceInt + memoryCostInt + storageCostInt + deliveryCostInt;
        const finalCost = document.getElementById('total-cost').innerText = total;
        document.getElementById('final-amount').innerText = finalCost;
    })

    const storageClick2 = document.getElementById('storagetwo').addEventListener('click', function(){
        const bestPrice = document.getElementById('best-price').innerText;
        const bestPriceInt = parseInt(bestPrice);
        const storageCost = document.getElementById('storage-cost').innerText = '100';
        const storageCostInt = parseInt(storageCost);
        const deliveryCost = document.getElementById('delivery-cost').innerText;
        const deliveryCostInt = parseInt(deliveryCost);
        const memoryCost = document.getElementById('memory-cost').innerText ;
    const memoryCostInt = parseInt(memoryCost);
    
        const total = bestPriceInt + memoryCostInt + storageCostInt + deliveryCostInt;
        const finalCost = document.getElementById('total-cost').innerText = total;
        document.getElementById('final-amount').innerText = finalCost;
    })

    const storageClick3 = document.getElementById('storagethree').addEventListener('click', function(){
        const bestPrice = document.getElementById('best-price').innerText;
        const bestPriceInt = parseInt(bestPrice);
        const storageCost = document.getElementById('storage-cost').innerText = '180';
        const storageCostInt = parseInt(storageCost);
        const deliveryCost = document.getElementById('delivery-cost').innerText;
        const deliveryCostInt = parseInt(deliveryCost);
        const memoryCost = document.getElementById('memory-cost').innerText ;
    const memoryCostInt = parseInt(memoryCost);
    
        const total = bestPriceInt + memoryCostInt + storageCostInt + deliveryCostInt;
        const finalCost = document.getElementById('total-cost').innerText = total;
        document.getElementById('final-amount').innerText = finalCost;
    })



    const deliveryClick = document.getElementById('deliveryone').addEventListener('click', function(){
        const bestPrice = document.getElementById('best-price').innerText;
        const bestPriceInt = parseInt(bestPrice);
        const storageCost = document.getElementById('storage-cost').innerText;
        const storageCostInt = parseInt(storageCost);
        const deliveryCost = document.getElementById('delivery-cost').innerText = '0';
        const deliveryCostInt = parseInt(deliveryCost);
        const memoryCost = document.getElementById('memory-cost').innerText ;
    const memoryCostInt = parseInt(memoryCost);
    
        const total = bestPriceInt + memoryCostInt + storageCostInt + deliveryCostInt;
        const finalCost = document.getElementById('total-cost').innerText = total;
        document.getElementById('final-amount').innerText = finalCost;
    })


    const deliveryClick2 = document.getElementById('deliverytwo').addEventListener('click', function(){
        const bestPrice = document.getElementById('best-price').innerText;
        const bestPriceInt = parseInt(bestPrice);
        const storageCost = document.getElementById('storage-cost').innerText;
        const storageCostInt = parseInt(storageCost);
        const deliveryCost = document.getElementById('delivery-cost').innerText = '20';
        const deliveryCostInt = parseInt(deliveryCost);
        const memoryCost = document.getElementById('memory-cost').innerText ;
    const memoryCostInt = parseInt(memoryCost);
    
        const total = bestPriceInt + memoryCostInt + storageCostInt + deliveryCostInt;
        const finalCost = document.getElementById('total-cost').innerText = total;
        document.getElementById('final-amount').innerText = finalCost;
    })


document.getElementById('discount').addEventListener('click', function(){
    const inputText = document.getElementById('steve').value;
    const final = document.getElementById('final-amount').innerText;
    if(inputText == 'stevekaku'){
        const amount = final * 0.2;
        // console.log(amount);
        document.getElementById('discount').disabled = true;
        const finalMoney = document.getElementById('final-amount').innerText;
        document.getElementById('final-amount').innerText = finalMoney - amount;
    }
})