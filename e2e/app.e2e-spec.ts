import { SurveyStarPage } from './app.po';

describe('survey-star App', () => {
  let page: SurveyStarPage;

  beforeEach(() => {
    page = new SurveyStarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
