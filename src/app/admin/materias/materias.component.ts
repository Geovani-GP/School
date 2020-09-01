import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  displayedColumns: string[] = [
    'Materia',
    'Profesor',
    'Horario',
    'Cupo',
    'acciones'
  ];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // definimos el servicio como objeto en el constructor
  constructor(  private http: HttpClient) {}

  ngOnInit(): void {
    /* llamamos el servicio para llenar la tabla */
    this.http.get('http://localhost/serviciosexamen/materiasDisponibles.php').subscribe((data: any) => {
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

  agregar(id) {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.ID_USUARIO);
    // tslint:disable-next-line: max-line-length
    this.http.get('http://localhost/serviciosexamen/cargaMateriaAlumno.php?usuario='+ user.ID_USUARIO +'&cargapro=' + id).subscribe((data: any) => {
      if (data != 0) {
      }

    });

  }

}
