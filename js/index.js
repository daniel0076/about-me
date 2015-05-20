$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['me','exp','skills'],
    menu: '#navbar',
    continuousVertical: false,
    scrollingSpeed: 1000,
    css3:true,
    sectionsColor : ['#EEEEEE', '#EEEEEE','#EEEEEE'],
  });
  $('.basic')
    .progress({
      label: 'ratio',
      text: {
        ratio: 'Basic'
      }
    })
  ;
  $('.notbad')
    .progress({
      label: 'ratio',
      text: {
        ratio: 'Not Bad'
      }
    })
  ;
  $('.good')
    .progress({
      label: 'ratio',
      text: {
        ratio: 'Good'
      }
    })
  ;
});
