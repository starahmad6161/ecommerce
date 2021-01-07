import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter;
  faGooglePlusG = faGooglePlusG;

  constructor() { }

  ngOnInit(): void {
  }

}
