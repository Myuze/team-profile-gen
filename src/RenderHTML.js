// Class to render the base Team Profile HTML
const fs = require('fs');

class RenderHTML {
  constructor() {
    this.headHTML = `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<link rel="preconnect" href="https://fonts.googleapis.com">\n\t<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n\t<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Michroma&display=swap" rel="stylesheet">\n\t<link rel="stylesheet" href="styles.css">\n\t<title>Team Profile</title>\n</head>\n`;
    this.bodyHTML = ``;
    this.endHTML = `\n</html>`;
    this.completeHTML = ``;
  };

  createHTML(bodyHTML) {
    this.bodyHTML = bodyHTML;
    this.completeHTML += this.headHTML;
    this.completeHTML += this.bodyHTML;
    this.completeHTML += this.endHTML;  
  
    fs.writeFile('./dist/index.html', this.completeHTML, (err) => {
      err ? console.error(err) : console.log('HTML Created!')
    });
  }; 
};

module.exports = RenderHTML;
