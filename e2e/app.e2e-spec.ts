import { AvivaPage } from './app.po';

describe('aviva App', function() {
  let page: AvivaPage;

  beforeEach(() => {
    page = new AvivaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
