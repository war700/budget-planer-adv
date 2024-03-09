// Define expense categories and subdivisions
const categories = [
    {
        name: 'Home & Utilities',
        subdivisions: [
            'Mortgage & Rent',
            'Body Corporate Fees',
            'Council Rates',
            'Furniture & Appliances',
            'Renovations & Maintenance',
            'Electricity',
            'Gas',
            'Water',
            'Internet',
            'Pay TV',
            'Home Phone',
            'Mobile',
            'Other'
        ]
    },
    {
        name: 'Insurance & Financial',
        subdivisions: [
            'Car Insurance',
            'Home & Contents Insurance',
            'Personal & Life Insurance',
            'Health Insurance',
            'Car Loan',
            'Credit Card Interest',
            'Other Loans',
            'Paying Off Debt',
            'Savings',
            'Investments & Super Contributions',
            'Charity Donations',
            'Other'
        ]
    },
    // Include other categories here
];

// Function to generate expense input fields
function generateExpenseInputs() {
    const categoriesContainer = document.querySelector('.categories');

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category.name;
        categoryDiv.appendChild(categoryHeading);

        category.subdivisions.forEach(subdivision => {
            const subdivisionDiv = document.createElement('div');
            subdivisionDiv.classList.add('subdivision');

            const label = document.createElement('label');
            label.textContent = subdivision;
            subdivisionDiv.appendChild(label);

            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add('expense-input');
            subdivisionDiv.appendChild(input);

            categoryDiv.appendChild(subdivisionDiv);
        });

        categoriesContainer.appendChild(categoryDiv);
    });
}

// Function to calculate budget
function calculateBudget() {
    // Get selected currency
    const currency = document.getElementById('currency').value;

    // Perform currency conversion for each expense
    // Calculate total expenses for each category
    // Calculate overall budget

    // Update summary section with calculated totals
    document.getElementById('total_budget').textContent = 'Overall Budget: $0';
}

// Event listener for currency selection change
document.getElementById('currency').addEventListener('change', function() {
    // Convert all expense amounts to selected currency
    // Update summary section with converted amounts
});

// Call the function to generate expense input fields when the page loads
window.onload = generateExpenseInputs;
