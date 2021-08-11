/* detailsViewPage.js contains functions for details view screen
*/

import detailsView from "../pageObjects/detailsView.json";

//Verify if tablet can be added to cart
export const addToCart = async (page) => {
    try{
    await page.waitForSelector(detailsView.addToCartBtn);
    }catch(error){
        assert.fail("Error: add to cart button is not present in details view page");
    }
    await page.click(detailsView.addToCartBtn);
  };

//Verify if tablet title can scraped
export const getTabletTitle = async(page) => {
    try{
    await page.waitForSelector(detailsView.tabletTitle);
    }catch(error){
      assert.fail("Error: tablet name is not present in details view page");
    }

    const tabletName = await page.evaluate((locator) => {
      const name = document.querySelector(locator).innerText;
      return name;
    },detailsView.tabletTitle); 

    return tabletName;   
  }