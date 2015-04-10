interactive("open-hacker-news", "Go to hacker news", "follow-new-buffer", $browser_object="https://news.ycombinator.com/");
interactive("open-jupiter-broadcasting", "Go to jupiter broadcasting", "follow-new-buffer", $browser_object="http://www.jupiterbroadcasting.com/");
interactive("open-nvl-blog", "Go to jupiter broadcasting", "follow-new-buffer", $browser_object="http://nguyenvinhlinh.github.io");
interactive("open-github", "Go to github", "follow-new-buffer", $browser_object="https://github.com/");

define_key(content_buffer_normal_keymap, "f1", "open-hacker-news");
define_key(content_buffer_normal_keymap, "f2", "open-jupiter-broadcasting");
define_key(content_buffer_normal_keymap, "f3", "open-github")
define_key(content_buffer_normal_keymap, "f4", "open-nvl-blog")
define_key(content_buffer_normal_keymap, "C-p", "paste-url-new-buffer");
