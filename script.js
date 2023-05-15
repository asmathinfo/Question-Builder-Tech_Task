

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




  function uploadMedia() {
    var fileInput = document.getElementById('mediaUpload');
    var file = fileInput.files[0];
    
    // Perform necessary actions with the uploaded file
    // For example, you can upload it to a server or process it locally
    // Here, we'll simply display the file name
    alert('Selected file: ' + file.name);
  }
  
  var saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', function() {
      var content = tinymce.get('myEditor').getContent();
      // Implement your save functionality here
      alert('Content saved!');
    });