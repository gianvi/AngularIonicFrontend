/**
 * 
 */

angular.module('starter').factory('ConsumoService', [function(){
	
	var consumoObj = {};
	
	consumoObj.savedConsumo = [
	   {
		   "id":"1",
		   "cod_accr":"RISTTOPIE010",
		   "nome":"Antica Locanda Dell'Orco",
		   "indirizzo":"",
		   "tipo":"CA"
	   }, 
	   {
		   "id":"2",
		   "cod_accr":"RISTTOPIE020",
		   "nome":"Bon Ton di Pietrini",
		   "indirizzo":"",
		   "tipo":"CA"
	   }, 
	   {
		   "id":"3",
		   "cod_accr":"RISTTOPIE007",
		   "nome":"Cooperativa - Gelateria Naturale di San Salvario",
		   "indirizzo":"",
		   "tipo":"CA"
	   }, 
	   {
		   "id":"4",
		   "cod_accr":"RISTTOPIE004",
		   "nome":"El Crinet Trattoria DOC",
		   "indirizzo":"",
		   "tipo":"CA"
		}, 
		{
			"id":"5",
			"cod_accr":"RISTTOPIE011",
			"nome":"Hafa Caf?",
			"indirizzo":"",
			"tipo":"CA"
		}, 
		{
			"id":"6",
			"cod_accr":"RISTTOPIE009",
			"nome":"Hotel Italia \/ Colorado Caf?",
			"indirizzo":"",
			"tipo":"CA"
		}, 
		{
			"id":"7",
			"cod_accr":"RISTTOPIE006",
			"nome":"Il Capriccio - Da Tiziana",
			"indirizzo":"",
			"tipo":"CA"
		}, 
		{
			"id":"8",
			"cod_accr":"RISTTOPIE012",
			"nome":"La Maison de Marie Caf? Bistrot",
			"indirizzo":"","tipo":"CA"
		}, 
		{"id":"9","cod_accr":"RISTTOPIE013","nome":"Mezzaluna","indirizzo":"","tipo":"CA"}, 
		{"id":"10","cod_accr":"RISTTOPIE014","nome":"Mole Catering","indirizzo":"","tipo":"CA"},
		{"id":"11","cod_accr":"RISTTOPIE015","nome":"Nevedarance","indirizzo":"","tipo":"CA"}, 
		{"id":"12","cod_accr":"RISTTOPIE016","nome":"Pastis","indirizzo":"","tipo":"CA"}, 
		{"id":"13","cod_accr":"RISTTOPIE017","nome":"Ristorante da Mauro","indirizzo":"","tipo":"CA"}, 
		{"id":"14","cod_accr":"RISTTOPIE018","nome":"Shore Cocktail Club","indirizzo":"","tipo":"CA"}, 
		{"id":"15","cod_accr":"RISTTOPIE019","nome":"Slurp","indirizzo":"","tipo":"CA"}, 
		{"id":"16","cod_accr":"RISTTOPIE005","nome":"Sommeiller 1884","indirizzo":"","tipo":"CA"}, 
		{"id":"17","cod_accr":"RISTTOPIE008","nome":"Taverna di Biagio","indirizzo":"","tipo":"CA"}
		
		];
	
	return consumoObj;
}]);