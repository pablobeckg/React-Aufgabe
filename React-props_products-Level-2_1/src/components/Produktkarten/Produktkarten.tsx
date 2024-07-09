import './Produktkarten.css'

interface IProduktkarten {
    preis: string,
    name: string,
    bild: string
}

const Produktkarten:React.FC<IProduktkarten> = (props) => {
    return (
        <div>
            <img src={props.bild} alt="blog post" />
            <h2>{props.name}</h2>
            <h2>{props.preis}</h2>
            <button>BUY NOW</button>
        </div>
       
    );
}
 
export default Produktkarten;