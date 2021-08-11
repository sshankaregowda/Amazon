/* electronicsPage.js contains functions for electronics screen
*/

import electronics from "../pageObjects/electronics.json";

//Verify if user can click on Tablets link
export const selectTablets = async (page) => {
    try{
    await page.waitForSelector(electronics.tabletsLink);
    }catch(error){
        assert.fail("Error: tablets link is not present in electronics page");
    }
    await page.click(electronics.tabletsLink);
  };