const numbers = [1, 2, -1, 3];

const filtered = numbers.filter((n) => n >= 0);

const items = filtered.map((n) => "<li>" + n + "</li>");

const html = '<ul>' + items.join('') + '</ul>'

console.log(items);

console.log(html);
