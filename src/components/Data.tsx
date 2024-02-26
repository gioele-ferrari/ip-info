interface ItemProps {
  data: {
    ip: string;
    city: string;
    region: string;
    country_name: string;
    latitude: number;
    longitude: number;
  };
}

function Item(props: ItemProps) {
  return (
    <div className="data">
        <h1 className="data-title">Data</h1>
        <ul className="data-list">
            <li className="data-item">
                <img src="./img/block.png" width={35} height={35}  alt={""}></img>
                Ip: <span className="data-item-result">{props.data.ip}</span>
            </li>
            <li className="data-item">
                <img src="./img/block.png" width={35} height={35}  alt={""}></img>
                Città: <span className="data-item-result">{props.data.city}</span>
            </li>
            <li className="data-item">
                <img src="./img/block.png" width={35} height={35}  alt={""}></img>
                Regione: <span className="data-item-result">{props.data.region}</span>
            </li>
            <li className="data-item">
                <img src="./img/block.png" width={35} height={35}  alt={""}></img>
                Paese: <span className="data-item-result">{props.data.country_name}</span>
            </li>
            <li className="data-item">
                <img src="./img/block.png" width={35} height={35}  alt={""}></img>
                Latitudine: <span className="data-item-result">{props.data.latitude}</span>
            </li>
            <li className="data-item">
                <img src="./img/block.png" width={35} height={35}  alt={""}></img>
                Longitudine: <span className="data-item-result">{props.data.longitude}</span>
            </li>
        </ul>
    </div>
  );
}

export default Item;