const ages = [12, 14, 16, 14];
const ages2 = [13, 15, 17, 19];

const allAges = ages.concat(ages2).concat([55]);
const allAges2 = [...ages, 5, ...ages2];

const maximum = Math.max(...allAges);


console.log(maximum,"is the highest value!");
console.log(allAges);
console.log(allAges2);

