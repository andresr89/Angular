




export class person {
    //  public name: string;
    //  private address : string;

     constructor(
        public name: string,
        public addres:string = 'No Address'

        ){}
}
export class Hero extends person{
    constructor ()

}

const ironman = new Hero('Ironman', 'New York');

console.log (ironman)
