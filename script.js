document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accountNumber = document.getElementById('accountNumber').value.trim();
    const depositAmount = document.getElementById('depositAmount').value;
    const depositType = document.getElementById('depositType').value;

    if (!accountNumber || depositAmount <= 0 || !depositType) {
        alert('Please fill in all fields correctly.');
        return;
    }

    alert('Deposit submitted successfully!');
});

document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const loanAmount = document.getElementById('loanAmount').value;
    const loanType = document.getElementById('loanType').value;
    const employmentStatus = document.getElementById('employmentStatus').value;

    if (!name || !email || !mobile || loanAmount <= 0 || !loanType || !employmentStatus) {
        alert('Please fill in all fields correctly.');
        return;
    }

    alert('Loan application submitted successfully!');
});
