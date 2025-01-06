const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放 
    audio: [

    {
        name:'懐古',
        artist:'藤間仁',
        url:'https://mr-hongtn.oss-cn-shenzhen.aliyuncs.com/%E8%97%A4%E9%96%93%E4%BB%81%20-%20%E6%87%90%E5%8F%A4.flac',
        cover: 'https://p1.music.126.net/zDoZtG0NE7fJ4H3ZnA2aCw==/109951169541188907.jpg?param=200y200'
    },
	{
        name: 'snowfall (Slowed + Reverb)',
        artist: 'Øneheart / reidenshi',
        url: 'https://mr-hongtn.oss-cn-shenzhen.aliyuncs.com/snowfall-neheart.mp3',
        cover: 'https://p1.music.126.net/nUY5QfLTPfmK4n2Dy2bMsQ==/109951167177161525.jpg?param=200y200',
    }
	]
});
