const BasePage = require("../pages/base-page");
const homePage = require("../pages/home-page");
describe("Ticket", () => {
  it("open", async () => {
    await BasePage.openUrl();
    const data = "HAN";
    (await $('input[data-id="flight_from"]')).click();
    await (
      await $('span.twitter-typeahead>input[data-id="flight_from"]')
    ).setValue("Han");
    (
      await $(
        '//ul[contains(@id,"flight_from_domestic_")]//li[contains(@value,' +
          data +
          ")]"
      )
    ).click();
    browser.pause(3000);

    (await $('input[data-id="flight_to"]')).click();
    await (
      await $('span.twitter-typeahead>input[data-id="flight_to"]')
    ).setValue("Ho c");
    (
      await $(
        '//ul[contains(@id,"flight_to_domestic_")]//li[contains(@value,"SGN")]'
      )
    ).click();
    browser.pause(5000);

    (await $('input[name="Depart"]')).clearValue();
    (await $('input[name="Depart"]')).setValue("01/06/2024");
    browser.pause(6000);
    (await $('input[name="Return"]')).clearValue();
    (await $('input[name="Return"]')).setValue("02/06/2024");
    browser.pause(6000);

    (await $('label[for="flight_passenger"]')).click();
    await $(
      '//div[@class="popover-content"]//label[contains(text(),"Trẻ em")]/parent::div/following-sibling::div//i[@class="ico-plus"]'
    ).click();

    (await $('//button[contains(text(),"Tìm chuyến bay")]')).click();
    browser.pause(2000);

    expect(
      await $("div#flight_loading_data_depart>img").waitForDisplayed({
        reverse: true,
      })
    ).toEqual(true);

    expect(await $$('//div[contains(@id,"flight_content_")]')).toBeDisplayed();
  });
});
