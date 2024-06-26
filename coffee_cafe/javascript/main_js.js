jQuery(document).ready(function(){

    let slider_add = 0;
    let bullet_num = 0;
    $(".slide").append($(".slide > .slider").first().clone(true));

    setInterval(function(){

        $(function(){
            $('.bullet input[type=radio]:nth-child(1)').click(function(){
                slider_add = 0;
                bullet_num = 0;
                $('.slide').animate({marginLeft: -0 * 1050 + "px"},900);
                $('.bullet input[type=radio]:nth-child(1)').add(checked);
            });
        });
        $(function(){
            $('.bullet input[type=radio]:nth-child(2)').click(function(){
                slider_add = 1;
                bullet_num = 1;
                $('.slide').animate({marginLeft: -1 * 1050 + "px"},900);
                $('.bullet input[type=radio]:nth-child(2)').add(checked);
            });
        });
        $(function(){
            $('.bullet input[type=radio]:nth-child(3)').click(function(){
                slider_add = 2;
                bullet_num = 2;
                $('.slide').animate({marginLeft: -2 * 1050 + "px"},900);
                $('.bullet input[type=radio]:nth-child(3)').add(checked);
            });
        });
        $(function(){
            $('.bullet input[type=radio]:nth-child(4)').click(function(){
                slider_add = 3;
                bullet_num = 3;
                $('.slide').animate({marginLeft: -3 * 1050 + "px"},900);
                $('.bullet input[type=radio]:nth-child(4)').add(checked);
            });
        });
        $(function(){
            $('.bullet input[type=radio]:nth-child(5)').click(function(){
                slider_add = 4;
                bullet_num = 4;
                $('.slide').animate({marginLeft: -4 * 1050 + "px"},900);
                $('.bullet input[type=radio]:nth-child(5)').add(checked);
            });
        });

        slider_add++;

        $(".slide").animate({marginLeft: -slider_add * 1050 + "px"},900);
        if(slider_add == 5){
            setTimeout(function(){
                $(".slide").animate({marginLeft:0},0);
                slider_add = 0;
            },1500)
        } 

        bullet_num++;

        const radio_Check = document.querySelectorAll("[type='radio']");           
        radio_Check[bullet_num].checked = true;
        if(bullet_num == 5){
            setTimeout(function(){
                radio_Check[0].checked = true;
                bullet_num = 0;
            },200)
        } 

    },5000);

});