import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { NgOptimizedImage, CommonModule } from '@angular/common';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatListModule, CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
