$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'includes/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})

$('.first-option').hide();

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $("[data-toggle=popover]").popover({
          html : true,
          content: function() {
              var content = $(this).attr("data-popover-content");
              return $(content).children(".popover-body").html();
          }
          // title: function() {
          //     var title = $(this).attr("data-popover-content");
          //     return $(title).children(".popover-heading").html();
          // }
  });
  // $("[data-toggle=popover]").popover("show");
})