import { DdskillsgamePage } from './app.po';

describe('ddskillsgame App', function() {
  let page: DdskillsgamePage;

  beforeEach(() => {
    page = new DdskillsgamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
