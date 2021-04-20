

export default function MarketNews(props){
    return(
        <div className="market-news" >
            
            <div className="market-title">
                <p>{props.title}</p>
            </div>
            <div className="market-body">
                <p>{props.text}</p>
            </div>
            <div className="market-date">
                <p>{props.date}</p>
            </div>
        </div>
    );
}