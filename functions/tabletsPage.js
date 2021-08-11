/* tabletsPage.js contains functions for tablet screen
*/

import tablets from "../pageObjects/tablets.json";

//Verify if tablets are returned in search results
export const validateTabletsSearchResults = async (page) => {
    const totalTabletsCount = await page.$$(tablets.totalTablets);
    expect(totalTabletsCount.length).toBeGreaterThan(0);
    
    await page.waitForSelector(tablets.tabletSearchResult);
    await page.waitForTimeout(3000);
    await page.click(tablets.tabletSearchResult);
};