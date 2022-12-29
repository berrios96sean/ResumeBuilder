// First, create a new instance of the jsPDF library
var formCounter = 1;
var descrCounter = 1; 
var descrCounter2 = 1; 
var descrCounter3 = 1; 
var projCounter =1; 
var descr = 0;
var descr2 =0; 
var descr3 = 0;
var descr4 = 0;
var formNum = 0; 

function downloadPDF()
{
    var y = 15; 
    var doc = new jsPDF();
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
doc.text(text, 105,y, "center");

// Add the job seeker's contact information below their name
doc.setFontSize(12);
doc.setFontStyle('normal');
y = addFive(y); 
doc.text(street_address, 105,y, "center");
if (City != "" || State != "" || Zip != "") {
    y = addFive(y); 
    doc.text(City + comma + State + comma + Zip, 105, y, "center");
  }  
  y = addFive(y); 
doc.text(Phone_Num, 105,y, "center");
y = addFive(y); 
doc.text(Email,105, y,"center");

// Add a horizontal line to visually separate the contact information from the rest of the resume
y = addFive(y); 
doc.line(10, y, 200, y);

// Add the job seeker's education
y = addTen(y); 
doc.setFontSize(16);
doc.setFontStyle('bold');
doc.text(10, y, 'Education');

doc.setFontSize(12);
doc.setFontStyle('normal');
y = addSeven(y); 
doc.text(10, y, 'University of Technology');
doc.text('September 2016 - June 2020',200, y, "right");
y = addFive(y); 
doc.text(10, y, 'Bachelor of Science in Computer Science');
y = addFive(y); 
doc.text(10, y, 'GPA: '+"4.0");

doc.setFontSize(16);
doc.setFontStyle('bold');
y = addThirteen(y);
doc.text(10, y, 'Skills');

doc.setFontSize(12);
doc.setFontStyle('normal');
y = addSeven(y); 
doc.text(10, y, 'Programming Languages: ');
y = addFive(y); 
doc.text(10, y, 'Tools and Frameworks: ');

//Add the job seeker's work experience
doc.setFontSize(16);
doc.setFontStyle('bold');
y = addThirteen(y);
doc.text(10, y, 'Work Experience');

doc.setFontSize(12);
doc.setFontStyle('bold');
y = addTen(y); 
doc.text(10, y, 'Orginization');
doc.setFontStyle('italic');
doc.text('January 2020 - Present',200, y, 'right');
y = addFive(y); 
doc.text(10, y, 'Job Title');
doc.setFontStyle('normal');
y = addFive(y); 
doc.text(10, y, ' • Developed and maintained software applications using languages such as Java and Python');
y = addFive(y); 
doc.text(10, y, ' • Collaborated with cross-functional teams to identify and solve technical challenges');

doc.setFontSize(12);
doc.setFontStyle('bold');
y = addTen(y);
doc.text(10, y, 'Orginization');
doc.setFontStyle('italic');
doc.text('January 2020 - Present',200, y, 'right');
y = addFive(y); 
doc.text(10, y, 'Job Title');
doc.setFontStyle('normal');
y = addFive(y); 
doc.text(10, y, ' • Developed and maintained software applications using languages such as Java and Python');
y = addFive(y); 
doc.text(10, y, ' • Collaborated with cross-functional teams to identify and solve technical challenges');


doc.setFontSize(12);
doc.setFontStyle('bold');
y = addTen(y); 
doc.text(10, y, 'Orginization');
doc.setFontStyle('italic');
doc.text('January 2020 - Present',200, y, 'right');
y = addFive(y);
doc.text(10, y, 'Job Title');
doc.setFontStyle('normal');
y = addFive(y);
doc.text(10, y, ' • Developed and maintained software applications using languages such as Java and Python');
y = addFive(y);
doc.text(10, y, ' • Collaborated with cross-functional teams to identify and solve technical challenges');

//Projects
doc.setFontSize(16);
doc.setFontStyle('bold');
y = addThirteen(y); 
doc.text(10, y, 'Projects');

doc.setFontSize(12);
doc.setFontStyle('bold');
y = addTen(y);
doc.text(10, y, 'Project Name');
doc.setFontStyle('italic');
doc.text('January 2020 - Present',200, y, 'right');
doc.setFontStyle('normal');
y = addFive(y);
doc.text(10, y, ' • Description 1');
y = addFive(y);
doc.text(10, y, ' • Description 2');
y = addFive(y);
doc.text(10, y, ' • Description 3');

doc.setFontSize(12);
doc.setFontStyle('bold');
y = addTen(y);
doc.text(10, y, 'Project Name');
doc.setFontStyle('italic');
doc.text('January 2020 - Present',200, y, 'right');
doc.setFontStyle('normal');
y = addFive(y);
doc.text(10, y, ' • Description 1');
y = addFive(y);
doc.text(10, y, ' • Description 2');
y = addFive(y);
doc.text(10, y, ' • Description 3');

doc.setFontSize(12);
doc.setFontStyle('bold');
y= addTen(y);
doc.text(10, y, 'Project Name');
doc.setFontStyle('italic');
doc.text('January 2020 - Present',200, y, 'right');
doc.setFontStyle('normal');
y = addFive(y);
doc.text(10, y, ' • Description 1');
y = addFive(y);
doc.text(10, y, ' • Description 2');
y = addFive(y);
doc.text(10, y, ' • Description 3');

// Save the PDF document
doc.save('resume.pdf');

//clearFormValues(); 

}

function clearFormValues() {
    // Get all the form elements on the page
    const formElements = document.querySelectorAll('form input, form textarea, form select');
  
    // Loop through all the form elements and set their value to an empty string
    formElements.forEach(element => {
      element.value = '';
    });
  }
  
  function addForm() {
    // Increment the form counter
    formCounter++;
  
    // Show an alert if more than three jobs are added
    if (formCounter > 3) {
      alert('You cannot add more than three jobs!');
      return;
    }
  
    // Get the button element
    var button = document.querySelector('#add-button');
  
    // Create the new forms HTML as a string, using the form counter to update the IDs and names and adding the <h3> element
    var newFormsHTML = '<h3>Job ' + formCounter + '</h3>' +
                       '<form>' +
                       '  <input type="text" id="Company' + formCounter + '" name="Company' + formCounter + '" placeholder="Company"><br>' +
                       '</form>' +
                       '<form>' +
                       '  <input type="text" id="Job_Title' + formCounter + '" name="Job_Title' + formCounter + '" placeholder="Job Title"><br>' +
                       '</form>' +
                       '<p class="date">Date Started</p>' +
                       '<form>' +
                       '  <input type="date" id="J' + formCounter + '_Started" name="J' + formCounter + '_Started" title="Date Started"><br>' +
                       '</form>' +
                       '<p class="date">Date Ended</p>' +
                       '<form>' +
                       '  <input type="date" id="J' + formCounter + '_Ended" name="J' + formCounter + '_Ended" title="Date Ended"><br>' +
                       '</form>';
  
    // Insert the new forms HTML before the button element
    button.insertAdjacentHTML('beforebegin', newFormsHTML);
}
  
function addDescr() {
    // Increment the description counter
    descrCounter++;
    descr++;
  
    if (descrCounter > 3) {
        alert('You cannot add more than three Descriptions!');
        return;
      }

    // Create the new description HTML as a string, using the description counter to update the IDs and names
    var newDescrHTML = '<form>' +
                       '  <input type="text" id="P1_Description' + descrCounter + '" name="P1_Description' + descrCounter + '"placeholder="Description"><br>' +
                       '  <button type="button" onclick="addDescr()" id="add-descr">+</button>' +
                       '</form>';
  
    // Get the initial description form element
    var initialDescrForm = document.querySelector('#P1_Description'+descr+'').parentNode;
  
    // Insert the new description HTML after the initial description form element
    initialDescrForm.insertAdjacentHTML('afterend', newDescrHTML);
  }

  function addDescr2() {
    // Increment the description counter
    descrCounter2++;
    descr2++;
  
    if (descrCounter2 > 3) {
        alert('You cannot add more than three Descriptions!');
        return;
      }

    // Create the new description HTML as a string, using the description counter to update the IDs and names
    var newDescrHTML = '<form>' +
                       '  <input type="text" id="P2_Description' + descrCounter2 + '" name="P2_Description' + descrCounter2 + '"placeholder="Description"><br>' +
                       '  <button type="button" onclick="addDescr2()" id="add-descr2">+</button>' +
                       '</form>';
  
    // Get the initial description form element
    var initialDescrForm = document.querySelector('#P2_Description'+descr2+'').parentNode;
  
    // Insert the new description HTML after the initial description form element
    initialDescrForm.insertAdjacentHTML('afterend', newDescrHTML);
  }

  function addDescr3() {
    // Increment the description counter
    descrCounter3++;
    descr3++;

    if (descrCounter3 > 3) {
        alert('You cannot add more than three Descriptions!');
        return;
      }

    // Create the new description HTML as a string, using the description counter to update the IDs and names
    var newDescrHTML = '<form>' +
                       '  <input type="text" id="P3_Description' + descrCounter3 + '" name="P3_Description' + descrCounter3 + '"placeholder="Description"><br>' +
                       '  <button type="button" onclick="addDescr3()" id="add-descr3">+</button>' +
                       '</form>';
  
    // Get the initial description form element
    var initialDescrForm = document.querySelector('#P3_Description'+descr3+'').parentNode;
  
    // Insert the new description HTML after the initial description form element
    initialDescrForm.insertAdjacentHTML('afterend', newDescrHTML);
  }
  
  function addProj() {
    // Increment the project counter
    projCounter++;
    descr4++;
    formNum++;

    if (projCounter > 3) {
        alert('You cannot add more than three Projects!');
        return;
      }

    // Create the new project HTML as a string, using the project counter to update the IDs and names
    var newProjHTML = '<h3>Project ' + projCounter + '</h3>' +
                      '<form>' +
                      '  <input type="text" id="Project' + projCounter + '" name="Project' + projCounter + '" placeholder="Project Name"><br>' +
                      '</form>' +
                      '<form>' +
                      '  <input type="text" id="P' + projCounter + '_Description1" name="P' + projCounter + '_Description1" placeholder="Description"><br>' +
                      '  <button type="button" onclick="addDescr' + projCounter + '()" id="add-descr' + projCounter + '" title="Add another Description">+</button>' +
                      '</form>';
  
    // Get the initial project form element
    //var initialProjForm = document.querySelector('#f'+formNum+'').parentNode;
    var button = document.querySelector('#add-proj');
  
    // Insert the new project HTML after the initial project form element
   // initialProjForm.insertAdjacentHTML('afterend', newProjHTML);
        // Insert the new forms HTML before the button element
        button.insertAdjacentHTML('beforebegin', newProjHTML);
  }  
  
  function addFive(y)
  {
      y = y +5; 
      return y; 
  }
  
  function addTen(y)
  {
      y = y + 10; 
      return y; 
  }

  function addSeven(y)
  {
      y = y + 7; 
      return y; 
  }

  function addThirteen(y)
  {
      y = y + 13; 
      return y; 
  }
