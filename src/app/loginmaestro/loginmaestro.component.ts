import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-loginmaestro',
  templateUrl: './loginmaestro.component.html',
  styleUrls: ['./loginmaestro.component.css']
})
export class LoginmaestroComponent implements OnInit {

  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });
  private urlapi =
    'https://superhouse.mx/pruebas/superHouseAdm/serviciosSuperHouse/validarIngresoWeb.php?user=';
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
    const correo = 'luis@gmail.com';
    const pass = 'a1b2c3d4';
    this.http
      .get(this.urlapi + correo + '&password=' + pass)
      .subscribe((data) => {
        console.log('respuesta2: ' + data);
        // tslint:disable-next-line: triple-equals
        if (data == 198) {
          alert('no existe');
        } else {
          // tslint:disable-next-line: triple-equals
          if (data == 203) {
            alert('no esta activado');
          } else {
            console.log('Se encontro el usuario');
            this.router.navigate(['Admin']);
          }
        }
      });
  }
}
