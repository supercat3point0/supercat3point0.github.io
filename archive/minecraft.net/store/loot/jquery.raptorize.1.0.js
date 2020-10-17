// don't know what this does but apparently it was in the original code, so i'm just going to comment it out
/*
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
*/


$("#checkout").click(function(){
    $("#raptorz").animate({
        bottom: '0'
    },"fast");
    $("#raptorz").animate({
        bottom: '-170px'
    },"fast");
    $("#raptorz").delay("fast")
    $("#raptorz").animate({
        left: '-512px',
        right: 'auto'
    },"fast");
    $("#raptorz").animate({
        bottom: '-747px',
        left: '0',
        right: '0px',
        top: 'auto'
    });
});
