# 11e-foxhole.com Official Website

![11e-foxhole.com Official Website](resume-screenshot.jpg?raw=true '11e-foxhole.com Official Website')
<div align="center">

## 11e-foxhole.com Website is based on React-resume-template forked from [tbakerx](https://github.com/tbakerx/react-resume-template)

</div>

### View the [live version here.](https://11e-foxhole.com)

## Description

This repository contains 11e-foxhole.com website which is maintained by the 11th Brigade (Warden) from Foxhole PC game.

**Our official discord: [Discord](https://discord.com/invite/11e)**

## Howto
### 1. Install dependencies and run

Once you have your own copy of this repo, open the folder in your favorite terminal and run `yarn install` to install dependencies. Following this, run `yarn dev` to run the project. In your terminal you should be given the url of the running instance (usually http://localhost:3000 unless you have something else running).

### 2. Customize the data to make it your own

All of the data for the site is driven via translations in `/src/locales/<lang>/common.json`. This is where you'll find the existing text content, and updating the values here will be reflected on the site. If you have the site running as described above, you should see these changes reflected on save. Example images can be found at `src/images/` and are rendered in `public/images`. They support locale and sizes to be reflected as `public/images/imageName-Lang-Size.webp`. To change, simply update these images using the same name and location, or add new images and update the imports. 

Also, if you need some help, take a look at [the contribute doc](CONTRIBUTE.md) !

### 3. Make any other changes you like

Of course, all of the code is there and nothing is hidden from you so if you would like to make any other styling/data changes, feel free!

### 4. Autodeployed through Cloudflare Pages

As the repository is directly connected to Cloudflare Pages, every dev working on the repository can have a direct preview of what they've done.

|Branch| Cloudflare Environment|URL|
|------|-----------------------|---|
|  *   |None                   |No URL to display|
|staging|Preview|https://stgsite.11e-foxhole.com/|
|main|Production/Live|https://11e-foxhole.com

## Project Created & Maintained By

### NapoSky

<a href="https://steamcommunity.com/id/napoleon59w/"><img src="https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Steam.png?raw=true" width="55"></a><a href="https://www.linkedin.com/in/amompach/"><img src="https://github.com/aritraroy/social-icons/blob/master/linkedin-icon.png?raw=true" width="60"></a>

[![GitHub followers](https://img.shields.io/github/followers/naposky.svg?style=social&label=Follow)](https://github.com/naposky/)

#### Binouz *(as senior knowledge support)*

<a href="https://www.linkedin.com/in/aubin-rebillat-b3a8584b/"><img src="https://github.com/aritraroy/social-icons/blob/master/linkedin-icon.png?raw=true" width="30"></a>

[![GitHub followers](https://img.shields.io/github/followers/binouz.svg?style=social&label=Follow)](https://github.com/binouz/)

#### Tim Baker *(maintainer of react-resume-template)*

<a href="https://twitter.com/timbakerx"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="30"></a><a href="https://instagram.com/tbakerx"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="30"></a>

[![GitHub followers](https://img.shields.io/github/followers/tbakerx.svg?style=social&label=Follow)](https://github.com/tbakerx/)

