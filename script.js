//your JS code here. If required.
 function InitialData(){
		 return new Promise((resolve,reject)=>{
			 setTimeout(()=>{
				 resolve([1,2,3,4])
			 },3000)
		 })
 }
InitialData().then((data)=>{
	 // alert(data);
	return data.filter(num=>num%2==0);
	
}).then((num)=>{
		// alert(num)


		return new Promise((resolve)=>{
	setTimeout(()=>{
		 document.getElementById('output').innerText =num

		
		resolve(num) 
	},1000) 

	})
}).then((value)=>{
	// alert(value)
	
	return value.map((data)=>data*2)
}).then((number)=>{
	// alert(number)
	setTimeout(()=>{
		document.querySelector("#output").innerText=number
	},3000)
})



