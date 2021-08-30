interface Vehicle {
  name: string;
  modal: number;
  isAutomatic: boolean;
}

const car1 = {
  name: 'Verna',
  modal: '2013',
  isAutomatic: false,
};

const printCar = (car: Vehicle): void => {
  console.log(car.name);
};

// code reusability

const car2 = {
  name: 'Verna',
  showDetail: (): string => {
    return this.name;
  },
};

const drink3 = {
  label: 'pepsi',
  showDetail: (): string => {
    return this.label;
  },
};

interface Detail {
  showDetail(): string;
}

const showDetails1 = (item: Detail) => {
  console.log(item.showDetail);
};
