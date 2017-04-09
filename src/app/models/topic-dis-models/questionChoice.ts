

export class questionChoice {
  public title: string;
  public ticketNumber: number;          
  public constructor(data: any = {}) {
    this.title = data.title || '';
    this.ticketNumber = data.ticketNumber || null;
  }
}
