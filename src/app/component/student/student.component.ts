import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  
  studentForm: FormGroup;
  isEditMode=false;
  userId: string | null = null;

  constructor(private fb: FormBuilder,  private studentService: StudentService,private route: ActivatedRoute
  ) 
  {
    this.studentForm = this.fb.group({
      student: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        bloodGroup: [''],
        cellNumber: ['', Validators.required],
      }),
      availHostelFacility:[false],
      availLibraryFacility:[false],
      guardian: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        relationship: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cellNumber: ['', Validators.required],
      }),
      educations: this.fb.array([this.createEducation()])
    });
  }

  ngOnInit(): void {
    console.log("student-form");
    this.userId=this.route.snapshot.paramMap.get('id') ;
    this.isEditMode= !!this.userId;
    if(this.isEditMode)
      {
        this.studentService.get(parseInt(this.userId)).subscribe(student => {
          this.studentForm.patchValue({
            student:student.student,
            guardian:student.guardian,
            availHostelFacility: student.availHostelFacility,
            availLibraryFacility: student.availLibraryFacility,  
          });
          this.patchEducationArray(student.educations);
        });
      }
    }
  createEducation(): FormGroup {
    return this.fb.group({
      Name: ['', Validators.required],
      StartingYear: ['', Validators.required],
      EndingYear: [''],
      Institute: ['', Validators.required],
      ResultPercentage: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      Ongoing: [false]
    });
  }
  createEducationGroup(data: any): FormGroup {
    return this.fb.group({
      Name: [data.name,],
      StartingYear: [data.startingYear],
      EndingYear: [data.endingYear],
      Institute: [data.institute],
      ResultPercentage: [data.resultPercentage],
      Ongoing: [data.ongoing]
    });
  }
  patchEducationArray(educationList: any[]) {
    this.educations.clear(); // Clear existing controls first

    educationList.forEach(edu => {
      this.educations.push(this.createEducationGroup(edu));
    });
  }
      // Get Education History form array
  get educations(): FormArray {
    return this.studentForm.get('educations') as FormArray;
  }
    // Add a new education record
  addEducation() {
    this.educations.push(this.createEducation());
  }
  // Remove an education record
  removeEducation(index: number) {
    this.educations.removeAt(index);
  }
  // Submit the form
  onSubmit() {
    debugger;
    console.log('Form submitted:', this.studentForm.value);
    if (this.studentForm.valid) {
      this.studentService.postStudent(this.studentForm.value).subscribe(
        response => {
          console.log('Student information saved successfully', response);
        },
        error => {
          console.error('Error saving student information', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
