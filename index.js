var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new least favorite customer'; // This will result in an error
}
