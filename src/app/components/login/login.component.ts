import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  login(event) {
    event.preventDefault();
    var accountNumber = event.target.elements[0].value;
    var password = event.target.elements[1].value;
    console.log(accountNumber);
    console.log(password);
    return false;
  }
  
}
