const sharp = require("sharp");

sharp("./04.jpg").resize(200, 200, { fit: "contain" }).toFile("out_2.jpg");
