import { AngularbootstrapPage } from './app.po';

describe('angularbootstrap App', () => {
  let page: AngularbootstrapPage;

  beforeEach(() => {
    page = new AngularbootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
