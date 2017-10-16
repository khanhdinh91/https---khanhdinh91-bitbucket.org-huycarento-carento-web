$(document).ready(function(){
    $(window).resize();
});

$(window).resize(function () {
    var widthWindow = $(this).width();
    if (widthWindow > 2300) {
        window.state = 'WQXGA';
    } else if (widthWindow > 1720) {
        window.state = 'FullHD';
    }  else if (widthWindow > 1220) {
        window.state = 'WXGA';
    }  else if (widthWindow >= 900) {
        window.state = 'XGA';
    }   else if (widthWindow > 600) {
        window.state = 'VGA';
    }   else if (widthWindow < 600) {
        window.state = 'QVGA';
    }
    fullpageInit();
    btnclick();

});
function fullpageInit () {
    switch (window.state) {
        case 'WQXGA':
        case 'FullHD':
        case 'WXGA':
        case 'XGA':
            if (!this.init) {
                this.init = true;
                var numberOfSections = 0;
                $('#fullpage').fullpage({
                    navigation: false,
                    // anchors: ['section0','section1','section2','section3'],
                    menu: '#menu',
                    css3: true,
                    scrollingSpeed: 1000,

                    afterRender: function()
                    {

                        (function(){

                            var items = $('.box-logo, .box-review');
                            if(items.length)
                            {
                                numberOfSections = items.length;
                                var objs = [];
                                for(var i=0;i<items.length;i++)
                                    objs.push( $(items[i]) );

                                function onResize(ww,wh){
                                    var ww = $(window).width(),
                                        wh = $(window).height(),
                                        maxWidth = 0,
                                        maxHeight = 0,
                                        wx = 1,
                                        hx = 1;

                                    for(var i=0;i<objs.length;i++)
                                    {
                                        objs[i].css({ 'transform' : 'scale(1)' });
                                    }

                                    if(ww < 900) return;

                                    for(var i=0;i<objs.length;i++)
                                    {
                                        objs[i].css({ 'transform' : 'scale(1)' });
                                        maxWidth = Math.max(objs[i].width(),maxWidth);
                                        maxHeight = Math.max(objs[i].height(),maxHeight);
                                    }

                                    var pad = Math.round(160 * ( ww / 1400 ) );
                                    // maxBlockWidth  = ww - 100,
                                    maxBlockHeight = wh - pad;
                                    // console.log(wh);
                                    // console.log(pad);
                                    // if( maxWidth > maxBlockWidth )
                                    // {
                                    //   wx = 1;//maxBlockWidth / maxWidth;
                                    // }

                                    if( maxHeight > maxBlockHeight )
                                    {
                                        hx = maxBlockHeight / maxHeight;
                                    }
                                    // console.log(maxBlockHeight);
                                    // console.log(maxHeight);
                                    var scale = Math.min(wx,hx,1);

                                    for(var i=0;i<objs.length;i++)
                                    {
                                        objs[i].css({ 'transform' : 'scale(' + scale + ')', });
                                    }

                                }
                                window.fullpageResize = onResize;
                                $(window).resize(onResize);
                                onResize();
                            }
                        })();
                    }

                });
            }
            break;
        case 'VGA':
        case 'QVGA':
            if(this.init)
            {
                $('#fullpage').fullpage.destroy('all');
                this.init = false;
            }
            break;
    }
}

function btnclick() {
    $(".box-dv .btn-dv").click(function () {
        var idNav = $(this).data("id");
        console.log(idNav);
        $("#f-n"+idNav).fadeIn('fast');
        $("#f-n"+idNav).data('hidden', false);
        $(".f-nB"+idNav).addClass('active')

    })

}