import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
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
}
