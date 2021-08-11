/* amazon.test.js contains test suite for adding tablet to cart in amazon website
*/

import pkg from "../functions/launchInstance.js";
const { launchInstances } = pkg;
import * as HomePage from "../functions/homePage.js";
import * as ElectronicsPage from "../functions/electronicsPage.js";
import * as TabletsPage from "../functions/tabletsPage.js";
import * as DetailsViewPage from "../functions/detailsViewPage.js";
import * as CartPage from "../functions/cartPage.js";
import * as CheckoutPage from "../functions/checkoutPage.js";
import amazon from '../environments/amazon.json';
import {takeScreenshot} from "../functions/util.js";




const userAgent = "chromium";
let tabletName;

describe("Amazon website automation", function () {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    const instance = await launchInstances(userAgent);
    browser = await instance["browser"];
    context = await instance["context"];
    page = await context.newPage();

  });

  afterAll(async () => {
    await browser.close();
  });

  test(`should open the amazon home page and check the page title`, async () => {
    await Promise.all([
			page.goto(amazon.url),
			page.waitForNavigation(),
		]);
    
    await HomePage.validateHomePageTitle(page);
    await takeScreenshot(page,'homepage.png');
  });

  test(`Should select Electronics and navigate to electronics page`, async () => {
    await HomePage.selectElectronics(page);
    await takeScreenshot(page,'electronicsPage.png');
  });

  test(`Should select 'Tablets' from the Featured Categories section`, async () => {
    await ElectronicsPage.selectTablets(page);
    await takeScreenshot(page,'tabletsPage.png');
  });

  test(`Should select any tablet on tablets page and open the details view`, async () => {
    await TabletsPage.validateTabletsSearchResults(page);
    await takeScreenshot(page,'detailsViewPage.png');
  });

  test(`Should be able to add the tablet to cart`, async () => {
    tabletName = await DetailsViewPage.getTabletTitle(page);
    await DetailsViewPage.addToCart(page);
    await takeScreenshot(page,'AddedtoCartPage.png');
  });

  test(`Should verify if tablet is added to cart and navigate to cart page`, async () => {
    await CartPage.validateTabletAddedToCart(page);
    await takeScreenshot(page,'cartPage.png');
  });


test(`Should verify if tablet selected in details view page is same as in checkout page`, async () => {
    await CheckoutPage.validateTabletInCheckout(page,tabletName);
    await takeScreenshot(page,'checkoutPage.png');
  });


});