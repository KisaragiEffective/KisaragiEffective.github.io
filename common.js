window.addEventListener("load", function() {
  const github = "https://github.com/KisaragiEffective/KisaragiEffective.github.io";
  document.getElementById("footer").innerHTML += (`&copy;2019 KisaragiEffective serves under <a href="${github}/blob/master/LICENSE">LICENSE</a>.`);
  document.getElementById("github").innerHTML += (`<a href="${github}">FIX ME!</a>`);
  document.getElementById("github").innerHTML += (`<a href="${github}/commits/master/${window.location.pathname}">HISTORY</a>`);
});
