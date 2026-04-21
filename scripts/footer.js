// method inspired from tutorial https://www.youtube.com/watch?v=7N4I7dkNezA

const footer = document.querySelector('footer')

window.addEventListener('DOMContentLoaded', function () {
    footer.innerHTML = `
            <div class="footerContent">
                <h3>Contact Us</h3>
                <div class="contactInfo">
                    <p><b>Email:</b> <a href="#">info@dwightsdoggydonors.com</a></p>
                    <p><b>Address:</b><br>
                    123 Example Street<br>
                    Sydney, NSW 2000<br>
                    Australia
                    </p>
                </div>
                <div class="footerLinks">
                    <a href="../index.html">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
                <div class="copyright">
                    PAR-Group 6 COMP-2021
                </div>
            </div>
            `;
})