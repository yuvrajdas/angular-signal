import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent {

  firstName = 'Yuvraj';
  lastName = 'Das';
  fullName = this.firstName+" "+this.lastName;

  updateFirstName(fname:string){
    this.firstName = fname;
  }

  updateLastName(lname:string){
    this.lastName = lname;
  }

  // signal
  sfirstName = signal('Yuvraj');
  slastName = signal('Das');
  sfullName = computed(()=>this.sfirstName()+' '+this.slastName());

  supdateFirstName(fname:string){
    this.sfirstName.set(fname);
  }

  supdateLastName(lname:string){
    this.slastName.set(lname);
  }
}
