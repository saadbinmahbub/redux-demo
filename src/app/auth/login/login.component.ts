import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('saad');
  password = new FormControl('');

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }

  onSubmit(){

  }

}
