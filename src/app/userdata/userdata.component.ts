import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubjectService } from '../services/subject/subjectservices.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {

  public data: any;
  id: any;

  constructor(private subjectService: SubjectService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getalluser();
  }
  getalluser() {
    this.subjectService.getalluser().subscribe((data: any) => {
      this.data = data.rows;
    })

  }
  editTableData(id: number) {
    this.router.navigate(['userdata/' + id]);
  }
  clickDeleteUser(id: number) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.subjectService.deleteuser(id).subscribe((res: any) => {
          Swal.fire("Deleted!", res.message);
          this.getalluser();
        },
        )
      }
    }
    )
  }
}