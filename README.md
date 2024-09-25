# :newspaper: Portugal News API
![news-api-screenshot](https://github.com/user-attachments/assets/1a779f73-7700-4e44-abd7-688ed7887f2c)

- :link: Link on Render: https://api-news-portugal.onrender.com/news


## 🔎 Overview

The News Scraping API is designed to provide users with easy access to the latest news articles from various main Portuguese news outlets. This API collects news articles in real-time, offering a streamlined way to collect and display the most recent headlines.
In update.


## ⭕ Endpoints

  - /news
  - (Others soon...)


## :star2: Features

- Scrapes articles from multiple sources:
  - ✅ Observador
  - ✅ CM Jornal
  - ✅ SIC Notícias
  - ✅ CNN Portugal
  - ✅ RTP
  - ✅ EuroNews
  - ❌ Público
  - ❌ Jornal Nacional
  - ❌ Diário de Notícias
  - ❌ Expresso
- Returns news articles in JSON format
- Simple and easy-to-use API
- ❌CronJob (every 5 minutes)


## 🔧 Tech Stack

- **Node.js**: Server-side development
- **Express.js**: API
- **Axios**: Websites HTTP requests
- **Cheerio**: Manipulating HTML
- **JSON**: Data format


## ⬇️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git

2. Navigate to the project directory:
   ```bash
   cd api-news-portugal

3. Install the dependencies:
   ```bash
   npm install

## ▶️ Run

1. Run the scraper:
   ```bash
   node mainScraper.js

2. Run the API   :
   ```bash
   node app.js

2. Open the browser:
   - http://127.0.0.1:3000/news

