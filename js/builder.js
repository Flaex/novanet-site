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
  this.smList = '<ul class="sm-list"></ul>';
  this.url = '<li><a href="%data%" target="_blank">';
  this.icon = '<i class="%data%"></i><li></a>';

}
// Header Superclass render function
HeaderTemplate.prototype.display = function(arr) {
  this.src = this.src.replace('%data%', arr.logo.src);
  this.alt = this.alt.replace('%data%', arr.logo.alt);
  $('.logo').append(this.src + this.alt);
  $('.sm').append(this.smList);
  //Iteration over social media array
  for (i = 0; i < arr.sm.length; i++) {
    this.urlRender = this.url.replace('%data%', arr.sm[i].url);
    this.iconRender = this.icon.replace('%data%', arr.sm[i].icon);
    $('.sm-list').append(this.urlRender + this.iconRender);
  }
  //Removes all empty <li>
  $('ul li:empty').remove();
};
// Header creation and renderization
const headerPrint = new HeaderTemplate();
headerPrint.display(header);

// Stories Superclass
function StoriesTemplate() {
  this.title = '<h1>%data%</h1>';
  this.paragraph= '<p>%data%</p>'
};
// Stories Superclass render function
StoriesTemplate.prototype.display = function(arr) {
  this.title = this.title.replace('%data%', arr.title);
  this.paragraph = this.paragraph.replace('%data%', arr.paragraph);
  $('.stories').append(this.title + this.paragraph);
};
// Stories creation and renderization
const storiesPrint = new StoriesTemplate();
storiesPrint.display(stories);

// Section Superclass
function SectionTemplate() {
  this.sectionTitle = '<h2>%data%</h2>';
  this.sectionNav = '<ul id="%data%" class="tabs"></ul>';
  this.tabInfo = '<div id="%data%" class="tabs-info"></div>';
  this.tabTitle = '<h3>%data%</h3>';
  this.tabParagraph = '<p>%data%</p>';
  this.itemIconContainer = '<div class="ico %data%">';
  this.itemIcon = '<i class="%data%"></i></div>';
  this.itemTitle = '<h4>%data%</h4>';
  this.itemText = '<p>%data%</p>';
  this.itemDates = '<p class="dates">%data%</p>';
  this.itemURL = '<a class="url" href="%data%">Ver</a>';

  this.imageContainer = '<div class="projectThumb col-25 %data%">';
  this.imageMask = '<a><img class="%data%"';
  this.image = ' src="img/%data%">';
  this.modal = '<div class="modalDialog"><div><a href="#close" title="Close" class="close"><strong>x</strong></a><img class="preview" src="img/%data%"></div></div>';
  this.imageList = '<ul class="thumbs"></ul>';


  this.color = '<li class="btn %data%">';
  this.href = '<a class="btn-disp" href="%data%">'
  this.icon = '<i class="%data%"></i></a></li>';


};
// Section render function
SectionTemplate.prototype.display = function(arr, divId, listId) {
  this.sectionTitle= this.sectionTitle.replace('%data%', arr.sectionTitle);
  $(divId).append(this.sectionTitle);
  this.sectionNav= this.sectionNav.replace('%data%', listId)
  $(divId).append(this.sectionNav);
  // Section navigation render
  for (i = 0; i < arr.sectionNavBtn.length; i++) {
    this.colorRender = this.color.replace('%data%', arr.sectionNavBtn[i].color);
    this.hrefRender = this.href.replace('%data%', arr.sectionNavBtn[i].href)
    this.iconRender = this.icon.replace('%data%', arr.sectionNavBtn[i].icon);
    $('#' + listId).append(this.colorRender + this.hrefRender + this.iconRender);
  }
  // Tab content render
  for (i = 0; i < arr.tabs.length; i++) {
    this.tabInfoRender = this.tabInfo.replace('%data%', arr.tabs[i].id);
    this.tabTitleRender = this.tabTitle.replace('%data%', arr.tabs[i].tabTitle);
    this.tabParagraphRender = this.tabParagraph.replace('%data%', arr.tabs[i].tabParagraph);
    $(divId).append(this.tabInfoRender);
    if (Array.isArray(arr.tabs[i].tabItems)) {
      $('#' + arr.tabs[i].id).append(this.tabTitleRender);
      for (j = 0; j < arr.tabs[i].tabItems.length; j++) {

        this.itemIconContainerRender = this.itemIconContainer.replace('%data%', arr.sectionNavBtn[i].color);
        this.itemIconRender = this.itemIcon.replace('%data%', arr.tabs[i].tabItems[j].icon);
        this.itemTitleRender = this.itemTitle.replace('%data%', arr.tabs[i].tabItems[j].title);
        this.itemDatesRender = this.itemDates.replace('%data%', arr.tabs[i].tabItems[j].dates)
        this.itemTextRender = this.itemText.replace('%data%', arr.tabs[i].tabItems[j].text);
        this.itemURLRender = this.itemURL.replace('%data%', arr.tabs[i].tabItems[j].url);

        $('#' + arr.tabs[i].id).append('<div class="tab-item">' + this.itemIconContainerRender + this.itemIconRender + this.itemTitleRender + this.itemDatesRender + this.itemTextRender + this.itemURLRender + '</div>');

        if (Array.isArray(arr.tabs[i].tabItems[j].images)) {

          for (k = 0; k < arr.tabs[i].tabItems[j].images.length; k++) {
            console.log(arr.tabs[i].tabItems[j].images[k]);

            const shapes = [
              ["circleBg", "circle"],
              ["squareBg", "square"],
              ["triangleBg", "triangle"]
            ];
            let randomFigures = shuffle(shapes);
            this.imageContainer = this.imageContainer.replace('%data%', randomFigures[0][0]);
            this.imageMask = this.imageMask.replace('%data%', randomFigures[0][1]);
            this.imageRender = this.image.replace('%data%', arr.tabs[i].tabItems[j].images[k].src);
            this.modalRender = this.modal.replace('%data%', arr.tabs[i].tabItems[j].images[k].href);
            // $('#' + arr.tabs[i].id).append('<div class="tab-item">' + this.itemIconContainerRender + this.itemIconRender + this.itemTitleRender + this.itemDatesRender + this.itemTextRender + this.itemURLRender + '</div>');

            $('#' + arr.tabs[i].id).append(this.imageContainer + this.imageMask + this.imageRender + this.modalRender);
          }
        }
      }
    } else {
      $('#' + arr.tabs[i].id).append(this.tabTitleRender + this.tabParagraphRender);
    }
  }
  $('a[href*="undefined"]').remove();
  $("p:contains('undefined')").remove();
  $("i.undefined:empty").remove();
  // $("div.ico:empty").remove();
  // $('ul li:empty').remove();
  // $("ul#test li:contains('undefined')").remove();
  $(divId).tabs();
};

// Section tabs focus event
SectionTemplate.prototype.tabs = function(tab1, tab2, tab3) {
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

const SectionPro = new SectionTemplate();
SectionPro.display(proyectos, '#pro', 'proyectos');
SectionPro.tabs('.orangebg-1', '.orangebg-2', '.orangebg-3');


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
// Projects creation and renderization
// const projectPrint = new ProjectsTemplate();
// projectPrint.display(projects);
