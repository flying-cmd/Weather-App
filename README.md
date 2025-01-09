## Run guide:
Step 1:
```bash
git clone https://github.com/flying-cmd/Weather-App.git
cd Weather-App
```

Step 2: Install Dependencies
```bash
npm install
```

Step 3: Replace Weatherstack API key (optional)

If you want to use your own Weatherstack API key, please replace my key in the URL of the axios request part in ```controllers/weatherController.js``` with your key. You can refer to https://weatherstack.com/documentation#query_parameter

Step 4: Start the server
```bash
npm start
```
The server will start on http://localhost:3000. You can open your browser and enter the address to access.


## Technologies Used:
Frontend: HTML, CSS, Javascript, Bootstrap

Backend: Express.js

API: Weatherstack API