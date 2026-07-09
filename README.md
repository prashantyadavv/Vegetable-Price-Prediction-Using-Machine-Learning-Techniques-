# 🌾 Mandi Price Prediction Using Machine Learning

Predict agricultural commodity prices using Machine Learning trained on historical mandi market data from **Data.gov.in**. The application provides real-time price predictions through a FastAPI-powered REST API.

🔗 **Live Demo:** https://vegetable-price-prediction-using-machine.onrender.com/

---

## 📌 Overview

Agricultural commodity prices fluctuate due to various market factors, making it difficult for farmers and traders to make informed selling decisions. This project leverages Machine Learning to forecast mandi prices using historical market data, helping stakeholders make data-driven decisions.

The application compares multiple regression models and serves predictions through a FastAPI backend.

---

## ✨ Features

- Predict prices of agricultural commodities using historical mandi data.
- Compared multiple Machine Learning algorithms:
  - Linear Regression
  - Decision Tree Regressor
  - Random Forest Regressor
- Achieved an **R² Score of 0.998** with the best-performing model.
- REST API built with **FastAPI** for real-time predictions.
- Clean and lightweight deployment on Render.

---

## 📊 Dataset

- **Source:** Data.gov.in
- Historical mandi market data
- Includes agricultural commodities such as:
  - Vegetables
  - Fruits
  - Cereals
  - Pulses
  - Spices
  - Other crops

---

## 🛠️ Tech Stack

- Python
- Pandas
- NumPy
- Scikit-learn
- Machine Learning
- Predictive Analytics
- FastAPI
- REST API

---

## 🚀 Model Performance

| Model | Performance |
|--------|------------|
| Linear Regression | Evaluated |
| Decision Tree Regressor | Evaluated |
| Random Forest Regressor | **Best Model (R² = 0.998)** |

---

## 📂 Project Structure

```
├── app.py
├── model.pkl
├── label_encoders.pkl
├── requirements.txt
├── templates/
├── static/
├── dataset/
└── README.md
```

---

## ▶️ Run Locally

### Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Run the application

```bash
uvicorn app:app --reload
```

Open:

```
http://127.0.0.1:8000
```

---

## 🌍 Live Deployment

**Render:** https://vegetable-price-prediction-using-machine.onrender.com/

---

## 🎯 Sustainable Development Goal (SDG)

This project supports **UN Sustainable Development Goal 2 – Zero Hunger** by enabling data-driven agricultural price forecasting, improving market transparency, and assisting farmers and traders in making informed pricing decisions.

---

## 📈 Future Improvements

- Weather-based price prediction
- Time-series forecasting (LSTM/XGBoost)
- Interactive dashboard
- Price trend visualization
- Multi-language support
- Mobile-friendly interface

---

## 👨‍💻 Author

**Prashant Yadav**

If you found this project useful, don't forget to ⭐ the repository!
