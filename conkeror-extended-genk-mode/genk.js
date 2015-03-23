require("content-buffer.js");
define_page_mode("genk_mode",
       build_url_regexp($domain = "genk",
					    $allow_www = true,
					    $tlds = ["vn"]),	 
	   function enable (I){
	   },
	   function disable (buffer){
	   },
	   $display_name = "genk",
	   $doc = "A page mode for genk.vn");
//to active this mode automatically
page_mode_activate(genk_mode);
provide("genk");
