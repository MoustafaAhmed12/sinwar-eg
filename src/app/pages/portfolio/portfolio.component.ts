import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  @ViewChild('servicesSection') servicesSection!: ElementRef;
  @ViewChild('servicesTitle') servicesTitle!: ElementRef;
  @ViewChild('servicesCards') servicesCards!: ElementRef;
  @ViewChild('section') section!: ElementRef;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('card') cards!: ElementRef;
  // @ViewChildren('card') cards!: QueryList<ElementRef>;
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate title
    gsap.from(this.servicesTitle.nativeElement, {
      scrollTrigger: {
        trigger: this.servicesSection.nativeElement,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    // Animate cards
    gsap.from(this.servicesCards.nativeElement.children, {
      scrollTrigger: {
        trigger: this.servicesSection.nativeElement,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      delay: 0.4,
    });

    // Animate title
    gsap.from(this.title.nativeElement, {
      scrollTrigger: {
        trigger: this.section.nativeElement,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    // Animate cards
    gsap.from(this.cards.nativeElement.children, {
      scrollTrigger: {
        trigger: this.section.nativeElement,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });
  }

  constructor(private titleService: Title, private metaService: Meta) {
    this.setSEO();
  }

  setSEO() {
    // Title
    this.titleService.setTitle('أعمالنا | سنوار للحلول الذكية');

    // Meta Description
    this.metaService.updateTag({
      name: 'description',
      content:
        'اكتشف أعمال سنوار للحلول الذكية في مصر والسعودية، مشاريعنا تشمل بناء التطبيقات، تصميم المواقع، المتاجر الإلكترونية، وحلول برمجية متكاملة.',
    });

    // Meta Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'سنوار للحلول الذكية, أعمالنا, مشاريع, تصميم مواقع, بناء تطبيقات, المتاجر الإلكترونية, حلول برمجية, مصر, السعودية',
    });

    // Canonical
    this.metaService.updateTag({
      rel: 'canonical',
      href: 'https://www.sinwar.eg.com/portfolio',
    });

    // Open Graph
    this.metaService.updateTag({
      property: 'og:title',
      content: 'أعمالنا | سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'اكتشف أعمال سنوار للحلول الذكية في مصر والسعودية، مشاريعنا تشمل بناء التطبيقات، تصميم المواقع، المتاجر الإلكترونية، وحلول برمجية متكاملة.',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.sinwar.eg.com/portfolio',
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
      content: 'أعمالنا | سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      name: 'twitter:description',
      content:
        'اكتشف أعمال سنوار للحلول الذكية في مصر والسعودية، مشاريعنا تشمل بناء التطبيقات، تصميم المواقع، المتاجر الإلكترونية، وحلول برمجية متكاملة.',
    });
    this.metaService.updateTag({
      name: 'twitter:image',
      content: 'https://www.sinwar.eg.com/logo.svg',
    });
  }
}
