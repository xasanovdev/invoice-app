export function formatDate(inputDate) {
  // Check if inputDate is undefined, null, or an empty string
  if (inputDate === undefined || inputDate === null || inputDate === '') {
    // console.warn('Input date is undefined, null, or an empty string.');
    return '';
  }

  // Parse the input date string into a Date object
  const date = new Date(inputDate);

  // Check if the parsed date is valid
  if (isNaN(date.getTime())) {
    console.warn('Invalid date format.');
    return '';
  }

  // Convert month number to month abbreviation
  const monthAbbreviation = new Intl.DateTimeFormat('en', {
    month: 'short',
  }).format(date);

  // Get day and year
  const day = date.getDate();
  const year = date.getFullYear();

  // Format the date in the desired format
  const formattedDate = `${day} ${monthAbbreviation} ${year}`;


  return formattedDate;
}
