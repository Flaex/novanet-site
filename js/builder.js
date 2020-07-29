function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
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
  this.smItem = '<li class="%data%">';
  this.url = '<a href="%data%" target="_blank">';
  this.icon = '<i class="%data% tooltip">';
  this.tooltip = '<span class="tooltiptext">%data%</span></i><li></a>';
  this.legal = "<p>%data%</p>";
}

// Header Superclass render function
HeaderTemplate.prototype.sectionHeader = function (arr) {
  this.src = this.src.replace("%data%", arr.logo.src);
  this.alt = this.alt.replace("%data%", arr.logo.alt);
  this.legal = this.legal.replace("%data%", arr.legal);
  $(".logo").append(this.src + this.alt);
  $(".sm").append(this.smList);
  $(".legal").append(this.legal);
  //Iteration over social media array
  for (let i = 0; i < arr.sm.length; i++) {
    this.smItemRender = this.smItem.replace("%data%", arr.sm[i].id);
    this.urlRender = this.url.replace("%data%", arr.sm[i].url);
    this.iconRender = this.icon.replace("%data%", arr.sm[i].icon);
    this.tooltiprender = this.tooltip.replace("%data%", arr.sm[i].id);
    $(".sm-list").append(
      this.smItemRender + this.urlRender + this.iconRender + this.tooltiprender
    );
  }
  //Removes all empty <li>
  $("ul li:empty").remove();
};
// Header creation and renderization
const headerPrint = new HeaderTemplate();
headerPrint.sectionHeader(header);

// Stories Superclass
function StoriesTemplate() {
  this.title = "<h1>%data%</h1>";
  this.paragraph = "<p>%data%</p>";
}
// Stories Superclass render function
// Takes an array as argument to display conent
StoriesTemplate.prototype.display = function (arr) {
  this.title = this.title.replace("%data%", arr.title);
  this.paragraph = this.paragraph.replace("%data%", arr.paragraph);
  $(".stories").append(this.title + this.paragraph);
};

// Section Superclass
function SectionTemplate() {
  this.sectionTitle = "<h2>%data%</h2>";
  this.sectionNav = '<ul id="%data%" class="tabs"></ul>';
  this.sectionLink =
    '<h3><a class="section-link" href="%data%">';
  this.sectionLinkText = '%data% <i ';
  this.sectionLinkClass = 'class="%data%';
  this.sectionLinkIcon = ' %data%"></i></a></h3>';  
  this.tabColor = '<li class="btn %data%">';
  this.tabHref = '<a class="btn" href="%data%">';
  this.tabIcon = '<i class="%data%"></i></a></li>';
  this.tabIconNav = '<i class="%data% tooltip">';
  this.tabIconNavTooltip =
    '<span class="tooltiptext">%data%</span></i><li></a>';
  this.tabInfo = '<div id="%data%" class="tabs-info"></div>';
  this.tabTitle = "<h3>%data%</h3>";
  this.tabParagraph = "<p>%data%</p>";
  this.tabBlog = '<p>hola</p>';
  this.tabMap = '<div id="map"></div>';
  this.tabInCon =
    '<div id="instagram-feed"><h4>Síguenos en nuestras redes</h4><div class="sm"><ul class="sm-list"><li class="instagram"><a href="https://www.instagram.com/novanetstudio/" target="_blank"><i class="fab fa-instagram tooltip"><span class="tooltiptext">instagram</span></i></a></li><li class="facebook"><a href="https://www.facebook.com/NovanetStudio/" target="_blank"><i class="fab fa-facebook-f tooltip"><span class="tooltiptext">facebook</span></i></a></li><li class="twitter"><a href="https://twitter.com/novanetstudio" target="_blank"><i class="fab fa-twitter tooltip"><span class="tooltiptext">twitter</span></i></a></li><li class="linkedin"><a href="https://www.linkedin.com/company/2563789" target="_blank"><i class="fab fa-linkedin-in tooltip"><span class="tooltiptext">linkedin</span></i></a></li></ul></div></div>';
  this.tabFormCon =
    '<form id="contact-form" name="myemailform"><h4>Envíanos un mensaje</h4><input type="hidden" /><input type="text" name="user_name" placeholder="Nombre y apellido" /><input type="text" name="user_email" placeholder="Email"><textarea name="message" placeholder="Mensaje" ></textarea><div class="g-recaptcha" data-sitekey="6Lfe5KIZAAAAAC_5BTdo8AsSWU1SHUF-In4ZrCjD"></div><input class="aquabg-1" type="submit" value="Enviar" /></form>';
  this.tabFormWhs =
    '<form method="post" action="https://secure.yourwebhosting.com/secureLogin" enctype="application/x-www-form-urlencoded"><input type="hidden" name="__token_timestamp__" value="1431957845"><input type="hidden" name="__token_val__" value="fdc8d9dac6115067faf5792194ee9aeb"><input type="hidden" name="destination" value="http://www.yourwebhosting.com/controlpanel/index.bml" /><input type="text" name="credential_0" value="" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input formfield" placeholder="Usuario" id="name" /><input type="password" name="credential_1" value="" class="validate[required,custom[email]] feedback-input formfield" id="email" placeholder="Contraseña" /><input type="submit" name="submit" value="Iniciar sesión" class="bluebg-1" /></form>';
  this.itemIconContainer = '<div class="ico %data%">';
  this.itemIcon = '<i class="%data%"></i></div>';
  this.itemTitle = "<h4>%data%</h4>";
  this.itemText = "<p>%data%</p>";
  this.itemDates = '<p class="dates">%data%</p>';
  this.itemURL = '<a class="url orange-1" href="%data%">Ver reseña</a>';
  this.imageHref = '<div class="thumb"><a class="btn" href="img/%data%">';
  this.image = '<img src="img/%data%"></a>';
  this.imageList = '<div class="thumbs"></div>';
}

// Section header and tabs
SectionTemplate.prototype.sectionHeader = function (arr, divId, tabId) {
  this.sectionTitle = this.sectionTitle.replace("%data%", arr.sectionTitle);
  $(divId).append(this.sectionTitle);
  this.sectionNav = this.sectionNav.replace("%data%", tabId);
  $(divId).append(this.sectionNav);
  // Navigation tabs buttons
  for (i = 0; i < arr.sectionNavBtn.length; i++) {
    this.colorRender = this.tabColor.replace(
      "%data%",
      arr.sectionNavBtn[i].color
    );
    this.hrefRender = this.tabHref.replace("%data%", arr.sectionNavBtn[i].href);
    this.iconRender = this.tabIconNav.replace(
      "%data%",
      arr.sectionNavBtn[i].icon
    );
    this.toolTipRender = this.tabIconNavTooltip.replace(
      "%data%",
      arr.sectionNavBtn[i].id
    );
    $("#" + tabId + ":last").append(
      this.colorRender + this.hrefRender + this.iconRender + this.toolTipRender
    );
  }
};

SectionTemplate.prototype.tabContent = function (arr, divId) {
  for (i = 0; i < arr.tabs.length; i++) {
    this.tabInfoRender = this.tabInfo.replace("%data%", arr.tabs[i].id);
    this.tabTitleRender = this.tabTitle.replace("%data%", arr.tabs[i].tabTitle);
    this.tabParagraphRender = this.tabParagraph.replace(
      "%data%",
      arr.tabs[i].tabParagraph
    );
    $(divId).append(this.tabInfoRender);
    $("#" + arr.tabs[i].id).append(
      this.tabTitleRender + this.tabParagraphRender
    );
  }
  $(divId).tabs();
  this.sectionLinkRender = this.sectionLink.replace("%data%", arr.sectionLink);
  this.sectionLinkTextRender = this.sectionLinkText.replace("%data%", arr.sectionLinkText);
  this.sectionLinkClassRender = this.sectionLinkClass.replace("%data%", arr.sectionLinkClass);
  this.sectionLinkIconRender = this.sectionLinkIcon.replace("%data%", arr.sectionLinkIcon);
  $(divId).append(this.sectionLinkRender + this.sectionLinkTextRender + this.sectionLinkClassRender + this.sectionLinkIconRender);  
  $("#location").append(this.tabMap);
  $("#message").append(this.tabFormCon);
  $("#message").append(this.tabInCon);
  $("#login-whs").append(this.tabFormWhs);
};

SectionTemplate.prototype.tabItems = function (arr, tabItemIndex) {
  for (i = 0; i < arr.tabs.length; i++) {
    let tabIndexArray = shuffle(arr.tabs[i].tabItems);
    // Iteration for getting tab items
    for (j = 0; j < tabItemIndex; j++) {
      this.itemIconContainerRender = this.itemIconContainer.replace(
        "%data%",
        arr.sectionNavBtn[i].color
      );
      this.itemIconRender = this.itemIcon.replace(
        "%data%",
        tabIndexArray[j].icon
      );
      this.itemTitleRender = this.itemTitle.replace(
        "%data%",
        tabIndexArray[j].title
      );
      this.itemDatesRender = this.itemDates.replace(
        "%data%",
        tabIndexArray[j].dates
      );
      this.itemTextRender = this.itemText.replace(
        "%data%",
        tabIndexArray[j].text
      );
      this.itemURLRender = this.itemURL.replace("%data%", tabIndexArray[j].url);
      if (Array.isArray(arr.tabs[i].tabItems[j].images)) {
        $("#" + arr.tabs[i].id).append(
          '<div class="tab-item">' +
            this.itemIconContainerRender +
            this.itemIconRender +
            this.itemTitleRender +
            this.itemTextRender +
            this.itemDatesRender +
            this.itemURLRender +
            "</div>"
        );
        $(".tab-item").append(this.imageList);
        // Iteration for getting images items
        for (k = 0; k < arr.tabs[i].tabItems[j].images.length; k++) {  
          this.imageHrefRender = this.imageHref.replace(
            "%data%",
            arr.tabs[i].tabItems[j].images[k].href
          );
          this.imageRender = this.image.replace(
            "%data%",
            arr.tabs[i].tabItems[j].images[k].src
          );
          this.imageItems =         
            this.imageHrefRender +            
            this.imageRender;
          $(".thumbs:last").append(this.imageItems);
        }
      } else {
        $("#" + arr.tabs[i].id).append(
          '<div class="tab-item">' +
            this.itemIconContainerRender +
            this.itemIconRender +
            this.itemTitleRender +
            this.itemDatesRender +
            this.itemTextRender +
            this.itemURLRender +
            "</div>"
        );
        $("#logos-clientes").addClass("logo-list");
      }
    }
  }
  // Catching and removing empty and undefined elements
  $('a[href*="undefined"]').remove();
  $('p:contains("undefined")').remove();
  $("div.undefined:empty").remove();
  $("i.undefined:empty").remove();
  $("div.ico:empty").remove();
  $("h2:empty").remove();
  $("h3:contains('undefined')").remove();
  $("h4:contains('undefined')").remove();
  $("h4:empty").remove();
  $("div.tab-item:empty").remove();
  $("div.thumbs:empty").remove();
  $("li:empty").remove();
  $('span.tooltiptext:contains("undefined")').remove();
};

// Navigation tab buttons focus event to assign active state
// It recieves background tab colors as identifiers to assign state
SectionTemplate.prototype.tabsFocus = function (tab1, tab2, tab3) {
  $(tab1).addClass("selected");
  $("li.btn").click(function () {
    if ($(tab1).hasClass("ui-state-active")) {
      $(this).addClass("selected");
      $(tab2).removeClass("selected");
      $(tab3).removeClass("selected");
    } else if ($(tab2).hasClass("ui-state-active")) {
      $(this).addClass("selected");
      $(tab1).removeClass("selected");
      $(tab3).removeClass("selected");
    } else if ($(tab3).hasClass("ui-state-active")) {
      $(this).addClass("selected");
      $(tab2).removeClass("selected");
      $(tab1).removeClass("selected");
    }
  });
};

SectionTemplate.prototype.tabsFocusAnimation = function (
  tab1,
  tab2,
  tab3,
  anim1,
  anim2,
  anim3
) {
  // CreateJs animation toggle
  $(anim1).addClass("show");
  $(anim2).removeClass("show");
  $(anim2).addClass("hide");
  $(anim3).removeClass("show");
  $(anim3).addClass("hide");
  $("li.btn").click(function () {
    if ($(tab1).hasClass("ui-state-active")) {
      $(anim1).addClass("show");
      $(anim2).removeClass("show");
      $(anim2).addClass("hide");
      $(anim3).removeClass("show");
      $(anim3).addClass("hide");
    } else if ($(tab2).hasClass("ui-state-active")) {
      $(anim1).removeClass("show");
      $(anim1).addClass("hide");
      $(anim2).addClass("show");
      $(anim3).removeClass("show");
      $(anim3).addClass("hide");
    } else if ($(tab3).hasClass("ui-state-active")) {
      $(anim1).removeClass("show");
      $(anim1).addClass("hide");
      $(anim2).addClass("hide");
      $(anim2).removeClass("show");
      $(anim3).addClass("show");
    }
  });
};
