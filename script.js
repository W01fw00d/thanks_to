$(document).ready(init);

function init() 
{
    rows_data = [
      {
        job: 'originated by', 
        name: 'the big bang',
      },
      {
        job: 'theorized by', 
        name: 'ada lovelace',
      },
      {
        job: 'hosted by', 
        name: 'github',
      },
      {
        job: 'originally coded by', 
        name: 'Oliver Knoblich',
      },
      {
        job: 'recoded by', 
        name: 'w01fw00d',
      },
      {
        job: 'learned by', 
        name: 'w3 schools',
      },
    ];
  
  rows_repetitions = 100;
    
    [...Array(rows_repetitions).keys()].forEach(function() {
      rows_data.forEach(function(element) {
        $('.wrapper table').append(
          "<tr>" +
            "<th class='job'>" + element.job + "</th>" +
            "<th class='name'>" + element.name + "</th>" +  
          "</tr>"
        );
      });
    });
    
    $('body').click(() => {
        var pause_class = 'paused_credits';
                
        if ($('.wrapper').hasClass(pause_class)) {
            $('.wrapper').removeClass(pause_class);
                      
          var names_items = $('.name');
          var counter = 0;
          
//          [...Array(rows_repetitions).keys()].forEach(function() {
//            rows_data.forEach(function(element) {
//              names_items.eq(counter).html(element.name);
//              counter++;
//            });
//          });
          $('.name').removeClass('color-black');

        } else {
          $('.wrapper').addClass(pause_class);
//          $('.name').html("some human beign");
          $('.name').addClass('color-black');
        };
    });
}
