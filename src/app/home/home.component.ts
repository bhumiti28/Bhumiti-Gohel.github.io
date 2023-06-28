import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeIntro = "Hey, my name is";
  homeHeading1 = 'Bhumiti Gohel.';
  homeHeading2 = 'I find joy in programming, traveling, music, volunteering, and playing sports like basketball and kabaddi.';
  homeContent = "As a software engineer, I specialize in creating remarkable digital solutions that captivate and engage users.";
  
}
