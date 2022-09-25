import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ServerApis } from 'api-constant';
import { TransportserviceService } from '../transportservice/transportservice.service';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    protected http:HttpClient,
    private transportService:TransportserviceService
  ) { }
  getuser(url:string,)
  {
    return this.transportService.Read(`${ServerApis.userURL}/${url}`);
  }
  getalluser()
  {
    return this.transportService.Read(`${ServerApis.userURL}`);
  }
  createuser(req:any)
  {
    return this.transportService.Create(req,ServerApis.userURL);
  }
  updateuser(userid:any,req:any)
  {
    return this.transportService.Update(req,`${ServerApis.userURL}/${userid}`);
  }
  deleteuser(userid:number)
  {
    return this.transportService.Delete(`${ServerApis.userURL}/${userid}`)
  }
  getuserbyid(id:number)
  {
    return this.transportService.Read(ServerApis.userURL + '/'+ id);
  }


}
