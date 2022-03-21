export interface Trains {
    trainsCode: string;
    trainsCountry: string;
    trainsOrigin: string;
    trainsDestination:string;
    trainsCapacity:number;
    trainsVendor:string;
    cost:number;
    status: string;
    createdBy: string;
    createdDate: string;
    id:string;
  }
  
  export class Trains1 {
    trainsCode!: string;
    trainsCountry!: string;
    trainsOrigin!: string;
    trainsDestination!:string;
    trainsCapacity!:number;
    trainsVendor!:string;
    cost!:number;
    status!: string;
    createdBy!: string;
    createdDate!: string;
    id!:string;
  }