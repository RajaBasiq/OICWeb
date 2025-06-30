class Student {
    FirstName: string;
    LastName: string;
    Gender: string;
    DateOfBirth: Date;
    Email: string;
    BloodGroup: string;
    CellNumber: string;
    GuardianFirstName: string;
    GuardianLastName: string;
    Relationship: string;
    GuardianEmail: string;
    GuardianCellNumber: string;
    EducationHistory: Education[];

    constructor(
        firstName: string,
        lastName: string,
        gender: string,
        dateOfBirth: Date,
        email: string,
        bloodGroup: string,
        cellNumber: string,
        guardianFirstName: string,
        guardianLastName: string,
        relationship: string,
        guardianEmail: string,
        guardianCellNumber: string,
        AvailHostelFacility:boolean,
        AvailLibraryFacility:boolean,
        educationHistory: Education[]
    ) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Gender = gender;
        this.DateOfBirth = dateOfBirth;
        this.Email = email;
        this.BloodGroup = bloodGroup;
        this.CellNumber = cellNumber;
        this.GuardianFirstName = guardianFirstName;
        this.GuardianLastName = guardianLastName;
        this.Relationship = relationship;
        this.GuardianEmail = guardianEmail;
        this.GuardianCellNumber = guardianCellNumber;
        this.EducationHistory = educationHistory;
    }
}