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









// import React from "react";

// function Resume() {
//   return (
//     <div className="columns">
//       <div className="column">
//         <p className="content is-medium">Résumé</p>
//         <hr />

//         <a
//           className="button is-primary"
//           href={process.env.PUBLIC_URL + "/HannahChungResume.02.2023.pdf"}
//           target="_blank" rel="noreferrer"
//         >
//           <span className="icon">
//             <i className="fas fa-download"></i>
//           </span>
//           <span>Download My Resume</span>
//         </a>
//       </div>
//       <div className="column">
//         <p className="content is-medium">Skills</p>
//         <hr />
//         {/* <ul>
//             <li>HTML, CSS, Javascript</li>
//             <li>OpenAPI, YAML, JSON</li>
//             <li>React, Next.js, Hugo</li>
//             <li>Markdown</li>
//             <li>Git</li>
//             <li>Github Repo Management</li>
//         </ul> */}
//       </div>
//     </div>
//   );
// }

// export default Resume;