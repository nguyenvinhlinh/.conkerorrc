function nvl_add_path(dir){
  let (path = get_home_directory()){
	path.appendRelativePath('.conkerorrc');
	path.appendRelativePath(dir);
	load_paths.unshift(make_uri(path).spec);
  };
};
nvl_add_path("config");
nvl_add_path("conkeror-extended-facebook-mode");
nvl_add_path("conkeror-extended-haivl-mode");
tab_bar_show_icon=true;
tab_bar_show_index=true;

define_key(content_buffer_normal_keymap, "y", "copy");
define_key(default_global_keymap, "C-[", "buffer-previous");
define_key(default_global_keymap,"C-]","buffer-next" );
define_key(content_buffer_normal_keymap, "C-x f", "follow-new-buffer");
define_key(default_global_keymap, "C-q", "kill-current-buffer");


//define default download directory
cwd=get_home_directory();
cwd.append("Downloads");
/// alternative key for ESC
require("global-overlay-keymap");
define_key_alias("M-o", "escape");
// mode line
require("mode-line.js");
// buffer count
add_hook("mode_line_hook", mode_line_adder(buffer_count_widget), true);
// loading buffer count
add_hook("mode_line_hook", mode_line_adder(loading_count_widget), true);
//Stop loading all buffer
define_key(default_global_keymap, "M-s",
          function (I)
          {
              for (var i = 0; i < I.window.buffers.count; i++)
              {
                  stop_loading(I.window.buffers.get_buffer(i));
              }
          });
//Reload all buffer
define_key(default_global_keymap, "M-r",
          function (I)
          {
              for (var i = 0; i < I.window.buffers.count; i++)
              {
                  reload(I.window.buffers.get_buffer(i));
              }
          });
//view history 
url_completion_use_bookmarks = true;
url_completion_use_history = true;
require('page-modes/google-search-results.js');
clock_time_format = "%R %B %d, %Y"
require("favicon.js");
require("new-tabs.js");
require("linh-url-shortcut.js");
require("linh-web-jump.js");
require("session.js");
require("conkeror-extended-facebook-mode.js");
require("linh-facebook-keymap.js");
require("conkeror-extended-haivl-mode.js");
require("linh-haivl-keymap.js");
require("linh-history-delete.js");
require("linh-youtube.js");
require("clicks-in-new-buffer.js");
session_auto_save_auto_load = true; 
url_completion_use_history = true;
session_pref('browser.history_expire_days', 365);
tab_bar_show_icon=true;
tab_bar_show_index=true;