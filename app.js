'use strict'
/////DATA
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000,],
  interestRate: 1.2, // %
  pin: 1111,
  transactions: [
    {
      date: "2022-10-28",
      user: "Jessica Davis",
      amount: 200
    },
    {
      date: "2022-11-28",
      user: "Badal Vashishtha",
      amount: 450
    },
    {
      date: "2022-10-28",
      user: "Badal Vashishtha",
      amount: -400
    },
    {
      date: "2022-10-28",
      user: "Sarah Smith",
      amount: 3000
    },
  ],
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [-200, -4000, 5000, 200],
  interestRate: 1.5,
  pin: 2222,
  transactions: [
    {
      date: "2022-10-28",
      user: "Jonas Schmedtmann",
      amount: -200
    },
    {
      date: "2022-11-28",
      user: "Sarah Smith",
      amount: -4000
    },
    {
      date: "2022-10-28",
      user: "Badal Vashishtha",
      amount: 5000
    },
    {
      date: "2022-10-28",
      user: "Sarah Smith",
      amount: 200
    },
  ],
};

const account3 = {
  owner: 'Badal Vashishtha',
  movements: [-450, 400, -5000, 6000],
  interestRate: 0.7,
  pin: 3333,
  transactions: [
    {
      date: "2022-10-28",
      user: "Jonas Schmedtmann",
      amount: -450
    },
    {
      date: "2022-11-28",
      user: "Jonas Schmedtmann",
      amount: 400
    },
    {
      date: "2022-10-28",
      user: "Jessica Davis",
      amount: -5000
    },
    {
      date: "2022-10-28",
      user: "Sarah Smith",
      amount: 6000
    },
  ],
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [-3000, 4000, -200, -6000, 6000],
  interestRate: 1,
  pin: 4444,
  transactions: [
    {
      date: "2022-10-28",
      user: "Jonas Schmedtmann",
      amount: -3000
    },
    {
      date: "2022-11-28",
      user: "Jessica Davis",
      amount: 4000
    },
    {
      date: "2022-10-28",
      user: "Jessica Davis",
      amount: -200
    },
    {
      date: "2022-10-28",
      user: "Badal Vashishtha",
      amount: -6000
    },
    {
      date: "2022-10-28",
      user: "Badal Vashishtha",
      amount: 6000
    },
  ],
};

const currency = '₹';

const accounts = getAccountsFromLocalStorage()


function getAccountsFromLocalStorage() {
  let accounts = [account1, account2, account3, account4];
  let accountsValue = localStorage.getItem('accounts')
  if (accountsValue == null) {
    localStorage.setItem('accounts', JSON.stringify(accounts))
    return accounts;
  } else {
    return JSON.parse(accountsValue);
  }
}

function saveAccounts(accounts) {
  localStorage.setItem('accounts', JSON.stringify(accounts))
}

// function getopenAccountInfoFromLocalStorage(logedinId) {
//   let accountValue = localStorage.getItem(logedinId)
//   return accountValue
// }
// getopenAccountInfoFromLocalStorage(logedinId)

// function saveLogin(account) {
//   localStorage.setItem('openAccountInfo', JSON.stringify(account))
// }


const section1 = document.querySelector('.section_1')
const section2 = document.querySelector('.section_2')
const section3 = document.querySelector('.section_3')
const section4 = document.querySelector('.section_4')
const section5 = document.querySelector('.section_5')
const A1 = document.getElementById('errorA1')
const A2 = document.getElementById('errorA2')
const A3 = document.getElementById('errorA3')
const A4 = document.getElementById('errorA4')
const closeLoginAlert = document.querySelector('.close_login_error_btn')
const closeHowItWorkbtn = document.querySelector('.close_how_it_works_button')
const textBeforeLogin = document.querySelector('.welcome_text')
const textAfterLogin = document.querySelector('.user_first_name')
const loginId = document.querySelector('.login_username_info')
const loginPassword = document.querySelector('.login_password_info')
const loginBtn = document.querySelector('.submit_info')
const createAccountBtn = document.querySelector('.creating_new_account')
const homePage = document.querySelector('.home_page')
const aboutBankist1 = document.querySelector('.about_bankist_1')
const aboutBankist2 = document.querySelector('.about_bankist_2')

const bodyAfterLogin = document.querySelector('.login_body')
const logoutbtn = document.querySelector('.logout_btn')

const currentBalance = document.querySelector('.actual_amount')
const transactionHistory = document.querySelector('.transaction_history_main')
const aboutTransaction = document.querySelector('.about_transaction')
const transactionAmount = document.querySelector('.transastion_amount')
const transferTo = document.querySelector('.transfer_to')
const transferAmount = document.querySelector('.transfer_amount')
const transferButton = document.querySelector('.transfer_button')
const loanAmount = document.querySelector('.loan_amount')
const loanRequestButton = document.querySelector('.loan_button')
const closeId = document.querySelector('.closing_id')
const closeIdPin = document.querySelector('.closing_id_pin')
const closeButton = document.querySelector('.close_account_button')
const sortTransactionHistory = document.querySelector('.sort_transaction')
const netDeposit = document.querySelector('.total_deposit_value')
const netWithdrawal = document.querySelector('.total_withdrawal_value')
const netInterest = document.querySelector('.total_interest_value')

// function showError(error) {

// }
////////////

// default 
textBeforeLogin.textContent = 'Login to get started'

// creating username
function usernames(accountlist) {
  accountlist.forEach(function (account) {
    account.username = account.owner.toLowerCase().split(' ').map(name => name[0]).join('')
  })
}
usernames(accounts)


// for-login
let currentAccount;
loginBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const username = loginId.value
  const userPin = loginPassword.value
  if (loginId.value && loginPassword.value) {
    const current_Account = accounts.find(function (account) {
      return account.username === username
    })
    // console.log(current_Account)
    if (current_Account?.pin === Number(userPin)) {
      // console.log(current_Account, userPin)
      loginId.value = ''
      loginPassword.value = ''
      loginAfterCreate(current_Account)
    } else {
      // console.log("invalid details")
      section4.classList.remove('hidden')
      A4.classList.remove('hidden')
    }
  } else {
    section4.classList.remove('hidden')
    A1.classList.remove('hidden')
  }
})

function loginAfterCreate(account) {
  currentAccount = account;
  section2.classList.add('hidden')
  section1.classList.remove('hidden')
  bodyAfterLogin.style.opacity = 100;
  textBeforeLogin.textContent = `Welcome  back ${account.owner.split(' ').slice(0, 1)}`
  calcNetAmount(currentAccount)
  movementHistory(currentAccount)
  // saveLogin(account)

}


// balance
let netAmount = 0
let totaldeposit = 0
let totalwithdrawal = 0
const calcNetAmount = function (account) {
  netAmount = 0
  totaldeposit = 0
  totalwithdrawal = 0
  if (account) {
    account.movements.forEach(function (transaction) {
      netAmount = netAmount + transaction
      if (transaction > 0) {
        totaldeposit = totaldeposit + transaction
      } else {
        totalwithdrawal = totalwithdrawal + transaction
      }
    })
  }
  const totalInterest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1
    })
    .reduce((acc, inte) => acc + inte, 0);
  netInterest.textContent = `${Math.abs(totalInterest)}`
  netDeposit.textContent = totaldeposit
  netWithdrawal.textContent = totalwithdrawal
  currentBalance.textContent = `${netAmount}${currency}`
}



// movements History:
const movementHistory = function (account, sort = false) {
  if (account) {
    transactionHistory.textContent = ''
    // const transactionInfo = account.movements
    // const move = sort ? account.movements.slice().sort((a, b) => a - b) : account.transactions;
    let mov;
    account.transactions.forEach(function (transaction) {
      mov = transaction.amount > 0 ? 'DEPOSIT' : 'WITHDRAWAL'
      let html =
        `<div class="transaction_name_amount">
           <div class="transaction-history ${mov}">
             <div class="about_transaction">${transaction.user}</div>
             <div class="transastion_amount">${transaction.amount}${currency}</div>
           </div>
           <span class="transaction-date">${transaction.date}</span>
         </div>
        <hr />`
      transactionHistory.insertAdjacentHTML('afterbegin', html);
    })
  }
}
// movementHistory(currentAccount)

// transfer money
transferButton.addEventListener('click', function (e) {
  e.preventDefault()
  const transferId = transferTo.value
  const transferMoney = Number(transferAmount.value)
  if (transferId, transferMoney > 0) {
    accounts.forEach(function (account) {
      if (transferId === account.username && transferMoney <= netAmount && transferId != currentAccount.username) {
        // console.log(currentAccount.transactions)
        currentAccount.movements.push(-transferMoney)
        currentAccount.transactions.push({
          date: "2022/10/28",
          user: account.owner,
          amount: -transferMoney
        })
        // console.log(currentAccount.transactions)
        account.movements.push(transferMoney)
        // console.log(account.transactions)
        account.transactions.push({
          date: "2022/10/28",
          user: currentAccount.owner,
          amount: transferMoney
        })
        // console.log(account.transactions)
      }
    })
    transferTo.value = ''
    transferAmount.value = ''
  }
  calcNetAmount(currentAccount)
  movementHistory(currentAccount)
})

// request loan
loanRequestButton.addEventListener('click', function (e) {
  e.preventDefault()
  let amountLoan = Number(loanAmount.value)
  if (currentAccount, amountLoan) {
    let curAmount = currentAccount.movements.reduce((acc, cur) => acc + cur, 0)
    if (curAmount >= 0 && curAmount < 100 && amountLoan <= ((curAmount + 100) * 10)) {
      currentAccount.movements.push(amountLoan)
      currentAccount.transactions.push({
        date: "2022/10/28",
        user: 'Bank Loan',
        amount: amountLoan
      })
    } if (curAmount >= 100 && amountLoan < ((curAmount) * 10)) {
      currentAccount.movements.push(amountLoan)
      currentAccount.transactions.push({
        date: "2022/10/28",
        user: 'Bank Loan',
        amount: amountLoan
      })
    }
    calcNetAmount(currentAccount)
    movementHistory(currentAccount)
    loanAmount.value = ''
  }
})

// close account
closeButton.addEventListener('click', function (e) {
  e.preventDefault()
  if (currentAccount) {
    if (closeId.value === currentAccount.username && Number(closeIdPin.value) === currentAccount.pin) {
      const index = accounts.findIndex(acc => acc.username === currentAccount.username)
      accounts.splice(index, 1)
      closeId.value = ''
      closeIdPin.value = ''
      bodyAfterLogin.style.opacity = 0;
      section1.classList.add('hidden')
      section2.classList.remove('hidden')

    }
  }
})
// // closing login alert
closeLoginAlert.addEventListener('click', function (e) {
  e.preventDefault()
  section4.classList.add('hidden')
  A1.classList.add('hidden')
  A2.classList.add('hidden')
  A3.classList.add('hidden')
  A4.classList.add('hidden')
  // section2.classList.remove('hidden')
  //   section2.classList.remove('hidden')
  //   loginId.value = ''
  //   loginPassword.value = ''
})
// logout account
logoutbtn.addEventListener('click', function (e) {
  e.preventDefault()
  section1.classList.add('hidden')
  section2.classList.remove('hidden')
  loginId.value = ''
  loginPassword.value = ''
})



// home page closeButton
homePage.addEventListener('click', function (e) {
  e.preventDefault()
  section3.classList.add('hidden')
  section2.classList.remove('hidden')

})
createAccountBtn.addEventListener('click', function (e) {
  e.preventDefault()
  section2.classList.add('hidden')
  section3.classList.remove('hidden')
})
let i = 4
const newUserFirstName = document.querySelector('.new_account_first_name')
const newUserLastName = document.querySelector('.new_account_last_name')
const newUserPassword = document.querySelector('.new_account_password')
const newUserInterest = document.querySelector('.new_account_interestrate')
const createNewAccountBtn = document.querySelector('.new_account_created')

// for new username
let fullName
function createNewUserName(first, last) {
  fullName = (first.toLowerCase() + ' ' + last.toLowerCase())
  const newUserId = first[0].toLowerCase() + last[0].toLowerCase()
  // console.log(newUserId)
  return newUserId
}

// for new password
function checkingPassword(password) {
  let matchingpin = accounts.some(account => Number(account.pin) === password)
  if (password.toString().length === 4 && !matchingpin) {
    return password
  } else {
    section4.classList.remove('hidden')
    A2.classList.remove('hidden')

  }
}



function creatingNewUserObj(user, pin, interest) {
  const accountA = {
    owner: fullName,
    username: user,
    movements: [],
    interestRate: interest,
    pin: pin,
    transactions: []
  }
  // console.log(accounts)
  accounts.push(accountA)
  loginAfterCreate(accountA)
  section3.classList.add('hidden')

}
createNewAccountBtn.addEventListener('click', function (e) {
  e.preventDefault()
  if (newUserFirstName.value && newUserLastName.value && newUserPassword.value && newUserInterest.value) {
    let firstName = (newUserFirstName.value)
    let lastName = (newUserLastName.value)
    const newUserName = createNewUserName(firstName, lastName)
    let password = Number(newUserPassword.value)
    let pin = checkingPassword(password)
    let interestRate = Number(newUserInterest.value)
    // console.log(newUserName, pin)
    // console.log(firstName, lastName, password, interestRate)
    if (newUserName && pin && interestRate && !isNaN(password) && !isNaN(interestRate) && interestRate >= 0 && interestRate <= 10) {
      // console.log(newUserName, pin, interestRate)
      creatingNewUserObj(newUserName, pin, interestRate)

    } else {
      section4.classList.remove('hidden')
      A3.classList.remove('hidden')

      // console.log('something wrong here')
    }
  } else {
    section4.classList.remove('hidden')
    A1.classList.remove('hidden')
    A2.classList.add('hidden')
    // console.log('please fill all the entries')
  }
})


// how it works button
aboutBankist1.addEventListener('click', function (e) {
  e.preventDefault()
  section5.classList.remove('hidden')
})
aboutBankist2.addEventListener('click', function (e) {
  e.preventDefault()
  section5.classList.remove('hidden')
})
closeHowItWorkbtn.addEventListener('click', function (e) {
  e.preventDefault()
  section5.classList.add('hidden')
})