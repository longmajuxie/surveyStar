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
@Pipe({
    name: 'emQuestionnaireType'
})
export class emQuestionnaireTypePipe implements PipeTransform {
    transform(item:number): any {
        let questionnaireTypes=[
               {
                 id:1,
                 title:"市场调研"  
              },
               {
                 id:2,
                 title:"用户偏好调研"  
              },
               {
                 id:3,
                 title:"消费者行为调研"  
              },
               {
                 id:4,
                 title:"产品使用习惯调研"  
              }, {
                 id:5,
                 title:"功能体验调研"  
              },
               {
                 id:6,
                 title:"性能体验调研"  
              },
               {
                 id:7,
                 title:"操作流程体验调研"  
              },
               {
                 id:8,
                 title:"页面展示效果体验"  
              },
               {
                 id:9,
                 title:"价格接受度调研"  
              },
               {
                 id:10,
                 title:"产品名称测试"  
              },
               {
                 id:11,
                 title:"用户触媒习惯调研"  
              },
               {
                 id:12,
                 title:"广告语测试"  
              },
              {
                 id:13,
                 title:"用户满意度调研"  
              },
               {
                 id:14,
                 title:"活动效果评估"  
              },
               {
                 id:15,
                 title:"产品服务质量测评"  
              },
               {
                 id:16,
                 title:"广告效果评估"  
              },
               {
                 id:17,
                 title:"产品定义"  
              }, {
                 id:18,
                 title:"产品体验"  
              }
           ]
        if (!item ||item==0) {
            return "其他";
        }else {
            return questionnaireTypes[item-1].title;
        }
    }
}