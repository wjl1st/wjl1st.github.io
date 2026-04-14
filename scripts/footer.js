// define
const footer = document.createElement("footer");
const paragraph = document.createElement("p");

// render
footer.appendChild(paragraph);
document.body.appendChild(footer);

// fetch data & populate element
async function getLastCommitDate() {
    const REPO_URL = 'https://api.github.com/repos/wjl1st/wjl1st.github.io/commits';
    const commitList = await fetch(REPO_URL)
        .then(response => response.json())
        .then(json => json);
    const lastCommit = commitList[0]?.commit?.committer?.date;
    
    const commitDate = new Date(lastCommit);
    const year = commitDate.getFullYear();
    const month = commitDate.getMonth();
    const date = commitDate.getDate();
    const dateString = `${month + 1}/${date}/${year}`;
    
    paragraph.innerText = `Last updated: ${dateString}`;
};
getLastCommitDate();