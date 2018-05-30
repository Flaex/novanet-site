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
// Takes an array as argument to display conent
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
  this.tabColor = '<li class="btn %data%">';
  this.tabHref = '<a class="btn" href="%data%">';
  this.tabIcon = '<i class="%data%"></i></a></li>';
  this.tabInfo = '<div id="%data%" class="tabs-info"></div>';
  this.tabTitle = '<h3>%data%</h3>';
  this.tabParagraph = '<p>%data%</p>';
  this.itemIconContainer = '<div class="ico %data%">';
  this.itemIcon = '<i class="%data%"></i></div>';
  this.itemTitle = '<h4>%data%</h4>';
  this.itemText = '<p>%data%</p>';
  this.itemDates = '<p class="dates">%data%</p>';
  this.itemURL = '<a class="url" href="%data%">Ver</a>';
  this.imageContainer = '<div class="thumb orangebg-1 %data%">';
  this.imageHref = '<a class="btn" href="#myModal%data%">'
  this.imageMask = '<img class="%data%"';
  this.image = ' src="img/%data%"></a>';
  this.modalStart = '<div id="';
  this.modalId = 'myModal%data%';
  this.modalContent = '" class="modal"><div class="modal-content"><span class="close">&times;</span><img class="preview" src="img/%data%"></div>';
  this.imageList = '<div class="thumbs"></div>';
};
// Section render function
// Takes an array, section ID and tab buttons ID as arguments to display content
SectionTemplate.prototype.display = function(arr, divId, tabId) {
  this.sectionTitle= this.sectionTitle.replace('%data%', arr.sectionTitle);
  $(divId).append(this.sectionTitle);
  this.sectionNav= this.sectionNav.replace('%data%', tabId)
  $(divId).append(this.sectionNav);
  // Navigation tabs buttons
  for (i = 0; i < arr.sectionNavBtn.length; i++) {
    this.colorRender = this.tabColor.replace('%data%', arr.sectionNavBtn[i].color);
    this.hrefRender = this.tabHref.replace('%data%', arr.sectionNavBtn[i].href)
    this.iconRender = this.tabIcon.replace('%data%', arr.sectionNavBtn[i].icon);
    $('#' + tabId).append(this.colorRender + this.hrefRender + this.iconRender);
  }
  // Tab content render
  for (i = 0; i < arr.tabs.length; i++) {
    this.tabInfoRender = this.tabInfo.replace('%data%', arr.tabs[i].id);
    this.tabTitleRender = this.tabTitle.replace('%data%', arr.tabs[i].tabTitle);
    this.tabParagraphRender = this.tabParagraph.replace('%data%', arr.tabs[i].tabParagraph);
    $(divId).append(this.tabInfoRender);
    // Check if key is an array
    if (Array.isArray(arr.tabs[i].tabItems)) {
      $('#' + arr.tabs[i].id).append(this.tabTitleRender);
      // Iteration for getting tab items
      for (j = 0; j < arr.tabs[i].tabItems.length; j++) {
        this.itemIconContainerRender = this.itemIconContainer.replace('%data%', arr.sectionNavBtn[i].color);
        this.itemIconRender = this.itemIcon.replace('%data%', arr.tabs[i].tabItems[j].icon);
        this.itemTitleRender = this.itemTitle.replace('%data%', arr.tabs[i].tabItems[j].title);
        this.itemDatesRender = this.itemDates.replace('%data%', arr.tabs[i].tabItems[j].dates)
        this.itemTextRender = this.itemText.replace('%data%', arr.tabs[i].tabItems[j].text);
        this.itemURLRender = this.itemURL.replace('%data%', arr.tabs[i].tabItems[j].url);
        // Check if key is an array
        if (Array.isArray(arr.tabs[i].tabItems[j].images)) {
          $('#' + arr.tabs[i].id).append('<div class="tab-item">' + this.itemIconContainerRender + this.itemIconRender + this.itemTitleRender + this.itemDatesRender + this.itemTextRender + this.itemURLRender + '</div>');
          $('.tab-item').append(this.imageList);
          // Iteration for getting images items
          for (k = 0; k < arr.tabs[i].tabItems[j].images.length; k++) {
            const shapes = [
              ["circleBg", "circle"],
              ["squareBg", "square"],
              ["triangleBg", "triangle"]
            ]
            let randomFigures = shuffle(shapes);
            // Giving random values to images containers to display mask on proyects
            this.imageContainerRender = this.imageContainer.replace('%data%', randomFigures[0][0]);
            this.imageMaskRender = this.imageMask.replace('%data%', randomFigures[0][1]);
            this.imageHrefRender = this.imageHref.replace('%data%', arr.tabs[i].tabItems[j].images[k].modal)
            this.imageRender = this.image.replace('%data%', arr.tabs[i].tabItems[j].images[k].src);
            this.modalIdRender = this.modalId.replace('%data%', arr.tabs[i].tabItems[j].images[k].modal);
            // $('.thumbs').on('click', 'a.btn' , function(e) {               
            //    for (i = 0; i < arr.tabs.length; i++) {
            //      for (j = 0; j < arr.tabs[i].tabItems.length; j++) {
            //        for (k = 0; k < arr.tabs[i].tabItems[j].images.length; k++) {
            //          this.modalId = 'myModal%data%';
            //          this.modalIdRender = this.modalId.replace('%data%', arr.tabs[i].tabItems[j].images[k].modal);
            //          $('#' + this.modalIdRender).css('display', 'block');
            //        }
            //      }
            //    }
            // });
            this.modalContentRender = this.modalContent.replace('%data%', arr.tabs[i].tabItems[j].images[k].href);
            this.imageItems = this.imageContainerRender + this.imageHrefRender + this.imageMaskRender + this.imageRender;
            $('.thumbs:last').append(this.imageItems);
            $('body').append( this.modalStart + this.modalIdRender + this.modalContentRender);
            // $('.modal').click(function() {
            //   alert( "Handler for .click() called." );
            // });
          }
        } else {
          $('#' + arr.tabs[i].id).append('<div class="tab-item">' + this.itemIconContainerRender + this.itemIconRender + this.itemTitleRender + this.itemDatesRender + this.itemTextRender + this.itemURLRender + '</div>');
        }
      }
    } else {
      $('#' + arr.tabs[i].id).append(this.tabTitleRender + this.tabParagraphRender);
    }
  }
  // Catching and removing empty and undefined elements
  $('a[href*="undefined"]').remove();
  $("p:contains('undefined')").remove();
  $("i.undefined:empty").remove();

  // $("div.ico:empty").remove();
  // $('ul li:empty').remove();
  // $("ul#test li:contains('undefined')").remove();

  // Assigning jQuery UI function for
  $(divId).tabs();
};

// Navigation tab buttons focus event to assign active state
// It recieves background tab colors as identifiers to assign state
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
// Sections creation and renderization
const SectionNos = new SectionTemplate();
SectionNos.display(nosotros, '#nos', 'nosotros');
SectionNos.tabs('.greenbg-1', '.greenbg-2', '.greenbg-3');

const SectionHac = new SectionTemplate();
SectionHac.display(hacemos, '#hac', 'hacemos');
SectionHac.tabs('.bluebg-1', '.bluebg-2', '.bluebg-3');

const SectionPro = new SectionTemplate();
SectionPro.display(portafolio, '#por', 'portafolio');
SectionPro.tabs('.orangebg-1', '.orangebg-2', '.orangebg-3');
