const drink = ['brown', true, 49]; //color, carbonated, sugar
// we can define the structure as array but in these user can reorder things and that will cause an issue.
// so for that we will use tuple the order of element would be fixed;

const drink1: [string, boolean, number] = ['brown', true, 48];

// instead of using it everywhere we can define type object as well

type Drink = [string, boolean, number];

const drink2: Drink = ['brown', true, 30];
// drink2[1] = 30; shows warning
