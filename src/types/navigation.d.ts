export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined;
      home: undefined;
      newPatient: undefined;
      calendar: undefined;
      listPatients: undefined;
      detailsPatient: {
        name: string;
        id: number;
        email: string;
        age: number; 
        gender: string;
        phone: number;
        cpf: number;
        rg: number
      };
      anamnesisDetails: {
        id: number;
        name: string;
      };
      newAnamnesis: undefined;
    }
  }
}
