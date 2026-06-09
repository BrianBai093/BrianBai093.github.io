---
layout: page
title: TrueShot
description: P2P blockchain prototype for photo provenance verification and network security analysis.
img:
importance: 5
category: course
github: https://github.com/BrianBai093/computer_network_project_team2
---

**TrueShot** is a computer networks course project that implements a peer-to-peer photo provenance prototype. Devices sign photo-capture records with ECDSA, peers gossip transactions and proof-of-work blocks, and users verify uploaded images as authentic, suspicious, or unknown through exact hashes and perceptual-hash matching.

## System Design

- Application layer: wallets, ECDSA device signatures, image SHA-256 hashes, perceptual hashes, capture, verification, endorsement, and revocation workflows.
- Blockchain layer: transactions, blocks, Merkle roots, mining, mempool management, chain validation, and longest-valid-chain replacement.
- P2P network layer: tracker-based peer discovery, peer HTTP APIs, gossip propagation, duplicate-message tracking, synchronization, and fork handling.
- Web layer: Flask UI for device registration, photo capture, verification, endorsements, and block exploration.

## Security Testing

The project includes local attack demos to test protocol assumptions and failure modes:

- Forged longest-chain replacement.
- Tracker poisoning.
- Gossip sender URL spoofing.
- Mempool flooding.
- Image tampering detection.

The project report documents a LAN demo where forged-chain replacement compromised 3 of 3 live nodes, replacing a chain of height 3 with an attacker-controlled chain of height 31.

## Engineering Scope

- Python, Flask, Requests, ECDSA, SHA-256, Merkle trees, proof-of-work, P2P gossip, Pillow, ImageHash, pytest.
- 43 Python files and about 4.8K lines of Python code.
- Project test report documents 69 passing tests across blockchain, network, application, and web layers.

This project is listed as a systems/security course project rather than research experience.
