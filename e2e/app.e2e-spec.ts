import { AeroplaneManagementSystemPage } from './app.po';

describe('aeroplane-management-system App', function() {
  let page: AeroplaneManagementSystemPage;

  beforeEach(() => {
    page = new AeroplaneManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
