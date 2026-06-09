---
layout: page
title: Malicious URL Detection
description: Security-oriented ML project combining LSTM URL sequence modeling with handcrafted structural URL features.
img:
importance: 7
category: course
github: https://github.com/BrianBai093/Malicious-URL-Detection
---

This project builds a hybrid malicious URL classifier. It combines sequence modeling over tokenized URLs with handcrafted structural features such as entropy, URL length, digit counts, IP-address presence, special-character counts, and domain/subdomain statistics.

## Project Scope

- Implemented LSTM-based sequence learning over raw URL strings.
- Extracted handcrafted statistical and structural URL features.
- Fused learned URL sequence representations with structured feature inputs.
- Evaluated binary good/bad classification using confusion matrix, classification report, and ROC-AUC.
- Exported extracted features to CSV for inspection and reuse.

## Technical Stack

- Python, TensorFlow / Keras, scikit-learn, pandas, NumPy, Matplotlib, Seaborn.
- Security-focused feature engineering and neural classification.
