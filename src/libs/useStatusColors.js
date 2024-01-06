const getStatusBgColorClass = (status) => {
  switch (status) {
    case 'paid':
      return 'bg-[#33D69F]';
    case 'pending':
      return 'bg-[#FF8F00]';
    case 'draft':
      return 'bg-[#373B53]';
    default:
      return '';
  }
};
const getStatusTextColorClass = (status) => {
  switch (status) {
    case 'paid':
      return 'text-[#33D69F]';
    case 'pending':
      return 'text-[#FF8F00]';
    case 'draft':
      return 'text-[#373B53]';
    default:
      return '';
  }
};

export { getStatusBgColorClass, getStatusTextColorClass };
