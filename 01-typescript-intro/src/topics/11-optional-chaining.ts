
export interface Passenger{
    name:string;
    children?:string[];

}


const passenger1:Passenger ={
    name : 'Andres',    
}

const passenger2:Passenger ={
    name : 'Lizamar',
    children: ['salome,Andrea'],

}