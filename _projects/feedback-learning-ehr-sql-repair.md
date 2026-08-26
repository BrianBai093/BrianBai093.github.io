---
layout: page
title: Feedback Learning for EHR SQL Repair
description: Controlled SFT and GRPO study on diagnostic feedback as a learnable signal for EHR database agents.
img:
importance: 1
category: research
github: https://github.com/BrianBai093/EHR-ChatQA
---

**Feedback Learning for EHR SQL Repair** is a completed research project at National Zhijiang Lab, with a manuscript in preparation. The project studies when tool and diagnostic feedback becomes a learnable signal for EHR database agents that must repair failed SQL queries.

The work is built on the EHR-ChatQA environment and focuses on a controlled follow-on research question rather than claiming authorship of the original benchmark. The fixed task setting uses EHR database questions, SQL execution, and semantic answer matching to evaluate repair behavior.

> Paper status: manuscript in preparation.

## Research Question

The project asks whether feedback-conditioned models learn transferable error-recovery behavior or merely depend on a particular feedback representation. The same faulty SQL cases are rendered with four nested feedback levels:

- L0: an outcome-only failure signal.
- L1: raw SQL tool observations.
- L2: parsed diagnostic categories.
- L3: corrective guidance without leaking the gold SQL or answer.

## What I Built

- Designed a controlled feedback-learning study for EHR SQL repair using MIMIC-IV Star cases.
- Fine-tuned Qwen3.5-9B with QLoRA adapters under four feedback conditions and multiple random seeds.
- Built evaluation pipelines for semantic repair success, strict tool-call compliance, task-clustered confidence intervals, permutation tests, and Holm correction.
- Implemented target-free GRPO experiments with binary execution rewards to test whether feedback value changes when correct SQL targets are removed.
- Preserved oracle-assisted versus naturally observable feedback boundaries to avoid overstating deployment realism.

## Current Evidence

The SFT phase completed 12 QLoRA adapters across four feedback levels and three seeds. Evaluation covered 13 model groups, four test feedback levels, and 10,400 repair records.

- SFT produced strong absolute repair performance but did not show a stable incremental benefit from richer feedback beyond the L0 condition.
- Pre-registered matched gains for L1, L2, and L3 were small, roughly +1 to +2 percentage points, and did not meet the effectiveness criteria.
- In the target-free GRPO exploration, L2 showed a +10.0 percentage-point matched gain with a task-clustered 95% CI of [+4.0, +16.5] and exploratory Holm-adjusted p = 0.0228.
- The GRPO result remains exploratory because it is based on one seed and is partly driven by oracle-assisted wrong-result diagnoses.

## Technical Scope

- Python, PyTorch, QLoRA, LlamaFactory, SQL execution evaluation.
- EHR-ChatQA, MIMIC-IV Star, SQLite-backed EHR queries.
- SFT and GRPO post-training experiments.
- Statistical testing with clustered confidence intervals and multiple-comparison correction.
- Manuscript figures, experiment manifests, checkpoint receipts, and reproducibility records.
