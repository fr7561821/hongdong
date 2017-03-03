/**
 * Created by Administrator on 2017/3/2.
 */
$(function (){
    // 轮播图请求
    $.get({
        url:"http://czdm.ittun.com/api/getlunbo",
        success:function (data){
            data = {list:data}
            var html = template('slideTmp',data);
            console.log(html);
            $('.carousel-inner').html(html);
            $('.carousel-inner .item').eq(0).addClass("active");
        }
    })
    
    // 弹出菜单栏
    var pop = $("#pop");
    var layout = $("#layout");
    pop.click(function (){
        
    })
    
    // tab栏点击事件请求数据
    $("#cartoon>.nav>li>a").click(function (){
        console.log($(this).data('type'));
        console.log($(this).attr('href'));
        getCartoonList($(this).data('type'),$(this).attr('href'))
    })
    getCartoonList(1,"#home")
    // tab栏请求数据
    function getCartoonList(type,href){
        $.ajax({
            url:"http://czdm.ittun.com/api/gethometab/"+type,
            success:function (data){
                var html = template('cartoonTab',{list:data});
                $(href).html(html);
            }
        })
    }
    
    
    
})