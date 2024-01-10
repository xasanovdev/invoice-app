export function formatDate(inputDate) {
  // Parse the input date string into a Date object
  const date = new Date(inputDate);

  // Convert month number to month abbreviation
  const monthAbbreviation = new Intl.DateTimeFormat('en', {
    month: 'short',
  }).format(date);

  // Get day and year
  const day = date.getDate();
  const year = date.getFullYear();

  // Format the date in the desired format
  const formattedDate = `${day} ${monthAbbreviation} ${year}`;

  console.log(formattedDate);

  return formattedDate;
}
