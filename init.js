dumpln("hello, world!");
require("favicon.js");
require("new-tabs.js");
tab_bar_show_icon=true;
tab_bar_show_index=true;

define_key(content_buffer_normal_keymap, "y", "copy");
define_key(default_global_keymap, "C-[", "buffer-previous");
define_key(default_global_keymap,"C-]","buffer-next" );
define_key(content_buffer_normal_keymap, "C-x f", "follow-new-buffer");
define_key(default_global_keymap, "C-q", "kill-current-buffer");
define_webjump("gg", "https://www.google.com.vn/?gws_rd=cr&ei=K_QCU4GdNI3skgXGuoHgBQ#q=%s");
define_webjump("y", "http://www.youtube.com/results?search_query=%s");
define_webjump("g", "https://duckduckgo.com/?q=%s&ia=about");
define_key(default_global_keymap, "C-M", "download-video-2-music" );
define_key(default_global_keymap, "C-D", "download-video-2-downloads" );
//auto save exist buffers in conkeror
require("session.js"); 
session_auto_save_auto_load = true; 
//define default download directory
cwd=get_home_directory();
cwd.append("Downloads");

// delete interactive_commands["password-manager"];
//Conkeror extended facebook mode
let (path = get_home_directory()) {
  // add to load path
  path.appendRelativePath(".conkerorrc");
  path.appendRelativePath("conkeror-extended-facebook-mode");
  load_paths.unshift(make_uri(path).spec);
  // include the library
  require("conkeror-extended-facebook-mode.js");  
};
define_key(facebook_keymap, "1", "cefm-open-friend-request");
define_key(facebook_keymap, "2", "cefm-open-messages");
define_key(facebook_keymap, "3", "cefm-open-notification");
define_key(facebook_keymap, "4", "cefm-open-home");
define_key(facebook_keymap, "M-q", "cefm-quick-logout");
//Conkeror extended haivl mode

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
//This path is for Haivl mode and its config
let (path = get_home_directory()) {
  // add to load path
  path.appendRelativePath(".conkerorrc");
  path.appendRelativePath("conkeror-extended-haivl-mode");
  load_paths.unshift(make_uri(path).spec);
  // include the library
  require("haivl.js");
};
define_key(haivl_keymap, "1", "haivl-1");
define_key(haivl_keymap, "2", "haivl-2");
define_key(haivl_keymap, "3", "haivl-3");
define_key(haivl_keymap, "4", "haivl-4");
define_key(haivl_keymap, "5", "haivl-5");
define_key(haivl_keymap, "M-c", "haivl-seemore");

let (path = get_home_directory()) {
  // add to load path
  path.appendRelativePath(".conkerorrc");
  path.appendRelativePath("conkeror-extended-genk-mode");
  load_paths.unshift(make_uri(path).spec);
  require("genk.js");
};

// keyboard shortcut for often-used sites
interactive("open-hacker-news", "Go to hacker news", "follow-new-buffer", $browser_object="https://news.ycombinator.com/");
interactive("open-jupiter-broadcasting", "Go to jupiter broadcasting", "follow-new-buffer", $browser_object="http://www.jupiterbroadcasting.com/");
define_key(content_buffer_normal_keymap, "f1", "open-hacker-news");
define_key(content_buffer_normal_keymap, "f2", "open-jupiter-broadcasting");


