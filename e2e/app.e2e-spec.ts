import { CheatsheetappPage } from './app.po';

describe('cheatsheetapp App', () => {
  let page: CheatsheetappPage;

  beforeEach(() => {
    page = new CheatsheetappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
