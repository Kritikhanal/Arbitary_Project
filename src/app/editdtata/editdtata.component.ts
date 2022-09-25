import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { SubjectService } from '../services/subject/subjectservices.service';
@Component({
  selector: 'app-editdtata',
  templateUrl: './editdtata.component.html',
  styleUrls: ['./editdtata.component.scss']
})
export class EditdtataComponent implements OnInit {

  public data: any;
  public id:any;
  public editForm:FormGroup;
  public users: any[] = [];

  constructor( 
    private subjectService: SubjectService,
    private router : ActivatedRoute,
    private location : Location
    ){
        this.editForm = new FormGroup({
            title: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
            description: new FormControl('', [Validators.required,Validators.nullValidator]),
            type: new FormControl('', [Validators.required]),
            status: new FormControl('', [Validators.required]),
          })
     }

  ngOnInit(): void {
  this.id = this.router.snapshot.paramMap.get('id')
  this.getuserbyid();
  }

  getuserbyid() {
    this.subjectService.getuserbyid(this.id).subscribe((data: any) => {
      this.data = data.careerAndAdmissionData
      this.editForm.patchValue({
        title:this.data.title,
        description:this.data.description,
        // type:this.data.type,
        // status:this.data.status,
      })
      
      
    })
  }
  
  get title() {
    return this.editForm.get('title');
  }
  get description() {
    return this.editForm.get('description');
  }

  onUserEditSubmit() {
    this.subjectService.updateuser(this.id, this.editForm.value).subscribe((res: any) => {
       this.location.back();
      },
    )
  };
}
