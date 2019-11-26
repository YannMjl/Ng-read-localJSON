import { Component, OnInit } from '@angular/core';
import demodata from '../assets/demo.json';

import { FileSizePipe } from './shared/size.pipe';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { OrderByPipe } from './shared/orderBy.pipe.js';
import { FilterPipe } from './shared/filter.pipe.js';
import { MycurrencyPipe } from './shared/mycurrency.pipe.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        FileSizePipe,
        CapitalizePipe,
        OrderByPipe,
        FilterPipe
    ]
})
export class AppComponent implements OnInit {

    title = 'how to use pipe in angular demo';
    Players: any = demodata;

    Names = [
        'Lionel Messi',
        'Sergio Ramos',
        'Paul Pogba',
        'Steven Gerrard',
        'Christian Ericksen',
        'Dele Ali',
        'Luis Suárez',
        'Kylian Mbappé',
        'Kevin De Bruyne',
        'Gerard Piqué',
        'Mohamed Salah'
    ];

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

    public chartOptions: any;

    constructor(
        private capitalize: CapitalizePipe,
        private datasize: FileSizePipe,
        // private curency: MycurrencyPipe
    ) {}

    ngOnInit() {

        // let use capitlaize pipe on the title
        this.title = this.capitalize.transform(this.title);

        // // tslint:disable-next-line: forin
        // for (let value in this.data1) {

        //     let new_value = this.data1[value];
        //     new_value =
        //     new_value = this.datasize.transform(new_value)

        //     console.log(new_value);  // output: Apple Orange Banana
        // }


        this.chartOptions = {
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
                        // tslint:disable-next-line: object-literal-shorthand
                        // tslint:disable-next-line: only-arrow-functions
                        userCallback(tick) {
                            return tick.toString() + 'dB';
                            // return this.curency.transform(tick);
                        }
                    },
                    scaleLabel: {
                        labelString: 'Amount of Money',
                        display: true,
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#5b5f62',
                    },
                    scaleLabel: {
                        labelString: 'Month',
                        display: true,
                    }
                }]
            }
        };


        this.chartDatasets = [
            {
                data: [50, 40, 60, 51, 56, 55, 40],
                label: 'Yann'
            },
            { data: [28, 80, 40, 69, 36, 37, 110], label: 'Maria' },
            { data: [38, 58, 30, 90, 45, 65, 30], label: 'Gaby' }
        ];

    }

}
