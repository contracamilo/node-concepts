const puppeteer = require('puppeteer');

(async (params) => {
    
    console.log('launch browser');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://nodejs.org/en/');

    const title = await page.evaluate(() => {
        const h2 = document.querySelector('h2');
        console.log(h2.innerHTML);
        return h2.innerHTML

    })

    console.log('Closing Browser...')
    console.log(title)
    browser.close();
    console.log('Closed Browser')
})();
