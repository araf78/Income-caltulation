function calcTotalExpenses(){
    const foodValue = document.getElementById('food-value').value;
    const rentValue = document.getElementById('rent-value').value;
    const clothesValue = document.getElementById('clothes-value').value;
    //  console.log(foodValue,rentValue,clothesValue)
    // calculate total Expenses
    const totalExpenses =parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue);
    document.getElementById('total-expenses').innerText = totalExpenses;
    console.log('totalExpenses',totalExpenses);   
    return totalExpenses;
}
// total income
function incomeTest(){
    const errorMessage =  document.getElementById('error-message').style.display='block';
}
// document.getElementById('calc-btn').addEventListener('click', 
function balance(){
    const totalIncome = document.getElementById('total-income').value;
    const foodInput = document.getElementById('food-value').value;
    const rentInput =  document.getElementById('rent-value').value;
    const clothesInput =  document.getElementById('clothes-value').value;
    console.log(totalIncome)
    const totalExpenses = calcTotalExpenses();
    // balance calculation
    if(isNaN(totalIncome) || totalIncome < 0){
        // document.getElementById('error-message').style.display = 'block';
       alert('⚠️ Give a Positve number in Income  !');
    }
    else if(isNaN(foodInput) || foodInput < 0){
        alert('⚠️ Give a Positve number in Food  !');
    }
    else if(isNaN(rentInput) || rentInput < 0){
        alert('⚠️ Give a Positve number in Rent  !');
    }
    else if(isNaN(clothesInput) || clothesInput < 0){
        alert('⚠️ Give a Positve number in Clothes  !');
    }
    else{
    const balance = totalIncome - totalExpenses;
    console.log('balance', balance);
    document.getElementById('have-balance').innerText = balance;
    console.log(document.getElementById('have-balance').innerText,'balance')
    return  balance;
    }
};

 function saveCalc(){
    const totalIncome = document.getElementById('total-income').value;
    const saveMoneyInput = document.getElementById('save-money').value;
    if(isNaN(saveMoneyInput)){
        alert('⚠️! Give a number !⚠️')
    }
    else if(saveMoneyInput < 0){
        alert('⚠️! Give a Positive number.Okay !⚠️')
    }
    else{
    const savingAmount = (totalIncome * saveMoneyInput) / 100;
    document.getElementById('saving-amount').innerText = savingAmount;

    const newBalance = balance();
    document.getElementById('remaining-balance').innerText = newBalance - savingAmount;
    }
    };