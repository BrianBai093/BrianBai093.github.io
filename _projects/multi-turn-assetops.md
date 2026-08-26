---
layout: page
title: Multi-Turn AssetOps
description: Supervisor-Specialist multi-agent architecture for industrial asset operations and maintenance.
img:
importance: 3
category: research
github: https://github.com/BrianBai093/AssetOpsBench
---

**Multi-Turn AssetOps** studies tool-centric LLM agents for industrial asset operations and maintenance. The project focuses on realistic multi-turn workflows where users ask follow-up questions about sensor evidence, anomaly analyses, failure causes, and maintenance plans.

> Paper status: manuscript under submission.

I proposed and designed the **Supervisor-Specialist** architecture and iteratively optimized it under guidance from IBM Research mentors. The architecture replaces a linear Plan-Execute baseline with a supervisor-routed multi-agent workflow that decomposes industrial diagnosis into domain-specialized modules.

## My Contributions

- Proposed the Supervisor-Specialist architecture for multi-turn industrial O&M agents.
- Designed the architecture-level shift from a single Plan-Execute agent to a routed workflow with a Supervisor and specialists for data collection, time-series analysis, failure reasoning, and maintenance planning.
- Designed structured cross-turn artifact reuse so sensor datasets, anomaly analyses, failure hypotheses, and maintenance recommendations can be preserved as reusable evidence.
- Iteratively optimized routing, artifact reuse, and MCP tool execution to reduce redundant tool calls and improve multi-turn latency.
- Analyzed trade-offs between standard specialist routing and a parallel tool-execution variant.

## System Design

The system uses a Supervisor agent to interpret each user turn, inspect conversation state and available artifacts, decide whether more evidence is needed, and dispatch the next specialist. Specialists operate over domain-specific MCP tools with validation and tool-call safeguards.

Core components include:

- LangGraph-based orchestration.
- MCP tools for IoT data, time-series foundation models, failure-mode sensor reasoning, work orders, and utilities.
- Structured artifact memory for cross-turn evidence reuse.
- Pydantic schemas for task envelopes, artifact envelopes, tool-call summaries, and dialog state.
- Profiling across LLM calls, tool calls, and database queries.

## Reported Results

The system was evaluated on 16 multi-turn industrial O&M dialogs covering fault diagnosis, predictive maintenance, operational monitoring, maintenance planning, and full-pipeline remediation workflows.

- Planning effectiveness improved by 54.5%.
- Task completion improved by 37.8%.
- Tool-time share decreased from 47.3% to roughly 26%.
- Follow-up turns became about 4.2x faster after artifact reuse.
- Standard Supervisor-Specialist achieved the best wall time among the compared variants, while the parallel variant exposed token/context growth and tail-latency trade-offs.

This project shaped my interest in agent systems that are evaluated not only by final-answer quality, but also by tool-call reliability, memory reuse, latency decomposition, and deployment-relevant cost.
