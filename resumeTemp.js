// First, create a new instance of the jsPDF library
var doc = new jsPDF();

function downloadPDF()
{
    
var text = document.getElementById('name').value;
var street_address = document.getElementById('Street_Address').value;
var City = document.getElementById('City').value;
var State = document.getElementById('State').value;
var Zip = document.getElementById('Zip').value;
var Phone_Num = document.getElementById('Phone_Num').value;
var Email = document.getElementById('Email').value;
var comma = ",";

// Set the font size and style
doc.setFont('times');
doc.setFontSize(12);
doc.setFontStyle('normal');



// Add the name of the job seeker at the top of the page
doc.setFontSize(14);
doc.setFontStyle('bold');
doc.text(text, 105,20-5, "center");

// Add the job seeker's contact information below their name
doc.setFontSize(12);
doc.setFontStyle('normal');
doc.text(street_address, 105,25-5, "center");
doc.text(City+comma+State+comma+Zip, 105,30-5, "center");
doc.text(Phone_Num, 105,35-5, "center");
doc.text(Email,105, 40-5,"center");

// Add a horizontal line to visually separate the contact information from the rest of the resume
doc.line(10, 45-5, 200, 45-5);

// Add the job seeker's education
doc.setFontSize(16);
doc.setFontStyle('bold');
doc.text(10, 55-5, 'Education');

doc.setFontSize(12);
doc.setFontStyle('normal');
doc.text(10, 62-5, 'University of Technology');
doc.text('September 2016 - June 2020',200, 62-5, "right");
doc.text(10, 67-5, 'Bachelor of Science in Computer Science');
doc.text(10, 72-5, 'GPA: '+"4.0");

doc.setFontSize(16);
doc.setFontStyle('bold');
doc.text(10, 85-5, 'Skills');

doc.setFontSize(12);
doc.setFontStyle('normal');
doc.text(10, 92-5, 'Programming Languages: ');
doc.text(10, 97-5, 'Tools and Frameworks: ');

//Add the job seeker's work experience
doc.setFontSize(16);
doc.setFontStyle('bold');
doc.text(10, 110-5, 'Work Experience');

doc.setFontSize(12);
doc.setFontStyle('bold');
doc.text(10, 120-5, 'Orginization');
doc.setFontStyle('italic');
doc.text(10, 125-5, 'Job Title');
doc.setFontStyle('normal');
doc.text('January 2020 - Present',200, 120-5, 'right');
doc.text(10, 130-5, ' • Developed and maintained software applications using languages such as Java and Python');
doc.text(10, 135-5, ' • Collaborated with cross-functional teams to identify and solve technical challenges');

doc.setFontSize(12);
doc.setFontStyle('bold');
doc.text(10, 145-5, 'Orginization');
doc.setFontStyle('italic');
doc.text(10, 150-5, 'Job Title');
doc.setFontStyle('normal');
doc.text('January 2020 - Present',200, 145-5, 'right');
doc.text(10, 155-5, ' • Developed and maintained software applications using languages such as Java and Python');
doc.text(10, 160-5, ' • Collaborated with cross-functional teams to identify and solve technical challenges');

doc.setFontSize(12);
doc.setFontStyle('bold');
doc.text(10, 170-5, 'Orginization');
doc.setFontStyle('italic');
doc.text(10, 175-5, 'Job Title');
doc.setFontStyle('normal');
doc.text('January 2020 - Present',200, 170-5, 'right');
doc.text(10, 180-5, ' • Developed and maintained software applications using languages such as Java and Python');
doc.text(10, 185-5, ' • Collaborated with cross-functional teams to identify and solve technical challenges');

//Projects
doc.setFontSize(16);
doc.setFontStyle('bold');
doc.text(10, 198-5, 'Projects');

doc.setFontSize(12);
doc.setFontStyle('bold');
doc.text(10, 208-5, 'Project Name');
doc.setFontStyle('normal');
doc.text('January 2020 - Present',200, 208-5, 'right');
doc.text(10, 213-5, ' • Description 1');
doc.text(10, 218-5, ' • Description 2');
doc.text(10, 223-5, ' • Description 3');

doc.setFontSize(12);
doc.setFontStyle('bold');
doc.text(10, 233-5, 'Project Name');
doc.setFontStyle('normal');
doc.text('January 2020 - Present',200, 233-5, 'right');
doc.text(10, 238-5, ' • Description 1');
doc.text(10, 243-5, ' • Description 2');
doc.text(10, 248-5, ' • Description 3');

doc.setFontSize(12);
doc.setFontStyle('bold');
doc.text(10, 258-5, 'Project Name');
doc.setFontStyle('normal');
doc.text('January 2020 - Present',200, 258-5, 'right');
doc.text(10, 263-5, ' • Description 1');
doc.text(10, 268-5, ' • Description 2');
doc.text(10, 273-5, ' • Description 3');

// Save the PDF document
doc.save('resume.pdf');
}
