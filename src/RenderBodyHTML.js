// Class to render Team Profile body HTML
class RenderBodyHTML {
  constructor() {
    this.bodyHTMLContent = ``;
  };

  addContent(bodyHTMLContent) {
    this.bodyHTMLContent = bodyHTMLContent;
    return `<body>\n\t<header><h1>My Team</h1></header>\n${this.bodyHTMLContent}\n</body>`;
  };
};

module.exports = RenderBodyHTML;