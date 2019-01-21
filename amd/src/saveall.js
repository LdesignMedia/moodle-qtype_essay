define(['jquery'], function ($) {
    var style = '.loading {\n' +
        '  position: fixed;\n' +
        '  z-index: 99999;\n' +
        '  height: 2em;\n' +
        '  width: 2em;\n' +
        '  overflow: visible;\n' +
        '  margin: auto;\n' +
        '  top: 0;\n' +
        '  left: 0;\n' +
        '  bottom: 0;\n' +
        '  right: 0;\n' +
        '}\n' +
        '\n' +
        '.loading:before {\n' +
        '  content: \'\';\n' +
        '  display: block;\n' +
        '  position: fixed;\n' +
        '  top: 0;\n' +
        '  left: 0;\n' +
        '  width: 100%;\n' +
        '  height: 100%;\n' +
        '  background-color: rgba(0,0,0,0.3);\n' +
        '}\n' +
        '\n' +
        '/* :not(:required) hides these rules from IE9 and below */\n' +
        '.loading:not(:required) {\n' +
        '  /* hide "loading..." text */\n' +
        '  font: 0/0 a;\n' +
        '  color: transparent;\n' +
        '  text-shadow: none;\n' +
        '  background-color: transparent;\n' +
        '  border: 0;\n' +
        '}\n' +
        '\n' +
        '.loading:not(:required):after {\n' +
        '  content: \'\';\n' +
        '  display: block;\n' +
        '  font-size: 10px;\n' +
        '  width: 1em;\n' +
        '  height: 1em;\n' +
        '  margin-top: -0.5em;\n' +
        '  -webkit-animation: spinner 1500ms infinite linear;\n' +
        '  -moz-animation: spinner 1500ms infinite linear;\n' +
        '  -ms-animation: spinner 1500ms infinite linear;\n' +
        '  -o-animation: spinner 1500ms infinite linear;\n' +
        '  animation: spinner 1500ms infinite linear;\n' +
        '  border-radius: 0.5em;\n' +
        '  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n' +
        '  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n' +
        '}\n' +
        '@-webkit-keyframes spinner {\n' +
        '  0% {\n' +
        '    -webkit-transform: rotate(0deg);\n' +
        '    -moz-transform: rotate(0deg);\n' +
        '    -ms-transform: rotate(0deg);\n' +
        '    -o-transform: rotate(0deg);\n' +
        '    transform: rotate(0deg);\n' +
        '  }\n' +
        '  100% {\n' +
        '    -webkit-transform: rotate(360deg);\n' +
        '    -moz-transform: rotate(360deg);\n' +
        '    -ms-transform: rotate(360deg);\n' +
        '    -o-transform: rotate(360deg);\n' +
        '    transform: rotate(360deg);\n' +
        '  }\n' +
        '}\n' +
        '@-moz-keyframes spinner {\n' +
        '  0% {\n' +
        '    -webkit-transform: rotate(0deg);\n' +
        '    -moz-transform: rotate(0deg);\n' +
        '    -ms-transform: rotate(0deg);\n' +
        '    -o-transform: rotate(0deg);\n' +
        '    transform: rotate(0deg);\n' +
        '  }\n' +
        '  100% {\n' +
        '    -webkit-transform: rotate(360deg);\n' +
        '    -moz-transform: rotate(360deg);\n' +
        '    -ms-transform: rotate(360deg);\n' +
        '    -o-transform: rotate(360deg);\n' +
        '    transform: rotate(360deg);\n' +
        '  }\n' +
        '}\n' +
        '@-o-keyframes spinner {\n' +
        '  0% {\n' +
        '    -webkit-transform: rotate(0deg);\n' +
        '    -moz-transform: rotate(0deg);\n' +
        '    -ms-transform: rotate(0deg);\n' +
        '    -o-transform: rotate(0deg);\n' +
        '    transform: rotate(0deg);\n' +
        '  }\n' +
        '  100% {\n' +
        '    -webkit-transform: rotate(360deg);\n' +
        '    -moz-transform: rotate(360deg);\n' +
        '    -ms-transform: rotate(360deg);\n' +
        '    -o-transform: rotate(360deg);\n' +
        '    transform: rotate(360deg);\n' +
        '  }\n' +
        '}\n' +
        '@keyframes spinner {\n' +
        '  0% {\n' +
        '    -webkit-transform: rotate(0deg);\n' +
        '    -moz-transform: rotate(0deg);\n' +
        '    -ms-transform: rotate(0deg);\n' +
        '    -o-transform: rotate(0deg);\n' +
        '    transform: rotate(0deg);\n' +
        '  }\n' +
        '  100% {\n' +
        '    -webkit-transform: rotate(360deg);\n' +
        '    -moz-transform: rotate(360deg);\n' +
        '    -ms-transform: rotate(360deg);\n' +
        '    -o-transform: rotate(360deg);\n' +
        '    transform: rotate(360deg);\n' +
        '  }\n' +
        '}';

    var module = {

        /**
         * Load inline form editors
         */
        comment_grade: function () {

            $('.manualgraded .content div.comment').each(function (e) {
                var $el = $(this);
                var commentlink = $el.find('.commentlink a').attr('href');

                $.ajax({
                    'type': 'get',
                    'url' : commentlink.replace('/mod/quiz/', '/question/type/essay/'),
                }).done(function (response) {
                    $form = $(response);
                    $form.find('.info, .qtext, .history , .accesshide, .ablock').remove();
                    $form.appendTo($el);
                });
            });
        },

        init: function () {
            console.log('qtype saveall v1.1');

            this.comment_grade();

            $('a.mod_quiz-next-nav').on('click', function (e) {
                e.preventDefault();
                $('body').append('<style>' + style + '</style><div class="loading">Loading&#8230;</div>');

                var href = $(this).attr('href');
                $(document).ajaxStop(function () {
                    window.location = href;
                    // window.location.reload();
                });

                $('#page form').each(function (e) {
                    var $form = $(this);
                    $.ajax({
                        type: $form.attr('method'),
                        url : $form.attr('action'),
                        data: $form.serialize()
                    }).done(function (data) {
                        // Optionally alert the user of success here...
                        console.log('Completed');
                    }).fail(function (data) {
                        // Optionally alert the user of an error here...
                        console.log('Failed', data);
                    });
                });
            })
        }
    };

    return {
        initialise: function () {
            // Saving all forms.
            $(document).ready(function () {
                module.init();
            });
        }
    };
});