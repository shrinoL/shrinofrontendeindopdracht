
window.onload = function() {

    var projectBtn = document.querySelector('input[value="project"]');
    var stageBtn = document.querySelector('input[value="stage"]');
    var projectFld = document.getElementById("project");
    var stageFld = document.getElementById("stage");

    projectBtn.onclick = function () {
        projectFld.style.display = ("block");
        stageFld.style.display = ("none");
    };

    stageBtn.onclick = function () {
        stageFld.style.display = ("block");
        projectFld.style.display = ("none");
    };

}
