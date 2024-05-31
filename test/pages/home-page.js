module.exports = new (class HomePage {
  get inputFlightFrom() {
    return $("input[data-id='flight_from']");
  }

  get inputFlightTo() {
    return $("input[data-id='flight_to']");
  }

  async clickToPosition(keyword) {
    if (keyword === "from") {
      return (await this.inputFlightFrom).click();
    } else {
      return (await this.inputFlightTo).click();
    }
  }

  get inputSearchFrom() {
    return $('span.twitter-typeahead>input[data-id="flight_from"]');
  }

  get inputSearchTo() {
    return $('span.twitter-typeahead>input[data-id="flight_to"]');
  }

  async enterToKeywordPosition(dynamic, value) {
    if (dynamic === "from") {
      return (await this.inputSearchFrom).setValue(value);
    } else {
      return (await this.inputSearchTo).setValue(value);
    }
  }

  get popupSeller() {
    return $("img.img-popup");
  }

  get buttonClosePopup() {
    return $("button.fancybox-close>span");
  }

  async selectPositionFromKeyword(keyword) {
    return await $(
      '//ul[contains(@id,"flight_from_domestic_")]//li[contains(@value,' +
        keyword +
        ")]"
    ).click();
  }

  async selectDate(dynamic, values) {
    const dateInput = await $("input[name=" + dynamic + "]");
    await dateInput.click();
    return await dateInput.setValue(values);
  }

  get flightPassenger() {
    return $('label[for="flight_passenger"]');
  }

  get titleTicketDisplayed() {
    return $("div.title").isDisplayed();
  }

  get plusNumber() {
    return $(
      '//div[@class="popover-content"]//label[contains(text(),"Trẻ em")]/parent::div/following-sibling::div//i[@class="ico-plus"]'
    );
  }

  async clickToFlightPassenger() {
    return await this.flightPassenger.click();
  }

  async clickToPlusNumber() {
    return await this.plusNumber.click();
  }

  get btnSearchTicketPlane() {
    return $('//button[contains(text(),"Tìm chuyến bay")]');
  }

  async clickToButtonSearch() {
    return (await this.btnSearchTicketPlane).click();
  }
  get loadingIcon() {
    return $("div#flight_loading_data_depart>img").waitForDisplayed({
      reverse: true,
    });
  }
})();
