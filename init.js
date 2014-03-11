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
require("session.js"); 
session_auto_save_auto_load = true; 
delete interactive_commands["password-manager"];



