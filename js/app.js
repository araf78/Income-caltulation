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
    if(isNaN(totalIncome)){
        // document.getElementById('error-message').style.display = 'block';
        // totalIncome = '';
       alert('⚠️ Give a number in Income  !');
    }
    else if(isNaN(foodInput)){
        alert('⚠️ Give a number in Food  !');
    }
    else if(isNaN(rentInput)){
        alert('⚠️ Give a number in Rent  !');
    }
    else if(isNaN(clothesInput)){
        alert('⚠️ Give a number in Clothes  !');
    }
    else{
    const balance = totalIncome - totalExpenses;
    console.log('balance', balance);
    document.getElementById('have-balance').innerText = balance;
    console.log(document.getElementById('have-balance').innerText,'balance')
    return  document.getElementById('have-balance').innerText;
    }
};
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

    const newBalance = balance();
    document.getElementById('remaining-balance').innerText = newBalance - savingAmount;
    // console.log(document.getElementById('remaining-balance').innerText);
    };
   
// });