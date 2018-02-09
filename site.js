const f = q => document.querySelector(q)
const a = q => document.querySelectorAll(q)
const attach = (q, e, f) => 
	a(q).forEach(el => el.addEventListener(e, f))

const activate = (q, id) => {
	if(id){
		a(q).forEach(el => el.classList.remove('-active'))
		f(q + '[data-id="'+ id + '"]').classList.add('-active')
	}else{
		a(q).forEach(el => el.classList.add('-active'))
	}
}

const deactivate = q => 
	a(q).forEach(el => el.classList.remove('-active'))

const toggleActive = q =>
	a(q).forEach(el => el.classList.toggle('-active'))


	var text = [
		"Welcome to the <b>emelent</b> version 1.0. ",
		"Is this your first time  on the system?"
	];
	var index = 0;
	var fin=!1;

	function getProps(){
		return {
			speed: 100,
			speed_vary:false,
			mistype: 0,
			fin: function(){
				if(fin==!1){
					fin=!!1; //avoids triggering after 'add' cmd
					setTimeout(function(){
						if(index < text.length){
							fin = !1;
							$('#txt').t('add', text[index++]);
						}else{
							$('#txt .t-caret').hide();
							$('#enter').show();
						}
						activate('.-message-box')
					}, 1240);
				}
			}
		}
	}

	$('#txt').t(getProps());