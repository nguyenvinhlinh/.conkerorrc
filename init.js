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

