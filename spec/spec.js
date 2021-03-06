// spec.js
describe('Protractor Demo App: Calculator', function () {
  beforeAll(function () {
    browser.waitForAngularEnabled(false)
    browser.get('https://basic-calculator-by-angelol2046.netlify.app/')
    browser.waitForReact()
  })
  
  it('should add one and two', function () {
    //clear text in an element
    element(by.react('*', { id: 'valueA' }, {}, '#root')).clear();
    element(by.react('*', { id: 'valueA' }, {}, '#root')).sendKeys(1);
    element(by.react('*', { id: 'valueB' }, {}, '#root')).clear();
    element(by.react('*', { id: 'valueB' }, {}, '#root')).sendKeys(2);

    //click a button
    element(by.react('*', { id: 'add' }, {}, '#root')).click();
    element(by.react('*', { id: 'calculate' }, {}, '#root')).click();

    expect(element(by.react('*', { id: 'result' }, {}, '#root')).getText()).
        toContain('3'); 
  });
  
  it('should subtract two from one', function (){
    //clear text in an element
    element(by.react('*', { id: 'valueA' }, {}, '#root')).clear();
    element(by.react('*', { id: 'valueA' }, {}, '#root')).sendKeys(1);
    element(by.react('*', { id: 'valueB' }, {}, '#root')).clear();
    element(by.react('*', { id: 'valueB' }, {}, '#root')).sendKeys(2);

    //click a button
    element(by.react('*', { id: 'subtract' }, {}, '#root')).click();
    element(by.react('*', { id: 'calculate' }, {}, '#root')).click();

    expect(element(by.react('*', { id: 'result' }, {}, '#root')).getText()).
        toContain('-1');  
  });
  
  it('should multiply one with two', function (){
    //clear text in an element
    element(by.react('*', { id: 'valueA' }, {}, '#root')).clear();
    element(by.react('*', { id: 'valueA' }, {}, '#root')).sendKeys(1);
    element(by.react('*', { id: 'valueB' }, {}, '#root')).clear();
    element(by.react('*', { id: 'valueB' }, {}, '#root')).sendKeys(2);

    //click a button
    element(by.react('*', { id: 'multiply' }, {}, '#root')).click();
    element(by.react('*', { id: 'calculate' }, {}, '#root')).click();

    expect(element(by.react('*', { id: 'result' }, {}, '#root')).getText()).
        toContain('1');  
  });
  
  xit('should divide one by two', function (){
    //clear text in an element
    element(by.react('*', { id: 'valueA' }, {}, '#root')).clear();
    element(by.react('*', { id: 'valueA' }, {}, '#root')).sendKeys(1);
    element(by.react('*', { id: 'valueB' }, {}, '#root')).clear();
    element(by.react('*', { id: 'valueB' }, {}, '#root')).sendKeys(2);

    //click a button
    element(by.react('*', { id: 'divide' }, {}, '#root')).click();
    element(by.react('*', { id: 'calculate' }, {}, '#root')).click();

    expect(element(by.react('*', { id: 'result' }, {}, '#root')).getText()).
        toContain('0.5');  
  });
});