This site uses cookies from Google to deliver and enhance the quality of its services and to analyze traffic.Learn moreOK, got it

エディタ
Code.gs
Index.html
JavaScript.html
Stylesheet.html
.

12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849
function getBorrowedBooks() {
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('本の貸出アプリ')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}