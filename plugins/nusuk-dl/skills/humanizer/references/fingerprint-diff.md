# Humanizer · fingerprint-diff mode

Invoked with `/humanizer --diff` or "how close is this to my voice" or "run a fingerprint diff."

No rewriting. Scores the input text against `~/.claude/voice-fingerprint.json`. Useful before a writing session to calibrate, or after a draft to verify.

**What to measure** (compute from the input, compare to fingerprint):

1. **Sentence length** — extract all sentences, compute mean. Report deviation from fingerprint mean in standard deviations.
2. **Connector frequency** — count the top-10 fingerprint connectors in the input. Report which are present vs. absent, and whether frequency ratio is higher/lower than fingerprint.
3. **Punctuation density** — commas/sentence and em-dashes/100 words. Report the delta.
4. **Spanish ratio** — word-level Spanish marker ratio. Report vs. fingerprint.
5. **Overall similarity score** — 0–100. Weight: sentence length 30%, connectors 30%, punctuation 20%, Spanish ratio 20%.

**Score interpretation:** >80 = very close to your voice. 60–80 = recognizable. <60 = drifted.

**Output format:**

```
Fingerprint diff — [file or "input text"]

Sentence length:    X.X words avg  (yours: Y.Y ± Z.Z)  → ON TARGET / +N σ longer / -N σ shorter
Connector usage:    N/10 top connectors present          → HIGH MATCH / MODERATE / LOW
Punctuation:        X.X commas/sentence (yours: Y.Y)    → ON TARGET / HIGHER / LOWER
Spanish ratio:      X.XX  (yours: Y.YY)                 → MATCHING / MORE SPANISH / MORE ENGLISH

Overall voice similarity: NN/100 — [Very close / Recognizable / Drifted]

Biggest drifts from your voice:
- [specific deviation with example sentence]
- [specific deviation]
```

If the fingerprint file is missing, tell the user: "Run `python3 scripts/voice-indexer.py` (in this skill's folder) first." Do not guess or estimate without real fingerprint data.

---
