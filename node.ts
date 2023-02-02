import path, { basename } from "path";
console.log(path);

//basename i the last file name

const first = path.basename("app.js", ".js");
console.log(first);

// directory name is the road to get the the file
const second = path.dirname("gss/ss/judithfile/node.ts");
console.log(second);

//extension name
const third = path.extname("style.css.html");
console.log(third);

//format
const fourth = path.format({
  dir: "new\\react\\scr",
  base: "app.js",
});
console.log(fourth);

console.log(__dirname);
path.basename(__dirname);
