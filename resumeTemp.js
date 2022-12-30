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
var Project1 = document.getElementById('Project1').value;
var P1_Description1 = document.getElementById('P1_Description1').value;
var Company_One = document.getElementById('Company1').value;
var Job_Title_One = document.getElementById('Job_Title1').value;
var Job_One_Started = document.getElementById('J1_Started').value;
var Job_One_Ended = document.getElementById('J1_Ended').value;
var W1_Description1 = document.getElementById('W1_Description1').value;
var W1_Description2 = document.getElementById('W1_Description2').value;
var Programming_languages = document.getElementById('Programming_Languages').value;
var Tools = document.getElementById('Tools').value;
var University = document.getElementById('University').value;
var Degree = document.getElementById('Degree').value;
var GPA = document.getElementById('GPA').value;
var School_Started = document.getElementById('School_Started').value;
var School_Ended = document.getElementById('School_Ended').value;

//var P1_Description2 = document.getElementById('P1_Description2').value;
//var P1_Description3 = document.getElementById('P1_Description3').value;

var comma = ",";

// Set the font size and style
doc.setFont('times');
doc.setFontSize(12);
doc.setFontStyle('normal');



// Add the name of the job seeker at the top of the page
if (text != "")
{
    doc.setFontSize(14);
    doc.setFontStyle('bold');
    doc.text(text, 105,y, "center");
}

// Add the job seeker's contact information below their name
if (street_address != "")
{
    doc.setFontSize(12);
    doc.setFontStyle('normal');
    y = addFive(y); 
    doc.text(street_address, 105,y, "center");
}

if (City != "" || State != "" || Zip != "") {
    doc.setFontSize(12);
    doc.setFontStyle('normal');
    y = addFive(y); 
    doc.text(City + comma + State + comma + Zip, 105, y, "center");
  }  

  if (Phone_Num != "")
  {
    doc.setFontSize(12);
    doc.setFontStyle('normal');
    y = addFive(y); 
    doc.text(Phone_Num, 105,y, "center");
  }

  if (Email != "")
  {
      doc.setFontSize(12);
      doc.setFontStyle('normal');
      y = addFive(y); 
      doc.text(Email,105, y,"center");
  }


// Add a horizontal line to visually separate the contact information from the rest of the resume
y = addFive(y); 
doc.line(10, y, 200, y);

if (University != "")
{
    // Add the job seeker's education
    y = addTen(y); 
    doc.setFontSize(16);
    doc.setFontStyle('bold');
    doc.text(10, y, 'Education');

    doc.setFontSize(12);
    doc.setFontStyle('italic');
    y = addSeven(y);
    doc.text(10, y, University);
    if (School_Ended != "" && School_Started != "")
    {
        var date = new Date(School_Started);
        var date2 = new Date(School_Ended);
        // Get the month and year of the date as a string
        var month = date.toLocaleDateString('en-US', { month: 'long' });
        var month2 = date2.toLocaleDateString('en-US', { month: 'long' });
        var year = date.getFullYear();
        var year2 = date2.getFullYear();

        // Format the date as a string in the desired format
        var formattedDate = month + ' ' + year;
        var formattedDate2 = month2 + ' ' + year2;
        doc.setFontSize(12);
        doc.setFontStyle('italic');
        doc.text(formattedDate+' - '+formattedDate2,200, y, "right");
    }

    if (Degree != "")
    {
        doc.setFontSize(12);
        doc.setFontStyle('normal');
        y = addFive(y); 
        doc.text(10, y, Degree);
    }

    if (GPA != "")
    {
        doc.setFontSize(12);
        doc.setFontStyle('normal');
        y = addFive(y); 
        doc.text(10, y, 'GPA: '+GPA);
    }

}

if (Programming_languages != "" || Tools != "")
{
    doc.setFontSize(16);
    doc.setFontStyle('bold');
    y = addTen(y);
    doc.text(10, y, 'Skills');
    if (Programming_languages != "")
    {
        doc.setFontSize(12);
        doc.setFontStyle('normal');
        y = addSeven(y); 
        doc.text(10, y, 'Programming Languages: '+Programming_languages);
    }
    if (Tools != "")
    {
        doc.setFontSize(12);
        doc.setFontStyle('normal');
        y = addSeven(y); 
        doc.text(10, y, 'Tools and Frameworks: '+Tools);
    }


}



if (Company_One != "")
{
    //Add the job seeker's work experience
    doc.setFontSize(16);
    doc.setFontStyle('bold');
    y = addTen(y);
    doc.text(10, y, 'Work Experience');

    doc.setFontSize(12);
    doc.setFontStyle('bold');
    y = addTen(y); 
    doc.text(10, y, Company_One);

    if (Job_One_Ended != "" && Job_One_Started != "")
    {
        var date = new Date(Job_One_Started);
        var date2 = new Date(Job_One_Ended);
            // Get the month and year of the date as a string
    var month = date.toLocaleDateString('en-US', { month: 'long' });
    var month2 = date2.toLocaleDateString('en-US', { month: 'long' });
    var year = date.getFullYear();
    var year2 = date2.getFullYear();

    // Format the date as a string in the desired format
    var formattedDate = month + ' ' + year;
    var formattedDate2 = month2 + ' ' + year2;
        doc.setFontStyle('italic');
        doc.text(formattedDate+' - '+formattedDate2,200, y, 'right');
    }

    if (Job_Title_One != null)
    {
        doc.setFontStyle('italic');
        y = addFive(y); 
        doc.text(10, y, Job_Title_One);
    }

    if (W1_Description1 != "") {
        doc.setFontStyle('normal');
        y = addFive(y);
      
        // Split the text in W1_Description1 into lines that fit within the maximum width of the page
        var lines = doc.splitTextToSize(W1_Description1, doc.internal.pageSize.width - 20); // 20 is for left and right margins
      
        // Add each line of text to the document, with the bullet point only at the beginning
        for (var i = 0; i < lines.length; i++) {
          if (i == 0) {
            doc.text(10, y, ' • ' + lines[i]);
          } else {
            doc.text(10, y, lines[i]);
          }
          y = addFive(y); // Move the cursor down by 5 units after adding each line of text
        }
      }
      
      

      if (W1_Description2 != "") {
        doc.setFontStyle('normal');
        //y = addFive(y);
      
        // Split the text in W1_Description1 into lines that fit within the maximum width of the page
        var lines = doc.splitTextToSize(W1_Description2, doc.internal.pageSize.width - 20); // 20 is for left and right margins
      
        // Add each line of text to the document, with the bullet point only at the beginning
        for (var i = 0; i < lines.length; i++) {
          if (i == 0) {
            doc.text(10, y, ' • ' + lines[i]);
          } else {
            doc.text(10, y, lines[i]);
          }
          y = addFive(y); // Move the cursor down by 5 units after adding each line of text
        }
      }
}

if (document.getElementById('Company2') !== null)
{
    var company = document.getElementById('Company2').value;
    if (company != "")
    {
        doc.setFontSize(12);
        doc.setFontStyle('bold');
        y = addFive(y);
        doc.text(10, y, company);
    }
    if (document.getElementById('J2_Started') !== null &&
        document.getElementById('J2_Ended') !== null)
        {
            var start = document.getElementById('J2_Started').value;
            var end = document.getElementById('J2_Ended').value;

            if (start != "" && end != "")
            {
                var date = new Date(start);
                var date2 = new Date(end);
                // Get the month and year of the date as a string
                var month = date.toLocaleDateString('en-US', { month: 'long' });
                var month2 = date2.toLocaleDateString('en-US', { month: 'long' });
                var year = date.getFullYear();
                var year2 = date2.getFullYear();
    
                var formattedDate = month + ' ' + year;
                var formattedDate2 = month2 + ' ' + year2;
    
                doc.setFontStyle('italic');
                doc.text(formattedDate+' - '+formattedDate2,200, y, 'right');
            }
        }

        if (document.getElementById('Job_Title2') != null)
        {
            var job = document.getElementById('Job_Title2').value;
            if (job != "")
            {
                doc.setFontStyle('italic');
                y = addFive(y); 
                doc.text(10, y,job );
            }
        }

        if (document.getElementById('W2_Description1') != null)
        {
            var desc = document.getElementById('W2_Description1').value;
            if (desc != "") {
                doc.setFontStyle('normal');
                y = addFive(y);
              
                // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                var lines = doc.splitTextToSize(desc, doc.internal.pageSize.width - 20); // 20 is for left and right margins
              
                // Add each line of text to the document, with the bullet point only at the beginning
                for (var i = 0; i < lines.length; i++) {
                  if (i == 0) {
                    doc.text(10, y, ' • ' + lines[i]);
                  } else {
                    doc.text(10, y, lines[i]);
                  }
                  y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                }
              }
        }

        if (document.getElementById('W2_Description2') != null)
        {
            var desc = document.getElementById('W2_Description2').value;
            if (desc != "") {
                doc.setFontStyle('normal');
               // y = addFive(y);
              
                // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                var lines = doc.splitTextToSize(desc, doc.internal.pageSize.width - 20); // 20 is for left and right margins
              
                // Add each line of text to the document, with the bullet point only at the beginning
                for (var i = 0; i < lines.length; i++) {
                  if (i == 0) {
                    doc.text(10, y, ' • ' + lines[i]);
                  } else {
                    doc.text(10, y, lines[i]);
                  }
                  y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                }
              }
        }

}

if (document.getElementById('Company3') !== null)
{
    var company = document.getElementById('Company3').value;
    if (company != "")
    {
        doc.setFontSize(12);
        doc.setFontStyle('bold');
        y = addFive(y);
        doc.text(10, y, company);
    }
    if (document.getElementById('J3_Started') !== null &&
        document.getElementById('J3_Ended') !== null)
        {
            var start = document.getElementById('J3_Started').value;
            var end = document.getElementById('J3_Ended').value;

            if (start != "" && end != "")
            {
                var date = new Date(start);
                var date2 = new Date(end);
                // Get the month and year of the date as a string
                var month = date.toLocaleDateString('en-US', { month: 'long' });
                var month2 = date2.toLocaleDateString('en-US', { month: 'long' });
                var year = date.getFullYear();
                var year2 = date2.getFullYear();
    
                var formattedDate = month + ' ' + year;
                var formattedDate2 = month2 + ' ' + year2;
    
                doc.setFontStyle('italic');
                doc.text(formattedDate+' - '+formattedDate2,200, y, 'right');
            }
        }

        if (document.getElementById('Job_Title3') != null)
        {
            var job = document.getElementById('Job_Title3').value;
            if (job != "")
            {
                doc.setFontStyle('italic');
                y = addFive(y); 
                doc.text(10, y,job );
            }
        }

        if (document.getElementById('W3_Description1') != null)
        {
            var desc = document.getElementById('W3_Description1').value;
            if (desc != "") {
                doc.setFontStyle('normal');
                y = addFive(y);
              
                // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                var lines = doc.splitTextToSize(desc, doc.internal.pageSize.width - 20); // 20 is for left and right margins
              
                // Add each line of text to the document, with the bullet point only at the beginning
                for (var i = 0; i < lines.length; i++) {
                  if (i == 0) {
                    doc.text(10, y, ' • ' + lines[i]);
                  } else {
                    doc.text(10, y, lines[i]);
                  }
                  y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                }
              }
        }

        if (document.getElementById('W3_Description2') != null)
        {
            var desc = document.getElementById('W3_Description2').value;
            if (desc != "") {
                doc.setFontStyle('normal');
                //y = addFive(y);
              
                // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                var lines = doc.splitTextToSize(desc, doc.internal.pageSize.width - 20); // 20 is for left and right margins
              
                // Add each line of text to the document, with the bullet point only at the beginning
                for (var i = 0; i < lines.length; i++) {
                  if (i == 0) {
                    doc.text(10, y, ' • ' + lines[i]);
                  } else {
                    doc.text(10, y, lines[i]);
                  }
                  y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                }
              }
        }

}


if (Project1 != "")
{
    //Projects
    doc.setFontSize(16);
    doc.setFontStyle('bold');
    y = addSeven(y); 
    doc.text(10, y, 'Projects');

    doc.setFontSize(12);
    doc.setFontStyle('bold');
    y = addSeven(y);
    doc.text(10, y, Project1);
   
    if (P1_Description1 != "") {
        doc.setFontStyle('normal');
        y = addFive(y);
      
        // Split the text in W1_Description1 into lines that fit within the maximum width of the page
        var lines = doc.splitTextToSize(P1_Description1, doc.internal.pageSize.width - 20); // 20 is for left and right margins
      
        // Add each line of text to the document, with the bullet point only at the beginning
        for (var i = 0; i < lines.length; i++) {
          if (i == 0) {
            doc.text(10, y, ' • ' + lines[i]);
          } else {
            doc.text(10, y, lines[i]);
          }
          y = addFive(y); // Move the cursor down by 5 units after adding each line of text
        }
      }

    if (document.getElementById('P1_Description2') !== null)
    {
        
        var id = document.getElementById('P1_Description2').value; 
        if (id != "") {
            doc.setFontStyle('normal');
            //y = addFive(y);
          
            // Split the text in W1_Description1 into lines that fit within the maximum width of the page
            var lines = doc.splitTextToSize(id, doc.internal.pageSize.width - 20); // 20 is for left and right margins
          
            // Add each line of text to the document, with the bullet point only at the beginning
            for (var i = 0; i < lines.length; i++) {
              if (i == 0) {
                doc.text(10, y, ' • ' + lines[i]);
              } else {
                doc.text(10, y, lines[i]);
              }
              y = addFive(y); // Move the cursor down by 5 units after adding each line of text
            }
          }
    }
    else{}

    if (document.getElementById('P1_Description3') !== null)
    {
        
        var id = document.getElementById('P1_Description3').value; 
        if (id != "") {
            doc.setFontStyle('normal');
           // y = addFive(y);
          
            // Split the text in W1_Description1 into lines that fit within the maximum width of the page
            var lines = doc.splitTextToSize(id, doc.internal.pageSize.width - 20); // 20 is for left and right margins
          
            // Add each line of text to the document, with the bullet point only at the beginning
            for (var i = 0; i < lines.length; i++) {
              if (i == 0) {
                doc.text(10, y, ' • ' + lines[i]);
              } else {
                doc.text(10, y, lines[i]);
              }
              y = addFive(y); // Move the cursor down by 5 units after adding each line of text
            }
          }
    }
}


if (document.getElementById('Project2') !== null)
{
    var newProj = document.getElementById('Project2').value;
    if (newProj != "")
    {
        doc.setFontSize(12);
        doc.setFontStyle('bold');
        y = addSeven(y);
        doc.text(10, y, newProj);

        if (document.getElementById('P2_Description1') !== null)
        {
            
                var id = document.getElementById('P2_Description1').value; 
                if (id != "") {
                    doc.setFontStyle('normal');
                    y = addFive(y);
                  
                    // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                    var lines = doc.splitTextToSize(id, doc.internal.pageSize.width - 20); // 20 is for left and right margins
                  
                    // Add each line of text to the document, with the bullet point only at the beginning
                    for (var i = 0; i < lines.length; i++) {
                      if (i == 0) {
                        doc.text(10, y, ' • ' + lines[i]);
                      } else {
                        doc.text(10, y, lines[i]);
                      }
                      y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                    }
                  }
        }
        

        if (document.getElementById('P2_Description2') !== null)
        {
            
                var id = document.getElementById('P2_Description2').value; 
                if (id != "") {
                    doc.setFontStyle('normal');
                    //y = addFive(y);
                  
                    // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                    var lines = doc.splitTextToSize(id, doc.internal.pageSize.width - 20); // 20 is for left and right margins
                  
                    // Add each line of text to the document, with the bullet point only at the beginning
                    for (var i = 0; i < lines.length; i++) {
                      if (i == 0) {
                        doc.text(10, y, ' • ' + lines[i]);
                      } else {
                        doc.text(10, y, lines[i]);
                      }
                      y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                    }
                  }
         }
        

        if (document.getElementById('P2_Description3') !== null)
        {
            
                var id = document.getElementById('P2_Description3').value; 
                if (id != "") {
                    doc.setFontStyle('normal');
                    //y = addFive(y);
                  
                    // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                    var lines = doc.splitTextToSize(id, doc.internal.pageSize.width - 20); // 20 is for left and right margins
                  
                    // Add each line of text to the document, with the bullet point only at the beginning
                    for (var i = 0; i < lines.length; i++) {
                      if (i == 0) {
                        doc.text(10, y, ' • ' + lines[i]);
                      } else {
                        doc.text(10, y, lines[i]);
                      }
                      y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                    }
                  }
        }
        
    }
}


if (document.getElementById('Project3') !== null)
{
    var newProj = document.getElementById('Project3').value;
    if (newProj != "")
    {
        doc.setFontSize(12);
        doc.setFontStyle('bold');
        y = addSeven(y);
        doc.text(10, y, newProj);

        if (document.getElementById('P3_Description1') !== null)
        {
            
                var id = document.getElementById('P3_Description1').value; 
                if (id != "") {
                    doc.setFontStyle('normal');
                    y = addFive(y);
                  
                    // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                    var lines = doc.splitTextToSize(id, doc.internal.pageSize.width - 20); // 20 is for left and right margins
                  
                    // Add each line of text to the document, with the bullet point only at the beginning
                    for (var i = 0; i < lines.length; i++) {
                      if (i == 0) {
                        doc.text(10, y, ' • ' + lines[i]);
                      } else {
                        doc.text(10, y, lines[i]);
                      }
                      y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                    }
                  }
        }
        

        if (document.getElementById('P3_Description2') !== null)
        {
            
                var id = document.getElementById('P3_Description2').value; 
                if (id != "") {
                    doc.setFontStyle('normal');
                    //y = addFive(y);
                  
                    // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                    var lines = doc.splitTextToSize(id, doc.internal.pageSize.width - 20); // 20 is for left and right margins
                  
                    // Add each line of text to the document, with the bullet point only at the beginning
                    for (var i = 0; i < lines.length; i++) {
                      if (i == 0) {
                        doc.text(10, y, ' • ' + lines[i]);
                      } else {
                        doc.text(10, y, lines[i]);
                      }
                      y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                    }
                  }
         }
        

        if (document.getElementById('P3_Description3') !== null)
        {
            
                var id = document.getElementById('P3_Description3').value; 
                if (id != "") {
                    doc.setFontStyle('normal');
                    //y = addFive(y);
                  
                    // Split the text in W1_Description1 into lines that fit within the maximum width of the page
                    var lines = doc.splitTextToSize(id, doc.internal.pageSize.width - 20); // 20 is for left and right margins
                  
                    // Add each line of text to the document, with the bullet point only at the beginning
                    for (var i = 0; i < lines.length; i++) {
                      if (i == 0) {
                        doc.text(10, y, ' • ' + lines[i]);
                      } else {
                        doc.text(10, y, lines[i]);
                      }
                      y = addFive(y); // Move the cursor down by 5 units after adding each line of text
                    }
                  }
        }
        
    }
}


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
                       '<form>' +
                       '<input type="text" id="W' + formCounter + '_Description1" name="W1_Description1"placeholder="Description"><br>'+
                       '</form>'+
                       '<form>'+
                       '<input type="text" id="W' + formCounter + '_Description2" name="W1_Description2"placeholder="Description"><br>'+
                       '</form>'+
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
                      '</form>'
                      ;
  
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
