/*< 424 > ══════════════════════════════ Números - Exploração - Banco de Dados ══════════════════════════════
	** MODELO 1 **
	Função → Num_Exploração.
 
*/
var ativaselec;										
var myWindow;
var S_ativaStatus = 37;						//controla qual switcher será usado para ativação da caixa de status
var V_escolhaAtiva = 51;					//aqui fica a variavel que salvará a escolha de banco de dados
var V_nAtores = 100;						//aqui é o numero de atores que terá no jogo. 
var V_Titulo_modelo1 = "Info";				//aqui é o titulo do modelo a ser usado
var speed = 20;         					//velocidade de rolagem do texto 
var EscolhaProficiencia_menus;				//variavel global que recebe do maker informações sobre escolha	
var ator;									//define o id do personagem no jogo
var p_ator = 1;
var vrz; 									//variavel aonde se salva tudo 
var IndexG = 0;								//aqui é para saber aonde o jogador clicou
var IndexCOD = 0;							//recebe o id simbolico com o numero digitado na chamada
var tmpArr;									//variavel temporara que tem a copida da escolha a cada chamada de sava 
var T_status = " ";							//T_status é responável por todo texto que será exibido na janela de status
var yyy = 0;								//yyy é a posição y do texto na janela de status
var EscolhaProficiencia_menusOP = [];		//inicia como null os banco de dados 
var EscolhaProficiencia_menusStatus = [];	//inicia como null os banco de dados 
var escolha_db = "default";                 //banco de dados padrão
var db_script = false;

//---------------------------------Aqui começa o banco de dados------------------------------------------//

//condicional para avaliar qual banco de dados vai ser chamado, V_escolhaAtiva é o padrão
function criaDB(z,db){
	//Vetor com as opções do menu a ser adicionado	
	if(z==V_escolhaAtiva){
	//db = "exploração";
	if(db=="exploração" || escolha_db=="default"){
		// Item a escolher		
		EscolhaProficiencia_menusOP = [
			/*001*/	"Força",
			/*002*/	"Magia",
			/*003*/	"Agilidade"+" 1",
			/*004*/	"Destreza"+" 0",
			/*005*/	"Inteligência"
		];
	
		//Informações do Item selecionado
		EscolhaProficiencia_menusStatus = [
			/*001*/	"Aqui poderá encontrar dados referentes a \\c[1]Exploração\\c[0] do jogo.",
			/*002*/	"Somatório de todos os dados de \\c[1]Exploração\\c[0] que tenham o \\c[2]marcador de estrela\\c[0].",
			/*003*/	"Quantidade de mapas diferentes explorados.",
			/*004*/ "Quantidade de cidades ou vilas que foram visitadas.",
			/*005*/ "Quantos Lugares diferentes conheceu."
		];

	EscolhaProficiencia_db = [
			/*001*/	"alert('isso aqui é uma coisa..')",
			/*002*/	"alert('isso aqui é outra')",
			/*003*/	"",
			/*004*/ "",
			/*005*/ ""
		];
	

		//retornainfo(x,y), se um condicional for atendida retonr uma info da var x posição y
		EscolhaProficiencia_infoStatus = [
			"Texto 1 de teste a ser exibido1\n", 
			"Texto 1 de teste a ser exibido2\n",
			"Texto 1 de teste a ser exibido13\n",
			"Texto 1 de teste a ser exibido14",
			"Texto 1 a ser exibido"
		]; //aqui termina as janelas de status
		
	}else if(db=="numeros"){
		// Item a escolher		
		EscolhaProficiencia_menusOP = [
			/*001*/	"Espada de madeira",
			/*002*/	"Arco de Madeira",
			/*003*/	"Faca de Madeira",
			/*004*/	"Espada de Ferro"+"1",
			/*005*/	"Pedra de amolar"+"3"
		];
	
		//Informações do Item selecionado
		EscolhaProficiencia_menusStatus = [
			/*001*/	"Espada simples de madeira",
			/*002*/	"Arco fraco para pequenos desafios",
			/*003*/	"Faca feita para cortar coisas sem resistência",
			/*004*/ "Espada boa, mas pode oxidar se nao\nfor corretamente cuidada.",
			/*005*/ "Pedra usada para amolar espadas"
		];

	
	EscolhaProficiencia_db = [
			/*001*/	"alert('Tem mais uma coisa ok ?')",
			/*002*/	"alert('ok')",
			/*003*/	"",
			/*004*/ "",
			/*005*/ ""
		];
	

		//retornainfo(x,y), se um condicional for atendida retonr uma info da var x posição y
		EscolhaProficiencia_infoStatus = [
			"Texto 2 de teste a ser exibido1\n", 
			"Texto  2 de teste a ser exibido2\n",
			"Texto 2 de teste a ser exibido13\n",
			"Texto 2 de teste a ser exibido14",
			"Texto 2 a ser exibido"
		]; //aqui termina as janelas de status
	}
		
	}
}

//Função que carrega as informações adequadas a serem exibidas com base no ator e na variável
function EP_MostraEscolha_db(ator,vrz,db){  //db é o nome do banco de dados que vai  ser usado 
	//Define variavel padrao como 42 caso ela seja omitida
	if(vrz==null){vrz=V_escolhaAtiva;}  	
	if(db!=null){escolha_db = db;}
	
	//Ao acarregar a tela o sistema chama a função criaDB() para carregar o banco de dados 	
	criaDB(vrz,db); 													
	//Carrega as informação de uma personagem especifico
	EscolhaProficiencia_menus=$gameVariables.value(vrz)[ator][db]; 		
	return true;
}

//Função de criação de escolha
function Num_Exploração(escolha,ator,vrz,db){
	
	//define variavel padrao como 42 caso ela seja omitida	
	if(vrz==null){vrz=V_escolhaAtiva;}  
	if(db!=null){escolha_db = db;} //Verifica se o db é nulo
	//verifica se o ator foi digitado corretamente
	if(ator>0){personagem=ator;}else{personagem=0;}
	
	//corrige o numero da escolha, caso seja digitado um numero menor que 1, ele automaticamente coloca como se fosse 1
	if(escolha>0){escolha=escolha-1;}else{escolha=0;}
	
	//converte para string para manipulação
	escolha = escolha.toString();
	
	//pega a os atributos do ator selecionado
	var adicionaop_temp = $gameVariables.value(vrz)[personagem][db];
	
	//verifica se o atributo do ato já foi iniciado com base no tamanho, se nao for ele adiciona a informação na p 0
	if(adicionaop_temp.length>0){
		
		//condicional verifica o tipo de variavel e converte o string para vetor 
		//pega a variavel de vetor 3 e adiciona a nova escolha
		tmpArr = [$gameVariables.value(vrz)[personagem][db]+',']+[escolha];  
		
		//corrige a string transformando em um vetor 
		tmpArr = tmpArr.split(',');											
		$gameVariables.value(vrz)[personagem][db]=tmpArr; //salva na variavel
	}else{
		//caso a variavel esteja sem nada ele adiciona o valor na opção 0
		tmpArr = [escolha]; 
		
		//salva o resultado na posição 0 do vetor 
		$gameVariables.value(vrz)[personagem][db]=tmpArr;               
	}	
	//atualiza a seleção para ser exibida no menu de escolhas
	EscolhaProficiencia_menus  = $gameVariables.value(vrz)[personagem][db]; 
}

//janela adicional de infomação de texto, status--------janela de status do item----------//
function Win_IndexINFO() {
    this.initialize.apply(this, arguments);
}

//cria  a janela a ser mostrada
Win_IndexINFO.prototype = Object.create(Window_Selectable.prototype);
Win_IndexINFO.prototype.constructor = Win_IndexINFO;

var Win_IndexINFO_altura;
Win_IndexINFO.prototype.initialize = function(rect) {
    var height = Graphics.boxHeight/3; //this.fittingHeight(5); //aqui é a altura 
	Win_IndexINFO_altura = height;
    Window_Selectable.prototype.initialize.call(this, rect); //cria a janela selecionavel 
    this.refresh(); 
    this.activate();
}
Win_IndexINFO.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
	Window_Base.prototype.update.call(this);
	
	//abaixo é responsável por criar o scroll e exibir os detalhes da descrição do item 
	var t_status_tmp;    //variável temporaria
	if(T_status==" "){t_status_tmp=" ";}
	
	//AQUI deve ser montado a estrutura do texto de status a ser exibido usando a variavel T_status
	T_status = "Descrição:\n"+EscolhaProficiencia_infoStatus[EscolhaProficiencia_menus[IndexG]];
	var info = T_status.split('\n').length; //aqui pega a quantidade de linhas baseado no \n
	if(t_status_tmp==" "){t_status_tmp=null;this.refresh();}
	
	//recebe as entradas de teclado para o scroll e fechar janela, pageUP para subir, pageDOWN para desce
	if(yyy==null){yyy=0;}
  	if(Input.isTriggered('pageup')==true){
		if(yyy<0){
			yyy=yyy+speed;
			this.refresh();
		}
	}
	if(Input.isTriggered('pagedown')==true){
		if(info*30>(Win_IndexINFO_altura/2)){
			if(yyy>((info+(info/5))*30-50)*(-1)){  //controla até aonde a tela será rolada 
				yyy=yyy-speed;
				this.refresh();
			}
		}
	}
}

//mostra efetivamente o texto atualiando conforme nescessário 
Win_IndexINFO.prototype.refresh = function() {
	this.contents.clear();				//limpa a tela
	this.setBackgroundType(1);
	this.drawTextEx(T_status, 0, yyy);	//coloca o texto
}
//----------------------------------------------------------------------------------------------------//

//mudar nome da janela a ser puxada 
function EscolhaProficiencia() {
	this.initialize.apply(this, arguments);
}
EscolhaProficiencia.prototype = Object.create(Scene_MenuBase.prototype);
EscolhaProficiencia.prototype.constructor = EscolhaProficiencia;

EscolhaProficiencia.prototype.initialize = function() {
	Scene_MenuBase.prototype.initialize.call(this);
};
EscolhaProficiencia.prototype.commandSair = function() {                     
	//Desative esse switch para nao seja preciso ativar novamente ao iniciar a janela 
	ativaselec=null;myWindow.close();myWindow=null;
	this.popScene();
}

//Aqui é criado a janela principal 
EscolhaProficiencia.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
	//var width = Graphics.boxWidth/1.2;  //aqui é a largura da 1° janela  --------largura da 1° janela 
	//var height = this.fittingHeight(5);
	
	var rect = new Rectangle(216,60,Graphics.boxWidth/1.5, 500); // JANELA coordenada
    
	this._indexWindow = new EscolhaProficienciaIndex(rect); //aqui cria a 1° janela na posição x e y sendo 
	this._indexWindow.setBackgroundType(1); //tipo de janela (2) vem por padrão
    this._indexWindow.setHandler('cancel', this.commandSair.bind(this));
    //var wy = this._indexWindow.height; //pega altura da 1° janela 
    var ww = Graphics.boxWidth/1.5; //pega a largura da janela 
    var wh = Graphics.boxHeight/10 //pega a altura da janela
	//aqui cria a 2° janela na posição x de ww+1 e y de 100,  ww*1.5 é a largura da 2°janela e wh a altura
    
	var rect = new Rectangle(216, 560, ww, 100); // JANELA DE INFO coordenada
	
	this._statusWindow = new EscolhaProficienciaStatus(rect);
	this._statusWindow.setBackgroundType(1);
    this.addWindow(this._indexWindow); //aqui adiciona a 1° janela (escolha)
    this.addWindow(this._statusWindow);  //aqui adiciona a 2° janela (status)
    this._indexWindow.setStatusWindow(this._statusWindow);
};

function EscolhaProficienciaIndex() {
    this.initialize.apply(this, arguments);
}
//cria janela de itens a ser mostrado 
EscolhaProficienciaIndex.prototype = Object.create(Window_Selectable.prototype);
EscolhaProficienciaIndex.prototype.constructor = EscolhaProficienciaIndex;

EscolhaProficienciaIndex.lastTopRow = 0;
EscolhaProficienciaIndex.lastIndex  = 0;

EscolhaProficienciaIndex.prototype.initialize = function(rect) {
	//cria a janela selecionavel, posição x e y, e largura e altura da janela
	Window_Selectable.prototype.initialize.call(this, rect); 
    this.refresh(); 
    this.setTopRow(EscolhaProficienciaIndex.lastTopRow);
    this.select(EscolhaProficienciaIndex.lastIndex);
    this.activate();
};
//linhas para aparecer nas escolhas =======================================================
EscolhaProficienciaIndex.prototype.drawVertLine = function(x) {
    this.contents.paintOpacity = 48;
    this.contents.fillRect(x, 0, 2, this.contentsHeight(),  ColorManager.textColor(0));   
    this.contents.paintOpacity = 255;
};
//horizintal linha 
EscolhaProficienciaIndex.prototype.drawHorzLine = function(y) {
    var lineY = y + this.lineHeight() / 2 - 1;
    this.contents.paintOpacity = 48;
    this.contents.fillRect(0, lineY, this.contentsWidth(), 2,  ColorManager.textColor(0));			
    this.contents.paintOpacity = 255;
};
//linhas para aparecer nas escolhas =======================================================
EscolhaProficienciaIndex.prototype.maxCols = function() {  //maximo de colunas da janela de escolhas 
    return 1;
};
EscolhaProficienciaIndex.prototype.isOkEnabled = function() {if(ativaselec==true){ //se a escolha estiver ativa
    this.show();
    this.deactivate();
}}
EscolhaProficienciaIndex.prototype.isCancelEnabled = function() {if(ativaselec==false){ //ao cancelar a tela de status
    this.show();
	ativaselec=null;
}}
EscolhaProficienciaIndex.prototype.maxItems = function() {  //quantidades de itens que pode ter na janela 
    return this._list ? this._list.length : 0;
};
//atualiza a janela de status 
EscolhaProficienciaIndex.prototype.setStatusWindow = function(statusWindow) {
    this._statusWindow = statusWindow;
    this.updateStatus();
};
//atualiza a janela de escolha 
EscolhaProficienciaIndex.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    this.updateStatus();
	//linha resposál por atualizar as janelas 
	if(EscolhaProficiencia_menus[IndexG]==0){this._statusWindow.refresh();}else{this._statusWindow.refresh();}
	//Detecta a tecla que foi pressionada, X fecha a janela ------------sair da janela
	if(Input.isTriggered('escape')==true&&ativaselec!=true){
		if(myWindow){
			myWindow.deactivate();
			myWindow.close();
			this.setTopRow(EscolhaProficienciaIndex.lastTopRow);
			this.select(IndexG);
			this.activate();
			ativaselec=null;
			$gameSwitches.setValue(S_ativaStatus,false);
			SceneManager.pop();
		}else{
			SceneManager.pop();
		}
	}
	//sai da janela de detalhe d status 
	if(Input.isTriggered('escape')==true){
		if(myWindow){
			myWindow.deactivate();
			myWindow.close();
			this.setTopRow(EscolhaProficienciaIndex.lastTopRow);
			this.select(IndexG);
			this.activate();
			ativaselec=false;
			yyy=0;  //zera a posição do roll
		}else{
			vrz=null;
			EscolhaProficiencia_menus=null;
			$gameSwitches.setValue(S_ativaStatus,false);
		}
	}
}

//essa janela atualiza a escolha, você a tem por meio de um index, que vai de 0 a infinito
EscolhaProficienciaIndex.prototype.updateStatus = function() {
	if (this._statusWindow) {
		//aqui atualiza a janela de status -----aqui pega o index
		IndexG = this.index();
		//novo id baseado no index+1
		IndexCOD = this.index()+1;							
		var apontador = this._list[this.index()];
		this._statusWindow.setApontador(apontador);
    }
};
EscolhaProficienciaIndex.prototype.refresh = function() {
    this._list = [];
	//aquio se cria as opções das escolhas em numeros
    for (var i = 0; i < EscolhaProficiencia_menus.length; i++) {
        var apontador = EscolhaProficiencia_menus[i];
        if (apontador !== 'no') {
			this._list.push(apontador);
        }
    }
    this.createContents();
    this.drawAllItems();
};

//aqui faz o draw das opções da list[] dinâmicamente 
EscolhaProficienciaIndex.prototype.drawItem = function(index) {
    var apontador = this._list[index];
    const rect = this.itemLineRect(index);
	//desenha as escolhas com base no vetor EscolhaProficiencia_menus
    this.drawTextEx(EscolhaProficiencia_menusOP[parseInt(EscolhaProficiencia_menus[index])], rect.x, rect.y, rect.width);
};

EscolhaProficienciaIndex.prototype.processCancel = function() {
    Window_Selectable.prototype.processCancel.call(this);
    EscolhaProficienciaIndex.lastTopRow = this.topRow();
    EscolhaProficienciaIndex.lastIndex = this.index();
};

// Esssa janela é aonde fica o status, a atualização do select fica nela
function EscolhaProficienciaStatus() {
    this.initialize.apply(this, arguments);
}

EscolhaProficienciaStatus.prototype = Object.create(Window_Base.prototype);
EscolhaProficienciaStatus.prototype.constructor = EscolhaProficienciaStatus;

EscolhaProficienciaStatus.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
    this._apontador = null;
    this._apontadorSprite = new Sprite();
    this._apontadorSprite.anchor.x = 0.5;
    this._apontadorSprite.anchor.y = 0.5;
	//aqui é aonde lida com a largura da janela de status     (quanto menor o divisor maior a largura janela)
    this._apontadorSprite.x = Graphics.boxWidth / 2 - 20;
	//aqui é aonde lida com a altura da janela de status    (quanto menor o divisor maior a altura  janela)    
    this._apontadorSprite.y = Graphics.boxHeight / 3;			  
    this.addChildToBack(this._apontadorSprite);
    this.refresh();
};

//linhas para aparecer nas escolhas =================================================================
EscolhaProficienciaStatus.prototype.drawVertLine = function(x) {
    this.contents.paintOpacity = 48;
    this.contents.fillRect(x, 0, 2, this.contentsHeight(), this.textColor(0)); //mudado cor do texto com base na skin
    this.contents.paintOpacity = 255;
};
//horizintal linha 
EscolhaProficienciaStatus.prototype.drawHorzLine = function(y) {
    var lineY = y + this.lineHeight() / 2 - 1;
    this.contents.paintOpacity = 48;
    this.contents.fillRect(0, lineY, this.contentsWidth(), 2, this.textColor(0));			
    this.contents.paintOpacity = 255;
};

//linhas para aparecer nas escolhas =================================================================
EscolhaProficienciaStatus.prototype.setApontador = function(apontador) {
    if (this._apontador !== apontador) {
        this._apontador = apontador;
		this.refresh();
    }
};
EscolhaProficienciaStatus.prototype.update = function() {
    Window_Base.prototype.update.call(this);
	//sempre que que haver alguma atualização em em status
};
EscolhaProficienciaStatus.prototype.refresh = function() {
    this.contents.clear();
	//Essa função é Opcional caso queira 
	var EspelhoTitulo;
	if(EscolhaProficiencia_menus[IndexG]!=null){
		EspelhoTitulo="ID Real no vetor: "+EscolhaProficiencia_menus[IndexG]+" ID visual: "+
		IndexCOD+" Info: "+EscolhaProficiencia_menusStatus[EscolhaProficiencia_menus[IndexG]];
	}else{
		EspelhoTitulo = "";	
	}
	//faz a escrita das informações que aparecem na janela descrição do item
	this.drawTextEx(EscolhaProficiencia_infoStatus[EscolhaProficiencia_menus[IndexG]]+"<- \\c[6]"+V_Titulo_modelo1+": \\c[0]"+EspelhoTitulo+"\n", 0, 0);  
	if($gameSwitches.value(S_ativaStatus)==true){
		if(EscolhaProficiencia_menus[IndexG]>=0&&ativaselec==null){
			if(Input.isTriggered('ok')==true||TouchInput.isTriggered('ok')==true){
				//aqui adiciona algo para o botão fazer se clicar na opção. 
				eval(EscolhaProficiencia_db[EscolhaProficiencia_menus[IndexG]]);
				

				if(EscolhaProficiencia_menus[IndexG]==1){
					alert("11111111");
				}
			
			}
		}
	}
}