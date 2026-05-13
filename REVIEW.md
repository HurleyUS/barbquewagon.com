# FALLOW REVIEW

## HEALTH

## Vital Signs

| Metric | Value |
|:-------|------:|
| Total LOC | 2977 |
| Avg Cyclomatic | 2.6 |
| P90 Cyclomatic | 4 |
| Dead Files | 4.0% |
| Dead Exports | 2.7% |
| Maintainability (avg) | 96.4 |
| Circular Deps | 0 |
| Unused Deps | 0 |

## Fallow: 4 high complexity functions

| File | Function | Severity | Cyclomatic | Cognitive | CRAP | Lines |
|:-----|:---------|:---------|:-----------|:----------|:-----|:------|
| `app/catering/catering-form.tsx:25` | `CateringForm` | critical | 27 **!** | 14 | 756.0 **!** | 226 |
| `app/contact/contact-form.tsx:26` | `ContactForm` | critical | 19 | 10 | 380.0 **!** | 183 |
| `scripts/ship.mts:21` | `run` | high | 7 | 6 | 56.0 **!** | 15 |
| `app/catering/catering-form.tsx:31` | `handleSubmit` | moderate | 5 | 4 | 30.0 **!** | 48 |

**25** files, **57** functions analyzed (thresholds: cyclomatic > 20, cognitive > 15, CRAP >= 30.0)



## AUDIT


Audit scope: 0 changed files vs main (41c90ba..HEAD)
✓ No issues in 0 changed files (0.12s)


## DEAD

## Fallow: 2 issues found

### Unused files (1)

- `components/layout/index.ts`

### Unused exports (1)

- `lib/structured-data.ts`
  - :6 `BUSINESS_INFO`




## DUPLICATION

note: hid 3 clone groups below minOccurrences=3 (lower --min-occurrences to see them)
## Fallow: no code duplication found



## DOCSTRINGS

### Docstring Coverage

- Status: fail
- Coverage: 35.14%
- Documented symbols: 13/37
- Missing docstrings: 24

