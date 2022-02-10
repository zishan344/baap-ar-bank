document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    //console.log("Deposit button clicked");
    //get amount deposite
    const depositeinput = document.getElementById("deposite-input");
    const newDepositeAmountText = depositeinput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    const depositeTotal = document.getElementById("deposite-total");
    const priviousDepositeAmountText = depositeTotal.innerText;
    const priviousDepositeAmount = parseFloat(priviousDepositeAmountText);
    const newDepositeTotal = priviousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    //update blance
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = priviousBalanceTotal + newDepositeTotal;
    balanceTotal.innerText = newBalanceTotal;
    //clear the input field
    depositeinput.value = "";
  });

// handle withdraw event handler
document
  .getElementById("withdrow-button")
  .addEventListener("click", function () {
    // console.log("click");
    const withdrowInput = document.getElementById(" withdrow-input");
    const withdrawAmountText = withdrowInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    //console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById("withdrow-total");
    const priviouseWithdrawText = withdrawTotal.innerText;
    const priviouseWithdrawTotal = parseFloat(priviouseWithdrawText);
    const newWithdrawTotal = priviouseWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the withdraw input field
    withdrowInput.value = "";
  });
