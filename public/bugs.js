import {bugs} from "./all_bugs.js"

const bucket = document.getElementById("bugs")
const bugList = bugs.bugs.sort(function(a, b) {
    return a.novelty - b.novelty;
})
console.log(bugs)

function getNovelty (score) {
    if (score <= 0.15) {
        return ['grey', 'Mundane', ""]
    }
    if (score <= 0.25) {
        return ['lightblue', 'Common', ""];
    }
    if (score <= 0.4) {
        return ['blue', 'Unusual', ""];
    }
    if (score <= 0.6) {
        return ['orange', 'Exciting', "glow-white"];
    }
    if (score <= 0.75) {
        return ['purple', 'Rare', "glow-blue"];
    }

    if (score <= 0.9) {
        return ['red', 'Exotic', "glow"]
    }
    return ['gold', 'Legendary', "shimmer"];
}

function makeBugTile(bug) {
    const newBugDiv = document.createElement("div");
    const noveltyInfo = document.createElement("p");
    const infoNode = document.createElement("p");
    const flavorNode = document.createElement("p");
    infoNode.innerHTML = bug.name;
    flavorNode.innerHTML = bug.notes;
    const imgNode = document.createElement("img")
    const [noveltyColor, noveltyName, className] = getNovelty(bug.novelty);
    noveltyInfo.innerHTML = noveltyName;
    imgNode.style.border = "10px solid " + noveltyColor;
    imgNode.src = bug.image;
    imgNode.className = "flippy " + className;
    imgNode.style.maxHeight = "300px";
    newBugDiv.append(infoNode);
    newBugDiv.append(noveltyInfo);
    newBugDiv.append(imgNode);
    newBugDiv.append(flavorNode);
    newBugDiv.className = "tile";

    bucket.append(newBugDiv);
}

for (const bug of bugList) {
    makeBugTile(bug)
}