const basePage = require("../pages/base-page");
const homePage = require("../pages/home-page");

describe("Ticket Booking", async () => {
  beforeEach("Open Url", async () => {
    await basePage.openUrl();
  });

  it("order ticket", async () => {
    await homePage.clickToPosition("from");
    await homePage.enterToKeywordPosition("from", "Han");

    await homePage.selectPositionFromKeyword("'HAN'");
    browser.pause(2000);

    await homePage.clickToPosition("to");
    await homePage.enterToKeywordPosition("to", "Ho c");
    await homePage.selectPositionFromKeyword("'SGN'");

    browser.pause(10000);
    await homePage.selectDate("Depart", "31/05/2024");
    await homePage.selectDate("Return", "02/06/2024");

    await homePage.clickToFlightPassenger();
    await homePage.clickToPlusNumber();

    await homePage.clickToButtonSearch();

    expect(await homePage.loadingIcon()).toEqual(true);

    expect(await homePage.titleTicket()).toEqual(true);
  });
});
