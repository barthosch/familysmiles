import { FamilysmilesPage } from './app.po';

describe('familysmiles App', () => {
  let page: FamilysmilesPage;

  beforeEach(() => {
    page = new FamilysmilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
