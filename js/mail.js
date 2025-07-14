function sendEmail() {
  var editorContent = document.getElementById("mailBody").innerHTML;
  var subject = document.getElementById("subject").value;
  var recipient = document.getElementById("to").value;
  console.log("Email content in HTML format:", editorContent);
  console.log("Email subject:", subject);
  console.log("Email recipient:", recipient);
  alert(
    "Email content has been converted to HTML format. Check the console for details."
  );
}

function toggleBold() {
  // This function toggles bold formatting for the selected text in the email body editor.
  const editor = document.getElementById("mailBody");
  console.log("Toggling bold formatting in the editor:", editor);
  const startNode = editor.selectionStart;
  const endNode = editor.selectionEnd;

  const selectedText = editor.value.substring(startNode, endNode);
  console.log("Selected text for bold toggle:", selectedText);

  const boldText = `<strong>${selectedText}</strong>`;

  console.log("Toggling bold for:", startNode, endNode, selection);
}
