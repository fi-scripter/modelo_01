//26-09-21
//#Iniciando janela

//!evento 1

//@Parte 1 iniciar var como vetor e suas posiçes; 
$gameVariables.setValue(51,[0]); //Itens de Buscas
for(i=0;i<30;i++){$gameVariables.value(51)[i]=0;}; //for que pre carrega 30 posições na var 51
//@Parte 2
for(i=1;i<=51;i++){
$gameVariables.value(51)[i]={exploração:[],numeros:[]}; //Iniciando a var 51 com os banco de dados existentes, no caso exploração e numero.
}
var imported = document.createElement('script');
imported.src = 'js/JS_EX/modelo1_2021_v1_2_2021A.js';  //Importando script com banco de dados.
document.head.appendChild(imported);
//@parte 3 adicionar itens dos respectivos bancos de dados.
Num_Exploração(1,1,51,"exploração"); //I, A, V, DB. - adiciona o item 1 a posição 1 do vetor da var 51 do banco de dados "exploração"
Num_Exploração(1,2,51,"numeros"); //I, A, V , DB. - adiciona o item 1 a posição 2 do vetor da var 51 do banco de dados "numeros"


//!evento 2
◆Control Switches：#0037 = ON  //ativa a janela status
//Importar novamente o script 
var imported = document.createElement('script');
imported.src = 'js/JS_EX/modelo1_2021_v1_2_2021A.js';
document.head.appendChild(imported);
//Esperar 10 frames para dar tempo
◆Wait：10 frames
//Chamar função que carrega informaçoes de por exemplo exploração
EP_MostraEscolha_db(1,51,"exploração"); //1 é a posição no array, 51 é a var
SceneManager.push(EscolhaProficiencia); //mostra janela



//#Como adicionar ação ao click de seleção para cada elemento do DB
//!Essa parte precisa de melhorias por apresentar falha do js ao ler muito rapido, mas funciona
//@1° passo - procure a linha parecida com a baixo, cada DB devará ter a sua.
	EscolhaProficiencia_db = [
			/*001*/	"alert('isso aqui é uma coisa..')",    //cada virgula guarda um ação, 
			/*002*/	"alert('isso aqui é outra')",          //pode ser colocar um script, so que dependendo de como for será executado
			/*003*/	"",
			/*004*/ "",
			/*005*/ ""
		];
		