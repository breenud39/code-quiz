var storage = JSON.parse(localStorage.getItem("user"));
var container = document.getElementById("highscore-container");

if (storage === null)
{
  empty();
} else
{
  addUser();
}

function empty()
{
  var highscore = document.createElement("h1");
  highscore.textContent = "No Highscores";
  container.append(highscore);
}

function addUser()
{
  container.innerHTML = "";
  var userHighscore = document.createElement("ul");
  container.append(userHighscore);
  for (var i = 0; i < storage.length, i++;)
  {
    var listItem = document.createElement("li");
    listItem.textContent = "name: " + storage [i]. name + " score: " + storage [i].score;
    container.append(listItem)
  }
}