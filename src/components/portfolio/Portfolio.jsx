import "./portfolio.scss";



const Portfolio = ({ cards }) => {
    return (
        <div className="portfolio">
            <div className="wrapper">
                <h1 className="portfolio__title">
                    My <span>Portfolio</span>.
                </h1>
                <div className="portfolio__cards">
                    {cards.map((card, index) => (
                        <div className="card" key={index}>
                            <div className="card__img" >
                                <a href={card.img} target="blank">
                                    <img src={card.img} alt="" className="img-img" />
                                </a>
                            </div>
                            <div className="card__info">
                                <time dateTime={card.date} className="card__info-btn">
                                    {card.date}
                                </time>
                                <h1 className="card__info-title">
                                    {card.title}
                                </h1>
                                <p className="card__info-txt">
                                    {card.description}
                                </p>
                                <ul className="card__list">
                                    {card.technologies.map((tech, idx) => (
                                        <li className="card__list-item" key={idx}>
                                            <img src={tech} alt="" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
