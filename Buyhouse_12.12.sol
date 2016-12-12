pragma solidity ^0.4.2;
contract BuyHouse {
    event setEvent(string houseaddress, address from, uint time);
    /*event sethouseAgeEvent(uint houseage,address from,uint time);
    event sethouseNumberOfRoomsEvent(uint number,address from,uint time);
    event sethouseNumberOfSalasEvent(uint number,address from,uint time);
    event sethouseNumberOfBathroomsEvent(uint number,address from,uint time);
    event setPrice_etherValueEvent(uint price,address from,uint time);
	
	event setOwnerEvent(address ethaddress,address from,uint time);
	
	event setBuyerbalanceEvent(uint256 balance,address from,uint time);
	event setOwnerbalanceEvent(uint256 balance,address from,uint time);
	
	event setBuyer_houseaddressEvent(string houseaddress,address from,uint time);
	event setOwner_houseaddressEvent(string houseaddress,address from,uint time);
	
	event setBuyer_nationIDEvent(uint ID,address from,uint time);
	event setOwner_nationIDEvent(uint ID,address from,uint time);
	
	event setBuyerNameEvent(string name,address from,uint time);
	event setOwnerNameEvent(string name,address from,uint time);
	
	event setBuyer_TelnumberEvent(string tel,address from,uint time);
	event setOwner_TelnumberEvent(string tel,address from,uint time);
	*/
	event TransferEvent(address from, address to, uint256 value, uint256 timestamp);
	//房屋資訊
	string  House_address;
	uint NumberOfRooms;
	uint NumberOfSalas;
	uint256 NumberOfBathrooms;	    
	uint256 Price_etherValue;
	uint confirmation_Code;
	uint houseAge;
	//買賣家資訊
	address  Owner;
	address  Buyer;
	uint256 Buyer_balance;
	uint256 Owner_balance;
	string Buyer_houseaddress;
	string Owner_houseaddress;
	uint Buyer_nationID;
	uint Owner_nationID;
	string BuyerName;
	string OwnerName;
	string Buyer_Telnumber;
	string Owner_Telnumber;
	
	
	mapping (address => uint256) private balances;
	 
	

	//建構式
	function BuyHouse(/*address owner,string region,uint256 area,uint256 price*/){
		Buyer = msg.sender;//預設買家呼叫contract
	    
	}
    //設定房屋資訊
	function setHouseaddress(string houseaddress){
	    House_address = houseaddress;
	    
	}
	function setHouseAge(uint houseage){
	    houseAge = houseage;
	//    sethouseAgeEvent(houseage,msg.sender,now);
	}
	function setHouseNumberOfRooms(uint number){
	    NumberOfRooms = number;
	//    sethouseNumberOfRoomsEvent(number,msg.sender,now);
	}
	function setHouseNumberOfSalas(uint number){
	    NumberOfSalas = number;
	 //   sethouseNumberOfSalasEvent(number,msg.sender,now);
	}
	function setHouseNumberOfBathrooms(uint number){
	    NumberOfBathrooms = number;
	//    sethouseNumberOfBathroomsEvent(number,msg.sender,now);
	}
	function setHousePrice(uint256 price){
	    Price_etherValue = price;
	//    setPrice_etherValueEvent(price,msg.sender,now);
	}
	//設定買賣家資訊
	function setOwner(address ethaddress){
	    Owner = ethaddress;
	//    setOwnerEvent(ethaddress,msg.sender,now);
	}
	function setBuyerbalance(uint256 balance){
	    Buyer_balance = balance ;
	    
	 //   setBuyerbalanceEvent(balance,msg.sender,now);
	}
	function setOwnerbalance(uint256 balance){
	    Owner_balance = balance ;
	 //   setOwnerbalanceEvent(balance,msg.sender,now);
	}
	function setBuyer_houseaddress(string houseaddress){
	    Buyer_houseaddress = houseaddress;
	 //   setBuyer_houseaddressEvent(houseaddress,msg.sender,now);
	}
	function setOwner_houseaddress(string houseaddress){
	    Owner_houseaddress = houseaddress;
	  //  setOwner_houseaddressEvent(houseaddress,msg.sender,now);
	}
    function setBuyer_nationID(uint ID){
        Buyer_nationID = ID;
     //   setBuyer_nationIDEvent(ID,msg.sender,now);
    }
    function setOwner_nationID(uint ID){
        Owner_nationID = ID;
      //  setOwner_nationIDEvent(ID,msg.sender,now);
    }
    function setBuyerName(string name){
        BuyerName = name;
      //  setBuyerNameEvent(name,msg.sender,now);
    }
    function setOwnerName(string name){
        OwnerName = name;
      //  setOwnerNameEvent(name,msg.sender,now);
    }
    function setBuyer_Telnumber(string tel){
        Buyer_Telnumber = tel;
      //  setBuyer_TelnumberEvent(tel,msg.sender,now);
    }
    function setOwner_Telnumber(string tel){
        Owner_Telnumber = tel;
       // setOwner_TelnumberEvent(tel,msg.sender,now);
        setEvent(tel, msg.sender, now);
    }
    //取得房屋資訊
    function getHouseaddress() constant returns(string houseaddress){
	    return House_address;
	}
	function getHouseAge()constant returns (uint houseage){
	    return houseAge;
	}
	function getHouseNumberOfRooms()constant returns (uint number){
	    return NumberOfRooms;
	}
	function getHouseNumberOfSalas() constant returns(uint number){
	    return NumberOfSalas;
	}
	function getHouseNumberOfBathrooms()constant returns(uint number){
	    return NumberOfBathrooms;
	}
	function getHousePrice() constant returns(uint256 price){
	    return Price_etherValue;
	}
	//取得買賣家資訊
	function getOwner() constant returns(address ethaddress){
	    return Owner;
	}
	function getBuyerbalance()constant returns(uint256 balance){
	    return Buyer_balance;
	}
	function getOwnerbalance()constant returns(uint256 balance){
	    return Owner_balance;
	}
	function getBuyer_houseaddress() constant returns(string houseaddress){
	    return Buyer_houseaddress;
	}
	function getOwner_houseaddress() constant returns(string houseaddress){
	    return Owner_houseaddress;
	}
    function getBuyer_nationID()constant returns(uint ID){
        return Buyer_nationID;
    }
    function getOwner_nationID()constant returns(uint ID){
        return Owner_nationID;
    }
    function getBuyerName()constant returns(string name){
        return BuyerName;
    }
    function getOwnerName()constant returns(string name){
        return OwnerName;
    }
    function getBuyer_Telnumber()constant returns(string tel){
        return Buyer_Telnumber;
    }
    function getOwner_Telnumber()constant returns(string tel){
        return Owner_Telnumber;
    }
    
	//轉帳
	function transfer() {
		//uint256 weiValue = Price_etherValue * 1 ether;

		if (Buyer_balance < Price_etherValue) {
			throw;
		}

		Buyer_balance -= Price_etherValue;
		Owner_balance += Price_etherValue;
		TransferEvent(msg.sender, Owner, Price_etherValue, now);
    //    Buyer_balance = balances[msg.sender];
    //    Owner_balance = balances[Owner];
		//TransferEvent(msg.sender, to, etherValue, now);
	}


}
