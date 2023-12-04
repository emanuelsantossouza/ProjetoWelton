import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Pegando o elemento canva
  @ViewChild("graficoBatimentoCardiaco", { static: true }) elemento: ElementRef | undefined;


  ionViewDidEnter() {
    new Chart(this.elemento?.nativeElement, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4'],
        datasets: [
          {
            data: [1, 1.5, 1, 2],
            type: 'line',
            animation: { duration: 3000 },
          }
        ]
      }
    });
  }
  constructor() { }
}
