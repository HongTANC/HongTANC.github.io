const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'snowfall (Slowed + Reverb)',
        artist: 'Øneheart / reidenshi',
        url: 'https://m804.music.126.net/20250106143418/d0fe8aa32051167f540644d785d9c92a/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/13544929054/1250/ebba/1341/7e86a0134dc3cb0f7cab03b5554cc62c.m4a?vuutv=w0OVpL6zElE1uIyB/ZBVP9s8Qdg9ArfZfYb1OqituEXF48k6tGCiPjH0my28g5j6Y08cFNMPuC8jXEgOTSF13nm6zWkn4tE3NhncnyU/C00=&authSecret=000001943a3b64520a990a3b192502f2',
        cover: 'https://p1.music.126.net/nUY5QfLTPfmK4n2Dy2bMsQ==/109951167177161525.jpg?param=200y200',
    }, 
    {
        name:'Astronaut.',
        artist:'go missing',
        url:'https://m10.music.126.net/20250106144813/c381e23c8e58523407fec2c8bf505971/ymusic/5452/515f/005a/c81ecb8ab0f5af6f304a70136788d70f.mp3?vuutv=c9Z8eYwPSRvkSmqdWPXixN5rNqv2uDRWOywVX7eFNE8ul3oRHp79/AXdPS3oz3ynnDEIISTeF6ioJYHQKcHKbZu3nzK6CQN17BUyjoL1gns=',
        cover: 'https://p2.music.126.net/UEoh9bJbk0SfmmIJX-PkGQ==/109951166203608231.jpg?param=200y200'
    }
	]
});
