var tp = typeof process.argv[3];
switch (tp){
case 'undefined': 	var str=process.argv[2], str2;
					str=str.replace(/[!.?,:;\n\s]/g,"").toLowerCase();
					str2=str.split("").reverse().join("");
					console.log((str===str2)?"YES":"NO");
					break;
case 'string':		var day=process.argv[2], month=process.argv[3], year=process.argv[4], mounth_in_year = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
					console.log((new Date(year, 11, 31) - new Date(year, mounth_in_year.indexOf(month), day))/86400000);
					break;

}