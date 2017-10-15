import {browser, by, element} from 'protractor';

export class HeaderBar {

  static navigateTo() {
    return browser.get('/');
  }

  static getTitleText() {
    return element(by.css('header-bar h1')).getText();
  }

  static getSearchInput() {
    return element(by.css('input[placeholder*="looking for"]'));
  }

  static getSearchButton() {
    return element(by.buttonText('Search'));
  }
}
