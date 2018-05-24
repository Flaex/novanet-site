// Multipurpose suffle array function
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

// Header Superclass
function HeaderTemplate() {
  this.src = '<img src="img/%data%" ';
  this.alt = ' alt="%data%">';
  this.content = '%data%';
  this.list = '<ul class="col-15 sm-head flex flexbox"></ul>';
  this.url = '<li class="flex"><a href="%data%" target="_blank">';
  this.icon = '<i class="%data%"></i><li></a>';
  this.sm = [];
}
// Header Superclass render function
HeaderTemplate.prototype.display = function(arr) {
  this.src = this.src.replace('%data%', arr.logo.content);
  this.alt = this.alt.replace('%data%', arr.logo.id);
  $('.logo').append(this.src + this.alt);
  $('.sm').append(this.list);
  for (i = 0; i < arr.sm.length; i++) {
    this.urlRender = this.url.replace('%data%', arr.sm[i].url);
    this.iconRender = this.icon.replace('%data%', arr.sm[i].content);
    $('.sm-head').append(this.urlRender + this.iconRender);
  }
  //Removes all empty <li>
  $('ul li:empty').remove();
};
// Header creation and renderization
const headerPrint = new HeaderTemplate();
headerPrint.display(header);

// Stories Superclass
function StoriesTemplate() {
  this.id = '<h1>%data%</h1>';
  this.content = '<p>%data%</p>'
};
// Stories Superclass render function
StoriesTemplate.prototype.display = function(arr) {
  this.id = this.id.replace('%data%', arr.id);
  this.content = this.content.replace('%data%', arr.content);
  $('.stories').append(this.id + this.content);
};
// Stories creation and renderization
const StoriesPrint = new StoriesTemplate();
StoriesPrint.display(stories);

// Section Superclass
function SectionTemplate() {
  this.tabContent = '<div id="%data%" class="tabs-info flexbox">';
  this.id = '<h2>%data%</h2>';
  this.title = '<h3>%data%</h3>';
  this.content = '<p>%data%</p></div>';
  this.contentIcon = '<div class="ico bluebg-1"><i class="%data%"></i></div>';
  this.contentTitle = '<h4>%data%</h4>';
  this.contentText = '<p>%data%</p>';
  this.list = '<ul id="%data%" class="tabs flexbox"></ul>'
  this.color = '<li class="btn %data%">';
  this.href = '<a class="btn-disp" href="%data%">'
  this.icon = '<i class="%data%"></i></a></li>';
};
// Section render function
SectionTemplate.prototype.display = function(arr, divId, listId) {
  this.id = this.id.replace('%data%', arr.id);
  $(divId).append(this.id);
  this.list = this.list.replace('%data%', listId)
  $(divId).append(this.list);
  // Tab render
  for (i = 0; i < arr.buttons.length; i++) {
    this.colorRender = this.color.replace('%data%', arr.buttons[i].color);
    this.hrefRender  = this.href.replace('%data%', arr.buttons[i].href)
    this.iconRender = this.icon.replace('%data%', arr.buttons[i].icon);
    $('#' + listId).append(this.colorRender + this.hrefRender + this.iconRender);
  }
  // Tab content
    for (i = 0; i < arr.tabs.length; i++) {
      this.tabContentRender = this.tabContent.replace('%data%', arr.tabs[i].id);
      this.titleRender = this.title.replace('%data%', arr.tabs[i].title);
      if (Array.isArray(arr.tabs[i].content)) {
        for (j = 0; j < arr.tabs[i].content.length; j++) {
          this.contentIconRender = this.contentIcon.replace('%data%', arr.tabs[i].content[j].icon);
          this.contentTitleRender = this.contentTitle.replace('%data%', arr.tabs[i].content[j].title);
          this.contentTextRender = this.contentText.replace('%data%', arr.tabs[i].content[j].text);
        }
        $(divId).append(this.tabContentRender + this.titleRender + this.contentIconRender + this.contentTitleRender + this.contentTextRender );
      } else {
        this.contentRender = this.content.replace('%data%', arr.tabs[i].content);
        $(divId).append(this.tabContentRender + this.titleRender + this.contentRender);
      }
    }
    $(divId).tabs();
};

// Section tabs focus event
SectionTemplate.prototype.tabs = function (tab1, tab2, tab3) {
  $(tab1).addClass('selected');
  $('li.btn').click(function() {
    if ($(tab1).hasClass('ui-state-active')) {
      $(this).addClass('selected');
      $(tab2).removeClass('selected');
      $(tab3).removeClass('selected');
    } else if ($(tab2).hasClass('ui-state-active')) {
      $(this).addClass('selected');
      $(tab1).removeClass('selected');
      $(tab3).removeClass('selected');
    } else if ($(tab3).hasClass('ui-state-active')) {
      $(this).addClass('selected');
      $(tab2).removeClass('selected');
      $(tab1).removeClass('selected');
    }
  });
}
// Stories creation and renderization
const SectionNos = new SectionTemplate();
SectionNos.display(nosotros, '#nos', 'nosotros');
SectionNos.tabs('.greenbg-1', '.greenbg-2', '.greenbg-3');

const SectionHac = new SectionTemplate();
SectionHac.display(hacemos, '#hac', 'hacemos');
SectionHac.tabs('.bluebg-1', '.bluebg-2', '.bluebg-3');

// Projects  Superclass
function ProjectsTemplate() {
  this.entry = '<div class="project-entry flex-box"></div>';
  this.title = '<h3>%data%</h3>';
  this.description = '<p>%data%<p>';
  this.dates = '<div class="date">%data%</div>';
  this.list = '<ul class="thumbs"></ul>';
  this.imageContainer = '<li class="projectThumb col-25 %data%">';
  this.imageMask = '<a><img class="%data%"';
  this.image = ' src="img/%data%">';
  this.modal = '<div class="modalDialog"><div><a href="#close" title="Close" class="close"><strong>x</strong></a><img class="preview" src="img/%data%"></div></li>';
  this.works = [];
};

// Projects render function
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
// // Projects creation and renderization
// const projectPrint = new ProjectsTemplate();
// projectPrint.display(projects);
