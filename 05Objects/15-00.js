let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(adress) {
    for (let key in address)
    console.log(key, address[key])
}

showAddress(address);