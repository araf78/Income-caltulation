function calculate(){
    const foodValue = document.getElementById('food-value').value;
    const rentValue = document.getElementById('rent-value').value;
    const clothesValue = document.getElementById('clothes-value').value;
    //  console.log(foodValue,rentValue,clothesValue)
    // calculate total Expenses
    const totalExpenses =parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue);
    document.getElementById('total-expenses').innerText = totalExpenses;
    return totalExpenses;
    // console.log(totalExpenses);   
}
// total income
const totalIncome = document.getElementById('total-income').value;
const haveBalance = document.getElementById('have-balance').value;
const totalExpenses = calculate();
const balance = totalIncome - totalExpenses;
console.log(totalExpenses);
// const totalIncome = calculate();
console.log(totalIncome);
// const balance = calculate();
