'use strict';

console.log('app.js is running!');

var app = {
  title: 'Resume',
  job: '',
  description: '',
  picture: ''
};

var webdev = function webdev() {
  app.job = 'Freelance Web Developer';
  app.description = React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'December 2017 - Present'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Design and code websites for clients.'
      ),
      React.createElement(
        'li',
        null,
        'Have been making websites since 2004, recently',
        React.createElement('br', null),
        ' got caught up with HTML5 and CSS3 standards and started taking new clients.'
      )
    )
  );
  app.picture = React.createElement('img', { src: '/assets/images/headshot.jpg', id: 'headshot' });
  renderResumeApp();
};
var ku = function ku() {
  app.job = 'The University of Kansas';
  app.description = React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      React.createElement(
        'em',
        null,
        'Grader'
      ),
      ' | January 2018 - May 2018'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Graded papers for IT310.'
      ),
      React.createElement(
        'li',
        null,
        'Assisted the Professor with any other tasks he needed.'
      )
    )
  );
  app.picture = React.createElement('img', { src: '/assets/images/ku.jpg', id: 'kupicture' });
  renderResumeApp();
};
var thd = function thd() {
  app.job = 'The Home Depot';
  app.description = React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Overland Park, KS ',
      React.createElement(
        'em',
        null,
        'Store 2209'
      ),
      React.createElement('br', null),
      React.createElement(
        'em',
        null,
        'Electrical/Hardware Sales Associate'
      ),
      ' | November 2015 - December 2017'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Maintained store readiness which included keeping product available for customers.'
      ),
      React.createElement(
        'li',
        null,
        'Operated various equipment to facilitate product flow.'
      ),
      React.createElement(
        'li',
        null,
        'Took part in the InFocus program. Home Depot\'s safety council.'
      ),
      React.createElement(
        'li',
        null,
        'Helped train other associates through demonstrations and development of training aids.'
      )
    )
  );
  app.picture = React.createElement('img', { src: '/assets/images/thd.jpg', id: 'thdpicture' });
  renderResumeApp();
};
var symplr = function symplr() {
  app.job = 'symplr - Healthcare Compliance + Credentialing';
  app.description = React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Overland Park, KS',
      React.createElement('br', null),
      React.createElement(
        'em',
        null,
        'Help Desk Analyst Intern'
      ),
      ' | June 2017 - August 2017'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Imaged laptops and workstations.'
      ),
      React.createElement(
        'li',
        null,
        'Provisioned phones, laptops and workstations for new and transferring employees.'
      ),
      React.createElement(
        'li',
        null,
        'Added users into Active Directory Users and Computers.'
      ),
      React.createElement(
        'li',
        null,
        'Set up a WDS server for quick imaging of multiple workstations and laptops.'
      ),
      React.createElement(
        'li',
        null,
        'Backed up and restored SQL databases for users.'
      ),
      React.createElement(
        'li',
        null,
        'Created PowerShell scripts for automation of IT Help Desk tasks.'
      )
    )
  );
  app.picture = React.createElement('img', { src: '/assets/images/sym.jpg', id: 'sympicture' });
  renderResumeApp();
};
var dod = function dod() {
  app.job = 'Department of Defense';
  app.description = React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'New Century, KS',
      React.createElement('br', null),
      React.createElement(
        'em',
        null,
        'Aircraft Mechanic/Flight Engineer'
      ),
      ' | December 2012 - June 2015'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Inspected, troubleshot, and maintained CH-47D Helicopters.'
      ),
      React.createElement(
        'li',
        null,
        'Assisted pilots in air movement operations.'
      ),
      React.createElement(
        'li',
        null,
        'Worked closely with others to decide how to accomplish and complete tasks.'
      ),
      React.createElement(
        'li',
        null,
        'Used a variety of tools and meters to troubleshoot and correct faults with the aircraft.'
      ),
      React.createElement(
        'li',
        null,
        'Troubleshot, repaired, and replaced various electrical and hydraulic components.'
      )
    )
  );
  app.picture = React.createElement('img', { src: '/assets/images/dod.jpg', id: 'dodpicture' });
  renderResumeApp();
};
var usa = function usa() {
  app.job = 'United States Army Reserve';
  app.description = React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'New Century, KS',
      React.createElement('br', null),
      React.createElement(
        'em',
        null,
        'CH-47D/F Helicopter Repairer/Flight Engineer'
      ),
      ' | January 2009 - June 2015'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Inspected, troubleshot, and maintained CH-47D Helicopters.'
      ),
      React.createElement(
        'li',
        null,
        'Assisted pilots in air movement operations.'
      ),
      React.createElement(
        'li',
        null,
        'Worked closely with others to decide how to accomplish and complete tasks.'
      ),
      React.createElement(
        'li',
        null,
        'Used a variety of tools and meters to troubleshoot and correct faults with the aircraft.'
      ),
      React.createElement(
        'li',
        null,
        'Troubleshot, repaired, and replaced various electrical and hydraulic components.'
      )
    )
  );
  app.picture = React.createElement('img', { src: '/assets/images/usa.jpg', id: 'usapicture' });
  renderResumeApp();
};
var clear = function clear() {
  app.job = '';
  app.description = '';
  app.picture = '';
  renderResumeApp();
};

var appRoot = document.getElementById('app');

var renderResumeApp = function renderResumeApp() {
  var template = React.createElement(
    'div',
    { className: 'resume' },
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'div',
      { id: 'buttons' },
      React.createElement(
        'button',
        { className: 'button', onClick: webdev },
        'Freelance Web Developer'
      ),
      React.createElement(
        'button',
        { className: 'button', onClick: ku },
        'The University of Kansas'
      ),
      React.createElement(
        'button',
        { className: 'button', onClick: thd },
        'The Home Depot'
      ),
      React.createElement(
        'button',
        { className: 'button', onClick: symplr },
        'symplr - Healthcare Compliance + Credentialing'
      ),
      React.createElement(
        'button',
        { className: 'button', onClick: dod },
        'Department of Defense'
      ),
      React.createElement(
        'button',
        { className: 'button', onClick: usa },
        'United States Army Reserve'
      ),
      React.createElement(
        'button',
        { className: 'button', onClick: clear },
        'Clear'
      )
    ),
    React.createElement(
      'div',
      { id: 'jobListing' },
      React.createElement(
        'h2',
        null,
        app.job
      ),
      app.description
    ),
    app.picture
  );
  ReactDOM.render(template, appRoot);
};

renderResumeApp();
