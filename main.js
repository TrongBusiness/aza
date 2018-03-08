window.onload = function(argument) {

	// var lyric = "i couldn't take it couldn't stand another minute couldn't bear another day without you in it";
  var lyric = `Attractive Bright Brilliant Wonderful Splendid Elegant Exquisite Lavish Lovely Pleasing Pleasing Pleasing Stunning Plush Shimmering
              Graceful Elegant Cher Pretty Cute Charming Angelic Divine Marvelous Beautiful Dainty Captivating Classy Bewitching Gorgeous
              Graceful Elegant Cher Foxy Pretty Cute Charming Charming Striking Divine Beautiful Dainty Captivating Bewitching Gorgeous
              Magnetic Mesmeric Teasing Hottie Adorable Foxy Radiant Sexy Hot Appealing Alluring Beguiling Breathtaking Dainty Dreamy Fabulous Goddess
              Heart-stopping Dreamy Dependable Irresistible Hypnotic Graceful Luscious Perfect Smoking Smoking Striking Special Affectionate Dependable Compassionate Patient Patient Patient
              Irreplaceable Fantastic Courageous Smart Awesome Determined Determined Fun Delightful Thoughtful Thicc Respectful Cute Blessing Blessing Blessing Loving Seductive Magical
              Sassy Feisty Sincere Funny Spontaneous Cheeky Naughty Naughty Naughty Unique Precious Wise Clever Joyful Kind Quirky Witty Rare Yummy Likable Breathtaking Babe Enchanting 
              Attractive Bright Brilliant Splendid Delightful Elegant Exquisite Lovely Pleasing Stunning Plush Shimmering Witty Witty Witty Likable Likable 
              Attractive Bright Brilliant Wonderful Splendid Elegant Exquisite Glorious Lavish Lovely Pleasing Stunning Plush Shimmering Thoughtful Thoughtful
              Graceful Elegant Cher Foxy Pretty Cute Charming Angelic Divine Marvelous Godness Godness Marvelous Beautiful Dainty Captivating Classy Bewitching Gorgeous Striking
              Magnetic Mesmeric Teasing Hottie Adorable Foxy Amazing Radiant Sexy Sexy Sexy Hot Appealing Appealing Appealing Alluring Beguiling Breathtaking Dainty Dreamy Fabulous Goddess
              Heart-stopping Irresistible Hypnotic Graceful Luscious Perfect Smoking Spectacular Striking Special Affectionate Dependable Lovely Lovely Lovely Compassionate Patient
           	  Fantastic Courageous Smart Determined Fun Thoughtful Cute Loving Seductive Magical Magical Compassionate Brilliant Alluring
              Irreplaceable Fantastic Courageous Smart Thoughtful Thicc Cute Blessing Loving Seductive Magical Respectful Respectful Respectful
              Irreplaceable Fantastic Courageous Smart Awesome Determined Fun Delightful Thoughtful Thicc Respectful Cute Blessing Loving Seductive Magical Joyful
              Sassy Feisty Sincere Funny Spontaneous Cheeky Naughty Unique Precious Wise Clever Joyful Kind Quirky Witty Rare Yummy Likable Breathtaking Babe Enchanting 
			  Extraordinary Gifted Inspiring Intoxicating Playful Remarkable Provocative Queen Sugar Talented Unselfish Vulnerable Lovely Lovely Lovely
			  Yummy Yummy Yummy Yummy Seductive Seductive Seductive Seductive Seductive Funny Funny Funny Funny Unique Unique Unique Blessing
              Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Aza Sexy Sexy Charming Charming Charming
			  Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Is Sassy Sassy Sassy Sassy Smoking Smoking
			  Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc Thicc`;
	var words = {};
	var words_attr = [];
	string_handle(lyric);
  //2636
	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		c.fillStyle = 'white';
		c.lineWidth = 5;

		// constructor
		Word = function(key) {
			this.text = key;
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.font = words[key] * 10 + 'px arial'
			this.speed = (words[key]);
		}
		for (key in words) {
			words_attr.push(new Word(key));
		}
		console.log(words_attr.length);

		function animation() {
			for (var i = 0; i < words_attr.length; i++) {
				c.font = words_attr[i].font;
				c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
				words_attr[i].width = c.measureText(words_attr[i].text).width;
				c.stroke();
			}
			move();
		}

		function move() {
			for (var i = 0; i < words_attr.length; i++) {
				if (words_attr[i].x > w) {
					words_attr[i].x = -words_attr[i].width;
					words_attr[i].y = Math.random()*h;
				}else{
					words_attr[i].x += words_attr[i].speed;
				}
			}
		}

		setInterval(function() {
			c.clearRect(0,0,w,h);
			animation();
		},24);

	}

	function string_handle(str) {
		var split_str = str.split(" ");
		var word_array = [];
		var word_count = [];
		for (var i = 0; i < split_str.length; i++) {
			check = true;
			for (var j = 0; j <= word_array.length; j++) {
				if (split_str[i] == word_array[j]) {
					word_count[j]++;
					check = false;
					break;
				}
			}
			if (check) {
				word_array.push(split_str[i]);
				word_count.push(1);
			}
		}
		for (var i = 0; i < word_array.length; i++) {
			words[word_array[i]] = word_count[i];
		}
		return words;
	}

}