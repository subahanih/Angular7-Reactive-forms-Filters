import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.css']
})
export class FooterbarComponent implements OnInit {
  // left = $('#mainbar').offset.left;
  toggled = false;
  direction = 'left';
  companyName = 'Faris Deparmental Store';

  constructor() { }

  ngOnInit() { }

  toggle() {

    if (!this.toggled) {
      this.toggled = true;
      this.direction = 'right';
      $('#divTopbarErpLogo').css({'width': '70px', 'transition': '1.0s'});
      $('#divMenuBar').css({'width': '70px', 'transition': '1.0s'});
      $('#divMainbar').css({'width': 'calc(100% - 70px)', 'transition': '1.0s'});
      $('#divFooterbarErpLogo').css({'width': '70px',  'textAlign': 'center', 'transition': '1.0s'});
      $('#lblLicence').css({'margin-left': '70px', 'transition': '1.0s'});
      $('#divTopbarCompanyBkgd').css({'margin-left': '80px', 'transition': '1.0s'});
      $('#btnToggle').css({'margin-right': '0'});
      $('#imgErplogo').attr({'src': '../../../assets/images/ninoxerp-logo-shape.png', 'height': '35px'});
    } else if (this.toggled) {
      this.toggled = false;
      this.direction = 'left';
      $('#divTopbarErpLogo').css({'width': '270px',  'transition': '1.0s'});
      $('#divMenuBar').css({'width': '270px', 'transition': '1.0s'});
      $('#divMainbar').css({'width': 'calc(100% - 270px)', 'transition': '1.0s'});
      $('#divFooterbarErpLogo').css({'width': '270px',  'textAlign': 'right', 'transition': '1.0s'});
      $('#lblLicence').css({'margin-left': '270px', 'transition': '1.0s'});
      $('#divTopbarCompanyBkgd').css({'margin-left': '280px', 'transition': '1.0s'});
      $('#btnToggle').css({'margin-right': '15px'});
      $('#imgErplogo').attr({'src': '../../../assets/images/ninoxerp-logo.png'});
    }
  }
}
