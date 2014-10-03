(function($, document, window, undefined) {
  'use strict';

  var prodToggle = '[data-toggle="prod-type"]';
  var $prod = $('.prod');

  var ProdType = function(element) {
    $(element).on('click.prodType', this.selectType);
  }

  ProdType.prototype.selectType = function(e) {
    e.preventDefault();
    var $toggle = $(e.currentTarget);
    var typeSelector = '.js-' + $toggle.data('target');
    var generalTypeSelector = '.prod-type';

    $prod.height($(typeSelector).height());

    $(generalTypeSelector).removeClass('active');
    $(typeSelector).addClass('active');
    $('.prod-toggle').removeClass('active');
    $toggle.addClass('active');
  }

  $(document).on('click.prodType', prodToggle, ProdType.prototype.selectType);

})(jQuery, document, window);
