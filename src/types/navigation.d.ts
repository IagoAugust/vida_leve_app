type Answers = {
  [key: string]: string
};

type Anamnesis = {
  name: string;
  fieldId: string;
  patientId: string;
  answers: Answers;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined;
      signupRoutine: undefined;
      home: undefined;
      newPatient: undefined;
      calendar: undefined;
      patientList: undefined;
      patientDetails: {
        id: any;
      };
      anamnesisDetails: Anamnesis;
      fieldSelection: {
        id: string;
      };
      newAnamnesis: {
        fieldName: string;
        patientId: string;
        fieldId: string;
      }
    }
  }
}
