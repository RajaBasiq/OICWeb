// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Define the Student model interface (optional for type checking)
interface Student {
  student: {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    email: string;
    bloodGroup: string;
    cellNumber: string;
  },
  guardian: {
    firstName: string;
    lastName: string;
    Relationship: string;
    email: string;
    cellNumber: string;
  },
  availHostelFacility: boolean;
  availLibraryFacility: boolean;
  educations: Array<{
    Name: string;
    StartingYear: number;
    EndingYear?: number;
    Institute: string;
    ResultPercentage: number;
    Ongoing: boolean;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://localhost:7088/Student';

  constructor(private http: HttpClient) { }

  // Method to post student information
  postStudent(student: Student): Observable<any> {
    console.log('Posting student data:', student);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, student, { headers }).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        throw error;
      })
    );
  }

  getStudents(): Observable<Student[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Student[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        throw error;
      })
    );
  }
  get(id:number): Observable<Student> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Student>(`${this.apiUrl}/${id}`, { headers }).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        throw error;
      })
    );
  }
}
