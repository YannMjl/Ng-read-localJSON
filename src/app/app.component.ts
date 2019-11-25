import { Component, OnInit } from '@angular/core';
import demodata from '../assets/demo.json';

import { FileSizePipe } from './shared/size.pipe';
import { CapitalizePipe } from './shared/capitalize.pipe';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [FileSizePipe, CapitalizePipe]
})
export class AppComponent implements OnInit {

    title = 'How to use pipe in Angular Demo';
    Players: any = demodata;

    data1 = [50, 40, 60, 51, 56, 55, 40];
    data2 = [28, 80, 40, 69, 36, 37, 110];
    data3 = [38, 58, 30, 90, 45, 65, 30];

    // public map: any = { lat: 51.678418, lng: 7.809007 };
    public chart1Type = 'bar';
    public chartType = 'line';

    public chartDatasets: Array<any>;

    public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    public chartColors: Array<any> = [

    ];

    public dateOptionsSelect: any[];
    public bulkOptionsSelect: any[];
    public showOnlyOptionsSelect: any[];
    public filterOptionsSelect: any[];

    public chartOptions: any = {
        responsive: true,
        legend: {
            labels: {
                fontColor: '#5b5f62',
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: '#5b5f62',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#5b5f62',
                }
            }]
        }
    };

    constructor(
        private capitalize: CapitalizePipe,
        private datasize: FileSizePipe
    ) {}

    ngOnInit() {

        // this.data1 = this.capitalize.transform(this.data1);

        this.chartDatasets = [
            { data: [50, 40, 60, 51, 56, 55, 40], label: '#1' },
            { data: [28, 80, 40, 69, 36, 37, 110], label: '#2' },
            { data: [38, 58, 30, 90, 45, 65, 30], label: '#3' }
        ];

    }

}
