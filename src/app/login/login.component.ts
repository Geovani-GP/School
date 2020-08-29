import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  public currentEuroRates: any = null;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private alerta: MatSnackBar
  ) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {}

  // tslint:disable-next-line: typedef
  sesion() {
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
    let pass = this.loginForm.value.password;
    let email = this.loginForm.value.email;
    if (this.loginForm.valid) {
      this.http.get('http://localhost/serviciosexamen/loginAlumno.php?correo='+ email +'&pass=' + pass )
        .subscribe((res) => {
          console.log(res);
          if (res == 0) {
            alert("Datos incorrectos");
          } else {
            localStorage.setItem('user', JSON.stringify(res[0]));
            this.router.navigate(['Admin/Alumnos']);
          }
        });
    }
  }
}
