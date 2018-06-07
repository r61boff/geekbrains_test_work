/* Task 1 */

var str=process.argv[2], str2;
str=str.replace(/[!.?,:;\n\s]/g,"").toLowerCase();
str2=str.split("").reverse().join("");
process.stdout.write((str===str2)?"YES":"NO");