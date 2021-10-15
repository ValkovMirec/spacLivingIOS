// This file is appended on each request for $webcontainer.
jQuery(document).ready(() => {
    let servicesUrl = "https://home.spaciable.com/service/";

    if(window.location.href==servicesUrl){
        // Remove Target _blank because they mess with iOS navigation

        jQuery('a[target="_blank"]').removeAttr("target");
        $agent.logger.log("Fixes Loaded");
        
        // Remove "Back arrow" from Spaciable Services site, "Finish"button, header and footer, and "Need more info" form
        
        $("img").remove(".arrow-bck-module");
        $("button").remove("#nextBtn4");
        $("div").remove("#need-more-information")
        $("header").remove("#main-header");
        $("footer").remove("#main-footer");
        
        //Function that finds link elements with "data-url" attribute, saves its value and adds that value to created "href" attribute
        
        $( "a" ).each(function( i ) {
            let linksAttribute = $(this).attr("data-url");
            
            if(linksAttribute){
                let dataLinkValue = $(this).data('url');
                $(this).attr('href', dataLinkValue);
            }
          });
    }
});


