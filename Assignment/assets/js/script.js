"use strict";
/* 
const businessAccount = {
  capital: 1000,
  balance: 1000,

  makeSale: function (amount) {
    this.balance += amount;
  },
  getBal: function () {
    return this.balance;
  },
  updatedCapital: function (newCapital) {
    this.capital = newCapital;
  },
};
console.log("first capital:", businessAccount.capital);
console.log("first balance:", businessAccount.getBal());

businessAccount.makeSale(500);
console.log("New Balance:", businessAccount.getBal());

businessAccount.updatedCapital(1500);
console.log("Updated Capital:", businessAccount.capital); */

const inventorySystem = {
  capital: 1000,
  stock: 200,
  balance: 0,
  checkBalance: function () {
    return this.balance;
  },
  updatedCapital: function (newCapital) {
    if (newCapital >= 0) {
      this.capital = newCapital;
    } else {
      console.log("Capital is incorrect");
    }
  },
  makeSale: function (unitSold) {
    const unitPrice = 50;
    if (unitSold <= this.stock) {
      const saleAmount = unitSold * unitPrice;
      this.balance += saleAmount;
      this.capital += saleAmount;
      this.stock -= unitSold;
      console.log(
        `Success!. Your balance is $(this.balance), your remaining stock is $(this.stock)`
      );
    } else {
      console.log("Stock is not enough");
    }
  },
};

inventorySystem.updatedCapital(1500);
console.log("New Capital:", inventorySystem.updatedCapital);

inventorySystem.makeSale(5000);
console.log("New Balance:", inventorySystem.checkBalance());
