/* Task 2 */

var day=process.argv[2], month=process.argv[3], year=process.argv[4], mounth_in_year = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
process.stdout.write((new Date(year, 11, 31) - new Date(year, mounth_in_year.indexOf(month), day))/86400000);			