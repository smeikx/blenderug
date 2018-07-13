var today = new Date();
var text;

var next_meetup = this_months_date(today);
if (next_meetup.getDate() == today.getDate())
	text = 'Heute!';
else
{
	if (next_meetup.getTime() < today.getTime())
	next_meetup = this_months_date(advance_month(today))

	let month;
	switch(next_meetup.getMonth())
	{
		case 0: month = 'Jänner'; break;
		case 1: month = 'Februar'; break;
		case 2: month = 'März'; break;
		case 3: month = 'April'; break;
		case 4: month = 'Mai'; break;
		case 5: month = 'Juni'; break;
		case 6: month = 'Juli'; break;
		case 7: month = 'August'; break;
		case 8: month = 'September'; break;
		case 9: month = 'Oktober'; break;
		case 10: month = 'November'; break;
		case 11: month = 'Dezember'; break;
	}
	text = next_meetup.getDate() + '. ' + month;
}

document.getElementById('next-date').innerHTML = text;

function this_months_date(date)
{
	const tuesday = 2;
	let next_date = new Date(date.getTime());
	next_date.setDate(1);

	let first_week_day = next_date.getDay();
	let next_day = 1;
	if (first_week_day <= 2)
		next_day += 7 + tuesday - first_week_day;
	else
		next_day += 14 - (first_week_day - tuesday);
	next_date.setDate(next_day);
	return next_date;
}

function advance_month(date)
{
	let new_date = new Date(date.getTime());
	let next_month = (date.getMonth() + 1) % 12
	new_date.setMonth(next_month)
	if (next_month == 0)
		new_date.setYear(new_date.getYear() + 1);
	return new_date;
}

