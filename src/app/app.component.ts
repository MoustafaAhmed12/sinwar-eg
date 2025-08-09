import { Component, HostListener, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isScrolled = signal<boolean>(false);
  isOpen = signal<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  openNav() {
    this.isOpen.set(!this.isOpen());
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 0);
  }
}
