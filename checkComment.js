checkBtn.addEventListener("click", function () {
  const commentString = document.getElementById("comments").value;
  const lengthOfCommentString = commentString.length;
  const firstString = commentString[0];
  const secondString = commentString[1];
  const thirdString = commentString[2];
  const nThMinusTwoString = commentString[lengthOfCommentString - 2];
  const lastString = commentString[lengthOfCommentString - 1];
  console.log(commentString.length);
  if (commentString.length == 0) {
    alert("Please enter a valid comment!");
  }
  if (firstString == "/" && secondString == "/" && thirdString != "/") {
    console.log("This is single line comment.");
    const resultArea = document.getElementById("resultArea");
    const newH1 = document.createElement("h3");
    newH1.setAttribute("id", "h3");
    newH1.setAttribute("id", "h3");
    newH1.innerText = `${commentString}: This is single line comment.`;
    resultArea.appendChild(newH1);
    console.log(resultArea);
    console.log(newH1);
  } else if (
    firstString == "/" &&
    secondString == "*" &&
    nThMinusTwoString == "*" &&
    lastString == "/"
  ) {
    console.log("This is multi line comment.");
    const resultArea = document.getElementById("resultArea");
    const newH1 = document.createElement("h3");
    newH1.setAttribute("id", "h3");
    newH1.innerText = `${commentString}: This is multi line comment.`;
    resultArea.appendChild(newH1);
    console.log(resultArea);
    console.log(newH1);
  } else {
    console.log("This is not a commnent.");
    const resultArea = document.getElementById("resultArea");
    const newH1 = document.createElement("h3");
    newH1.setAttribute("id", "h3");
    newH1.innerText = `${commentString}: This is not a comment.`;
    resultArea.appendChild(newH1);
    console.log(resultArea);
    console.log(newH1);
  }
  const emptyCommentString = document.getElementById("comments");
  emptyCommentString.value = "";
});
