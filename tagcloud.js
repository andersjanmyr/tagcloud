// jQuery Plugin
(function($) {

    $.fn.tagcloud = function(options) {
        var plugin = this;

        $.fn.tagcloud.defaults = {
            width: '600px',
            height: '400px',
            tags: {
                Ruby: 50,
                CSharp: 30,
                Java: 20,
                PHP: 10,
                Lua: 10,
                Python: 20,
                Javascript: 90
            }
        };

        plugin.settings = {};


        var init = function() {
            plugin.settings = $.extend({}, $.fn.tagcloud.defaults, options);
            plugin.click(function() {
                $(this).trigger('click.tagcloud', 'clicked');
            });
            return plugin.each(function() {
                plugin._createCloud();
            });
        };

        plugin._makeCanvas = function() {
            var w = plugin.settings.width;
            var h = plugin.settings.height;
            return '<canvas id="cloud" width="' + w + '" height="' + h + '"></canvas>';
        };

        plugin._createCloud = function() {
            $(this).append(plugin._makeCanvas());
            var canvas = document.getElementById('cloud');
            var ctx = canvas.getContext('2d');
            var tags = plugin.settings.tags;
            for (var tag in tags)
                plugin._addWord(ctx, tag, tags[tag]);
        };

        plugin._addWord = function(ctx, word, size) {
            ctx.fillText(word, 10, size);
        };




        return init();
    };
    
})(jQuery);

