---
layout: page
title: Agentic Java Formal Verification
description: Multi-agent pipeline that reads Java/Spring Boot code, infers safety properties, and generates JBMC-ready harnesses.
img:
importance: 1
category: systems
github: https://github.com/BrianBai093/Agent-For-Formal-Verification-In-Java
---

This prototype explores how LLM agents can support formal verification workflows for Java systems. The pipeline scans a Spring Boot maintenance-management codebase, extracts relevant classes and methods, infers safety properties, and generates Java harness code that can be checked with JBMC.

## System Design

- Code explorer agent for locating and summarizing Java classes, methods, and control-flow-relevant code slices.
- Property formalizer agent for translating a task description into checkable safety properties such as RBAC, inventory updates, and status transitions.
- Harness generator agent for producing JBMC-ready Java harnesses with nondeterministic inputs and assertions.
- Orchestrator that runs the three phases, persists intermediate artifacts, and records a phase-level summary.

## Technical Scope

- Python, LangChain, YAML configuration, Java source analysis, JBMC-oriented harness generation.
- Structured runtime artifacts for parsed code slices, inferred properties, generated harnesses, and logs.
- Designed as a research prototype for connecting agentic code understanding with more rigorous software verification.
