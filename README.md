# Telegram Mini App Sticker Store

## Overview

<b>Sticker Store!</b> is a demo Telegram Mini App that showcases curated TON sticker packs inside the Telegram ecosystem.
The interface is optimized for compact screens, supports Web3 wallets via TON Connect, lets users share the app link through the Telegram WebApp Share API with instant haptic feedback, and presents a sticker-pack carousel grid built with Swiper.js. Mock data is fetched from public/packs.json to simulate a real GET request.

- One-tap TON Connect: a dedicated entry point for linking a TON wallet.
- Share & confirm: Telegram WebApp Share API triggers vibration for instant confirmation.
- Smooth browsing: Swiper.js carousel of sticker packs.
- Realistic data flow: packs loaded from public/packs.json via fetch.

> Launch the mini app from the official Telegram Messenger. [Telegram.org](https://telegram.org/).

## Node and npm versions

Use the Node and npm versions specified in `package.json` under the `engines` field (`node` 22.x, `npm` 10.x). Because tooling is sensitive to engine mismatches, stick to those versions even if newer releases are available.

For convenience, a `.nvmrc` file is provided:

- Run `nvm use` in the project root (reads `.nvmrc`). If the version isn’t installed, run `nvm install` first.

## Installation

1. Clone the repository to your local machine using `git clone https://github.com/Khazady/telegram-mini-app-sticker-store.git`.
2. Navigate to the root project directory.
3. Install dependencies `npm install`.
4. Start the development server `npm run dev`.
5. Build and preview the production bundle: `npm run build` then `npm run preview`.

## Technologies Used

React Telegram-SDK TypeScript CSS Modules Vite Swiper.js

## Project Architecture

Atomic Design – components are organized into atoms, molecules, organisms, and layout primitives tailored for Telegram Mini Apps.
CSS Modules – styling is authored per component with shared theme tokens in `src/styles`.
