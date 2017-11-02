import { TestingAngularPage } from './app.po';

describe('testing-angular App', () => {
  let page: TestingAngularPage;

  beforeEach(() => {
    page = new TestingAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
