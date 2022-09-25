import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { SubjectService } from '../services/subject/subjectservices.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // @Input() hero: any;
  // @Output() parentFunct:EventEmitter<any>=new EventEmitter()
  public addForm: FormGroup;
  public users: any[] = [];
  public data: any;
  constructor(
    private subjectService: SubjectService,

  ) {
    this.addForm = new FormGroup(
      {
        title: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        description: new FormControl('', [Validators.required,Validators.nullValidator]),
      }
    )
  }

  ngOnInit(): void {
    // this.getalluser()
    // let data=
    // {
    //   name:'asa',age:12
    // }
    // this.parentFunct.emit('data');
  }
  getalluser() {
    this.subjectService.getalluser().subscribe((data: any) => {
      this.data = data.rows;
    })
  }
  
  get title() {
    return this.addForm.get('title');
  }
  get description() {
    return this.addForm.get('description');
  }

  // filldata(){
  //   this.addForm.patchValue(
  //     {
  //       'title':'ROBOTICS',
  //     }
  //   )
  // }
  

  onUserSubmit() {
    // console.warn(this.addForm.value);
    this.subjectService.createuser(this.addForm.value).subscribe({
      next: (res: any) => {
        this.users = res;
        this.addForm.reset();
      },
    });
  }

  
}



