import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  btnText = 'Edit Profile';
  isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

  save() {
    if (this.btnText === 'Edit Profile') {
      this.btnText = 'Save Profile';
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
      this.btnText = 'Edit Profile';
    }
  }

}
