// Format the date

export const FormatDate = (date) => {
	return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date(date));
}

export const FormatDateAndTime = (date) => {
	return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'medium'}).format(new Date(date));
}

export const ConvertToTitleCase = (string) => {
	return string.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(' ')
}