# Spotify Application

## Overview

React-JS Application that enables you to search for and listen to any song inside of Spotify's Database.

## How the Application Works

You enter a specific song in the input field that you would wish to listen to, upon pressing enter the application 
will generate a list of songs that correspond to the search term that you queried for. Once the list has
been generated you can click on the song you wish to listen to, after clicking you'll then be directed to a new tab where you can 
listen to the song.

## Technologies Used

JSX, CSS, Javascript, React-JS, and the Axios Library.

## How to get the Application Started

First, go to https://developer.spotify.com/documentation/web-api in-order to Login to your existing Spotify account,
if you don't have an account then you can Create an account. 
Once you've logged-in or created a Spotify account you'll
be directed to the dashboard where you'll click the "Create-app" button and select Web API for the question asking which
APIs are you planning to use.

Once you've created your Application you will have access to the App Credentials the Client ID and Client Secret you
will need these credentials in-order for the App to properly function.

Second, clone the app onto your local machine, after cloning you want to enter the directory that contains
all of the project files and run npm install in-order to install all the dependencies that the project relies 
upon. Open it up on a code editor and create a .env file. Enter your Client ID and Client Secret into this .env
file as shown below: 

REACT_APP_SPOTIFY_API_ID = XXXXXXXXXXXXXXXXXX                         
REACT_APP_SPOTIFY_CLIENT_SECRET = XXXXXXXXXXXXXXXXXX

Finally, run npm start in-order to open up the application on the browser.
