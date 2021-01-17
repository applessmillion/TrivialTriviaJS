<html lang="en-US">
<head>
	<style>
		html{
			padding:0px;
			margin:0px;
			font-family:sans-serif;
			background:#efefef;
		}
		iframe{
			border:0px;
			border-radius:4px;
			overflow:hidden;
			width:100%;
		}
		#trivia-container{
			background:#00002d;
			border:4px black solid;
			margin:5px;
			color:white;
			width:65vw;
			max-width:980px;
			min-width:925px;
			border-radius:5px;
		}
		#trivia-frame{
			min-width:925px;
			width:100%;
			max-height:580px;
			height:50vw;
			min-height:525px;	
		}
		#chat-container{
			border:4px black solid;
			margin:5px;
			border-radius:5px;
			margin-right:10px;
			width:40vw;
			max-width:460px;
			background:#00002d;
		}
		#chat-frame{
			min-width:300px;
			max-width:460px;
			width:40vw;
			max-height:580px;
			height:50vw;
			min-height:545px;
			color:white;
		}
		#trivia-main-content{
			margin:auto;
			text-align:center;
			background:grey;
			display:flex;
			justify-content:center;
		}
		
		#chat-title{
			background:#00002d;
			color:orange;
			margin:6px 0px;
		}
		#trivia-title{
			background:#00002d;
			color:white;
			margin:6px 0px;
		}
	</style>
</head>
<body>
	<main id="trivia-main-content">
		<div id="trivia-container">
			<div id="trivia-header">
				<h2 id="trivia-title">Among Us (Sample Title)</h2>
			</div>
			<iframe id="trivia-frame" title="Trivia" allowfullscreen=true loading=lazy src="https://engine.trivialtrivia.net/themes/theme.html"></iframe>
		</div>
		<div id="chat-container">
			<div id="chat-header">
				<h2 id="chat-title">Chat on Newgrounds (Sample Title)</h2>
			</div>
			<iframe id="chat-frame" title="NG Chat" loading=lazy src="https://chat.newgrounds.com"></iframe>
		</div>
	</main>
</body>
</html>