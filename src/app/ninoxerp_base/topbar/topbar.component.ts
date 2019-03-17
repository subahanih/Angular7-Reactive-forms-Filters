import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  userName = 'Subahan';
  companyName = 'Faris Deparmental Store';

  constructor(private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
