import { MaterialDensePage } from './app.po';

describe('material-dense App', () => {
  let page: MaterialDensePage;

  beforeEach(() => {
    page = new MaterialDensePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
