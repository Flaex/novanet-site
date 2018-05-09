const bio = {
  "name" : "Freddy Polanía",
  "role" : "Visual designer and front-end web developer",
  "message": "Design and technology altogether",
  "skills": ["Visual designer", "UX design", "Web design", "Logo and branding", "Typography"],
  "biopic" : "me.jpg"
};

function BioTemplate() {
  this.name = '<h1 class="blueThree">%data%</h1>';
  this.role = '<h2 class="blueTwo">%data%</h2>';
  this.message = '<h3 class="welcomemessage">%data%</h3>';
  this.biopic = '<div class="bioPic col-20"><img src="img/%data%"></div>';
  this.skills = [];
};

BioTemplate.prototype.display = function(arr) {
  this.name = this.name.replace('%data%', arr.name);
  this.role =  this.role.replace('%data%', arr.role);
  this.message = this.message.replace('%data%', arr.message);
  this.biopic = this.biopic.replace('%data%', arr.biopic);
  for (i=0; i < arr.skills.length; i++) {
    this.skills[i] = '<li>' + arr.skills[i] + '</li>';
  }
  this.skillsWrappper = '<ul>' + this.skills.join("")  + '</ul>';
  $('.bio-info').append(this.name, this.role, this.message, this.biopic, this.skillsWrappper);
  console.log(arr.skills.length);
};

const bioPrint = new BioTemplate();
bioPrint.display(bio);
