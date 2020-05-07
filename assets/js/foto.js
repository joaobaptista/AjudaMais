// coleção será o array que vai carregar todos os nomes
// das fotos, as fotos deverao estar na pasta fotos 
// com extensão em .jpg e com nomes conforme sua categoria
// categoria Wallpaper para computador os numeros vão de
// 1 até a 100
// categoria Wallpaper para celular é de 101 até 200
// categoria Fotos Impressas é de 201 até 300
const colecao = [];
// perceba abaixo que devemos colocar no array somente a quantidade
// certa de fotos que há na pasta mudando as variaveis,
// para que tudo ocorra bem devemos manter os nomes das fotos com 
// números sequênciais

// Neste array abaixo temos a quantidade de fotos por categoria na ordem
// wallpaper para computador, wallpaper para celular e fotos impressas

// AQUI VAI A QUANTIDADE DE FOTOS
const qtdFotos = [ 15, 15 , 6] 

// aqui abaixo temos um for para ler a quantidade de fotos do 
// array acima e adicionar todas fotos conforme a numeração
// que foi pré combinada para os nomes das fotos
let anterior = 0;
let x = 1;

for(let y=1; y < 4; y++ ) {
  x=anterior*100+1;
  for(x; x<= (anterior*100) + qtdFotos[y-1]; x++) {
    colecao.push(x);
  }
  anterior=y;
}

// pasta onde ficam as fotos
const pasta = 'fotos/';

// objeton json com as descrição que vão aparecer nas fotos
const descricao = 
  { 
    1: `
        Pôr do sol às margens do Rio Douro. Porto - Portugal.
       `,
    2: `
        Simetria do Louvre. Museu do Louvre, Paris - França.
       `,
    3: `
        Pirâmide do Louvre. Museu do Louvre, Paris - França. 
       `,
    4: `
        Palácio de Westminster à noite. Londres - Inglaterra
       ` ,
    5: `
        Barco à vela ao pôr do sol. Hillarys - Austrália.
       `,
    6: `
        Pôr do sol Azul. Hillarys - Austrália.
       `,
    7: `
        Pôr do sol no Rio Tâmisa. Londres - Inglaterra. 
       `,
    8: `
        Caminho a El Chaltén. Ruta 27 - Argentina
       `,
    9: `
        Cavalos na Patagônia. El Calafate - Argentina.
       `,
    10: `
        Névoa no Glaciar Perito Monero. El Calafate - Argentina. 
       `,
    11: `
        Sombra do Coqueiro. Rio Grande do Norte - Brasil
        `,
    12: `
        Cocos. Praia de Carneiros - Brasil
       `,
    13: `
        Passeio de Ônibus. San Andrés - Colombia.
       `,
    14: `
        Golden Hour no Porto. Porto - Portugal. 
       `,
    15: `
        Long Tail Boat. Ko Lao Lading - Tailândia.
        `,    
    

    101: `
       Vista para a Ilha Johny Cay. San Andrés - Colombia
        `, 
    102: `
        Coqueiro sob o sol. Rio Grande do Norte - Brasil.
       `,
    103: `
        Salto para o mar. San Andrés - Colombia. 
       `,
    104: `
        Caminho a El Chaltén. Ruta 27 - Argentina.
       ` ,
    105: `
        Direto para as Montanhas. Ruta 27 - Argentina.
       `,
    106: `
        Cavalos na Patagônia. El Calafate - Argentina.
       `,
    107: `
        London Eye em tempos de Natal. Londres - Inglaterra. 
       `,
    108: `
        The Shard à noite. Londres - Inglaterra.
       `,
    109: `
        Torre Eiffel à noite. Paris - França
       `,
    110: `
        Orloj. Praga - República Tcheca. 
       `,
    111: `
        Casa Dançante e o antigo Tram. Praga - República Tcheca.
       `,
    112: `
        Castelo de Praga ao entardecer. Praga - República Tcheca.
       `, 
    113: `
        Entardecer no Cais da Ribeira. Porto - Portugal. 
       `,
    114: `
        Ruas de Dubrovnik. Croácia.
       `,
    115: `
        Torre Reno ao Céu. Dusseldorf - Alemanha.
       `,   
    

    201: `
       Passeio no Chateau de Chenonceau. Chenonceaux - França. (Doação Mínima = R$50.00/Tiragem Máxima 20 Impressões)
     ` , 
    202: `
       Arco do Triunfo. Paris - França. (Doação Mínima = R$50.00/Tiragem Máxima 20 Impressões)
     ` , 
    203: `
       Detalhes da Torre Eiffe. Paris - França (Doação Mínima = R$50.00/Tiragem Máxima 20 Impressões)
     ` ,  
    204: `
       Basílica de São Pedro em um dia Azul. Cidade do Vaticano (Doação Mínima = R$50.00/Tiragem Máxima 20 Impressões)
     ` , 
    205: `
       Lago di Carezza sob a neve. Nova Levante - Itália (Doação Mínima = R$50.00/Tiragem Máxima 20 Impressões)
     ` , 
    206: `
       Palácio de Westminster à noite. Londres - Inglaterra (Doação Mínima = R$100.00/Tiragem Máxima 10 Impressões)
     ` ,  
  }

// esta função é para buscar as fotos e mostrar na tela
buscarFotos(colecao);
 
function buscarFotos(colecao) {

  // vai ir em cada url e que esta no array
  // colecao que sera somente um numero ex.: 1, 2, 3.. ou 101, 102...
  // que sera combinado com o pasta e com a extensão:
  // exemplo: pasta+url+.jpg = 'fotos/1.jpg' 
  for ( let url of colecao ) {
    
    // a partir de agora começa a montar
    // dinamicamente a pagina das fotos

    // os 3 proximos if são somente para por os cabeçalhos das
    // de cada uma das categorias 
    if ( url === 1 ) {
    // categoria Computador
      const tituloComputador = `
        <h1>Wallpaper para Computador</h1>
      `; 
      juntar(tituloComputador, "tituloComputador") 
    }
    
    if ( url === 101 ) {
    // categoria wallpaper
      const tituloWallpaper = `
        <h1>Wallpaper para Celular</h1>
      `; 
      juntar(tituloWallpaper, "tituloWallpaper") 
    }
         
    if ( url === 201 ) {
    // categoria impressas
      const tituloImpressas = `
        <h1>Impressas</h1>
      `; 
      juntar(tituloImpressas, "tituloImpressas") 
    }
            

    // a primeira div é a que mostra todos os elementos
    // a segunda div que tem a class pai-local-${url} é a div que guarda cada um dos 
    // elementos que sera mostrado individualmente e o que esta dentro delas primeiro
    // é o spiner de carregamento e depois é a imagem e a descrição em si
    const textoPuro = `
      <div id="div-${url}"class="col" style="background">
      <div id="rm-${url}"style="width:250px;border:1px solid grey;border-radius: 10px;margin:5px;" class="col">
        <div class="pai-local" id="pai-local-${url}" >
          <div id="spinner-${url}" class="spinner-border text-dark centro-horizontal"></div>
      <h5 id="carregando-${url}">Carregando...</h3>
        </div>
      </div>
      </div>
    `; 
    
    if( url > 0 && url < 101 ) {
      juntar(textoPuro,"computador")
    }
   
    if( url > 100 && url < 201 ) {
      juntar(textoPuro,"wallpaper")
    }
   
    if( url > 200 && url < 300 ) {
      juntar(textoPuro,"impressa")
    }

    const elemento =  `
      <div class="card img-fluid" style="width:300px">
        <img class="card-img-top" src="/fotos/${url}.jpg" alt="${descricao[url]}" style="width:100%">
          <div class="card-img-overlay">
            <h4 class="card-title example9">${url}</h4>
          </div>

          <div class="card-footer">
            ${descricao[url]}
          </div>
        </div>
       `
    //remove o spiner que mostrava carregamento na hora de mostrar a imagem      
    document.getElementById(`rm-${url}`).remove();
    juntar(elemento,`div-${url}`);
  }
}
    
function juntar(elementos,divX) {
   
  const parser = new DOMParser();
  const doc = parser.parseFromString(elementos, "text/html")
  const div = doc.body
  document.getElementById(divX).appendChild(div);
}
