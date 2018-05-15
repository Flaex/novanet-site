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
  this.role = this.role.replace('%data%', arr.role);
  this.message = this.message.replace('%data%', arr.message);
  this.biopic = this.biopic.replace('%data%', arr.biopic);
  for (i = 0; i < arr.skills.length; i++) {
    this.skills[i] = '<li>' + arr.skills[i] + '</li>';
  }
  this.skillsWrappper = '<ul>' + this.skills.join("") + '</ul>';
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
  this.imageContainer = '<li class="projectThumb col-25 %data%">';
  // this.imageHref = '';
  this.imageMask = '<a><img class="%data%"';
  this.image = ' src="img/%data%">';
  this.modal = '<div class="modalDialog"><div><a href="#close" title="Close" class="close"><strong>x</strong></a><img class="preview" src="img/%data%"></div></li>';
  this.works = [];
};

ProjectsTemplate.prototype.display = function(arr) {
  for (i = 0; i < arr.works.length; i++) {
    $('#projects').append(this.entry);
    this.works.title = this.title.replace('%data%', arr.works[i].title);
    this.works.description = this.title.replace('%data%', arr.works[i].description);
    this.works.dates = this.dates.replace('%data%', arr.works[i].dates);
    $('.project-entry:last').append(this.works.title + this.works.description + this.works.dates);
    $('.project-entry:last').append(this.list);
    for (j = 0; j < arr.works[i].images.length; j++) {
      const shapes = [
        ["circleBg", "circle"],
        ["squareBg", "square"],
        ["triangleBg", "triangle"]
      ];
      let randomFigures = shuffle(shapes);
      this.imageContainer = this.imageContainer.replace('%data%', randomFigures[0][0]);
      this.imageMask = this.imageMask.replace('%data%', randomFigures[0][1]);
      this.imageRender = this.image.replace('%data%', arr.works[i].images[j].src);
      this.modalRender = this.modal.replace('%data%', arr.works[i].images[j].href);
      $('.thumbs:last').append(this.imageContainer + this.imageMask + this.imageRender + this.modalRender);
    }
    // Serial id's to a tag
    $.each($('.projectThumb a'), function(index, value) {
      let num = index + 1;
      $(value).attr("href", "#openModal" + num);
    });
    //Serial id's to modal
    $.each($('.modalDialog'), function(index, value) {
      let num = index + 1;
      $(value).attr("id", "openModal" + num);
    });
  }
};
const projectPrint = new ProjectsTemplate();
projectPrint.display(projects);
