interface Product {
    description: string;
    price : number;
}


const phone: Product ={
    description : 'NOkia A1',
    price: 150.0
}


const tablet: Product ={
    description : 'iPad Air',
    price: 250.0
}


interface TaxCalculationOptions{
    tax : number;
    products: Product[];
}


function taxCalculation( options: TaxCalculationOptions ):number[]{

    let total =0;

    options.products.forEach (product => {
        total+= product.price
    });

    return [total, total * options.tax]
}


const shoppingCart = [phone,tablet];
const tax = 0.15;


const result = taxCalculation({
    products:shoppingCart,
    tax:tax,
})

console.log('total',result[0]);
console.log('tax',result[1]);


export{};