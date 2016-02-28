# Chatter

## What

A chatroom which you can chat publicly, you can view who is online, you can set up a room with your room code and anyone can join, there is an endpoint to clear the database (typed in to the username box)
The chat can distinguish if you were the one who sent the message
Private message

## How

Individually:

* I will set up the html and css

* In what form the data will be sent to the server

* How & when the data will be stored in the database

* How & when the data will be retrieved

* How socket will deal with the data

Database data to deal with: username, password, messages, time, room(assigned random number or 0 for public);

Learn to deal with socket on disconnect, socket connect, socket on message sent, message received

Steps (Do separately, no linking):

1. HTML and CSS layout and onClick events, spacing and formatting, but no object, string manipulation or testing
This will be good for conceptualizing what will be going on - keep it basic


2. Set up the necessary onclick events to create usable/sendable strings, these functions will be tested with jasmine

3. Set up an xhr in script.js which will send data to the server

4. Work out & decide the best way to handle this data looking at the layouts of rug1, sofer's layout, etc

5. Set up a socket.js file and decide when this will be used

6. Play with redis in command line and make sure that I can set and get all needed data

7. Set up a redis.js file and test (mocking) to see if things are being added to the database in the intended way

8. Send data back to server from redis

9.
