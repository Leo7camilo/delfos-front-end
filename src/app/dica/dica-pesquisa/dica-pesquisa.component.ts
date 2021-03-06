import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { DicaFiltro, DicaService } from '../dica.service';

@Component({
  selector: 'app-dica-pesquisa',
  templateUrl: './dica-pesquisa.component.html',
  styleUrls: ['./dica-pesquisa.component.css']
})
export class DicaPesquisaComponent implements OnInit {

  dicaData: any = null;

  filtro = new DicaFiltro();

  events1: any[] = [];
  events2: any[] = [];

  constructor(
    private dicaService: DicaService
  ) { }

  ngOnInit(): void {

    this.events1 = [
      {status: 'Banhos fora do horário de pico', date: '15/10/2020 10:30', icon: PrimeIcons.CLOCK, color: '#9C27B0'},
      {status: 'Desligar equipamentos', date: '15/10/2020 14:00', icon: PrimeIcons.POWER_OFF, color: '#673AB7'},
      {status: 'Chuveiros Eletrônicos', date: '15/10/2020 16:15', icon: PrimeIcons.CHECK_SQUARE, color: '#FF9800'},
      {status: 'Troque Suas Lâmpadas', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
  ];

  this.events2 = [
      "2020", "2021", "2022", "2023"
  ];

    this.pesquisarDicas();
  }

  pesquisarDicas(pagina: number = 0){
    this.filtro.pagina = pagina;
    this.dicaService.pesquisar(this.filtro)
      .then(dados => {
        this.dicaData = dados;
      });
  }
}
