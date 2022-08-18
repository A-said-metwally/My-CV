import React,{useState} from 'react'
import Head from '../head'



function Main() {

  return (
    <div className='flex flex-col h-screen'>
      <Head title="Ahmed Said" />

      <div className="container">
        <div className="left">
            <img src="/logo.jpg" alt="myprofilepic"/>
            <div className="info flex flex-col">
                <h1>Ahmed Said Metwally</h1><br/>
                {/* <h4>Senior Data Analyst</h4><br/> */}
                <h4>FrontEnd Web Developer</h4><br/>
                <h4>Next.js - React.js</h4>
                <div className="adress">
                  <h1 className='adress-title'>Personal Information</h1>
                    <div>
                     <i className="fa-solid fa-info"></i>
                        <span>Muslim</span>
                    </div>
                    <div>
                        <i className="fas fa-birthday-cake"></i>
                        <span>18 / 02 / 1987</span>
                    </div>
                    <div>
                      <i className="fas fa-ring"></i>
                        <span>Married</span>
                    </div>
                    <div>
                        <i className="fas fa-location"></i>
                        <span>Egyptian</span>
                    </div>

                  <h1 className='adress-title'>Contacts</h1>
                    <div>
                        <i className="fas fa-map-marker-alt"></i> 
                        <span>Egypt -Al Behera-Wadi al Natroon</span>
                    </div>
                    <div>
                        <i className="fas fa-phone-alt"></i>
                        <span>00201210610717</span>
                    </div>
                    <div>
                        <i className="fas fa-envelope"></i>
                        <span>ahmed1071722@gmail.com</span>
                    </div>

                  <h1 className='adress-title'>Education</h1>
                    <div>
                        <i className="fas fa-university"></i>
                        <span>{`Bachelor's Degree in Faculty of Agriculture - 2007`} </span>
                    </div>
                    <div>
                        <i className="fas fa-briefcase"></i>
                        <span>Agricultural Engineering</span>
                    </div>
                    <div>
                        <i className="fas fa-graduation-cap"></i>
                        <span>Final Grade Good</span>
                    </div>
                    <div>
                         <i className="fas fa-university"></i>
                        <span>El Menofia University</span>
                    </div>
                </div>
                {/* <!-- start skils --> */}
                <div className="skils">
                    <div className="main-contaner">
                        <div className="sub-container">
                            <div className="skil-logo"><span><i className="fab fa-html5"></i></span></div>
                            <div className="skil-name">HTML5</div>
                        </div>
                        <div className="sub-container">
                            <div className="skil-logo"><span><i className="fab fa-css3"></i></span></div>
                            <div className="skil-name">CSS3</div>
                        </div>
                    </div>
                    <div className="main-contaner">
                        <div className="sub-container">
                            <div className="skil-logo"><span><i className="fas fa-code"></i></span></div>
                            <div className="skil-name">ES6</div>
                        </div>
                        <div className="sub-container">
                            <div className="skil-logo"><span><i className="fab fa-react"></i></span></div>
                            <div className="skil-name">Reactjs</div>
                        </div>
                    </div>
                    <div className="main-contaner">
                        <div className="sub-container">
                            <div className="skil-logo"><span><i className="fab fa-react"></i></span></div>
                            <div className="skil-name">Next.js</div>
                        </div>
                        <div className="sub-container">
                            <div className="skil-logo"><span><i className="fa-regular fa-react"></i></span></div>
                            <div className="skil-name">TailwindCSS</div>
                        </div>
                    </div>

                    <div className="main-contaner">
                        <div className="sub-container">
                            <div className="skil-logo"><span><i className="fab fa-bootstrap"></i></span></div>
                            <div className="skil-name">Bootstrap</div>
                        </div>
                        <div className="sub-container">
                            <div className="skil-logo"><span><i className="fab fa-github-square"></i></span></div>
                            <div className="skil-name">GitHub</div>
                        </div>
                    </div>
                </div>
                {/* <!-- end skils --> */}

                {/* <!-- start contacts --> */}
                <div className="contacts">
                    <a className="linked" href="https://www.linkedin.com/in/ahmed-said-9b545b117?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtMxBpsyORZWCdxRO4PhQPA%3D%3D"><i className="fab fa-linkedin"></i></a>
                    <a className="facebook" href="https://web.facebook.com/elmohandes.ahmed.18"><i className="fab fa-facebook-square"></i></a>
                    <a className="gmail" id="email"><i className="fas fa-envelope-open"></i></a>
                    <a className="github" href="https://github.com/A-said-metwally"><i className="fab fa-github-square"></i></a>
                </div>
                {/* <!-- end contacts --> */}
            </div>
        </div>

        {/* <!-- start right section --> */}
        <div className="right">
            
                <section className="aboutMe">
                    <h1 >ABOUT ME</h1>
                    <h3 className="title">
                        Next.js FrontEnd Web Developer and I Seek to Be Full Stack Developer
                    </h3>
                    <article>
                        {`I'm A Frontend Web Developer (Next.js , React.Js) , I Dealing During This Sector Since 2020,
                        ,I have Experience in React Library , Next js FrameWork (SSR ,SSG ) , Authentication , Api's Calls,
                        SPA , SOLID Design Principles , UI Material TailwindCSS , Firebase ,  Firestore Usage
                        Throughout My Service Period, I Even Have Gained Adequate Experience in SEO , Github ,
                        Stack Over Flow Community , Dealing with Customers
                        , Before That I Worked As A Senior Data Analyst in Al Watania Poultry Egypt,  I Have Good Experience in Relational Data Base
                        Management System Concept Especially "Microsoft Access " ,  Vba , Awareness in SQL , Good Experience in Data Visualization , 
                        I Have Done A Lot Of Projects That Have Satisfied Clients,
                        I Have Also Completed Lean Six Sigma Green Belt and Problem Solving.`}
                                            
                    </article>
                </section>

                <h1 className="sub-title">Achivements</h1>

                {/* <!-- start  achivements--> */}
                <div className="achivements">
                    <div className="achives">
                        <div>
                            <span className="achives-title">Al Watania-Poultry-Egypt Production Follow Up App </span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - Reactjs</span><br/> --> */}
                            <video src="/ci.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <p>spa responsive production process follow up and analysis , data visualaization(charts-2 js) and reports with next js,
                                ssr , users authorities, 
                            </p>
                            <a href="https://github.com/A-said-metwally/continuos-improvement.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Casheer App</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - Reactjs</span><br/> --> */}
                            <video src="/casheer.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <p>Sales Point Casheer App withh next js and session storage, that you can select items and add it to bill , calculate cost , 
                                print the bill , search in bills 
                            </p>
                            <a href="https://github.com/A-said-metwally/Casheer_App.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Linked IN App</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - Reactjs</span><br/> --> */}
                            <video src="/linked.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <p>spa responsive LinkedIn app with react js , context , fontawesome , Bootstrap
                                , main page , add post , upload images , like in posts
                            </p>
                            <a href="https://github.com/A-said-metwally/LinkedIn.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Ecommerc Site</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - JS</span><br/> --> */}
                            <video src="/ecommerce.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <p>spa responsive ecommerc app with netx js context api , SSR</p>
                            <a href="https://github.com/A-said-metwally/Ecommerc.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Memory Game</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - JS</span><br/> --> */}
                            <video src="/memory.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <p>spa responsive Memory Game with netx js </p>
                            <a href="https://github.com/A-said-metwally/Memory-Game.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Amazon.com App</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - Reactjs</span><br/> --> */}
                            <video src="/amazon.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <p>spa responsive ecommerc app Amazon with react js , context , fontawesome , Bootstrap ,
                                main page , categories filter , product page details , caret</p>
                            <a href="">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Fleet App</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - Reactjs</span><br/> --> */}
                            <video src="/fleetapp.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <p>spa Softec Fleet Web Site with HTML, fontawesome, Bootstrap 5.1,
                              TailwindCSS  </p>
                            <a href="https://github.com/A-said-metwally/Fleet-APp.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Microsoft Out_Look App</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - Reactjs</span><br/> --> */}
                            <video src="/outlook.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <p>In Progress Spa Microsoft Out Look Web App with Next js, fontawesome, TailwindCSS  </p>
                            <a href="https://github.com/A-said-metwally/Out_Look-App.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">React Js facebook App</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - Reactjs</span><br/> --> */}
                            <video src="/face.mov" autoPlay={true} ></video>
                            <button className="btn">Show Full Video</button>
                            <p>spa responsive facebook app with react js </p>
                            <a href="https://github.com/A-said-metwally/facebook.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Next Js facebook App</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - Reactjs</span><br/> --> */}
                            <video src="/nextfacebook.mov" autoPlay={true} ></video>
                            <button className="btn">Show Full Video</button>
                            <p>spa responsive facebook app with Next js , TailwindCSS , Firebase , SSR , Authentication </p>
                            <a href="https://github.com/A-said-metwally/Facebook-Next.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Twitter</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - Reactjs</span><br/> --> */}
                            <video src="/tweet.mov" autoPlay={true} ></video>
                            <button className="btn">Show Full Video</button>
                            <p>spa responsive twitter app with next js</p>
                            <a href="https://github.com/A-said-metwally/tweet.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Calculator App</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - JS</span><br/> --> */}
                            <video src="/calculator.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <p>Calculator app with next js, TailwindCSS</p>
                            <a href="https://github.com/A-said-metwally/Calculator.git">Get Source Code </a>
                        </div>
                    </div>
                    <div className="achives">
                        <div>
                            <span className="achives-title">Single Page Template</span><br/>
                            {/* <!-- <span className="achives-langs">HTML - CSS - JS</span><br/> --> */}
                            <video src="/template.mov" autoPlay={true}></video>
                            <button className="btn">Show Full Video</button>
                            <a href="">Get Source Code </a>
                        </div>
                    </div>
                </div>
                {/* <!-- end  achivements--> */}

                <h1 className="sub-title">experience</h1>

                {/* <!-- start experience --> */}
                <div className="experience">
                    <div className="exp">
                        <div>
                            <div className="head">
                                <div className="head-info">
                                    <span className="jop-title">Front End Web Developer </span><br/>
                                    <span className="jop-location">Free Lancer</span><br/>
                                    <span className="period">From 2019 Until Now</span>
                                </div>
                                <div className="logo">
                                    <img src=".//logo.jpg" alt="pic"/>
                                    {/* <!-- <img src=".//logo.jpg" alt="myprofilepic"> --> */}
                                </div>
                            </div>
                            <ul className="responsipility">
                                <li>Implementing web design and development principles to build stable software</li>
                                <li>Use mark-up languages like HTML to create user-friendly web pages</li>
                                <li>UI Material TailwindCSS Library</li>
                                <li>Maintain and improve website</li>
                                <li>Optimize applications for maximum speed</li>
                                <li>Design mobile-based features</li>
                                <li>Get feedback from, and build solutions for, users and customers</li>
                                <li>Write functional requirement documents and guides</li>
                                <li>Create quality mock-ups and prototypes</li>
                                <li>Ensure high quality graphic standards and brand consistency</li>
                                <li>Stay up-to-date on emerging technologies</li>
                                <li>Identifying innovative ideas and proof of concepts according to project requirements.</li>
                                <li>Providing guidance and troubleshooting support to clients.</li>
                                <li>Maintaining an organized workflow using a project management tool (like GitHub).</li>
                            </ul>
                        </div>
                    </div>
                    <div className="exp">
                        <div>
                            <div className="head">
                                <div className="head-info">
                                    <span className="jop-title">Data Analyst  </span><br/>
                                    <span className="jop-location">at Al Watania Poultry Egy - Continuos Improvement Dep.</span><br/>
                                    <span className="period">From 2013 Until Now</span>
                                </div>
                                <div className="logo">
                                    <img src=".//watania.jpg" alt="pic"/>
                                </div>
                            </div>
                            <ul className="responsipility">
                                <li>Create Plans for Gathering Data From Difference Department.</li>
                                <li>Calculate Performance, Over All Efficiency ,  Productivity for All Production Line and Labours.</li>
                                <li>Create Site KPIs and Periodic Follow up Results.</li>
                                <li>Coordinate With the Top Management to Achievement Improvement Plan</li>
                                <li>Analyse Problem and Deviation Route Causes</li>
                                <li>Preparing Annual ,  Monthly ,  Weekly and Daily Reports for Management Review</li>
                                <li>Preparing Diagrams ,  Flow Charts That Required in Improvement Plans</li>
                                <li>Implementing SPC - statistical process control on the production lines.</li>
                                <li>Design (or redesign) the process Flow Chart</li>
                                <li>Participate QA activities and analyse the root cause of returning.</li>
                                <li>Root cause investigation of non-conformances</li>

                                <span className='projects'>My Projects</span>

                                <li className='projects-points'>Contribute in Decrease Customer Returns Project</li>
                                <li className='projects-points'>Contribute in Increase Production Lines Efficiency Project</li>
                                <li className='projects-points'>Contribute in Implementation Lean Manufacturing Concepts</li>
                                <li className='projects-points'>Create Work Instructions Flow Charts</li>
                                <li className='projects-points'>Create Visual Management DashBoards</li>
                                <li className='projects-points'>Create Visual Products Specifications</li>
                                <li className='projects-points'>Publish KPIs System With Desktop Application At Al Watania Poultry   2017</li>
                                <li className='projects-points'>Create Sharing System To Calculation Efficiency, Productivity And Follow Up Breakdowns (Desktop App.) 2017</li>
                                <li className='projects-points'>Publish Access Data Base To Calculate Material Requirement , Manpower Needed , Process Cycle Time And Sales Plan
                                   Adhering  At Al Watania Poultry  2018</li>


                            </ul>
                        </div>
                    </div>
                    <div className="exp">
                        <div>
                            <div className="head">
                                <div className="head-info">
                                    <span className="jop-title">Trainer</span><br/>
                                    <span className="jop-location">at El-Mohandes Centre For Computer Science</span><br/>
                                    <span className="period">From 2008 to 2012</span>
                                </div>
                                <div className="logo">
                                    <img src="/logo.jpg" alt="pic"/>
                                    {/* <!-- <img src=".//logo.jpg" alt="myprofilepic"> --> */}
                                </div>
                            </div>
                            <ul className="responsipility">
                                <li>Teaching Individuals How to Use Computer Science as MS Access, MS Excel and vba in the Practical life and they are Able Prepare Them Application and How to planning their projects</li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* <!-- end experience --> */}




                <h1 className="sub-title">Certifications</h1>

                <div className="certifications">
                    <div className="cert"><div><i className="fas fa-square-full"></i>ICDL Certificate.</div></div>
                    <div className="cert"><div><i className="fas fa-square-full"></i>LSSGB</div></div>
                    <div className="cert"><div><i className="fas fa-square-full"></i>Communication Skills</div></div>
                    <div className="cert"><div><i className="fas fa-square-full"></i>Time Management</div></div>
                </div>

                <h1 className="sub-title">Hobbies</h1>

                <div className="hobbies">
                    <div className="hobbies-contaner">
                        <div className="hobbies-sub-container">
                            <div className="hobbies-logo"><span><i className="fas fa-code"></i></span></div>
                            <div className="hobbies-name">Programming</div>
                        </div>
                        <div className="hobbies-sub-container">
                            <div className="hobbies-logo"><span><i className="fas fa-book-open"></i></span></div>
                            <div className="hobbies-name">Reading</div>
                        </div>
                        <div className="hobbies-sub-container">
                            <div className="hobbies-logo"><span><i className="fas fa-biking"></i></span></div>
                            <div className="hobbies-name">Sports</div>
                        </div>
                        <div className="hobbies-sub-container">
                            <div className="hobbies-logo"><span><i className="fas fa-plane"></i></span></div>
                            <div className="hobbies-name">Travel</div>
                        </div>
                    </div>
                </div>


        </div>
        {/* <!-- end right section --> */}

    </div>

    <div className="overLay">
        <button id="close">X</button>
        <div className="view1">
            <video id="fullVideo" src="" autoPlay={true} width="1000px" height="800px" controls></video>
        </div>
    </div>
    </div>


    // </div>
  )
}

export default Main