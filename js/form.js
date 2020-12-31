
		$("#btn").click(() => {
			var name = $('#name').val()
			var email = $('#email').val()
			var atposition=email.indexOf("@");  
			var dotposition=email.lastIndexOf("."); 
			var number = $('#number').val()
			var message = $('#message').val()
			var data = $("#submit-form").serialize()
			console.log(data);

			if (name === "" ) {
				alert("please enter a name")
			}else if (name.length<3) {
				alert("Enter a real name")
			}else if (email === "") {
				alert("please enter a email address")
			}else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {
				alert("Enter a valid email id")
			}else if (number === "" ) {
				alert("please enter the contact number")
			}else if (number.length!=10 ) {
				alert("Enter a valid phone number")
			}else if (isNaN(number)) {
				alert("Enter a valid phone number")
			}else if (message === "") {
				alert("please leave a message")
			}else if (message === "{10}") {
				alert("Enter a valid phone number")
			}else {
				$.ajax({
					method: "post",
					url: "https://script.google.com/macros/s/AKfycbxuxkAY5rrDfPiloP24pt4JaCXGS1mK977F1Gy1/exec",
					data: $("#submit-form").serialize(),
					success:function (response){
                		alert("Form submitted successfully")
                   		window.location.reload()
                	},
            		error:function (err){
                    	alert("Something Error")
					}
				})
			}
		})
