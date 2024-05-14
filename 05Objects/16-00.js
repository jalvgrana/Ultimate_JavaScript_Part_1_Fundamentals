let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

console.log(address);

// Factory function

function createAddress(street, city, zipCode) {
    return {
        // street: street,
        // city: city,
        // zipCode: zipCode
        street,
        city,
        zipCode
    };
}

