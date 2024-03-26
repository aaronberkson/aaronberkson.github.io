// Initialize display state as the Home tab, not projects display, and load divs from DOM
var projects_display_mode = false;
const selected_project_description = document.getElementById("project-description-id");
const project_iframe = document.getElementById("project-iframe");
const below_iframe = document.getElementById("below-iframe-id");
const repo_btn = document.getElementById("repo-btn-id");
const readme_btn = document.getElementById("readme-btn-id");
const popout_btn = document.getElementById("popout-btn-id");

// Project specific copy and styling
const projectObjArray = [
{
    projectName: "pacmen",
    description: "Click <i>ADD PAC-MAN</i> to create multiples, then click <i>START!</i> bounce them off the walls.",
    border: "double 16px #221FDE",
    borderRadius: "15px",
    width: "1400px",
    marginLeft: "18px",
    repoURL: "https://github.com/aaronberkson/pacmen",
    readmeURL: "https://github.com/aaronberkson/pacmen/blob/main/README.md",
    popoutURL: "./pacmen/index.html"
},
{
    projectName: "eyes",
    description: "Move your mouse around the emoji to see the eyes follow the mouse.",
    border: "solid 8px #c5eefc",
    borderRadius: "25px",
    width: "1400px",
    marginLeft: "18px",
    repoURL: "https://github.com/aaronberkson/eyes",
    readmeURL: "https://github.com/aaronberkson/eyes/blob/main/README.md",
    popoutURL: "./eyes/index.html"

},
{
    projectName: "bus",
    description: "Live data via API for Bus route 1 in Boston between Harvard to MIT, updating every 15s.",
    border: "solid 6px lightsteelblue",
    borderRadius: "0px",
    width: "1400px",
    marginLeft: "18px",
    repoURL: "https://github.com/aaronberkson/bus",
    readmeURL: "https://github.com/aaronberkson/bus/blob/main/README.md",
    popoutURL: "./bus/index.html"

}
];

function selectProject(projectName){

    // Change loaded URL in iframe to selected project
    project_iframe.src = "./" + projectName + "/index.html";
    project_iframe.style.height = "600px";

    // If Home is selected, change state of navbar and move content pane up to Projects
    if (!projects_display_mode){
        // Move content pane upwards to show Projects content
        const content = document.getElementById("content");
        const about = document.getElementById("about");
        const about_height = about.offsetHeight;
        content.style.transition = "transform 0.6s ease-in-out 0s";
        content.style.transform = "translate(-50%," + (-about_height+16) + "px)";
        projects_display_mode = !projects_display_mode;
        // Make the Projects tab active
        const home_tab = document.getElementById("home_tab");
        const projects_tab = document.getElementById("projects_tab");
        home_tab.classList.remove('active');
        projects_tab.classList.add('active');
        //show project buttons
        repo_btn.classList.remove('d-none');
        readme_btn.classList.remove('d-none');
        popout_btn.classList.remove('d-none');
    }

    // Loop through project array and change selected and deselected highlight styling per project
    projectObjArray.forEach((element,i) => {
        let project_link = document.getElementById("link-" + element.projectName);
        if (element.projectName === projectName){
            // Styling highlight around selected project thumbnail
            project_link.style.backgroundColor = "#164866";
            project_link.style.borderBottom = "6px solid #03ACEE";
            project_link.style.color = "#03ACEE";
            project_link.style.transition = "0.2s ease-in-out 0s";   
            // Change selected project description
            selected_project_description.innerHTML = element.description;
            // Change border style per project
            project_iframe.style.border = element.border;
            project_iframe.style.borderRadius = element.borderRadius;
            // Change width and left margin of iframe per project
            project_iframe.style.width = element.width;
            project_iframe.style.marginLeft = element.marginLeft;
            // Set URLs for Projects buttons - Repo, README & Pop-out
            repo_btn.href = element.repoURL;
            readme_btn.href = element.readmeURL;
            popout_btn.href = element.popoutURL;
        } else {
            // Un-highlight all other projects
            project_link.style.backgroundColor =  "transparent";
            project_link.style.borderBottom = "6px solid transparent";
            project_link.style.color = "whitesmoke";
        }
    });

    // Scroll to show all of projects div
    // below_iframe.scrollIntoView({ behavior: 'smooth', block: 'end' });
    // below_iframe.scrollIntoView(true);


}

function selectHome(){
    if (projects_display_mode){
        // Clear selected project iframe and description and border styling
        project_iframe.src = "about:blank";
        project_iframe.style.border = "none";
        selected_project_description.innerHTML = "";
        project_iframe.style.border = "0px";
        project_iframe.style.borderRadius = "0px";
        project_iframe.style.height = "0px";

        //hide project buttons
        repo_btn.classList.add('d-none');
        readme_btn.classList.add('d-none');
        popout_btn.classList.add('d-none');

        // Move content pane down to show About content
        content.style.transition = "transform 0.6s ease-in-out 0s";
        content.style.transform = "translate(-50%, 0px)";
        projects_display_mode = !projects_display_mode;
        // Make the Home tab active
        const home_tab = document.getElementById("home_tab");
        const projects_tab = document.getElementById("projects_tab");
        home_tab.classList.add('active');
        projects_tab.classList.remove('active');

        projectObjArray.forEach((element) => {
            let project_link = document.getElementById("link-" + element.projectName);
            // Un-highlight all other projects
            project_link.style.backgroundColor =  "transparent";
            project_link.style.borderBottom = "6px solid transparent";
            project_link.style.color = "whitesmoke";
        });
    }
}
