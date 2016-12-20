import { FisioPage } from './app.po';

describe('fisio App', function() {
  let page: FisioPage;

  beforeEach(() => {
    page = new FisioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
