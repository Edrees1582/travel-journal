export default function Card(props) {
    const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props;

    return (
        <div className='card'>
            <img src={imageUrl} alt={title} className='image' />
            <div className='card-info'>
                <div className='location-info'>
                    <div>
                        <i className="fa-solid fa-location-dot" style={{color: '#F55A5A'}}></i> {location.toUpperCase()} <a href={googleMapsUrl} target='_blank' rel='noreferrer' className='google-maps'>View on Google Maps</a>
                    </div>
                    <div className='title'>
                        {title}
                    </div>
                </div>
                <div className='date-desc'>
                    <div className='date'>
                        {startDate} - {endDate}
                    </div>
                    <div className='desc'>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}