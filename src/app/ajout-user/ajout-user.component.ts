import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.css']
})
export class AjoutUserComponent {

  userForm: FormGroup;
constructor(private userService: UserService,
private formBuilder:FormBuilder, private router:Router) { }

ngOnInit(): void {
this.userForm = this.formBuilder.group(
{ name:'', age:0 } )
}

  onAjouter(){
    this.userService.addUser(this.userForm.value)
    .subscribe(data => console.log(data));
    this.router.navigate(['list']);
    }
}
