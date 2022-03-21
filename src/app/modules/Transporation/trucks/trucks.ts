export interface Trucks {
    truckCode: string;
    truckCountry: string;
    truckOrigin: string;
    truckDestination:string;
    truckCapacity:number;
    truckVendor:string;
    cost:number;
    status: string;
    createdBy: string;
    createdDate: string;
    id:string;
  }
  
  export class Trucks1 {
    truckCode!: string;
    truckCountry!: string;
    truckOrigin!: string;
    truckDestination!:string;
    truckCapacity!:number;
    truckVendor!:string;
    cost!:number;
    status!: string;
    createdBy!: string;
    createdDate!: string;
    id!:string;
  }