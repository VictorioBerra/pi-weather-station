# pi-weather-station

A raspberry pi weather station using the DHT22 sensor. Uses NodeJS to read sensor data, persist to sqlite db, and serves up data via an API and web interface using expressjs.

## Usage
- `npm install`
- `npm start`
- Make sure your sensor pin number is set correctly in the app.js file.

The database is located at `/home/pi/weatherdb2.sqlite`

## Todo
- Configuration
- Tests
