import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  host: {
    '(document:click)': 'handleClick($event)'
},
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  toggleMenu: boolean = false;
  // userExist = this.loginService.isAuthenticated();
 


  // name = localStorage.getItem('name');
  constructor(private _router: Router, private elementRef: ElementRef,
    ) { }

  ngOnInit() {

  }


  // username() : string{
  //   this.userProfileService.getProfile().subscribe(res => {
  //     this.user = res;
  //     this.name = this.user.name
  //   })
  //   return this.name;
  // }

  handleClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
        this.toggleLogin = false;
      this.toggleMenu = false;
    }
}

dashboard() {
  this._router.navigate(['/my-dashboard/home']);
}
profile() {
  this._router.navigate(['/my-dashboard/userprofile']);
}

adminDashboard() {
  this._router.navigate(['/admin/leads']);
}

toggleLogin: boolean = false;
onToggleLogin(): void {
  this.toggleLogin = !this.toggleLogin;
}
logOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('profile');
  localStorage.removeItem('role');
  localStorage.removeItem('upName');
  window.location.reload();

  this._router.navigate(['login']);
}
blog() {
  this._router.navigate(['blogs']);
}
}
