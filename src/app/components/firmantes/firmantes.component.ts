import { Component, OnInit } from '@angular/core';
import { Firmante } from '../../models/firmante.model';
import { FirmantesService } from '../../services/firmantes.service';

@Component({
  selector: 'app-firmantes',
  templateUrl: './firmantes.component.html',
  styles: [],
})
export class FirmantesComponent implements OnInit {
  firmantes: Firmante[];

  constructor(private firmantesService: FirmantesService) {}

  ngOnInit(): void {
    this.firmantesService.getFirmantes().subscribe(
      (respuesta) => {
        console.log('Aquí');
      },
      (error) => {
        console.log('Aqui no');
      }
    );
  }
}
