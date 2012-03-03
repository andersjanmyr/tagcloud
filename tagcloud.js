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
                TagCloud(this, 'cloud', plugin.settings);
            });
        };



        return init();
    };

    var TagCloud = function(el, id, settings) {
        $(el).append(makeCanvas(id));
        var canvas = document.getElementById(id);
        var ctx = canvas.getContext('2d');
        var tags = settings.tags;
        console.log(tags);
        for (var tag in tags)
            addWord(tag, tags[tag]);

        function makeCanvas(id) {
            var w = settings.width;
            var h = settings.height;
            return '<canvas id="' + id + '" width="' + w + '" height="' + h + '"></canvas>';
        }

        function addWord(word, size) {
            ctx.fillText(word, 10, size);
        }

        return {
            addWord: addWord
        };
    };

})(jQuery);

