const commentString = "this";
console.log(commentString);
const lengthOfCommentString = commentString.length;
console.log(
  lengthOfCommentString,
  commentString[0],
  commentString[1],
  commentString[3 - 1]
);
const firstString = commentString[0];
const secondString = commentString[1];
const thirdString = commentString[2];
const nThMinusTwoString = commentString[lengthOfCommentString - 2];
const lastString = commentString[lengthOfCommentString - 1];
console.log(nThMinusTwoString, lastString);
