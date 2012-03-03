// jQuery Plugin 
(function($) {

    $.fn.tagcloud = function(options) {
        var plugin = this;
        
        $.fn.tagcloud.defaults = {
            width: '600px',
            height: '400px'
        };

        plugin.settings = {};


        var init = function() {
            plugin.settings = $.extend({}, $.fn.tagcloud.defaults, options);
            plugin.click(function() {
                $(this).trigger('click.tagcloud', 'clicked');
            });
            return plugin.each(function() {
                $(this).append(plugin._makeCanvas());
                var canvas = document.getElementById('cloud');  
                var ctx = canvas.getContext('2d');  
            });
        };

        plugin._makeCanvas = function() {
            var w = plugin.settings.width;
            var h = plugin.settings.height;
            return '<canvas id="cloud" width="' + w + '" height="'+ h +'"></canvas>';
        };


        return init();

    };

})(jQuery);

