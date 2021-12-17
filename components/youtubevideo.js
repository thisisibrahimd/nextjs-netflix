import style from './youtubevideo.module.scss'

const YoutubeVideo = ({ youtubeUrl }) => {
    const youtubeId = youtubeUrl.substring(youtubeUrl.length - 11)

    return (
        <div className={style.embed_container}>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
                
            </iframe>
        </div>
    )
}

export default YoutubeVideo