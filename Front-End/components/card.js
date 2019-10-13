

const Card = () => {

    const imageUrl = 'https://s2.15min.lt/static/cache/NDAweDI2MCwxMTI1eDQxNSw2MTY2NTMsb3JpZ2luYWwsLGlkPTQ5OTI4NTgmZGF0ZT0yMDE5JTJGMTAlMkYwMSwzNzgyMjMxMjgz/su-seima-vietname-5d930f7c15208.jpg';
    const heading = 'Į Vietnamą su vaikais: kiek kainuoja šeimai keliauti po šalį ir kaip tą daryti';
    const baseUrl = 'https://www.15min.lt'
    const url = '/pasaulis-kiseneje/naujiena/kelioniu-istorijos/i-vietnama-su-vaikais-kiek-kainuoja-seimai-keliauti-po-sali-ir-kaip-ta-daryti-629-1213594'


    return (
        <div>
            <a href={baseUrl + url}><img src={imageUrl} /></a>
            <h3>{heading}</h3>
        </div>
    )

}

export default Card