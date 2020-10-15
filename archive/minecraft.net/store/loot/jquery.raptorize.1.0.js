function raptorize () {
    // Determine Entrance
    if(options.enterOn == 'timer') {
        setTimeout(init, options.delayTime);
    } else if(options.enterOn == 'click') {
        _this.bind('click', function(e) {
            e.preventDefault();
            if(!locked) {
                init();
            }
        })
    } else if(options.enterOn == 'konami-code'){
        var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
        $(window).bind("keydown.raptorz", function(e){
            kkeys.push( e.keyCode );
            if ( kkeys.toString().indexOf( konami ) >= 0 ) {
                init();
                $(window).unbind('keydown.raptorz');
            }
        }, true);
    };
};
