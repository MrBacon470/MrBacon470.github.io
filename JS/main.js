let baseHTMLStr = `
<div class="projectContainer" onclick="">
<h4>Project Title</h4>
<p>Project Description</p>
<p>Made with [Lang &| Engine] | Platform: [Platform]</p>
<p>State</p>
</div>`
function generateWebpageHTML() {
    for(let i = 0; i < projectObjs.length / 3; i++) {
        let rowHTMLStr = `
        <div id="row${i}" class="flexRow"></div>`
        document.getElementById('mainContainer').innerHTML += rowHTMLStr
        for(let j = 0; j < 3; j++) {
            if(i * 3 + j >= projectObjs.length) break
            let project = projectObjs[i * 3 + j]
            let htmlStr = `
            <div class="projectContainer" onclick="window.open('${project.url}')">
            <h4 style="color: var(${project.titleColor})">${project.name}</h4>
            <p>${project.desc}</p>
            <p>Made with ${project.lang} | Platform: ${project.platform}<br>Status: ${project.state}</p>`

            document.getElementById(`row${i}`).innerHTML += htmlStr
        }
    }
}

window.onload = function() {
    generateWebpageHTML()
}