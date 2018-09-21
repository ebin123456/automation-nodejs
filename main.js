const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch( {headless: false, 
        userDataDir: "data/"});
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com/find-friends/browser/');
  await page.waitFor(1000)

  const links = await page.evaluate(() => {
  	 list = []
     list.push(window.document.querySelectorAll(".friendBrowserNameTitle")[0].querySelectorAll("a")[0]['href'])
     list.push(window.document.querySelectorAll(".friendBrowserNameTitle")[1].querySelectorAll("a")[0]['href'])
     list.push(window.document.querySelectorAll(".friendBrowserNameTitle")[2].querySelectorAll("a")[0]['href'])
     list.push(window.document.querySelectorAll(".friendBrowserNameTitle")[3].querySelectorAll("a")[0]['href'])
     return list
  });
    var arrayLength = links.length;
	for (var i = 0; i < arrayLength; i++) {
	    await page.goto(links[i]);
	    await page.screenshot({path: i.toString()+'.png'});
	}
  
  

  await browser.close();
})();