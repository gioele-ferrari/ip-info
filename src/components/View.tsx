import { Map, Marker } from "pigeon-maps";

interface DataProps {
    latitude: number;
    longitude: number;
}

interface ViewProps {
    data: DataProps;
}

function View(props: ViewProps) {
    const { data } = props;

    if (!data || !data.latitude || !data.longitude) {
        return null;
    }

    return (
        <div className="view-map fl-column">
            <Map defaultCenter={[data.latitude, data.longitude]} defaultZoom={11} mouseEvents={false} touchEvents={false}>
                <Marker width={50} anchor={[data.latitude, data.longitude]} />
            </Map>
        </div>
    );
}

export default View;
