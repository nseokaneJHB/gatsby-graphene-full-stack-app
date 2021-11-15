// Format the date

export const FormatDate = (date) => {
	return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date(date));
}
