
let billTotal = document.getElementById("billTotalInput")
let tip = document.getElementById("tipInput")
let peopleNumber = document.getElementById("numberOfPeople")
let personalTotal = document.getElementById("perPersonTotal")

let numberOfPeople = Number(peopleNumber.innerText)

const calculateBill = () => {
  let bill = Number(billTotal.value)
  let tipPrecentage = Number(tip.value) /100
  let totalTipAmount = bill * tipPrecentage
  let total = bill + totalTipAmount
  let perPersonTotal = total / numberOfPeople

  personalTotal.innerText = perPersonTotal.toFixed(2)
  
}

const increasePeople = () => {
  numberOfPeople +=1
  peopleNumber.innerText = numberOfPeople
  calculateBill()
}

const decreasePeople = () => {
  // guard clause
  if (numberOfPeople <=1) {
    return
  }
   numberOfPeople -=1
  peopleNumber.innerText = numberOfPeople
  calculateBill()
}

