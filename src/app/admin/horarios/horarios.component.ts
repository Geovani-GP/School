import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  displayedColumns: string[] = [
    'horario',
    'alumno',
    'profesor',
    'materia',
    'acciones'
  ];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  user: any;
  // definimos el servicio como objeto en el constructor
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user.ID_USUARIO);
    /* llamamos el servicio para llenar la tabla */
    this.http.get('http://localhost/serviciosexamen/materiasalumnos.php?usuario=' + this.user.ID_USUARIO).subscribe((data: any) => {
      if (data != 0) {
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

    });
  }

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminar(id) {
    this.http.get('http://localhost/serviciosexamen/borras.php?cargaalu=' + id).subscribe((data: any) => {
      if (data != 0) {

        this.http.get('http://localhost/serviciosexamen/materiasalumnos.php?usuario=' + this.user.ID_USUARIO).subscribe((data: any) => {
          if (data != 0) {
            this.dataSource = new MatTableDataSource(data);

            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }

        });

      }

    });
  }
}
