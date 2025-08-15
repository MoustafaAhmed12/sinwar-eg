import { Component, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MultiLangService } from './multi-lang.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  multiLangService = inject(MultiLangService);
  translate = inject(TranslateService);
  selectedLang = signal<string>(this.multiLangService.currenLang() ?? 'ar');
  isScrolled = signal<boolean>(false);
  isOpen = signal<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // TODO: change Language
  toggleLanguage() {
    if (this.multiLangService.currenLang() === 'ar') {
      this.selectedLang.set('en');
      this.multiLangService.updateLang('en');
    } else {
      this.selectedLang.set('ar');
      this.multiLangService.updateLang('ar');
    }
  }

  openNav() {
    this.isOpen.set(!this.isOpen());
  }
  

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 0);
  }
}
