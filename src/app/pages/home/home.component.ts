import { Component, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {
    this.setSEO();
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // مدة الحركة بالمللي ثانية
      once: false, // الأنيميشن يشتغل مرة واحدة فقط
    });
  }

  tab = signal<1 | 2>(1);

  toggleTab(i: 1 | 2) {
    this.tab.set(i);
  }

  setSEO() {
    // Title
    this.titleService.setTitle(
      'أفضل شركة حلول ذكية في مصر والسعودية | Sinwar for Smart Solutions'
    );

    // Meta Description
    this.metaService.updateTag({
      name: 'description',
      content:
        'سنوار للحلول الذكية تقدم حلول برمجية وتصميم مواقع وتطبيقات بجودة عالمية داخل مصر والسعودية – اطلب استشارتك الآن 🚀',
    });

    // Meta Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'حلول ذكية, تصميم مواقع, تطبيقات جوال, برمجيات, شركة تقنية, سنوار للحلول الذكية, sinwar smart solutions, مصر, السعودية',
    });

    // Canonical
    this.metaService.updateTag({
      rel: 'canonical',
      content: 'https://www.sinwar.eg.com/',
    });

    // OG Tags
    this.metaService.updateTag({
      property: 'og:title',
      content:
        'أفضل شركة حلول ذكية في مصر والسعودية | سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'حلول برمجية - تصميم مواقع - تطبيقات جوال - اطلب استشارتك الآن من سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.sinwar.eg.com/',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.sinwar.eg.com/logo.svg',
    });
  }
}
