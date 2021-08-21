document.getElementById('memoryone').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost').innerText = '0';
    const memoryCostInt = parseInt(memoryCost);
})
document.getElementById('memorytwo').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost').innerText = '180';
    const memoryCostInt = parseInt(memoryCost);
})
document.getElementById('storageone').addEventListener('click', function(){
    const memoryCost = document.getElementById('storage-cost').innerText = '0';
    const memoryCostInt = parseInt(memoryCost);
})
document.getElementById('storagetwo').addEventListener('click', function(){
    const memoryCost = document.getElementById('storage-cost').innerText = '100';
    const memoryCostInt = parseInt(memoryCost);
})
document.getElementById('storagethree').addEventListener('click', function(){
    const memoryCost = document.getElementById('storage-cost').innerText = '180';
    const memoryCostInt = parseInt(memoryCost);
})
document.getElementById('deliveryone').addEventListener('click', function(){
    const memoryCost = document.getElementById('delivery-cost').innerText = '0';
    const memoryCostInt = parseInt(memoryCost);
})
document.getElementById('deliverytwo').addEventListener('click', function(){
    const memoryCost = document.getElementById('delivery-cost').innerText = '20';
    const memoryCostInt = parseInt(memoryCost);
})

function pomocode(){
    const inputText = document.getElementById('steve').value;
    const final = document.getElementById('final-amount').innerText;
    if(inputText == 'stevekaku'){
        const amount = final * 0.2;
        console.log(amount);
        const finalMoney = document.getElementById('final-amount').innerText;
        document.getElementById('final-amount').innerText = finalMoney - amount;
    }
}