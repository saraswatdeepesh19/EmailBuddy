function sendEmail() {
  var editorContent = document.getElementById("editor").innerHTML;
  var subject = document.getElementById("subject").value;
  var recipient = document.getElementById("to").value;
  console.log("Email content in HTML format:", editorContent);
  console.log("Email subject:", subject);
  console.log("Email recipient:", recipient);
  alert(
    "Email content has been converted to HTML format. Check the console for details."
  );
}
