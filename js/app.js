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
document.getElementById('calc-btn').addEventListener('click', function(){
    const totalIncome = document.getElementById('total-income').value;
    const foodInput = document.getElementById('food-value').value;
    const rentInput =  document.getElementById('rent-value').value;
    const clothesInput =  document.getElementById('clothes-value').value;
    console.log(totalIncome)
    const totalExpenses = calcTotalExpenses();
    // balance calculation
    if(isNaN(totalIncome)){
        console.log(totalIncome);
        // document.getElementById('error-message').style.display = 'block';
    }
    else if(isNaN(foodInput)){
        console.log(foodInput);
    }
    else if(isNaN(rentInput)){
        console.log(rentInput);
    }
    else if(isNaN(clothesInput)){
        console.log(clothesInput);
    }
    else{
    const balance = totalIncome - totalExpenses;
    console.log('balance', balance);
    document.getElementById('have-balance').innerText = balance;
    }
});
/* // saving amount & remaning balance calculation
document.getElementById('save-btn').addEventListener('click', function(){
    const totalIncome = document.getElementById('total-income').value;
    const saveMoneyInput = document.getElementById('save-money').value;
    console.log(saveMoneyInput);

    const savingAmount = (totalIncome * saveMoneyInput) / 100;
    document.getElementById('saving-amount').innerText = savingAmount;
    // console.log(document.getElementById('saving-amount').innerText);

    const totalExpenses = calcTotalExpenses();
    document.getElementById('remaining-balance').innerText = totalExpenses - savingAmount;
    // console.log(document.getElementById('remaining-balance').innerText);
}); */
/* document.getElementById('input-pad').addEventListener('click',function(event){
    const inputNumber = event.target.value; */
    // const errorMessage = document.getElementById('error-message');
       // saving amount & remaning balance calculation
// document.getElementById('save-btn').addEventListener('click',..................
 function saveCalc(){
    const totalIncome = document.getElementById('total-income').value;
    const saveMoneyInput = document.getElementById('save-money').value;
    // console.log(saveMoneyInput);
  
    const savingAmount = (totalIncome * saveMoneyInput) / 100;
    document.getElementById('saving-amount').innerText = savingAmount;
    // console.log(document.getElementById('saving-amount').innerText);

    const totalExpenses = calcTotalExpenses();
    document.getElementById('remaining-balance').innerText = totalExpenses - savingAmount;
    // console.log(document.getElementById('remaining-balance').innerText);
    };
   
// });