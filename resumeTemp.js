// First, create a new instance of the jsPDF library
var doc = new jsPDF();

function downloadPDF()
{
var text = document.getElementById('name').value;
var emailIcon = new Image();
emailIcon.src = 'email-icon.png';

// Set the font size and style
doc.setFont('times');
doc.setFontSize(12);
doc.setFontStyle('normal');

// Add the name of the job seeker at the top of the page
doc.text(20, 20, text);

// Add the job seeker's contact information below their name
doc.text(20, 25, '123 Main Street');
doc.text(20, 40, 'Anytown, USA 12345');
doc.text(20, 50, '555-555-1212');
doc.setTextColor(0, 0, 255);  // Set the text color to blue
doc.setLineWidth(1);  // Set the line width for the email icon
doc.addImage(emailIcon, 'PNG', 20, 60, 20, 20);
doc.text(50, 60, 'john.smith@example.com');


// Add a horizontal line to visually separate the contact information from the rest of the resume
doc.line(20, 65, 190, 65);

// Add the job seeker's work experience
doc.setFontSize(16);
doc.setFontStyle('bold');
doc.text(20, 75, 'Work Experience');

doc.setFontSize(12);
doc.setFontStyle('normal');
doc.text(20, 85, 'Software Engineer');
doc.text(20, 95, 'Acme Corporation');
doc.text(20, 105, 'January 2020 - Present');
doc.text(20, 115, '- Developed and maintained software applications using languages such as Java and Python');
doc.text(20, 125, '- Collaborated with cross-functional teams to identify and solve technical challenges');

// Add the job seeker's education
doc.setFontSize(16);
doc.setFontStyle('bold');
doc.text(20, 145, 'Education');

doc.setFontSize(12);
doc.setFontStyle('normal');
doc.text(20, 155, 'Bachelor of Science in Computer Science');
doc.text(20, 165, 'University of Technology');
doc.text(20, 175, 'September 2016 - June 2020');

// Save the PDF document
doc.save('resume.pdf');
}

