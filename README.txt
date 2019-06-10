I built this Web Application to test some of the features of the Spotify API. 
It is built with Angular 7 and is hosted by Express. 
The application passes authentication credentials back and forth from the Express server and uses an Angular Service class to make API calls. 

Features includes:
1) A search function that searches Spotify's Database by artist name
2) Dynamic artist pages in these search results containing albums
3) Category page displaying images and links to playlist
4) A page containing new releases.

To use this app install all the dependencies and add a .env file to the backend folder containing CLIENT_ID and CLIENT_SECRET from the Spotify Developer Account.

The application will work without being logged into Spotify. However, if you are not logged in it will play only a thirty second clip of each song. To hear the whole songs login to your spotify account.
