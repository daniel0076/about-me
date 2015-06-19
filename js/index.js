$(document).ready(function() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-64285085-2', 'auto');
  ga('send', 'pageview');


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
        ratio: 'Bewbie'
      }
    })
  ;
  $('.notbad')
    .progress({
      label: 'ratio',
      text: {
        ratio: 'Basic'
      }
    })
  ;
  $('.good')
    .progress({
      label: 'ratio',
      text: {
        ratio: 'Not Bad'
      }
    })
  ;
});
