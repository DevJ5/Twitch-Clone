# Twitch clone

Demo
![twitch-clone.gif]

This twitch clone application allows the user to login with Google and start streaming.

Suggested setup with OBS:

```bash
# Run api (json.db)
cd /api
yarn
yarn start

# Run the RTMP server
cd /rtmpserver
yarn
yarn start

# Run the client
cd /client
yarn
yarn start
```

OBS can be tricky to get to work. 4 important things:

- Create a scene
- Set up audio and display capture
- Setup the stream server to point to rtmp://localhost/live
- Set the stream key to whatever the id is of your stream
  ![](https://i.ibb.co/Lg3H4yL/twitch-setup.png)
