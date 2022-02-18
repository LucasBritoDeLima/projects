import { Item } from '../types/Item';

export const items: Item[] = [
  { date: new Date(2021, 9, 6), category: 'food', title: 'McDonalds', value: 32.12 },
  { date: new Date(2021, 9, 15), category: 'food', title: 'Burger King', value: 28 },
  { date: new Date(2021, 9, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
  { date: new Date(2021, 10, 18), category: 'salary', title: 'Salário ACME', value: 4500 },
  { date: new Date(2022, 0, 1), category: 'food', title: 'sushi', value: 4500 },
  { date: new Date(2022, 0, 1), category: 'food', title: 'sushi', value: 300 },
  { date: new Date(2022, 0, 4), category: 'salary', title: 'Adicional', value: 200 },
];