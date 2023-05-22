export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined;
      signupRoutine: undefined;
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
    }
  }
}
