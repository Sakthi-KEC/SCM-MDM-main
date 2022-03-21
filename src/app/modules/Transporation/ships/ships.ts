export interface Ships {
    shipsCode: string;
    shipsCountry: string;
    shipsOrigin: string;
    shipsDestination:string;
    shipsCapacity:number;
    shipsVendor:string;
    cost:number;
    status: string;
    createdBy: string;
    createdDate: string;
    id:string;
  }
  
  export class Ships1 {
    shipsCode!: string;
    shipsCountry!: string;
    shipsOrigin!: string;
    shipsDestination!:string;
    shipsCapacity!:number;
    shipsVendor!:string;
    cost!:number;
    status!: string;
    createdBy!: string;
    createdDate!: string;
    id!:string;
  }