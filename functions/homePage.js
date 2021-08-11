/* homePage.js contains functions for home screen
*/

import home from "../pageObjects/home.json";

//Verify if home page title is correct
export const validateHomePageTitle = async (page) => {

    const title = await page.title();
      expect(title).toBe('Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more');

  };

//Verify if electronics link can be clicked
export const selectElectronics = async (page) => {
    try{
    await page.waitForSelector(home.electronicsLink)
    }catch(error){
        assert.fail("Error: electronics link is not present in home page");
    }

    await page.click(home.electronicsLink);
    
    expect(await page.url()).toContain('electronics-store');
  };