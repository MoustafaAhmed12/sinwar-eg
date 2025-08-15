import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // مدة الحركة بالمللي ثانية
      once: false, // الأنيميشن يشتغل مرة واحدة فقط
    });
  }

  constructor(private titleService: Title, private metaService: Meta) {
    this.setSEO();
  }

  setSEO() {
    // Title
    this.titleService.setTitle('من نحن | سنوار للحلول الذكية');

    // Meta Description
    this.metaService.updateTag({
      name: 'description',
      content:
        'تعرف على شركة سنوار للحلول الذكية، إحدى الشركات الرائدة في مصر والسعودية في تقديم الحلول البرمجية وتصميم المواقع والتطبيقات الذكية.',
    });

    // Meta Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'سنوار للحلول الذكية, شركة حلول ذكية, عن الشركة, حلول برمجية, تصميم مواقع, مصر, السعودية',
    });

    // Canonical
    this.metaService.updateTag({
      rel: 'canonical',
      href: 'https://www.sinwar.eg.com/about',
    });

    // Open Graph
    this.metaService.updateTag({
      property: 'og:title',
      content: 'من نحن | سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'شركة سنوار للحلول الذكية رائدة في مجال الحلول البرمجية في مصر والسعودية – تعرف علينا أكثر.',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.sinwar.eg.com/about',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://www.sinwar.eg.com/logo.svg',
    });

    // Twitter
    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.metaService.updateTag({
      name: 'twitter:title',
      content: 'من نحن | سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      name: 'twitter:description',
      content:
        'شركة سنوار للحلول الذكية رائدة في مجال الحلول البرمجية في مصر والسعودية – تعرف علينا أكثر.',
    });
    this.metaService.updateTag({
      name: 'twitter:image',
      content: 'https://www.sinwar.eg.com/logo.svg',
    });
  }
}
