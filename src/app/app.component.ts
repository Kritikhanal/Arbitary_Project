import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'callapi';
  // data={
  //   heading:'description form',
  //   objective:"lorem ipsum"
    
  // }
  // parentFunct(info:any)
  // {
  //   console.log(info);
  // }

  constructor(private http:HttpClient){};
}
