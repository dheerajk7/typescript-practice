const carMakers = []; //we should always add annotation so that it will not take any object;

const carMakers1 = ['ford', 'toyota', 'chevy'];

const carMakers2: string[] = [];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

//Help with inference when extracting values;
const value1 = carMakers1[1]; //it know value1 would be string
const value2 = carMakers1[2];

// help to prevent incompatible values
// carMakers1.push(100);

// we can get help with map filter and reduce

carMakers2.map((car: string): string => {
  return car; // here we will get autocomplete option based on type.
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2020-20-10'];
importantDates.push('2030-12-21');
importantDates.push(new Date());
// importantDates.push(100); show warning
