import { Component } from '@angular/core';
import {
  RegionesColombiaResponse,
  RegionesColombiaService,
} from './regiones-colombia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Municipios y Departamentos de Colombia';
  argument = '';
  tableHeaders: string[] = [
    'Región',
    'Código departamento',
    'Departamento',
    'Código municipio',
    'Municipio',
  ];
  data: RegionesColombiaResponse = [];
  tableData: RegionesColombiaResponse = [];
  constructor(private regionesColombiaService: RegionesColombiaService) {}
  ngOnInit() {
    this.regionesColombiaService.getData().subscribe((result) => {
      this.data = result;
      this.tableData = result;
    });
  }
  applyFilter() {
    this.tableData = this.data.filter((e) => {
      return (
        e.departamento
          .toLowerCase()
          .indexOf(this.argument.trim().toLowerCase()) > -1 ||
        e.municipio.toLowerCase().indexOf(this.argument.trim().toLowerCase()) >
          -1
      );
    });
  }
}
