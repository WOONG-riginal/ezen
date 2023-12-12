function loadVideos() {
    const apiKey = '발급받은 구글API키';
    const apiUrl = 'https://www.googleapis.com/youtube/v3/videos';
    const selectedCategory = document.getElementById('category-select').value;

    const params = {
        part: 'snippet, statistics',
        chart: 'mostPopular',
        regionCode: 'KR',
        videoCategoryId: selectedCategory,
        maxResults: 10,
        key: apiKey,
    };

    const apiUrlAddParams = `${apiUrl}?${Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&')}`;

    fetch(apiUrlAddParams)
    .then(response => response.json())
    .then(data => {
        const videosContainer = document.getElementById('videos-container');
        // 기존 동영상 목록 초기화
        videosContainer.innerHTML = '';

        data.items.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.classList.add('video-card');
            videoElement.innerHTML = 
            `
                <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
                    <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
                    <h2>${video.snippet.title}</h2>
                    <p>${video.snippet.channelTitle}</p>
                    <p>조회수: ${video.statistics.viewCount}</p>
                </a>
            `;
            
            videosContainer.appendChild(videoElement);
        });
    })
    .catch(error => console.error('Error fetching videos:', error));
}

loadVideos();
