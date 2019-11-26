import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({ name: 'CustomeCurrency' })
export class CustomCurrencyPipe implements PipeTransform {

    constructor(private currencyPipe: CurrencyPipe) { }

    transform(value: any, currency: string, symbol: boolean = false): string {
        // tslint:disable-next-line: curly
        if (value != null)
            return this.currencyPipe.transform(value, currency, symbol);
        return this.currencyPipe.transform(0, currency, symbol).split('0.00')[0];
    }
}
