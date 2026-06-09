---
layout: page
title: ConvNeXt and ViT for Hierarchical Open-Set Image Classification
description: Two-stage hierarchical image classifier with open-set recognition for super-class and sub-class prediction.
img:
importance: 3
category: course
github: https://github.com/BrianBai093/TransferLearning-ConvNeXt-and-Vision-Transformer-for-Hierarchical-Open-Set-Image-Classification
---

This Columbia Neural Networks and Deep Learning project implements a two-stage hierarchical open-set image classification pipeline. The system first predicts a super-class and then routes the image to a super-class-specific sub-class classifier, with support for novelty rejection through confidence thresholding and OpenMax.

## Project Scope

- Built a two-stage hierarchical recognition pipeline in PyTorch.
- Implemented interchangeable ImageNet-pretrained ConvNeXt and ViT backbones for controlled comparison.
- Added super-class and sub-class classifier heads, validation splitting, checkpointing, metric logging, and reproducible evaluation utilities.
- Implemented OpenMax-based open-set recognition and compared it with softmax thresholding.
- Evaluated on a 6,288-image dataset with 3 super-classes and 87 sub-classes.

## Results

- Improved unseen sub-class recognition from 62.24% to 82.22% using ConvNeXt on a held-out novel split.
- Compared softmax thresholding at 91.60% with OpenMax at 59.60% for novelty rejection in the project setting.
- Produced training logs, metric JSON files, prediction CSVs, and visualization scripts for confusion matrices, open-set ROC curves, and confidence distributions.

## Technical Details

- Python, PyTorch, torchvision, pandas, NumPy.
- ConvNeXt and ViT transfer learning.
- Hierarchical classification with super-class-specific sub-heads.
- Open-set recognition with OpenMax and confidence thresholding.
- 12 Python files, about 2.6K lines of Python code, and 4 experiment notebooks.
