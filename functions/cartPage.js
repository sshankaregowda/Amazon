/* cartPage.js contains functions for tablet added in the cart
*/

import cart from "../pageObjects/cart.json";

//Verify if tablet is added to cart
export const validateTabletAddedToCart = async (page) => {
    try{
    await page.waitForSelector(cart.cartAddedMsg);
    }catch(error){
        assert.fail("Error: cart added success message is not present");
    }

    const cartSuccessMsg = await page.evaluate((locator) => {
        const successMsg = document.querySelector(locator).innerHTML;
        return successMsg;
      },cart.cartAddedMsg);
    
    expect(cartSuccessMsg).toContain('Added to Cart');
    
    await page.click(cart.cartBtn);
  };