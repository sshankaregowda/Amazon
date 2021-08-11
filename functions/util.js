const takeScreenshot = async (page,screenshotName) => {
    await page.screenshot({ path: `./screenshots/${screenshotName}`, fullPage: false });
  }

  export { takeScreenshot}