/*global tets */
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
tab_bar_show_icon=true;
tab_bar_show_index=true;

define_key(content_buffer_normal_keymap, "y", "copy");
define_key(default_global_keymap, "C-[", "buffer-previous");
define_key(default_global_keymap,"C-]","buffer-next" );
define_key(content_buffer_normal_keymap, "C-x f", "follow-new-buffer");
define_key(default_global_keymap, "C-q", "kill-current-buffer");
define_key(default_global_keymap, "C-M", "download-video-2-music" );
define_key(default_global_keymap, "C-D", "download-video-2-downloads" );

session_auto_save_auto_load = true; 
//define default download directory
cwd=get_home_directory();
cwd.append("Downloads");
/// alternative key for ESC
require("global-overlay-keymap");
define_key_alias("M-o", "escape");

//History completetion
url_completion_use_history = true;
session_pref('browser.history_expire_days', 365);
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

//download video from youtube using cclive
interactive("download-video-2-music","Download current playing video.",
			function(I){
			  var path = I.buffer.current_uri.path;
			  path = path.substr(9,30);
   			  I.minibuffer.message("Downloading video to folder Music ");
			  shell_command_blind("cclive -d /home/nguyenvinhlinh/Music \"https://www.youtube.com/watch?v=\""+ path);
			});

interactive("download-video-2-downloads","Download current playing video.",
			function(I){
			  var path = I.buffer.current_uri.path;
			  path = path.substr(9,30);
			  I.minibuffer.message("Downloading video to folder Downloads");
			  shell_command_blind("cclive -d /home/nguyenvinhlinh/Downloads \"https://www.youtube.com/watch?v=\""+ path);
			});
//view history 
url_completion_use_bookmarks = true;
url_completion_use_history = true;
require('page-modes/google-search-results.js');
user_pref('extensions.mozrepl.autoStart', true);
let (path = get_home_directory()) {
  // add to load path
  path.appendRelativePath("mozrepl.js");
  session_pref("extensions.mozrepl.initUrl", make_uri(path).spec);
}; 

let (path = get_home_directory()) {
  // add to load path
  path.appendRelativePath(".conkerorrc");
  path.appendRelativePath("conkeror-extended-genk-mode");
  load_paths.unshift(make_uri(path).spec);
  require("genk.js");
};
clock_time_format = "%R %B %d, %Y"

//remember lasted download dir
function update_save_path (info) {
    cwd = info.target_file.parent;
}
add_hook("download_added_hook", update_save_path);
define_browser_object_class("yc-links",
                            "yc news link",
                            xpath_browser_object_handler("//td[@class='title']/a"),
                            $hint = "select link");

interactive("follow-yc-links",
            "follow the news link on yc",
            "follow",
            $browser_object = browser_object_yc_links);
//tets