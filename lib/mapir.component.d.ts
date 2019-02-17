import { AfterViewInit, EventEmitter } from "@angular/core";
import { LatLng, LatLngBoundsExpression, WMSOptions } from "leaflet";
export declare class MapirComponent implements AfterViewInit {
    polygonInfo: {
        polygon: LatLngBoundsExpression;
        fitBound: boolean;
    };
    layerOptions: WMSOptions;
    mapPosition: LatLng;
    markerPositions: [LatLng];
    markerIconUrl: String;
    mapZoom: Number;
    viewChange: EventEmitter<boolean>;
    markerPositionsChange: EventEmitter<LatLng>;
    private map;
    private currentLayer;
    private readonly layerBaseUrl;
    private markerIcon;
    private currentPolygon;
    private currentMarker;
    private markersGroup;
    private isRoadView;
    ngAfterViewInit(): void;
    getViewPortCenter(): LatLng;
    private initMap();
}
