class RenderBodyHTML {
  constructor(bodyHTMLContent) {
    this.bodyHTMLContent = bodyHTMLContent;
  };

  addContent() {
    const body = `<body>\n\t<header><h1>My Team</h1></header>\n${this.bodyHTMLContent}\n</body>`;

    return body;
  };
};

module.exports = RenderBodyHTML;