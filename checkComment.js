const commentString = "th0000000000        is .";
// console.log(commentString);
const lengthOfCommentString = commentString.length;
const firstString = commentString[0];
const secondString = commentString[1];
const thirdString = commentString[2];
const nThMinusTwoString = commentString[lengthOfCommentString - 2];
const lastString = commentString[lengthOfCommentString - 1];
// console.log(nThMinusTwoString, lastString);

const clickCheck = document.addEventListener("click", function () {
  console.log("clicked");
  const commentString = document.getElementById("comments").value;
  //   const commentStringText = commentString.value;
  console.log("value is", commentString);
  if()
});
