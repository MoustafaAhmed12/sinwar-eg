import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
ngOnInit(): void {
  AOS.init({
    duration: 1000, // مدة الحركة بالمللي ثانية
    once: false,     // الأنيميشن يشتغل مرة واحدة فقط
  });
}
}
