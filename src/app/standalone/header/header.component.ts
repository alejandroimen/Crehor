import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  teacherId: string = ''

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.teacherId=localStorage.getItem('teacherId') || ''
  }
  ngDoCheck(): void {
    this.teacherId = this.teacherId
  }

  goHome(): void {
    console.log('movirndo', this.teacherId==='16');
    
    if(this.teacherId === '16'){
      this.router.navigate(['/'])
    }else{
      this.router.navigate(['/home-teacher', this.teacherId])
    }
  }
}
