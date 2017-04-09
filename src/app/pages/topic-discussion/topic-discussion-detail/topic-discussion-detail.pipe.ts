import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'percent'})
export class PercentPipe implements PipeTransform {
  transform(value: string, value2: number) {
   let returnValue:any=(parseInt(value.substr(0,value.indexOf('票')))/value2*100).toFixed(2)
   if(!returnValue ||returnValue=='NaN'){
       returnValue=0;
   }
   return returnValue;
  }
}
@Pipe({name: 'percent2'})
export class Percent2Pipe implements PipeTransform {
  transform(value: string, value2: number) {
   let returnValue:any=(parseInt(value.substr(0,value.indexOf('票')))/value2*180).toFixed(2)
   if(!returnValue ||returnValue=='NaN'){
       returnValue=0;
   }
   return returnValue;
  }
}