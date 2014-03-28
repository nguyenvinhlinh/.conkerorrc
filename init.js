require("favicon.js");
require("new-tabs.js");
tab_bar_show_icon=true;
tab_bar_show_index=true;

define_key(content_buffer_normal_keymap, "y", "copy");
define_key(default_global_keymap, "C-[", "buffer-previous");
define_key(default_global_keymap,"C-]","buffer-next" );
define_key(content_buffer_normal_keymap, "C-x f", "follow-new-buffer");
define_key(default_global_keymap, "C-k", "kill-current-buffer");
define_webjump("g", "https://www.google.com.vn/?gws_rd=cr&ei=K_QCU4GdNI3skgXGuoHgBQ#q=%s");
define_webjump("y", "http://www.youtube.com/results?search_query=%s");
define_key(default_global_keymap, "C-D", "download-youtube-video" );
//auto save exist buffers in conkeror
require("session.js"); 
session_auto_save_auto_load = true; 

// delete interactive_commands["password-manager"];

//facebook mode from tran xuan truong
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
/// alternative key for ESC
require("global-overlay-keymap");
define_key_alias("M-o", "escape");

//History completetion
url_completion_use_history = true;
session_pref('browser.history_expire_days', 365);

//echo message
function echo_message (window, message) {
    window.minibuffer.message(message);
}

interactive("echo-message",
    "echo a user-supplied message in the minibuffer",
    function (I) {
        echo_message(
            I.window,
            (yield I.minibuffer.read($prompt = "message: ")));
    });

// mode line
require("mode-line.js");

// buffer count
add_hook("mode_line_hook", mode_line_adder(buffer_count_widget), true);
// loading buffer count
add_hook("mode_line_hook", mode_line_adder(loading_count_widget), true);


//Stop loading all buffer
define_key(default_global_keymap, "M-R",
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
interactive("download-youtube-video","Download current playing video.",
			function(I){
			  var path = I.buffer.current_uri.path;
			  path = path.substr(9,30);
			  //I.minibuffer.message("Link is: "+ newUrl);
			  shell_command_blind("cclive --output-dir=/home/nguyenvinhlinh/Downloads \"https://www.youtube.com/watch?v=\""+ path);
			});
