import "./styles.css";
import { LatLng } from "leaflet";
import React from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import Search from "react-leaflet-search";

class SimpleExample extends React.Component<any, any> {
  provider: any;
  state: Record<string, any>;
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      search: new LatLng(41.009633, 28.965165),
      maxZoom: 13,
      maxBounds: [
        [-90, -180],
        [90, 180]
      ],
      bounds: [
        {
          lat: 33.100745405144245,
          lng: 24.510498046875
        },
        {
          lat: 33.100745405144245,
          lng: 46.48315429687501
        },
        {
          lat: 44.55916341529184,
          lng: 46.48315429687501
        },
        {
          lat: 44.55916341529184,
          lng: 24.510498046875
        }
      ]
    };
  }

  customPopup(SearchInfo: any) {
    return (
      <Popup>
        <div>
          <p>I am a custom popUp</p>
          <p>
            latitude and longitude from search component:{" "}
            {SearchInfo.latLng.toString().replace(",", " , ")}
          </p>
          <p>Info from search component: {SearchInfo.info}</p>
          <p>
            {SearchInfo.raw &&
              SearchInfo.raw.place_id &&
              JSON.stringify(SearchInfo.raw.place_id)}
          </p>
        </div>
      </Popup>
    );
  }

  render() {
    return (
      <Map
        className="simpleMap"
        scrollWheelZoom={true}
        bounds={this.state.bounds}
        maxZoom={this.state.maxZoom}
        maxBounds={this.state.maxBounds}
      >
        <TileLayer
          noWrap={true}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.076602, 30.052495]}>
          <Popup>Marker 1</Popup>
        </Marker>
        <Marker position={[41.076602, 31.052495]}>
          <Popup>Marker 2</Popup>
        </Marker>
        <Search
          className="search"
          customProvider={this.provider}
          onChange={(info) => {
            console.log("FROM onChange: ", info);
          }}
          position="topleft"
          inputPlaceholder="Custom placeholder"
          search={this.state.search}
          showMarker={false}
          zoom={7}
          closeResultsOnClick={true}
          openSearchOnLoad={false}
          // these searchbounds would limit results to only Turkey.
          // providerOptions={{
          //   searchBounds: [
          //     new LatLng(59.4046636, 16.3029234),
          //     new LatLng(39.8826569, 19.7080317)
          //   ],
          //   region: "fr"
          // }}

          // default provider OpenStreetMap
          // provider="BingMap"
          // providerKey="AhkdlcKxeOnNCJ1wRIPmrOXLxtEHDvuWUZhiT4GYfWgfxLthOYXs5lUMqWjQmc27"
        >
          {(info) => (
            <Marker position={info?.latLng}>{this.customPopup(info)}</Marker>
          )}
        </Search>
      </Map>
    );
  }
}

function App() {
  return (
    <div className="App">
      <SimpleExample />
    </div>
  );
}

export default App;
