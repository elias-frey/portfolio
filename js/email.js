// Get references to the button, tooltip, email span, and notification
const showTooltipButton = document.getElementById('showTooltip');
const tooltip = document.getElementById('tooltip');
const emailSpan = document.getElementById('email');
const notification = document.getElementById('notification');

// Function to show the tooltip
function showTooltip() {
    tooltip.classList.remove('hidden');
    tooltip.classList.add('below'); // Position below the button
}

// Function to hide the tooltip
function hideTooltip() {
    tooltip.classList.add('hidden');
}

// Function to copy the email address to the clipboard and show the notification
function copyEmailToClipboard() {
    const emailText = emailSpan.innerText;

    // Create a temporary textarea element to hold the email text
    const textarea = document.createElement('textarea');
    textarea.value = emailText;
    document.body.appendChild(textarea);

    // Select the email text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Show the notification with a delay
    notification.classList.remove('hidden');

    // Hide the notification after a delay
    setTimeout(function () {
        notification.classList.add('hidden');
    }, 1000); // 2000 milliseconds = 2 seconds
}


// Event listeners for showing and hiding the tooltip
showTooltipButton.addEventListener('click', showTooltip);
tooltip.addEventListener('click', hideTooltip);
document.addEventListener('click', function (event) {
    if (!tooltip.contains(event.target) && event.target !== showTooltipButton) {
        hideTooltip();
    }
});

// Event listener for copying the email address on click
emailSpan.addEventListener('click', copyEmailToClipboard);