const fs = require('fs');

class RenderHTML {
  constructor(bodyHTML) {
    this.headHTML =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <title>Team Profile</title>
</head>\n`;
    this.bodyHTML = bodyHTML;
    this.endHTML = `\n</html>`;
    this.completeHTML = ``;
  };

  createHTML() {
    this.completeHTML += this.headHTML;
    this.completeHTML += this.bodyHTML;
    this.completeHTML += this.endHTML;  
  
    fs.writeFile('./dist/index.html', this.completeHTML, (err) => {
      err ? console.error(err) : console.log('HTML Created!')
    });
  }; 
};

module.exports = RenderHTML;
