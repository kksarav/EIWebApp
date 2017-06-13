import { EIWebAppPage } from './app.po';

describe('eiweb-app App', () => {
  let page: EIWebAppPage;

  beforeEach(() => {
    page = new EIWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
