"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

import { useEffect } from "react";

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  day?: number;
  description?: string;
}

interface TourRouteMapProps {
  locations: Location[];
}

/* --------------------------------
   CUSTOM ORANGE MARKER
-------------------------------- */

const createMarkerIcon = (day: number) => {
  return new L.DivIcon({
    className: "custom-tour-marker",

    html: `
      <div class="tour-marker-wrapper">

        <div class="tour-marker">
          ${day}
        </div>

        <div class="tour-marker-shadow"></div>

      </div>
    `,

    iconSize: [44, 52],
    iconAnchor: [22, 52],
    popupAnchor: [0, -52],
  });
};


/* --------------------------------
   FIT MAP TO ROUTE
-------------------------------- */

function FitRoute({
  locations,
}: {
  locations: Location[];
}) {
  const map = useMap();

  useEffect(() => {
    if (!locations.length) return;

    const bounds = L.latLngBounds(
      locations.map((location) => [
        location.lat,
        location.lng,
      ])
    );

    map.fitBounds(bounds, {
      padding: [50, 50],
    });
  }, [locations, map]);

  return null;
}


/* --------------------------------
   MAP COMPONENT
-------------------------------- */

export default function TourRouteMap({
  locations,
}: TourRouteMapProps) {

  const center: [number, number] = [
    locations[0]?.lat ?? 31.7917,
    locations[0]?.lng ?? -7.0926,
  ];

  const route = locations.map(
    (location) =>
      [location.lat, location.lng] as [
        number,
        number
      ]
  );

  return (
    <div className="tour-map-wrapper">

      {/* HEADER */}

      <div className="tour-map-header">

        <div>
          <span className="tour-map-label">
            MOROCCO TOUR ROUTE
          </span>

          <h3 className="tour-map-title">
            Your Journey Through Morocco
          </h3>
        </div>

        <div className="tour-map-badge">
          {locations.length} Stops
        </div>

      </div>


      {/* MAP */}

      <div className="tour-map-container">

        <MapContainer
          center={center}
          zoom={6}
          scrollWheelZoom={false}
          dragging={true}
          doubleClickZoom={true}
          zoomControl={false}
          className="tour-map"
        >

          {/* MAP STYLE */}

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />


          {/* FIT ROUTE */}

          <FitRoute
            locations={locations}
          />


          {/* ROUTE SHADOW */}

          <Polyline
            positions={route}
            pathOptions={{
              color: "#ffffff",
              weight: 10,
              opacity: 0.9,
            }}
          />


          {/* ORANGE ROUTE */}

          <Polyline
            positions={route}
            pathOptions={{
              color: "#f28c28",
              weight: 5,
              opacity: 1,
              lineCap: "round",
              lineJoin: "round",
            }}
          />


          {/* LOCATIONS */}

          {locations.map(
            (location, index) => (

              <Marker
                key={location.id}
                position={[
                  location.lat,
                  location.lng,
                ]}
                icon={createMarkerIcon(
                  location.day ?? index + 1
                )}
              >

                <Popup>

                  <div className="tour-popup">

                    <div className="tour-popup-day">
                      DAY {location.day ?? index + 1}
                    </div>

                    <div className="tour-popup-title">
                      {location.name}
                    </div>

                    {location.description && (
                      <div className="tour-popup-description">
                        {location.description}
                      </div>
                    )}

                  </div>

                </Popup>

              </Marker>

            )
          )}

        </MapContainer>


        {/* MAP LEGEND */}

        <div className="tour-map-legend">

          <div className="legend-route"></div>

          <span>
            Tour route
          </span>

        </div>

      </div>


      {/* LOCATION LIST */}

      <div className="tour-map-locations">

        {locations.map(
          (location, index) => (

            <div
              key={location.id}
              className="tour-map-location"
            >

              <div className="location-number">
                {location.day ?? index + 1}
              </div>

              <div>
                <div className="location-day">
                  DAY {location.day ?? index + 1}
                </div>

                <div className="location-name">
                  {location.name}
                </div>
              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}