//var assert = require('assert');
import assert from 'assert';
import { expect } from 'chai';

describe('webdriver.io page', function () {
    // this.timeout(14000);
    // this.retries(2);

    // before(() => {
    //     browser.url('http://webdriver.io');
    //     console.log('before');
    // });

    beforeEach(() => {
        browser.url('http://webdriver.io');
        console.log('before each');
    });

    it('should have the right title - the fancy generator way', function () {
        //browser.url('http://webdriver.io');
        const title = browser.getTitle();
        //assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
        expect(title).to.equal('WebdriverIO - WebDriver bindings for Node.js');
    });

    it('get website test', function () {
        //browser.url('http://webdriver.io');

        var title = $('.header').getText();
        console.log(title);
    });
})
