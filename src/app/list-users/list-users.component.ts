import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  constructor(private userService: UserService) { }

  lesUsers: User[];

  afficherUsers(){
    this.userService.getUsers()
    .subscribe( data => this.lesUsers = data)
    }

    ngOnInit(): void { this.afficherUsers(); }



}
