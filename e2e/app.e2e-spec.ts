import { AppPage } from './app.po';

describe('Music Catalogue App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Music Catalogue');
  });
});
