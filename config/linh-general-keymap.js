define_key(content_buffer_normal_keymap, "y", "copy");
define_key(default_global_keymap, "C-[", "buffer-previous");
define_key(default_global_keymap,"C-]","buffer-next" );
define_key(content_buffer_normal_keymap, "C-x f", "follow-new-buffer");
define_key(default_global_keymap, "C-q", "kill-current-buffer");
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