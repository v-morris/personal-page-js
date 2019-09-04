let url = "https://api.github.com/users/v-morris/repos";

$(document).ready(function() {
  function loadGit() {
    $.get(url)
      .done(function(data) {
        let filter = data.filter((repo, index) => index < 20);
        let reposContainer = document.getElementById("repos-container");

        filter.map(repo => {
          let repoBox = document.createElement("div");
          repoBox.className = "repo-box border";
          let gitName = document.createElement("h4");
          gitName.className = "git-name";
          let gitDesc = document.createElement("p");
          gitDesc.className = "git-desc";

          repoBox.appendChild(gitName);
          repoBox.appendChild(gitDesc);

          gitName.innerHTML = repo.name;
          gitDesc.innerHTML = repo.description;

          reposContainer.appendChild(repoBox);
        });
      })
      .fail(function() {});
  }
  loadGit();

});

$(document).ready(function() {
  $(".fab").mouseenter(function() {
    $(this).removeClass("fa-2x");
    $(this).addClass("fa-3x");
  });
  $(".fab").mouseleave(function() {
    $(this).removeClass("fa-3x");
    $(this).addClass("fa-2x");
  });
});

