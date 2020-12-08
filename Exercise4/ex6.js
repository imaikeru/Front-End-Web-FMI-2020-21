let table = document.createElement("table");

table.style.border="1px black solid";
// table.style.borderWidth = "1px";
// table.style.borderColor = "black";
// table.style.borderStyle = "solid";

let caption = document.createElement("caption");
caption.setAttribute("align", "top");
caption.innerHTML = "Table caption";
table.appendChild(caption);

let tHead = document.createElement("thead");
// First row
let firstRow = document.createElement("tr");

let evidenceRatingHeader = document.createElement("th");
evidenceRatingHeader.innerHTML = "Evidence Rating";
evidenceRatingHeader.style.border="1px black solid";
firstRow.appendChild(evidenceRatingHeader);

let еffectHeader = document.createElement("th");
еffectHeader.innerHTML = "Effect";
еffectHeader.style.border="1px black solid";
firstRow.appendChild(еffectHeader);

let еfficacyHeader = document.createElement("th");
еfficacyHeader.innerHTML = "Efficacy";
еfficacyHeader.style.border="1px black solid";
firstRow.appendChild(еfficacyHeader);

let consensusHeader = document.createElement("th");
consensusHeader.innerHTML = "Consensus";
consensusHeader.style.border="1px black solid";
firstRow.appendChild(consensusHeader);

let commentsHeader = document.createElement("th");
commentsHeader.innerHTML = "Comments";
commentsHeader.style.border="1px black solid";
firstRow.appendChild(commentsHeader);

let tBody = document.createElement("tbody");

// Second row
let secondRow = document.createElement("tr");

let firstEvidenceRating = document.createElement("td");
firstEvidenceRating.innerHTML = "A";
firstEvidenceRating.style.border="1px black solid";
secondRow.appendChild(firstEvidenceRating);

let firstEffect = document.createElement("td");
firstEffect.innerHTML = "Power Output";
firstEffect.style.border="1px black solid";
secondRow.appendChild(firstEffect);

let firstEfficacy = document.createElement("td");
firstEfficacy.innerHTML = "3 Stars";
firstEfficacy.style.border="1px black solid";
secondRow.appendChild(firstEfficacy);

let firstConsensus = document.createElement("td");
firstConsensus.innerHTML = "80% 18 studies";
firstConsensus.style.border="1px black solid";
secondRow.appendChild(firstConsensus);

let firstComments = document.createElement("td");
firstComments.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto blanditiis cumque doloribus, eius enim est exercitationem harum itaque iure iusto magni nam nobis? Alias aspernatur deleniti deserunt ea veniam!";
firstComments.style.border="1px black solid";
secondRow.appendChild(firstComments);

// Third row
let thirdRow = document.createElement("tr");

let secondEvidenceRating = document.createElement("td");
secondEvidenceRating.innerHTML = "B";
secondEvidenceRating.style.border="1px black solid";
thirdRow.appendChild(secondEvidenceRating);

let secondEffect = document.createElement("td");
secondEffect.innerHTML = "Weight";
secondEffect.style.border="1px black solid";
thirdRow.appendChild(secondEffect);

let secondEfficacy = document.createElement("td");
secondEfficacy.innerHTML = "4 Stars";
secondEfficacy.style.border="1px black solid";
thirdRow.appendChild(secondEfficacy);

let secondConsensus = document.createElement("td");
secondConsensus.innerHTML = "100% 65 studies";
secondConsensus.style.border="1px black solid";
thirdRow.appendChild(secondConsensus);

let secondComments = document.createElement("td");
secondComments.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad corporis cumque, dignissimos eaque excepturi fuga in ipsa laudantium mollitia obcaecati.";
secondComments.style.border="1px black solid";
thirdRow.appendChild(secondComments);

tHead.append(firstRow);
tBody.append(secondRow);
tBody.append(thirdRow);

table.append(tHead);
table.append(tBody);
document.body.appendChild(table);