var str=process.argv.splice(2).join(""), str2;
str=str.replace(/[!.?,:;\n]/g,"").toLowerCase();
str2=str.split("").reverse().join("");
console.log((str===str2)?"YES":"NO");