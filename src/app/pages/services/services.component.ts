import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }

  constructor(private titleService: Title, private metaService: Meta) {
    this.setSEO();
  }

  setSEO() {
    // Title
    this.titleService.setTitle('خدماتنا | سنوار للحلول الذكية');

    // Meta Description
    this.metaService.updateTag({
      name: 'description',
      content:
        'خدمات سنوار للحلول الذكية تشمل أنظمة محاسبية، بناء التطبيقات والمواقع، المتاجر الإلكترونية، تحسين محركات البحث، استضافة المواقع، والأمن السيبراني في مصر والسعودية.',
    });

    // Meta Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'سنوار للحلول الذكية, خدماتنا, أنظمة محاسبية, بناء التطبيقات والمواقع, المتاجر الإلكترونية, تحسين محركات البحث, استضافة المواقع, الأمن السيبراني, مصر, السعودية',
    });

    // Canonical
    this.metaService.updateTag({
      rel: 'canonical',
      href: 'https://www.sinwar.eg.com/services',
    });

    // Open Graph
    this.metaService.updateTag({
      property: 'og:title',
      content: 'خدماتنا | سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'خدمات سنوار للحلول الذكية تشمل أنظمة محاسبية، بناء التطبيقات والمواقع، المتاجر الإلكترونية، تحسين محركات البحث، استضافة المواقع، والأمن السيبراني في مصر والسعودية.',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.sinwar.eg.com/services',
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
      content: 'خدماتنا | سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      name: 'twitter:description',
      content:
        'خدمات سنوار للحلول الذكية تشمل أنظمة محاسبية، بناء التطبيقات والمواقع، المتاجر الإلكترونية، تحسين محركات البحث، استضافة المواقع، والأمن السيبراني في مصر والسعودية.',
    });
    this.metaService.updateTag({
      name: 'twitter:image',
      content: 'https://www.sinwar.eg.com/logo.svg',
    });
  }
}
