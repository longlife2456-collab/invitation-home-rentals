# Invitation Home Rentals - Lease Application Website

A modern, responsive lease application form website built with vanilla HTML, CSS, and JavaScript.

## Features

✅ **Comprehensive Lease Application Form** with multiple sections:
- Lease Details
- Personal Information
- Current Address
- Employment Information
- Income Information
- Occupancy Information
- Additional Questions
- Emergency Contact
- Payment Method Selection

✅ **Form Validation**
- Email validation
- Phone number validation
- Age verification (must be 18+)
- Move-in date validation (must be future date)
- Required field checking

✅ **User-Friendly Features**
- Auto-calculate annual salary from monthly income
- Middle name checkbox to skip field if not applicable
- Real-time form validation with visual feedback
- Success message on submission
- Mobile-responsive hamburger menu
- Professional styling with smooth transitions

✅ **Responsive Design**
- Mobile-first approach
- Fully responsive at all breakpoints
- Touch-friendly interface
- Hamburger menu for mobile navigation

✅ **Professional Layout**
- Clean, modern design
- Organized form sections
- Professional header and footer
- Company branding and contact information
- Quick navigation links

## Project Structure

```
invitation-home-rentals/
├── index.html      # Main HTML file with form structure
├── styles.css      # All styling and responsive design
├── script.js       # Form logic, validation, and interactivity
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (optional, for modifications)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/longlife2456-collab/invitation-home-rentals.git
```

2. Navigate to the project directory:
```bash
cd invitation-home-rentals
```

3. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or simply drag and drop `index.html` into your browser.

## Usage

### Filling Out the Form

1. **Fill in all required fields** (marked with *)
2. **Use dropdowns** for predefined options
3. **Enter dates** in the date picker fields
4. **Verify information** before submitting
5. **Click "Submit Application"** to complete

### Form Features

- **Auto-calculation**: Monthly income automatically calculates annual salary
- **Middle name checkbox**: Check to skip middle name field
- **Error feedback**: Invalid fields highlight in red
- **Success notification**: Green success message appears after submission
- **Mobile menu**: Hamburger menu appears on smaller screens

## Form Sections Explained

### Lease Details
- Move-in date and application type selection

### Personal Information
- Full name, title, gender, date of birth
- Email, phone, and contact preferences
- Marital status

### Current Address
- Street address, city, state, and ZIP code

### Employment Information
- Employment status, employer name, job title
- Years employed

### Income Information
- Gross monthly income and annual salary

### Occupancy Information
- Number of adults and children moving in

### Additional Questions
- Pet ownership
- Criminal/eviction/bankruptcy history

### Emergency Contact
- Emergency contact details and relationship

### Payment Method
- Payment method selection for application fee

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Customization

### Changing Colors

Edit the color values in `styles.css`:

```css
/* Primary color (header, buttons) */
#1a1a3e  /* Dark navy blue */

/* Accent color (links, focus states) */
#0066cc  /* Blue */

/* Text color */
#1a1a1a  /* Almost black */
```

### Modifying Form Fields

Add or remove fields in `index.html` within the appropriate `<section class="form-section">`.

### Updating Company Information

Replace the following in `index.html` and `styles.css`:
- Company name: "Invitation Home Rentals"
- Address: "7155 Old Katy Rd Ste N210, Houston, TX 77024"
- Phone: "(832) 555-7890"
- Email: "contact@invitationhomerentals.com"
- Tagline: "Unlocking more than doors — we unlock your future."

## Form Validation Rules

1. **Email**: Must be valid email format (user@domain.com)
2. **Phone**: Must have at least 10 digits
3. **Age**: Applicant must be 18 or older
4. **Move-in Date**: Must be a future date
5. **Required Fields**: All fields with asterisk (*) must be filled

## Form Submission

Currently, the form data is:
- Logged to browser console
- Validated client-side
- Shows success message on valid submission

### To Send to a Server

Modify `script.js` to send data to your backend:

```javascript
// Replace the console.log with:
fetch('/api/submit-application', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

## Development

### Adding New Features

1. **Add HTML fields** in `index.html`
2. **Style in `styles.css`** (use existing classes as reference)
3. **Add validation** in `script.js` validateForm() function
4. **Test responsiveness** at different screen sizes

### Testing

1. Test on multiple browsers
2. Test on mobile devices
3. Test form validation by leaving fields empty
4. Test auto-calculations
5. Test hamburger menu on mobile

## Performance

- **Page Load Time**: < 1 second
- **No external dependencies**: Pure vanilla JavaScript
- **Optimized CSS**: Minimal file size
- **Responsive**: No JavaScript layout thrashing

## Accessibility

- ✅ Semantic HTML structure
- ✅ Form labels associated with inputs
- ✅ Required field indicators
- ✅ Error messages for failed validation
- ✅ Focus states for keyboard navigation
- ✅ Sufficient color contrast

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions:
1. Check the documentation above
2. Review the HTML comments in the code
3. Test in multiple browsers
4. Check browser console for errors

## Future Enhancements

- [ ] Backend API integration
- [ ] Payment processing (Stripe, PayPal)
- [ ] File upload for documents
- [ ] Multi-step form wizard
- [ ] Save form progress
- [ ] Email confirmations
- [ ] Admin dashboard
- [ ] Application tracking system

## Credits

Built with vanilla HTML, CSS, and JavaScript.

Design based on Invitation Home Rentals branding guidelines.

---

**Version**: 1.0.0
**Last Updated**: 2026