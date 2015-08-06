// JavaScript Document

 jQuery(document).ready(function ($) {
           
            var _SlideshowTransitions = [
            //Fade
            { $Duration: 1200, $Opacity: 2 }
            ];

            var options = {
                $SlideDuration: 500,                                
                $DragOrientation: 1,                                
                $AutoPlay: true,                                    
                $AutoPlayInterval: 1500,                            
                $SlideshowOptions: {                                
                    $Class: $JssorSlideshowRunner$,                 
                    $Transitions: _SlideshowTransitions,            
                    $TransitionsOrder: 1,                           
                    $ShowLink: true                                   
                },
				 $ArrowNavigatorOptions: {                      
                    $Class: $JssorArrowNavigator$,              
                    $ChanceToShow: 1,                               
                    $AutoCenter: 2,                                 
                    $Steps: 1                                       
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);

        });
