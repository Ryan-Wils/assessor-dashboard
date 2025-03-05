import { inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  breakpointObserver: BreakpointObserver = inject(BreakpointObserver);
  showContainer = signal(false);

  constructor() {
    this.breakpointObserver
      .observe(['(min-width: 715px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer.set(true);
        } else {
          this.showContainer.set(false);
        }
      });
  }

}
