### Node Directory Player

The aim of this project is to create a Graphical User Interface (GUI) player
that maps its library directly to the user's selected `Music/` folder.

 - A playlist is a direct read from a folder
 - Moving media around playlists will react on the filesystem
 - Importing media to a playlist will insert that media to its relevant folder
 - Root folders of media content can be added and would resemble the root of a
 unix machine in structure.


## Installation

Debian 8 Jessie amd64
```bash
$ sudo apt-get install libasound2-*
$ npm install
```

The dependency install of `node-gyp` may fail, if so then try:
```bash
$ rm -rf ~/.node-gyp
$ npm install
```
This should rebuild the `node-gyp` dependency by running `node-gyp rebuild`
