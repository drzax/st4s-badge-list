import { chromium } from 'playwright';
import {writeFileSync} from 'fs';

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

// The actual interesting bit
await context.route('**.jpg', route => route.abort());

// TODO: Change this to the URL you want to scrape
await page.goto('https://st4s.edu.au/verify-a-badge/');

// DO YOUR SCRAPING HERE AND WRITE YOUR DATA TO A FILE
writeFileSync('./data/badges.json', JSON.stringify(JSON.parse(await page.locator('#badge-data').innerText()), null, 2));

// Teardown
await context.close();
await browser.close();