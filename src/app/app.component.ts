import { Component, OnInit } from '@angular/core';
import demodata from '../assets/demo.json';

import { FileSizePipe } from './shared/size.pipe';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { OrderByPipe } from './shared/orderBy.pipe.js';
import { FilterPipe } from './shared/filter.pipe.js';
import { CustomCurrencyPipe } from './shared/mycurrency.pipe.js';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        FileSizePipe,
        CapitalizePipe,
        OrderByPipe,
        FilterPipe,
        CurrencyPipe,
        CustomCurrencyPipe
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

    public chart1Type = 'bar';
    public chartType = 'line';


    public chartLabels: Array<any> = [
        'Monday', 'Tuesday', 'Wenesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];

    public chartDatasets: Array<any>;
    public chartColors: Array<any> = [];
    public dateOptionsSelect: any[];
    public bulkOptionsSelect: any[];
    public showOnlyOptionsSelect: any[];
    public filterOptionsSelect: any[];
    public chartOptions: any;

    constructor(
        private capitalize: CapitalizePipe,
        private datasize: FileSizePipe,
        private mycurency: CustomCurrencyPipe,
        private currency: CurrencyPipe
    ) {}

    ngOnInit() {

        // let use capitlaize pipe on the title
        this.title = this.capitalize.transform(this.title);

        const firstChartData = [
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
        ];
        const secondChartData = [
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
        ];

        const thirdChartData = [
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
            Math.floor(Math.random() * 20),
        ];


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
                            //  Formatting Y Axis with both Currency and Thousands Separator
                            // return tick.toString() + 'dB';
                            return '$' + tick.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        }
                    },
                    scaleLabel: {
                        labelString: 'Lunch Money',
                        display: true,
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#5b5f62',
                    },
                    scaleLabel: {
                        labelString: 'Day of the Week',
                        display: true,
                    }
                }]
            }
        };


        this.chartDatasets = [
            {
                data: firstChartData,
                label: 'Yann'
            },
            {
                data: secondChartData,
                label: 'Maria'
            },
            {
                data: thirdChartData,
                label: 'Gaby'
            }
        ];

    }

}
