const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放 
    audio: [
    {
        name:'懐古',
        artist:'藤間仁',
        url:'https://music.163.com/song/media/outer/url?id=2150490377.mp3',
        cover: 'https://p1.music.126.net/zDoZtG0NE7fJ4H3ZnA2aCw==/109951169541188907.jpg?param=200y200'
    },
	{
        name: 'snowfall (Slowed + Reverb)',
        artist: 'Øneheart / reidenshi',
        url: 'https://m801.music.126.net/20250106220831/95a02d65dc5526640eed0d2fe888d7e3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/13544929057/6147/b47e/b6bb/91387740ee4c9d5327c31200e539e962.mp3?vuutv=TfL5XDU1RqZa5Xx4z58l2/HfNCXe6sTlG6oMmR6JOsR50KEIzEKLi1fYiIBE4RPKoz5eI6G99BeUGoKQ/I8w3ovtQdFp5Mbb1/VMnvhdE8GA7kvoUQxids8b0FeJPwuc6QUMHRSdJwhc0R3hc3SbdQ==',
        cover: 'https://p1.music.126.net/nUY5QfLTPfmK4n2Dy2bMsQ==/109951167177161525.jpg?param=200y200',
    }
	]
});
