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
//define default download directory
cwd=get_home_directory();
cwd.append("Downloads");
// mode line
require("mode-line.js");
add_hook("mode_line_hook", mode_line_adder(buffer_count_widget), true);
add_hook("mode_line_hook", mode_line_adder(loading_count_widget), true);

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
require("linh-general-keymap.js");

url_completion_use_bookmarks = true;
url_completion_use_history = true;
session_auto_save_auto_load = true; 
url_completion_use_history = true;
session_pref('browser.history_expire_days', 365);
tab_bar_show_icon=true;
tab_bar_show_index=true;
