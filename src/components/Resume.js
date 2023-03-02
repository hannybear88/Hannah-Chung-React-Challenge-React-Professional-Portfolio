import React from 'react'; 
import MyResume from "../pdf/HannahChungResume.02.2023.pdf"

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">resume: HannahKimChung</h1>
        <hr></hr>

    <iframe src={MyResume} width="100%" height="800px"></iframe>

        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                Currently taking a full stack coding bootcamp. 
            </div>
        </div>
        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>front end experience</h2>
                <p>HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, and IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>back end experience</h2>
                <p>
                Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;