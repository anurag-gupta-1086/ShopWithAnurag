const forgotPasswordTemplate = (link) => {
    return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>Forgot Password Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
		</style>
	
	</head>
	
	<body>
		<div class="container">
			<div class="message">Forgot Password Email</div>
			<div class="body">
				<p>Dear User,</p>
				<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
				<p>Please click on the following link, or paste this into your browser to complete the process:</p>
                <a href=${link} type='_blank'>${link}</a>
                <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
			</div>
		</div>
	</body>
	
	</html>`;
}

module.exports = forgotPasswordTemplate;