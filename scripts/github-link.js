(() => {
const it = document.getElementById("github");
const loc = document.location.toString();
const path = g3.replace(/^https:\/\/kisaragieffective\.github\.io\/(.*)$/, "https://github.com/kisaragieffective/kisaragieffective.github.io/tree/master/$1");
it.innerHTML = `<a href="${loc}">See this file on GitHub?</a>`
})();
