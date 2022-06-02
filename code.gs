function myFunction() {

  Logger.log("Hello World");
  
}


function onOpen()
{
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Jira integration').addItem('Get', 'Search').addItem('Send', 'popUp').addToUi();
}


function Search() {

  var query = 'google sheet';
  var url = 'https://api.github.com/search/repositories?sort=stars&q='+encodeURIComponent(query);
  var response = UrlFetchApp.fetch(url,{
    'muteHttpExceptions' :true
  });

  //var activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();

  var activeSpreadSheet = SpreadsheetApp.openById('1WrDxypLYy-i0s3MgsOFW3fOo4OPd_9OnxcBo1b-esHw');
  //var sheet = activeSpreadSheet.getActiveSheet();

var sheet = activeSpreadSheet.getSheetByName('Result');

  sheet.appendRow(["James"]);
  sheet.appendRow(["Tapon","562"]);
  sheet.appendRow(["56"]);
  sheet.appendRow(["36"]);
  sheet.appendRow(["%%&7"]);
  //Logger.log(response);

  for (var p in response.items)
  {
    
    Logger.log(response.items[p].id);
  }
  
  Logger.log(url);
  
}


function popUp() {

// one idea to get ; so you can push too
  var response = UrlFetchApp.fetch('https://registerapp258.herokuapp.com/getStudent');
  Logger.log(response);
  
}
