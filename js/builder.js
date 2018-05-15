function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

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
  $('.bio-info').append(this.name + this.role + this.message + this.biopic + this.skillsWrappper);
};

const bioPrint = new BioTemplate();
bioPrint.display(bio);

function ProjectsTemplate() {
  this.entry = '<div class="project-entry flex-box"></div>';
  this.title = '<h3>%data%</h3>';
  this.description = '<p>%data%<p>';
  this.dates = '<div class="date">%data%</div>';
  this.list = '<ul class="thumbs"></ul>';
  this.image = '<li><img src="img/%data%"></li>';
  this.works = [];
};

ProjectsTemplate.prototype.display = function(arr) {
  for (i=0; i < arr.works.length;i++) {
    $('#projects').append(this.entry);
    this.works.title = this.title.replace('%data%', arr.works[i].title);
    this.works.description = this.title.replace('%data%', arr.works[i].description);
    this.works.dates = this.dates.replace('%data%', arr.works[i].dates);
    $('.project-entry:last').append(this.works.title + this.works.description + this.works.dates);
    $('.project-entry:last').append(this.list);
    for (j=0; j < arr.works[i].images.length;j++) {
      this.imageRender = this.image.replace('%data%', arr.works[i].images[j].src);
      console.log(arr.works[i].images[j]);
      $('.thumbs:last').append(this.imageRender);
    }
  }
};
const projectPrint = new ProjectsTemplate();
projectPrint.display(projects);
