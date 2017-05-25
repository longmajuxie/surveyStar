import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stringToJson'
})
export class stringToJsonPipe implements PipeTransform {
    transform(items: any): any {
        if (!items) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return JSON.parse(items);
    }
}

@Pipe({
    name: 'stringLineToJson'
})
export class stringLineToJsonPipe implements PipeTransform {
    transform(items: any): any {
        if (!items) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return JSON.parse(items)[0].line;
    }
}
@Pipe({
    name: 'stringChoiceToJson'
})
export class stringChoiceToJsonPipe implements PipeTransform {
    transform(items: any): any {
        if (!items) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return JSON.parse(items)[0].choice;
    }
}