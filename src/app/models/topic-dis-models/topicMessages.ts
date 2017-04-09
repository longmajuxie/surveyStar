import {QuestionMessage} from'./question'

export class TopicMessage {
  public link: string;
  public title: string;
  public author: string;
  public genre: number;
  public createDate: Date;
  public question: QuestionMessage[];
  public ticketNumber:number;

  public constructor(data: any = {}) {
    this.link = data.link || '';
    this.title = data.title || '';
    this.author = data.author || '';
    this.genre = data.genre || null;
    this.question = data.question || null;
    this.ticketNumber = data.ticketNumber || null;
    this.createDate = data.createDate || Date.now();
  }
}
