$(document).ready(function(){
  $('a[rel=popover]').popover({
    html: true,
    trigger: 'hover',
    placement: 'bottom',
    content: function(){return '<center><img src="'+$(this).data('img') + '" height="100%" width="100%"/></center>';}
  });
})
