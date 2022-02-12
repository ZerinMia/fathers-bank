// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {

    //get the amount deposited বাটনে ক্লিক করলে deposite input যা দিব তাকে দেখাবে

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // console.log(depositAmount);
    //diposit এর যে amount পাইছি তাকে deposit e দেখাতে চাই।


    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;


    //update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;



    //clear the deposit input fi অবশ্যই input এর value কে '' দিয়ে clear করতে হবে।
    depositInput.value = '';
})

//handel withdraw envent handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    //click korle withdraw input k dekte pabo
    const withdrawInput = document.getElementById('withdraw-input');

    //amra sudu withdraw input k dekte cai na tar value k dekte cai
    const withdrawAmountText = withdrawInput.value;

    //withdraw value ta taka te ashar jonno newWithdrawAmount number e convert korte hobe
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    //withdraw ta akta text
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear input
    withdrawInput.value = '';
})