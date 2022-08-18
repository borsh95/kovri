"use strict"; // break points site

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var break_desctop = 1920,
    break_desctopMid = 1450,
    break_desctopMin = 1230,
    break_table = 1024,
    break_mobile = 768,
    break_tel = 480;
/***** INITIALIZING PLUGINS ******/
// скрол страницы к нужной координате

var scrollingWindow = scrollWindow(); //fixed header

if (isElem('header')) {
  var showHeader = function showHeader(el) {
    var $el = typeof el === 'string' ? document.querySelector(el) : el;
    var $menu = $el.querySelector('.category-nav__menu');
    var htmlEl = document.documentElement;
    var offsetTopEl = $el.getBoundingClientRect().height;
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > offsetTopEl + 40) {
        show();
      } else {
        fixed();
      }
    });
    window.addEventListener('resize', function () {
      offsetTopEl = $el.getBoundingClientRect().height;
    });

    function show() {
      if ($el.classList.contains('fixed')) return;

      if (window.innerWidth > 1024) {
        htmlEl.style.paddingTop = $el.offsetHeight + "px";
      } else {
        htmlEl.style.paddingTop = $el.offsetHeight + "px";
      }

      $el.classList.add('fixed');
    }

    function fixed() {
      if (!$el.classList.contains('fixed')) return;
      $el.classList.remove('fixed');
      htmlEl.style.paddingTop = '';
    }

    return {
      show: show,
      fixed: fixed
    };
  };

  var fixedHeader = showHeader('header');
} // 	main slider 


if (isElem('.fullScreenSlider')) {
  var sliderNodes = document.querySelectorAll('.fullScreenSlider');

  var _iterator = _createForOfIteratorHelper(sliderNodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var $node = _step.value;
      var swiper = new Swiper($node, {
        effect: "coverflow",
        speed: 700,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        allowTouchMove: false,
        navigation: {
          nextEl: $node.parentElement.querySelector('.slider-arr--next'),
          prevEl: $node.parentElement.querySelector('.slider-arr--prev')
        },
        pagination: {
          el: $node.parentElement.querySelector('.slider-pagination'),
          clickable: true
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // 	main slider 


if (isElem('.mainSlider')) {
  var sliderNode = document.querySelector('.mainSlider');

  var _swiper = new Swiper(sliderNode, {
    grabCursor: true,
    noSwipingClass: 'btnGo',
    watchSlidesVisibility: true,
    watchOverflow: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },
    pagination: {
      el: sliderNode.parentElement.querySelector('.slider-pagination')
    }
  });
} // products slider	


if (isElem('.productsSlider')) {
  var $sliderNodes = document.querySelectorAll('.productsSlider');

  var _iterator2 = _createForOfIteratorHelper($sliderNodes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var $sliderNode = _step2.value;

      var _swiper2 = new Swiper($sliderNode, {
        loop: true,
        grabCursor: true,
        loopAdditionalSlides: 1,
        slidesPerView: 4,
        spaceBetween: 30,
        noSwipingClass: 'btn',
        watchSlidesProgress: true,
        watchOverflow: true,
        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          1231: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
        pagination: {
          el: $sliderNode.parentElement.querySelector('.slider-pagination')
        }
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // products slider	


if (isElem('.similarSlider')) {
  var _$sliderNodes = document.querySelectorAll('.similarSlider');

  var _iterator3 = _createForOfIteratorHelper(_$sliderNodes),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _breakpoints;

      var _$sliderNode = _step3.value;

      var _swiper3 = new Swiper(_$sliderNode, {
        grabCursor: true,
        slidesPerView: 4,
        spaceBetween: 30,
        noSwipingClass: 'btn',
        watchSlidesProgress: true,
        breakpoints: (_breakpoints = {
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
            initialSlide: 1
          }
        }, _defineProperty(_breakpoints, break_mobile + 1, {
          initialSlide: 1,
          slidesPerView: 2,
          spaceBetween: 30
        }), _defineProperty(_breakpoints, break_table + 1, {
          slidesPerView: 3,
          spaceBetween: 25
        }), _defineProperty(_breakpoints, break_desctopMin + 1, {
          slidesPerView: 4,
          spaceBetween: 30
        }), _breakpoints)
      });
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
} // gallery slider	


if (isElem('.gallery')) {
  var thumbsSliderNode = document.querySelector('.gallery__thumbs'),
      fullSliderNode = document.querySelector('.gallery__slider');
  /* thumbs */

  var galleryThumbs = new Swiper(thumbsSliderNode, {
    spaceBetween: 30,
    slidesPerView: "auto",
    watchSlidesProgress: true,
    freeMode: {
      enabled: true,
      sticky: true
    },
    breakpoints: _defineProperty({
      300: {
        direction: 'horizontal'
      }
    }, break_table + 1, {
      direction: 'vertical',
      slidesPerView: "auto"
    }),
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    mousewheel: true
  });
  var galleryFull = new Swiper(fullSliderNode, {
    spaceBetween: 10,
    slidesPerView: "auto",
    // autoplay: {
    // 	delay: 5000
    // },
    navigation: {
      prevEl: fullSliderNode.parentElement.querySelector('.slider-arr--prev'),
      nextEl: fullSliderNode.parentElement.querySelector('.slider-arr--next')
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
} //slinky header menu


if (isElem('header .bro-menu')) {
  var toggleMenu = function toggleMenu() {
    if (mediaQuery.matches) {
      menu.init();
    } else {
      menu.destroy();
    }
  };

  var $menu = document.querySelector('header .bro-menu');
  var menu = broMenu($menu);
  var mediaQuery = window.matchMedia('(max-width: 1230px)');
  toggleMenu();
  mediaQuery.addListener(toggleMenu);
} // window modal


if (isElem('.v-modal')) {
  modalWindow();
} // accardion


if (isElem('.accardion')) {
  var accardions = document.querySelectorAll('.accardion');
  var accardionPlagin = accardion();

  var _iterator4 = _createForOfIteratorHelper(accardions),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var item = _step4.value;
      accardionPlagin().init(item);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
} // tel mask


if (document.querySelector('input[type="tel"]')) {
  var inputsTel = document.querySelectorAll('input[type="tel"]');
  var im = new Inputmask('+375 (99) 999-99-99');
  im.mask(inputsTel);
} // number slider


if (isElem('.number-slider')) {
  var numberSliders = document.querySelectorAll('.number-slider');

  var _iterator5 = _createForOfIteratorHelper(numberSliders),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var slider = _step5.value;
      numberSlider(slider);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
} // фильтрация элементов


if (isElem('.js-bFilter')) {
  var _iterator6 = _createForOfIteratorHelper(document.querySelectorAll('.js-bFilter')),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var $el = _step6.value;
      bFilter($el);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
} // bTabs


if (isElem('.b-tabs')) {
  var tabs = document.querySelectorAll('.b-tabs');

  var _iterator7 = _createForOfIteratorHelper(tabs),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var tab = _step7.value;
      bTabs(tab);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}
/****** CUSTOM PLUGIN ******/
//Hamburger открытия мобильного меню


if (isElem('.header__hamburger')) {
  var hamburgerBtn = document.querySelector('.header__hamburger');
  var burgerBlock = document.querySelector('.header__burger');
  var burgerInner = burgerBlock.querySelector('.header__burger-inner');
  var bodyEl = document.querySelector('body');
  var header = document.querySelector('header');
  hamburgerBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    burgerBlock.style.top = header.offsetHeight + 'px';
    var isActive = this.classList.contains('active');
    burgerBlock.classList[isActive ? 'add' : 'remove']('open');
    burgerInner.style.maxHeight = isActive ? "calc(100vh - ".concat(header.offsetHeight, "px)") : '';
    bodyEl.style.overflow = isActive ? 'hidden' : '';
  });
  window.addEventListener('resize', function () {
    burgerBlock.style.top = header.offsetHeight + 'px';

    if (window.innerWidth > 1230 && burgerBlock.classList.contains('open')) {
      hamburgerBtn.classList.remove('active');
      burgerBlock.classList.remove('open');
      burgerBlock.style.top = '';
      bodyEl.style.overflow = '';
    }
  });
  document.addEventListener('click', function (e) {
    if (burgerInner.contains(e.target) || hamburgerBtn.contains(e.target)) return;
    hamburgerBtn.classList.remove('active');
    burgerBlock.classList.remove('open');
    bodyEl.style.overflow = '';
  });
} // под меню с гамбургером внутри основного меню


if (isElem('.menu__item--drop')) {
  var menuDrop = document.querySelector('.menu__item--drop');
  var toggle = menuDrop.querySelector('.menu__item-toggle');
  var linkbtn = menuDrop.querySelector('.menu__item-toggle ~ .menu__link');
  var itemMenuList = document.querySelectorAll('.menu__item:not(.menu__item--drop)');
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    menuDrop.classList.toggle('active');
  });
  linkbtn.addEventListener('click', function (e) {
    e.preventDefault();
    toggle.classList.toggle('active');
    menuDrop.classList.toggle('active');
  });
  document.addEventListener('click', function (ev) {
    if (!ev.target.closest('.menu__item--drop')) {
      if (menuDrop.classList.contains('active')) {
        toggle.classList.remove('active');
        menuDrop.classList.remove('active');
      }
    }
  });
} // v-up кнопка вверх


(function () {
  document.querySelector('body').insertAdjacentHTML('afterbegin', "\n\t\t<div class=\"v-up\"></div>\n\t");
  var btnDown = document.querySelector('.v-up');
  var vUpTriggerTimer = 0;
  vUp(btnDown, getScroledWindow);
  btnDown.addEventListener('click', function () {
    //backToTop(-45, 0);
    scrollingWindow.startAmimationScroll(1);
  });
  window.addEventListener('scroll', function () {
    clearTimeout(vUpTriggerTimer);
    vUpTriggerTimer = setTimeout(function () {
      vUp(btnDown, getScroledWindow);
    }, 200);
  }); //пролистываине окна вверх при клике на кнопку

  function vUp(btn, scroled) {
    if (scroled() > window.innerHeight / 2) {
      btn.classList.add('active');
    } else if (scroled() < window.innerHeight / 2 || btn.classList.contains('active')) {
      btn.classList.remove('active');
    }
  } //прокрутка окна вверх вниз


  function backToTop(interval, to) {
    if (window.pageYOffset <= to) return;
    window.scrollBy(0, interval);
    setTimeout(function () {
      backToTop(interval, to);
    }, 0);
  } //на сколько прокручено окно


  function getScroledWindow() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
})(); //	modal window


function modalWindow() {
  var body = document.querySelector('body'),
      modalEls = document.querySelectorAll('.v-modal'),
      btnOpenClassName = "js-openModal",
      btnCloseClassName = 'js-closeModal';
  document.addEventListener('click', function (e) {
    if (e.target.closest(".".concat(btnOpenClassName)) && e.target.dataset.typeModal) {
      e.preventDefault();
      var typeModal = e.target.dataset['typeModal'];

      var _iterator8 = _createForOfIteratorHelper(modalEls),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var $modal = _step8.value;

          if ($modal.dataset && $modal.dataset['typeModal'] === typeModal) {
            $modal.classList.add('active');
            e.preventDefault();
            var scrollBarWidth = window.innerWidth - body.offsetWidth;
            body.style.overflow = 'hidden';
            body.style.paddingRight = scrollBarWidth + "px";
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    } else if (e.target.classList.contains('v-modal__inner') || e.target.closest(".".concat(btnCloseClassName))) {
      e.target.closest('.v-modal').classList.remove('active');
      body.style.overflow = '';
      body.style.paddingRight = "";
    }
  });
} // search


if (isElem('[data-search-toggle]') && isElem('[data-search-panel]')) {
  var $searchPanel = document.querySelector('[data-search-panel]');
  var $input = $searchPanel.querySelector('input[type="search"]');
  var $searchBtnSelector = '[data-search-toggle]';
  var $closePanelSelector = '[data-search-close]';
  var toggleClass = 'open';
  document.addEventListener('click', function (e) {
    if (e.target.closest($searchBtnSelector)) {
      $searchPanel.classList.toggle(toggleClass);
      if ($input) $input.focus();
    } else if (e.target.closest($closePanelSelector) || !e.target.closest('.search-panel') && $searchPanel.classList.contains('open')) {
      $searchPanel.classList.remove(toggleClass);
    }
  });
}
/***** FUNCTION PLUGIN ******/
//slinky menu


function broMenu(selector, options) {
  var $menu = typeof selector === "string" ? document.querySelector(selector) : selector;
  var $level_1 = $menu.lastElementChild;
  var $subMenuList = $menu.querySelectorAll('li > ul');
  var $subMenuLink = $menu.querySelectorAll('li > a');
  var activated;
  var defaulOptions = {
    arrow: "\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n\t\t\t<path d=\"M12.219 2.281L10.78 3.72 18.062 11H2v2h16.063l-7.282 7.281 1.438 1.438 9-9 .687-.719-.687-.719z\" />\n\t\t\t</svg>\n\t\t"
  };
  Object.assign(defaulOptions, options);
  var $activeUl;
  var translate = 0;
  var method = {
    init: function init() {
      if (activated) return;
      $menu.classList.add('bro-menu');

      var _iterator9 = _createForOfIteratorHelper($subMenuList),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var submenu = _step9.value;
          var link = submenu.parentElement.querySelector('li > a');
          link.classList.add('bro-menu__next');
          submenu.classList.add('bro-menu__submenu');

          _addBtnBack(submenu, link);

          _addBtnNext(link);

          activated = true;
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      var _iterator10 = _createForOfIteratorHelper($subMenuLink),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var $link = _step10.value;
          $link.classList.add('active');
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      $menu.addEventListener('click', clickHandler);
      window.addEventListener('resize', _setHeighMenu);
    },
    destroy: function destroy() {
      if (!activated) return;
      /* Удаляем обработчики событий */

      $menu.removeEventListener('click', clickHandler);
      window.removeEventListener('resize', _setHeighMenu);
      /* Удаляем классы плагина на ссылках и кнопку назад */

      var _iterator11 = _createForOfIteratorHelper($menu.querySelectorAll('.link')),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var $link = _step11.value;

          if ($link.classList.contains('bro-menu__back')) {
            $link.closest('li').remove();
            continue;
          }

          $link.classList.remove('link');
          $link.classList.remove('bro-menu__next');
        }
        /* Удаляем классы плагина на вложеных менюшках	*/

      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      var _iterator12 = _createForOfIteratorHelper($menu.querySelectorAll('.bro-menu__submenu')),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var $subMenu = _step12.value;
          $subMenu.classList.remove('bro-menu__submenu');
        }
        /* Удаляем стрелки в ссылках */

      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      var _iterator13 = _createForOfIteratorHelper($menu.querySelectorAll('.bro-menu__arr')),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var $arr = _step13.value;
          $arr.remove();
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      $activeUl && $activeUl.classList.remove('active');
      $menu.style.height = '';
      $level_1.style.transform = "";
      translate = 0;
      activated = false;
    }
  };

  function clickHandler(e) {
    var target = e.target;

    if (target.closest('.bro-menu__next')) {
      e.preventDefault();
      var $nestedMenu = target.closest('li').querySelector('ul');
      if ($activeUl) $activeUl.classList.remove('active');
      $nestedMenu.classList.add('active');
      $nestedMenu.style.visibility = 'visible';
      translate -= 100;
      $level_1.style.transform = "translateX(".concat(translate, "%)");
      $activeUl = $nestedMenu;
      scrollToVisible($activeUl);

      _setHeighMenu();
    } else if (target.closest('.bro-menu__back')) {
      e.preventDefault();
      var $upperMenu = $activeUl.parentElement.closest('ul');
      $upperMenu.classList.add('active');
      $activeUl.style.visibility = '';
      translate += 100;
      $level_1.style.transform = "translateX(".concat(translate, "%)");
      $activeUl.classList.remove('active');
      $activeUl = $upperMenu;

      _setHeighMenu();
    }
  }

  function _addBtnNext(elem) {
    elem.classList.add('link');
    elem.insertAdjacentHTML('beforeend', "\n\t\t\t".concat(defaulOptions.arrow, "\n\t\t"));
    elem.lastElementChild.classList.add('bro-menu__arr');
  }

  function _addBtnBack(elem, link) {
    var href = link.getAttribute('href');
    elem.insertAdjacentHTML('afterbegin', "\n\t\t\t<li>\n\t\t\t\t<a class=\"bro-menu__back link\" ".concat(href ? "href=".concat(href) : '', ">\n\t\t\t\t\t").concat(defaulOptions.arrow, "\n\t\t\t\t\t").concat(link.textContent, "\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t"));
  }

  function _setHeighMenu() {
    if (!$activeUl) return;
    $menu.style.height = $activeUl.offsetHeight + "px";
  }

  function scrollToVisible(el) {
    if (_getPosAbsWindow(el) > window.pageYOffset) return;
    backToTop(-10, _getPos(el));
  }

  function _getPosAbsWindow(elem) {
    var offsetTop = elem.getBoundingClientRect().top;
    return offsetTop - window.pageYOffset;
  }

  function _getPos(el) {
    return el.getBoundingClientRect().top + window.pageYOffset;
  }

  function backToTop(interval, to) {
    if (window.pageYOffset <= to) return;
    window.scrollBy(0, interval);
    setTimeout(function () {
      backToTop(interval, to);
    }, 0);
  }

  return method;
} //accardion


function accardion() {
  var headerDom = document.querySelector('header');
  return function () {
    var _mainElement = {},
        // .accordion 
    _items = {}; // .accordion-item 

    return {
      init: function init(element) {
        _mainElement = typeof element === 'string' ? document.querySelector(element) : element;
        _items = _mainElement.querySelectorAll('.accardion__item');

        _setupListeners(_mainElement, 'click', _clickHandler);
      }
    };

    function _clickHandler(e) {
      if (!e.target.closest('.accardion__item-header')) return;
      e.preventDefault();

      var header = e.target.closest('.accardion__item-header'),
          item = header.closest('.accardion__item'),
          itemActive = _getItem(_items, 'open');

      if (itemActive === undefined) {
        item.classList.add('open');
      } else {
        itemActive.classList.remove('open');

        if (itemActive !== item) {
          item.classList.add('open');
          scrollToVisible(item);
        }
      }
    }
  };

  function _setupListeners(elem, event, handler) {
    elem.addEventListener(event, handler);
  }

  function scrollToVisible(el) {
    if (_getPos(el) > window.pageYOffset) return;
    backToTop(-10, _getPos(el) - headerDom.offsetHeight - 30);
  }

  function _getPos(el) {
    return el.getBoundingClientRect().top + window.pageYOffset;
  }

  function _getItem(elements, className) {
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  }

  ;

  function backToTop(interval, to) {
    if (window.pageYOffset <= to) return;
    window.scrollBy(0, interval);
    setTimeout(function () {
      backToTop(interval, to);
    }, 0);
  }
} // bTabs


function bTabs(target) {
  var _elemTabs = typeof target === 'string' ? document.querySelector(target) : target,
      _eventTabsShow,
      _showTab = function _showTab(tabsLinkTarget) {
    var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
    tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
    tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.b-tabs__link.active');
    tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.b-tabs__pane.active'); // если следующая вкладка равна активной, то завершаем работу

    if (tabsLinkTarget === tabsLinkActive) return; // удаляем классы у текущих активных элементов

    if (tabsLinkActive !== null) tabsLinkActive.classList.remove('active');
    if (tabsPaneShow !== null) tabsPaneShow.classList.remove('active'); // добавляем классы к элементам (в завимости от выбранной вкладки)

    tabsLinkTarget.classList.add('active');
    tabsPaneTarget.classList.add('active');
    document.dispatchEvent(_eventTabsShow);
  },
      _switchTabTo = function _switchTabTo(tabsLinkIndex) {
    var tabsLinks = _elemTabs.querySelectorAll('.b-tabs__link');

    if (tabsLinks.length > 0) {
      if (tabsLinkIndex > tabsLinks.length) {
        tabsLinkIndex = tabsLinks.length;
      } else if (tabsLinkIndex < 1) {
        tabsLinkIndex = 1;
      }

      _showTab(tabsLinks[tabsLinkIndex - 1]);
    }
  };

  _eventTabsShow = new CustomEvent('tab.show', {
    detail: _elemTabs
  });

  _elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target; // завершаем выполнение функции, если кликнули не по ссылке

    if (!tabsLinkTarget.classList.contains('b-tabs__link')) return;
    e.preventDefault();

    _showTab(tabsLinkTarget);
  });

  return {
    showTab: function showTab(target) {
      _showTab(target);
    },
    switchTabTo: function switchTabTo(index) {
      _switchTabTo(index);
    }
  };
}

; // анимация скрола окна браузера

function scrollWindow() {
  var scrollAnimationId;
  var currentScroll = window.pageYOffset;
  var scrolls = false;

  function startAmimationScroll(newScrollY) {
    if (!scrolls) {
      currentScroll = window.pageYOffset;
      scrolls = true;
    }

    var deltaScroll = newScrollY - currentScroll;
    currentScroll += deltaScroll * 0.15;
    window.scrollTo(0, currentScroll);

    if (Math.abs(deltaScroll) > 5) {
      scrollAnimationId = window.requestAnimationFrame(function () {
        startAmimationScroll(newScrollY);
      });
    } else {
      window.scrollTo(0, newScrollY);
      stopAnimationScroll();
      scrolls = false;
    }
  }

  function stopAnimationScroll() {
    window.cancelAnimationFrame(scrollAnimationId);
    scrollAnimationId = undefined;
  }

  return {
    startAmimationScroll: startAmimationScroll,
    stopAnimationScroll: stopAnimationScroll
  };
} // number slider 


function numberSlider(selector) {
  var $el = typeof selector === 'string' ? document.querySelector(selector) : selector,
      input = $el.querySelector('.js-number-slider-input'),
      min = input.getAttribute('min');
  $el.addEventListener('click', clickHander);

  function clickHander(e) {
    if (e.target.closest('.js-number-slider-add')) {
      var old = +parseFloat(input.value) + 1;
      input.value = isFinite(old) ? old : min;
    } else if (e.target.closest('.js-number-slider-reduce')) {
      var _old = +parseFloat(input.value) - 1;

      input.value = +input.value <= +min ? min : +parseFloat(input.value) - 1;
    }
  }
} // bFilter


function bFilter(selector) {
  var $el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  var $filterableList = $el.querySelectorAll('.js-bFilter__filterable');

  _changeFilter($el.querySelector('[data-bfilter].active'));

  $el.addEventListener('click', function (e) {
    var filterBtn = e.target.closest('[data-bfilter]');

    if (filterBtn) {
      if (filterBtn.classList.contains('active')) return;
      $el.querySelector('[data-bfilter].active').classList.remove('active');
      filterBtn.classList.add('active');

      _changeFilter(filterBtn);
    }
  });

  function _changeFilter(activeToggle) {
    var filterClass = 'f-' + activeToggle.dataset['bfilter'];

    var _iterator14 = _createForOfIteratorHelper($filterableList),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var filterable = _step14.value;
        filterable.classList.remove('hide');

        if (!filterable.classList.contains(filterClass) && filterClass !== 'f-all') {
          filterable.classList.add('hide');
        }
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  }
}

if (isElem('.tag-links')) {
  incompleteList('.tag-links', {
    visibleBlocks: 10,
    positionToggle: 'inside',
    btnClasses: 'tag-links__toggle',
    moreBtnContent: "Смотреть еще",
    lessBtnContent: "Скрыть"
  });
} // incomplete list


function incompleteList(selector, options) {
  var $els = typeof selector === 'string' ? Array.from(document.querySelectorAll(selector)) : [selector];
  var istances = $els.map(function (el) {
    return plugin(el);
  });
  return istances.length > 1 ? istances : istances[0];

  function plugin($el) {
    var $hiddenEls, $toggle, visibleCount;
    var baseClass = 'js-incomplete';
    var listClass = baseClass + '-list';
    var itemClass = baseClass + '-item';
    var expandedListClass = listClass + '--expanded';
    var hiddenItemClass = itemClass + '--hide';
    var btnToggleClass = baseClass + '-toggle';
    var btnToggleMoreClass = btnToggleClass + '--more';
    var settings = {
      visibleBlocks: 8,
      positionToggle: 'outside',
      moreBtnContent: "Показать все",
      lessBtnContent: "Скрыть"
    };
    Object.assign(settings, options);
    visibleCount = $el.dataset.incompleteCount || settings.visibleBlocks;
    if ($el.children.length <= +visibleCount) return false;
    $hiddenEls = Array.from($el.children).filter(function ($item, idx) {
      $item.classList.add(itemClass);

      if (idx > visibleCount - 1) {
        $item.classList.add(hiddenItemClass);
        return $item;
      }
    });
    $toggle = document.createElement('button');
    $toggle.innerHTML = settings.moreBtnContent;
    $toggle.className = btnToggleClass + " " + btnToggleMoreClass;

    if (typeof settings.btnClasses === 'string') {
      $toggle.className = settings.btnClasses + " " + $toggle.className;
    }

    if (settings.positionToggle === 'inside') {
      $el.insertAdjacentElement('beforeend', $toggle);
    } else {
      $el.insertAdjacentElement('afterend', $toggle);
    }

    $toggle.addEventListener('click', function (e) {
      if ($el.classList.contains(expandedListClass)) {
        $toggle.classList.add(btnToggleMoreClass);
        $el.classList.remove(expandedListClass);
        $hiddenEls.map(function (item) {
          item.classList.add(hiddenItemClass);
        });
        $toggle.innerHTML = settings.moreBtnContent;
      } else {
        $toggle.classList.remove(btnToggleMoreClass);
        $el.classList.add(expandedListClass);
        $hiddenEls.map(function (item) {
          item.classList.remove(hiddenItemClass);
        });
        $toggle.innerHTML = settings.lessBtnContent;
      }
    });
    return $el;
  }
}
/****** UTILS ******/


function isElem(selector) {
  return document.querySelector(selector) ? true : false;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJyZWFrX2Rlc2N0b3AiLCJicmVha19kZXNjdG9wTWlkIiwiYnJlYWtfZGVzY3RvcE1pbiIsImJyZWFrX3RhYmxlIiwiYnJlYWtfbW9iaWxlIiwiYnJlYWtfdGVsIiwic2Nyb2xsaW5nV2luZG93Iiwic2Nyb2xsV2luZG93IiwiaXNFbGVtIiwic2hvd0hlYWRlciIsImVsIiwiJGVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJG1lbnUiLCJodG1sRWwiLCJkb2N1bWVudEVsZW1lbnQiLCJvZmZzZXRUb3BFbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsInNob3ciLCJmaXhlZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaW5uZXJXaWR0aCIsInN0eWxlIiwicGFkZGluZ1RvcCIsIm9mZnNldEhlaWdodCIsImFkZCIsInJlbW92ZSIsImZpeGVkSGVhZGVyIiwic2xpZGVyTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJG5vZGUiLCJzd2lwZXIiLCJTd2lwZXIiLCJlZmZlY3QiLCJzcGVlZCIsInNwYWNlQmV0d2VlbiIsImNvdmVyZmxvd0VmZmVjdCIsInJvdGF0ZSIsInN0cmV0Y2giLCJkZXB0aCIsIm1vZGlmaWVyIiwic2xpZGVTaGFkb3dzIiwiYWxsb3dUb3VjaE1vdmUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicGFyZW50RWxlbWVudCIsInByZXZFbCIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJzbGlkZXJOb2RlIiwiZ3JhYkN1cnNvciIsIm5vU3dpcGluZ0NsYXNzIiwid2F0Y2hTbGlkZXNWaXNpYmlsaXR5Iiwid2F0Y2hPdmVyZmxvdyIsImF1dG9wbGF5IiwiZGVsYXkiLCJwYXVzZU9uTW91c2VFbnRlciIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiJHNsaWRlck5vZGVzIiwiJHNsaWRlck5vZGUiLCJsb29wIiwibG9vcEFkZGl0aW9uYWxTbGlkZXMiLCJzbGlkZXNQZXJWaWV3Iiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsImJyZWFrcG9pbnRzIiwiaW5pdGlhbFNsaWRlIiwidGh1bWJzU2xpZGVyTm9kZSIsImZ1bGxTbGlkZXJOb2RlIiwiZ2FsbGVyeVRodW1icyIsImZyZWVNb2RlIiwiZW5hYmxlZCIsInN0aWNreSIsImRpcmVjdGlvbiIsImtleWJvYXJkIiwib25seUluVmlld3BvcnQiLCJtb3VzZXdoZWVsIiwiZ2FsbGVyeUZ1bGwiLCJ0aHVtYnMiLCJ0b2dnbGVNZW51IiwibWVkaWFRdWVyeSIsIm1hdGNoZXMiLCJtZW51IiwiaW5pdCIsImRlc3Ryb3kiLCJicm9NZW51IiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwibW9kYWxXaW5kb3ciLCJhY2NhcmRpb25zIiwiYWNjYXJkaW9uUGxhZ2luIiwiYWNjYXJkaW9uIiwiaXRlbSIsImlucHV0c1RlbCIsImltIiwiSW5wdXRtYXNrIiwibWFzayIsIm51bWJlclNsaWRlcnMiLCJzbGlkZXIiLCJudW1iZXJTbGlkZXIiLCJiRmlsdGVyIiwidGFicyIsInRhYiIsImJUYWJzIiwiaGFtYnVyZ2VyQnRuIiwiYnVyZ2VyQmxvY2siLCJidXJnZXJJbm5lciIsImJvZHlFbCIsImhlYWRlciIsInRvZ2dsZSIsInRvcCIsImlzQWN0aXZlIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJlIiwidGFyZ2V0IiwibWVudURyb3AiLCJsaW5rYnRuIiwiaXRlbU1lbnVMaXN0IiwicHJldmVudERlZmF1bHQiLCJldiIsImNsb3Nlc3QiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJidG5Eb3duIiwidlVwVHJpZ2dlclRpbWVyIiwidlVwIiwiZ2V0U2Nyb2xlZFdpbmRvdyIsInN0YXJ0QW1pbWF0aW9uU2Nyb2xsIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImJ0biIsInNjcm9sZWQiLCJpbm5lckhlaWdodCIsImJhY2tUb1RvcCIsImludGVydmFsIiwidG8iLCJzY3JvbGxCeSIsInNjcm9sbFRvcCIsImJvZHkiLCJtb2RhbEVscyIsImJ0bk9wZW5DbGFzc05hbWUiLCJidG5DbG9zZUNsYXNzTmFtZSIsImRhdGFzZXQiLCJ0eXBlTW9kYWwiLCIkbW9kYWwiLCJzY3JvbGxCYXJXaWR0aCIsIm9mZnNldFdpZHRoIiwicGFkZGluZ1JpZ2h0IiwiJHNlYXJjaFBhbmVsIiwiJGlucHV0IiwiJHNlYXJjaEJ0blNlbGVjdG9yIiwiJGNsb3NlUGFuZWxTZWxlY3RvciIsInRvZ2dsZUNsYXNzIiwiZm9jdXMiLCJzZWxlY3RvciIsIm9wdGlvbnMiLCIkbGV2ZWxfMSIsImxhc3RFbGVtZW50Q2hpbGQiLCIkc3ViTWVudUxpc3QiLCIkc3ViTWVudUxpbmsiLCJhY3RpdmF0ZWQiLCJkZWZhdWxPcHRpb25zIiwiYXJyb3ciLCJPYmplY3QiLCJhc3NpZ24iLCIkYWN0aXZlVWwiLCJ0cmFuc2xhdGUiLCJtZXRob2QiLCJzdWJtZW51IiwibGluayIsIl9hZGRCdG5CYWNrIiwiX2FkZEJ0bk5leHQiLCIkbGluayIsImNsaWNrSGFuZGxlciIsIl9zZXRIZWlnaE1lbnUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiJHN1Yk1lbnUiLCIkYXJyIiwidHJhbnNmb3JtIiwiJG5lc3RlZE1lbnUiLCJ2aXNpYmlsaXR5Iiwic2Nyb2xsVG9WaXNpYmxlIiwiJHVwcGVyTWVudSIsImVsZW0iLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJfZ2V0UG9zQWJzV2luZG93IiwiX2dldFBvcyIsIm9mZnNldFRvcCIsImhlYWRlckRvbSIsIl9tYWluRWxlbWVudCIsIl9pdGVtcyIsImVsZW1lbnQiLCJfc2V0dXBMaXN0ZW5lcnMiLCJfY2xpY2tIYW5kbGVyIiwiaXRlbUFjdGl2ZSIsIl9nZXRJdGVtIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJoYW5kbGVyIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiX2VsZW1UYWJzIiwiX2V2ZW50VGFic1Nob3ciLCJfc2hvd1RhYiIsInRhYnNMaW5rVGFyZ2V0IiwidGFic1BhbmVUYXJnZXQiLCJ0YWJzTGlua0FjdGl2ZSIsInRhYnNQYW5lU2hvdyIsImRpc3BhdGNoRXZlbnQiLCJfc3dpdGNoVGFiVG8iLCJ0YWJzTGlua0luZGV4IiwidGFic0xpbmtzIiwibGVuZ3RoIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJzaG93VGFiIiwic3dpdGNoVGFiVG8iLCJpbmRleCIsInNjcm9sbEFuaW1hdGlvbklkIiwiY3VycmVudFNjcm9sbCIsInNjcm9sbHMiLCJuZXdTY3JvbGxZIiwiZGVsdGFTY3JvbGwiLCJzY3JvbGxUbyIsIk1hdGgiLCJhYnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wQW5pbWF0aW9uU2Nyb2xsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbnB1dCIsIm1pbiIsImNsaWNrSGFuZGVyIiwib2xkIiwicGFyc2VGbG9hdCIsInZhbHVlIiwiaXNGaW5pdGUiLCIkZmlsdGVyYWJsZUxpc3QiLCJfY2hhbmdlRmlsdGVyIiwiZmlsdGVyQnRuIiwiYWN0aXZlVG9nZ2xlIiwiZmlsdGVyQ2xhc3MiLCJmaWx0ZXJhYmxlIiwiaW5jb21wbGV0ZUxpc3QiLCJ2aXNpYmxlQmxvY2tzIiwicG9zaXRpb25Ub2dnbGUiLCJidG5DbGFzc2VzIiwibW9yZUJ0bkNvbnRlbnQiLCJsZXNzQnRuQ29udGVudCIsIiRlbHMiLCJBcnJheSIsImZyb20iLCJpc3RhbmNlcyIsIm1hcCIsInBsdWdpbiIsIiRoaWRkZW5FbHMiLCIkdG9nZ2xlIiwidmlzaWJsZUNvdW50IiwiYmFzZUNsYXNzIiwibGlzdENsYXNzIiwiaXRlbUNsYXNzIiwiZXhwYW5kZWRMaXN0Q2xhc3MiLCJoaWRkZW5JdGVtQ2xhc3MiLCJidG5Ub2dnbGVDbGFzcyIsImJ0blRvZ2dsZU1vcmVDbGFzcyIsInNldHRpbmdzIiwiaW5jb21wbGV0ZUNvdW50IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCIkaXRlbSIsImlkeCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJpbnNlcnRBZGph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QUFBLENBQUEsRUFBQTtRQUNBTCxPQUFBLENBQUE5TyxTQUFBLENBQUFNLEdBQUEsQ0FBQWdQLGtCQUFBO1FBQ0FwUSxHQUFBLENBQUFjLFNBQUEsQ0FBQU8sTUFBQSxDQUFBNE8saUJBQUE7UUFDQU4sVUFBQSxDQUFBRixHQUFBLENBQUEsVUFBQW5LLElBQUEsRUFBQTtVQUFBQSxJQUFBLENBQUF4RSxTQUFBLENBQUFNLEdBQUEsQ0FBQThPLGVBQUE7UUFBQSxDQUFBO1FBQ0FOLE9BQUEsQ0FBQWdCLFNBQUEsR0FBQVAsUUFBQSxDQUFBbEIsY0FBQTtNQUNBLENBTEEsTUFLQTtRQUNBUyxPQUFBLENBQUE5TyxTQUFBLENBQUFPLE1BQUEsQ0FBQStPLGtCQUFBO1FBQ0FwUSxHQUFBLENBQUFjLFNBQUEsQ0FBQU0sR0FBQSxDQUFBNk8saUJBQUE7UUFDQU4sVUFBQSxDQUFBRixHQUFBLENBQUEsVUFBQW5LLElBQUEsRUFBQTtVQUFBQSxJQUFBLENBQUF4RSxTQUFBLENBQUFPLE1BQUEsQ0FBQTZPLGVBQUE7UUFBQSxDQUFBO1FBQ0FOLE9BQUEsQ0FBQWdCLFNBQUEsR0FBQVAsUUFBQSxDQUFBakIsY0FBQTtNQUNBO0lBQ0EsQ0FaQTtJQWNBLE9BQUFwUCxHQUFBO0VBQ0E7QUFDQTtBQUVBOzs7QUFDQSxTQUFBSCxNQUFBLENBQUF1SixRQUFBLEVBQUE7RUFDQSxPQUFBbkosUUFBQSxDQUFBQyxhQUFBLENBQUFrSixRQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsS0FBQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy8gYnJlYWsgcG9pbnRzIHNpdGVcclxuY29uc3QgYnJlYWtfZGVzY3RvcCA9IDE5MjAsXHJcblx0YnJlYWtfZGVzY3RvcE1pZCA9IDE0NTAsXHJcblx0YnJlYWtfZGVzY3RvcE1pbiA9IDEyMzAsXHJcblx0YnJlYWtfdGFibGUgPSAxMDI0LFxyXG5cdGJyZWFrX21vYmlsZSA9IDc2OCxcclxuXHRicmVha190ZWwgPSA0ODA7XHJcblxyXG5cclxuLyoqKioqIElOSVRJQUxJWklORyBQTFVHSU5TICoqKioqKi9cclxuLy8g0YHQutGA0L7QuyDRgdGC0YDQsNC90LjRhtGLINC6INC90YPQttC90L7QuSDQutC+0L7RgNC00LjQvdCw0YLQtVxyXG5sZXQgc2Nyb2xsaW5nV2luZG93ID0gc2Nyb2xsV2luZG93KCk7XHJcblxyXG4vL2ZpeGVkIGhlYWRlclxyXG5pZiAoaXNFbGVtKCdoZWFkZXInKSkge1xyXG5cdGxldCBmaXhlZEhlYWRlciA9IHNob3dIZWFkZXIoJ2hlYWRlcicpO1xyXG5cclxuXHRmdW5jdGlvbiBzaG93SGVhZGVyKGVsKSB7XHJcblx0XHRjb25zdCAkZWwgPSAodHlwZW9mIGVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xyXG5cdFx0Y29uc3QgJG1lbnUgPSAkZWwucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LW5hdl9fbWVudScpO1xyXG5cclxuXHRcdGNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRcdGxldCBvZmZzZXRUb3BFbCA9ICRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IG9mZnNldFRvcEVsICsgNDApIHtcclxuXHRcdFx0XHRzaG93KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zml4ZWQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvZmZzZXRUb3BFbCA9ICRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcblx0XHR9KVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNob3coKSB7XHJcblx0XHRcdGlmICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXhlZCcpKSByZXR1cm47XHJcblxyXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XHJcblx0XHRcdFx0aHRtbEVsLnN0eWxlLnBhZGRpbmdUb3AgPSAkZWwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGh0bWxFbC5zdHlsZS5wYWRkaW5nVG9wID0gJGVsLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdCRlbC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpeGVkKCkge1xyXG5cdFx0XHRpZiAoISRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpeGVkJykpIHJldHVybjtcclxuXHJcblx0XHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cdFx0XHRodG1sRWwuc3R5bGUucGFkZGluZ1RvcCA9ICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHNob3csXHJcblx0XHRcdGZpeGVkLFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gXHRtYWluIHNsaWRlciBcclxuaWYgKGlzRWxlbSgnLmZ1bGxTY3JlZW5TbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZ1bGxTY3JlZW5TbGlkZXInKTtcclxuXHJcblx0Zm9yIChjb25zdCAkbm9kZSBvZiBzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkbm9kZSwge1xyXG5cdFx0XHRlZmZlY3Q6IFwiY292ZXJmbG93XCIsXHJcblx0XHRcdHNwZWVkOiA3MDAsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdGNvdmVyZmxvd0VmZmVjdDoge1xyXG5cdFx0XHRcdHJvdGF0ZTogNTAsXHJcblx0XHRcdFx0c3RyZXRjaDogMCxcclxuXHRcdFx0XHRkZXB0aDogMTAwLFxyXG5cdFx0XHRcdG1vZGlmaWVyOiAxLFxyXG5cdFx0XHRcdHNsaWRlU2hhZG93czogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0YWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAkbm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHRcdFx0cHJldkVsOiAkbm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1wcmV2JyksXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJG5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4vLyBcdG1haW4gc2xpZGVyIFxyXG5pZiAoaXNFbGVtKCcubWFpblNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluU2xpZGVyJyk7XHJcblx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihzbGlkZXJOb2RlLCB7XHJcblx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0bm9Td2lwaW5nQ2xhc3M6ICdidG5HbycsXHJcblx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXHJcblx0XHR3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cdFx0c3BlZWQ6IDEwMDAsXHJcblx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRkZWxheTogNDAwMCxcclxuXHRcdFx0cGF1c2VPbk1vdXNlRW50ZXI6IHRydWUsXHJcblx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIHByb2R1Y3RzIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5wcm9kdWN0c1NsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RzU2xpZGVyJyk7XHJcblxyXG5cdGZvciAobGV0ICRzbGlkZXJOb2RlIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0XHRsb29wQWRkaXRpb25hbFNsaWRlczogMSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0bm9Td2lwaW5nQ2xhc3M6ICdidG4nLFxyXG5cdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHR3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMwMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njk6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTAyNToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMjMxOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbi8vIHByb2R1Y3RzIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5zaW1pbGFyU2xpZGVyJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2ltaWxhclNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGxldCAkc2xpZGVyTm9kZSBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlck5vZGUsIHtcclxuXHRcdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0bm9Td2lwaW5nQ2xhc3M6ICdidG4nLFxyXG5cdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMwMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0XHRpbml0aWFsU2xpZGU6IDEsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtfbW9iaWxlICsgMV06IHtcclxuXHRcdFx0XHRcdGluaXRpYWxTbGlkZTogMSxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W2JyZWFrX3RhYmxlICsgMV06IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDI1LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W2JyZWFrX2Rlc2N0b3BNaW4gKyAxXToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGdhbGxlcnkgc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmdhbGxlcnknKSkge1xyXG5cdGNvbnN0IHRodW1ic1NsaWRlck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fdGh1bWJzJyksXHJcblx0XHRmdWxsU2xpZGVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19zbGlkZXInKTtcclxuXHJcblxyXG5cdC8qIHRodW1icyAqL1xyXG5cdGxldCBnYWxsZXJ5VGh1bWJzID0gbmV3IFN3aXBlcih0aHVtYnNTbGlkZXJOb2RlLCB7XHJcblx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0ZnJlZU1vZGU6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0c3RpY2t5OiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdDMwMDoge1xyXG5cdFx0XHRcdGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbYnJlYWtfdGFibGUgKyAxXToge1xyXG5cdFx0XHRcdGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGtleWJvYXJkOiB7XHJcblx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdG9ubHlJblZpZXdwb3J0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdG1vdXNld2hlZWw6IHRydWUsXHJcblx0fSk7XHJcblxyXG5cdGxldCBnYWxsZXJ5RnVsbCA9IG5ldyBTd2lwZXIoZnVsbFNsaWRlck5vZGUsIHtcclxuXHRcdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdC8vIGF1dG9wbGF5OiB7XHJcblx0XHQvLyBcdGRlbGF5OiA1MDAwXHJcblx0XHQvLyB9LFxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRwcmV2RWw6IGZ1bGxTbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLXByZXYnKSxcclxuXHRcdFx0bmV4dEVsOiBmdWxsU2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHR9LFxyXG5cdFx0a2V5Ym9hcmQ6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0b25seUluVmlld3BvcnQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0dGh1bWJzOiB7XHJcblx0XHRcdHN3aXBlcjogZ2FsbGVyeVRodW1icyxcclxuXHRcdH0sXHJcblx0fSk7XHJcbn1cclxuXHJcbi8vc2xpbmt5IGhlYWRlciBtZW51XHJcbmlmIChpc0VsZW0oJ2hlYWRlciAuYnJvLW1lbnUnKSkge1xyXG5cdGNvbnN0ICRtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIC5icm8tbWVudScpO1xyXG5cdGNvbnN0IG1lbnUgPSBicm9NZW51KCRtZW51KTtcclxuXHRjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEyMzBweCknKTtcclxuXHJcblx0dG9nZ2xlTWVudSgpO1xyXG5cclxuXHRtZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKHRvZ2dsZU1lbnUpXHJcblxyXG5cdGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcblx0XHRpZiAobWVkaWFRdWVyeS5tYXRjaGVzKSB7XHJcblx0XHRcdG1lbnUuaW5pdCgpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1lbnUuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gd2luZG93IG1vZGFsXHJcbmlmIChpc0VsZW0oJy52LW1vZGFsJykpIHtcclxuXHRtb2RhbFdpbmRvdygpO1xyXG59XHJcblxyXG4vLyBhY2NhcmRpb25cclxuaWYgKGlzRWxlbSgnLmFjY2FyZGlvbicpKSB7XHJcblx0Y29uc3QgYWNjYXJkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NhcmRpb24nKTtcclxuXHRjb25zdCBhY2NhcmRpb25QbGFnaW4gPSBhY2NhcmRpb24oKTtcclxuXHJcblx0Zm9yIChjb25zdCBpdGVtIG9mIGFjY2FyZGlvbnMpIHtcclxuXHRcdGFjY2FyZGlvblBsYWdpbigpLmluaXQoaXRlbSk7XHJcblx0fVxyXG59XHJcblxyXG4vLyB0ZWwgbWFza1xyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRlbFwiXScpKSB7XHJcblx0Y29uc3QgaW5wdXRzVGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInRlbFwiXScpO1xyXG5cdGNvbnN0IGltID0gbmV3IElucHV0bWFzaygnKzM3NSAoOTkpIDk5OS05OS05OScpO1xyXG5cdGltLm1hc2soaW5wdXRzVGVsKTtcclxufVxyXG5cclxuLy8gbnVtYmVyIHNsaWRlclxyXG5pZiAoaXNFbGVtKCcubnVtYmVyLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgbnVtYmVyU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5udW1iZXItc2xpZGVyJyk7XHJcblxyXG5cdGZvciAoY29uc3Qgc2xpZGVyIG9mIG51bWJlclNsaWRlcnMpIHtcclxuXHRcdG51bWJlclNsaWRlcihzbGlkZXIpO1xyXG5cdH1cclxufVxyXG5cclxuLy8g0YTQuNC70YzRgtGA0LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyXHJcbmlmIChpc0VsZW0oJy5qcy1iRmlsdGVyJykpIHtcclxuXHJcblx0Zm9yIChjb25zdCAkZWwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJGaWx0ZXInKSkge1xyXG5cdFx0YkZpbHRlcigkZWwpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gYlRhYnNcclxuaWYgKGlzRWxlbSgnLmItdGFicycpKSB7XHJcblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iLXRhYnMnKTtcclxuXHJcblx0Zm9yIChjb25zdCB0YWIgb2YgdGFicykge1xyXG5cclxuXHRcdGJUYWJzKHRhYik7XHJcblx0fVxyXG59XHJcblxyXG4vKioqKioqIENVU1RPTSBQTFVHSU4gKioqKioqL1xyXG5cclxuLy9IYW1idXJnZXIg0L7RgtC60YDRi9GC0LjRjyDQvNC+0LHQuNC70YzQvdC+0LPQviDQvNC10L3RjlxyXG5pZiAoaXNFbGVtKCcuaGVhZGVyX19oYW1idXJnZXInKSkge1xyXG5cdGNvbnN0IGhhbWJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2hhbWJ1cmdlcicpO1xyXG5cdGNvbnN0IGJ1cmdlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyJyk7XHJcblx0Y29uc3QgYnVyZ2VySW5uZXIgPSBidXJnZXJCbG9jay5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXItaW5uZXInKTtcclxuXHRjb25zdCBib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcblxyXG5cdGhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0YnVyZ2VyQmxvY2suc3R5bGUudG9wID0gaGVhZGVyLm9mZnNldEhlaWdodCArICdweCc7XHJcblxyXG5cdFx0bGV0IGlzQWN0aXZlID0gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xyXG5cdFx0YnVyZ2VyQmxvY2suY2xhc3NMaXN0W2lzQWN0aXZlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29wZW4nKTtcclxuXHRcdGJ1cmdlcklubmVyLnN0eWxlLm1heEhlaWdodCA9IChpc0FjdGl2ZSkgPyBgY2FsYygxMDB2aCAtICR7aGVhZGVyLm9mZnNldEhlaWdodH1weClgIDogJyc7XHJcblx0XHRib2R5RWwuc3R5bGUub3ZlcmZsb3cgPSAoaXNBY3RpdmUpID8gJ2hpZGRlbicgOiAnJztcclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGJ1cmdlckJsb2NrLnN0eWxlLnRvcCA9IGhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTIzMCAmJiBidXJnZXJCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRoYW1idXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0YnVyZ2VyQmxvY2suc3R5bGUudG9wID0gJyc7XHJcblx0XHRcdGJvZHlFbC5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoYnVyZ2VySW5uZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IGhhbWJ1cmdlckJ0bi5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcclxuXHJcblx0XHRoYW1idXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRidXJnZXJCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRib2R5RWwuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHR9KTtcclxufVxyXG5cclxuLy8g0L/QvtC0INC80LXQvdGOINGBINCz0LDQvNCx0YPRgNCz0LXRgNC+0Lwg0LLQvdGD0YLRgNC4INC+0YHQvdC+0LLQvdC+0LPQviDQvNC10L3RjlxyXG5pZiAoaXNFbGVtKCcubWVudV9faXRlbS0tZHJvcCcpKSB7XHJcblx0Y29uc3QgbWVudURyb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS0tZHJvcCcpO1xyXG5cdGNvbnN0IHRvZ2dsZSA9IG1lbnVEcm9wLnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLXRvZ2dsZScpO1xyXG5cdGNvbnN0IGxpbmtidG4gPSBtZW51RHJvcC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS10b2dnbGUgfiAubWVudV9fbGluaycpO1xyXG5cdGNvbnN0IGl0ZW1NZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtOm5vdCgubWVudV9faXRlbS0tZHJvcCknKTtcclxuXHJcblxyXG5cdHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdG1lbnVEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHRsaW5rYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdG1lbnVEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG5cdFx0aWYgKCFldi50YXJnZXQuY2xvc2VzdCgnLm1lbnVfX2l0ZW0tLWRyb3AnKSkge1xyXG5cdFx0XHRpZiAobWVudURyb3AuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRtZW51RHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vIHYtdXAg0LrQvdC+0L/QutCwINCy0LLQtdGA0YVcclxuKGZ1bmN0aW9uICgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxyXG5cdFx0PGRpdiBjbGFzcz1cInYtdXBcIj48L2Rpdj5cclxuXHRgKTtcclxuXHJcblx0Y29uc3QgYnRuRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52LXVwJyk7XHJcblx0bGV0IHZVcFRyaWdnZXJUaW1lciA9IDA7XHJcblxyXG5cdHZVcChidG5Eb3duLCBnZXRTY3JvbGVkV2luZG93KTtcclxuXHJcblx0YnRuRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vYmFja1RvVG9wKC00NSwgMCk7XHJcblx0XHRzY3JvbGxpbmdXaW5kb3cuc3RhcnRBbWltYXRpb25TY3JvbGwoMSk7XHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodlVwVHJpZ2dlclRpbWVyKTtcclxuXHRcdHZVcFRyaWdnZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR2VXAoYnRuRG93biwgZ2V0U2Nyb2xlZFdpbmRvdyk7XHJcblx0XHR9LCAyMDApXHJcblx0fSk7XHJcblxyXG5cdC8v0L/RgNC+0LvQuNGB0YLRi9Cy0LDQuNC90LUg0L7QutC90LAg0LLQstC10YDRhSDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRg1xyXG5cdGZ1bmN0aW9uIHZVcChidG4sIHNjcm9sZWQpIHtcclxuXHRcdGlmIChzY3JvbGVkKCkgPiAod2luZG93LmlubmVySGVpZ2h0IC8gMikpIHtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0fSBlbHNlIGlmIChzY3JvbGVkKCkgPCAod2luZG93LmlubmVySGVpZ2h0IC8gMikgfHwgYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly/Qv9GA0L7QutGA0YPRgtC60LAg0L7QutC90LAg0LLQstC10YDRhSDQstC90LjQt1xyXG5cdGZ1bmN0aW9uIGJhY2tUb1RvcChpbnRlcnZhbCwgdG8pIHtcclxuXHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPD0gdG8pIHJldHVybjtcclxuXHJcblx0XHR3aW5kb3cuc2Nyb2xsQnkoMCwgaW50ZXJ2YWwpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGJhY2tUb1RvcChpbnRlcnZhbCwgdG8pXHJcblx0XHR9LCAwKTtcclxuXHR9XHJcblxyXG5cdC8v0L3QsCDRgdC60L7Qu9GM0LrQviDQv9GA0L7QutGA0YPRh9C10L3QviDQvtC60L3QvlxyXG5cdGZ1bmN0aW9uIGdldFNjcm9sZWRXaW5kb3coKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0fVxyXG59KCkpO1xyXG5cclxuLy9cdG1vZGFsIHdpbmRvd1xyXG5mdW5jdGlvbiBtb2RhbFdpbmRvdygpIHtcclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxyXG5cdFx0bW9kYWxFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1tb2RhbCcpLFxyXG5cdFx0YnRuT3BlbkNsYXNzTmFtZSA9IFwianMtb3Blbk1vZGFsXCIsXHJcblx0XHRidG5DbG9zZUNsYXNzTmFtZSA9ICdqcy1jbG9zZU1vZGFsJztcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoYC4ke2J0bk9wZW5DbGFzc05hbWV9YCkgJiYgZS50YXJnZXQuZGF0YXNldC50eXBlTW9kYWwpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjb25zdCB0eXBlTW9kYWwgPSBlLnRhcmdldC5kYXRhc2V0Wyd0eXBlTW9kYWwnXTtcclxuXHJcblx0XHRcdGZvciAobGV0ICRtb2RhbCBvZiBtb2RhbEVscykge1xyXG5cclxuXHRcdFx0XHRpZiAoJG1vZGFsLmRhdGFzZXQgJiYgJG1vZGFsLmRhdGFzZXRbJ3R5cGVNb2RhbCddID09PSB0eXBlTW9kYWwpIHtcclxuXHRcdFx0XHRcdCRtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRjb25zdCBzY3JvbGxCYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gYm9keS5vZmZzZXRXaWR0aDtcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyBcInB4XCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndi1tb2RhbF9faW5uZXInKSB8fCBlLnRhcmdldC5jbG9zZXN0KGAuJHtidG5DbG9zZUNsYXNzTmFtZX1gKSkge1xyXG5cdFx0XHRlLnRhcmdldC5jbG9zZXN0KCcudi1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIjtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gc2VhcmNoXHJcbmlmIChpc0VsZW0oJ1tkYXRhLXNlYXJjaC10b2dnbGVdJykgJiYgaXNFbGVtKCdbZGF0YS1zZWFyY2gtcGFuZWxdJykpIHtcclxuXHRjb25zdCAkc2VhcmNoUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWFyY2gtcGFuZWxdJyk7XHJcblx0Y29uc3QgJGlucHV0ID0gJHNlYXJjaFBhbmVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJzZWFyY2hcIl0nKTtcclxuXHRjb25zdCAkc2VhcmNoQnRuU2VsZWN0b3IgPSAnW2RhdGEtc2VhcmNoLXRvZ2dsZV0nO1xyXG5cdGNvbnN0ICRjbG9zZVBhbmVsU2VsZWN0b3IgPSAnW2RhdGEtc2VhcmNoLWNsb3NlXSc7XHJcblx0Y29uc3QgdG9nZ2xlQ2xhc3MgPSAnb3Blbic7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGlmIChlLnRhcmdldC5jbG9zZXN0KCRzZWFyY2hCdG5TZWxlY3RvcikpIHtcclxuXHRcdFx0JHNlYXJjaFBhbmVsLmNsYXNzTGlzdC50b2dnbGUodG9nZ2xlQ2xhc3MpO1xyXG5cclxuXHRcdFx0aWYgKCRpbnB1dCkgJGlucHV0LmZvY3VzKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCRjbG9zZVBhbmVsU2VsZWN0b3IpXHJcblx0XHRcdHx8ICghZS50YXJnZXQuY2xvc2VzdCgnLnNlYXJjaC1wYW5lbCcpICYmICRzZWFyY2hQYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkpIHtcclxuXHRcdFx0JHNlYXJjaFBhbmVsLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlQ2xhc3MpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qKioqKiBGVU5DVElPTiBQTFVHSU4gKioqKioqL1xyXG5cclxuLy9zbGlua3kgbWVudVxyXG5mdW5jdGlvbiBicm9NZW51KHNlbGVjdG9yLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgJG1lbnUgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG5cdGNvbnN0ICRsZXZlbF8xID0gJG1lbnUubGFzdEVsZW1lbnRDaGlsZDtcclxuXHRjb25zdCAkc3ViTWVudUxpc3QgPSAkbWVudS5xdWVyeVNlbGVjdG9yQWxsKCdsaSA+IHVsJyk7XHJcblx0Y29uc3QgJHN1Yk1lbnVMaW5rID0gJG1lbnUucXVlcnlTZWxlY3RvckFsbCgnbGkgPiBhJyk7XHJcblx0bGV0IGFjdGl2YXRlZDtcclxuXHJcblx0bGV0IGRlZmF1bE9wdGlvbnMgPSB7XHJcblx0XHRhcnJvdzogYFxyXG5cdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcblx0XHRcdDxwYXRoIGQ9XCJNMTIuMjE5IDIuMjgxTDEwLjc4IDMuNzIgMTguMDYyIDExSDJ2MmgxNi4wNjNsLTcuMjgyIDcuMjgxIDEuNDM4IDEuNDM4IDktOSAuNjg3LS43MTktLjY4Ny0uNzE5elwiIC8+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0YFxyXG5cdH1cclxuXHJcblx0T2JqZWN0LmFzc2lnbihkZWZhdWxPcHRpb25zLCBvcHRpb25zKTtcclxuXHJcblx0bGV0ICRhY3RpdmVVbDtcclxuXHRsZXQgdHJhbnNsYXRlID0gMDtcclxuXHJcblx0Y29uc3QgbWV0aG9kID0ge1xyXG5cdFx0aW5pdCgpIHtcclxuXHRcdFx0aWYgKGFjdGl2YXRlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0JG1lbnUuY2xhc3NMaXN0LmFkZCgnYnJvLW1lbnUnKTtcclxuXHJcblx0XHRcdGZvciAobGV0IHN1Ym1lbnUgb2YgJHN1Yk1lbnVMaXN0KSB7XHJcblx0XHRcdFx0Y29uc3QgbGluayA9IHN1Ym1lbnUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsaSA+IGEnKTtcclxuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2Jyby1tZW51X19uZXh0Jyk7XHJcblx0XHRcdFx0c3VibWVudS5jbGFzc0xpc3QuYWRkKCdicm8tbWVudV9fc3VibWVudScpO1xyXG5cclxuXHRcdFx0XHRfYWRkQnRuQmFjayhzdWJtZW51LCBsaW5rKTtcclxuXHRcdFx0XHRfYWRkQnRuTmV4dChsaW5rKTtcclxuXHJcblx0XHRcdFx0YWN0aXZhdGVkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkc3ViTWVudUxpbmspIHtcclxuXHRcdFx0XHQkbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9zZXRIZWlnaE1lbnUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkZXN0cm95KCkge1xyXG5cdFx0XHRpZiAoIWFjdGl2YXRlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Lyog0KPQtNCw0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDRgdC+0LHRi9GC0LjQuSAqL1xyXG5cdFx0XHQkbWVudS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBfc2V0SGVpZ2hNZW51KTtcclxuXHJcblx0XHRcdC8qINCj0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDQv9C70LDQs9C40L3QsCDQvdCwINGB0YHRi9C70LrQsNGFINC4INC60L3QvtC/0LrRgyDQvdCw0LfQsNC0ICovXHJcblx0XHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmxpbmsnKSkge1xyXG5cdFx0XHRcdGlmICgkbGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2Jyby1tZW51X19iYWNrJykpIHtcclxuXHRcdFx0XHRcdCRsaW5rLmNsb3Nlc3QoJ2xpJykucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCRsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmsnKTtcclxuXHRcdFx0XHQkbGluay5jbGFzc0xpc3QucmVtb3ZlKCdicm8tbWVudV9fbmV4dCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiDQo9C00LDQu9GP0LXQvCDQutC70LDRgdGB0Ysg0L/Qu9Cw0LPQuNC90LAg0L3QsCDQstC70L7QttC10L3Ri9GFINC80LXQvdGO0YjQutCw0YVcdCovXHJcblx0XHRcdGZvciAoY29uc3QgJHN1Yk1lbnUgb2YgJG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmJyby1tZW51X19zdWJtZW51JykpIHtcclxuXHRcdFx0XHQkc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdicm8tbWVudV9fc3VibWVudScpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qINCj0LTQsNC70Y/QtdC8INGB0YLRgNC10LvQutC4INCyINGB0YHRi9C70LrQsNGFICovXHJcblx0XHRcdGZvciAoY29uc3QgJGFyciBvZiAkbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuYnJvLW1lbnVfX2FycicpKSB7XHJcblx0XHRcdFx0JGFyci5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0XHQkYWN0aXZlVWwgJiYgJGFjdGl2ZVVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0JG1lbnUuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcblx0XHRcdCRsZXZlbF8xLnN0eWxlLnRyYW5zZm9ybSA9IGBgO1xyXG5cdFx0XHR0cmFuc2xhdGUgPSAwO1xyXG5cdFx0XHRhY3RpdmF0ZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcblx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcblx0XHRpZiAodGFyZ2V0LmNsb3Nlc3QoJy5icm8tbWVudV9fbmV4dCcpKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0ICRuZXN0ZWRNZW51ID0gdGFyZ2V0LmNsb3Nlc3QoJ2xpJykucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHJcblx0XHRcdGlmICgkYWN0aXZlVWwpICRhY3RpdmVVbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdCRuZXN0ZWRNZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkbmVzdGVkTWVudS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHR0cmFuc2xhdGUgLT0gMTAwO1xyXG5cclxuXHRcdFx0JGxldmVsXzEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGV9JSlgO1xyXG5cdFx0XHQkYWN0aXZlVWwgPSAkbmVzdGVkTWVudTtcclxuXHJcblx0XHRcdHNjcm9sbFRvVmlzaWJsZSgkYWN0aXZlVWwpO1xyXG5cdFx0XHRfc2V0SGVpZ2hNZW51KCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCgnLmJyby1tZW51X19iYWNrJykpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgJHVwcGVyTWVudSA9ICRhY3RpdmVVbC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJ3VsJyk7XHJcblx0XHRcdCR1cHBlck1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHQkYWN0aXZlVWwuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xyXG5cclxuXHRcdFx0dHJhbnNsYXRlICs9IDEwMDtcclxuXHJcblx0XHRcdCRsZXZlbF8xLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlfSUpYDtcclxuXHRcdFx0JGFjdGl2ZVVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkYWN0aXZlVWwgPSAkdXBwZXJNZW51O1xyXG5cdFx0XHRfc2V0SGVpZ2hNZW51KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfYWRkQnRuTmV4dChlbGVtKSB7XHJcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKVxyXG5cdFx0ZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuXHRcdFx0JHtkZWZhdWxPcHRpb25zLmFycm93fVxyXG5cdFx0YCk7XHJcblxyXG5cdFx0ZWxlbS5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2Jyby1tZW51X19hcnInKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9hZGRCdG5CYWNrKGVsZW0sIGxpbmspIHtcclxuXHRcdGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cclxuXHRcdGVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxyXG5cdFx0XHQ8bGk+XHJcblx0XHRcdFx0PGEgY2xhc3M9XCJicm8tbWVudV9fYmFjayBsaW5rXCIgJHsoaHJlZikgPyBgaHJlZj0ke2hyZWZ9YCA6ICcnfT5cclxuXHRcdFx0XHRcdCR7ZGVmYXVsT3B0aW9ucy5hcnJvd31cclxuXHRcdFx0XHRcdCR7bGluay50ZXh0Q29udGVudH1cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvbGk+XHJcblx0XHRgKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9zZXRIZWlnaE1lbnUoKSB7XHJcblx0XHRpZiAoISRhY3RpdmVVbCkgcmV0dXJuO1xyXG5cclxuXHRcdCRtZW51LnN0eWxlLmhlaWdodCA9ICRhY3RpdmVVbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzY3JvbGxUb1Zpc2libGUoZWwpIHtcclxuXHRcdGlmIChfZ2V0UG9zQWJzV2luZG93KGVsKSA+IHdpbmRvdy5wYWdlWU9mZnNldCkgcmV0dXJuO1xyXG5cclxuXHRcdGJhY2tUb1RvcCgtMTAsIF9nZXRQb3MoZWwpKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRQb3NBYnNXaW5kb3coZWxlbSkge1xyXG5cdFx0Y29uc3Qgb2Zmc2V0VG9wID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG5cdFx0cmV0dXJuIG9mZnNldFRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRQb3MoZWwpIHtcclxuXHRcdHJldHVybiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBiYWNrVG9Ub3AoaW50ZXJ2YWwsIHRvKSB7XHJcblx0XHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDw9IHRvKSByZXR1cm47XHJcblxyXG5cdFx0d2luZG93LnNjcm9sbEJ5KDAsIGludGVydmFsKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRiYWNrVG9Ub3AoaW50ZXJ2YWwsIHRvKVxyXG5cdFx0fSwgMCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbWV0aG9kO1xyXG59XHJcblxyXG4vL2FjY2FyZGlvblxyXG5mdW5jdGlvbiBhY2NhcmRpb24oKSB7XHJcblx0bGV0IGhlYWRlckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IF9tYWluRWxlbWVudCA9IHt9LCAvLyAuYWNjb3JkaW9uIFxyXG5cdFx0XHRfaXRlbXMgPSB7fTsgLy8gLmFjY29yZGlvbi1pdGVtIFxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGluaXQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcblx0XHRcdFx0X21haW5FbGVtZW50ID0gKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50KTtcclxuXHRcdFx0XHRfaXRlbXMgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY2FyZGlvbl9faXRlbScpO1xyXG5cdFx0XHRcdF9zZXR1cExpc3RlbmVycyhfbWFpbkVsZW1lbnQsICdjbGljaycsIF9jbGlja0hhbmRsZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gX2NsaWNrSGFuZGxlcihlKSB7XHJcblx0XHRcdGlmICghZS50YXJnZXQuY2xvc2VzdCgnLmFjY2FyZGlvbl9faXRlbS1oZWFkZXInKSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0bGV0IGhlYWRlciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5hY2NhcmRpb25fX2l0ZW0taGVhZGVyJyksXHJcblx0XHRcdFx0aXRlbSA9IGhlYWRlci5jbG9zZXN0KCcuYWNjYXJkaW9uX19pdGVtJyksXHJcblx0XHRcdFx0aXRlbUFjdGl2ZSA9IF9nZXRJdGVtKF9pdGVtcywgJ29wZW4nKTtcclxuXHJcblx0XHRcdGlmIChpdGVtQWN0aXZlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpdGVtQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHJcblx0XHRcdFx0aWYgKGl0ZW1BY3RpdmUgIT09IGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdHNjcm9sbFRvVmlzaWJsZShpdGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9zZXR1cExpc3RlbmVycyhlbGVtLCBldmVudCwgaGFuZGxlcikge1xyXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNjcm9sbFRvVmlzaWJsZShlbCkge1xyXG5cdFx0aWYgKF9nZXRQb3MoZWwpID4gd2luZG93LnBhZ2VZT2Zmc2V0KSByZXR1cm47XHJcblx0XHRiYWNrVG9Ub3AoLTEwLCBfZ2V0UG9zKGVsKSAtIGhlYWRlckRvbS5vZmZzZXRIZWlnaHQgLSAzMCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0UG9zKGVsKSB7XHJcblx0XHRyZXR1cm4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2dldEl0ZW0oZWxlbWVudHMsIGNsYXNzTmFtZSkge1xyXG5cdFx0dmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcblx0XHRcdFx0ZWxlbWVudCA9IGl0ZW07XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gYmFja1RvVG9wKGludGVydmFsLCB0bykge1xyXG5cdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8PSB0bykgcmV0dXJuO1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxCeSgwLCBpbnRlcnZhbCk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0YmFja1RvVG9wKGludGVydmFsLCB0bylcclxuXHRcdH0sIDApO1xyXG5cdH1cclxufVxyXG5cclxuLy8gYlRhYnNcclxuZnVuY3Rpb24gYlRhYnModGFyZ2V0KSB7XHJcblx0bGV0IF9lbGVtVGFicyA9ICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldCksXHJcblx0XHRfZXZlbnRUYWJzU2hvdyxcclxuXHRcdF9zaG93VGFiID0gZnVuY3Rpb24gKHRhYnNMaW5rVGFyZ2V0KSB7XHJcblx0XHRcdHZhciB0YWJzUGFuZVRhcmdldCwgdGFic0xpbmtBY3RpdmUsIHRhYnNQYW5lU2hvdztcclxuXHRcdFx0dGFic1BhbmVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYnNMaW5rVGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuXHRcdFx0dGFic0xpbmtBY3RpdmUgPSB0YWJzTGlua1RhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iLXRhYnNfX2xpbmsuYWN0aXZlJyk7XHJcblx0XHRcdHRhYnNQYW5lU2hvdyA9IHRhYnNQYW5lVGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmItdGFic19fcGFuZS5hY3RpdmUnKTtcclxuXHRcdFx0Ly8g0LXRgdC70Lgg0YHQu9C10LTRg9GO0YnQsNGPINCy0LrQu9Cw0LTQutCwINGA0LDQstC90LAg0LDQutGC0LjQstC90L7QuSwg0YLQviDQt9Cw0LLQtdGA0YjQsNC10Lwg0YDQsNCx0L7RgtGDXHJcblx0XHRcdGlmICh0YWJzTGlua1RhcmdldCA9PT0gdGFic0xpbmtBY3RpdmUpIHJldHVybjtcclxuXHRcdFx0Ly8g0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGDINGC0LXQutGD0YnQuNGFINCw0LrRgtC40LLQvdGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyXHJcblx0XHRcdGlmICh0YWJzTGlua0FjdGl2ZSAhPT0gbnVsbCkgdGFic0xpbmtBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRpZiAodGFic1BhbmVTaG93ICE9PSBudWxsKSB0YWJzUGFuZVNob3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdC8vINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGB0Ysg0Log0Y3Qu9C10LzQtdC90YLQsNC8ICjQsiDQt9Cw0LLQuNC80L7RgdGC0Lgg0L7RgiDQstGL0LHRgNCw0L3QvdC+0Lkg0LLQutC70LDQtNC60LgpXHJcblx0XHRcdHRhYnNMaW5rVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR0YWJzUGFuZVRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChfZXZlbnRUYWJzU2hvdyk7XHJcblx0XHR9LFxyXG5cdFx0X3N3aXRjaFRhYlRvID0gZnVuY3Rpb24gKHRhYnNMaW5rSW5kZXgpIHtcclxuXHRcdFx0dmFyIHRhYnNMaW5rcyA9IF9lbGVtVGFicy5xdWVyeVNlbGVjdG9yQWxsKCcuYi10YWJzX19saW5rJyk7XHJcblx0XHRcdGlmICh0YWJzTGlua3MubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGlmICh0YWJzTGlua0luZGV4ID4gdGFic0xpbmtzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGFic0xpbmtJbmRleCA9IHRhYnNMaW5rcy5sZW5ndGg7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0YWJzTGlua0luZGV4IDwgMSkge1xyXG5cdFx0XHRcdFx0dGFic0xpbmtJbmRleCA9IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF9zaG93VGFiKHRhYnNMaW5rc1t0YWJzTGlua0luZGV4IC0gMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRfZXZlbnRUYWJzU2hvdyA9IG5ldyBDdXN0b21FdmVudCgndGFiLnNob3cnLCB7IGRldGFpbDogX2VsZW1UYWJzIH0pO1xyXG5cclxuXHRfZWxlbVRhYnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0dmFyIHRhYnNMaW5rVGFyZ2V0ID0gZS50YXJnZXQ7XHJcblx0XHQvLyDQt9Cw0LLQtdGA0YjQsNC10Lwg0LLRi9C/0L7Qu9C90LXQvdC40LUg0YTRg9C90LrRhtC40LgsINC10YHQu9C4INC60LvQuNC60L3Rg9C70Lgg0L3QtSDQv9C+INGB0YHRi9C70LrQtVxyXG5cdFx0aWYgKCF0YWJzTGlua1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ItdGFic19fbGluaycpKSByZXR1cm47XHJcblxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0X3Nob3dUYWIodGFic0xpbmtUYXJnZXQpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0c2hvd1RhYjogZnVuY3Rpb24gKHRhcmdldCkge1xyXG5cdFx0XHRfc2hvd1RhYih0YXJnZXQpO1xyXG5cdFx0fSxcclxuXHRcdHN3aXRjaFRhYlRvOiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHRcdFx0X3N3aXRjaFRhYlRvKGluZGV4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59O1xyXG5cclxuLy8g0LDQvdC40LzQsNGG0LjRjyDRgdC60YDQvtC70LAg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsFxyXG5mdW5jdGlvbiBzY3JvbGxXaW5kb3coKSB7XHJcblx0bGV0IHNjcm9sbEFuaW1hdGlvbklkO1xyXG5cdGxldCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdGxldCBzY3JvbGxzID0gZmFsc2U7XHJcblxyXG5cdGZ1bmN0aW9uIHN0YXJ0QW1pbWF0aW9uU2Nyb2xsKG5ld1Njcm9sbFkpIHtcclxuXHRcdGlmICghc2Nyb2xscykge1xyXG5cdFx0XHRjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHRzY3JvbGxzID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBkZWx0YVNjcm9sbCA9IChuZXdTY3JvbGxZIC0gY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0Y3VycmVudFNjcm9sbCArPSBkZWx0YVNjcm9sbCAqIDAuMTU7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0aWYgKE1hdGguYWJzKGRlbHRhU2Nyb2xsKSA+IDUpIHtcclxuXHRcdFx0c2Nyb2xsQW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzdGFydEFtaW1hdGlvblNjcm9sbChuZXdTY3JvbGxZKTtcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBuZXdTY3JvbGxZKTtcclxuXHRcdFx0c3RvcEFuaW1hdGlvblNjcm9sbCgpO1xyXG5cdFx0XHRzY3JvbGxzID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzdG9wQW5pbWF0aW9uU2Nyb2xsKCkge1xyXG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjcm9sbEFuaW1hdGlvbklkKTtcclxuXHRcdHNjcm9sbEFuaW1hdGlvbklkID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHN0YXJ0QW1pbWF0aW9uU2Nyb2xsLFxyXG5cdFx0c3RvcEFuaW1hdGlvblNjcm9sbCxcclxuXHR9XHJcbn1cclxuXHJcbi8vIG51bWJlciBzbGlkZXIgXHJcbmZ1bmN0aW9uIG51bWJlclNsaWRlcihzZWxlY3Rvcikge1xyXG5cdGNvbnN0ICRlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG5cdFx0OiBzZWxlY3RvcixcclxuXHRcdGlucHV0ID0gJGVsLnF1ZXJ5U2VsZWN0b3IoJy5qcy1udW1iZXItc2xpZGVyLWlucHV0JyksXHJcblx0XHRtaW4gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpO1xyXG5cclxuXHQkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRlcik7XHJcblxyXG5cdGZ1bmN0aW9uIGNsaWNrSGFuZGVyKGUpIHtcclxuXHRcdGlmIChlLnRhcmdldC5jbG9zZXN0KCcuanMtbnVtYmVyLXNsaWRlci1hZGQnKSkge1xyXG5cdFx0XHRjb25zdCBvbGQgPSArcGFyc2VGbG9hdChpbnB1dC52YWx1ZSkgKyAxO1xyXG5cdFx0XHRpbnB1dC52YWx1ZSA9IGlzRmluaXRlKG9sZCkgPyBvbGQgOiBtaW47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuanMtbnVtYmVyLXNsaWRlci1yZWR1Y2UnKSkge1xyXG5cdFx0XHRjb25zdCBvbGQgPSArcGFyc2VGbG9hdChpbnB1dC52YWx1ZSkgLSAxO1xyXG5cdFx0XHRpbnB1dC52YWx1ZSA9ICgraW5wdXQudmFsdWUgPD0gK21pbikgPyBtaW4gOiArcGFyc2VGbG9hdChpbnB1dC52YWx1ZSkgLSAxO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gYkZpbHRlclxyXG5mdW5jdGlvbiBiRmlsdGVyKHNlbGVjdG9yKSB7XHJcblx0Y29uc3QgJGVsID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcclxuXHRjb25zdCAkZmlsdGVyYWJsZUxpc3QgPSAkZWwucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJGaWx0ZXJfX2ZpbHRlcmFibGUnKTtcclxuXHJcblx0X2NoYW5nZUZpbHRlcigkZWwucXVlcnlTZWxlY3RvcignW2RhdGEtYmZpbHRlcl0uYWN0aXZlJykpO1xyXG5cclxuXHJcblx0JGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGNvbnN0IGZpbHRlckJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJmaWx0ZXJdJyk7XHJcblxyXG5cdFx0aWYgKGZpbHRlckJ0bikge1xyXG5cdFx0XHRpZiAoZmlsdGVyQnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcclxuXHJcblx0XHRcdCRlbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iZmlsdGVyXS5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0ZmlsdGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0X2NoYW5nZUZpbHRlcihmaWx0ZXJCdG4pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBfY2hhbmdlRmlsdGVyKGFjdGl2ZVRvZ2dsZSkge1xyXG5cdFx0Y29uc3QgZmlsdGVyQ2xhc3MgPSAnZi0nICsgYWN0aXZlVG9nZ2xlLmRhdGFzZXRbJ2JmaWx0ZXInXTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGZpbHRlcmFibGUgb2YgJGZpbHRlcmFibGVMaXN0KSB7XHJcblx0XHRcdGZpbHRlcmFibGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0aWYgKCFmaWx0ZXJhYmxlLmNsYXNzTGlzdC5jb250YWlucyhmaWx0ZXJDbGFzcykgJiYgZmlsdGVyQ2xhc3MgIT09ICdmLWFsbCcpIHtcclxuXHRcdFx0XHRmaWx0ZXJhYmxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuaWYgKGlzRWxlbSgnLnRhZy1saW5rcycpKSB7XHJcblx0aW5jb21wbGV0ZUxpc3QoJy50YWctbGlua3MnLCB7XHJcblx0XHR2aXNpYmxlQmxvY2tzOiAxMCxcclxuXHRcdHBvc2l0aW9uVG9nZ2xlOiAnaW5zaWRlJyxcclxuXHRcdGJ0bkNsYXNzZXM6ICd0YWctbGlua3NfX3RvZ2dsZScsXHJcblx0XHRtb3JlQnRuQ29udGVudDogXCLQodC80L7RgtGA0LXRgtGMINC10YnQtVwiLFxyXG5cdFx0bGVzc0J0bkNvbnRlbnQ6IFwi0KHQutGA0YvRgtGMXCIsXHJcblx0fSlcclxufVxyXG5cclxuLy8gaW5jb21wbGV0ZSBsaXN0XHJcbmZ1bmN0aW9uIGluY29tcGxldGVMaXN0KHNlbGVjdG9yLCBvcHRpb25zKSB7XHJcblx0bGV0ICRlbHMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJylcclxuXHRcdD8gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcclxuXHRcdDogW3NlbGVjdG9yXTtcclxuXHJcblx0Y29uc3QgaXN0YW5jZXMgPSAkZWxzLm1hcChlbCA9PiBwbHVnaW4oZWwpKTtcclxuXHRyZXR1cm4gaXN0YW5jZXMubGVuZ3RoID4gMSA/IGlzdGFuY2VzIDogaXN0YW5jZXNbMF07XHJcblxyXG5cdGZ1bmN0aW9uIHBsdWdpbigkZWwpIHtcclxuXHRcdGxldCAkaGlkZGVuRWxzLFxyXG5cdFx0XHQkdG9nZ2xlLFxyXG5cdFx0XHR2aXNpYmxlQ291bnQ7XHJcblx0XHRjb25zdCBiYXNlQ2xhc3MgPSAnanMtaW5jb21wbGV0ZSc7XHJcblx0XHRjb25zdCBsaXN0Q2xhc3MgPSBiYXNlQ2xhc3MgKyAnLWxpc3QnO1xyXG5cdFx0Y29uc3QgaXRlbUNsYXNzID0gYmFzZUNsYXNzICsgJy1pdGVtJztcclxuXHRcdGNvbnN0IGV4cGFuZGVkTGlzdENsYXNzID0gbGlzdENsYXNzICsgJy0tZXhwYW5kZWQnO1xyXG5cdFx0Y29uc3QgaGlkZGVuSXRlbUNsYXNzID0gaXRlbUNsYXNzICsgJy0taGlkZSc7XHJcblx0XHRjb25zdCBidG5Ub2dnbGVDbGFzcyA9IGJhc2VDbGFzcyArICctdG9nZ2xlJztcclxuXHRcdGNvbnN0IGJ0blRvZ2dsZU1vcmVDbGFzcyA9IGJ0blRvZ2dsZUNsYXNzICsgJy0tbW9yZSc7XHJcblxyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0XHRcdHZpc2libGVCbG9ja3M6IDgsXHJcblx0XHRcdHBvc2l0aW9uVG9nZ2xlOiAnb3V0c2lkZScsXHJcblx0XHRcdG1vcmVCdG5Db250ZW50OiBcItCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XCIsXHJcblx0XHRcdGxlc3NCdG5Db250ZW50OiBcItCh0LrRgNGL0YLRjFwiLFxyXG5cdFx0fVxyXG5cclxuXHRcdE9iamVjdC5hc3NpZ24oc2V0dGluZ3MsIG9wdGlvbnMpO1xyXG5cclxuXHRcdHZpc2libGVDb3VudCA9ICRlbC5kYXRhc2V0LmluY29tcGxldGVDb3VudCB8fCBzZXR0aW5ncy52aXNpYmxlQmxvY2tzO1xyXG5cclxuXHRcdGlmICgkZWwuY2hpbGRyZW4ubGVuZ3RoIDw9ICt2aXNpYmxlQ291bnQpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHQkaGlkZGVuRWxzID0gQXJyYXkuZnJvbSgkZWwuY2hpbGRyZW4pLmZpbHRlcigoJGl0ZW0sIGlkeCkgPT4ge1xyXG5cdFx0XHQkaXRlbS5jbGFzc0xpc3QuYWRkKGl0ZW1DbGFzcyk7XHJcblx0XHRcdGlmIChpZHggPiB2aXNpYmxlQ291bnQgLSAxKSB7XHJcblx0XHRcdFx0JGl0ZW0uY2xhc3NMaXN0LmFkZChoaWRkZW5JdGVtQ2xhc3MpO1xyXG5cdFx0XHRcdHJldHVybiAkaXRlbTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0JHRvZ2dsZS5pbm5lckhUTUwgPSBzZXR0aW5ncy5tb3JlQnRuQ29udGVudDtcclxuXHRcdCR0b2dnbGUuY2xhc3NOYW1lID0gYnRuVG9nZ2xlQ2xhc3MgKyBcIiBcIiArIGJ0blRvZ2dsZU1vcmVDbGFzcztcclxuXHJcblx0XHRpZiAodHlwZW9mIHNldHRpbmdzLmJ0bkNsYXNzZXMgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdCR0b2dnbGUuY2xhc3NOYW1lID0gc2V0dGluZ3MuYnRuQ2xhc3NlcyArIFwiIFwiICsgJHRvZ2dsZS5jbGFzc05hbWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLnBvc2l0aW9uVG9nZ2xlID09PSAnaW5zaWRlJykge1xyXG5cdFx0XHQkZWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCAkdG9nZ2xlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRlbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgJHRvZ2dsZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0JHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGV4cGFuZGVkTGlzdENsYXNzKSkge1xyXG5cdFx0XHRcdCR0b2dnbGUuY2xhc3NMaXN0LmFkZChidG5Ub2dnbGVNb3JlQ2xhc3MpO1xyXG5cdFx0XHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKGV4cGFuZGVkTGlzdENsYXNzKTtcclxuXHRcdFx0XHQkaGlkZGVuRWxzLm1hcChpdGVtID0+IHsgaXRlbS5jbGFzc0xpc3QuYWRkKGhpZGRlbkl0ZW1DbGFzcykgfSk7XHJcblx0XHRcdFx0JHRvZ2dsZS5pbm5lckhUTUwgPSBzZXR0aW5ncy5tb3JlQnRuQ29udGVudDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoYnRuVG9nZ2xlTW9yZUNsYXNzKTtcclxuXHRcdFx0XHQkZWwuY2xhc3NMaXN0LmFkZChleHBhbmRlZExpc3RDbGFzcyk7XHJcblx0XHRcdFx0JGhpZGRlbkVscy5tYXAoaXRlbSA9PiB7IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5JdGVtQ2xhc3MpIH0pO1xyXG5cdFx0XHRcdCR0b2dnbGUuaW5uZXJIVE1MID0gc2V0dGluZ3MubGVzc0J0bkNvbnRlbnQ7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiAkZWw7XHJcblx0fVxyXG59XHJcblxyXG4vKioqKioqIFVUSUxTICoqKioqKi9cclxuZnVuY3Rpb24gaXNFbGVtKHNlbGVjdG9yKSB7XHJcblx0cmV0dXJuIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkgPyB0cnVlIDogZmFsc2U7XHJcbn0iXX0=
