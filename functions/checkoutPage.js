/* checkoutPage.js contains functions for checkout screen
*/

import checkout from "../pageObjects/checkout.json";

//Verify if tablet selected previously is present in checkout screen
export const validateTabletInCheckout = async (page, tabletTitleInDetailsViewPage) => {
    try{
    await page.waitForSelector(checkout.proceedToCheckoutBtn);
    }catch(error){
        assert.fail("Error: proceedToCheckout button is not present in checkout page");
    }
    
    await page.waitForSelector(checkout.tabletName);

    const tabletTitleInCheckoutPage = await page.evaluate((locator) => {
        const title = document.querySelector(locator).innerText;
        return title;
      },checkout.tabletName);

    expect(tabletTitleInCheckoutPage).toBe(tabletTitleInDetailsViewPage);
  };


