import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

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
}
