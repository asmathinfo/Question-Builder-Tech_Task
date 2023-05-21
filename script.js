
// this is a function for RichText EDitor TineyMce i am Using Trough API 
//  this is a api i am using rg55f6v2tlz4q7j0j56daevysb599kjpvqfbtzsfgrd5465j
  tinymce.init({
    selector: 'textarea',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    menubar: false,
    resize: false,
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ]
  });


// this is a function for upload media 
  function uploadMedia() {
    var fileInput = document.getElementById('mediaUpload');
    var file = fileInput.files[0];
    alert('Selected file: ' + file.name);
  }
  
  // this is a Save button function which we're using to save the questions
  var saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', function() {
      var content = tinymce.get('myEditor').getContent();
      alert('Content saved!');
    });

    // this where we are dynamically creating the textboxes when user add number of the options
    // function addTextboxes() {
    //     var numOptions = parseInt(document.getElementById("numOptions").value);
    //     var answerBox = document.querySelector(".answerBox");
        
        
    //     answerBox.innerHTML = "";
        
    //     for (var i = 0; i < numOptions; i++) {
    //       var textbox = document.createElement("input");
    //       textbox.type = "text";
    //       textbox.placeholder = "Type Option name " + (i + 1);
    //       answerBox.appendChild(textbox);

    //       var removeButton = document.createElement("button");
    //   removeButton.textContent = "-";
    //   removeButton.className = "removeOptionBtn";
    //   removeButton.onclick = function() {
    //     answerBox.removeChild(textbox);
    //     answerBox.removeChild(removeButton);
    //     };
    //     answerBox.appendChild(removeButton);
    //   }
    // }
 
// script.js

// script.js

function addItem() {
  var userInput = document.getElementById('inputText').value;
  var selectedDate = document.getElementById('inputDate').value;

  var newItem = document.createElement('p');
  newItem.textContent = userInput;
  newItem.classList.add('resultTexts');

  var newDate = document.createElement('p');
  newDate.textContent = selectedDate;
  newDate.classList.add('resultTexts');
  var currentTime = new Date().toLocaleTimeString();
  var timeSpan = document.createElement('span');
timeSpan.textContent = ' ' + currentTime;


  var resultsDiv = document.getElementById('resultText');
  var dateDiv = document.getElementById('resultdatepicker');
  var results = document.getElementById('results');


  resultsDiv.appendChild(newItem);
  dateDiv.appendChild(newDate);
  newDate.appendChild(timeSpan);

  results.style.display = 'flex';

}



function addTextboxes() {
  var numOptions = parseInt(document.getElementById("numOptions").value);

  // Show or hide the sectionheadBox div based on the user input
  var sectionheadBox = document.getElementById("sectionheadBox");
  if (numOptions > 0) {
    sectionheadBox.classList.remove("hidden");

    // Remove any existing cloned sectionheadBox divs
    var clonedSectionheadBoxes = document.getElementsByClassName("clonedSectionheadBox");
    while (clonedSectionheadBoxes.length > 0) {
      clonedSectionheadBoxes[0].parentNode.removeChild(clonedSectionheadBoxes[0]);
    }

    // Clone and append the sectionheadBox div the specified number of times
    var section2 = document.getElementById("section2");
    for (var i = 0; i < numOptions - 1; i++) {
      var clonedSectionheadBox = sectionheadBox.cloneNode(true);
      clonedSectionheadBox.classList.add("clonedSectionheadBox");
      section2.appendChild(clonedSectionheadBox);
    }
  } else {
    sectionheadBox.classList.add("hidden");
  }
}
