# SoundSpace

SoundSpace is an interactive web application developed for the online music school "Sound Space". It allows users to explore and practice musical instruments directly in the browser using their mouse or keyboard.
This project was created as part of a proposal for the school's digital transformation, offering a fun and educational environment for users to engage with music virtually.

## ✅ Project Overview

With the rise of online education, music schools have also started to explore virtual platforms. SoundSpace brings this vision to life, offering an intuitive and interactive musical playground.
Users can:

- Select from three available instruments: Piano, Marimba, and Drums.
- Play sounds using mouse clicks or keyboard keys.
- Enjoy simultaneous playback of multiple notes or beats.
- Experience visual feedback with animated key/button presses.
- The app is designed with creativity in mind, as requested by the client, and aims to deliver a delightful and educational experience.

## ✅ Features

🎹 Three fully functional instruments: Piano, Marimba, and Drums.
🖱️ Mouse and keyboard support for playing instruments.
🎨 Visual animations upon interaction (e.g., keypress effects).
🧼 Clean, semantic, and well-structured code following single responsibility principle.
📐 Layout built with Flexbox.
📦 Dockerized for easy deployment and testing.
🚀 Getting Started with Docker

## ✅ Prerequisites:

Docker
(Optional) Docker Compose

1. Build and Run
   Build the Docker image:

`docker build -f Dockerfile2 -t soundspace-app .`

2. Run the container:

`docker run --rm -p 8080:80 soundspace-app`

3. Access the app in your browser at:

http://localhost:8080

## 🗂️ Project Diagram

[![temp-Image21v2-J0.avif](https://i.postimg.cc/SK2j1y5S/temp-Image21v2-J0.avif)](https://postimg.cc/t1bXYHpw)
[![temp-Image6-SC7g-S.avif](https://i.postimg.cc/KztjF0xC/temp-Image6-SC7g-S.avif)](https://postimg.cc/r0FMNCd9)

## 🗂️ Project Structure

[![temp-Imagedy-Z2qp.avif](https://i.postimg.cc/yx5bPySY/temp-Imagedy-Z2qp.avif)](https://postimg.cc/QKQmN5bR)

## 📱 Bonus: Responsiveness

The current version is designed primarily for desktop, but it is potentially extendable to support responsive layouts for mobile devices.

[![temp-Imageh-Kw3-Vy.avif](https://i.postimg.cc/26WbyzFc/temp-Imageh-Kw3-Vy.avif)](https://postimg.cc/Q9XxnZz1) [![temp-Image02w00i.avif](https://i.postimg.cc/D0KWbtx2/temp-Image02w00i.avif)](https://postimg.cc/62Y6k1sS)
[![temp-Imagekory-PI.avif](https://i.postimg.cc/KvxkchKf/temp-Imagekory-PI.avif)](https://postimg.cc/CdrLJtsn)

## 📌 Technical Instruments:

![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

👥 Team

Developed by Team #4 as a learnig project for FemCoders.

## Запуск проекта с помощью Dockerfile2

1. Откройте терминал и перейдите в папку проекта:

   ```sh
   cd /Users/nomi/Documents/FemCoders25/soundspace
   ```

2. Соберите Docker-образ с помощью Dockerfile2:

   ```sh
   docker build -f Dockerfile2 -t soundspace-app .
   ```

3. Запустите контейнер:

   ```sh
   docker run --rm -p 8080:80 soundspace-app
   ```

4. Откройте сайт в браузере:
   [http://localhost:8080](http://localhost:8080)

5. Чтобы остановить контейнер, нажмите `Ctrl+C` в терминале.

## Running the project with Dockerfile2 (English)

1. Open your terminal and navigate to the project folder:

   ```sh
   cd /Users/nomi/Documents/FemCoders25/soundspace
   ```

2. Build the Docker image using Dockerfile2:

   ```sh
   docker build -f Dockerfile2 -t soundspace-app .
   ```

3. Run the container:

   ```sh
   docker run --rm -p 8080:80 soundspace-app
   ```

4. Open your browser and go to:
   [http://localhost:8080](http://localhost:8080)

5. To stop the container, press `Ctrl+C` in the terminal.
