import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, _args?: any): any {
        return value.split(' ').map(word => {
            return word.length > 2 ? word[0].toUpperCase() + word.substr(1) : word;
        }).join(' ');
    }
}
