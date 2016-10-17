require.config({
    paths : {
        jquery : 'jquery-3.1.1.min'
    }
});
define(["jquery","window"], function($,w){
    $("#a").click(function(){
        var window = new w.Window();
            window.alert({
                width : 400,
                height : 200,
                title : "zhuyi",
                content : 'zhangshuyuan',
                handler : function(){
                                alert('hi!')
                               },
                y : 50,
                hasCloseBtn : true,
                skinClassName : "window_skin_a"
           });
    });
});