function interest (principal, rate, years) {
    rate = rate || 3.5;//*
    years = years || 5;
    return principal * rate /100 * years;
}

console.log(interest(10000,5));

//* if rate has a value, it is trucy, we use it. If not, 3.5