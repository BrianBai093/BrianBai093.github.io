---
layout: page
title: Cellular Network Traffic Prediction
description: Final-year ML project for cellular throughput forecasting with CNN-LSTM sequence modeling and XGBoost residual correction.
img:
importance: 6
category: course
github: https://github.com/BrianBai093/FYP-Traffic-Prediction-in-Cellular-Networks-using-Machine-Learning
---

This final-year project studies cellular network throughput prediction from time-series signal metrics. The system combines preprocessing, anomaly handling, sequence-window construction, CNN-LSTM modeling, and XGBoost-based residual correction to forecast network throughput from multi-feature cellular data.

## Project Scope

- Cleaned and normalized cellular signal metrics with categorical network type and locality features.
- Used Isolation Forest for anomaly detection before model training.
- Built sliding-window time-series samples for supervised forecasting.
- Implemented a hybrid CNN-LSTM model to learn local temporal features and longer-range sequential patterns.
- Added XGBoost residual correction to improve prediction accuracy after neural forecasting.
- Produced evaluation metrics and visualizations comparing predicted and true throughput.

## Technical Stack

- Python, pandas, NumPy, scikit-learn, TensorFlow / Keras, XGBoost, Matplotlib, Seaborn.
- Time-series forecasting, anomaly detection, feature scaling, neural sequence modeling, and residual boosting.
