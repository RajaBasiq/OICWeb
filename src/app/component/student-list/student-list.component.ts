import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  columns:string[]
  data:any[]
  title:"Students"
  constructor(private studentService: StudentService) 
  {  
  }

  ngOnInit(): void 
  {
    this.studentService.getStudents().subscribe(data => {
      this.columns = Object.keys(data.length > 0 ? data[0] : null);
      this.data = data;
    });
  }

}
