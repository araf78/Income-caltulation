function calcTotalExpenses(){
    const foodValue = document.getElementById('food-value').value;
    const rentValue = document.getElementById('rent-value').value;
    const clothesValue = document.getElementById('clothes-value').value;
    // calculate total Expenses
    const totalExpenses =parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue);
    document.getElementById('total-expenses').innerText = totalExpenses;
    return totalExpenses;
}
// total income
function balance(){
    const totalIncome = document.getElementById('total-income').value;
    const foodInput = document.getElementById('food-value').value;
    const rentInput =  document.getElementById('rent-value').value;
    const clothesInput =  document.getElementById('clothes-value').value;
    const totalExpenses = calcTotalExpenses();
    // balance calculation
    if(isNaN(totalIncome) || totalIncome < 0){
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
    else if(totalIncome < totalExpenses){
        alert('⚠️ How is it possible man! Income < expenses ??  !');
    }
    else{
    const balance = parseInt(totalIncome - totalExpenses);
    document.getElementById('have-balance').innerText = balance;
    return  balance;
    }
};

 function saveCalc(){
    const totalIncome = document.getElementById('total-income').value;
    const saveMoneyInput = document.getElementById('save-money').value;
    if(isNaN(saveMoneyInput)){
        alert('⚠️! Give a number !⚠️')
    }
    else if(saveMoneyInput < 0 || saveMoneyInput > 100){
        alert('⚠️! Give a number more than 0 & less than 100.Okay !⚠️')
    }
    else{
    const savingAmount = parseInt((totalIncome * saveMoneyInput) / 100);
    document.getElementById('saving-amount').innerText = savingAmount;

    const newBalance = balance();
    document.getElementById('remaining-balance').innerText = parseInt(newBalance - savingAmount);
    }
    };