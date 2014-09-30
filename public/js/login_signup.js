/**
 *  This is a utility function to validate user name
 *  and password fields on both Login and Signup pages.
 */

function validateUserNameAndPassword() {
	
	
	var str = "about access account accounts add address adm admin administration adult advertising affiliate affiliates ajax analytics android anon anonymous api app apps archive atom auth authentication avatar backup banner banners bin billing blog blogs board bot bots business chat cache cadastro calendar campaign careers cgi client cliente code comercial compare config connect contact contest create code compras css dashboard data db design delete demo design designer dev devel dir directory doc docs domain download downloads edit editor email ecommerce forum forums faq favorite feed feedback flog follow file files free ftp gadget gadgets games guest group groups help home homepage host hosting hostname html http httpd https hpg info information image img images imap index invite intranet indice ipad iphone irc java javascript job jobs js knowledgebase log login logs logout list lists mail mail1 mail2 mail3 mail4 mail5 mailer mailing mx manager marketing master me media message microblog microblogs mine mp3 msg msn mysql messenger mob mobile movie movies music musicas my name named net network new news newsletter nick nickname notes noticias ns ns1 ns2 ns3 ns4 old online operator order orders page pager pages panel password perl pic pics photo photos photoalbum php plugin plugins pop pop3 post postmaster postfix posts profile project projects promo pub public python random register registration root ruby rss sale sales sample samples script scripts secure send service shop sql signup signin search security settings setting setup site sites sitemap smtp soporte ssh stage staging start subscribe subdomain suporte support stat static stats status store stores system tablet tablets tech telnet test test1 test2 test3 teste tests theme themes tmp todo task tasks tools tv talk update upload url user username usuario usage vendas video videos visitor win ww www www1 www2 www3 www4 www5 www6 www7 wwww wws wwws web webmail website websites webmaster workshop xxx xpg you yourname yourusername yoursite yourdomain";
    var res = str.split(" ");
	
  if($('#userName').val().trim() == "") {
    $('#alert').text('Please provide a username to continue');
    $('#alert').show();
    $('#passport_alert').remove();
    return false;
  }
  

  re = /^\w+$/g;
  if(!re.test($('#userName').val().trim())) {
	    $('#alert').text('Please do not include speccial characteristics');
	    $('#alert').show();
	    $('#passport_alert').remove();
	    return false;
	  }
  
  for (var i = 0; i < res.length ; ++i){
	  if( ($('#userName').val().trim() == res[i])) {
		  $('#alert').text("Please do not use this banned username");
		  $('#alert').show();
		  $('#passport_alert').remove();
	    return false;
	  }
}
	  
  
  if( ($('#passwd').val().trim() == "")) {
    $('#alert').text("Please provide a password to continue");
    $('#alert').show();
    $('#passport_alert').remove();
    return false;
  }
  
  if( $('#passwd').val().trim().length <5 ) {
	    $('#alert').text("Please enter password min 4");
	    $('#alert').show();
	    $('#passport_alert').remove();
	    return false;
	  }

  if( $('#passwd').val().trim()==$('#userName').val().trim() ) {
	    $('#alert').text("Please enter password different from username");
	    $('#alert').show();
	    $('#passport_alert').remove();
	    return false;
	  }
  
  if( $('#passwdRe').val().trim() == "" ) {
    $('#alert').text("Please re-enter password to continue");
    $('#alert').show();
    $('#passport_alert').remove();
    return false;
  }
  
  

  if( $('#passwd').val() != $('#passwdRe').val() ) {
    $('#alert').text('Passwords do not match');
    $('#alert').show();
    $('#passport_alert').remove();
    return false;
  }

  return true;
}
