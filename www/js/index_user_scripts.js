(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  {{title}} */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         activate_subpage("#more-weather2"); 
    });
    
        /* button  Back */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         activate_subpage("#uib_page_2"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
