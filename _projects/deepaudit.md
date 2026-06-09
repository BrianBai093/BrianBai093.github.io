---
layout: page
title: DeepAudit
description: Agentic claim-level reproducibility auditing for machine learning papers and code repositories.
img:
importance: 1
category: research
---

**DeepAudit: Agentic Evidence-Based Auditing of Machine Learning Reproducibility** is an independent research project on automated ML reproducibility auditing. The system takes a paper PDF and a companion code repository, extracts verifiable claims, maps them to executable repository tasks and metric contracts, runs candidate experiments in isolated environments, and aligns runtime evidence back to paper claims with structured verdicts.

The project is motivated by a gap in current reproducibility checks: a repository being installable or runnable does not necessarily show whether the paper's quantitative claims are supported by executable evidence. DeepAudit frames reproducibility auditing as claim-level evidence alignment rather than a binary repository execution test.

## What I Built

- Designed and implemented the full research prototype independently.
- Built a 23-step Python pipeline spanning paper ingestion, table/figure-aware claim extraction, repository analysis, RAG-assisted code indexing, environment repair, autonomous execution, evidence parsing, verdict assignment, scoring, and report generation.
- Implemented structured artifact schemas for claims, executable tasks, metric contracts, runtime evidence, failure reasons, and verdicts.
- Added conservative verification logic to distinguish metric disagreement from missing data, incompatible environments, ambiguous entry points, unlogged metrics, and compute limits.

## Evaluation

DeepAudit was evaluated on public ML paper-code pairs with both clean and initially broken repositories.

- 10 ML paper-code pairs.
- 64 pre-specified audit targets.
- 1,101 extracted claims.
- 988 code-verifiable claims, covering 89.7% of extracted claims.
- 49 metric contracts.
- 52 of 64 experiment specifications executed, an 81.2% execution rate.
- Recovered executable or diagnostic evidence for all five initially broken repositories.

## Technical Scope

- Python, Pydantic, pytest, NumPy, Matplotlib.
- PDF-to-Markdown and figure/table extraction.
- LLM-assisted claim extraction and evidence alignment.
- Conda/mamba/venv environment management.
- Agentic execution and bounded repair for real ML repositories.
- Structured Markdown and JSON audit reports.

The manuscript is under review / in preparation. Public materials intentionally avoid exposing review-sensitive details beyond the high-level project description.
