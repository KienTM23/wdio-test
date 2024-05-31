module.exports = new (class BasePage {
  async openUrl() {
    await browser.url("https://www.bestprice.vn/");
    browser.maximizeWindow();
    browser.pause(2000);
  }
})();
