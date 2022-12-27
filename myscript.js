function downloadPDF() {
  // Get the text from the form input field
  var text = document.getElementById('name').value;

  // Create a new PDF document
  var doc = new jsPDF();

  // Add the text to the PDF
  doc.text(text, 10, 10);

  // Save the PDF
  doc.save('form-data.pdf');
}
