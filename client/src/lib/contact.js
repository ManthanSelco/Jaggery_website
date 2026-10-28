// SELCO Foundation contact details, from https://selcofoundation.org/contact-us/
const maps = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

export const CONTACT = {
  website: 'https://selcofoundation.org',
  contactPage: 'https://selcofoundation.org/contact-us/',
  email: 'info@selcofoundation.org',
  phones: [
    { label: '+91 80 26493145', tel: '+918026493145' },
    { label: '+91 99000 25660', tel: '+919900025660' },
  ],
  offices: [
    { city: 'Bengaluru', note: 'Head office', address: '690, 15th Cross Rd, Jeewan Griha Colony, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078' },
    { city: 'Guwahati', address: 'PNGB Rd, Nambari Railway Officers Colony, Gotanagar, Maligaon, Guwahati, Assam 781011' },
    { city: 'Bhubaneswar', address: 'Plot No: A, 50, Nilakantha Nagar, Nayapalli, Bhubaneswar, Odisha 751012' },
  ].map(o => ({ ...o, map: maps('SELCO Foundation, ' + o.address) })),
  social: [
    { name: 'Facebook', url: 'https://www.facebook.com/SELCOFoundation' },
    { name: 'Instagram', url: 'https://www.instagram.com/selcoofficial/' },
    { name: 'YouTube', url: 'https://www.youtube.com/@SELCOFoundationofficial' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/selco-foundation/' },
    { name: 'X', url: 'https://twitter.com/SELCOFoundation' },
  ],
};
