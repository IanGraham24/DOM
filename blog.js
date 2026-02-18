




"use strict";

function showFilter() {
  document.getElementById("filterContent").style.display = "block";
  document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
  document.getElementById("newContent").style.display = "flex";
  document.getElementById("filterContent").style.display = "none";
}

function filterArticles() {
  var opinionChecked = document.getElementById("opinionCheckbox").checked;
  var recipeChecked = document.getElementById("recipeCheckbox").checked;
  var updateChecked = document.getElementById("updateCheckbox").checked;

  var opinionArticles = document.getElementsByClassName("opinion");
  var recipeArticles = document.getElementsByClassName("recipe");
  var updateArticles = document.getElementsByClassName("update");

  for (var i = 0; i < opinionArticles.length; i++) {
    opinionArticles[i].style.display = opinionChecked ? "" : "none";
  }

  for (var i = 0; i < recipeArticles.length; i++) {
    recipeArticles[i].style.display = recipeChecked ? "" : "none";
  }

  for (var i = 0; i < updateArticles.length; i++) {
    updateArticles[i].style.display = updateChecked ? "" : "none";
  }
}

function addNewArticle() {
  var title = document.getElementById("inputHeader").value;
  var text = document.getElementById("inputArticle").value;

  if (title === "" || text === "") {
    alert("Please fill out all fields.");
    return;
  }

  var type = "";

  if (document.getElementById("opinionRadio").checked) {
    type = "opinion";
  } else if (document.getElementById("recipeRadio").checked) {
    type = "recipe";
  } else if (document.getElementById("lifeRadio").checked) {
    type = "update";
  } else {
    alert("Please choose an article type.");
    return;
  }

  var article = document.createElement("article");
  article.className = type;

  var marker = document.createElement("span");
  marker.className = "marker";

  if (type === "opinion") {
    marker.innerText = "Opinion";
  } else if (type === "recipe") {
    marker.innerText = "Recipe";
  } else {
    marker.innerText = "Update";
  }

  var heading = document.createElement("h2");
  heading.innerText = title;

  var paragraph = document.createElement("p");
  paragraph.innerText = text;

  article.appendChild(marker);
  article.appendChild(heading);
  article.appendChild(paragraph);

  document.getElementById("articleList").appendChild(article);

  document.getElementById("inputHeader").value = "";
  document.getElementById("inputArticle").value = "";
  document.getElementById("opinionRadio").checked = false;
  document.getElementById("recipeRadio").checked = false;
  document.getElementById("lifeRadio").checked = false;

  filterArticles();
}
