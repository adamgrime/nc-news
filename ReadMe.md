# [NC News](https://ag-nc-news.netlify.app/)


# 1. Introduction

I have created this Northcoders news webpage as my frontend project during my time on the [Northcoders](https://www.northcoders.com/) 13 week Javascript bootcamp. 

The [NC News](https://ag-nc-news.netlify.app/) has the following features:

  - View List of Articles
  - Filter by Article Topic
  - Sort by various properties
  - View List of article comments
  - Post comment
  - Delete Comments as a signed in user
  - Voting on articles

  Upon first opening the webpage, all available articles are rendered. You can filter through article topics using the navigation bar. You are also able to sort articles from both the home page and the individual topic pages for articles with highest / lowest comments, most / least votes and oldest / most recent. Upon clicking on the article headline you are sent to the specific article page from where you see further information such as comments and the main article body. This is where the commenting feature becomes available, meaning you can post, and if the comment belongs to you, delete comments. 

## Run Locally
### Requirements

node - v16.4.2

### Cloning & Set-up

#### Clone the project

```bash
  git clone https://github.com/adamgrime/nc-news.git
```

#### Go to the project directory

```bash
  cd nc-news
```

#### Install dependencies

```bash
  npm install
```

### Starting

#### Start React App

```bash
  npm run start
```


## Tech Stack

**App:** Node, React, HTML & CSS