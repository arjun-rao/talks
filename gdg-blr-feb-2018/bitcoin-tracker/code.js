/**
 * A special function that inserts a custom menu when the spreadsheet opens.
 */
function onOpen() {
  var menu = [{name: 'Get current rate!', functionName: 'getBitCoinRate'}];
  SpreadsheetApp.getActive().addMenu('BitCoin', menu);
}

/**
 * Get's the bitcoin price at a date. Defaults to today.
 *
 * @param {String} date The date in yyyy-mm-dd format. Defaults to today.
 * @return The value of BTC on the date.
 * @customfunction
 */
function BTC(date) {
  if (!date) {
    date = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd");
  }
  var res = UrlFetchApp.fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot?date=" + date, {
    headers: {
      "CB-VERSION": "2016-10-10",
      Authorization: "Bearer INSERT_TOKEN_HERE"
    }
  });
  var json = JSON.parse(res.getContentText());
  return [date,json.data.amount];
}


/**
 * Adds a row the spreadsheet with today's bit coin rate
 */
function getBitCoinRate(){
  var ss = SpreadsheetApp.getActive();
  ss.appendRow(BTC());
}
