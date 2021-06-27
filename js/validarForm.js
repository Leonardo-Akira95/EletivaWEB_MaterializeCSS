function validarFormCadastro(){
	
 	var formCadastroNome = document.forms["formCadastro"]["cadTxtNome"];
 	var formCadastroLogin = document.forms["formCadastro"]["cadTxtLogin"];
 	var formCadastroEmail = document.forms["formCadastro"]["cadTxtEmail"];
 	var formCadastroSenha = document.forms["formCadastro"]["cadTxtPwd"];
 	var formCadastroSenhaDois = document.forms["formCadastro"]["cadTxtPwdAgain"];

 		if(formCadastroNome.value == ""){
 			var cadNome = document.getElementById("cadNome");
 			cadNome.placeholder = "É necessário digitar o login para cadastrar!";
 			cadNome.style.border = "1px solid red";
 			$("#cadNome").css("box-shadow", "0 0 10px #dc143c");
 			cadNome.focus();
 			return false;
 		}if(formCadastroLogin.value == ""){
 			var cadLogin = document.getElementById("cadLogin");
 			cadLogin.placeholder = "É necessário digitar o login para cadastrar!";
 			cadLogin.style.border = "1px solid red";
 			$("#cadLogin").css("box-shadow", "0 0 10px #dc143c");
 			return false;
 		}if(formCadastroEmail.value == ""){
			var cadEmail = document.getElementById("cadEmail");
 			cadEmail.placeholder = "É necessário digitar o e-mail para cadastrar!";
 			cadEmail.style.border = "1px solid red";
 			$("#cadEmail").css("box-shadow", "0 0 10px #dc143c");
 			return false;
 		}if(formCadastroSenha.value == ""){
 			var cadSenha = document.getElementById("cadSenha");
 			cadSenha.placeholder = "É necessário digitar a senha para cadastrar!";
 			cadSenha.style.border = "1px solid red";
 			$("#cadSenha").css("box-shadow", "0 0 10px #dc143c");
 			return false;
 		}if(formCadastroSenhaDois.value == ""){
 			var cadSenhaDois = document.getElementById("cadSenhaDois");
 			cadSenhaDois.placeholder = "É necessário digitar sua senha novamente!";
 			cadSenhaDois.style.border = "1px solid red";
 			$("#cadSenhaDois").css("box-shadow", "0 0 10px #dc143c");
 			return false;
 		}if(formCadastroSenha != formCadastroSenhaDois){
 			$("#errTextCadastro").innerHTML = "As senhas não coincidem!";
 			$("#errTextCadastro").display = block;
 			$("#cadSenha").css("box-shadow", "0 0 10px #dc143c");
 			$("#cadSenhaDois").css("box-shadow", "0 0 10px #dc143c");
 			return false;
	 	}
	 	return true;
}