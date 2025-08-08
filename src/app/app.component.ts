import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isScrolled = signal<boolean>(false);

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 30);
  }
}
