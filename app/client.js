var helloComponent = require("./views/app");
 
helloComponent.renderSync({ name: "SVG Packer" }).appendTo(document.body);
