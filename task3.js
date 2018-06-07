/* Task 3 */

var t1 = Number(process.argv[2]), t2 = Number(process.argv[3]), time_result='', hour, min, sec;
var t_sum = t1 + t2;
hour = Math.floor(t_sum/3600);
min = Math.floor((t_sum%3600)/60);
sec = t_sum%60;
if (hour > 0) {
	if ((hour%10) === 1) {time_result+=hour+' час ';}
	else if (((hour%10) > 1)&&((hour%10) < 5)) {time_result+=hour+' часа ';}
	else {time_result+=hour+' часов ';}
}
if (min > 0) {
	if ((min%10) === 1) {time_result+=min+' минута ';}
	else if (((min%10) > 1)&&((min%10) < 5)) {time_result+=min+' минуты ';}
	else {time_result+=min+' минут ';}
}
	if ((sec%10) === 1) {time_result+=sec+' секунда';}
	else if (((sec%10) > 1)&&((sec%10) < 5)) {time_result+=sec+' секунды';}
	else {time_result+=sec+' секунд';}

process.stdout.write(time_result);