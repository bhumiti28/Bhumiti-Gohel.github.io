import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationService } from './navigation.service';
import { ProjectsComponent } from './projects/projects.component';
import { SocialsComponent } from './socials/socials.component';
import { TechComponent } from './tech/tech.component';
import { WorkComponent } from './work/work.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TechComponent,
    EducationComponent,
    ProjectsComponent,
    WorkComponent,
    SocialsComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  // public isExpanded = false;

  // public toggleMenu() {
  //   this.isExpanded = !this.isExpanded;
  // }
  //use this method to scroll to bottom i.e. footer with links
  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  @ViewChild('navbar', { read: ElementRef })
  private navbar?: ElementRef;
  @ViewChild('about', { read: ElementRef })
  private about?: ElementRef;
  @ViewChild('work', { read: ElementRef })
  private work?: ElementRef;
  @ViewChild('education', { read: ElementRef })
  private education?: ElementRef;
  @ViewChild('projects', { read: ElementRef })
  private projects?: ElementRef;
  @ViewChild('tech', { read: ElementRef })
  private tech?: ElementRef;

  constructor(private navigationService: NavigationService) { }

  @HostListener('window:scroll', ['$event'])
  private _update_active_fragment(event: any) {
    event.preventDefault();
    let top = window.pageYOffset;
    // let bottom = window.pageYOffset + window.innerHeight - 50;

    if (top >= 50) {
      this.navbar?.nativeElement.classList.add('scroll-header');
    }
    else {
      this.navbar?.nativeElement.classList.remove('scroll-header');
    }
     
    top += 50;
    switch (true) {

      case top >= this.tech?.nativeElement.offsetTop: {
          this.navigationService.active_fragment.next('tech');
          break;
        }

      case 
        top >= this.projects?.nativeElement.offsetTop: {
          this.navigationService.active_fragment.next('projects');
          break;
        }

      case 
        top >= this.education?.nativeElement.offsetTop: {
          this.navigationService.active_fragment.next('education');
          break;
        }

      case 
        top >= this.work?.nativeElement.offsetTop: {
          this.navigationService.active_fragment.next('work');
          break;
        }

      case top >= this.about?.nativeElement.offsetTop : {
          this.navigationService.active_fragment.next('about');
          break;
        }

      default:
        break;
    }

  }
}
