import { questionChoice } from './questionChoice';

export class QuestionMessage {
  public title: string;
  public genre: number;          // 0 多选，1单选
  public questionChoiceList: questionChoice[];
  

  public constructor(data: any = {}) {
    this.title = data.title || '';
    this.genre = data.link || '';
    this.questionChoiceList = data.questionChoiceList || null;
  }
}
