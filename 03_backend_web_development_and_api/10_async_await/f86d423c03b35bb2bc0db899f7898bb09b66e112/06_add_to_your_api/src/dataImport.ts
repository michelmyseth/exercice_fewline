const fileName = "the name of the file";
const filePath = path.resolve(`data/${fileName}`);
const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
const platform = JSON.parse(stringifiedPlatform);
