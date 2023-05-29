let baseHTMLStr = `
<div class="projectContainer" onclick="">
<h4>Project Title</h4>
<p>Project Description</p>
<p>Made with [Lang &| Engine] | Platform: [Platform]</p>
<p>State</p>
</div>`
function generateWebpageHTML() {
    
}

function addHTML(target,html) {
    document.getElementById(target).insertAdjacentHTML('beforeend',html)
}

window.onload = function() {
    generateWebpageHTML()
}