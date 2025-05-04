// Define the navbar HTML
const navbarHTML = `
<nav>
    <ul>
        <li><a href="https://david-miller.life/index.html">Home</a></li>
        <li><a href="https://david-miller.life/generic.html">Unreal Dev</a></li>
        <li>
            <a href="https://david-miller.life/elements.html">Programming</a>
            <ul class="dropdown">
                <li><a href="#" id="content1">Python</a></li>
                <li><a href="#" id="content2">Tools</a></li>
                <li><a href="#" id="content1">Ocean Buoyancy</a></li>
                <li><a href="#" id="content4">Image Data Layering</a></li>
            </ul>
        </li>
        <li><a href="https://david-miller.life/about.html">About</a></li>
    </ul>
</nav>
`;

// Inject the navbar into the placeholder
document.getElementById('navbar').innerHTML = navbarHTML;
