import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  ngOnInit() {
    this.displayDetails = this.projectsDetails.slice(0,4)
  }

  showMore(){
    if (this.displayDetails.length < this.projectsDetails.length){
      this.displayDetails = this.projectsDetails;
      this.btnText = 'Show Less'
    }
    else{
      this.btnText = 'Show More';
      this.displayDetails = this.projectsDetails.slice(0,3)

    }
  }

  btnText = 'Show More';
  displayDetails:any;
  projectsDetails = [
    {
      name: "Wheat Crop Disease Detection ",
      description: "To detect diseases in wheat crops using Deep Learning Models such as Transfer Learning, EfficientNetB0, GLCM Matrix, feature Extraction and injection in ANN.  Used Kubernetes and container orchestration using minikube and Docker.",
      mainTech: [
        "Transfer Learning",
        "Python",
        "minikube",
        "Docker",
        "Kubernetes"
      ],
      githubLink:"https://github.com/bhumiti28/AgroXG"
    },
    {
      name: "Travel Recommendation System",
      description: "Generates user's travel itineraries based on factors like their budget,kids and adults, types of place they like to visit etc. ",
      mainTech: [
        "HTML", 
        "CSS",
        "Django",
        "Javascript",
        "Bootstrap",
        "Sqlite3",
      
      ],
      githubLink:"https://github.com/bhumiti28/travoyager-travel-recommendation--1"
    },
    {
      name: "Web Search Engine",
      description: "Used concept of scraping & indexing. This includes implementing an inverted search index for search engines, via AVL trees ( Graph Theory) and hashing. Using 1000 different URLs from sites such as geeks for geeks, javatpoint, tutorialspoint, and w3schools for crawling we create complete web search engine.",
      mainTech: [
        "Java"
      ],
      githubLink:"https://github.com/bhumiti28/Quick_search"
    },
    {
      name: "Toxic Comment Classifier with Apache spark",
      description: "In the analysis of textual information using word embedding techniques with Apache Spark, two types of analyses were conducted. The first involved three classification approaches (KNN, DT, and RFC), revealing RFC as the most effective. The second analysis utilized TF-IDF, IDF estimator, and Apache Spark's MlLib to perform six independent binary classification tasks using Multinomial logistic regression on the dataset.",
      mainTech: [
        "Python",
        "Pyspark"
      ],
      githubLink:"https://github.com/bhumiti28/Toxic-comment-classifier"
    },
    {
      name: "Face Recognition System",
      description: "Used algorithm such as SIFT(Scale-Invariant Feature Transform), SURF(Speeded up robust features), FAST, ORB for feature extraction.",
      mainTech: [
        "Python",
      ],
      githubLink:"https://github.com/bhumiti28/Face-Recognition-Challenge"
    },
    {
      name: "Object Detection",
      description: "Used Faster R-CNN and Mask R-CNN region proposal based pre trained deep neural networks to improve the object detection over customised datasets. The Mask R-CNN used by us detects images with a minimum 98 percent confidence. ",
      mainTech: [
        "Python",
        "Transfer Learning"
      ],
      githubLink:"https://github.com/bhumiti28/Object-Detection"
    },
    {
      name: "Crop Prediction System",
      description: "To predict which crop can be grown under a particular set of conditions, implemented several classification algorithms.Based on the input parameters like soil type and weather conditions can predict the crops that can be grown which can be helpful to the farmers.",
      mainTech: [
        "Python",
      ],
      githubLink:"https://github.com/bhumiti28/CSE523-Machine-Learning-BeMAD"
    },
    {
      name: "Music Player ",
      description: "Developed client server based application to stream over IP Multicast using Socket Programming",
      mainTech: [
        "c"
      ],
      githubLink:"https://github.com/bhumiti28/FNB-Listen"
    },

  ]
}
