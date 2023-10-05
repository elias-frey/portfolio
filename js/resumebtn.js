// Get a reference to the button element
const openPdfButton = document.getElementById('openPdfButton');

// Add a click event listener to the button
openPdfButton.addEventListener('click', function() {
    // Specify the path to the local PDF file on your computer
    const pdfPath = 'cv_EliasFrey.pdf';

    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
});