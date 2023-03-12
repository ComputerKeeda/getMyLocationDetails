# getMyLocationDetails

"getMyLocationDetails" provides information about the location of the device. It gives detailed information about the geographic location of the device.

## Installation

    npm i getmylocationdetails

> this package is based on es-6 and uses async/await.
## Usage

Congratulations! It looks like you're ready to start using the "getMyLocationDetails" package . With the "`pleaseGiveMyDetails`" function, you can easily retrieve accurate details about your device's location.

Simply import the function from the package using the code provided:

    import { pleaseGiveMyDetails } from 'getMyLocationDetails'

Then, use the function to retrieve your device's location details. This can be especially useful for developers who need to access location-based services or track their devices for testing purposes.

    let myLocationDetails = await pleaseGiveMyDetails();

this will await the result of the function and store the location details in the "myLocationDetails" variable.

value stored in "myLocationDetails" will be an object with the following properties:

    {
    range: [ 20XXXXXXX, 20XXXXXXXX ],
    country: 'IN',
    region: 'DL',
    eu: '0',
    timezone: 'Asia/Kolkata',
    city: 'New Delhi',
    ll: [ XX.6014, XX.1989 ],
    metro: 0,
    area: 100
    }

Once you have the location details, you can use them for a variety of purposes, such as displaying them on a map or using them for location-based services.

## Example

    import { pleaseGiveMyDetails } from 'getMyLocationDetails';

    const myLocation = async () => {
        let myLocationDetails = await pleaseGiveMyDetails();
        console.log(myLocationDetails);
    }

    myLocation();

the above code will log the location details of the device to the console.

    {
        range: [ 20XXXXXXX, 20XXXXXXXX ],
        country: 'IN',
        region: 'DL',
        eu: '0',
        timezone: 'Asia/Kolkata',
        city: 'New Delhi',
        ll: [ XX.6014, XX.1989 ],
        metro: 0,
        area: 100
    }


With "getMyLocationDetails", you can easily access accurate and detailed information about your device's location. So what are you waiting for? Get started today!
