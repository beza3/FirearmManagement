// Update your Firearm type or interface to include missing properties
export interface Firearm {
    assignedSerial: string;
    firearmType: string;
    firearmModel: string;
    manufacturer: string;
    firearmCalibre: string;
    yearManufacture: string;
    source: string;
    manufacturerSerial: string;
    markedBy: string;
    store: string;
    dateMarked: Date;
    id: string; // Add the missing properties
    isFire: boolean; 
    firearmMechanism: string;
    magazineCapacity: string;
    additionalComment: string;
    selected?: boolean;

  }
  