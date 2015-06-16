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
define_key(youtube_player_keymap, "C-M", "download-video-2-music" );
define_key(youtube_player_keymap, "C-D", "download-video-2-downloads" );
