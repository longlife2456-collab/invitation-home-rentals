// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Form Validation and Submission
const leaseForm = document.getElementById('leaseForm');

if (leaseForm) {
    // Handle middle name checkbox
    const noMiddleNameCheckbox = document.getElementById('noMiddleName');
    const middleNameInput = document.getElementById('middleName');

    if (noMiddleNameCheckbox) {
        noMiddleNameCheckbox.addEventListener('change', () => {
            if (noMiddleNameCheckbox.checked) {
                middleNameInput.disabled = true;
                middleNameInput.value = '';
            } else {
                middleNameInput.disabled = false;
            }
        });
    }

    // Auto-calculate annual salary based on monthly income
    const monthlyIncomeInput = document.getElementById('monthlyIncome');
    const annualSalaryInput = document.getElementById('annualSalary');

    if (monthlyIncomeInput && annualSalaryInput) {
        monthlyIncomeInput.addEventListener('input', () => {
            const monthlyIncome = parseFloat(monthlyIncomeInput.value);
            if (!isNaN(monthlyIncome)) {
                annualSalaryInput.value = (monthlyIncome * 12).toFixed(2);
            }
        });
    }

    // Form submission
    leaseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        // Collect form data
        const formData = new FormData(leaseForm);
        const data = Object.fromEntries(formData);

        // Log form data (in a real application, this would be sent to a server)
        console.log('Form Data Submitted:', data);

        // Display success message
        showSuccessMessage();

        // Optionally reset the form
        setTimeout(() => {
            leaseForm.reset();
            hideSuccessMessage();
        }, 3000);
    });
}

// Form validation function
function validateForm() {
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#d32f2f';
        } else {
            field.style.borderColor = '#ddd';
        }
    });

    // Validate email
    const emailInput = document.getElementById('email');
    if (emailInput && !isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.style.borderColor = '#d32f2f';
    }

    // Validate phone numbers
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(phone => {
        if (phone.value && !isValidPhone(phone.value)) {
            isValid = false;
            phone.style.borderColor = '#d32f2f';
        }
    });

    // Validate date fields (must not be in the past)
    const moveInDateInput = document.getElementById('moveInDate');
    const dateOfBirthInput = document.getElementById('dateOfBirth');

    if (moveInDateInput && moveInDateInput.value) {
        const moveInDate = new Date(moveInDateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (moveInDate < today) {
            isValid = false;
            moveInDateInput.style.borderColor = '#d32f2f';
            alert('Move-in date must be in the future.');
        }
    }

    if (dateOfBirthInput && dateOfBirthInput.value) {
        const dob = new Date(dateOfBirthInput.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age < 18) {
            isValid = false;
            dateOfBirthInput.style.borderColor = '#d32f2f';
            alert('Applicant must be at least 18 years old.');
        }
    }

    return isValid;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation (basic)
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s()+-]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Success message display
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #4caf50;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        ">
            ✓ Application submitted successfully!
        </div>
        <style>
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        </style>
    `;
    document.body.appendChild(successDiv);
}

function hideSuccessMessage() {
    const successDiv = document.querySelector('.success-message');
    if (successDiv) {
        successDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => successDiv.remove(), 300);
    }
}

// Add error class styling
const style = document.createElement('style');
style.innerHTML = `
    input:invalid:not(:placeholder-shown),
    select:invalid {
        border-color: #d32f2f !important;
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Format currency inputs
function formatCurrency(input) {
    input.addEventListener('input', () => {
        let value = input.value.replace(/\D/g, '');
        if (value) {
            value = (value / 100).toFixed(2);
            input.value = '$' + value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    });
}

const monthlyIncomeInput = document.getElementById('monthlyIncome');
const annualSalaryInput = document.getElementById('annualSalary');

if (monthlyIncomeInput) formatCurrency(monthlyIncomeInput);
if (annualSalaryInput) formatCurrency(annualSalaryInput);