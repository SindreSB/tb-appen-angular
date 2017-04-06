import { TbAppenPage } from './app.po';

describe('tb-appen App', () => {
  let page: TbAppenPage;

  beforeEach(() => {
    page = new TbAppenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tb works!');
  });
});
