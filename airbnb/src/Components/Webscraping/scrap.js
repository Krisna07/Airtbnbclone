const puppeteer = require("puppeteer");

const listingData = (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.airbnb.com/s/Paris--France/homes");

  // Scroll down to load more listings
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });

  // Wait for the page to load more listings
  await page.waitForSelector("div._8s3ctt");

  // Extract the data
  const listings = await page.evaluate(() => {
    const listingsArray = [];
    const listingsElements = document.querySelectorAll("div._8s3ctt");
    for (let i = 0; i < listingsElements.length; i++) {
      const listing = {};
      listing.title =
        listingsElements[i].querySelector("div._bzh5lkq").textContent;
      listing.price =
        listingsElements[i].querySelector("div._doc79r").textContent;
      listing.location =
        listingsElements[i].querySelector("div._kqh46o").textContent;
      listingsArray.push(listing);
    }
    return listingsArray;
  });

  console.log(listings);

  await browser.close();
})();

export default listingData;
