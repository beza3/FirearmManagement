export interface OfficerPending {
    id: number;
    fullName: string;
    title:string;
    position:  string;
    email: string;
    phoneNumber: string;
    description: string;
    firearmType: string;
    firearmModel: string;
    manufacturer: string;
    firearmCalibre: string;
    yearManufacture: string;
    source: string; 
    holder: string;
    firearmMechanism: string
    manufacturerSerial: string;
    registeredPosition: string;
    registeredFullName: string;
    registeredTitle: string;
    registeredEmail: string;
    registeredSignature: string;
    registeredDate: Date;
    registeredBodyFullName: string;
    registeredBodyResponsibility: string;
    registeredBodySignature: string;
    registeredBodyDate: Date;
} 