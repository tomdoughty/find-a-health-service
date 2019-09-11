/*
JS FOR FILTERS
*/

$(document).ready(function(){
    $('#results div').show();
    $('input[type="checkbox"]').click(function(){
         select()
     })
  /*
      $(".nhsuk-checkboxes__item").change(function(){
        $('input[type=checkbox]:checked').each(function() {
          var filterId = $(this).val();
          alert("filter- "+filterId);
          $("#dentistList").children('div').each(function(){
            var divId = $(this).attr("id");
            if(divId==filterId){
              $("#"+divId).show();
            }else{
              //alert("hide: "+divId);
              $("#"+divId).attr("style","display:none");
            }
          });
        });
      });
      */
  });
  function select()
  {
      $('#results div').hide();
      var $div=$('#results div');
      var check=false;
      var filter = [];
      $('.nhsuk-checkboxes').each(function()
      {
          filter = [];
        check = false;
          $(this).find('input[type="checkbox"]:checked').each(function()
        {
              var css=$(this).val();
              filter.push('.'+css);
              check = true;
          });
          if (check)
        {
            $div = $div.filter(filter.join(','));
        }
      })
      $div.show();
  }