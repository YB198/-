var yyb = (function(){
    return{
        init(){
            this.event();
        },
        event(){
            $('li').stop().on('mouseenter', function(){
                $(this).css('top','-1px');
                $(this).css('box-shadow','0px 10px 20px #999');
                $(this).children("div:last-child").slideDown(150);
            })
            $('.dfb').on('mouseenter', function(){
                $(this).css('margin-top','-1px');
                $(this).css('box-shadow','0px 10px 20px #999');
            })
            $('.sdj').on('mouseenter', function(){
                $(this).css('margin-top','-1px');
                $(this).css('box-shadow','0px 10px 20px #999');
            })
            $('li').stop().on('mouseleave', function(){
                $(this).css('top','0px');
                $(this).css('box-shadow','none');
                $(this).children("div:last-child").slideUp(150);
            })
            $('.dfb').on('mouseleave', function(){
                $(this).css('margin-top','0px');
                $(this).css('box-shadow','none');
            })
            $('.sdj').on('mouseleave', function(){
                $(this).css('margin-top','0px');
                $(this).css('box-shadow','none');
            })

        }
    }
}());
yyb.init();