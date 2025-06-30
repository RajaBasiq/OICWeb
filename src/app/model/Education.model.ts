class Education {
    Name: string;
    StartingYear: number;
    EndingYear?: number; // Optional if ongoing
    Institute: string;
    ResultPercentage: number;
    Ongoing: boolean;

    constructor(
        name: string,
        startingYear: number,
        institute: string,
        resultPercentage: number,
        ongoing: boolean,
        endingYear?: number
    ) {
        this.Name = name;
        this.StartingYear = startingYear;
        this.Institute = institute;
        this.ResultPercentage = resultPercentage;
        this.Ongoing = ongoing;
        
        if (!ongoing && endingYear) {
            this.EndingYear = endingYear;
        }
    }
}
