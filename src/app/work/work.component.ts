import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

    companyDetails = [
    {
      id: '1',
      name: 'TaashaTech Infosolutions Pvt. Ltd.',
      position: 'Full-Stack Developer',
      duration: 'June 2022 - Oct 2022',
      description: [
        "Developing a Knowledge management system for clients leveraging Angular for the frontend framework and Spring boot for the backend.",
        "Designing, Implementing, unit testing and using Git Version Control.",
        "Developed custom directives, decorators, and services to seamlessly integrate and interact with SOA services, enabling enhanced functionality and efficient communication in applications.",
        "Implemented Angular Router to facilitate seamless navigation between views, allowing customers to easily move from one task to another within the single-page application."
      ],

      
    },
    {
      id: '2',
      name: 'SAC, ISRO',
      position: 'Research and Development Intern',
      duration: 'December 2021- May 2022',
      description: [
        "Built a Python desktop application for automatic validation of a satellite data assimilative ocean state forecast model. The purpose of this project was to develop an automatic tool for forecast visualization and validation with observations.",
        "Designed methodology is based on Python and Google Colab, both of which are freely convenient and highly manageable tools. The system can process large amounts of data in a faster way, and the model developed will be robust enough to handle minor changes in data. Estimating and anticipating oceanic flow is crucial for safe and efficient sailing. ",
        "Several steps were involved in making the tool, which included mapping of the data from two sources on a common grid, temporal averaging of forecast fields at daily time intervals, interpolation on the same depth, etc.The tool is capable of computing the basic statistical measures like the Root Mean Square Error (RMSE), Bias, etc. for a period of 30 days.",
      ],
    },
  
    {
      id: '3',
      name: 'Clique',
      position: 'Machine Learning Intern',
      duration: 'December 2020- Jan 2021',
      description: [
        "Worked on Image Crops Mapping.",
        "Match the cropped image with the corresponding original image by finding the bounding box for all cropped images to the original image. Using Computer Vision and Machine Learning techniques, We will define all crops that are associated with one original image.",
        "Used various feature extraction techniques such as SIFT (Scale-Invariant Feature Transform), SURF (Speeded-Up Robust Features), FAST algorithm for corner detection , ORB (Oriented FAST and Rotated Brief) and compared accuracy."
      ],
    },
  ]

  selectedCompany = this.companyDetails[0].id;

}
