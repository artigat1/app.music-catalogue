import {HeaderBar} from './header-bar.po';
describe(`Core: Header Bar`, () => {
  describe(`elements`, () => {

    beforeAll(async () => {
      await HeaderBar.navigateTo();
    });

    it(`should have a title`, async () => {
      const title = await HeaderBar.getTitleText();

      expect(title).toBeTruthy('Title does not exist');
      expect(title).toContain('Music Catalogue');
    });

    it(`should have a search box`, async () => {
      const searchBox = await HeaderBar.getSearchInput();

      expect(searchBox).toBeTruthy();
    });

    it(`should have a search button`, async () => {
      const searchBtn = await HeaderBar.getSearchButton();

      expect(searchBtn).toBeTruthy();
    });
  });

  describe(`actions`, () => {

  });
});
