// Format the date

export const FormatDate = (date) => {
	return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date(date));
}

export const FormatDateAndTime = (date) => {
	return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'medium'}).format(new Date(date));
}
