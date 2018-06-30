console.log('app.js is running!');

const app = {
  title: 'Resume',
  job: '',
  description: '',
  picture: ''
};

const kcit = () => {
  app.job = 'Cerner';
  app.description =
    <div>
      <p>Kansas City, MO <em>Innovations Campus</em><br />
      <em>KCIT Software Engineer Apprentice</em> | July 2018 - Present</p>
      <ul>
        <li>Worked with React.js, Java 7 & 8, Webpack, and RabbitMQ</li>
      </ul>
    </div>
    ;
  app.picture = <img src="assets/images/cernerimg.png" id="cernerimg" />;
  renderResumeApp();
}
const webdev = () => {
  app.job = 'Freelance Web Developer';
  app.description =
    <div>
    <p>December 2017 - July 2018</p>
    <ul>
      <li>Design and code websites for clients.</li>
      <li>Have been making websites since 2004, recently<br /> got caught up with HTML5
        and CSS3 standards and started taking new clients.</li>
    </ul>
    </div>
  ;
  app.picture = <img src="/assets/images/headshot.jpg" id="headshot" />;
  renderResumeApp();
}
const ku = () => {
  app.job = 'The University of Kansas';
  app.description =
    <div>
      <p>Overland Park, KS <em>Edwards Campus</em><br />
      <em>Grader</em> | January 2018 - May 2018</p>
      <ul>
        <li>Graded papers for IT310.</li>
        <li>Assisted the Professor with any other tasks he needed.</li>
      </ul>
    </div>
  ;
    app.picture = <img src="/assets/images/ku.png" id="kupicture" />;
  renderResumeApp();
}
const thd = () => {
  app.job = 'The Home Depot';
  app.description =
    <div>
      <p>Overland Park, KS <em>Store 2209</em><br />
      <em>Electrical/Hardware Sales Associate</em> | November 2015 - December 2017</p>
      <ul>
        <li>Maintained store readiness which included keeping product available for customers.</li>
        <li>Operated various equipment to facilitate product flow.</li>
        <li>Took part in the InFocus program. Home Depot&#39;s safety council.</li>
        <li>Helped train other associates through demonstrations and development of training aids.</li>
      </ul>
    </div>
  ;
  app.picture = <img src="/assets/images/thd.png" id="thdpicture" />;
  renderResumeApp();
}
const symplr = () => {
  app.job = 'symplr - Healthcare Compliance + Credentialing';
  app.description =
    <div>
      <p>Overland Park, KS<br />
      <em>Help Desk Analyst Intern</em> | June 2017 - August 2017</p>
      <ul>
        <li>Imaged laptops and workstations.</li>
        <li>Provisioned phones, laptops and workstations for new and transferring employees.</li>
        <li>Added users into Active Directory Users and Computers.</li>
        <li>Set up a WDS server for quick imaging of multiple workstations and laptops.</li>
        <li>Backed up and restored SQL databases for users.</li>
        <li>Created PowerShell scripts for automation of IT Help Desk tasks.</li>
      </ul>
    </div>
  ;
  app.picture = <img src="/assets/images/sym.png" id="sympicture" />;
  renderResumeApp();
}
const dod = () => {
  app.job = 'Department of Defense';
  app.description =
    <div>
      <p>New Century, KS<br />
      <em>Aircraft Mechanic/Flight Engineer</em> | December 2012 - June 2015</p>
      <ul>
        <li>Inspected, troubleshot, and maintained CH-47D Helicopters.</li>
        <li>Assisted pilots in air movement operations.</li>
        <li>Worked closely with others to decide how to accomplish and complete tasks.</li>
        <li>Used a variety of tools and meters to troubleshoot and correct faults with the aircraft.</li>
        <li>Troubleshot, repaired, and replaced various electrical and hydraulic components.</li>
      </ul>
    </div>
  ;
  app.picture = <img src="/assets/images/dod.jpg" id="dodpicture" />;
  renderResumeApp();
}
const usa = () => {
  app.job = 'United States Army Reserve';
  app.description =
    <div>
      <p>New Century, KS<br />
      <em>CH-47D/F Helicopter Repairer/Flight Engineer</em> | January 2009 - June 2015</p>
      <ul>
        <li>Inspected, troubleshot, and maintained CH-47D Helicopters.</li>
        <li>Assisted pilots in air movement operations.</li>
        <li>Worked closely with others to decide how to accomplish and complete tasks.</li>
        <li>Used a variety of tools and meters to troubleshoot and correct faults with the aircraft.</li>
        <li>Troubleshot, repaired, and replaced various electrical and hydraulic components.</li>
      </ul>
    </div>
  ;
  app.picture = <img src="/assets/images/usa.jpg" id="usapicture" />;
  renderResumeApp();
}
const clear = () => {
  app.job = '';
  app.description = '';
  app.picture = '';
  renderResumeApp();
}

const appRoot = document.getElementById('app');

const renderResumeApp = () => {
  const template =
    <div className="resume">
      <h1>{app.title}</h1>
      <div id="buttons">
        <button className="button" onClick={kcit}>Cerner Corp.</button>
        <button className="button" onClick={webdev}>Freelance Web Developer</button>
        <button className="button" onClick={ku}>The University of Kansas</button>
        <button className="button" onClick={thd}>The Home Depot</button>
        <button className="button" onClick={symplr}>symplr - Healthcare Compliance + Credentialing</button>
        <button className="button" onClick={dod}>Department of Defense</button>
        <button className="button" onClick={usa}>United States Army Reserve</button>
        <button className="button" onClick={clear}>Clear</button>
      </div>
      <div id="jobListing">
          <h2>{app.job}</h2>
          {app.description}
      </div>
      {app.picture}
    </div>
  ;
  ReactDOM.render(template, appRoot);
}

renderResumeApp();
