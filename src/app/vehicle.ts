export interface Vehicle
{
    vtsDeviceId:string;
    villageName:string;
    vehicleRegistrationNumber:string;
    tripPoint:tripPoint;
    gpsState:gpsState;
}
export interface tripPoint
{
    remainingDistance:number;
    purpose:string;
    actualArrival:number;
    place:place;
}

export interface place
{
    name:string;
}
export interface gpsState
{
    State :string;
    endLocation:endLocation;
    startLocation:startLocation;
}

export interface endLocation
{
    address:string;
    lngLat:number;
    odometer:number
    Course:string;
    latitude:number;
    longitude:number;
}

export interface startLocation
{
    address:string;
    lngLat:number;
    odometer:number
    Course:string;
    latitude:number;
    longitude:number;
}
