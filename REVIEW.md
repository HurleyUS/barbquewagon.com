# FALLOW REVIEW

## HEALTH

## Vital Signs

| Metric | Value |
|:-------|------:|
| Total LOC | 2877 |
| Avg Cyclomatic | 2.7 |
| P90 Cyclomatic | 4 |
| Dead Files | 5.0% |
| Dead Exports | 3.6% |
| Maintainability (avg) | 96.7 |
| Circular Deps | 0 |
| Unused Deps | 0 |

## Fallow: 3 high complexity functions

| File | Function | Severity | Cyclomatic | Cognitive | CRAP | Lines |
|:-----|:---------|:---------|:-----------|:----------|:-----|:------|
| `app/catering/catering-form.tsx:25` | `CateringForm` | critical | 27 **!** | 14 | 756.0 **!** | 226 |
| `app/contact/contact-form.tsx:26` | `ContactForm` | critical | 19 | 10 | 380.0 **!** | 183 |
| `app/catering/catering-form.tsx:31` | `handleSubmit` | moderate | 5 | 4 | 30.0 **!** | 48 |

**20** files, **43** functions analyzed (thresholds: cyclomatic > 20, cognitive > 15, CRAP >= 30.0)



## AUDIT


Audit scope: 8 changed files vs main (ccce13d..HEAD)
✓ No issues in 8 changed files (0.31s)


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
- Coverage: 14.29%
- Documented symbols: 4/28
- Missing docstrings: 24

