# web0
GA SEI Admissions Assignment



<!DOCTYPE html>

<head>
  <title>About Joe Coburn</title>
  <link href="https://fonts.googleapis.com/css?family=Unica+One" rel="stylesheet">
  <style>
    body {
      text-align: center;
      background: url("https://i.imgur.com/3kKCAk5.jpg");
 	  background-size: cover;
 	  background-repeat: no-repeat;
      background-position: center;
      color: #aaa;
      font-family: georgia;
    }
    p {
      font-size: 24px;
      max-width: 800px;
      margin: 0 auto;
    }
    img {
      border: 6px solid #91d9cd;
      border-radius: 130px;
     }
    h1 {
      font-family: 'Unica One', cursive;
      color: #91d9cd;
      font-size: 38px;
    }

    h2 {
      font-family: 'Unica One', cursive;
      color: #91d9cd;
      font-size: 20px;
    }

  </style>
</head>
<body>
<br>
<br>
<br>
	<script>
		var i = 0;
		var images = [];
		var time = 7000;

		images[0] = 'https://i.imgur.com/vmY70y6.png';
		images[1] = 'https://i.imgur.com/wbqfHoO.png';
		images[2] = 'https://i.imgur.com/4oolLlW.png';
		images[3] = 'https://i.imgur.com/Xxmoddw.png';

		function changeImg(){
			document.slide.src = images[i];

			if(i < images.length - 1){
				i++;
			} else {
				i = 0;
			} 

			setTimeout("changeImg()", time);
		}

		window.onload = changeImg;

	</script>

	<img name="slide" width="400" height="400">

<br>
<br>
<br>
<br>
  <h1>About Me</h1>
  <p>
  	My name is Joseph Coburn. I love exploring and seeing new things. I love travelling. That's when I'm really in my element. Surrounding myself with different people, cultures, traditions, foods, and landscapes gives me so much gratitude for life. I'm happy being challenged with new circumstances in an unfamiliar place, too. One thing that I love most is seeing deep similarities between people who are superficially different. 
  </p>

<h1>Background</h1>
  <p>
  	I moved to California from my hometown in Pennsylvania a few years after finishing high school. I came here with my girlfriend, Heather. We never imagined we'd be living in LA, but we made it! We love spending time in nature, watching movies, travelling, eating delicious food, and spending time with our two beautiful cats/children, Kiwi and Lyla.
  </p>

<br>
<br>
<br>
<br>
<h2>Email: josephLcoburn@gmail.com</h2>
<h2>Call/text: (310) 733-7676</h2>
<h2>Social Media: <a href="https://www.linkedin.com/in/joseph-coburn/">LinkedIn</a>
</h2>

</body>
