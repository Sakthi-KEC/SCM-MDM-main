export interface Flights {
    flightsCode: string;
    flightsCountry: string;
    flightsOrigin: string;
    flightsDestination:string;
    flightsCapacity:number;
    flightsVendor:string;
    cost:number;
    status: string;
    createdBy: string;
    createdDate: string;
    id:string;
  }
  
  export class Flights1 {
    flightsCode!: string;
    flightsCountry!: string;
    flightsOrigin!: string;
    flightsDestination!:string;
    flightsCapacity!:number;
    flightsVendor!:string;
    cost!:number;
    status!: string;
    createdBy!: string;
    createdDate!: string;
    id!:string;
  }