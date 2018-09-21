const uname = "ebin123456@gmail.com";
const pass = "you password here ";
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch( {headless: false, 
        userDataDir: "data/"
      });
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com/');
  await page.type('#email', uname, {delay: 20})
  await page.type('#pass', pass, {delay: 20})
  let login = "input[data-testid='royal_login_button']";
  await page.click(login)
  await page.waitFor(1000)
  

  await browser.close();
})();