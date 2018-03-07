let homeText = [
	"Welcome to the <b>emelent</b> version 1.0. alpha.\n",
	"The system is still in development  and as a result may not be fully functional."
	// "Is this your first time  on the system?"
];
let profileText = [
	"I’m not qualified to do any of the things I do... ",
	"They still get done though. ",
	"I don’t ",
	"\"think outside the box\" ",
	"gosh... ",
	"that’s such an inside the box thing to say."
]
let index = 0;
let fin=!1;

const setText = text => ({
	speed: 70,
	mistype: 0,
	fin: function(){
		if(fin==!1){
			console.log('fin =>',  fin)
			fin=!!1; //avoids triggering after 'add' cmd
			setTimeout(function(){
				if(index < text.length){
					fin = !1;
					$('#txt').t('add', text[index++]);
				}else{
					$('.-comm-box').toggleClass('-active')
				}
			}, 840);
		}
	}
})

$('#txt').t(setText(homeText));
$('#txt .t-caret').hide();