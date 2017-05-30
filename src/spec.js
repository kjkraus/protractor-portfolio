// spec.js
describe('Protractor - Tesla.com', function() {
  it('should have a title', function() {
    browser.get('https://www.tesla.com/');

    expect(browser.getTitle()).toEqual('Tesla | Premium Electric Sedans and SUVs');
  });
});