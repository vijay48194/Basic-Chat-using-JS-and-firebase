 var database = firebase.database();

function sendMsg(){
	var newMsg=$("#newMsg").val();
	database.ref("/messages").push().set({
	author:"vijay",
	body:newMsg
	})
	$("#newMsg").val("");
}
$("#sendBtn").click(sendMsg);


database.ref("/messages").on("child_added",function(snapshot){
	var message=snapshot.val();
	$("#msgList").append(`
		<div>
		${message.body}
		</div>
		`)
})