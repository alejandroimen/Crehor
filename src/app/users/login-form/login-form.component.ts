import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from '../interface/iuser';
import { UserService } from '../services/user.service';
//import { AlertService } from '../../../services/alert.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user: Iuser = {
    id: 0,
    name: '',
    password: '',
    idTeacher: 0
  };
  nameValid: boolean = true;
  isSubmitting: boolean = false;

  constructor(private router: Router, private userService: UserService, /* private alertService: AlertService */) {}

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  login(): void {
    this.isSubmitting = true;

    if (!this.user.name || !this.user.password) {
      /* this.alertService.showWarning('Por favor, completa todos los campos.'); */
      alert('Por favor, completa todos los campos.');
      this.isSubmitting = false;
      return;
    }

    this.userService.login(this.user).subscribe(
      response => {
        console.log('Bienvenido', response);
        /* this.alertService.showSuccess('Inicio de sesión exitoso.'); */
        alert('Inicio de sesión exitoso.');
        const token = response.token;
        localStorage.setItem('jwtToken', token);

        const decodedToken: any = jwtDecode(token);
        console.log('Datos del usuario:', decodedToken);

        localStorage.setItem('userId', decodedToken.id);
        localStorage.setItem('teacherId', decodedToken.teachId);
        localStorage.setItem('username', this.user.name);
 
        this.router.navigate(['/']);
        this.isSubmitting = false;
      },
      error => {
        /* this.alertService.showError('Hubo un error al iniciar sesión.'); */
        alert('Hubo un error al iniciar sesión.');
        this.isSubmitting = false;
      }
    );
  }
}