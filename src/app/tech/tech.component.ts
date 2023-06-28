import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {

  techDetails = [
    {
      heading:"Core",
      techs:[
        "Data Structure and Algorithm",
        "Database Management",
        "Software Engineering",

      ]
    },
    {
      heading:"Programming Language",
      techs:[
        "Java",
        "C ",
        "C++",
        "Python",
        "SQL",
        "HTML",
        "CSS",
        "Javascript",
        "Shell Script",
        "PL/SQL"
      ]


    },
    {
      heading:"Frameworks/Libraries:",
      techs:[
        "JQuery",
        "Angular",
        "Angular JS",
        "AJAX",
        "React JS",
        "Flask",
        "Hadoop",
        "TensorFlow",
        "Pandas",
        "Numpy",
        "OpenCV",
        "Bootstrap",
        "Spring Boot",
        "Spring MVC",
        "Matplotlib"
      ]
    },
    {
      heading:"Tools",
      techs:[
        "Netbeans",
        "Spyder",
        "OracleSQL",
        "Linux",
        "VS Code",
        "Anaconda",
        "MySQL",
        "MongoDB",
        "Github",
       
      
      ]
    },
    {
      heading:"Cloud Infrastructure",
      techs:[
        "Google Cloud Platform(GCP)",
        "Amazon Web Service",
        "Heroku",
        "Kubernetes"
      
      ]

    },
  ]
}
