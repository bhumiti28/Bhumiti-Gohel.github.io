import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutContent = [
    "I earned a Bachelor's degree in Information and Communication Technology with a specialization in Computer Science from Ahmedabad University. My education provided a strong foundation in statistical analysis, machine learning, and data visualization. Throughout my studies, I actively participated in real-world Software Engineering Projects, enhancing my skills in teamwork, coding, technical literacy, problem-solving, and multitasking.",
    "Following the completion of my degree, I embarked on a six-month internship at ISRO, where I contributed to projects involving the development of a tool for automatic validation of a satellite data assimilative ocean state forecast model on Nucleus for European Modelling of the Ocean (NEMO) analysis. This valuable experience afforded me the opportunity to work with intricate datasets and refine my abilities in data cleaning, transformation, and visualization.",
    "With my profound technical acumen and proficiency, I aspire to channel my expertise and knowledge in a manner that guarantees perpetual professional and personal advancement throughout my career. This pursuit will facilitate my journey towards mastery in the realm of computer science. Undoubtedly, such an accomplishment will prove advantageous to the organization at large, fostering progress and enhancing the overall trajectory of the entire institution."
  ]
}
