
// get value function
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value)
}

function showError(id) {
    document.getElementById(id).classList.remove("hidden");
  }

  function formatCurrency(amout) {
    return `${amout.toFixed(2)}`;
  }

  function addToHistory(income,totalExpenses,balance){
    const historyItem = document.createElement('div');
    historyItem.className =   "bg-white p-3 rounded-md border-l-2 border-indigo-500";

    historyItem.innerHTML = `
    <p>serial : ${count}</p>
     <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
          <p class="text-xs text-gray-500">Income: $${formatCurrency(income)}</p>
          <p class="text-xs text-gray-500">Expenses: $${formatCurrency(
            totalExpenses
          )}</p>
          <p class="text-xs text-gray-500">Balance: $${formatCurrency(balance
          )}</p>
    `;
    const historyContainer = document.getElementById("history-list");
  
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  }

 let count = 0
// add event listner for calculate button
document.getElementById("calculate").addEventListener('click',function(){
    count+=1
    const income = getInputValueById("income")
    const software = getInputValueById("software")
    const Courses= getInputValueById("courses")
    const Internet = getInputValueById("internet")
    
    if(income <= 0 || isNaN(income)){
        showError("income-error" )
        return
    }
    
    if(software <= 0 || isNaN(software)){
        showError("software-error")
        return 
    }

//    if(Courses <=0 || isNaN(Courses)){
//     showError("courses-error")
//       return
//    }
   
//    if(Internet <=0 || isNaN(Internet)){
//     showError("internet-error")
//     return
//    }

   
    const totalExpenses=  software + Courses + Internet;
    const balance = income - totalExpenses;
    
    if(totalExpenses > income){
        showError("logic-error")
        return
    }

    const totalExpenseElement = document.getElementById("total-expenses")
    totalExpenseElement.innerText = totalExpenses.toFixed(2);
    
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);
    
    const results = document.getElementById("results")
    results.classList.remove('hidden')

    addToHistory(income,totalExpenses,balance)
})

// add event listner for calculate saving button
document.getElementById("calculate-savings").addEventListener('click', function(){
    const savingPercentage = getInputValueById("savings")
    const income = getInputValueById("income")
    const software = getInputValueById("software")
    const Courses= getInputValueById("courses")
    const Internet = getInputValueById("internet")
    
    const totalExpenses =  software + Courses + Internet;
    const balance = income - totalExpenses;
    
    const savingAmount = (savingPercentage * balance)/100
    const remainingBlance = balance- savingAmount;
    
    const savingElement = document.getElementById("savings-amount")
    savingElement.innerText = savingAmount.toFixed(2)
    
    const remainingElement = document.getElementById("remaining-balance")
    remainingElement.innerText = remainingBlance
})

// history functionality
const assistantTab = document.getElementById("assistant-tab")
const historyTab = document.getElementById("history-tab")

historyTab.addEventListener('click',function(){

    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    historyTab.classList.remove("text-gray-600")

    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    assistantTab.classList.add("text-gray-600")

    document.getElementById("expense-form").classList.add('hidden')
    document.getElementById("history-section").classList.remove('hidden')
})

assistantTab.addEventListener('click',function(){
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )

    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    
    document.getElementById("expense-form").classList.remove('hidden')
    document.getElementById("history-section").classList.add('hidden')
})

 
