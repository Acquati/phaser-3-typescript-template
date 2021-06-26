<p align="center">
  <img width=60% src="static/images/phaser3-logo.png">
</p>

# Phaser 3 Typescript Template

A [Phaser 3 Framework](https://phaser.io/phaser3) template for [Typescript](https://www.typescriptlang.org/) compiled with [Parcel v2](https://v2.parceljs.org/).

## Setup

### Prerequisites

Install [Node.js](https://nodejs.org/en) and [Yarn](https://classic.yarnpkg.com/en/docs/install).

### Installing

```bash
git clone https://github.com/acquati/phaser-3-typescript-template.git
cd phaser-3-typescript-template
yarn install
yarn run dev
```

Access [localhost:8080](http://localhost:8080/) in your browser.

## Troubleshoot

### Update NPM & YARN global command on Ubuntu

```bash
sudo apt update
sudo apt upgrade
sudo apt autoremove

sudo npm install npm -g

sudo npm cache clean -f
sudo npm install -g n
sudo n stable

sudo npm install --global yarn
```

### Update packages

```bash
yarn add -D parcel@next parcel-reporter-static-files-copy typescript
yarn add phaser
```
