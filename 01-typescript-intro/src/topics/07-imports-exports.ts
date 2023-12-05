import{Product,taxCalculation,} from './06-function-destructuring';

const shoppingCart:Product[] = [
    {
        description:'Nokia',
        price:100,
    },
    {
        description: 'ipad',
        price: 150,
    }
];

const [total, tax] = taxCalculation({
    products:shoppingCart,
    tax:0.15
});


console.log('Total',total);
console.log('tax',tax);