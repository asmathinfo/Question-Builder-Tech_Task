
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
      // Implement your save functionality here
      alert('Content saved!');
    });

    // this where we are dynamically creating the textboxes when user add number of the options
    function addTextboxes() {
        var numOptions = parseInt(document.getElementById("numOptions").value);
        var answerBox = document.querySelector(".answerBox");
        
        
        // Clear existing content in answerBox
        answerBox.innerHTML = "";
        
        for (var i = 0; i < numOptions; i++) {
          var textbox = document.createElement("input");
          textbox.type = "text";
          textbox.placeholder = "Type Option name " + (i + 1);
          answerBox.appendChild(textbox);

          var removeButton = document.createElement("button");
      removeButton.textContent = "-";
      removeButton.className = "removeOptionBtn";
      removeButton.onclick = function() {
        answerBox.removeChild(textbox);
        answerBox.removeChild(removeButton);
        };
        answerBox.appendChild(removeButton);
      }
    }