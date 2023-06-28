import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from '../material/material.module';
import { state, style, trigger } from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { NavigationService } from '../navigation.service';

export const routes: Routes = [];


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    // MaterialModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'rotate(0deg)'
      })),
      state('closed', style({
        transform: 'rotate(-180deg)'
      }))
    ]),
  ]
})
export class NavbarComponent {

  // @Input() isExpanded?: boolean;
  // @Output() toggleMenu = new EventEmitter();

  isMenuCollapsed=true;

  public routeLinks = [
    { link: "about", name: "About" },
    { link: "work", name: "Experience" },
    { link: "education", name: "Education" },
    { link: "projects", name: "Portfolio" },
    { link: "tech", name: "Technologies" }
  ];

  active_fragment = '';


  constructor(router: Router, private navigationService: NavigationService) {
    this.navigationService.active_fragment.subscribe((res) => {
      console.log('route change=', res)
      this.active_fragment = res
    })

  }

  changeRoute(link:string){
    
    this.navigationService.active_fragment.next(link);
  }


}
