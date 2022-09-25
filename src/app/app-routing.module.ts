import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditdtataComponent } from './editdtata/editdtata.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { UserdataComponent } from './userdata/userdata.component';

const routes: Routes = [
  {
    path:'',
    component:UserdataComponent,

  },
  {
    path:'userdata/:id',
    component:EditdtataComponent
  },
  {
    path:'form',
    component:UserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
