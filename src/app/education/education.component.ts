import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    // MaterialModule
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educationDetails = [
    {
      duration: 'Aug 2018 - May 2022',
      name: 'Ahmedabad University',
      city: 'Ahmedabad',
      degree: 'Bachelor of Technology in Information and Communication Technology ',
      marks: '2.76/4'
    },
    {
      duration: 'March, 2018',
      name: 'P.P.Savani Vidhyabhavan',
      city: 'Surat',
      degree: 'Higher Secondary School, Science, GSEB',
      marks: '81.00%'
    },
    {
      duration: 'March, 2016',
      name: 'P.P.Savani Vidhyabhavan',
      city: 'Surat',
      degree: 'Secondary School Certificate, GSEB',
      marks: '91.00%'
    },
  ]

}
