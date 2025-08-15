import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // مدة الحركة بالمللي ثانية
      once: false, // الأنيميشن يشتغل مرة واحدة فقط
    });
  }
  isLoading = signal<boolean>(false);
  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';

  sendMessage() {
    this.isLoading.set(true);

    const templateParams = {
      CUSTOMER_NAME: this.name,
      CUSTOMER_EMAIL: this.email,
      CUSTOMER_PHONE: this.phone,
      MESSAGE_SUBJECT: this.subject,
      MESSAGE_CONTENT: this.message,
      CURRENT_DATE: new Date().toLocaleString(),
    };

    // إرسال الإيميل لك
    emailjs
      .send(
        'service_sinwar',
        'template_ah6gyl8',
        templateParams,
        'Si_eb1NXUOKaCbGTn'
      )
      .then(() => {
        console.log('📨 تم إرسال الرسالة لك بنجاح');
      })
      .catch((error) => {
        console.error('❌ خطأ أثناء إرسال الرسالة لك:', error);
      });

    // إرسال الرد التلقائي
    emailjs
      .send(
        'service_sinwar',
        'template_nl19eyr',
        templateParams,
        'Si_eb1NXUOKaCbGTn'
      )
      .then(() => {
        console.log('🤖 تم إرسال الرد التلقائي للعميل');
      })
      .catch((error) => {
        console.error('❌ خطأ أثناء إرسال الرد التلقائي:', error);
      })
      .finally(() => {
        this.isLoading.set(false);
      });
  }

  scrollToSection() {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  constructor(private titleService: Title, private metaService: Meta) {
    this.setSEO();
  }

  setSEO() {
    // Title
    this.titleService.setTitle('اتصل بنا | سنوار للحلول الذكية');

    // Meta Description
    this.metaService.updateTag({
      name: 'description',
      content:
        'تواصل مع سنوار للحلول الذكية في مصر والسعودية للحصول على استشارات وحلول برمجية وتصميم مواقع وتطبيقات احترافية. هاتف: +201070444917 - بريد إلكتروني: info@sinwar.eg.com',
    });

    // Meta Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'سنوار للحلول الذكية, اتصل بنا, تواصل معنا, استشارات برمجية, تصميم مواقع, بناء تطبيقات, مصر, السعودية, info@sinwar.eg.com, +201070444917',
    });

    // Canonical
    this.metaService.updateTag({
      rel: 'canonical',
      href: 'https://www.sinwar.eg.com/contact',
    });

    // Open Graph
    this.metaService.updateTag({
      property: 'og:title',
      content: 'اتصل بنا | سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'تواصل مع سنوار للحلول الذكية في مصر والسعودية للحصول على استشارات وحلول برمجية وتصميم مواقع وتطبيقات احترافية.',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.sinwar.eg.com/contact',
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
      content: 'اتصل بنا | سنوار للحلول الذكية',
    });
    this.metaService.updateTag({
      name: 'twitter:description',
      content:
        'تواصل مع سنوار للحلول الذكية في مصر والسعودية للحصول على استشارات وحلول برمجية وتصميم مواقع وتطبيقات احترافية.',
    });
    this.metaService.updateTag({
      name: 'twitter:image',
      content: 'https://www.sinwar.eg.com/logo.svg',
    });

    // Schema Organization + ContactPoint
    this.metaService.updateTag({
      name: 'schema:organization',
      content: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'سنوار للحلول الذكية',
        alternateName: 'Sinwar for Smart Solutions',
        url: 'https://www.sinwar.eg.com',
        logo: 'https://www.sinwar.eg.com/logo.svg',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+201070444917',
            contactType: 'customer support',
            areaServed: ['EG', 'SA'],
            email: 'info@sinwar.eg.com',
            availableLanguage: ['Arabic', 'English'],
          },
        ],
      }),
    });
  }
}
