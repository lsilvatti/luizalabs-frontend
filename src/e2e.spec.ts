import puppeteer from "puppeteer";

let page: puppeteer.Page, browser: puppeteer.Browser;

const searchBarInput = "input[placeholder='Procure por heróis']";

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 30,
  });
  page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("http://localhost:3000/luizalabs-frontend/");
});

it("should be on home", async () => {
  const home = (await page.$(".luiza-heroes-home")) ? true : false;
  expect(home).toBe(true);
});

it("should search a invalid name", async () => {
  await page.click(searchBarInput);
  await page.keyboard.type("dddd");
  await page.keyboard.press("Enter");
  const noResults = (await page.waitForSelector(".card-grid__no-results"))
    ? true
    : false;
  expect(noResults).toBe(true);
}, 5000);

it("should make another search with valid name", async () => {
  await page.click(searchBarInput);
  for (let i = 0; i < 4; i++) {
    await page.keyboard.press("Backspace");
  }
  await page.click(searchBarInput);
  await page.keyboard.type("spider");
  await page.keyboard.press("Enter");
  const haveResults = (await page.waitForSelector(".hero-card__main"))
    ? true
    : false;
  expect(haveResults).toBe(true);
}, 8000);

it("should enter on a hero page", async () => {
  await page.click(".hero-card__main");
  const heroPage = (await page.waitForSelector(".luiza-heroes-character-info"))
    ? true
    : false;
  expect(heroPage).toBe(true);
}, 6000);

it("should go back to home", async () => {
  await page.click(".luiza-heroes-character-info__back");
  const home = (await page.waitForSelector(".luiza-heroes-home"))
    ? true
    : false;
  expect(home).toBe(true);
}, 6000);

it("should go to a invalid page", async () => {
  await page.goto("http://localhost:3000/luizalabs-frontend/invalid/page");
  const notFound = (await page.waitForSelector(".luiza-heroes-not-found"))
    ? true
    : false;
  expect(notFound).toBe(true);
}, 6000);

afterAll(async () => {
  browser.close();
});
