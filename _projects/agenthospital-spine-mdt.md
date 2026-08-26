---
layout: page
title: AgentHospital / Spine MDT
description: Ongoing research and teaching prototype for traceable preoperative multi-agent MDT planning.
img:
importance: 4
category: research
github: https://github.com/BrianBai093/AgentHospital
---

**AgentHospital / Spine MDT** is an ongoing research and teaching prototype for simulated multidisciplinary spine-surgery planning from manually screened preoperative evidence. The system turns clinical-record screenshots, laboratory screenshots, and spine images into durable intermediate artifacts, then coordinates specialist agents to produce a traceable simulated plan.

This project is not a medical device, cannot provide clinical clearance, and does not replace review by qualified clinicians. The technical focus is on multi-agent orchestration, evidence boundaries, privacy-preserving image access, structured disagreement, and conservative finalization.

## System Design

The workflow creates four durable preparation artifacts before discussion:

- `case_preop.md` from ordered clinical-record screenshots.
- `tests_preop.md` from ordered laboratory screenshots.
- `case_summary.md` from the completed text transcriptions.
- `radiology_preop.md` from case summary plus preoperative images.

The MDT then samples independent first opinions, runs a moderated dynamic discussion, and performs evidence-only final synthesis and blind review.

## Key Engineering Choices

- Built with FastAPI, LangGraph, SQLite checkpointing, Pydantic schemas, OpenAI-compatible providers, and SSE progress events.
- Enforced role-specific evidence boundaries: the Radiologist is the only MDT role that can inspect raw images, while the Moderator and text specialists never receive raw image bytes, filenames, or local paths.
- Added bounded page transcription with one image per request, a small previous-page context tail, deterministic appending, and no retry loop for failed pages.
- Implemented batched radiology review, targeted image addenda, byte-identical radiology caching, and privacy-preserving cache records.
- Designed v5 convergence logic with a shared operative working plan, field-level specialist stances, and deterministic field status for procedure name, levels, approach, decompression extent, and fusion or fixation.
- Added forced-finalization and fail-closed behavior so unresolved warnings, missing consensus, or critical-model failures are preserved rather than silently converted into an unsupported plan.

## Research Relevance

The project explores how high-stakes multi-agent systems should handle heterogeneous evidence, specialist disagreement, missing information, and output authorization boundaries. It is especially relevant to trustworthy agent design because a useful system must separate evidence extraction, specialist reasoning, moderator routing, and final synthesis instead of collapsing them into one opaque answer.

## Technical Scope

- Python 3.12, FastAPI, LangGraph, Pydantic, OpenAI SDK, Pillow, SQLite checkpoints.
- Multi-agent routing, role prompts, structured output validation, retry policy, and state persistence.
- Preoperative-only data boundary, radiology-only image access, and structured source IDs.
- Offline pytest suite with deterministic fake providers for workflow and safety-boundary validation.
