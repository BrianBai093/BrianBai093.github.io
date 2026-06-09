---
layout: page
title: AI-Powered Pet Companion Robot
description: Raspberry Pi pet companion robot integrating real-time vision, motion control, cloud analysis, and dashboarding.
img:
importance: 4
category: course
github: https://github.com/BrianBai093/AIOT-Pet-Accompany-AI-Bot
---

This Columbia AIoT project builds an AI-powered pet companion robot around a Raspberry Pi 5. I led the computer vision and machine learning components, integrating on-device perception, motion control, cloud analysis, and a browser dashboard.

## System Overview

- Real-time pet detection using YOLO on Raspberry Pi 5.
- Auto-follow behavior with steering and speed adjustment to keep the pet centered.
- Distance maintenance and obstacle-avoidance safeguards through sensor feedback.
- FastAPI / Flask-style API surfaces for robot control and cloud analysis.
- Web dashboard for live camera monitoring, manual control, mode switching, and telemetry.
- Cloud pipeline for image/video upload, behavior summarization, daily logs, and pet emotion insights.

## My Contributions

- Led the computer vision and ML components of the project.
- Built real-time dog detection and tracking logic on Raspberry Pi 5.
- Integrated sensor-informed motion control for follow, stop, and safety behavior.
- Developed cloud APIs for automated image capture, behavior analysis, and reusable emotion-insight endpoints.
- Built a VGG16-based pet emotion classifier and connected it to the backend analysis pipeline.

## Technical Scope

- Python, Raspberry Pi 5, YOLO, OpenCV, FastAPI/Flask, JavaScript dashboarding.
- Cloud APIs for image/video upload and analysis.
- Daily JSONL activity logs and emotion-insight summaries.
- 19 Python files, about 3.1K lines of Python code, and 1 experiment notebook.
