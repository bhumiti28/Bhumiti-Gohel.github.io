import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public active_fragment: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private readonly route: ActivatedRoute) {
    this.route.fragment.subscribe((frag:any) => {
      console.log('service=',frag)
      this.active_fragment.next(frag);
    });
  }
}
