// 用來 log 於 底部
function log(input) {
	if (typeof input === 'object')
		$('#log').text($('#log').text() + JSON.stringify(input, null, 2) + '\n')
	else
		$('#log').text($('#log').text() + input + '\n')
}

// 當頁面載入完成時
$(function() {
	// 連結 enode
	var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
	var eth = web3.eth

	//ABI
	var buyhouseContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"houseaddress","type":"string"}],"name":"setOwner_houseaddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBuyer_houseaddress","outputs":[{"name":"houseaddress","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ethaddress","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getOwnerName","outputs":[{"name":"name","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getHouseNumberOfSalas","outputs":[{"name":"number","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"number","type":"uint256"}],"name":"setHouseNumberOfSalas","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"price","type":"uint256"}],"name":"setHousePrice","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"setOwnerName","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getOwner_houseaddress","outputs":[{"name":"houseaddress","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"number","type":"uint256"}],"name":"setHouseNumberOfRooms","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getHouseAge","outputs":[{"name":"houseage","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getOwner_nationID","outputs":[{"name":"ID","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getOwner_Telnumber","outputs":[{"name":"tel","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBuyer_nationID","outputs":[{"name":"ID","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"houseage","type":"uint256"}],"name":"setHouseAge","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getHouseaddress","outputs":[{"name":"houseaddress","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ID","type":"uint256"}],"name":"setOwner_nationID","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"setBuyerName","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getHouseNumberOfRooms","outputs":[{"name":"number","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"ethaddress","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"houseaddress","type":"string"}],"name":"setBuyer_houseaddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBuyer_Telnumber","outputs":[{"name":"tel","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tel","type":"string"}],"name":"setOwner_Telnumber","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getOwnerbalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getHousePrice","outputs":[{"name":"price","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"number","type":"uint256"}],"name":"setHouseNumberOfBathrooms","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ID","type":"uint256"}],"name":"setBuyer_nationID","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getHouseNumberOfBathrooms","outputs":[{"name":"number","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tel","type":"string"}],"name":"setBuyer_Telnumber","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"houseaddress","type":"string"}],"name":"setHouseaddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBuyerbalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBuyerName","outputs":[{"name":"name","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor","payable":true},{"anonymous":false,"inputs":[{"indexed":false,"name":"houseaddress","type":"string"},{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"time","type":"uint256"}],"name":"setEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"TransferEvent","type":"event"}]);
var buyhouse = buyhouseContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x60606040525b33600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506107d06009600050819055506105dc600a600050819055505b61173d806100576000396000f36060604052361561019d576000357c010000000000000000000000000000000000000000000000000000000090048063026db8d8146101a25780630c20ce12146101fd57806313af40351461027d578063145ef6e91461029a5780631cdb6ed21461031a5780632501b82b1461034257806326b46dd11461035f578063295795e21461037c57806330fd77f9146103d7578063322fab1c1461045757806334b6bdbe1461047457806347f1c9f61461049c578063518a0269146104c45780635384392d146105445780635db3b4bc1461056c5780636d72a20d146105895780636d7d02d0146106095780637975417c14610626578063828ea0ee14610681578063893d20e8146106a95780638a4068dd146106e75780639163cc59146106fb578063a089ae1c14610756578063a32ce68f146107d6578063aae3aa8c14610831578063bb49632214610859578063c2a80ef714610881578063cbbf29211461089e578063cf2e0897146108bb578063deb6e185146108e3578063e47329931461093e578063edb34db814610999578063ff6508df146109c15761019d565b610002565b34610002576101fb6004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610a41565b005b346100025761020f6004805050610af2565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610002576102986004808035906020019091905050610bae565b005b34610002576102ac6004805050610bdd565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561030c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b346100025761032c6004805050610c99565b6040518082815260200191505060405180910390f35b346100025761035d6004808035906020019091905050610cab565b005b346100025761037a6004808035906020019091905050610cb9565b005b34610002576103d56004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610cc7565b005b34610002576103e96004805050610d78565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156104495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610002576104726004808035906020019091905050610e34565b005b34610002576104866004805050610e42565b6040518082815260200191505060405180910390f35b34610002576104ae6004805050610e54565b6040518082815260200191505060405180910390f35b34610002576104d66004805050610e66565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156105365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610002576105566004805050610f22565b6040518082815260200191505060405180910390f35b34610002576105876004808035906020019091905050610f34565b005b346100025761059b6004805050610f42565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156105fb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610002576106246004808035906020019091905050610ffe565b005b346100025761067f6004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061100c565b005b346100025761069360048050506110bd565b6040518082815260200191505060405180910390f35b34610002576106bb60048050506110cf565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34610002576106f960048050506110fe565b005b34610002576107546004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506111e8565b005b34610002576107686004805050611299565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156107c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b346100025761082f6004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050611355565b005b346100025761084360048050506114bb565b6040518082815260200191505060405180910390f35b346100025761086b60048050506114cd565b6040518082815260200191505060405180910390f35b346100025761089c60048080359060200190919050506114df565b005b34610002576108b960048080359060200190919050506114ed565b005b34610002576108cd60048050506114fb565b6040518082815260200191505060405180910390f35b346100025761093c6004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061150d565b005b34610002576109976004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506115be565b005b34610002576109ab600480505061166f565b6040518082815260200191505060405180910390f35b34610002576109d36004805050611681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610a335780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b80600c6000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a9057805160ff1916838001178555610ac1565b82800160010185558215610ac1579182015b82811115610ac0578251826000505591602001919060010190610aa2565b5b509050610aec9190610ace565b80821115610ae85760008181506000905550600101610ace565b5090565b50505b50565b6020604051908101604052806000815260200150600b6000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b9f5780601f10610b7457610100808354040283529160200191610b9f565b820191906000526020600020905b815481529060010190602001808311610b8257829003601f168201915b50505050509050610bab565b90565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b602060405190810160405280600081526020015060106000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c8a5780601f10610c5f57610100808354040283529160200191610c8a565b820191906000526020600020905b815481529060010190602001808311610c6d57829003601f168201915b50505050509050610c96565b90565b60006002600050549050610ca8565b90565b806002600050819055505b50565b806004600050819055505b50565b8060106000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d1657805160ff1916838001178555610d47565b82800160010185558215610d47579182015b82811115610d46578251826000505591602001919060010190610d28565b5b509050610d729190610d54565b80821115610d6e5760008181506000905550600101610d54565b5090565b50505b50565b6020604051908101604052806000815260200150600c6000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e255780601f10610dfa57610100808354040283529160200191610e25565b820191906000526020600020905b815481529060010190602001808311610e0857829003601f168201915b50505050509050610e31565b90565b806001600050819055505b50565b60006006600050549050610e51565b90565b6000600e600050549050610e63565b90565b602060405190810160405280600081526020015060126000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f135780601f10610ee857610100808354040283529160200191610f13565b820191906000526020600020905b815481529060010190602001808311610ef657829003601f168201915b50505050509050610f1f565b90565b6000600d600050549050610f31565b90565b806006600050819055505b50565b602060405190810160405280600081526020015060006000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fef5780601f10610fc457610100808354040283529160200191610fef565b820191906000526020600020905b815481529060010190602001808311610fd257829003601f168201915b50505050509050610ffb565b90565b80600e600050819055505b50565b80600f6000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061105b57805160ff191683800117855561108c565b8280016001018555821561108c579182015b8281111561108b57825182600050559160200191906001019061106d565b5b5090506110b79190611099565b808211156110b35760008181506000905550600101611099565b5090565b50505b50565b600060016000505490506110cc565b90565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506110fb565b90565b600460005054600960005054101561111557610002565b6004600050546009600082828250540392505081905550600460005054600a6000828282505401925050819055507fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd633600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660046000505442604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200194505050505060405180910390a15b565b80600b6000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061123757805160ff1916838001178555611268565b82800160010185558215611268579182015b82811115611267578251826000505591602001919060010190611249565b5b5090506112939190611275565b8082111561128f5760008181506000905550600101611275565b5090565b50505b50565b602060405190810160405280600081526020015060116000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113465780601f1061131b57610100808354040283529160200191611346565b820191906000526020600020905b81548152906001019060200180831161132957829003601f168201915b50505050509050611352565b90565b8060126000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106113a457805160ff19168380011785556113d5565b828001600101855582156113d5579182015b828111156113d45782518260005055916020019190600101906113b6565b5b50905061140091906113e2565b808211156113fc57600081815060009055506001016113e2565b5090565b50507f45a8f3d571ce467df12062b44c9fcdbe4f525295c032cfe082c0a000a6beefdf81334260405180806020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252858181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156114a85780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a15b50565b6000600a6000505490506114ca565b90565b600060046000505490506114dc565b90565b806003600050819055505b50565b80600d600050819055505b50565b6000600360005054905061150a565b90565b8060116000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061155c57805160ff191683800117855561158d565b8280016001018555821561158d579182015b8281111561158c57825182600050559160200191906001019061156e565b5b5090506115b8919061159a565b808211156115b4576000818150600090555060010161159a565b5090565b50505b50565b8060006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061160d57805160ff191683800117855561163e565b8280016001018555821561163e579182015b8281111561163d57825182600050559160200191906001019061161f565b5b509050611669919061164b565b80821115611665576000818150600090555060010161164b565b5090565b50505b50565b6000600960005054905061167e565b90565b6020604051908101604052806000815260200150600f6000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561172e5780601f106117035761010080835404028352916020019161172e565b820191906000526020600020905b81548152906001019060200180831161171157829003601f168201915b5050505050905061173a565b9056', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
 
		// 載入我們設計的介面接合
			contractControl(buyhouse, eth)
		}
	})

})

// 這裡將控制 simplestorage 與 網頁介面的接合，無論是事件處理還是輸入互動
function contractControl(buyhouse, eth) {
	// 當 simplgestorage 的 setEvent 被發射的時候，就會被如此接住
	buyhouse.setEvent({}, function(err, eventdata) {
		log('setEvent fired : ')
		log(eventdata)
	})
	buyhouse.TransferEvent({}, function (err, event) {
		log('Transfer Finish!')
		log(event)
		})

	// 當有人按下 setData 的按鈕時
	$('#setData').on('click', function() {
		// 得到 input 的值後，並送出 setData 的 Transaction (因為這是一個改變資料庫的行為)
		// 記得補上 TxObject (from 的這塊物件)
		// 然後得到 此 Transaction 的 hash
		var txHash = buyhouse.setHouseaddress($('#house_Address').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setHouseNumberOfRooms($('#numberOfRooms').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash =	buyhouse.setHouseNumberOfSalas($('#numberOfSalas').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = 	buyhouse.setHouseNumberOfBathrooms($('#numberOfBathrooms').val(), 			{
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash =	buyhouse.setHousePrice($('#house_Price').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setHouseAge($('#house_Age').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setOwner($('#Owner_ethe_Address').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
/*		var txHash = buyhouse.setBuyerbalance($('#Buyer_balance').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setOwnerbalance($('#Owner_balance').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
*/		
		var txHash = buyhouse.setBuyer_houseaddress($('#Buyer_residential_Address').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setOwner_houseaddress($('#Owner_residential_Address').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setBuyer_nationID($('#Buyer_national_id').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setOwner_nationID($('#Owner_national_id').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setBuyerName($('#BuyerName').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setOwnerName($('#OwnerName').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setBuyer_Telnumber($('#Buyer_tel_Number').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		var txHash = buyhouse.setOwner_Telnumber($('#Owner_tel_Number').val(), {
			from: eth.coinbase
		})
		log('txHash is : ' + txHash)
		
		
	})
	// 當有人按下 getData 的按鈕時
	$('#getData').on('click', function() {
		// getData 為 contract function
		// 所以不需要 Transaction 只需要 Call
		// 可以馬上得到結果
		log('Getdata')
		var data = buyhouse.getHouseaddress();
		log('HouseAddress: '+data)
		
		var data = buyhouse.getHouseNumberOfRooms();
		log('HouseNumberOfRooms: '+data)
		
		var data = buyhouse.getHouseNumberOfSalas();
		log('HouseNumberOfSalas: '+data)
		
		var data = buyhouse.getHouseNumberOfBathrooms();
		log('HouseNumberOfBathrooms: '+data)
		
		var data = buyhouse.getHousePrice();
		log('HousePrice: '+data)
		
		var data = buyhouse.getHouseAge();
		log('HouseAge: '+data)
		
		var data = buyhouse.getOwner();
		log('Owner: '+data)
		
		var data = buyhouse.getBuyerbalance();
		log('Buyerbalance: '+data)
		
		var data = buyhouse.getOwnerbalance();
		log('Ownerbalance: '+data)
		
		var data = buyhouse.getBuyer_houseaddress();
		log('Buyer_houseaddress: '+data)
		
		var data = buyhouse.getOwner_houseaddress();
		log('Owner_houseaddress: '+data)
		
		var data = buyhouse.getBuyer_nationID();
		log('Buyer_nationID: '+data)
		
		var data = buyhouse.getOwner_nationID();
		log('Owner_nationID: '+data)
		
		var data = buyhouse.getBuyerName();
		log('BuyerName: '+data)
		
		var data = buyhouse.getOwnerName();
		log('OwnerName: '+data)
		
		var data = buyhouse.getBuyer_Telnumber();
		log('Buyer_Telnumber: '+data)
		
		var data = buyhouse.getOwner_Telnumber();
		log('Owner_Telnumber: '+data)
		
	})
	
	$('#transfer').on('click', function() {
		
		log('轉帳中')
		var txHash = buyhouse.transfer( {
			from: eth.coinbase
		})
		log('txHash: '+ txHash)
		
	})
	$('#getbalance').on('click', function() {
		var data = buyhouse.getBuyerbalance();
		log('Buyerbalance: '+data)
		
		var data = buyhouse.getOwnerbalance();
		log('Ownerbalance: '+data)
	})
	
}