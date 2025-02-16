// Define the navbar HTML
const navbarHTML = `
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="generic.html">Game Dev</a></li>
        <li>
            <a href="elements.html">Programming</a>
            <ul class="dropdown">
                <li><a href="#" id="content1">Unreal Python</a></li>
                <li><a href="#" id="content2">Tools</a></li>
                <li><a href="#" id="content3">Ocean Buoyancy</a></li>
                <li><a href="#" id="content4">Image Data Layering</a></li>
            </ul>
        </li>
        <li><a href="about.html">About</a></li>
    </ul>
</nav>
`;

// Inject the navbar into the placeholder
document.getElementById('navbar').innerHTML = navbarHTML;
